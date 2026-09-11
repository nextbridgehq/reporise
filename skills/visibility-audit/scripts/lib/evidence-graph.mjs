/**
 * evidence-graph.mjs — Cross-Document Evidence Graph contract & validator.
 *
 * M9 Track: Multi-Document Evidence Resolution
 * Part of Milestone M9.1: External Documentation Resolution Feasibility Benchmark.
 *
 * Design Invariants:
 * 1. Determinism: Every graph produces byte-identical JSON when serialized.
 * 2. Provenance: Every node and edge retains source origin, content hash, and resolution status.
 * 3. Separation of Concerns: Observes and organizes evidence without scoring.
 */

import { createHash } from 'node:crypto';

export const NODE_TYPES = {
  ROOT_README: 'root_readme',
  NESTED_DOC: 'nested_doc',
  WORKSPACE_MEMBER: 'workspace_member',
  EXTERNAL_DOC: 'external_doc',
};

export const RESOLUTION_STATUS = {
  RESOLVED: 'resolved',
  UNREACHABLE: 'unreachable',
  FILTERED_DEPTH: 'filtered_depth_limit',
  FILTERED_DOMAIN: 'filtered_domain_boundary',
  FILTERED_OVERSIZED: 'filtered_oversized',
  SKIPPED_UNSUPPORTED: 'skipped_unsupported',
};

export function sha256(content) {
  if (typeof content !== 'string') return null;
  return createHash('sha256').update(content, 'utf8').digest('hex');
}

/**
 * Creates an empty, validated Evidence Graph container.
 */
export function createEvidenceGraph(repoIdentifier, rootPath = '') {
  return {
    schema_version: '1.0.0',
    repository: repoIdentifier,
    root_path: rootPath,
    created_at: '1970-01-01T00:00:00.000Z', // Deterministic epoch for tests / replay
    nodes: [],
    edges: [],
    metrics: {
      total_targets_discovered: 0,
      total_targets_resolved: 0,
      total_targets_failed: 0,
      local_nodes_count: 0,
      external_nodes_count: 0,
      total_content_bytes: 0,
      total_code_blocks: 0,
      total_headings: 0,
    },
  };
}

/**
 * Adds an evidence node with strict provenance.
 */
export function addEvidenceNode(graph, node) {
  if (!node.id || !node.type) {
    throw new Error(`Invalid evidence node: missing id or type: ${JSON.stringify(node)}`);
  }

  const normalizedNode = {
    id: String(node.id),
    type: node.type,
    source_type: node.source_type || 'local_file',
    source_uri: node.source_uri || '',
    title: node.title || '',
    parent_anchor: node.parent_anchor || null,
    resolution_status: node.resolution_status || RESOLUTION_STATUS.RESOLVED,
    http_status: typeof node.http_status === 'number' ? node.http_status : null,
    error_detail: node.error_detail || null,
    content_bytes: typeof node.content === 'string' ? Buffer.byteLength(node.content, 'utf8') : 0,
    content_hash: typeof node.content === 'string' ? sha256(node.content) : null,
    content: typeof node.content === 'string' ? node.content : '',
    structural_summary: {
      headings_count: Array.isArray(node.headings) ? node.headings.length : 0,
      headings: Array.isArray(node.headings) ? [...node.headings] : [],
      code_blocks_count: Array.isArray(node.code_blocks) ? node.code_blocks.length : 0,
      code_blocks: Array.isArray(node.code_blocks) ? [...node.code_blocks] : [],
      has_install_signals: Boolean(node.has_install_signals),
      has_quickstart_signals: Boolean(node.has_quickstart_signals),
    },
    metadata: node.metadata || {},
  };

  graph.nodes.push(normalizedNode);

  // Update metrics
  graph.metrics.total_targets_discovered++;
  if (normalizedNode.resolution_status === RESOLUTION_STATUS.RESOLVED) {
    graph.metrics.total_targets_resolved++;
    graph.metrics.total_content_bytes += normalizedNode.content_bytes;
    graph.metrics.total_headings += normalizedNode.structural_summary.headings_count;
    graph.metrics.total_code_blocks += normalizedNode.structural_summary.code_blocks_count;
  } else {
    graph.metrics.total_targets_failed++;
  }

  if (normalizedNode.source_type === 'external_url') {
    graph.metrics.external_nodes_count++;
  } else {
    graph.metrics.local_nodes_count++;
  }

  return normalizedNode;
}

/**
 * Adds a directed edge between two nodes.
 */
export function addEvidenceEdge(graph, fromId, toId, relation, metadata = {}) {
  const edge = {
    from: String(fromId),
    to: String(toId),
    relation: String(relation),
    metadata,
  };
  graph.edges.push(edge);
  return edge;
}

/**
 * Serializes the graph deterministically: sorted keys, sorted nodes by id, sorted edges.
 */
export function serializeEvidenceGraph(graph) {
  const sorted = {
    schema_version: graph.schema_version,
    repository: graph.repository,
    metrics: { ...graph.metrics },
    nodes: [...graph.nodes].sort((a, b) => a.id.localeCompare(b.id)),
    edges: [...graph.edges].sort((a, b) => {
      const fromCmp = a.from.localeCompare(b.from);
      if (fromCmp !== 0) return fromCmp;
      const toCmp = a.to.localeCompare(b.to);
      if (toCmp !== 0) return toCmp;
      return a.relation.localeCompare(b.relation);
    }),
  };

  return JSON.stringify(sorted, Object.keys(sorted).sort(), 2);
}
