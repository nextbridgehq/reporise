/**
 * evidence-semantics.mjs — Evidence Semantics Layer for RepoRise M9.2.
 *
 * Sits between the Cross-Document Evidence Graph and Surface Scoring.
 *
 * Core Principles:
 * 1. Provenance Hierarchy: Classifies evidence into Tiers P0, P1, P2, and P3.
 * 2. Cross-Source Deduplication: Identical commands, code blocks, and headings
 *    appearing across multiple documents are counted only once.
 * 3. Regression Risk Guardrails:
 *    - Inflation Defense: Caps maximum contributions from external/nested pages.
 *    - Source Substitution Guard: External docs cannot fully substitute for an
 *      inadequate root README on the SEO surface.
 *    - Overreach Guard: Restricts evidence extraction to entry/quickstart contexts.
 *    - Fail-Closed: Quarantines unreachable or broken targets.
 */

import { NODE_TYPES, RESOLUTION_STATUS, sha256 } from './evidence-graph.mjs';

export const PROVENANCE_TIERS = {
  P0_ROOT: 'P0',             // Primary root README (highest trust, baseline)
  P1_LOCAL_DOCS: 'P1',       // Local /docs/ and workspace packages (high trust)
  P2_VERIFIED_EXTERNAL: 'P2',// Whitelisted official docs via root link (verified)
  P3_EXCLUDED: 'P3',         // Secondary, unreachable, or unverified targets (excluded)
};

// Maximum contribution caps to guard against document inflation
export const SEMANTIC_CAPS = {
  MAX_EXTERNAL_CODE_BLOCKS: 6,
  MAX_NESTED_CODE_BLOCKS: 8,
  MAX_EXTERNAL_HEADINGS: 10,
  MAX_NESTED_HEADINGS: 12,
  MAX_SUBSTITUTION_SEO_BOOST: 15, // Cap on how much external docs can boost SEO score
};

/**
 * Normalizes code snippets and commands for deduplication comparison.
 */
function normalizeSnippet(str) {
  if (typeof str !== 'string') return '';
  return str
    .toLowerCase()
    .replace(/\r?\n/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Normalizes heading titles for deduplication comparison.
 */
function normalizeHeading(str) {
  if (typeof str !== 'string') return '';
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '')
    .trim();
}

/**
 * Classifies every node in the evidence graph into its Provenance Tier.
 */
export function classifyProvenanceTiers(graph) {
  const tieredNodes = {
    [PROVENANCE_TIERS.P0_ROOT]: [],
    [PROVENANCE_TIERS.P1_LOCAL_DOCS]: [],
    [PROVENANCE_TIERS.P2_VERIFIED_EXTERNAL]: [],
    [PROVENANCE_TIERS.P3_EXCLUDED]: [],
  };

  for (const node of graph.nodes) {
    if (node.resolution_status !== RESOLUTION_STATUS.RESOLVED) {
      tieredNodes[PROVENANCE_TIERS.P3_EXCLUDED].push({ ...node, tier: PROVENANCE_TIERS.P3_EXCLUDED });
      continue;
    }

    if (node.type === NODE_TYPES.ROOT_README) {
      tieredNodes[PROVENANCE_TIERS.P0_ROOT].push({ ...node, tier: PROVENANCE_TIERS.P0_ROOT });
    } else if (node.type === NODE_TYPES.NESTED_DOC || node.type === NODE_TYPES.WORKSPACE_MEMBER) {
      tieredNodes[PROVENANCE_TIERS.P1_LOCAL_DOCS].push({ ...node, tier: PROVENANCE_TIERS.P1_LOCAL_DOCS });
    } else if (node.type === NODE_TYPES.EXTERNAL_DOC) {
      tieredNodes[PROVENANCE_TIERS.P2_VERIFIED_EXTERNAL].push({ ...node, tier: PROVENANCE_TIERS.P2_VERIFIED_EXTERNAL });
    } else {
      tieredNodes[PROVENANCE_TIERS.P3_EXCLUDED].push({ ...node, tier: PROVENANCE_TIERS.P3_EXCLUDED });
    }
  }

  return tieredNodes;
}

/**
 * Performs semantic deduplication across evidence nodes.
 * Slices through tiers in order of trust (P0 -> P1 -> P2).
 */
export function deduplicateEvidence(tieredNodes) {
  const seenHeadings = new Set();
  const seenCodeSnippets = new Set();
  const seenInstallCommands = new Set();

  const deduplicated = {
    headings: [],
    code_blocks: [],
    install_commands: [],
    stats: {
      total_raw_headings: 0,
      total_deduped_headings: 0,
      total_raw_code_blocks: 0,
      total_deduped_code_blocks: 0,
      duplicate_headings_dropped: 0,
      duplicate_code_dropped: 0,
    },
  };

  const processNode = (node, tier) => {
    // 1. Process headings
    for (const h of node.structural_summary?.headings || []) {
      deduplicated.stats.total_raw_headings++;
      const norm = normalizeHeading(h.title);
      if (!norm || seenHeadings.has(norm)) {
        deduplicated.stats.duplicate_headings_dropped++;
        continue;
      }
      seenHeadings.add(norm);
      deduplicated.headings.push({
        title: h.title,
        level: h.level,
        tier,
        source_id: node.id,
      });
      deduplicated.stats.total_deduped_headings++;
    }

    // 2. Process code blocks
    for (const cb of node.structural_summary?.code_blocks || []) {
      deduplicated.stats.total_raw_code_blocks++;
      const norm = normalizeSnippet(cb.sample);
      if (!norm || seenCodeSnippets.has(norm)) {
        deduplicated.stats.duplicate_code_dropped++;
        continue;
      }
      seenCodeSnippets.add(norm);
      deduplicated.code_blocks.push({
        lang: cb.lang,
        lines: cb.lines,
        sample: cb.sample,
        tier,
        source_id: node.id,
      });
      deduplicated.stats.total_deduped_code_blocks++;
    }

    // 3. Process install signals
    if (node.structural_summary?.has_install_signals) {
      if (!seenInstallCommands.has(tier)) {
        seenInstallCommands.add(tier);
        deduplicated.install_commands.push({
          tier,
          source_id: node.id,
          source_uri: node.source_uri,
        });
      }
    }
  };

  // Process strictly in order of trust: P0 -> P1 -> P2
  for (const n of tieredNodes[PROVENANCE_TIERS.P0_ROOT] || []) processNode(n, PROVENANCE_TIERS.P0_ROOT);
  for (const n of tieredNodes[PROVENANCE_TIERS.P1_LOCAL_DOCS] || []) processNode(n, PROVENANCE_TIERS.P1_LOCAL_DOCS);
  for (const n of tieredNodes[PROVENANCE_TIERS.P2_VERIFIED_EXTERNAL] || []) processNode(n, PROVENANCE_TIERS.P2_VERIFIED_EXTERNAL);

  return deduplicated;
}

/**
 * Synthesizes surface-specific semantic evidence with provenance awareness
 * and inflation/substitution guardrails.
 */
export function synthesizeSurfaceEvidence(graph) {
  const tieredNodes = classifyProvenanceTiers(graph);
  const deduped = deduplicateEvidence(tieredNodes);

  const rootNode = (tieredNodes[PROVENANCE_TIERS.P0_ROOT] || [])[0] || null;
  const p1Nodes = tieredNodes[PROVENANCE_TIERS.P1_LOCAL_DOCS] || [];
  const p2Nodes = tieredNodes[PROVENANCE_TIERS.P2_VERIFIED_EXTERNAL] || [];

  const rootHasContent = rootNode && rootNode.content_bytes > 150;
  const rootHasInstall = rootNode && rootNode.structural_summary.has_install_signals;
  const rootHasQuickstart = rootNode && rootNode.structural_summary.has_quickstart_signals;

  const externalOrNestedHasInstall = deduped.install_commands.length > 0;
  const externalOrNestedHasQuickstart = [...p1Nodes, ...p2Nodes].some(
    (n) => n.structural_summary?.has_quickstart_signals
  );

  // 1. AEO Semantic Synthesis (Direct Technical Answerability)
  // High trust across P0, P1, and P2. Solves missing commands for monorepos & external doc sites.
  const aeoSynthesis = {
    has_install_instructions: Boolean(rootHasInstall || externalOrNestedHasInstall),
    has_quickstart_guide: Boolean(rootHasQuickstart || externalOrNestedHasQuickstart),
    install_source_tier: rootHasInstall
      ? PROVENANCE_TIERS.P0_ROOT
      : deduped.install_commands[0]?.tier || null,
    total_effective_headings: Math.min(
      deduped.headings.length,
      (rootNode?.structural_summary.headings_count || 0) +
        SEMANTIC_CAPS.MAX_NESTED_HEADINGS +
        SEMANTIC_CAPS.MAX_EXTERNAL_HEADINGS
    ),
    recovered_from_multidoc: !rootHasInstall && externalOrNestedHasInstall,
  };

  // 2. GEO Semantic Synthesis (Generative Citability & Executable Evidence)
  // Unlocks code blocks located in /docs/ or official docs with inflation caps.
  const rootCodeCount = rootNode?.structural_summary.code_blocks_count || 0;
  const p1CodeBlocks = deduped.code_blocks.filter((cb) => cb.tier === PROVENANCE_TIERS.P1_LOCAL_DOCS);
  const p2CodeBlocks = deduped.code_blocks.filter((cb) => cb.tier === PROVENANCE_TIERS.P2_VERIFIED_EXTERNAL);

  const cappedP1Code = Math.min(p1CodeBlocks.length, SEMANTIC_CAPS.MAX_NESTED_CODE_BLOCKS);
  const cappedP2Code = Math.min(p2CodeBlocks.length, SEMANTIC_CAPS.MAX_EXTERNAL_CODE_BLOCKS);
  const totalEffectiveCode = rootCodeCount + cappedP1Code + cappedP2Code;

  const hasTaggedCode = deduped.code_blocks.some(
    (cb) => cb.lang && typeof cb.lang === 'string' && cb.lang.trim().length > 0
  );

  const isCitabilityEligible =
    (totalEffectiveCode >= 2 || (totalEffectiveCode >= 1 && hasTaggedCode)) &&
    aeoSynthesis.has_install_instructions;

  const geoSynthesis = {
    has_runnable_code: totalEffectiveCode >= 1 && hasTaggedCode,
    code_blocks_count: totalEffectiveCode,
    root_code_count: rootCodeCount,
    external_code_recovered: cappedP1Code + cappedP2Code,
    is_citability_eligible: isCitabilityEligible,
    recovered_from_multidoc: rootCodeCount < 1 && totalEffectiveCode >= 1,
    has_docs_surface: Boolean(p1Nodes.length > 0 || p2Nodes.length > 0),
  };

  // 3. SEO Semantic Synthesis (Discoverability & Source Substitution Guardrail)
  // Guard C: If root README is an uninformative stub (< 150 bytes), external docs CANNOT
  // substitute for root SEO discoverability. It receives only a minor contextual link bonus.
  const rootWordCount = rootNode ? (rootNode.content.match(/\b\w+\b/g) || []).length : 0;
  const isStubRoot = rootWordCount < 30;

  const seoSynthesis = {
    is_stub_root: isStubRoot,
    has_verified_external_docs_link: p2Nodes.length > 0,
    has_nested_workspace_docs: p1Nodes.length > 0,
    substitution_guard_active: isStubRoot && p2Nodes.length > 0,
    seo_bonus_points: isStubRoot
      ? 5 // Capped nominal credit for having an official doc link without giving unearned top SEO
      : (p1Nodes.length > 0 ? 10 : 0) + (p2Nodes.length > 0 ? 5 : 0),
  };

  return {
    provenance_summary: {
      p0_root_count: (tieredNodes[PROVENANCE_TIERS.P0_ROOT] || []).length,
      p1_local_count: p1Nodes.length,
      p2_external_count: p2Nodes.length,
      p3_excluded_count: (tieredNodes[PROVENANCE_TIERS.P3_EXCLUDED] || []).length,
    },
    deduplication: deduped.stats,
    surfaces: {
      aeo: aeoSynthesis,
      geo: geoSynthesis,
      seo: seoSynthesis,
    },
  };
}
