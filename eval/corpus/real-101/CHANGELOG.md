# ChangeLog

<!--- generated changelog --->

## [2026-08-19]

### llama-index-core [0.14.24]

- fix: close HotpotQA evaluator file handles ([#22113](https://github.com/run-llama/llama_index/pull/22113))
- fix(core): preserve oversized leaf nodes in CodeSplitter ([#22119](https://github.com/run-llama/llama_index/pull/22119))
- fix: preserve multiblock chat history writes ([#22124](https://github.com/run-llama/llama_index/pull/22124))
- fix(core): skip empty nodes in HTMLNodeParser ([#22125](https://github.com/run-llama/llama_index/pull/22125))
- fix(core): respect mmr_threshold=0 in MMR embedding search ([#22126](https://github.com/run-llama/llama_index/pull/22126))
- fix: keep all nodes per document in IngestionPipeline upserts (re-submit of #22046, not a dup of #21456) ([#22133](https://github.com/run-llama/llama_index/pull/22133))
- fix: don't mark \*args/\*\*kwargs as required tool parameters ([#22135](https://github.com/run-llama/llama_index/pull/22135))
- fix(core): default MetadataFilters condition to AND when None ([#22155](https://github.com/run-llama/llama_index/pull/22155))
- fix: honor agent structured_output_fn/output_cls inside AgentWorkflow ([#22162](https://github.com/run-llama/llama_index/pull/22162))
- fix(core): use word tokenization for stopword removal in SemanticDoubleMergingSplitterNodeParser ([#22167](https://github.com/run-llama/llama_index/pull/22167))
- fix(core): restore prompt helper fallback to supplied LLM metadata ([#22177](https://github.com/run-llama/llama_index/pull/22177))
- populate response text on streaming chat response when writing to memory ([#22179](https://github.com/run-llama/llama_index/pull/22179))
- feat(property_graph): add raise_on_error to LLM path extractors ([#22195](https://github.com/run-llama/llama_index/pull/22195))
- Clarify FactExtractionMemoryBlock condense prompt to return a full snapshot ([#22213](https://github.com/run-llama/llama_index/pull/22213))
- fix a few typos ([#22512](https://github.com/run-llama/llama_index/pull/22512))
- fix(core): give each CitationQueryEngine citation node its own id and offsets ([#22537](https://github.com/run-llama/llama_index/pull/22537))
- fix(core): persist SimpleChatStore without escaping non-ascii ([#22538](https://github.com/run-llama/llama_index/pull/22538))
- feat(core): allow Memory to accept any AsyncDBChatStore ([#22541](https://github.com/run-llama/llama_index/pull/22541))
- test(node_parser): enable pytest discovery for sentence_window tests ([#22545](https://github.com/run-llama/llama_index/pull/22545))
- Implement async for LLMRerank ([#22597](https://github.com/run-llama/llama_index/pull/22597))

### llama-index-embeddings-bedrock [0.8.3]

- fix: make aioboto3 optional in llama-index-embeddings-bedrock ([#21915](https://github.com/run-llama/llama_index/pull/21915))
- fix(embeddings): validate non-empty Bedrock embedding payload before AWS call ([#22527](https://github.com/run-llama/llama_index/pull/22527))

### llama-index-embeddings-voyageai [0.6.1]

- fix: set chunk_size=32000 and fix input format for contextualizedembeddings ([#22144](https://github.com/run-llama/llama_index/pull/22144))

### llama-index-graph-stores-falkordb [0.6.0]

- fix(falkordb): correct schema, vector ranking, filters and batching in property graph store ([#22522](https://github.com/run-llama/llama_index/pull/22522))

### llama-index-indices-managed-dashscope [0.5.1]

- fix(dashscope): send query_history in retriever payload ([#22212](https://github.com/run-llama/llama_index/pull/22212))

### llama-index-indices-managed-lancedb [0.3.2]

- fix(lancedb): repair image ingestion crash, embedding_model typo, and… ([#22544](https://github.com/run-llama/llama_index/pull/22544))
- lint ([#22572](https://github.com/run-llama/llama_index/pull/22572))

### llama-index-llms-anthropic [0.11.10]

- feat(anthropic): Add support for Claude Sonnet 5 ([#22202](https://github.com/run-llama/llama_index/pull/22202))
- Fix/sonnet 5 function calling ([#22217](https://github.com/run-llama/llama_index/pull/22217))
- feat(anthropic, bedrock-converse): add Claude Opus 5 to model allowlists ([#22451](https://github.com/run-llama/llama_index/pull/22451))
- fix(anthropic): correct Opus 4.6 context window to 1M ([#22555](https://github.com/run-llama/llama_index/pull/22555))

### llama-index-llms-bedrock-converse [0.14.18]

- fix: make aioboto3 optional in llama-index-llms-bedrock-converse ([#21916](https://github.com/run-llama/llama_index/pull/21916))
- feat(bedrock-converse): Add support for Claude Sonnet 5 ([#22201](https://github.com/run-llama/llama_index/pull/22201))
- feat(anthropic, bedrock-converse): add Claude Opus 5 to model allowlists ([#22451](https://github.com/run-llama/llama_index/pull/22451))
- feat(bedrock-converse): Support thinking type 'disabled' ([#22534](https://github.com/run-llama/llama_index/pull/22534))

### llama-index-llms-google-genai [0.10.0]

- fix: dont overwrite thought signatures ([#21562](https://github.com/run-llama/llama_index/pull/21562))
- fix(google-genai): don't send default params in gemini genconfig ([#22270](https://github.com/run-llama/llama_index/pull/22270))
- feat(google-genai): use gemini 3.7 Flash by default in lib and docs ([#22734](https://github.com/run-llama/llama_index/pull/22734))

### llama-index-llms-llama-cpp [0.6.1]

- fix(llama-cpp): report the model's effective context window ([#22539](https://github.com/run-llama/llama_index/pull/22539))

### llama-index-llms-openai [0.7.10]

- Add GPT-5.6 models to supported OpenAI models ([#22385](https://github.com/run-llama/llama_index/pull/22385))

### llama-index-node-parser-slide [0.3.0]

- fix a few typos ([#22512](https://github.com/run-llama/llama_index/pull/22512))

### llama-index-observability-otel [0.6.4]

- chore: bump instrumentation version in otel integration to 0.5.0 as minimum ([#22151](https://github.com/run-llama/llama_index/pull/22151))
- fix: improve otel span ID handling ([#22485](https://github.com/run-llama/llama_index/pull/22485))

### llama-index-protocols-ag-ui [0.4.0]

- fix(ag-ui): raise ValueError instead of fabricating tool_call_id ([#22103](https://github.com/run-llama/llama_index/pull/22103))
- fix: persist AG-UI frontend tool messages ([#22109](https://github.com/run-llama/llama_index/pull/22109))
- Isolate AG-UI initial state copies ([#22189](https://github.com/run-llama/llama_index/pull/22189))
- feat(ag-ui): support multimodal user input (images, audio, video, documents) ([#22678](https://github.com/run-llama/llama_index/pull/22678))

### llama-index-readers-alibabacloud-aisearch [0.4.1]

- fix: close file handles and http connections in reader integrations ([#22529](https://github.com/run-llama/llama_index/pull/22529))

### llama-index-readers-couchbase [0.5.1]

- Add telemetry ([#22473](https://github.com/run-llama/llama_index/pull/22473))

### llama-index-readers-file [0.6.0]

- fix: bound HWP section decompression ([#22106](https://github.com/run-llama/llama_index/pull/22106))

### llama-index-readers-gcs [0.6.1]

- docs: fix GCS reader README import paths ([#22139](https://github.com/run-llama/llama_index/pull/22139))

### llama-index-readers-github [0.11.2]

- fix(github-reader): add asyncio_mode=auto to unblock async tests in CI ([#21937](https://github.com/run-llama/llama_index/pull/21937))

### llama-index-readers-google [0.7.3]

- fix: GoogleDriveReader returns None instead of a list when an error is swallowed ([#22556](https://github.com/run-llama/llama_index/pull/22556))

### llama-index-readers-huggingface-fs [0.5.1]

- fix: close file handles and http connections in reader integrations ([#22529](https://github.com/run-llama/llama_index/pull/22529))

### llama-index-readers-hwp [0.5.0]

- fix: bound HWP section decompression ([#22106](https://github.com/run-llama/llama_index/pull/22106))

### llama-index-readers-memos [0.5.1]

- Fix MemosReader default endpoint and metadata ([#22199](https://github.com/run-llama/llama_index/pull/22199))

### llama-index-readers-minio [0.5.1]

- fix: don't hardcode verify=False for S3 TLS in BotoMinioReader ([#22530](https://github.com/run-llama/llama_index/pull/22530))

### llama-index-readers-sec-filings [0.5.1]

- fix: close file handles and http connections in reader integrations ([#22529](https://github.com/run-llama/llama_index/pull/22529))

### llama-index-readers-stripe-docs [0.5.1]

- fix: close file handles and http connections in reader integrations ([#22529](https://github.com/run-llama/llama_index/pull/22529))

### llama-index-retrievers-galaxia [0.2.2]

- fix: close file handles and http connections in reader integrations ([#22529](https://github.com/run-llama/llama_index/pull/22529))

### llama-index-retrievers-pathway [0.5.0]

- fix a few typos ([#22512](https://github.com/run-llama/llama_index/pull/22512))

### llama-index-storage-docstore-couchbase [0.4.1]

- Add telemetry ([#22473](https://github.com/run-llama/llama_index/pull/22473))

### llama-index-storage-index-store-couchbase [0.4.1]

- Add telemetry ([#22473](https://github.com/run-llama/llama_index/pull/22473))

### llama-index-storage-kvstore-couchbase [0.4.1]

- Add telemetry ([#22473](https://github.com/run-llama/llama_index/pull/22473))

### llama-index-tools-desearch [0.1.1]

- docs: remove leftover generation text from desearch tool README ([#22149](https://github.com/run-llama/llama_index/pull/22149))

### llama-index-tools-mcp [0.5.0]

- feat: migrate llama-index-tools-mcp to mcp 2.x ([#22557](https://github.com/run-llama/llama_index/pull/22557))

### llama-index-tools-typecast [0.1.0]

- Document Typecast unsynthesizable text errors ([#22514](https://github.com/run-llama/llama_index/pull/22514))

### llama-index-tools-vectara-query [0.5.0]

- fix a few typos ([#22512](https://github.com/run-llama/llama_index/pull/22512))

### llama-index-vector-stores-azureaisearch [0.5.1]

- fix(azureaisearch): preserve falsy metadata values when indexing nodes ([#22154](https://github.com/run-llama/llama_index/pull/22154))

### llama-index-vector-stores-couchbase [0.7.1]

- Add telemetry ([#22473](https://github.com/run-llama/llama_index/pull/22473))

### llama-index-vector-stores-pinecone [0.8.1]

- fix(pinecone): support pinecone client v8 and v9 ([#22511](https://github.com/run-llama/llama_index/pull/22511))

### llama-index-vector-stores-qdrant [0.10.3]

- fix(qdrant): aquery() drops falsy shard_identifier values (e.g. 0) ([#22169](https://github.com/run-llama/llama_index/pull/22169))
- fix(qdrant): restore compatibility with qdrant-client 1.19.0 ([#22630](https://github.com/run-llama/llama_index/pull/22630))

### llama-index-vector-stores-vertexaivectorsearch [0.5.0]

- feat(vector-stores/vertexai): Expand support of V2 API for `VertexAIVectorStore` ([#22085](https://github.com/run-llama/llama_index/pull/22085))

### llama-index-vector-stores-weaviate [1.6.2]

- fix(weaviate): return real properties as node metadata for pre-existing collections ([#22540](https://github.com/run-llama/llama_index/pull/22540))

## [2026-06-24]

### llama-index-callbacks-argilla [0.5.0]

- chore(deps): bump the uv group across 32 directories with 3 updates ([#21664](https://github.com/run-llama/llama_index/pull/21664))
- chore(deps): bump the uv group across 29 directories with 3 updates ([#21665](https://github.com/run-llama/llama_index/pull/21665))
- chore(deps): bump the uv group across 31 directories with 3 updates ([#21668](https://github.com/run-llama/llama_index/pull/21668))
- chore(deps): bump the pip group across 35 directories with 4 updates ([#21714](https://github.com/run-llama/llama_index/pull/21714))
- chore(deps): bump the uv group across 32 directories with 5 updates ([#21717](https://github.com/run-llama/llama_index/pull/21717))
- chore(deps): bump the uv group across 31 directories with 5 updates ([#21719](https://github.com/run-llama/llama_index/pull/21719))
- chore(deps): bump the uv group across 31 directories with 5 updates ([#21720](https://github.com/run-llama/llama_index/pull/21720))
- chore(deps): bump the uv group across 30 directories with 5 updates ([#21721](https://github.com/run-llama/llama_index/pull/21721))
- chore(deps): bump the uv group across 30 directories with 5 updates ([#21722](https://github.com/run-llama/llama_index/pull/21722))
- chore(deps): bump the pip group across 12 directories with 4 updates ([#21724](https://github.com/run-llama/llama_index/pull/21724))
- chore(deps): bump the uv group across 21 directories with 3 updates ([#21725](https://github.com/run-llama/llama_index/pull/21725))
- chore(deps): bump the pip group across 11 directories with 4 updates ([#21726](https://github.com/run-llama/llama_index/pull/21726))
- chore(deps): bump the uv group across 17 directories with 3 updates ([#21727](https://github.com/run-llama/llama_index/pull/21727))
- chore(deps): bump the uv group across 18 directories with 4 updates ([#21733](https://github.com/run-llama/llama_index/pull/21733))
- chore(deps): bump the uv group across 7 directories with 6 updates ([#21736](https://github.com/run-llama/llama_index/pull/21736))

### llama-index-core [0.14.23]

- feat(core): Multimodal synthesis part 2 ([#21561](https://github.com/run-llama/llama_index/pull/21561))
- fix(core): add DocumentBlock and VideoBlock to FunctionTool.\_parse_tool_output ([#21678](https://github.com/run-llama/llama_index/pull/21678))
- fix(prompt_helper): guard against ZeroDivisionError on empty input sequences ([#21707](https://github.com/run-llama/llama_index/pull/21707))
- Preserve URL-backed video and document memory blocks ([#21728](https://github.com/run-llama/llama_index/pull/21728))
- fix: add explicit encoding='utf-8' to llama-index-core text-mode file I/O ([#21729](https://github.com/run-llama/llama_index/pull/21729))
- Add tool calling mock LLM ([#21732](https://github.com/run-llama/llama_index/pull/21732))
- make tests green again ([#21737](https://github.com/run-llama/llama_index/pull/21737))
- Fix refresh_ref_docs kwargs reuse ([#21752](https://github.com/run-llama/llama_index/pull/21752))
- perf: use a set instead of a list for within-batch dedup in Ingestion… ([#21755](https://github.com/run-llama/llama_index/pull/21755))
- fix: use running loop in ingestion pipeline ([#21765](https://github.com/run-llama/llama_index/pull/21765))
- fix(core): preserve IndexNode obj during model dump ([#21776](https://github.com/run-llama/llama_index/pull/21776))
- fix(workflow): deep copy initial_state to prevent mutation leaks across runs ([#21780](https://github.com/run-llama/llama_index/pull/21780))
- Multimodal query engines ([#21784](https://github.com/run-llama/llama_index/pull/21784))
- fix(core): match missing metadata for NE and NIN filters ([#21785](https://github.com/run-llama/llama_index/pull/21785))
- fix: preserve TreeSelectLeafRetriever source nodes ([#21787](https://github.com/run-llama/llama_index/pull/21787))
- Fix RecursionError in TokenTextSplitter & SentenceSplitter for units larger than chunk_size ([#21900](https://github.com/run-llama/llama_index/pull/21900))
- simplify serialized payloads to instrumentation ([#22130](https://github.com/run-llama/llama_index/pull/22130))

### llama-index-embeddings-adapter [0.5.0]

- fix: use utf-8 for adapter config files ([#21773](https://github.com/run-llama/llama_index/pull/21773))

### llama-index-embeddings-autoembeddings [0.3.0]

- chore(deps): bump the uv group across 7 directories with 6 updates ([#21736](https://github.com/run-llama/llama_index/pull/21736))

### llama-index-embeddings-cohere [0.8.0]

- chore(deps): bump the pip group across 35 directories with 4 updates ([#21714](https://github.com/run-llama/llama_index/pull/21714))
- chore(deps): bump the pip group across 12 directories with 4 updates ([#21724](https://github.com/run-llama/llama_index/pull/21724))
- chore(deps): bump the pip group across 11 directories with 4 updates ([#21726](https://github.com/run-llama/llama_index/pull/21726))
- fix: preserve TreeSelectLeafRetriever source nodes ([#21787](https://github.com/run-llama/llama_index/pull/21787))

### llama-index-embeddings-gaudi [0.4.0]

- chore(deps): bump the uv group across 18 directories with 4 updates ([#21733](https://github.com/run-llama/llama_index/pull/21733))

### llama-index-embeddings-google-genai [0.5.1]

- chore: allow `google-genai` 2.0+ SDKs ([#21710](https://github.com/run-llama/llama_index/pull/21710))

### llama-index-embeddings-heroku [0.2.0]

- chore(deps): bump the pip group across 35 directories with 4 updates ([#21714](https://github.com/run-llama/llama_index/pull/21714))
- chore(deps): bump the pip group across 12 directories with 4 updates ([#21724](https://github.com/run-llama/llama_index/pull/21724))
- chore(deps): bump the pip group across 11 directories with 4 updates ([#21726](https://github.com/run-llama/llama_index/pull/21726))
- fix: preserve TreeSelectLeafRetriever source nodes ([#21787](https://github.com/run-llama/llama_index/pull/21787))

### llama-index-embeddings-huggingface-optimum [0.4.1]

- make tests green again ([#21737](https://github.com/run-llama/llama_index/pull/21737))

### llama-index-embeddings-ibm [0.6.0.post1]

- chore(deps): bump the pip group across 35 directories with 4 updates ([#21714](https://github.com/run-llama/llama_index/pull/21714))
- chore(deps): bump the pip group across 12 directories with 4 updates ([#21724](https://github.com/run-llama/llama_index/pull/21724))
- chore(deps): bump the pip group across 11 directories with 4 updates ([#21726](https://github.com/run-llama/llama_index/pull/21726))
- fix: preserve TreeSelectLeafRetriever source nodes ([#21787](https://github.com/run-llama/llama_index/pull/21787))

### llama-index-embeddings-jinaai [0.6.0]

- chore(deps): bump the uv group across 32 directories with 3 updates ([#21664](https://github.com/run-llama/llama_index/pull/21664))
- chore(deps): bump the uv group across 29 directories with 3 updates ([#21665](https://github.com/run-llama/llama_index/pull/21665))
- chore(deps): bump the uv group across 31 directories with 3 updates ([#21668](https://github.com/run-llama/llama_index/pull/21668))
- chore(deps): bump the pip group across 35 directories with 4 updates ([#21714](https://github.com/run-llama/llama_index/pull/21714))
- chore(deps): bump the uv group across 32 directories with 5 updates ([#21717](https://github.com/run-llama/llama_index/pull/21717))
- chore(deps): bump the uv group across 31 directories with 5 updates ([#21719](https://github.com/run-llama/llama_index/pull/21719))
- chore(deps): bump the uv group across 31 directories with 5 updates ([#21720](https://github.com/run-llama/llama_index/pull/21720))
- chore(deps): bump the uv group across 30 directories with 5 updates ([#21721](https://github.com/run-llama/llama_index/pull/21721))
- chore(deps): bump the uv group across 30 directories with 5 updates ([#21722](https://github.com/run-llama/llama_index/pull/21722))
- chore(deps): bump the pip group across 12 directories with 4 updates ([#21724](https://github.com/run-llama/llama_index/pull/21724))
- chore(deps): bump the uv group across 21 directories with 3 updates ([#21725](https://github.com/run-llama/llama_index/pull/21725))
- chore(deps): bump the pip group across 11 directories with 4 updates ([#21726](https://github.com/run-llama/llama_index/pull/21726))
- chore(deps): bump the uv group across 17 directories with 3 updates ([#21727](https://github.com/run-llama/llama_index/pull/21727))
- chore(deps): bump the uv group across 18 directories with 4 updates ([#21733](https://github.com/run-llama/llama_index/pull/21733))
- chore(deps): bump the uv group across 7 directories with 6 updates ([#21736](https://github.com/run-llama/llama_index/pull/21736))

### llama-index-embeddings-litellm [0.5.0]

- chore(deps): bump the uv group across 7 directories with 6 updates ([#21736](https://github.com/run-llama/llama_index/pull/21736))

### llama-index-embeddings-modelscope [0.6.0]

- chore(deps): bump the uv group across 32 directories with 3 updates ([#21664](https://github.com/run-llama/llama_index/pull/21664))
- chore(deps): bump the uv group across 29 directories with 3 updates ([#21665](https://github.com/run-llama/llama_index/pull/21665))
- chore(deps): bump the uv group across 31 directories with 3 updates ([#21668](https://github.com/run-llama/llama_index/pull/21668))
- chore(deps): bump the pip group across 35 directories with 4 updates ([#21714](https://github.com/run-llama/llama_index/pull/21714))
- chore(deps): bump the uv group across 32 directories with 5 updates ([#21717](https://github.com/run-llama/llama_index/pull/21717))
- chore(deps): bump the uv group across 31 directories with 5 updates ([#21719](https://github.com/run-llama/llama_index/pull/21719))
- chore(deps): bump the uv group across 31 directories with 5 updates ([#21720](https://github.com/run-llama/llama_index/pull/21720))
- chore(deps): bump the uv group across 30 directories with 5 updates ([#21721](https://github.com/run-llama/llama_index/pull/21721))
- chore(deps): bump the uv group across 30 directories with 5 updates ([#21722](https://github.com/run-llama/llama_index/pull/21722))
- chore(deps): bump the pip group across 12 directories with 4 updates ([#21724](https://github.com/run-llama/llama_index/pull/21724))
- chore(deps): bump the uv group across 21 directories with 3 updates ([#21725](https://github.com/run-llama/llama_index/pull/21725))
- chore(deps): bump the pip group across 11 directories with 4 updates ([#21726](https://github.com/run-llama/llama_index/pull/21726))
- chore(deps): bump the uv group across 17 directories with 3 updates ([#21727](https://github.com/run-llama/llama_index/pull/21727))
- chore(deps): bump the uv group across 18 directories with 4 updates ([#21733](https://github.com/run-llama/llama_index/pull/21733))
- chore(deps): bump the uv group across 7 directories with 6 updates ([#21736](https://github.com/run-llama/llama_index/pull/21736))

### llama-index-embeddings-nvidia [0.5.1]

- chore(deps): bump the pip group across 35 directories with 4 updates ([#21714](https://github.com/run-llama/llama_index/pull/21714))
- chore(deps): bump the pip group across 12 directories with 4 updates ([#21724](https://github.com/run-llama/llama_index/pull/21724))
- chore(deps): bump the pip group across 11 directories with 4 updates ([#21726](https://github.com/run-llama/llama_index/pull/21726))
- fix: preserve TreeSelectLeafRetriever source nodes ([#21787](https://github.com/run-llama/llama_index/pull/21787))

### llama-index-embeddings-premai [0.5.0]

- chore(deps): bump the pip group across 12 directories with 4 updates ([#21724](https://github.com/run-llama/llama_index/pull/21724))
- chore(deps): bump the uv group across 21 directories with 3 updates ([#21725](https://github.com/run-llama/llama_index/pull/21725))
- chore(deps): bump the pip group across 11 directories with 4 updates ([#21726](https://github.com/run-llama/llama_index/pull/21726))
- chore(deps): bump the uv group across 17 directories with 3 updates ([#21727](https://github.com/run-llama/llama_index/pull/21727))
- chore(deps): bump the uv group across 18 directories with 4 updates ([#21733](https://github.com/run-llama/llama_index/pull/21733))

### llama-index-embeddings-upstage [0.6.1]

- chore(deps): bump the pip group across 12 directories with 4 updates ([#21724](https://github.com/run-llama/llama_index/pull/21724))
- chore(deps): bump the pip group across 11 directories with 4 updates ([#21726](https://github.com/run-llama/llama_index/pull/21726))
- fix: preserve TreeSelectLeafRetriever source nodes ([#21787](https://github.com/run-llama/llama_index/pull/21787))

### llama-index-embeddings-vllm [0.1.1]

- chore(deps): bump the uv group across 7 directories with 6 updates ([#21736](https://github.com/run-llama/llama_index/pull/21736))

### llama-index-embeddings-voyageai [0.6.0]

- make tests green again ([#21737](https://github.com/run-llama/llama_index/pull/21737))

### llama-index-embeddings-zhipuai [0.4.0]

- make tests green again ([#21737](https://github.com/run-llama/llama_index/pull/21737))

### llama-index-graph-rag-cognee [0.3.1]

- make tests green again ([#21737](https://github.com/run-llama/llama_index/pull/21737))

### llama-index-llms-ai21 [0.7.0]

- chore(deps): bump the pip group across 12 directories with 4 updates ([#21724](https://github.com/run-llama/llama_index/pull/21724))
- chore(deps): bump the pip group across 11 directories with 4 updates ([#21726](https://github.com/run-llama/llama_index/pull/21726))
- fix: preserve TreeSelectLeafRetriever source nodes ([#21787](https://github.com/run-llama/llama_index/pull/21787))

### llama-index-llms-anthropic [0.11.6]

- feat(bedrock-converse, anthropic): add Claude Opus 4.8 ([#21802](https://github.com/run-llama/llama_index/pull/21802))
- feat(anthropic): Add support for Claude Fable 5 ([#21919](https://github.com/run-llama/llama_index/pull/21919))

### llama-index-llms-bedrock-converse [0.14.14]

- fix(bedrock-converse): parse streaming tool_kwargs from string to dict ([#21580](https://github.com/run-llama/llama_index/pull/21580))
- fix(bedrock-converse): serialize rich content blocks in tool results ([#21677](https://github.com/run-llama/llama_index/pull/21677))
- feat(bedrock-converse, anthropic): add Claude Opus 4.8 ([#21802](https://github.com/run-llama/llama_index/pull/21802))
- feat(bedrock-converse): add Claude Fable 5 to model allowlists ([#22033](https://github.com/run-llama/llama_index/pull/22033))

### llama-index-llms-cerebras [0.4.1]

- fix(cerebras): bump llama-index-llms-openai-like to >=0.6.0,<0.9 ([#21914](https://github.com/run-llama/llama_index/pull/21914))

### llama-index-llms-gaudi [0.4.0]

- chore(deps): bump the uv group across 18 directories with 4 updates ([#21733](https://github.com/run-llama/llama_index/pull/21733))

### llama-index-llms-google-genai [0.9.5]

- chore: allow `google-genai` 2.0+ SDKs ([#21710](https://github.com/run-llama/llama_index/pull/21710))
- Bump version from 0.9.4 to 0.9.5 ([#21712](https://github.com/run-llama/llama_index/pull/21712))

### llama-index-llms-heroku [0.2.0]

- chore(deps): bump the pip group across 12 directories with 4 updates ([#21724](https://github.com/run-llama/llama_index/pull/21724))
- chore(deps): bump the pip group across 11 directories with 4 updates ([#21726](https://github.com/run-llama/llama_index/pull/21726))
- fix: preserve TreeSelectLeafRetriever source nodes ([#21787](https://github.com/run-llama/llama_index/pull/21787))

### llama-index-llms-maritalk [0.6.0]

- chore(deps): bump the uv group across 32 directories with 3 updates ([#21664](https://github.com/run-llama/llama_index/pull/21664))
- chore(deps): bump the uv group across 29 directories with 3 updates ([#21665](https://github.com/run-llama/llama_index/pull/21665))
- chore(deps): bump the pip group across 12 directories with 4 updates ([#21724](https://github.com/run-llama/llama_index/pull/21724))
- chore(deps): bump the uv group across 21 directories with 3 updates ([#21725](https://github.com/run-llama/llama_index/pull/21725))
- chore(deps): bump the pip group across 11 directories with 4 updates ([#21726](https://github.com/run-llama/llama_index/pull/21726))
- chore(deps): bump the uv group across 17 directories with 3 updates ([#21727](https://github.com/run-llama/llama_index/pull/21727))
- chore(deps): bump the uv group across 18 directories with 4 updates ([#21733](https://github.com/run-llama/llama_index/pull/21733))

### llama-index-llms-nvidia [0.5.1]

- fix: relax NVIDIA LLM openai-like dependency ([#21911](https://github.com/run-llama/llama_index/pull/21911))

### llama-index-llms-oci-data-science [1.1.0]

- chore(deps): bump the pip group across 12 directories with 4 updates ([#21724](https://github.com/run-llama/llama_index/pull/21724))
- chore(deps): bump the uv group across 21 directories with 3 updates ([#21725](https://github.com/run-llama/llama_index/pull/21725))
- chore(deps): bump the pip group across 11 directories with 4 updates ([#21726](https://github.com/run-llama/llama_index/pull/21726))

### llama-index-llms-openai [0.7.9]

- chore(deps): bump the pip group across 11 directories with 4 updates ([#21726](https://github.com/run-llama/llama_index/pull/21726))
- Support vLLM reasoning field in OpenAI messages ([#21753](https://github.com/run-llama/llama_index/pull/21753))

### llama-index-llms-openai-like [0.7.2]

- chore(deps): bump the pip group across 12 directories with 4 updates ([#21724](https://github.com/run-llama/llama_index/pull/21724))
- chore(deps): bump the pip group across 11 directories with 4 updates ([#21726](https://github.com/run-llama/llama_index/pull/21726))

### llama-index-llms-openrouter [0.5.1]

- fix(openrouter): support llama-index-llms-openai-like 0.7 ([#21891](https://github.com/run-llama/llama_index/pull/21891))

### llama-index-llms-openvino-genai [0.3.1]

- chore(deps): bump the pip group across 12 directories with 4 updates ([#21724](https://github.com/run-llama/llama_index/pull/21724))
- chore(deps): bump the pip group across 11 directories with 4 updates ([#21726](https://github.com/run-llama/llama_index/pull/21726))

### llama-index-llms-ovhcloud [0.2.1]

- chore(deps): bump the pip group across 12 directories with 4 updates ([#21724](https://github.com/run-llama/llama_index/pull/21724))
- chore(deps): bump the pip group across 11 directories with 4 updates ([#21726](https://github.com/run-llama/llama_index/pull/21726))

### llama-index-llms-perplexity [0.5.1]

- chore(deps): bump the pip group across 12 directories with 4 updates ([#21724](https://github.com/run-llama/llama_index/pull/21724))
- chore(deps): bump the pip group across 11 directories with 4 updates ([#21726](https://github.com/run-llama/llama_index/pull/21726))

### llama-index-llms-portkey [0.5.1]

- chore(deps): bump the pip group across 12 directories with 4 updates ([#21724](https://github.com/run-llama/llama_index/pull/21724))
- chore(deps): bump the pip group across 11 directories with 4 updates ([#21726](https://github.com/run-llama/llama_index/pull/21726))

### llama-index-llms-upstage [0.8.1]

- chore(deps): bump the pip group across 12 directories with 4 updates ([#21724](https://github.com/run-llama/llama_index/pull/21724))
- chore(deps): bump the pip group across 11 directories with 4 updates ([#21726](https://github.com/run-llama/llama_index/pull/21726))

### llama-index-llms-yi [0.5.1]

- chore(deps): bump the pip group across 12 directories with 4 updates ([#21724](https://github.com/run-llama/llama_index/pull/21724))
- chore(deps): bump the pip group across 11 directories with 4 updates ([#21726](https://github.com/run-llama/llama_index/pull/21726))

### llama-index-llms-you [0.5.0]

- fix: correct documentation typos in You.com and YugabyteDB docs. ([#21709](https://github.com/run-llama/llama_index/pull/21709))

### llama-index-llms-zhipuai [0.5.0]

- make tests green again ([#21737](https://github.com/run-llama/llama_index/pull/21737))

### llama-index-memory-bedrock-agentcore [0.1.2]

- chore(deps): bump the uv group across 30 directories with 5 updates ([#21722](https://github.com/run-llama/llama_index/pull/21722))
- chore(deps): bump the pip group across 12 directories with 4 updates ([#21724](https://github.com/run-llama/llama_index/pull/21724))
- chore(deps): bump the uv group across 21 directories with 3 updates ([#21725](https://github.com/run-llama/llama_index/pull/21725))
- chore(deps): bump the pip group across 11 directories with 4 updates ([#21726](https://github.com/run-llama/llama_index/pull/21726))

### llama-index-memory-mem0 [2.0.0]

- Upgrade mem0 to 2.x (llama-index-memory-mem0) ([#21711](https://github.com/run-llama/llama_index/pull/21711))
- chore(deps): bump the uv group across 31 directories with 5 updates ([#21720](https://github.com/run-llama/llama_index/pull/21720))
- chore(deps): bump the uv group across 30 directories with 5 updates ([#21721](https://github.com/run-llama/llama_index/pull/21721))
- chore(deps): bump the uv group across 30 directories with 5 updates ([#21722](https://github.com/run-llama/llama_index/pull/21722))
- chore(deps): bump the pip group across 12 directories with 4 updates ([#21724](https://github.com/run-llama/llama_index/pull/21724))
- chore(deps): bump the uv group across 21 directories with 3 updates ([#21725](https://github.com/run-llama/llama_index/pull/21725))
- chore(deps): bump the pip group across 11 directories with 4 updates ([#21726](https://github.com/run-llama/llama_index/pull/21726))

### llama-index-node-parser-chonkie [0.1.2]

- make tests green again ([#21737](https://github.com/run-llama/llama_index/pull/21737))

### llama-index-observability-otel [0.6.2]

- chore(deps): bump the pip group across 12 directories with 4 updates ([#21724](https://github.com/run-llama/llama_index/pull/21724))
- chore(deps): bump the uv group across 21 directories with 3 updates ([#21725](https://github.com/run-llama/llama_index/pull/21725))
- chore(deps): bump the pip group across 11 directories with 4 updates ([#21726](https://github.com/run-llama/llama_index/pull/21726))

### llama-index-postprocessor-alibabacloud-aisearch-rerank [0.4.0]

- chore(deps): bump the uv group across 23 directories with 3 updates ([#21656](https://github.com/run-llama/llama_index/pull/21656))

### llama-index-postprocessor-bedrock-rerank [0.6.0]

- chore(deps): bump the uv group across 23 directories with 3 updates ([#21656](https://github.com/run-llama/llama_index/pull/21656))

### llama-index-postprocessor-cohere-rerank [0.9.0]

- chore(deps): bump the pip group across 12 directories with 4 updates ([#21724](https://github.com/run-llama/llama_index/pull/21724))
- chore(deps): bump the pip group across 11 directories with 4 updates ([#21726](https://github.com/run-llama/llama_index/pull/21726))
- make tests green again ([#21737](https://github.com/run-llama/llama_index/pull/21737))

### llama-index-postprocessor-colbert-rerank [0.5.0]

- chore(deps): bump the uv group across 23 directories with 3 updates ([#21656](https://github.com/run-llama/llama_index/pull/21656))

### llama-index-postprocessor-colpali-rerank [0.4.0]

- chore(deps): bump the uv group across 23 directories with 3 updates ([#21656](https://github.com/run-llama/llama_index/pull/21656))

### llama-index-postprocessor-contextual-rerank [0.3.0]

- chore(deps): bump the uv group across 23 directories with 3 updates ([#21656](https://github.com/run-llama/llama_index/pull/21656))

### llama-index-postprocessor-dashscope-rerank [0.5.0]

- chore(deps): bump the uv group across 23 directories with 3 updates ([#21656](https://github.com/run-llama/llama_index/pull/21656))

### llama-index-postprocessor-flag-embedding-reranker [0.5.0]

- chore(deps): bump the uv group across 23 directories with 3 updates ([#21656](https://github.com/run-llama/llama_index/pull/21656))

### llama-index-postprocessor-flashrank-rerank [0.2.1]

- chore(deps): bump the uv group across 23 directories with 3 updates ([#21656](https://github.com/run-llama/llama_index/pull/21656))

### llama-index-postprocessor-google-rerank [0.1.0]

- chore(deps): bump the pip group across 12 directories with 4 updates ([#21724](https://github.com/run-llama/llama_index/pull/21724))
- chore(deps): bump the pip group across 11 directories with 4 updates ([#21726](https://github.com/run-llama/llama_index/pull/21726))

### llama-index-postprocessor-jinaai-rerank [0.5.0]

- chore(deps): bump the uv group across 23 directories with 3 updates ([#21656](https://github.com/run-llama/llama_index/pull/21656))

### llama-index-postprocessor-longllmlingua [0.6.0]

- chore(deps): bump the uv group across 23 directories with 3 updates ([#21656](https://github.com/run-llama/llama_index/pull/21656))

### llama-index-postprocessor-mixedbreadai-rerank [0.6.0]

- chore(deps): bump the uv group across 23 directories with 3 updates ([#21656](https://github.com/run-llama/llama_index/pull/21656))

### llama-index-postprocessor-nvidia-rerank [0.6.0]

- chore(deps): bump the pip group across 12 directories with 4 updates ([#21724](https://github.com/run-llama/llama_index/pull/21724))
- chore(deps): bump the pip group across 11 directories with 4 updates ([#21726](https://github.com/run-llama/llama_index/pull/21726))

### llama-index-postprocessor-openvino-rerank [0.6.0]

- chore(deps): bump the uv group across 23 directories with 3 updates ([#21656](https://github.com/run-llama/llama_index/pull/21656))

### llama-index-postprocessor-pinecone-native-rerank [0.3.0]

- chore(deps): bump the uv group across 23 directories with 3 updates ([#21656](https://github.com/run-llama/llama_index/pull/21656))

### llama-index-postprocessor-presidio [0.6.0]

- chore(deps): bump the uv group across 23 directories with 3 updates ([#21656](https://github.com/run-llama/llama_index/pull/21656))

### llama-index-postprocessor-rankgpt-rerank [0.5.0]

- chore(deps): bump the uv group across 23 directories with 3 updates ([#21656](https://github.com/run-llama/llama_index/pull/21656))

### llama-index-postprocessor-rankllm-rerank [0.6.2]

- chore(deps): bump the uv group across 23 directories with 3 updates ([#21656](https://github.com/run-llama/llama_index/pull/21656))
- make tests green again ([#21737](https://github.com/run-llama/llama_index/pull/21737))
- Fix RankLLM PromptMode import compatibility ([#21789](https://github.com/run-llama/llama_index/pull/21789))

### llama-index-postprocessor-sbert-rerank [0.5.0]

- chore(deps): bump the uv group across 23 directories with 3 updates ([#21656](https://github.com/run-llama/llama_index/pull/21656))

### llama-index-postprocessor-siliconflow-rerank [0.4.0]

- chore(deps): bump the uv group across 23 directories with 3 updates ([#21656](https://github.com/run-llama/llama_index/pull/21656))

### llama-index-postprocessor-tei-rerank [0.5.0]

- chore(deps): bump the uv group across 23 directories with 3 updates ([#21656](https://github.com/run-llama/llama_index/pull/21656))

### llama-index-postprocessor-voyageai-rerank [0.5.0]

- chore(deps): bump the uv group across 23 directories with 3 updates ([#21656](https://github.com/run-llama/llama_index/pull/21656))

### llama-index-postprocessor-xinference-rerank [0.4.0]

- chore(deps): bump the uv group across 23 directories with 3 updates ([#21656](https://github.com/run-llama/llama_index/pull/21656))

### llama-index-program-evaporate [0.6.0]

- chore(deps): bump the uv group across 23 directories with 3 updates ([#21656](https://github.com/run-llama/llama_index/pull/21656))

### llama-index-program-guidance [0.5.0]

- chore(deps): bump the uv group across 23 directories with 3 updates ([#21656](https://github.com/run-llama/llama_index/pull/21656))

### llama-index-readers-airbyte-zendesk-support [0.5.0]

- chore(deps): bump langsmith from 0.1.147 to 0.8.0 in /llama-index-integrations/readers/llama-index-readers-airbyte-zendesk-support ([#21655](https://github.com/run-llama/llama_index/pull/21655))

### llama-index-readers-astra-db [0.5.0]

- chore(deps-dev): bump the uv group across 33 directories with 2 updates ([#21657](https://github.com/run-llama/llama_index/pull/21657))

### llama-index-readers-athena [0.5.0]

- chore(deps-dev): bump the uv group across 33 directories with 2 updates ([#21657](https://github.com/run-llama/llama_index/pull/21657))

### llama-index-readers-awadb [0.5.0]

- chore(deps-dev): bump the uv group across 33 directories with 2 updates ([#21657](https://github.com/run-llama/llama_index/pull/21657))
- chore(deps-dev): bump the uv group across 33 directories with 2 updates ([#21663](https://github.com/run-llama/llama_index/pull/21663))

### llama-index-readers-azcognitive-search [0.5.0]

- chore(deps-dev): bump the uv group across 33 directories with 2 updates ([#21657](https://github.com/run-llama/llama_index/pull/21657))
- chore(deps-dev): bump the uv group across 33 directories with 2 updates ([#21663](https://github.com/run-llama/llama_index/pull/21663))

### llama-index-readers-azstorage-blob [0.5.0]

- chore(deps-dev): bump the uv group across 33 directories with 2 updates ([#21657](https://github.com/run-llama/llama_index/pull/21657))
- chore(deps-dev): bump the uv group across 33 directories with 2 updates ([#21663](https://github.com/run-llama/llama_index/pull/21663))

### llama-index-readers-bagel [0.4.1]

- chore(deps-dev): bump the uv group across 33 directories with 2 updates ([#21657](https://github.com/run-llama/llama_index/pull/21657))
- chore(deps-dev): bump the uv group across 33 directories with 2 updates ([#21663](https://github.com/run-llama/llama_index/pull/21663))

### llama-index-readers-bilibili [0.5.0]

- chore(deps-dev): bump the uv group across 33 directories with 2 updates ([#21657](https://github.com/run-llama/llama_index/pull/21657))
- chore(deps-dev): bump the uv group across 33 directories with 2 updates ([#21663](https://github.com/run-llama/llama_index/pull/21663))

### llama-index-readers-bitbucket [0.5.0]

- chore(deps-dev): bump the uv group across 33 directories with 2 updates ([#21657](https://github.com/run-llama/llama_index/pull/21657))
- chore(deps-dev): bump the uv group across 33 directories with 2 updates ([#21663](https://github.com/run-llama/llama_index/pull/21663))
- chore(deps): bump the uv group across 32 directories with 3 updates ([#21664](https://github.com/run-llama/llama_index/pull/21664))

### llama-index-readers-boarddocs [0.5.0]

- chore(deps-dev): bump the uv group across 33 directories with 2 updates ([#21657](https://github.com/run-llama/llama_index/pull/21657))
- chore(deps-dev): bump the uv group across 33 directories with 2 updates ([#21663](https://github.com/run-llama/llama_index/pull/21663))
- chore(deps): bump the uv group across 32 directories with 3 updates ([#21664](https://github.com/run-llama/llama_index/pull/21664))
- chore(deps): bump the uv group across 31 directories with 3 updates ([#21668](https://github.com/run-llama/llama_index/pull/21668))

### llama-index-readers-box [0.5.0]

- chore(deps-dev): bump the uv group across 33 directories with 2 updates ([#21657](https://github.com/run-llama/llama_index/pull/21657))
- chore(deps-dev): bump the uv group across 33 directories with 2 updates ([#21663](https://github.com/run-llama/llama_index/pull/21663))
- chore(deps): bump the uv group across 32 directories with 3 updates ([#21664](https://github.com/run-llama/llama_index/pull/21664))
- chore(deps): bump the uv group across 31 directories with 3 updates ([#21668](https://github.com/run-llama/llama_index/pull/21668))
- chore(deps): bump the pip group across 35 directories with 4 updates ([#21714](https://github.com/run-llama/llama_index/pull/21714))
- chore(deps): bump the uv group across 32 directories with 5 updates ([#21717](https://github.com/run-llama/llama_index/pull/21717))

### llama-index-readers-chatgpt-plugin [0.5.0]

- chore(deps-dev): bump the uv group across 33 directories with 2 updates ([#21657](https://github.com/run-llama/llama_index/pull/21657))
- chore(deps-dev): bump the uv group across 33 directories with 2 updates ([#21663](https://github.com/run-llama/llama_index/pull/21663))
- chore(deps): bump the uv group across 32 directories with 3 updates ([#21664](https://github.com/run-llama/llama_index/pull/21664))
- chore(deps): bump the uv group across 29 directories with 3 updates ([#21665](https://github.com/run-llama/llama_index/pull/21665))
- chore(deps): bump the uv group across 31 directories with 3 updates ([#21668](https://github.com/run-llama/llama_index/pull/21668))
- chore(deps): bump the pip group across 35 directories with 4 updates ([#21714](https://github.com/run-llama/llama_index/pull/21714))
- chore(deps): bump the uv group across 32 directories with 5 updates ([#21717](https://github.com/run-llama/llama_index/pull/21717))
- chore(deps): bump the uv group across 31 directories with 5 updates ([#21719](https://github.com/run-llama/llama_index/pull/21719))

### llama-index-readers-chroma [0.4.1]

- chore(deps-dev): bump the uv group across 33 directories with 2 updates ([#21657](https://github.com/run-llama/llama_index/pull/21657))
- chore(deps-dev): bump the uv group across 33 directories with 2 updates ([#21663](https://github.com/run-llama/llama_index/pull/21663))
- chore(deps): bump the uv group across 32 directories with 3 updates ([#21664](https://github.com/run-llama/llama_index/pull/21664))
- chore(deps): bump the uv group across 29 directories with 3 updates ([#21665](https://github.com/run-llama/llama_index/pull/21665))
- chore(deps): bump the uv group across 31 directories with 3 updates ([#21668](https://github.com/run-llama/llama_index/pull/21668))
- chore(deps): bump the pip group across 35 directories with 4 updates ([#21714](https://github.com/run-llama/llama_index/pull/21714))
- chore(deps): bump the uv group across 32 directories with 5 updates ([#21717](https://github.com/run-llama/llama_index/pull/21717))
- chore(deps): bump the uv group across 31 directories with 5 updates ([#21719](https://github.com/run-llama/llama_index/pull/21719))
- chore(deps): bump the uv group across 31 directories with 5 updates ([#21720](https://github.com/run-llama/llama_index/pull/21720))

### llama-index-readers-confluence [0.7.0]

- chore(deps-dev): bump the uv group across 33 directories with 2 updates ([#21657](https://github.com/run-llama/llama_index/pull/21657))
- chore(deps-dev): bump the uv group across 33 directories with 2 updates ([#21663](https://github.com/run-llama/llama_index/pull/21663))
- chore(deps): bump the uv group across 32 directories with 3 updates ([#21664](https://github.com/run-llama/llama_index/pull/21664))
- chore(deps): bump the uv group across 29 directories with 3 updates ([#21665](https://github.com/run-llama/llama_index/pull/21665))
- chore(deps): bump the uv group across 31 directories with 3 updates ([#21668](https://github.com/run-llama/llama_index/pull/21668))
- chore(deps): bump the pip group across 35 directories with 4 updates ([#21714](https://github.com/run-llama/llama_index/pull/21714))
- chore(deps): bump the uv group across 32 directories with 5 updates ([#21717](https://github.com/run-llama/llama_index/pull/21717))
- chore(deps): bump the uv group across 31 directories with 5 updates ([#21719](https://github.com/run-llama/llama_index/pull/21719))
- chore(deps): bump the uv group across 31 directories with 5 updates ([#21720](https://github.com/run-llama/llama_index/pull/21720))
- chore(deps): bump the uv group across 30 directories with 5 updates ([#21721](https://github.com/run-llama/llama_index/pull/21721))

### llama-index-readers-couchbase [0.5.0]

- chore(deps-dev): bump the uv group across 33 directories with 2 updates ([#21657](https://github.com/run-llama/llama_index/pull/21657))
- chore(deps-dev): bump the uv group across 33 directories with 2 updates ([#21663](https://github.com/run-llama/llama_index/pull/21663))
- chore(deps): bump the uv group across 32 directories with 3 updates ([#21664](https://github.com/run-llama/llama_index/pull/21664))
- chore(deps): bump the uv group across 29 directories with 3 updates ([#21665](https://github.com/run-llama/llama_index/pull/21665))
- chore(deps): bump the uv group across 31 directories with 3 updates ([#21668](https://github.com/run-llama/llama_index/pull/21668))
- chore(deps): bump the pip group across 35 directories with 4 updates ([#21714](https://github.com/run-llama/llama_index/pull/21714))
- chore(deps): bump the uv group across 32 directories with 5 updates ([#21717](https://github.com/run-llama/llama_index/pull/21717))
- chore(deps): bump the uv group across 31 directories with 5 updates ([#21719](https://github.com/run-llama/llama_index/pull/21719))
- chore(deps): bump the uv group across 31 directories with 5 updates ([#21720](https://github.com/run-llama/llama_index/pull/21720))
- chore(deps): bump the uv group across 30 directories with 5 updates ([#21721](https://github.com/run-llama/llama_index/pull/21721))
- chore(deps): bump the uv group across 30 directories with 5 updates ([#21722](https://github.com/run-llama/llama_index/pull/21722))

### llama-index-readers-couchdb [0.5.0]

- chore(deps-dev): bump the uv group across 33 directories with 2 updates ([#21657](https://github.com/run-llama/llama_index/pull/21657))
- chore(deps-dev): bump the uv group across 33 directories with 2 updates ([#21663](https://github.com/run-llama/llama_index/pull/21663))
- chore(deps): bump the uv group across 32 directories with 3 updates ([#21664](https://github.com/run-llama/llama_index/pull/21664))
- chore(deps): bump the uv group across 29 directories with 3 updates ([#21665](https://github.com/run-llama/llama_index/pull/21665))
- chore(deps): bump the uv group across 31 directories with 3 updates ([#21668](https://github.com/run-llama/llama_index/pull/21668))
- chore(deps): bump the pip group across 35 directories with 4 updates ([#21714](https://github.com/run-llama/llama_index/pull/21714))
- chore(deps): bump the uv group across 32 directories with 5 updates ([#21717](https://github.com/run-llama/llama_index/pull/21717))
- chore(deps): bump the uv group across 31 directories with 5 updates ([#21719](https://github.com/run-llama/llama_index/pull/21719))
- chore(deps): bump the uv group across 31 directories with 5 updates ([#21720](https://github.com/run-llama/llama_index/pull/21720))
- chore(deps): bump the uv group across 30 directories with 5 updates ([#21721](https://github.com/run-llama/llama_index/pull/21721))
- chore(deps): bump the uv group across 30 directories with 5 updates ([#21722](https://github.com/run-llama/llama_index/pull/21722))

### llama-index-readers-dad-jokes [0.5.0]

- chore(deps-dev): bump the uv group across 33 directories with 2 updates ([#21657](https://github.com/run-llama/llama_index/pull/21657))
- chore(deps-dev): bump the uv group across 33 directories with 2 updates ([#21663](https://github.com/run-llama/llama_index/pull/21663))
- chore(deps): bump the uv group across 32 directories with 3 updates ([#21664](https://github.com/run-llama/llama_index/pull/21664))
- chore(deps): bump the uv group across 29 directories with 3 updates ([#21665](https://github.com/run-llama/llama_index/pull/21665))
- chore(deps): bump the uv group across 31 directories with 3 updates ([#21668](https://github.com/run-llama/llama_index/pull/21668))
- chore(deps): bump the pip group across 35 directories with 4 updates ([#21714](https://github.com/run-llama/llama_index/pull/21714))
- chore(deps): bump the uv group across 32 directories with 5 updates ([#21717](https://github.com/run-llama/llama_index/pull/21717))
- chore(deps): bump the uv group across 31 directories with 5 updates ([#21719](https://github.com/run-llama/llama_index/pull/21719))
- chore(deps): bump the uv group across 31 directories with 5 updates ([#21720](https://github.com/run-llama/llama_index/pull/21720))
- chore(deps): bump the uv group across 30 directories with 5 updates ([#21721](https://github.com/run-llama/llama_index/pull/21721))
- chore(deps): bump the uv group across 30 directories with 5 updates ([#21722](https://github.com/run-llama/llama_index/pull/21722))

### llama-index-readers-dashscope [0.5.0]

- chore(deps-dev): bump the uv group across 33 directories with 2 updates ([#21657](https://github.com/run-llama/llama_index/pull/21657))
- chore(deps-dev): bump the uv group across 33 directories with 2 updates ([#21663](https://github.com/run-llama/llama_index/pull/21663))
- chore(deps): bump the uv group across 32 directories with 3 updates ([#21664](https://github.com/run-llama/llama_index/pull/21664))
- chore(deps): bump the uv group across 29 directories with 3 updates ([#21665](https://github.com/run-llama/llama_index/pull/21665))
- chore(deps): bump the uv group across 31 directories with 3 updates ([#21668](https://github.com/run-llama/llama_index/pull/21668))
- chore(deps): bump the pip group across 35 directories with 4 updates ([#21714](https://github.com/run-llama/llama_index/pull/21714))
- chore(deps): bump the uv group across 32 directories with 5 updates ([#21717](https://github.com/run-llama/llama_index/pull/21717))
- chore(deps): bump the uv group across 31 directories with 5 updates ([#21719](https://github.com/run-llama/llama_index/pull/21719))
- chore(deps): bump the uv group across 31 directories with 5 updates ([#21720](https://github.com/run-llama/llama_index/pull/21720))
- chore(deps): bump the uv group across 30 directories with 5 updates ([#21721](https://github.com/run-llama/llama_index/pull/21721))
- chore(deps): bump the uv group across 30 directories with 5 updates ([#21722](https://github.com/run-llama/llama_index/pull/21722))

### llama-index-readers-dashvector [0.6.0]

- chore(deps-dev): bump the uv group across 33 directories with 2 updates ([#21657](https://github.com/run-llama/llama_index/pull/21657))
- chore(deps-dev): bump the uv group across 33 directories with 2 updates ([#21663](https://github.com/run-llama/llama_index/pull/21663))
- chore(deps): bump the uv group across 32 directories with 3 updates ([#21664](https://github.com/run-llama/llama_index/pull/21664))
- chore(deps): bump the uv group across 29 directories with 3 updates ([#21665](https://github.com/run-llama/llama_index/pull/21665))
- chore(deps): bump the uv group across 31 directories with 3 updates ([#21668](https://github.com/run-llama/llama_index/pull/21668))
- chore(deps): bump the pip group across 35 directories with 4 updates ([#21714](https://github.com/run-llama/llama_index/pull/21714))
- chore(deps): bump the uv group across 32 directories with 5 updates ([#21717](https://github.com/run-llama/llama_index/pull/21717))
- chore(deps): bump the uv group across 31 directories with 5 updates ([#21719](https://github.com/run-llama/llama_index/pull/21719))
- chore(deps): bump the uv group across 31 directories with 5 updates ([#21720](https://github.com/run-llama/llama_index/pull/21720))
- chore(deps): bump the uv group across 30 directories with 5 updates ([#21721](https://github.com/run-llama/llama_index/pull/21721))
- chore(deps): bump the uv group across 30 directories with 5 updates ([#21722](https://github.com/run-llama/llama_index/pull/21722))

### llama-index-readers-database [0.6.0]

- chore(deps-dev): bump the uv group across 33 directories with 2 updates ([#21657](https://github.com/run-llama/llama_index/pull/21657))
- chore(deps-dev): bump the uv group across 33 directories with 2 updates ([#21663](https://github.com/run-llama/llama_index/pull/21663))
- chore(deps): bump the uv group across 32 directories with 3 updates ([#21664](https://github.com/run-llama/llama_index/pull/21664))
- chore(deps): bump the uv group across 29 directories with 3 updates ([#21665](https://github.com/run-llama/llama_index/pull/21665))
- chore(deps): bump the uv group across 31 directories with 3 updates ([#21668](https://github.com/run-llama/llama_index/pull/21668))
- chore(deps): bump the pip group across 35 directories with 4 updates ([#21714](https://github.com/run-llama/llama_index/pull/21714))
- chore(deps): bump the uv group across 32 directories with 5 updates ([#21717](https://github.com/run-llama/llama_index/pull/21717))
- chore(deps): bump the uv group across 31 directories with 5 updates ([#21719](https://github.com/run-llama/llama_index/pull/21719))
- chore(deps): bump the uv group across 31 directories with 5 updates ([#21720](https://github.com/run-llama/llama_index/pull/21720))
- chore(deps): bump the uv group across 30 directories with 5 updates ([#21721](https://github.com/run-llama/llama_index/pull/21721))
- chore(deps): bump the uv group across 30 directories with 5 updates ([#21722](https://github.com/run-llama/llama_index/pull/21722))
- make tests green again ([#21737](https://github.com/run-llama/llama_index/pull/21737))

### llama-index-readers-datasets [0.2.0]

- chore(deps): bump the pip group across 12 directories with 4 updates ([#21724](https://github.com/run-llama/llama_index/pull/21724))
- chore(deps): bump the pip group across 11 directories with 4 updates ([#21726](https://github.com/run-llama/llama_index/pull/21726))

### llama-index-readers-deeplake [0.5.0]

- chore(deps-dev): bump the uv group across 33 directories with 2 updates ([#21657](https://github.com/run-llama/llama_index/pull/21657))
- chore(deps-dev): bump the uv group across 33 directories with 2 updates ([#21663](https://github.com/run-llama/llama_index/pull/21663))
- chore(deps): bump the uv group across 32 directories with 3 updates ([#21664](https://github.com/run-llama/llama_index/pull/21664))
- chore(deps): bump the uv group across 29 directories with 3 updates ([#21665](https://github.com/run-llama/llama_index/pull/21665))
- chore(deps): bump the uv group across 31 directories with 3 updates ([#21668](https://github.com/run-llama/llama_index/pull/21668))
- chore(deps): bump the pip group across 35 directories with 4 updates ([#21714](https://github.com/run-llama/llama_index/pull/21714))
- chore(deps): bump the uv group across 32 directories with 5 updates ([#21717](https://github.com/run-llama/llama_index/pull/21717))
- chore(deps): bump the uv group across 31 directories with 5 updates ([#21719](https://github.com/run-llama/llama_index/pull/21719))
- chore(deps): bump the uv group across 31 directories with 5 updates ([#21720](https://github.com/run-llama/llama_index/pull/21720))
- chore(deps): bump the uv group across 30 directories with 5 updates ([#21721](https://github.com/run-llama/llama_index/pull/21721))
- chore(deps): bump the uv group across 30 directories with 5 updates ([#21722](https://github.com/run-llama/llama_index/pull/21722))

### llama-index-readers-discord [0.5.0]

- chore(deps-dev): bump the uv group across 33 directories with 2 updates ([#21657](https://github.com/run-llama/llama_index/pull/21657))
- chore(deps-dev): bump the uv group across 33 directories with 2 updates ([#21663](https://github.com/run-llama/llama_index/pull/21663))
- chore(deps): bump the uv group across 32 directories with 3 updates ([#21664](https://github.com/run-llama/llama_index/pull/21664))
- chore(deps): bump the uv group across 29 directories with 3 updates ([#21665](https://github.com/run-llama/llama_index/pull/21665))
- chore(deps): bump the uv group across 31 directories with 3 updates ([#21668](https://github.com/run-llama/llama_index/pull/21668))
- chore(deps): bump the pip group across 35 directories with 4 updates ([#21714](https://github.com/run-llama/llama_index/pull/21714))
- chore(deps): bump the uv group across 32 directories with 5 updates ([#21717](https://github.com/run-llama/llama_index/pull/21717))
- chore(deps): bump the uv group across 31 directories with 5 updates ([#21719](https://github.com/run-llama/llama_index/pull/21719))
- chore(deps): bump the uv group across 31 directories with 5 updates ([#21720](https://github.com/run-llama/llama_index/pull/21720))
- chore(deps): bump the uv group across 30 directories with 5 updates ([#21721](https://github.com/run-llama/llama_index/pull/21721))
- chore(deps): bump the uv group across 30 directories with 5 updates ([#21722](https://github.com/run-llama/llama_index/pull/21722))

### llama-index-readers-docling [0.4.2]

- chore(deps-dev): bump the uv group across 33 directories with 2 updates ([#21657](https://github.com/run-llama/llama_index/pull/21657))
- chore(deps-dev): bump the uv group across 33 directories with 2 updates ([#21663](https://github.com/run-llama/llama_index/pull/21663))
- chore(deps): bump the uv group across 32 directories with 3 updates ([#21664](https://github.com/run-llama/llama_index/pull/21664))
- chore(deps): bump the uv group across 29 directories with 3 updates ([#21665](https://github.com/run-llama/llama_index/pull/21665))
- chore(deps): bump the uv group across 31 directories with 3 updates ([#21668](https://github.com/run-llama/llama_index/pull/21668))
- chore(deps): bump the pip group across 35 directories with 4 updates ([#21714](https://github.com/run-llama/llama_index/pull/21714))
- chore(deps): bump the uv group across 32 directories with 5 updates ([#21717](https://github.com/run-llama/llama_index/pull/21717))
- chore(deps): bump the uv group across 31 directories with 5 updates ([#21719](https://github.com/run-llama/llama_index/pull/21719))
- chore(deps): bump the uv group across 31 directories with 5 updates ([#21720](https://github.com/run-llama/llama_index/pull/21720))
- chore(deps): bump the uv group across 30 directories with 5 updates ([#21721](https://github.com/run-llama/llama_index/pull/21721))
- chore(deps): bump the uv group across 30 directories with 5 updates ([#21722](https://github.com/run-llama/llama_index/pull/21722))

### llama-index-readers-docstring-walker [0.5.0]

- chore(deps-dev): bump the uv group across 33 directories with 2 updates ([#21657](https://github.com/run-llama/llama_index/pull/21657))
- chore(deps-dev): bump the uv group across 33 directories with 2 updates ([#21663](https://github.com/run-llama/llama_index/pull/21663))
- chore(deps): bump the uv group across 32 directories with 3 updates ([#21664](https://github.com/run-llama/llama_index/pull/21664))
- chore(deps): bump the uv group across 29 directories with 3 updates ([#21665](https://github.com/run-llama/llama_index/pull/21665))
- chore(deps): bump the uv group across 31 directories with 3 updates ([#21668](https://github.com/run-llama/llama_index/pull/21668))
- chore(deps): bump the pip group across 35 directories with 4 updates ([#21714](https://github.com/run-llama/llama_index/pull/21714))
- chore(deps): bump the uv group across 32 directories with 5 updates ([#21717](https://github.com/run-llama/llama_index/pull/21717))
- chore(deps): bump the uv group across 31 directories with 5 updates ([#21719](https://github.com/run-llama/llama_index/pull/21719))
- chore(deps): bump the uv group across 31 directories with 5 updates ([#21720](https://github.com/run-llama/llama_index/pull/21720))
- chore(deps): bump the uv group across 30 directories with 5 updates ([#21721](https://github.com/run-llama/llama_index/pull/21721))
- chore(deps): bump the uv group across 30 directories with 5 updates ([#21722](https://github.com/run-llama/llama_index/pull/21722))

### llama-index-readers-docugami [0.5.0]

- chore(deps-dev): bump the uv group across 33 directories with 2 updates ([#21657](https://github.com/run-llama/llama_index/pull/21657))
- chore(deps-dev): bump the uv group across 33 directories with 2 updates ([#21663](https://github.com/run-llama/llama_index/pull/21663))
- chore(deps): bump the uv group across 32 directories with 3 updates ([#21664](https://github.com/run-llama/llama_index/pull/21664))
- chore(deps): bump the uv group across 29 directories with 3 updates ([#21665](https://github.com/run-llama/llama_index/pull/21665))
- chore(deps): bump the uv group across 31 directories with 3 updates ([#21668](https://github.com/run-llama/llama_index/pull/21668))
- chore(deps): bump the pip group across 35 directories with 4 updates ([#21714](https://github.com/run-llama/llama_index/pull/21714))
- chore(deps): bump the uv group across 32 directories with 5 updates ([#21717](https://github.com/run-llama/llama_index/pull/21717))
- chore(deps): bump the uv group across 31 directories with 5 updates ([#21719](https://github.com/run-llama/llama_index/pull/21719))
- chore(deps): bump the uv group across 31 directories with 5 updates ([#21720](https://github.com/run-llama/llama_index/pull/21720))
- chore(deps): bump the uv group across 30 directories with 5 updates ([#21721](https://github.com/run-llama/llama_index/pull/21721))
- chore(deps): bump the uv group across 30 directories with 5 updates ([#21722](https://github.com/run-llama/llama_index/pull/21722))

### llama-index-readers-document360 [0.4.0]

- chore(deps-dev): bump the uv group across 33 directories with 2 updates ([#21657](https://github.com/run-llama/llama_index/pull/21657))
- chore(deps-dev): bump the uv group across 33 directories with 2 updates ([#21663](https://github.com/run-llama/llama_index/pull/21663))
- chore(deps): bump the uv group across 32 directories with 3 updates ([#21664](https://github.com/run-llama/llama_index/pull/21664))
- chore(deps): bump the uv group across 29 directories with 3 updates ([#21665](https://github.com/run-llama/llama_index/pull/21665))
- chore(deps): bump the uv group across 31 directories with 3 updates ([#21668](https://github.com/run-llama/llama_index/pull/21668))
- chore(deps): bump the pip group across 35 directories with 4 updates ([#21714](https://github.com/run-llama/llama_index/pull/21714))
- chore(deps): bump the uv group across 32 directories with 5 updates ([#21717](https://github.com/run-llama/llama_index/pull/21717))
- chore(deps): bump the uv group across 31 directories with 5 updates ([#21719](https://github.com/run-llama/llama_index/pull/21719))
- chore(deps): bump the uv group across 31 directories with 5 updates ([#21720](https://github.com/run-llama/llama_index/pull/21720))
- chore(deps): bump the uv group across 30 directories with 5 updates ([#21721](https://github.com/run-llama/llama_index/pull/21721))
- chore(deps): bump the uv group across 30 directories with 5 updates ([#21722](https://github.com/run-llama/llama_index/pull/21722))

### llama-index-readers-earnings-call-transcript [0.5.0]

- chore(deps-dev): bump the uv group across 33 directories with 2 updates ([#21657](https://github.com/run-llama/llama_index/pull/21657))
- chore(deps-dev): bump the uv group across 33 directories with 2 updates ([#21663](https://github.com/run-llama/llama_index/pull/21663))
- chore(deps): bump the uv group across 32 directories with 3 updates ([#21664](https://github.com/run-llama/llama_index/pull/21664))
- chore(deps): bump the uv group across 29 directories with 3 updates ([#21665](https://github.com/run-llama/llama_index/pull/21665))
- chore(deps): bump the uv group across 31 directories with 3 updates ([#21668](https://github.com/run-llama/llama_index/pull/21668))
- chore(deps): bump the pip group across 35 directories with 4 updates ([#21714](https://github.com/run-llama/llama_index/pull/21714))
- chore(deps): bump the uv group across 32 directories with 5 updates ([#21717](https://github.com/run-llama/llama_index/pull/21717))
- chore(deps): bump the uv group across 31 directories with 5 updates ([#21719](https://github.com/run-llama/llama_index/pull/21719))
- chore(deps): bump the uv group across 31 directories with 5 updates ([#21720](https://github.com/run-llama/llama_index/pull/21720))
- chore(deps): bump the uv group across 30 directories with 5 updates ([#21721](https://github.com/run-llama/llama_index/pull/21721))
- chore(deps): bump the uv group across 30 directories with 5 updates ([#21722](https://github.com/run-llama/llama_index/pull/21722))

### llama-index-readers-elasticsearch [0.5.0]

- chore(deps-dev): bump the uv group across 33 directories with 2 updates ([#21657](https://github.com/run-llama/llama_index/pull/21657))
- chore(deps-dev): bump the uv group across 33 directories with 2 updates ([#21663](https://github.com/run-llama/llama_index/pull/21663))
- chore(deps): bump the uv group across 32 directories with 3 updates ([#21664](https://github.com/run-llama/llama_index/pull/21664))
- chore(deps): bump the uv group across 29 directories with 3 updates ([#21665](https://github.com/run-llama/llama_index/pull/21665))
- chore(deps): bump the uv group across 31 directories with 3 updates ([#21668](https://github.com/run-llama/llama_index/pull/21668))
- chore(deps): bump the pip group across 35 directories with 4 updates ([#21714](https://github.com/run-llama/llama_index/pull/21714))
- chore(deps): bump the uv group across 32 directories with 5 updates ([#21717](https://github.com/run-llama/llama_index/pull/21717))
- chore(deps): bump the uv group across 31 directories with 5 updates ([#21719](https://github.com/run-llama/llama_index/pull/21719))
- chore(deps): bump the uv group across 31 directories with 5 updates ([#21720](https://github.com/run-llama/llama_index/pull/21720))
- chore(deps): bump the uv group across 30 directories with 5 updates ([#21721](https://github.com/run-llama/llama_index/pull/21721))
- chore(deps): bump the uv group across 30 directories with 5 updates ([#21722](https://github.com/run-llama/llama_index/pull/21722))

### llama-index-readers-faiss [0.5.0]

- chore(deps-dev): bump the uv group across 33 directories with 2 updates ([#21657](https://github.com/run-llama/llama_index/pull/21657))
- chore(deps-dev): bump the uv group across 33 directories with 2 updates ([#21663](https://github.com/run-llama/llama_index/pull/21663))
- chore(deps): bump the uv group across 32 directories with 3 updates ([#21664](https://github.com/run-llama/llama_index/pull/21664))
- chore(deps): bump the uv group across 29 directories with 3 updates ([#21665](https://github.com/run-llama/llama_index/pull/21665))
- chore(deps): bump the uv group across 31 directories with 3 updates ([#21668](https://github.com/run-llama/llama_index/pull/21668))
- chore(deps): bump the pip group across 35 directories with 4 updates ([#21714](https://github.com/run-llama/llama_index/pull/21714))
- chore(deps): bump the uv group across 32 directories with 5 updates ([#21717](https://github.com/run-llama/llama_index/pull/21717))
- chore(deps): bump the uv group across 31 directories with 5 updates ([#21719](https://github.com/run-llama/llama_index/pull/21719))
- chore(deps): bump the uv group across 31 directories with 5 updates ([#21720](https://github.com/run-llama/llama_index/pull/21720))
- chore(deps): bump the uv group across 30 directories with 5 updates ([#21721](https://github.com/run-llama/llama_index/pull/21721))
- chore(deps): bump the uv group across 30 directories with 5 updates ([#21722](https://github.com/run-llama/llama_index/pull/21722))

### llama-index-readers-feedly-rss [0.5.0]

- chore(deps-dev): bump the uv group across 33 directories with 2 updates ([#21657](https://github.com/run-llama/llama_index/pull/21657))
- chore(deps-dev): bump the uv group across 33 directories with 2 updates ([#21663](https://github.com/run-llama/llama_index/pull/21663))
- chore(deps): bump the uv group across 32 directories with 3 updates ([#21664](https://github.com/run-llama/llama_index/pull/21664))
- chore(deps): bump the uv group across 29 directories with 3 updates ([#21665](https://github.com/run-llama/llama_index/pull/21665))
- chore(deps): bump the uv group across 31 directories with 3 updates ([#21668](https://github.com/run-llama/llama_index/pull/21668))
- chore(deps): bump the pip group across 35 directories with 4 updates ([#21714](https://github.com/run-llama/llama_index/pull/21714))
- chore(deps): bump the uv group across 32 directories with 5 updates ([#21717](https://github.com/run-llama/llama_index/pull/21717))
- chore(deps): bump the uv group across 31 directories with 5 updates ([#21719](https://github.com/run-llama/llama_index/pull/21719))
- chore(deps): bump the uv group across 31 directories with 5 updates ([#21720](https://github.com/run-llama/llama_index/pull/21720))
- chore(deps): bump the uv group across 30 directories with 5 updates ([#21721](https://github.com/run-llama/llama_index/pull/21721))
- chore(deps): bump the uv group across 30 directories with 5 updates ([#21722](https://github.com/run-llama/llama_index/pull/21722))
- chore(deps): bump the pip group across 12 directories with 4 updates ([#21724](https://github.com/run-llama/llama_index/pull/21724))
- chore(deps): bump the uv group across 21 directories with 3 updates ([#21725](https://github.com/run-llama/llama_index/pull/21725))
- chore(deps): bump the uv group across 17 directories with 3 updates ([#21727](https://github.com/run-llama/llama_index/pull/21727))

### llama-index-readers-feishu-docs [0.5.0]

- chore(deps-dev): bump the uv group across 33 directories with 2 updates ([#21657](https://github.com/run-llama/llama_index/pull/21657))
- chore(deps-dev): bump the uv group across 33 directories with 2 updates ([#21663](https://github.com/run-llama/llama_index/pull/21663))
- chore(deps): bump the uv group across 32 directories with 3 updates ([#21664](https://github.com/run-llama/llama_index/pull/21664))
- chore(deps): bump the uv group across 29 directories with 3 updates ([#21665](https://github.com/run-llama/llama_index/pull/21665))
- chore(deps): bump the uv group across 31 directories with 3 updates ([#21668](https://github.com/run-llama/llama_index/pull/21668))
- chore(deps): bump the pip group across 35 directories with 4 updates ([#21714](https://github.com/run-llama/llama_index/pull/21714))
- chore(deps): bump the uv group across 32 directories with 5 updates ([#21717](https://github.com/run-llama/llama_index/pull/21717))
- chore(deps): bump the uv group across 31 directories with 5 updates ([#21719](https://github.com/run-llama/llama_index/pull/21719))
- chore(deps): bump the uv group across 31 directories with 5 updates ([#21720](https://github.com/run-llama/llama_index/pull/21720))
- chore(deps): bump the uv group across 30 directories with 5 updates ([#21721](https://github.com/run-llama/llama_index/pull/21721))
- chore(deps): bump the uv group across 30 directories with 5 updates ([#21722](https://github.com/run-llama/llama_index/pull/21722))
- chore(deps): bump the pip group across 12 directories with 4 updates ([#21724](https://github.com/run-llama/llama_index/pull/21724))
- chore(deps): bump the uv group across 21 directories with 3 updates ([#21725](https://github.com/run-llama/llama_index/pull/21725))
- chore(deps): bump the pip group across 11 directories with 4 updates ([#21726](https://github.com/run-llama/llama_index/pull/21726))
- chore(deps): bump the uv group across 17 directories with 3 updates ([#21727](https://github.com/run-llama/llama_index/pull/21727))
- chore(deps): bump the uv group across 18 directories with 4 updates ([#21733](https://github.com/run-llama/llama_index/pull/21733))

### llama-index-readers-file [0.6.0]

- chore(deps-dev): bump the uv group across 33 directories with 2 updates ([#21657](https://github.com/run-llama/llama_index/pull/21657))
- chore(deps-dev): bump the uv group across 33 directories with 2 updates ([#21663](https://github.com/run-llama/llama_index/pull/21663))
- chore(deps): bump the uv group across 32 directories with 3 updates ([#21664](https://github.com/run-llama/llama_index/pull/21664))
- chore(deps): bump the uv group across 29 directories with 3 updates ([#21665](https://github.com/run-llama/llama_index/pull/21665))
- chore(deps): bump the uv group across 31 directories with 3 updates ([#21668](https://github.com/run-llama/llama_index/pull/21668))
- chore(deps): bump the pip group across 35 directories with 4 updates ([#21714](https://github.com/run-llama/llama_index/pull/21714))
- chore(deps): bump the uv group across 32 directories with 5 updates ([#21717](https://github.com/run-llama/llama_index/pull/21717))
- chore(deps): bump the uv group across 31 directories with 5 updates ([#21719](https://github.com/run-llama/llama_index/pull/21719))
- chore(deps): bump the uv group across 31 directories with 5 updates ([#21720](https://github.com/run-llama/llama_index/pull/21720))
- chore(deps): bump the uv group across 30 directories with 5 updates ([#21721](https://github.com/run-llama/llama_index/pull/21721))
- chore(deps): bump the uv group across 30 directories with 5 updates ([#21722](https://github.com/run-llama/llama_index/pull/21722))
- chore(deps): bump the pip group across 12 directories with 4 updates ([#21724](https://github.com/run-llama/llama_index/pull/21724))
- chore(deps): bump the uv group across 21 directories with 3 updates ([#21725](https://github.com/run-llama/llama_index/pull/21725))
- chore(deps): bump the pip group across 11 directories with 4 updates ([#21726](https://github.com/run-llama/llama_index/pull/21726))
- chore(deps): bump the uv group across 17 directories with 3 updates ([#21727](https://github.com/run-llama/llama_index/pull/21727))
- chore(deps): bump the uv group across 18 directories with 4 updates ([#21733](https://github.com/run-llama/llama_index/pull/21733))

### llama-index-readers-firebase-realtimedb [0.5.0]

- chore(deps-dev): bump the uv group across 33 directories with 2 updates ([#21657](https://github.com/run-llama/llama_index/pull/21657))
- chore(deps-dev): bump the uv group across 33 directories with 2 updates ([#21663](https://github.com/run-llama/llama_index/pull/21663))
- chore(deps): bump the uv group across 32 directories with 3 updates ([#21664](https://github.com/run-llama/llama_index/pull/21664))
- chore(deps): bump the uv group across 29 directories with 3 updates ([#21665](https://github.com/run-llama/llama_index/pull/21665))
- chore(deps): bump the uv group across 31 directories with 3 updates ([#21668](https://github.com/run-llama/llama_index/pull/21668))
- chore(deps): bump the pip group across 35 directories with 4 updates ([#21714](https://github.com/run-llama/llama_index/pull/21714))
- chore(deps): bump the uv group across 32 directories with 5 updates ([#21717](https://github.com/run-llama/llama_index/pull/21717))
- chore(deps): bump the uv group across 31 directories with 5 updates ([#21719](https://github.com/run-llama/llama_index/pull/21719))
- chore(deps): bump the uv group across 31 directories with 5 updates ([#21720](https://github.com/run-llama/llama_index/pull/21720))
- chore(deps): bump the uv group across 30 directories with 5 updates ([#21721](https://github.com/run-llama/llama_index/pull/21721))
- chore(deps): bump the uv group across 30 directories with 5 updates ([#21722](https://github.com/run-llama/llama_index/pull/21722))
- chore(deps): bump the pip group across 12 directories with 4 updates ([#21724](https://github.com/run-llama/llama_index/pull/21724))
- chore(deps): bump the uv group across 21 directories with 3 updates ([#21725](https://github.com/run-llama/llama_index/pull/21725))
- chore(deps): bump the pip group across 11 directories with 4 updates ([#21726](https://github.com/run-llama/llama_index/pull/21726))
- chore(deps): bump the uv group across 17 directories with 3 updates ([#21727](https://github.com/run-llama/llama_index/pull/21727))
- chore(deps): bump the uv group across 18 directories with 4 updates ([#21733](https://github.com/run-llama/llama_index/pull/21733))

### llama-index-readers-firestore [0.5.0]

- chore(deps-dev): bump the uv group across 33 directories with 2 updates ([#21657](https://github.com/run-llama/llama_index/pull/21657))
- chore(deps-dev): bump the uv group across 33 directories with 2 updates ([#21663](https://github.com/run-llama/llama_index/pull/21663))
- chore(deps): bump the uv group across 32 directories with 3 updates ([#21664](https://github.com/run-llama/llama_index/pull/21664))
- chore(deps): bump the uv group across 29 directories with 3 updates ([#21665](https://github.com/run-llama/llama_index/pull/21665))
- chore(deps): bump the uv group across 31 directories with 3 updates ([#21668](https://github.com/run-llama/llama_index/pull/21668))
- chore(deps): bump the pip group across 35 directories with 4 updates ([#21714](https://github.com/run-llama/llama_index/pull/21714))
- chore(deps): bump the uv group across 32 directories with 5 updates ([#21717](https://github.com/run-llama/llama_index/pull/21717))
- chore(deps): bump the uv group across 31 directories with 5 updates ([#21719](https://github.com/run-llama/llama_index/pull/21719))
- chore(deps): bump the uv group across 31 directories with 5 updates ([#21720](https://github.com/run-llama/llama_index/pull/21720))
- chore(deps): bump the uv group across 30 directories with 5 updates ([#21721](https://github.com/run-llama/llama_index/pull/21721))
- chore(deps): bump the uv group across 30 directories with 5 updates ([#21722](https://github.com/run-llama/llama_index/pull/21722))
- chore(deps): bump the pip group across 12 directories with 4 updates ([#21724](https://github.com/run-llama/llama_index/pull/21724))
- chore(deps): bump the uv group across 21 directories with 3 updates ([#21725](https://github.com/run-llama/llama_index/pull/21725))
- chore(deps): bump the pip group across 11 directories with 4 updates ([#21726](https://github.com/run-llama/llama_index/pull/21726))
- chore(deps): bump the uv group across 17 directories with 3 updates ([#21727](https://github.com/run-llama/llama_index/pull/21727))
- chore(deps): bump the uv group across 18 directories with 4 updates ([#21733](https://github.com/run-llama/llama_index/pull/21733))

### llama-index-readers-gcs [0.6.1]

- chore(deps): bump the pip group across 12 directories with 4 updates ([#21724](https://github.com/run-llama/llama_index/pull/21724))
- chore(deps): bump the pip group across 11 directories with 4 updates ([#21726](https://github.com/run-llama/llama_index/pull/21726))

### llama-index-readers-genius [0.5.0]

- chore(deps-dev): bump the uv group across 33 directories with 2 updates ([#21663](https://github.com/run-llama/llama_index/pull/21663))
- chore(deps): bump the uv group across 32 directories with 3 updates ([#21664](https://github.com/run-llama/llama_index/pull/21664))
- chore(deps): bump the uv group across 29 directories with 3 updates ([#21665](https://github.com/run-llama/llama_index/pull/21665))
- chore(deps): bump the uv group across 31 directories with 3 updates ([#21668](https://github.com/run-llama/llama_index/pull/21668))
- chore(deps): bump the pip group across 35 directories with 4 updates ([#21714](https://github.com/run-llama/llama_index/pull/21714))
- chore(deps): bump the uv group across 32 directories with 5 updates ([#21717](https://github.com/run-llama/llama_index/pull/21717))
- chore(deps): bump the uv group across 31 directories with 5 updates ([#21719](https://github.com/run-llama/llama_index/pull/21719))
- chore(deps): bump the uv group across 31 directories with 5 updates ([#21720](https://github.com/run-llama/llama_index/pull/21720))
- chore(deps): bump the uv group across 30 directories with 5 updates ([#21721](https://github.com/run-llama/llama_index/pull/21721))
- chore(deps): bump the uv group across 30 directories with 5 updates ([#21722](https://github.com/run-llama/llama_index/pull/21722))
- chore(deps): bump the pip group across 12 directories with 4 updates ([#21724](https://github.com/run-llama/llama_index/pull/21724))
- chore(deps): bump the uv group across 21 directories with 3 updates ([#21725](https://github.com/run-llama/llama_index/pull/21725))
- chore(deps): bump the pip group across 11 directories with 4 updates ([#21726](https://github.com/run-llama/llama_index/pull/21726))
- chore(deps): bump the uv group across 17 directories with 3 updates ([#21727](https://github.com/run-llama/llama_index/pull/21727))
- chore(deps): bump the uv group across 18 directories with 4 updates ([#21733](https://github.com/run-llama/llama_index/pull/21733))

### llama-index-readers-gitbook [0.5.0]

- chore(deps-dev): bump the uv group across 33 directories with 2 updates ([#21663](https://github.com/run-llama/llama_index/pull/21663))
- chore(deps): bump the uv group across 32 directories with 3 updates ([#21664](https://github.com/run-llama/llama_index/pull/21664))
- chore(deps): bump the uv group across 29 directories with 3 updates ([#21665](https://github.com/run-llama/llama_index/pull/21665))
- chore(deps): bump the uv group across 31 directories with 3 updates ([#21668](https://github.com/run-llama/llama_index/pull/21668))
- chore(deps): bump the pip group across 35 directories with 4 updates ([#21714](https://github.com/run-llama/llama_index/pull/21714))
- chore(deps): bump the uv group across 32 directories with 5 updates ([#21717](https://github.com/run-llama/llama_index/pull/21717))
- chore(deps): bump the uv group across 31 directories with 5 updates ([#21719](https://github.com/run-llama/llama_index/pull/21719))
- chore(deps): bump the uv group across 31 directories with 5 updates ([#21720](https://github.com/run-llama/llama_index/pull/21720))
- chore(deps): bump the uv group across 30 directories with 5 updates ([#21721](https://github.com/run-llama/llama_index/pull/21721))
- chore(deps): bump the uv group across 30 directories with 5 updates ([#21722](https://github.com/run-llama/llama_index/pull/21722))
- chore(deps): bump the pip group across 12 directories with 4 updates ([#21724](https://github.com/run-llama/llama_index/pull/21724))
- chore(deps): bump the uv group across 21 directories with 3 updates ([#21725](https://github.com/run-llama/llama_index/pull/21725))
- chore(deps): bump the pip group across 11 directories with 4 updates ([#21726](https://github.com/run-llama/llama_index/pull/21726))
- chore(deps): bump the uv group across 17 directories with 3 updates ([#21727](https://github.com/run-llama/llama_index/pull/21727))
- chore(deps): bump the uv group across 18 directories with 4 updates ([#21733](https://github.com/run-llama/llama_index/pull/21733))

### llama-index-readers-github [0.11.2]

- chore(deps): bump the pip group across 12 directories with 4 updates ([#21724](https://github.com/run-llama/llama_index/pull/21724))
- chore(deps): bump the pip group across 11 directories with 4 updates ([#21726](https://github.com/run-llama/llama_index/pull/21726))
- make tests green again ([#21737](https://github.com/run-llama/llama_index/pull/21737))

### llama-index-readers-joplin [0.6.1]

- chore(deps): bump the pip group across 12 directories with 4 updates ([#21724](https://github.com/run-llama/llama_index/pull/21724))
- chore(deps): bump the pip group across 11 directories with 4 updates ([#21726](https://github.com/run-llama/llama_index/pull/21726))

### llama-index-readers-mbox [0.6.1]

- chore(deps): bump the pip group across 12 directories with 4 updates ([#21724](https://github.com/run-llama/llama_index/pull/21724))
- chore(deps): bump the pip group across 11 directories with 4 updates ([#21726](https://github.com/run-llama/llama_index/pull/21726))

### llama-index-readers-microsoft-sharepoint [0.9.1]

- chore(deps): bump the pip group across 12 directories with 4 updates ([#21724](https://github.com/run-llama/llama_index/pull/21724))
- chore(deps): bump the pip group across 11 directories with 4 updates ([#21726](https://github.com/run-llama/llama_index/pull/21726))

### llama-index-readers-obsidian [0.7.1]

- chore(deps): bump the pip group across 12 directories with 4 updates ([#21724](https://github.com/run-llama/llama_index/pull/21724))
- chore(deps): bump the pip group across 11 directories with 4 updates ([#21726](https://github.com/run-llama/llama_index/pull/21726))

### llama-index-readers-pandas-ai [0.6.1]

- chore(deps): bump the pip group across 12 directories with 4 updates ([#21724](https://github.com/run-llama/llama_index/pull/21724))
- chore(deps): bump the pip group across 11 directories with 4 updates ([#21726](https://github.com/run-llama/llama_index/pull/21726))

### llama-index-readers-patentsview [1.1.0]

- chore(deps): bump the pip group across 12 directories with 4 updates ([#21724](https://github.com/run-llama/llama_index/pull/21724))
- chore(deps): bump the pip group across 11 directories with 4 updates ([#21726](https://github.com/run-llama/llama_index/pull/21726))

### llama-index-readers-pebblo [0.6.1]

- chore(deps): bump the pip group across 12 directories with 4 updates ([#21724](https://github.com/run-llama/llama_index/pull/21724))
- chore(deps): bump the pip group across 11 directories with 4 updates ([#21726](https://github.com/run-llama/llama_index/pull/21726))

### llama-index-readers-s3 [0.6.1]

- chore(deps): bump the pip group across 12 directories with 4 updates ([#21724](https://github.com/run-llama/llama_index/pull/21724))
- chore(deps): bump the pip group across 11 directories with 4 updates ([#21726](https://github.com/run-llama/llama_index/pull/21726))

### llama-index-readers-service-now [0.3.0]

- chore(deps): bump the uv group across 32 directories with 5 updates ([#21717](https://github.com/run-llama/llama_index/pull/21717))
- chore(deps): bump the uv group across 31 directories with 5 updates ([#21719](https://github.com/run-llama/llama_index/pull/21719))
- chore(deps): bump the uv group across 31 directories with 5 updates ([#21720](https://github.com/run-llama/llama_index/pull/21720))
- chore(deps): bump the uv group across 30 directories with 5 updates ([#21721](https://github.com/run-llama/llama_index/pull/21721))
- chore(deps): bump the uv group across 30 directories with 5 updates ([#21722](https://github.com/run-llama/llama_index/pull/21722))
- chore(deps): bump the pip group across 12 directories with 4 updates ([#21724](https://github.com/run-llama/llama_index/pull/21724))
- chore(deps): bump the uv group across 21 directories with 3 updates ([#21725](https://github.com/run-llama/llama_index/pull/21725))
- chore(deps): bump the pip group across 11 directories with 4 updates ([#21726](https://github.com/run-llama/llama_index/pull/21726))
- chore(deps): bump the uv group across 17 directories with 3 updates ([#21727](https://github.com/run-llama/llama_index/pull/21727))
- chore(deps): bump the uv group across 18 directories with 4 updates ([#21733](https://github.com/run-llama/llama_index/pull/21733))
- chore(deps): bump the pip group across 1 directory with 1 update ([#21735](https://github.com/run-llama/llama_index/pull/21735))

### llama-index-readers-whatsapp [0.5.0]

- chore(deps): bump the pip group across 12 directories with 4 updates ([#21724](https://github.com/run-llama/llama_index/pull/21724))
- chore(deps): bump the pip group across 11 directories with 4 updates ([#21726](https://github.com/run-llama/llama_index/pull/21726))

### llama-index-retrievers-you [1.1.0]

- chore(deps): bump the pip group across 12 directories with 4 updates ([#21724](https://github.com/run-llama/llama_index/pull/21724))
- chore(deps): bump the pip group across 11 directories with 4 updates ([#21726](https://github.com/run-llama/llama_index/pull/21726))

### llama-index-storage-chat-store-opensearch [0.2.0]

- chore(deps): bump the pip group across 12 directories with 4 updates ([#21724](https://github.com/run-llama/llama_index/pull/21724))
- chore(deps): bump the uv group across 21 directories with 3 updates ([#21725](https://github.com/run-llama/llama_index/pull/21725))
- chore(deps): bump the pip group across 11 directories with 4 updates ([#21726](https://github.com/run-llama/llama_index/pull/21726))
- chore(deps): bump the uv group across 17 directories with 3 updates ([#21727](https://github.com/run-llama/llama_index/pull/21727))
- chore(deps): bump the uv group across 18 directories with 4 updates ([#21733](https://github.com/run-llama/llama_index/pull/21733))

### llama-index-storage-chat-store-redis [0.7.0]

- chore(deps): bump the pip group across 12 directories with 4 updates ([#21724](https://github.com/run-llama/llama_index/pull/21724))
- chore(deps): bump the pip group across 11 directories with 4 updates ([#21726](https://github.com/run-llama/llama_index/pull/21726))

### llama-index-tools-airweave [0.3.0]

- make tests green again ([#21737](https://github.com/run-llama/llama_index/pull/21737))

### llama-index-tools-aws-bedrock-agentcore [0.3.1]

- chore(deps): bump the pip group across 12 directories with 4 updates ([#21724](https://github.com/run-llama/llama_index/pull/21724))
- chore(deps): bump the pip group across 11 directories with 4 updates ([#21726](https://github.com/run-llama/llama_index/pull/21726))

### llama-index-tools-exa [0.5.2]

- exa tool: update to current API conventions ([#21705](https://github.com/run-llama/llama_index/pull/21705))

### llama-index-tools-google [0.7.1]

- chore(deps): bump the pip group across 12 directories with 4 updates ([#21724](https://github.com/run-llama/llama_index/pull/21724))
- chore(deps): bump the pip group across 11 directories with 4 updates ([#21726](https://github.com/run-llama/llama_index/pull/21726))

### llama-index-tools-mcp-discovery [0.2.0]

- chore(deps): bump the pip group across 12 directories with 4 updates ([#21724](https://github.com/run-llama/llama_index/pull/21724))
- chore(deps): bump the pip group across 11 directories with 4 updates ([#21726](https://github.com/run-llama/llama_index/pull/21726))

### llama-index-tools-playwright [0.4.0]

- make tests green again ([#21737](https://github.com/run-llama/llama_index/pull/21737))

### llama-index-tools-seltz [0.4.0]

- chore(deps): bump the pip group across 12 directories with 4 updates ([#21724](https://github.com/run-llama/llama_index/pull/21724))
- chore(deps): bump the pip group across 11 directories with 4 updates ([#21726](https://github.com/run-llama/llama_index/pull/21726))
- make tests green again ([#21737](https://github.com/run-llama/llama_index/pull/21737))

### llama-index-tools-typecast [0.1.0]

- chore(deps): bump the pip group across 12 directories with 4 updates ([#21724](https://github.com/run-llama/llama_index/pull/21724))
- chore(deps): bump the pip group across 11 directories with 4 updates ([#21726](https://github.com/run-llama/llama_index/pull/21726))

### llama-index-utils-huggingface [0.5.0]

- chore(deps): bump the pip group across 12 directories with 4 updates ([#21724](https://github.com/run-llama/llama_index/pull/21724))
- chore(deps): bump the pip group across 11 directories with 4 updates ([#21726](https://github.com/run-llama/llama_index/pull/21726))

### llama-index-utils-oracleai [0.4.0]

- chore(deps): bump the pip group across 12 directories with 4 updates ([#21724](https://github.com/run-llama/llama_index/pull/21724))
- chore(deps): bump the pip group across 11 directories with 4 updates ([#21726](https://github.com/run-llama/llama_index/pull/21726))

### llama-index-utils-qianfan [0.5.0]

- chore(deps): bump the pip group across 12 directories with 4 updates ([#21724](https://github.com/run-llama/llama_index/pull/21724))
- chore(deps): bump the pip group across 11 directories with 4 updates ([#21726](https://github.com/run-llama/llama_index/pull/21726))

### llama-index-vector-stores-couchbase [0.7.1]

- chore(deps): bump the pip group across 12 directories with 4 updates ([#21724](https://github.com/run-llama/llama_index/pull/21724))
- chore(deps): bump the pip group across 11 directories with 4 updates ([#21726](https://github.com/run-llama/llama_index/pull/21726))
- make tests green again ([#21737](https://github.com/run-llama/llama_index/pull/21737))

### llama-index-vector-stores-milvus [1.1.1]

- chore(deps): bump the pip group across 12 directories with 4 updates ([#21724](https://github.com/run-llama/llama_index/pull/21724))
- chore(deps): bump the pip group across 11 directories with 4 updates ([#21726](https://github.com/run-llama/llama_index/pull/21726))
- fix(milvus): resolve issue with string_expr and filter precedence for… ([#21779](https://github.com/run-llama/llama_index/pull/21779))

### llama-index-vector-stores-mongodb [0.10.1]

- chore(deps): bump the pip group across 12 directories with 4 updates ([#21724](https://github.com/run-llama/llama_index/pull/21724))
- chore(deps): bump the pip group across 11 directories with 4 updates ([#21726](https://github.com/run-llama/llama_index/pull/21726))

### llama-index-vector-stores-oceanbase [0.4.0]

- chore(deps): bump the pip group across 12 directories with 4 updates ([#21724](https://github.com/run-llama/llama_index/pull/21724))
- chore(deps): bump the pip group across 11 directories with 4 updates ([#21726](https://github.com/run-llama/llama_index/pull/21726))

### llama-index-vector-stores-opensearch [1.2.0]

- chore(deps): bump the pip group across 12 directories with 4 updates ([#21724](https://github.com/run-llama/llama_index/pull/21724))
- chore(deps): bump the pip group across 11 directories with 4 updates ([#21726](https://github.com/run-llama/llama_index/pull/21726))

### llama-index-vector-stores-qdrant [0.10.1]

- chore(deps): bump the uv group across 31 directories with 3 updates ([#21668](https://github.com/run-llama/llama_index/pull/21668))
- chore(deps): bump the pip group across 35 directories with 4 updates ([#21714](https://github.com/run-llama/llama_index/pull/21714))
- chore(deps): bump the uv group across 32 directories with 5 updates ([#21717](https://github.com/run-llama/llama_index/pull/21717))
- chore(deps): bump the uv group across 31 directories with 5 updates ([#21719](https://github.com/run-llama/llama_index/pull/21719))
- chore(deps): bump the uv group across 31 directories with 5 updates ([#21720](https://github.com/run-llama/llama_index/pull/21720))
- chore(deps): bump the uv group across 30 directories with 5 updates ([#21721](https://github.com/run-llama/llama_index/pull/21721))
- chore(deps): bump the uv group across 30 directories with 5 updates ([#21722](https://github.com/run-llama/llama_index/pull/21722))
- chore(deps): bump the pip group across 12 directories with 4 updates ([#21724](https://github.com/run-llama/llama_index/pull/21724))
- chore(deps): bump the uv group across 21 directories with 3 updates ([#21725](https://github.com/run-llama/llama_index/pull/21725))
- chore(deps): bump the pip group across 11 directories with 4 updates ([#21726](https://github.com/run-llama/llama_index/pull/21726))
- chore(deps): bump the uv group across 17 directories with 3 updates ([#21727](https://github.com/run-llama/llama_index/pull/21727))
- chore(deps): bump the uv group across 18 directories with 4 updates ([#21733](https://github.com/run-llama/llama_index/pull/21733))
- make tests green again ([#21737](https://github.com/run-llama/llama_index/pull/21737))

### llama-index-vector-stores-vearch [0.5.0]

- Update Vearch demo notebook imports ([#21887](https://github.com/run-llama/llama_index/pull/21887))

### llama-index-vector-stores-weaviate [1.6.1]

- fix: support newer Weaviate batch context managers ([#21507](https://github.com/run-llama/llama_index/pull/21507))

### llama-index-vector-stores-yugabytedb [0.6.0]

- fix: correct documentation typos in You.com and YugabyteDB docs. ([#21709](https://github.com/run-llama/llama_index/pull/21709))
- chore(deps): bump the pip group across 12 directories with 4 updates ([#21724](https://github.com/run-llama/llama_index/pull/21724))
- chore(deps): bump the pip group across 11 directories with 4 updates ([#21726](https://github.com/run-llama/llama_index/pull/21726))

### llama-index-voice-agents-gemini-live [0.4.1]

- chore: allow `google-genai` 2.0+ SDKs ([#21710](https://github.com/run-llama/llama_index/pull/21710))
- chore(deps): bump the pip group across 35 directories with 4 updates ([#21714](https://github.com/run-llama/llama_index/pull/21714))
- chore(deps): bump the uv group across 32 directories with 5 updates ([#21717](https://github.com/run-llama/llama_index/pull/21717))
- chore(deps): bump the uv group across 31 directories with 5 updates ([#21719](https://github.com/run-llama/llama_index/pull/21719))
- chore(deps): bump the uv group across 31 directories with 5 updates ([#21720](https://github.com/run-llama/llama_index/pull/21720))
- chore(deps): bump the uv group across 30 directories with 5 updates ([#21721](https://github.com/run-llama/llama_index/pull/21721))
- chore(deps): bump the uv group across 30 directories with 5 updates ([#21722](https://github.com/run-llama/llama_index/pull/21722))
- chore(deps): bump the pip group across 12 directories with 4 updates ([#21724](https://github.com/run-llama/llama_index/pull/21724))
- chore(deps): bump the uv group across 21 directories with 3 updates ([#21725](https://github.com/run-llama/llama_index/pull/21725))
- chore(deps): bump the pip group across 11 directories with 4 updates ([#21726](https://github.com/run-llama/llama_index/pull/21726))
- chore(deps): bump the uv group across 17 directories with 3 updates ([#21727](https://github.com/run-llama/llama_index/pull/21727))
- chore(deps): bump the uv group across 18 directories with 4 updates ([#21733](https://github.com/run-llama/llama_index/pull/21733))
- make tests green again ([#21737](https://github.com/run-llama/llama_index/pull/21737))

## [2026-05-14]

### llama-index-agent-agentmesh [0.2.0]

- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-callbacks-agentops [0.5.0]

- chore(deps): bump the pip group across 55 directories with 3 updates ([#21435](https://github.com/run-llama/llama_index/pull/21435))
- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-callbacks-aim [0.4.1]

- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-callbacks-argilla [0.5.0]

- chore(deps): bump the pip group across 55 directories with 3 updates ([#21435](https://github.com/run-llama/llama_index/pull/21435))

### llama-index-callbacks-arize-phoenix [0.7.0]

- chore(deps): bump the pip group across 55 directories with 3 updates ([#21435](https://github.com/run-llama/llama_index/pull/21435))
- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-callbacks-honeyhive [0.5.0]

- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-callbacks-langfuse [0.5.0]

- chore(deps): bump the pip group across 55 directories with 3 updates ([#21435](https://github.com/run-llama/llama_index/pull/21435))
- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-callbacks-literalai [1.4.0]

- chore(deps): bump the pip group across 55 directories with 3 updates ([#21435](https://github.com/run-llama/llama_index/pull/21435))
- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-callbacks-openinference [0.5.0]

- chore(deps): bump the pip group across 55 directories with 3 updates ([#21435](https://github.com/run-llama/llama_index/pull/21435))
- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-callbacks-opik [1.3.0]

- chore(deps): bump the pip group across 55 directories with 3 updates ([#21435](https://github.com/run-llama/llama_index/pull/21435))
- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-callbacks-promptlayer [0.5.0]

- chore(deps): bump the pip group across 55 directories with 3 updates ([#21435](https://github.com/run-llama/llama_index/pull/21435))
- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-callbacks-uptrain [0.6.0]

- chore(deps): bump the pip group across 55 directories with 3 updates ([#21435](https://github.com/run-llama/llama_index/pull/21435))
- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-callbacks-wandb [0.5.0]

- chore(deps): bump the pip group across 55 directories with 3 updates ([#21435](https://github.com/run-llama/llama_index/pull/21435))
- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-core [0.14.22]

- fix(instrumentation): let SparseEmbeddingStartEvent inherit EmbeddingStartEvent ([#21119](https://github.com/run-llama/llama_index/pull/21119))
- fix: remove stale exports from public **all** lists ([#21133](https://github.com/run-llama/llama_index/pull/21133))
- Preserve cache writes from multiprocessing workers in IngestionPipeline ([#21301](https://github.com/run-llama/llama_index/pull/21301))
- feat(core): Multimodal synthesis ([#21374](https://github.com/run-llama/llama_index/pull/21374))
- fix: avoid mutating response.raw in LLM event model_dump methods ([#21424](https://github.com/run-llama/llama_index/pull/21424))
- fix(memory): handle DocumentBlock in Memory.\_estimate_token_count ([#21529](https://github.com/run-llama/llama_index/pull/21529))
- fix: propagate contextvars in sync_to_async for FunctionTool ([#21558](https://github.com/run-llama/llama_index/pull/21558))
- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-embeddings-adapter [0.5.0]

- chore(deps): bump the pip group across 55 directories with 3 updates ([#21435](https://github.com/run-llama/llama_index/pull/21435))
- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-embeddings-alephalpha [0.5.0]

- chore(deps): bump the pip group across 55 directories with 3 updates ([#21435](https://github.com/run-llama/llama_index/pull/21435))
- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-embeddings-alibabacloud-aisearch [0.4.0]

- chore(deps): bump the pip group across 55 directories with 3 updates ([#21435](https://github.com/run-llama/llama_index/pull/21435))
- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-embeddings-anyscale [0.5.1]

- chore(deps): bump the pip group across 55 directories with 3 updates ([#21435](https://github.com/run-llama/llama_index/pull/21435))
- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-embeddings-autoembeddings [0.3.0]

- chore(deps): bump the pip group across 55 directories with 3 updates ([#21435](https://github.com/run-llama/llama_index/pull/21435))
- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-embeddings-azure-inference [0.5.0]

- chore(deps): bump the pip group across 55 directories with 3 updates ([#21435](https://github.com/run-llama/llama_index/pull/21435))
- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-embeddings-azure-openai [0.5.2]

- chore(deps): bump the pip group across 55 directories with 3 updates ([#21435](https://github.com/run-llama/llama_index/pull/21435))
- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-embeddings-baseten [0.2.1]

- chore(deps): bump the pip group across 55 directories with 3 updates ([#21435](https://github.com/run-llama/llama_index/pull/21435))
- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-embeddings-bedrock [0.8.0]

- chore(deps): bump the pip group across 55 directories with 3 updates ([#21435](https://github.com/run-llama/llama_index/pull/21435))
- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-embeddings-clarifai [0.5.0]

- chore(deps): bump the pip group across 55 directories with 3 updates ([#21435](https://github.com/run-llama/llama_index/pull/21435))
- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-embeddings-clip [0.6.0]

- chore(deps): bump the pip group across 55 directories with 3 updates ([#21435](https://github.com/run-llama/llama_index/pull/21435))
- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-embeddings-cloudflare-workersai [0.5.0]

- chore(deps): bump the pip group across 55 directories with 3 updates ([#21435](https://github.com/run-llama/llama_index/pull/21435))
- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-embeddings-cohere [0.8.0]

- chore(deps): bump the pip group across 55 directories with 3 updates ([#21435](https://github.com/run-llama/llama_index/pull/21435))

### llama-index-embeddings-dashscope [0.5.0]

- chore(deps): bump the pip group across 55 directories with 3 updates ([#21435](https://github.com/run-llama/llama_index/pull/21435))
- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-embeddings-databricks [0.5.1]

- chore(deps): bump the pip group across 55 directories with 3 updates ([#21435](https://github.com/run-llama/llama_index/pull/21435))
- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-embeddings-deepinfra [0.5.0]

- chore(deps): bump the pip group across 55 directories with 3 updates ([#21435](https://github.com/run-llama/llama_index/pull/21435))
- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-embeddings-elasticsearch [0.5.0]

- chore(deps): bump the pip group across 55 directories with 3 updates ([#21435](https://github.com/run-llama/llama_index/pull/21435))
- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-embeddings-fastembed [0.6.0]

- chore(deps): bump the pip group across 55 directories with 3 updates ([#21435](https://github.com/run-llama/llama_index/pull/21435))
- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-embeddings-fireworks [0.5.2]

- chore(deps): bump the pip group across 55 directories with 3 updates ([#21435](https://github.com/run-llama/llama_index/pull/21435))
- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-embeddings-gaudi [0.4.0]

- chore(deps): bump the pip group across 55 directories with 3 updates ([#21435](https://github.com/run-llama/llama_index/pull/21435))
- chore(deps): bump the pip group across 2 directories with 2 updates ([#21436](https://github.com/run-llama/llama_index/pull/21436))
- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-embeddings-gigachat [0.5.0]

- chore(deps): bump the pip group across 55 directories with 3 updates ([#21435](https://github.com/run-llama/llama_index/pull/21435))
- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-embeddings-google-genai [0.5.0]

- chore(deps): bump the pip group across 55 directories with 3 updates ([#21435](https://github.com/run-llama/llama_index/pull/21435))
- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-embeddings-heroku [0.2.0]

- chore(deps): bump the pip group across 55 directories with 3 updates ([#21435](https://github.com/run-llama/llama_index/pull/21435))

### llama-index-embeddings-huggingface [0.7.0]

- chore(deps): bump the pip group across 55 directories with 3 updates ([#21435](https://github.com/run-llama/llama_index/pull/21435))
- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-embeddings-huggingface-api [0.5.0]

- chore(deps): bump the pip group across 55 directories with 3 updates ([#21435](https://github.com/run-llama/llama_index/pull/21435))
- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-embeddings-huggingface-openvino [0.7.0]

- chore(deps): bump the pip group across 55 directories with 3 updates ([#21435](https://github.com/run-llama/llama_index/pull/21435))
- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-embeddings-huggingface-optimum [0.4.1]

- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-embeddings-huggingface-optimum-intel [0.5.0]

- chore(deps): bump the pip group across 55 directories with 3 updates ([#21435](https://github.com/run-llama/llama_index/pull/21435))
- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-embeddings-ibm [0.6.0.post1]

- chore(deps): bump the pip group across 55 directories with 3 updates ([#21435](https://github.com/run-llama/llama_index/pull/21435))

### llama-index-embeddings-instructor [0.5.0]

- chore(deps): bump the pip group across 55 directories with 3 updates ([#21435](https://github.com/run-llama/llama_index/pull/21435))
- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-embeddings-isaacus [0.2.0]

- chore(deps): bump the pip group across 55 directories with 3 updates ([#21435](https://github.com/run-llama/llama_index/pull/21435))
- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-embeddings-jinaai [0.6.0]

- chore(deps): bump the pip group across 55 directories with 3 updates ([#21435](https://github.com/run-llama/llama_index/pull/21435))

### llama-index-embeddings-langchain [0.5.0]

- chore(deps): bump the pip group across 55 directories with 3 updates ([#21435](https://github.com/run-llama/llama_index/pull/21435))
- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-embeddings-litellm [0.5.0]

- chore(deps): bump the pip group across 55 directories with 3 updates ([#21435](https://github.com/run-llama/llama_index/pull/21435))
- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-embeddings-llamafile [0.5.0]

- chore(deps): bump the pip group across 55 directories with 3 updates ([#21435](https://github.com/run-llama/llama_index/pull/21435))
- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-embeddings-llm-rails [0.5.0]

- chore(deps): bump the pip group across 55 directories with 3 updates ([#21435](https://github.com/run-llama/llama_index/pull/21435))
- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-embeddings-mistralai [0.5.1]

- "fix: replace Mistral with MistralClient for mistralai>=2.0.0" ([#21126](https://github.com/run-llama/llama_index/pull/21126))
- chore(deps): bump the pip group across 55 directories with 3 updates ([#21435](https://github.com/run-llama/llama_index/pull/21435))
- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-embeddings-mixedbreadai [0.6.0]

- chore(deps): bump the pip group across 55 directories with 3 updates ([#21435](https://github.com/run-llama/llama_index/pull/21435))
- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-embeddings-modelscope [0.6.0]

- chore(deps): bump the pip group across 55 directories with 3 updates ([#21435](https://github.com/run-llama/llama_index/pull/21435))

### llama-index-embeddings-nebius [0.5.1]

- chore(deps): bump the pip group across 55 directories with 3 updates ([#21435](https://github.com/run-llama/llama_index/pull/21435))
- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-embeddings-netmind [0.3.0]

- chore(deps): bump the pip group across 55 directories with 3 updates ([#21435](https://github.com/run-llama/llama_index/pull/21435))
- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-embeddings-nomic [0.8.0]

- chore(deps): bump the pip group across 55 directories with 3 updates ([#21435](https://github.com/run-llama/llama_index/pull/21435))
- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-embeddings-nvidia [0.5.1]

- chore(deps): bump the pip group across 55 directories with 3 updates ([#21435](https://github.com/run-llama/llama_index/pull/21435))

### llama-index-embeddings-oci-data-science [0.3.0]

- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-embeddings-oci-genai [0.5.0]

- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-embeddings-ollama [0.9.0]

- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-embeddings-opea [0.3.1]

- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-embeddings-openai [0.6.0]

- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-embeddings-openai-like [0.3.1]

- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-embeddings-openvino-genai [0.7.0]

- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-embeddings-oracleai [0.4.0]

- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-embeddings-premai [0.5.0]

- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-embeddings-sagemaker-endpoint [0.5.0]

- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-embeddings-siliconflow [0.4.0]

- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-embeddings-text-embeddings-inference [0.5.0]

- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-embeddings-textembed [0.4.0]

- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-embeddings-together [0.5.0]

- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-embeddings-vertex [0.5.0]

- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-embeddings-vertex-endpoint [0.4.0]

- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-embeddings-vllm [0.1.1]

- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-embeddings-voyageai [0.6.0]

- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-embeddings-xinference [0.4.0]

- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-embeddings-yandexgpt [0.5.0]

- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-embeddings-zhipuai [0.4.0]

- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-evaluation-tonic-validate [0.6.0]

- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-extractors-entity [0.5.0]

- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-extractors-marvin [0.5.0]

- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-extractors-relik [0.4.1]

- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-graph-rag-cognee [0.3.1]

- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-graph-stores-ApertureDB [0.3.0]

- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-graph-stores-falkordb [0.5.0]

- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-graph-stores-memgraph [0.5.0]

- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-graph-stores-nebula [0.6.0]

- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-graph-stores-neo4j [0.7.0]

- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-graph-stores-neptune [0.5.0]

- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-graph-stores-tidb [0.5.0]

- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-indices-managed-bge-m3 [0.7.0]

- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-indices-managed-colbert [0.6.0]

- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-indices-managed-dashscope [0.5.0]

- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-indices-managed-google [0.5.0]

- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-indices-managed-lancedb [0.3.1]

- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-indices-managed-llama-cloud [0.11.1]

- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-indices-managed-postgresml [0.6.0]

- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-indices-managed-vectara [0.6.0]

- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-indices-managed-vertexai [0.4.0]

- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-ingestion-ray [0.2.0]

- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-instrumentation [0.5.0]

- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-llms-aibadgr [0.2.0]

- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-llms-alephalpha [0.5.0]

- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-llms-alibabacloud-aisearch [0.4.0]

- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-llms-anthropic [0.11.4]

- anthropic: propagate thinking_delta in streaming additional_kwargs ([#21423](https://github.com/run-llama/llama_index/pull/21423))
- bedrock opus + anthropic opus 4.7 support ([#21438](https://github.com/run-llama/llama_index/pull/21438))
- mass uv lock --upgrade ([#21638](https://github.com/run-llama/llama_index/pull/21638))

### llama-index-llms-azure-openai [0.5.5]

- fix(llms-azure-openai): add pytest-asyncio to dev dependencies ([#21500](https://github.com/run-llama/llama_index/pull/21500))
- fix(azure-openai): use deployment name in AzureOpenAIResponses structured predict ([#21530](https://github.com/run-llama/llama_index/pull/21530))

### llama-index-llms-bedrock-converse [0.14.10]

- feat(bedrock-converse): Add support for Claude Opus 4.7 ([#21405](https://github.com/run-llama/llama_index/pull/21405))
- bedrock opus + anthropic opus 4.7 support ([#21438](https://github.com/run-llama/llama_index/pull/21438))
- do not pass temperature to bedrock retry ([#21439](https://github.com/run-llama/llama_index/pull/21439))
- feat(bedrock-converse): add async_client param to reuse a shared aioboto3 client ([#21556](https://github.com/run-llama/llama_index/pull/21556))

### llama-index-llms-google-genai [0.9.4]

- fix google genai thought output while streaming ([#21502](https://github.com/run-llama/llama_index/pull/21502))
- fix(google-genai): pass DocumentBlock.title as display_name to File API ([#21641](https://github.com/run-llama/llama_index/pull/21641))
- Google LLMs: Error earlier if file is too large with vertexai client ([#21642](https://github.com/run-llama/llama_index/pull/21642))
- vbump google genai ([#21649](https://github.com/run-llama/llama_index/pull/21649))

### llama-index-llms-mistralai [0.10.2]

- "fix: replace Mistral with MistralClient for mistralai>=2.0.0" ([#21126](https://github.com/run-llama/llama_index/pull/21126))
- Version bump ([#21547](https://github.com/run-llama/llama_index/pull/21547))

### llama-index-llms-openai [0.7.8]

- fix: JSON-serialize ToolCallBlock.tool_kwargs in to_openai_message_dict ([#21389](https://github.com/run-llama/llama_index/pull/21389))
- feat(llms-openai): add gpt-5.5 and gpt-5.5-2026-04-23 model support ([#21499](https://github.com/run-llama/llama_index/pull/21499))
- fix(azure-openai): use deployment name in AzureOpenAIResponses structured predict ([#21530](https://github.com/run-llama/llama_index/pull/21530))

### llama-index-llms-openai-like [0.7.2]

- feat(openai-like): add OpenAILikeResponses class for Responses API ([#21246](https://github.com/run-llama/llama_index/pull/21246))

### llama-index-observability-otel [0.6.2]

- [bugfix] otel spans should attach to context ([#21533](https://github.com/run-llama/llama_index/pull/21533))
- Fix OTel context detach noise ([#21587](https://github.com/run-llama/llama_index/pull/21587))

### llama-index-utils-azure [0.5.0]

- chore(deps): bump the pip group across 55 directories with 3 updates ([#21435](https://github.com/run-llama/llama_index/pull/21435))

### llama-index-vector-stores-qdrant [0.10.1]

- fix(qdrant): fix async collection creation using AsyncQdrantClient ([#21419](https://github.com/run-llama/llama_index/pull/21419))

## [2026-04-21]

### llama-index-callbacks-honeyhive [0.5.0]

- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-core [0.14.21]

- fix(core): prevent `KeyError` in `DocumentSummaryIndex.delete_nodes` when invalid node ID is provided ([#21067](https://github.com/run-llama/llama_index/pull/21067))
- fix(core): handle `ValueError` and `TypeError` from structured output failures ([#21090](https://github.com/run-llama/llama_index/pull/21090))
- fix: add explicit UTF-8 encoding to persistence layer fs.open() calls ([#21111](https://github.com/run-llama/llama_index/pull/21111))
- Fix Breaking Change in Message Block Buffer Resolution ([#21339](https://github.com/run-llama/llama_index/pull/21339))
- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-embeddings-huggingface-optimum [0.4.1]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))

### llama-index-embeddings-nvidia [0.5.1]

- feat(embeddings-nvidia): add http client support ([#21046](https://github.com/run-llama/llama_index/pull/21046))

### llama-index-embeddings-oracleai [0.4.0]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))

### llama-index-embeddings-premai [0.5.0]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))
- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-embeddings-text-embeddings-inference [0.5.0]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))

### llama-index-embeddings-textembed [0.4.0]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))

### llama-index-embeddings-together [0.5.0]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))

### llama-index-embeddings-upstage [0.6.1]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))
- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-embeddings-vertex [0.5.0]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))

### llama-index-embeddings-vertex-endpoint [0.4.0]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))

### llama-index-embeddings-vllm [0.1.1]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))

### llama-index-embeddings-voyageai [0.6.0]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))

### llama-index-embeddings-xinference [0.4.0]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))

### llama-index-embeddings-yandexgpt [0.5.0]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))

### llama-index-embeddings-zhipuai [0.4.0]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))

### llama-index-evaluation-tonic-validate [0.6.0]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))

### llama-index-extractors-entity [0.5.0]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))

### llama-index-extractors-marvin [0.5.0]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))

### llama-index-extractors-relik [0.4.1]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))
- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))

### llama-index-graph-stores-ApertureDB [0.3.0]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))
- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))

### llama-index-graph-stores-falkordb [0.5.0]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))

### llama-index-graph-stores-memgraph [0.5.0]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))

### llama-index-graph-stores-nebula [0.6.0]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))

### llama-index-graph-stores-neo4j [0.7.0]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))

### llama-index-graph-stores-neptune [0.5.0]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))
- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))

### llama-index-graph-stores-tidb [0.5.0]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))

### llama-index-indices-managed-bge-m3 [0.7.0]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))
- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))

### llama-index-indices-managed-colbert [0.6.0]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))
- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))

### llama-index-indices-managed-dashscope [0.5.0]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))
- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))

### llama-index-indices-managed-google [0.5.0]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))
- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))

### llama-index-indices-managed-lancedb [0.3.1]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))
- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))

### llama-index-indices-managed-llama-cloud [0.11.1]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))

### llama-index-indices-managed-postgresml [0.6.0]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))
- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))

### llama-index-indices-managed-vectara [0.6.0]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))
- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))

### llama-index-indices-managed-vertexai [0.4.0]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))
- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))

### llama-index-ingestion-ray [0.2.0]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))
- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))

### llama-index-llms-ai21 [0.7.0]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))
- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))

### llama-index-llms-aibadgr [0.2.0]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))
- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))

### llama-index-llms-alephalpha [0.5.0]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))
- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))

### llama-index-llms-alibabacloud-aisearch [0.4.0]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))
- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))

### llama-index-llms-anyscale [0.5.1]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))

### llama-index-llms-asi [0.3.0]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))
- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-llms-azure-inference [0.7.0]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))
- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))

### llama-index-llms-azure-openai [0.5.3]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))

### llama-index-llms-baseten [0.2.1]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))

### llama-index-llms-bedrock [0.5.0]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))
- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))

### llama-index-llms-bedrock-converse [0.14.6]

- Adds Google Gemma models and Bump version to 0.14.6 ([#21380](https://github.com/run-llama/llama_index/pull/21380))
- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-llms-cerebras [0.4.0]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))
- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))

### llama-index-llms-clarifai [0.5.0]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))
- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))

### llama-index-llms-cleanlab [0.7.0]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))
- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-llms-cloudflare-ai-gateway [0.2.1]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))
- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))

### llama-index-llms-cometapi [0.2.0]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))
- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-llms-dashscope [0.6.1]

- fix(dashscope): separate num_output from context_window to fix prompt… ([#21051](https://github.com/run-llama/llama_index/pull/21051))

### llama-index-llms-databricks [0.5.0]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))
- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-llms-deepinfra [0.6.1]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))

### llama-index-llms-deepseek [0.3.0]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))
- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-llms-everlyai [0.5.1]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))

### llama-index-llms-featherlessai [0.3.0]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))
- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-llms-fireworks [0.5.1]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))

### llama-index-llms-friendli [0.5.0]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))
- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-llms-gaudi [0.4.0]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))
- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-llms-gigachat [0.5.0]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))
- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-llms-groq [0.5.0]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))
- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-llms-helicone [0.2.0]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))
- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-llms-heroku [0.2.0]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))
- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-llms-huggingface [0.7.0]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))
- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-llms-huggingface-api [0.7.0]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))
- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-llms-keywordsai [1.2.1]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))

### llama-index-llms-konko [0.5.0]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))
- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-llms-langchain [0.8.0]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))
- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-llms-litellm [0.7.1]

- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-llms-llama-api [0.6.0]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))
- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-llms-llama-cpp [0.6.0]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))
- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-llms-llamafile [0.5.0]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))
- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-llms-lmstudio [0.5.0]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))
- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-llms-localai [0.6.0]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))
- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-llms-maritalk [0.6.0]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))
- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-llms-meta [0.3.0]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))
- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-llms-mistralai [0.10.1]

- fix: parse MistralAI structured ThinkChunk/TextChunk without regex ([#20916](https://github.com/run-llama/llama_index/pull/20916))

### llama-index-llms-monsterapi [0.5.1]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))
- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-llms-openai [0.7.5]

- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-llms-openai-like [0.7.1]

- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-llms-openvino-genai [0.3.1]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))
- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-llms-ovhcloud [0.2.1]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-llms-perplexity [0.5.1]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))
- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-llms-portkey [0.5.1]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))
- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-llms-upstage [0.8.1]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))
- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-llms-yi [0.5.1]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))
- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-postprocessor-cohere-rerank [0.8.0]

- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-postprocessor-google-rerank [0.1.0]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-postprocessor-nvidia-rerank [0.6.0]

- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-readers-datasets [0.2.0]

- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-readers-gcs [0.6.1]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))
- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-readers-github [0.11.2]

- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-readers-joplin [0.6.1]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))
- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-readers-mbox [0.6.1]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))
- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-readers-microsoft-sharepoint [0.9.1]

- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-readers-obsidian [0.7.1]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))
- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-readers-paddle-ocr [0.2.0]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))
- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-readers-pandas-ai [0.6.1]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))
- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-readers-patentsview [1.1.0]

- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-readers-pebblo [0.6.1]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))
- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-readers-s3 [0.6.1]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))
- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-readers-service-now [0.3.0]

- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-readers-whatsapp [0.5.0]

- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-storage-chat-store-redis [0.7.0]

- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-tools-aws-bedrock-agentcore [0.3.1]

- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-tools-google [0.7.1]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))
- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-tools-mcp-discovery [0.2.0]

- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-tools-seltz [0.3.0]

- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-tools-typecast [0.1.0]

- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-utils-huggingface [0.5.0]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))
- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-utils-oracleai [0.4.0]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))
- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-utils-qianfan [0.5.0]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))
- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-vector-stores-couchbase [0.7.1]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))
- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-vector-stores-databricks [0.6.1]

- fix: make primary key column configurable in DatabricksVectorSearch ([#20966](https://github.com/run-llama/llama_index/pull/20966))

### llama-index-vector-stores-milvus [1.1.0]

- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-vector-stores-mongodb [0.10.1]

- chore(deps): bump the pip group across 96 directories with 2 updates ([#21381](https://github.com/run-llama/llama_index/pull/21381))
- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-vector-stores-oceanbase [0.4.0]

- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-vector-stores-opensearch [1.2.0]

- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

### llama-index-vector-stores-yugabytedb [0.6.0]

- chore(deps): bump the pip group across 87 directories with 2 updates ([#21382](https://github.com/run-llama/llama_index/pull/21382))
- chore(deps): bump the pip group across 68 directories with 2 updates ([#21394](https://github.com/run-llama/llama_index/pull/21394))

## [2026-04-03]

### llama-index-agent-agentmesh [0.2.0]

- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-callbacks-agentops [0.5.0]

- chore(deps): bump the uv group across 50 directories with 2 updates ([#21164](https://github.com/run-llama/llama_index/pull/21164))
- chore(deps): bump the uv group across 24 directories with 1 update ([#21219](https://github.com/run-llama/llama_index/pull/21219))
- chore(deps): bump the uv group across 21 directories with 2 updates ([#21221](https://github.com/run-llama/llama_index/pull/21221))
- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-callbacks-aim [0.4.1]

- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-callbacks-argilla [0.5.0]

- chore(deps): bump the uv group across 58 directories with 1 update ([#21166](https://github.com/run-llama/llama_index/pull/21166))
- chore(deps): bump the uv group across 24 directories with 1 update ([#21219](https://github.com/run-llama/llama_index/pull/21219))
- chore(deps): bump the uv group across 21 directories with 2 updates ([#21221](https://github.com/run-llama/llama_index/pull/21221))
- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-callbacks-arize-phoenix [0.7.0]

- chore(deps): bump the uv group across 58 directories with 1 update ([#21166](https://github.com/run-llama/llama_index/pull/21166))
- chore(deps): bump the uv group across 24 directories with 1 update ([#21219](https://github.com/run-llama/llama_index/pull/21219))
- chore(deps): bump the uv group across 21 directories with 2 updates ([#21221](https://github.com/run-llama/llama_index/pull/21221))
- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-callbacks-honeyhive [0.5.0]

- chore(deps): bump the uv group across 58 directories with 1 update ([#21166](https://github.com/run-llama/llama_index/pull/21166))
- chore(deps): bump the uv group across 24 directories with 1 update ([#21219](https://github.com/run-llama/llama_index/pull/21219))
- chore(deps): bump the uv group across 21 directories with 2 updates ([#21221](https://github.com/run-llama/llama_index/pull/21221))
- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-callbacks-langfuse [0.5.0]

- chore(deps): bump the uv group across 58 directories with 1 update ([#21166](https://github.com/run-llama/llama_index/pull/21166))
- chore(deps): bump the uv group across 24 directories with 1 update ([#21219](https://github.com/run-llama/llama_index/pull/21219))
- chore(deps): bump the uv group across 21 directories with 2 updates ([#21221](https://github.com/run-llama/llama_index/pull/21221))
- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-callbacks-literalai [1.4.0]

- chore(deps): bump the uv group across 58 directories with 1 update ([#21166](https://github.com/run-llama/llama_index/pull/21166))
- chore(deps): bump the uv group across 24 directories with 1 update ([#21219](https://github.com/run-llama/llama_index/pull/21219))
- chore(deps): bump the uv group across 21 directories with 2 updates ([#21221](https://github.com/run-llama/llama_index/pull/21221))
- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-callbacks-openinference [0.5.0]

- chore(deps): bump the uv group across 58 directories with 1 update ([#21166](https://github.com/run-llama/llama_index/pull/21166))
- chore(deps): bump the uv group across 24 directories with 1 update ([#21219](https://github.com/run-llama/llama_index/pull/21219))
- chore(deps): bump the uv group across 21 directories with 2 updates ([#21221](https://github.com/run-llama/llama_index/pull/21221))
- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-callbacks-opik [1.3.0]

- chore(deps): bump the uv group across 58 directories with 1 update ([#21166](https://github.com/run-llama/llama_index/pull/21166))
- chore(deps): bump the uv group across 24 directories with 1 update ([#21219](https://github.com/run-llama/llama_index/pull/21219))
- chore(deps): bump the uv group across 21 directories with 2 updates ([#21221](https://github.com/run-llama/llama_index/pull/21221))
- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-callbacks-promptlayer [0.5.0]

- chore(deps): bump the uv group across 58 directories with 1 update ([#21166](https://github.com/run-llama/llama_index/pull/21166))
- chore(deps): bump the uv group across 24 directories with 1 update ([#21219](https://github.com/run-llama/llama_index/pull/21219))
- chore(deps): bump the uv group across 21 directories with 2 updates ([#21221](https://github.com/run-llama/llama_index/pull/21221))
- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-callbacks-uptrain [0.6.0]

- chore(deps): bump the uv group across 58 directories with 1 update ([#21166](https://github.com/run-llama/llama_index/pull/21166))
- chore(deps): bump the uv group across 24 directories with 1 update ([#21219](https://github.com/run-llama/llama_index/pull/21219))
- chore(deps): bump the uv group across 21 directories with 2 updates ([#21221](https://github.com/run-llama/llama_index/pull/21221))
- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-callbacks-wandb [0.5.0]

- chore(deps): bump the uv group across 58 directories with 1 update ([#21166](https://github.com/run-llama/llama_index/pull/21166))
- chore(deps): bump the uv group across 24 directories with 1 update ([#21219](https://github.com/run-llama/llama_index/pull/21219))
- chore(deps): bump the uv group across 21 directories with 2 updates ([#21221](https://github.com/run-llama/llama_index/pull/21221))
- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-core [0.14.20]

- chore(deps): bump the uv group across 46 directories with 2 updates ([#21153](https://github.com/run-llama/llama_index/pull/21153))
- fix(core): use async query generation in `QueryFusionRetriever._aretrieve` ([#21160](https://github.com/run-llama/llama_index/pull/21160))
- chore(deps): bump the uv group across 50 directories with 2 updates ([#21164](https://github.com/run-llama/llama_index/pull/21164))
- docs: fix typos, grammar, and formatting inconsistencies ([#21218](https://github.com/run-llama/llama_index/pull/21218))
- fix: fix extra bracket in data_sources and typo in data_sinks ([#21251](https://github.com/run-llama/llama_index/pull/21251))
- chore(deps): bump the uv group across 47 directories with 1 update ([#21254](https://github.com/run-llama/llama_index/pull/21254))
- chore(deps): bump the uv group across 53 directories with 1 update ([#21255](https://github.com/run-llama/llama_index/pull/21255))
- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))
- Update llama-index-workflows dependency to >=2.14.0 ([#21277](https://github.com/run-llama/llama_index/pull/21277))
- Delete old folders ([#21286](https://github.com/run-llama/llama_index/pull/21286))

### llama-index-embeddings-adapter [0.5.0]

- chore(deps): bump the uv group across 58 directories with 1 update ([#21166](https://github.com/run-llama/llama_index/pull/21166))
- chore(deps): bump the uv group across 24 directories with 1 update ([#21219](https://github.com/run-llama/llama_index/pull/21219))
- chore(deps): bump the uv group across 21 directories with 2 updates ([#21221](https://github.com/run-llama/llama_index/pull/21221))
- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-embeddings-alephalpha [0.5.0]

- chore(deps): bump the uv group across 58 directories with 1 update ([#21166](https://github.com/run-llama/llama_index/pull/21166))
- chore(deps): bump the uv group across 24 directories with 1 update ([#21219](https://github.com/run-llama/llama_index/pull/21219))
- chore(deps): bump the uv group across 21 directories with 2 updates ([#21221](https://github.com/run-llama/llama_index/pull/21221))
- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-embeddings-alibabacloud-aisearch [0.4.0]

- chore(deps): bump the uv group across 58 directories with 1 update ([#21166](https://github.com/run-llama/llama_index/pull/21166))
- chore(deps): bump the uv group across 24 directories with 1 update ([#21219](https://github.com/run-llama/llama_index/pull/21219))
- chore(deps): bump the uv group across 21 directories with 2 updates ([#21221](https://github.com/run-llama/llama_index/pull/21221))
- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-embeddings-anyscale [0.5.1]

- chore(deps): bump the uv group across 58 directories with 1 update ([#21166](https://github.com/run-llama/llama_index/pull/21166))
- chore(deps): bump the uv group across 24 directories with 1 update ([#21219](https://github.com/run-llama/llama_index/pull/21219))
- chore(deps): bump the uv group across 21 directories with 2 updates ([#21221](https://github.com/run-llama/llama_index/pull/21221))
- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-embeddings-autoembeddings [0.3.0]

- chore(deps): bump the uv group across 58 directories with 1 update ([#21166](https://github.com/run-llama/llama_index/pull/21166))
- chore(deps): bump the uv group across 24 directories with 1 update ([#21219](https://github.com/run-llama/llama_index/pull/21219))
- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-embeddings-azure-inference [0.5.0]

- chore(deps): bump the uv group across 58 directories with 1 update ([#21166](https://github.com/run-llama/llama_index/pull/21166))
- chore(deps): bump the uv group across 24 directories with 1 update ([#21219](https://github.com/run-llama/llama_index/pull/21219))
- chore(deps): bump the uv group across 21 directories with 2 updates ([#21221](https://github.com/run-llama/llama_index/pull/21221))
- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-embeddings-azure-openai [0.5.2]

- chore(deps): bump the uv group across 58 directories with 1 update ([#21166](https://github.com/run-llama/llama_index/pull/21166))
- azure vbump ([#21168](https://github.com/run-llama/llama_index/pull/21168))
- fix: Azure OpenAI embeddings' dependencies ([#21170](https://github.com/run-llama/llama_index/pull/21170))
- chore(deps): bump the uv group across 24 directories with 1 update ([#21219](https://github.com/run-llama/llama_index/pull/21219))
- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-embeddings-baseten [0.2.1]

- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-embeddings-bedrock [0.8.0]

- chore(deps): bump the uv group across 58 directories with 1 update ([#21166](https://github.com/run-llama/llama_index/pull/21166))
- chore(deps): bump the uv group across 67 directories with 1 update ([#21205](https://github.com/run-llama/llama_index/pull/21205))
- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-embeddings-clarifai [0.5.0]

- chore(deps): bump the uv group across 58 directories with 1 update ([#21166](https://github.com/run-llama/llama_index/pull/21166))
- chore(deps): bump the uv group across 24 directories with 1 update ([#21219](https://github.com/run-llama/llama_index/pull/21219))
- chore(deps): bump the uv group across 21 directories with 2 updates ([#21221](https://github.com/run-llama/llama_index/pull/21221))
- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-embeddings-clip [0.6.0]

- chore(deps): bump the uv group across 58 directories with 1 update ([#21166](https://github.com/run-llama/llama_index/pull/21166))
- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-embeddings-cloudflare-workersai [0.5.0]

- chore(deps): bump the uv group across 58 directories with 1 update ([#21166](https://github.com/run-llama/llama_index/pull/21166))
- chore(deps): bump the uv group across 24 directories with 1 update ([#21219](https://github.com/run-llama/llama_index/pull/21219))
- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-embeddings-cohere [0.8.0]

- chore(deps): bump the uv group across 58 directories with 1 update ([#21166](https://github.com/run-llama/llama_index/pull/21166))
- chore(deps): bump the uv group across 67 directories with 1 update ([#21205](https://github.com/run-llama/llama_index/pull/21205))
- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-embeddings-dashscope [0.5.0]

- chore(deps): bump the uv group across 58 directories with 1 update ([#21166](https://github.com/run-llama/llama_index/pull/21166))
- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-embeddings-databricks [0.5.1]

- chore(deps): bump the uv group across 58 directories with 1 update ([#21166](https://github.com/run-llama/llama_index/pull/21166))
- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-embeddings-deepinfra [0.5.0]

- chore(deps): bump the uv group across 58 directories with 1 update ([#21166](https://github.com/run-llama/llama_index/pull/21166))
- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-embeddings-elasticsearch [0.5.0]

- chore(deps): bump the uv group across 58 directories with 1 update ([#21166](https://github.com/run-llama/llama_index/pull/21166))
- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-embeddings-fastembed [0.6.0]

- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-embeddings-fireworks [0.5.2]

- chore(deps): bump the uv group across 58 directories with 1 update ([#21166](https://github.com/run-llama/llama_index/pull/21166))
- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-embeddings-gaudi [0.4.0]

- chore(deps): bump the uv group across 58 directories with 1 update ([#21166](https://github.com/run-llama/llama_index/pull/21166))
- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-embeddings-gigachat [0.5.0]

- chore(deps): bump the uv group across 58 directories with 1 update ([#21166](https://github.com/run-llama/llama_index/pull/21166))
- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-embeddings-google-genai [0.5.0]

- chore(deps): bump the uv group across 58 directories with 1 update ([#21166](https://github.com/run-llama/llama_index/pull/21166))
- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-embeddings-heroku [0.2.0]

- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-embeddings-huggingface [0.7.0]

- chore(deps): bump the uv group across 58 directories with 1 update ([#21166](https://github.com/run-llama/llama_index/pull/21166))
- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-embeddings-huggingface-api [0.5.0]

- chore(deps): bump the uv group across 58 directories with 1 update ([#21166](https://github.com/run-llama/llama_index/pull/21166))
- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-embeddings-huggingface-openvino [0.7.0]

- chore(deps): bump the uv group across 2 directories with 1 update ([#21240](https://github.com/run-llama/llama_index/pull/21240))
- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-embeddings-huggingface-optimum [0.4.1]

- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-embeddings-huggingface-optimum-intel [0.5.0]

- chore(deps): bump the uv group across 58 directories with 1 update ([#21166](https://github.com/run-llama/llama_index/pull/21166))
- chore(deps): bump the uv group across 2 directories with 1 update ([#21240](https://github.com/run-llama/llama_index/pull/21240))
- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-embeddings-ibm [0.6.0.post1]

- chore(deps): bump the uv group across 50 directories with 2 updates ([#21164](https://github.com/run-llama/llama_index/pull/21164))
- chore(deps): bump the uv group across 58 directories with 1 update ([#21166](https://github.com/run-llama/llama_index/pull/21166))
- chore(deps): bump the uv group across 67 directories with 1 update ([#21205](https://github.com/run-llama/llama_index/pull/21205))
- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-embeddings-instructor [0.5.0]

- chore(deps): bump the uv group across 58 directories with 1 update ([#21166](https://github.com/run-llama/llama_index/pull/21166))
- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-embeddings-isaacus [0.2.0]

- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-embeddings-jinaai [0.6.0]

- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-embeddings-langchain [0.5.0]

- chore(deps): bump the uv group across 58 directories with 1 update ([#21166](https://github.com/run-llama/llama_index/pull/21166))
- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-embeddings-litellm [0.5.0]

- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-embeddings-llamafile [0.5.0]

- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-embeddings-llm-rails [0.5.0]

- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-embeddings-mistralai [0.5.0]

- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-embeddings-mixedbreadai [0.6.0]

- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-embeddings-modelscope [0.6.0]

- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-embeddings-nebius [0.5.1]

- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-embeddings-netmind [0.3.0]

- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-embeddings-nomic [0.8.0]

- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-embeddings-nvidia [0.5.0]

- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-embeddings-oci-data-science [0.3.0]

- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-embeddings-oci-genai [0.5.0]

- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-embeddings-ollama [0.9.0]

- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-embeddings-opea [0.3.1]

- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-embeddings-openai [0.6.0]

- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-embeddings-openai-like [0.3.1]

- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-embeddings-openvino-genai [0.7.0]

- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-embeddings-oracleai [0.4.0]

- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-embeddings-premai [0.5.0]

- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-embeddings-sagemaker-endpoint [0.5.0]

- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-embeddings-siliconflow [0.4.0]

- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-embeddings-text-embeddings-inference [0.5.0]

- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-embeddings-textembed [0.4.0]

- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-embeddings-together [0.5.0]

- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-embeddings-upstage [0.6.1]

- chore(deps): bump the uv group across 50 directories with 2 updates ([#21164](https://github.com/run-llama/llama_index/pull/21164))
- chore(deps): bump the uv group across 58 directories with 1 update ([#21166](https://github.com/run-llama/llama_index/pull/21166))
- chore(deps): bump the uv group across 24 directories with 1 update ([#21219](https://github.com/run-llama/llama_index/pull/21219))
- chore(deps): bump the uv group across 21 directories with 2 updates ([#21221](https://github.com/run-llama/llama_index/pull/21221))
- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-embeddings-vertex [0.5.0]

- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-embeddings-vertex-endpoint [0.4.0]

- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-embeddings-vllm [0.1.1]

- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-embeddings-voyageai [0.6.0]

- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-embeddings-xinference [0.4.0]

- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-embeddings-yandexgpt [0.5.0]

- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-embeddings-zhipuai [0.4.0]

- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-evaluation-tonic-validate [0.6.0]

- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-extractors-entity [0.5.0]

- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-extractors-marvin [0.5.0]

- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-extractors-relik [0.4.1]

- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-graph-rag-cognee [0.3.1]

- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-graph-stores-ApertureDB [0.3.0]

- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-graph-stores-falkordb [0.5.0]

- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-graph-stores-memgraph [0.5.0]

- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-graph-stores-nebula [0.6.0]

- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-graph-stores-neo4j [0.7.0]

- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-graph-stores-neptune [0.5.0]

- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-graph-stores-tidb [0.5.0]

- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-indices-managed-bge-m3 [0.7.0]

- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-indices-managed-colbert [0.6.0]

- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-indices-managed-dashscope [0.5.0]

- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-instrumentation [0.5.0]

- fix vulnerability with nltk ([#21275](https://github.com/run-llama/llama_index/pull/21275))

### llama-index-llms-anthropic [0.11.2]

- feat(llms/anthropic): add claude-sonnet-4-6 and claude-opus-4-6 to structured output list ([#21113](https://github.com/run-llama/llama_index/pull/21113))

### llama-index-llms-bedrock-converse [0.14.5]

- feat: add support for deepseek v3 models in bedrock converse ([#21212](https://github.com/run-llama/llama_index/pull/21212))
- feat (llama-index-llms-bedrock-converse): Add region prefixes to LLM model name extraction in Bedrock Converse ([#21227](https://github.com/run-llama/llama_index/pull/21227))

### llama-index-llms-cohere [0.8.0]

- chore(deps): bump the uv group across 58 directories with 1 update ([#21166](https://github.com/run-llama/llama_index/pull/21166))
- chore(deps): bump the uv group across 67 directories with 1 update ([#21205](https://github.com/run-llama/llama_index/pull/21205))
- chore(deps): bump the uv group across 53 directories with 1 update ([#21255](https://github.com/run-llama/llama_index/pull/21255))

### llama-index-llms-dashscope [0.6.0]

- chore(deps): bump the uv group across 58 directories with 1 update ([#21166](https://github.com/run-llama/llama_index/pull/21166))
- chore(deps): bump the uv group across 67 directories with 1 update ([#21205](https://github.com/run-llama/llama_index/pull/21205))
- chore(deps): bump the uv group across 53 directories with 1 update ([#21255](https://github.com/run-llama/llama_index/pull/21255))

### llama-index-llms-google-genai [0.9.1]

- chore(deps): bump the uv group across 58 directories with 1 update ([#21166](https://github.com/run-llama/llama_index/pull/21166))
- chore(deps): bump the uv group across 24 directories with 1 update ([#21219](https://github.com/run-llama/llama_index/pull/21219))
- chore(deps): bump the uv group across 21 directories with 2 updates ([#21221](https://github.com/run-llama/llama_index/pull/21221))

### llama-index-llms-ibm [0.7.0.post1]

- chore(deps): bump the uv group across 50 directories with 2 updates ([#21164](https://github.com/run-llama/llama_index/pull/21164))
- chore(deps): bump the uv group across 58 directories with 1 update ([#21166](https://github.com/run-llama/llama_index/pull/21166))
- chore(deps): bump the uv group across 67 directories with 1 update ([#21205](https://github.com/run-llama/llama_index/pull/21205))

### llama-index-llms-oci-data-science [1.1.0]

- chore(deps): bump the uv group across 58 directories with 1 update ([#21166](https://github.com/run-llama/llama_index/pull/21166))
- chore(deps): bump the uv group across 67 directories with 1 update ([#21205](https://github.com/run-llama/llama_index/pull/21205))

### llama-index-llms-openai [0.7.5]

- chore(deps): bump the uv group across 58 directories with 1 update ([#21166](https://github.com/run-llama/llama_index/pull/21166))
- Fix input_file serialization in Responses API message dict ([#21172](https://github.com/run-llama/llama_index/pull/21172))
- vbump openai ([#21176](https://github.com/run-llama/llama_index/pull/21176))
- fix(openai): preserve assistant text alongside tool calls and serialize tool kwargs to JSON ([#21180](https://github.com/run-llama/llama_index/pull/21180))
- feat(llama-index-integrations): add gpt-5.3 model family support to openai model mappings ([#21190](https://github.com/run-llama/llama_index/pull/21190))
- feat(llama-index-integrations): add gpt-5.4-2026-03-05 dated snapshot model to openai model registry ([#21191](https://github.com/run-llama/llama_index/pull/21191))
- chore(deps): bump the uv group across 24 directories with 1 update ([#21219](https://github.com/run-llama/llama_index/pull/21219))
- chore(deps): bump the uv group across 21 directories with 2 updates ([#21221](https://github.com/run-llama/llama_index/pull/21221))

### llama-index-llms-openai-like [0.7.1]

- chore(deps): bump the uv group across 58 directories with 1 update ([#21166](https://github.com/run-llama/llama_index/pull/21166))
- chore(deps): bump the uv group across 67 directories with 1 update ([#21205](https://github.com/run-llama/llama_index/pull/21205))

### llama-index-llms-openvino-genai [0.3.1]

- fix run stream llm request using ov genai will report std::runtime_error(ISSUE 20802) ([#20803](https://github.com/run-llama/llama_index/pull/20803))

### llama-index-memory-mem0 [1.0.0]

- chore(deps): bump the uv group across 67 directories with 1 update ([#21205](https://github.com/run-llama/llama_index/pull/21205))
- chore(deps): bump the uv group across 53 directories with 1 update ([#21255](https://github.com/run-llama/llama_index/pull/21255))

### llama-index-observability-otel [0.6.0]

- chore(deps): bump the uv group across 58 directories with 1 update ([#21166](https://github.com/run-llama/llama_index/pull/21166))
- chore(deps): bump the uv group across 24 directories with 1 update ([#21219](https://github.com/run-llama/llama_index/pull/21219))
- chore(deps): bump the uv group across 21 directories with 2 updates ([#21221](https://github.com/run-llama/llama_index/pull/21221))

### llama-index-postprocessor-cohere-rerank [0.8.0]

- chore(deps): bump the uv group across 58 directories with 1 update ([#21166](https://github.com/run-llama/llama_index/pull/21166))
- chore(deps): bump the uv group across 67 directories with 1 update ([#21205](https://github.com/run-llama/llama_index/pull/21205))

### llama-index-postprocessor-nvidia-rerank [0.6.0]

- chore(deps): bump the uv group across 58 directories with 1 update ([#21166](https://github.com/run-llama/llama_index/pull/21166))
- chore(deps): bump the uv group across 67 directories with 1 update ([#21205](https://github.com/run-llama/llama_index/pull/21205))

### llama-index-protocols-ag-ui [0.3.1]

- feat: add the ability to take dynamic tools from outside (ag-ui) ([#21149](https://github.com/run-llama/llama_index/pull/21149))

### llama-index-readers-datasets [0.2.0]

- chore(deps): bump the uv group across 58 directories with 1 update ([#21166](https://github.com/run-llama/llama_index/pull/21166))
- chore(deps): bump the uv group across 67 directories with 1 update ([#21205](https://github.com/run-llama/llama_index/pull/21205))

### llama-index-readers-github [0.11.2]

- chore(deps): bump the uv group across 58 directories with 1 update ([#21166](https://github.com/run-llama/llama_index/pull/21166))
- chore(deps): bump the uv group across 67 directories with 1 update ([#21205](https://github.com/run-llama/llama_index/pull/21205))

### llama-index-readers-microsoft-sharepoint [0.9.1]

- chore(deps): bump the uv group across 58 directories with 1 update ([#21166](https://github.com/run-llama/llama_index/pull/21166))
- chore(deps): bump the uv group across 67 directories with 1 update ([#21205](https://github.com/run-llama/llama_index/pull/21205))

### llama-index-readers-patentsview [1.1.0]

- chore(deps): bump the uv group across 58 directories with 1 update ([#21166](https://github.com/run-llama/llama_index/pull/21166))
- chore(deps): bump the uv group across 67 directories with 1 update ([#21205](https://github.com/run-llama/llama_index/pull/21205))
- chore(deps): bump the uv group across 53 directories with 1 update ([#21255](https://github.com/run-llama/llama_index/pull/21255))

### llama-index-readers-service-now [0.3.0]

- chore(deps): bump aiohttp from 3.13.3 to 3.13.4 in /llama-index-integrations/readers/llama-index-readers-service-now in the pip group across 1 directory ([#21253](https://github.com/run-llama/llama_index/pull/21253))

### llama-index-readers-whatsapp [0.5.0]

- chore(deps): bump the uv group across 58 directories with 1 update ([#21166](https://github.com/run-llama/llama_index/pull/21166))
- chore(deps): bump the uv group across 67 directories with 1 update ([#21205](https://github.com/run-llama/llama_index/pull/21205))

### llama-index-retrievers-you [1.1.0]

- chore(deps): bump the uv group across 58 directories with 1 update ([#21166](https://github.com/run-llama/llama_index/pull/21166))
- chore(deps): bump the uv group across 67 directories with 1 update ([#21205](https://github.com/run-llama/llama_index/pull/21205))
- chore(deps): bump the uv group across 53 directories with 1 update ([#21255](https://github.com/run-llama/llama_index/pull/21255))

### llama-index-storage-chat-store-redis [0.7.0]

- chore(deps): bump the uv group across 58 directories with 1 update ([#21166](https://github.com/run-llama/llama_index/pull/21166))
- chore(deps): bump the uv group across 67 directories with 1 update ([#21205](https://github.com/run-llama/llama_index/pull/21205))

### llama-index-vector-stores-milvus [1.1.0]

- chore(deps): bump the uv group across 58 directories with 1 update ([#21166](https://github.com/run-llama/llama_index/pull/21166))
- chore(deps): bump the uv group across 67 directories with 1 update ([#21205](https://github.com/run-llama/llama_index/pull/21205))

### llama-index-vector-stores-oceanbase [0.4.0]

- chore(deps): bump the uv group across 58 directories with 1 update ([#21166](https://github.com/run-llama/llama_index/pull/21166))
- chore(deps): bump the uv group across 67 directories with 1 update ([#21205](https://github.com/run-llama/llama_index/pull/21205))
- chore(deps): bump the uv group across 53 directories with 1 update ([#21255](https://github.com/run-llama/llama_index/pull/21255))

### llama-index-vector-stores-opensearch [1.2.0]

- chore(deps): bump the uv group across 58 directories with 1 update ([#21166](https://github.com/run-llama/llama_index/pull/21166))
- chore(deps): bump the uv group across 67 directories with 1 update ([#21205](https://github.com/run-llama/llama_index/pull/21205))

### llama-index-vector-stores-yugabytedb [0.6.0]

- chore(deps): bump the uv group across 58 directories with 1 update ([#21166](https://github.com/run-llama/llama_index/pull/21166))
- chore(deps): bump the uv group across 67 directories with 1 update ([#21205](https://github.com/run-llama/llama_index/pull/21205))

## [2026-03-25]

### llama-index-agent-agentmesh [0.2.0]

- chore(deps): bump the uv group across 49 directories with 1 update ([#21083](https://github.com/run-llama/llama_index/pull/21083))

### llama-index-callbacks-argilla [0.5.0]

- chore(deps): bump the uv group across 3 directories with 1 update ([#21069](https://github.com/run-llama/llama_index/pull/21069))

### llama-index-core [0.14.19]

- fix: pass `delete_from_docstore` parameter in `BaseIndex.delete_ref_doc` ([#20990](https://github.com/run-llama/llama_index/pull/20990))
- fix(core): preserve CTE names during schema prefixing in SQLDatabase.run_sql ([#21028](https://github.com/run-llama/llama_index/pull/21028))
- fix(core): align sync retrieval dedup key with async (hash + ref_doc_id) ([#21034](https://github.com/run-llama/llama_index/pull/21034))
- fix(core): raise ValueError instead of returning string from structured_predict ([#21036](https://github.com/run-llama/llama_index/pull/21036))
- fix(core): remove incorrect per-node delete calls in index helpers ([#21050](https://github.com/run-llama/llama_index/pull/21050))
- chore(deps): bump the uv group across 49 directories with 1 update ([#21083](https://github.com/run-llama/llama_index/pull/21083))
- chore(deps): bump the uv group across 44 directories with 1 update ([#21097](https://github.com/run-llama/llama_index/pull/21097))
- enable llama-cloud>1.0 install ([#21140](https://github.com/run-llama/llama_index/pull/21140))

### llama-index-embeddings-fireworks [0.5.2]

- test(embeddings-fireworks): add test suite and fix docs ([#20977](https://github.com/run-llama/llama_index/pull/20977))

### llama-index-embeddings-upstage [0.6.1]

- chore(deps): bump the uv group across 49 directories with 1 update ([#21083](https://github.com/run-llama/llama_index/pull/21083))

### llama-index-indices-managed-llama-cloud [0.11.1]

- fix: llama-cloud managed index and remove llamaparse reader ([#21043](https://github.com/run-llama/llama_index/pull/21043))
- enable llama-cloud>1.0 install ([#21140](https://github.com/run-llama/llama_index/pull/21140))

### llama-index-llms-azure-openai [0.5.3]

- azure openai responses support ([#21088](https://github.com/run-llama/llama_index/pull/21088))
- fix azure openai responses ([#21099](https://github.com/run-llama/llama_index/pull/21099))

### llama-index-llms-bedrock-converse [0.14.3]

- use proper tool choice format in bedrock converse ([#21098](https://github.com/run-llama/llama_index/pull/21098))

### llama-index-llms-cohere [0.8.0]

- docs(cohere): update first basic usage example to chat API ([#21108](https://github.com/run-llama/llama_index/pull/21108))

### llama-index-llms-google-genai [0.9.1]

- feat: gemini 3 default and temperature ([#21060](https://github.com/run-llama/llama_index/pull/21060))
- fix(google-genai): avoid mutating messages list in prepare_chat_params ([#21141](https://github.com/run-llama/llama_index/pull/21141))

### llama-index-llms-litellm [0.7.1]

- Add support for custom LLM provider in model kwargs ([#21095](https://github.com/run-llama/llama_index/pull/21095))

### llama-index-llms-minimax [0.1.0]

- feat: add MiniMax LLM provider integration with M2.7 default ([#20955](https://github.com/run-llama/llama_index/pull/20955))

### llama-index-llms-ollama [0.10.1]

- fix(ollama): pass custom headers to auto-created clients ([#21091](https://github.com/run-llama/llama_index/pull/21091))

### llama-index-llms-openai [0.7.3]

- feat(llms/openai): Add support for Mini and Nano variants of GPT 5.4 ([#21065](https://github.com/run-llama/llama_index/pull/21065))

### llama-index-llms-ovhcloud [0.2.1]

- chore(deps): bump the uv group across 49 directories with 1 update ([#21083](https://github.com/run-llama/llama_index/pull/21083))

### llama-index-packs-agent-search-retriever [0.5.0]

- chore(deps): bump the uv group across 49 directories with 1 update ([#21083](https://github.com/run-llama/llama_index/pull/21083))
- chore(deps): bump the uv group across 44 directories with 1 update ([#21097](https://github.com/run-llama/llama_index/pull/21097))

### llama-index-packs-amazon-product-extraction [0.5.0]

- chore(deps): bump the uv group across 49 directories with 1 update ([#21083](https://github.com/run-llama/llama_index/pull/21083))
- chore(deps): bump the uv group across 44 directories with 1 update ([#21097](https://github.com/run-llama/llama_index/pull/21097))

### llama-index-packs-arize-phoenix-query-engine [0.5.0]

- chore(deps): bump the uv group across 49 directories with 1 update ([#21083](https://github.com/run-llama/llama_index/pull/21083))
- chore(deps): bump the uv group across 44 directories with 1 update ([#21097](https://github.com/run-llama/llama_index/pull/21097))

### llama-index-packs-auto-merging-retriever [0.6.0]

- chore(deps): bump the uv group across 49 directories with 1 update ([#21083](https://github.com/run-llama/llama_index/pull/21083))
- chore(deps): bump the uv group across 44 directories with 1 update ([#21097](https://github.com/run-llama/llama_index/pull/21097))

### llama-index-packs-code-hierarchy [0.7.1]

- chore(deps): bump the uv group across 49 directories with 1 update ([#21083](https://github.com/run-llama/llama_index/pull/21083))
- chore(deps): bump the uv group across 44 directories with 1 update ([#21097](https://github.com/run-llama/llama_index/pull/21097))

### llama-index-packs-cohere-citation-chat [0.6.0]

- chore(deps): bump the uv group across 49 directories with 1 update ([#21083](https://github.com/run-llama/llama_index/pull/21083))
- chore(deps): bump the uv group across 44 directories with 1 update ([#21097](https://github.com/run-llama/llama_index/pull/21097))

### llama-index-packs-deeplake-deepmemory-retriever [0.5.0]

- chore(deps): bump the uv group across 49 directories with 1 update ([#21083](https://github.com/run-llama/llama_index/pull/21083))
- chore(deps): bump the uv group across 44 directories with 1 update ([#21097](https://github.com/run-llama/llama_index/pull/21097))

### llama-index-packs-deeplake-multimodal-retrieval [0.4.0]

- chore(deps): bump the uv group across 49 directories with 1 update ([#21083](https://github.com/run-llama/llama_index/pull/21083))
- chore(deps): bump the uv group across 44 directories with 1 update ([#21097](https://github.com/run-llama/llama_index/pull/21097))

### llama-index-packs-dense-x-retrieval [0.6.1]

- chore(deps): bump the uv group across 49 directories with 1 update ([#21083](https://github.com/run-llama/llama_index/pull/21083))
- chore(deps): bump the uv group across 44 directories with 1 update ([#21097](https://github.com/run-llama/llama_index/pull/21097))

### llama-index-packs-diff-private-simple-dataset [0.5.0]

- chore(deps): bump the uv group across 49 directories with 1 update ([#21083](https://github.com/run-llama/llama_index/pull/21083))
- chore(deps): bump the uv group across 44 directories with 1 update ([#21097](https://github.com/run-llama/llama_index/pull/21097))

### llama-index-packs-evaluator-benchmarker [0.5.0]

- chore(deps): bump the uv group across 49 directories with 1 update ([#21083](https://github.com/run-llama/llama_index/pull/21083))
- chore(deps): bump the uv group across 44 directories with 1 update ([#21097](https://github.com/run-llama/llama_index/pull/21097))

### llama-index-packs-fusion-retriever [0.6.0]

- chore(deps): bump the uv group across 49 directories with 1 update ([#21083](https://github.com/run-llama/llama_index/pull/21083))
- chore(deps): bump the uv group across 44 directories with 1 update ([#21097](https://github.com/run-llama/llama_index/pull/21097))

### llama-index-packs-fuzzy-citation [0.5.0]

- chore(deps): bump the uv group across 49 directories with 1 update ([#21083](https://github.com/run-llama/llama_index/pull/21083))
- chore(deps): bump the uv group across 44 directories with 1 update ([#21097](https://github.com/run-llama/llama_index/pull/21097))

### llama-index-packs-gmail-openai-agent [0.5.0]

- chore(deps): bump the uv group across 49 directories with 1 update ([#21083](https://github.com/run-llama/llama_index/pull/21083))
- chore(deps): bump the uv group across 44 directories with 1 update ([#21097](https://github.com/run-llama/llama_index/pull/21097))

### llama-index-packs-koda-retriever [0.5.0]

- chore(deps): bump the uv group across 49 directories with 1 update ([#21083](https://github.com/run-llama/llama_index/pull/21083))
- chore(deps): bump the uv group across 44 directories with 1 update ([#21097](https://github.com/run-llama/llama_index/pull/21097))

### llama-index-packs-llama-dataset-metadata [0.5.0]

- chore(deps): bump the uv group across 49 directories with 1 update ([#21083](https://github.com/run-llama/llama_index/pull/21083))
- chore(deps): bump the uv group across 44 directories with 1 update ([#21097](https://github.com/run-llama/llama_index/pull/21097))

### llama-index-packs-llama-guard-moderator [0.5.0]

- chore(deps): bump the uv group across 49 directories with 1 update ([#21083](https://github.com/run-llama/llama_index/pull/21083))
- chore(deps): bump the uv group across 44 directories with 1 update ([#21097](https://github.com/run-llama/llama_index/pull/21097))

### llama-index-packs-llava-completion [0.5.0]

- chore(deps): bump the uv group across 49 directories with 1 update ([#21083](https://github.com/run-llama/llama_index/pull/21083))
- chore(deps): bump the uv group across 44 directories with 1 update ([#21097](https://github.com/run-llama/llama_index/pull/21097))

### llama-index-packs-longrag [0.6.0]

- chore(deps): bump the uv group across 49 directories with 1 update ([#21083](https://github.com/run-llama/llama_index/pull/21083))
- chore(deps): bump the uv group across 44 directories with 1 update ([#21097](https://github.com/run-llama/llama_index/pull/21097))

### llama-index-packs-mixture-of-agents [0.5.0]

- chore(deps): bump the uv group across 49 directories with 1 update ([#21083](https://github.com/run-llama/llama_index/pull/21083))
- chore(deps): bump the uv group across 44 directories with 1 update ([#21097](https://github.com/run-llama/llama_index/pull/21097))

### llama-index-packs-multi-tenancy-rag [0.6.0]

- chore(deps): bump the uv group across 49 directories with 1 update ([#21083](https://github.com/run-llama/llama_index/pull/21083))
- chore(deps): bump the uv group across 44 directories with 1 update ([#21097](https://github.com/run-llama/llama_index/pull/21097))

### llama-index-packs-multidoc-autoretrieval [0.5.0]

- chore(deps): bump the uv group across 49 directories with 1 update ([#21083](https://github.com/run-llama/llama_index/pull/21083))
- chore(deps): bump the uv group across 44 directories with 1 update ([#21097](https://github.com/run-llama/llama_index/pull/21097))

### llama-index-packs-nebulagraph-query-engine [0.6.0]

- chore(deps): bump the uv group across 49 directories with 1 update ([#21083](https://github.com/run-llama/llama_index/pull/21083))
- chore(deps): bump the uv group across 44 directories with 1 update ([#21097](https://github.com/run-llama/llama_index/pull/21097))

### llama-index-packs-neo4j-query-engine [0.5.1]

- chore(deps): bump the uv group across 49 directories with 1 update ([#21083](https://github.com/run-llama/llama_index/pull/21083))
- chore(deps): bump the uv group across 44 directories with 1 update ([#21097](https://github.com/run-llama/llama_index/pull/21097))

### llama-index-packs-node-parser-semantic-chunking [0.5.1]

- chore(deps): bump the uv group across 49 directories with 1 update ([#21083](https://github.com/run-llama/llama_index/pull/21083))
- chore(deps): bump the uv group across 44 directories with 1 update ([#21097](https://github.com/run-llama/llama_index/pull/21097))

### llama-index-packs-ollama-query-engine [0.6.0]

- chore(deps): bump the uv group across 49 directories with 1 update ([#21083](https://github.com/run-llama/llama_index/pull/21083))
- chore(deps): bump the uv group across 44 directories with 1 update ([#21097](https://github.com/run-llama/llama_index/pull/21097))

### llama-index-packs-panel-chatbot [0.5.0]

- chore(deps): bump the uv group across 3 directories with 1 update ([#21069](https://github.com/run-llama/llama_index/pull/21069))
- chore(deps): bump the uv group across 49 directories with 1 update ([#21083](https://github.com/run-llama/llama_index/pull/21083))
- chore(deps): bump the uv group across 44 directories with 1 update ([#21097](https://github.com/run-llama/llama_index/pull/21097))

### llama-index-packs-raft-dataset [0.5.1]

- chore(deps): bump the uv group across 49 directories with 1 update ([#21083](https://github.com/run-llama/llama_index/pull/21083))
- chore(deps): bump the uv group across 44 directories with 1 update ([#21097](https://github.com/run-llama/llama_index/pull/21097))

### llama-index-packs-ragatouille-retriever [0.6.0]

- chore(deps): bump the uv group across 49 directories with 1 update ([#21083](https://github.com/run-llama/llama_index/pull/21083))
- chore(deps): bump the uv group across 44 directories with 1 update ([#21097](https://github.com/run-llama/llama_index/pull/21097))

### llama-index-packs-raptor [0.4.1]

- chore(deps): bump the uv group across 49 directories with 1 update ([#21083](https://github.com/run-llama/llama_index/pull/21083))
- chore(deps): bump the uv group across 44 directories with 1 update ([#21097](https://github.com/run-llama/llama_index/pull/21097))

### llama-index-packs-recursive-retriever [0.8.1]

- chore(deps): bump the uv group across 3 directories with 1 update ([#21069](https://github.com/run-llama/llama_index/pull/21069))
- chore(deps): bump the uv group across 49 directories with 1 update ([#21083](https://github.com/run-llama/llama_index/pull/21083))
- chore(deps): bump the uv group across 44 directories with 1 update ([#21097](https://github.com/run-llama/llama_index/pull/21097))

### llama-index-packs-searchain [0.3.0]

- chore(deps): bump the uv group across 49 directories with 1 update ([#21083](https://github.com/run-llama/llama_index/pull/21083))
- chore(deps): bump the uv group across 44 directories with 1 update ([#21097](https://github.com/run-llama/llama_index/pull/21097))

### llama-index-packs-self-discover [0.5.0]

- chore(deps): bump the uv group across 49 directories with 1 update ([#21083](https://github.com/run-llama/llama_index/pull/21083))
- chore(deps): bump the uv group across 44 directories with 1 update ([#21097](https://github.com/run-llama/llama_index/pull/21097))

### llama-index-packs-self-rag [0.5.0]

- chore(deps): bump the uv group across 49 directories with 1 update ([#21083](https://github.com/run-llama/llama_index/pull/21083))
- chore(deps): bump the uv group across 44 directories with 1 update ([#21097](https://github.com/run-llama/llama_index/pull/21097))

### llama-index-packs-sentence-window-retriever [0.6.0]

- chore(deps): bump the uv group across 49 directories with 1 update ([#21083](https://github.com/run-llama/llama_index/pull/21083))
- chore(deps): bump the uv group across 44 directories with 1 update ([#21097](https://github.com/run-llama/llama_index/pull/21097))

### llama-index-packs-snowflake-query-engine [0.6.0]

- chore(deps): bump the uv group across 49 directories with 1 update ([#21083](https://github.com/run-llama/llama_index/pull/21083))
- chore(deps): bump the uv group across 44 directories with 1 update ([#21097](https://github.com/run-llama/llama_index/pull/21097))

### llama-index-packs-stock-market-data-query-engine [0.6.0]

- chore(deps): bump the uv group across 49 directories with 1 update ([#21083](https://github.com/run-llama/llama_index/pull/21083))
- chore(deps): bump the uv group across 44 directories with 1 update ([#21097](https://github.com/run-llama/llama_index/pull/21097))

### llama-index-packs-streamlit-chatbot [0.5.2]

- chore(deps): bump the uv group across 49 directories with 1 update ([#21083](https://github.com/run-llama/llama_index/pull/21083))
- chore(deps): bump the uv group across 44 directories with 1 update ([#21097](https://github.com/run-llama/llama_index/pull/21097))

### llama-index-packs-sub-question-weaviate [0.5.0]

- chore(deps): bump the uv group across 49 directories with 1 update ([#21083](https://github.com/run-llama/llama_index/pull/21083))
- chore(deps): bump the uv group across 44 directories with 1 update ([#21097](https://github.com/run-llama/llama_index/pull/21097))

### llama-index-packs-timescale-vector-autoretrieval [0.5.0]

- chore(deps): bump the uv group across 49 directories with 1 update ([#21083](https://github.com/run-llama/llama_index/pull/21083))
- chore(deps): bump the uv group across 44 directories with 1 update ([#21097](https://github.com/run-llama/llama_index/pull/21097))

### llama-index-postprocessor-google-rerank [0.1.0]

- chore(deps): bump the uv group across 49 directories with 1 update ([#21083](https://github.com/run-llama/llama_index/pull/21083))

### llama-index-readers-llama-parse [0.6.1]

- enable llama-cloud>1.0 install ([#21140](https://github.com/run-llama/llama_index/pull/21140))

### llama-index-readers-service-now [0.3.0]

- chore(deps): bump nltk from 3.9.1 to 3.9.3 in /llama-index-integrations/readers/llama-index-readers-service-now in the uv group across 1 directory ([#21080](https://github.com/run-llama/llama_index/pull/21080))

### llama-index-storage-chat-store-opensearch [0.2.0]

- chore(deps): bump the uv group across 49 directories with 1 update ([#21083](https://github.com/run-llama/llama_index/pull/21083))

### llama-index-tools-aws-bedrock-agentcore [0.3.1]

- feat(tools/agentcore): add AgentCoreRuntime adapter ([#21008](https://github.com/run-llama/llama_index/pull/21008))
- fix bedrock tests ([#21129](https://github.com/run-llama/llama_index/pull/21129))

### llama-index-tools-exa [0.5.1]

- update exa tool description and default search type ([#21096](https://github.com/run-llama/llama_index/pull/21096))

### llama-index-vector-stores-redis [0.8.0]

- feat(redis): implement safe get_nodes and delete_nodes support ([#20972](https://github.com/run-llama/llama_index/pull/20972))

### llama-index-voice-agents-gemini-live [0.4.0]

- feat: latest gemini model default ([#21061](https://github.com/run-llama/llama_index/pull/21061))

## [2026-03-16]

### llama-index-agent-agentmesh [0.2.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-agent-azure [0.3.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-callbacks-agentops [0.5.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-callbacks-argilla [0.5.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-callbacks-arize-phoenix [0.7.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-callbacks-honeyhive [0.5.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))
- chore(deps): bump the uv group across 51 directories with 3 updates ([#20962](https://github.com/run-llama/llama_index/pull/20962))

### llama-index-callbacks-langfuse [0.5.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-callbacks-literalai [1.4.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-callbacks-openinference [0.5.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-callbacks-opik [1.3.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-callbacks-promptlayer [0.5.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-callbacks-uptrain [0.6.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-callbacks-wandb [0.5.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-core [0.14.18]

- feat: align text match filters across core and vector backends ([#20883](https://github.com/run-llama/llama_index/pull/20883))
- fix(chat_engine): preserve chat history on incomplete stream consumption ([#20897](https://github.com/run-llama/llama_index/pull/20897))
- fix: guard against ZeroDivisionError in LlamaDebugHandler.\_get_time_stats_from_event_pairs ([#20937](https://github.com/run-llama/llama_index/pull/20937))
- fix: add stacklevel=2 to warnings.warn() for accurate caller reporting ([#20939](https://github.com/run-llama/llama_index/pull/20939))
- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))
- Release 0.14.17 ([#20957](https://github.com/run-llama/llama_index/pull/20957))
- chore(deps): bump the uv group across 51 directories with 3 updates ([#20962](https://github.com/run-llama/llama_index/pull/20962))
- fix: use `apostprocess_nodes()` in async retrieval paths ([#20974](https://github.com/run-llama/llama_index/pull/20974))
- fix (test) : use >= 1 to avoid racy `stream_chat` memory assertion ([#20980](https://github.com/run-llama/llama_index/pull/20980))
- fix(core): preserve response metadata in `async _aretrieve_from_object` ([#20995](https://github.com/run-llama/llama_index/pull/20995))
- fix: preserve non-ASCII schema descriptions in `PydanticOutputParser` ([#21016](https://github.com/run-llama/llama_index/pull/21016))
- chore(deps): bump the uv group across 42 directories with 2 updates ([#21020](https://github.com/run-llama/llama_index/pull/21020))
- fix(core): structured_predict() returns default values for single-field models ([#21025](https://github.com/run-llama/llama_index/pull/21025))
- fix openai mimetype guess ([#21030](https://github.com/run-llama/llama_index/pull/21030))

### llama-index-embeddings-adapter [0.5.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-embeddings-alephalpha [0.5.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-embeddings-alibabacloud-aisearch [0.4.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-embeddings-anyscale [0.5.1]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))
- vbump all the things ([#20978](https://github.com/run-llama/llama_index/pull/20978))

### llama-index-embeddings-autoembeddings [0.3.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-embeddings-azure-inference [0.5.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-embeddings-azure-openai [0.5.1]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))
- vbump all the things ([#20978](https://github.com/run-llama/llama_index/pull/20978))

### llama-index-embeddings-baseten [0.2.1]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))
- vbump all the things ([#20978](https://github.com/run-llama/llama_index/pull/20978))

### llama-index-embeddings-bedrock [0.8.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-embeddings-clarifai [0.5.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-embeddings-clip [0.6.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-embeddings-cloudflare-workersai [0.5.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-embeddings-cohere [0.8.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-embeddings-dashscope [0.5.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-embeddings-databricks [0.5.1]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))
- vbump all the things ([#20978](https://github.com/run-llama/llama_index/pull/20978))

### llama-index-embeddings-deepinfra [0.5.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-embeddings-elasticsearch [0.5.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-embeddings-fastembed [0.6.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-embeddings-fireworks [0.5.1]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))
- vbump all the things ([#20978](https://github.com/run-llama/llama_index/pull/20978))

### llama-index-embeddings-gaudi [0.4.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-embeddings-gigachat [0.5.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-embeddings-google-genai [0.5.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-embeddings-heroku [0.2.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-embeddings-huggingface [0.7.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-embeddings-huggingface-api [0.5.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-embeddings-huggingface-openvino [0.7.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-embeddings-huggingface-optimum-intel [0.5.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-embeddings-instructor [0.5.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-embeddings-isaacus [0.2.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-embeddings-jinaai [0.6.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-embeddings-langchain [0.5.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-embeddings-litellm [0.5.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-embeddings-llamafile [0.5.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-embeddings-llm-rails [0.5.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-embeddings-mistralai [0.5.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-embeddings-modelscope [0.6.0]

- chore(deps): bump the uv group across 51 directories with 3 updates ([#20962](https://github.com/run-llama/llama_index/pull/20962))

### llama-index-embeddings-nebius [0.5.1]

- vbump all the things ([#20978](https://github.com/run-llama/llama_index/pull/20978))

### llama-index-embeddings-opea [0.3.1]

- vbump all the things ([#20978](https://github.com/run-llama/llama_index/pull/20978))

### llama-index-embeddings-openai-like [0.3.1]

- vbump all the things ([#20978](https://github.com/run-llama/llama_index/pull/20978))

### llama-index-embeddings-upstage [0.6.1]

- vbump all the things ([#20978](https://github.com/run-llama/llama_index/pull/20978))

### llama-index-indices-managed-lancedb [0.3.1]

- drop the mutable default in **init** ([#20998](https://github.com/run-llama/llama_index/pull/20998))

### llama-index-instrumentation [0.5.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-llms-anthropic [0.11.1]

- Bugfix: Pydantic validation error in AnthropicCompletionResponse ([#21027](https://github.com/run-llama/llama_index/pull/21027))

### llama-index-llms-anyscale [0.5.1]

- vbump all the things ([#20978](https://github.com/run-llama/llama_index/pull/20978))

### llama-index-llms-azure-openai [0.5.1]

- vbump all the things ([#20978](https://github.com/run-llama/llama_index/pull/20978))

### llama-index-llms-baseten [0.2.1]

- vbump all the things ([#20978](https://github.com/run-llama/llama_index/pull/20978))

### llama-index-llms-bedrock-converse [0.14.2]

- vbump all the things ([#20978](https://github.com/run-llama/llama_index/pull/20978))
- feat(bedrock-converse): Set context window size to 1M for Opus 4.6 & Sonnet 4.6 ([#20982](https://github.com/run-llama/llama_index/pull/20982))

### llama-index-llms-deepinfra [0.6.1]

- vbump all the things ([#20978](https://github.com/run-llama/llama_index/pull/20978))

### llama-index-llms-everlyai [0.5.1]

- vbump all the things ([#20978](https://github.com/run-llama/llama_index/pull/20978))

### llama-index-llms-fireworks [0.5.1]

- vbump all the things ([#20978](https://github.com/run-llama/llama_index/pull/20978))

### llama-index-llms-keywordsai [1.2.1]

- vbump all the things ([#20978](https://github.com/run-llama/llama_index/pull/20978))

### llama-index-llms-monsterapi [0.5.1]

- vbump all the things ([#20978](https://github.com/run-llama/llama_index/pull/20978))

### llama-index-llms-openai [0.7.2]

- fix openai document block format ([#20975](https://github.com/run-llama/llama_index/pull/20975))
- feat(openai): add support for GPT-5.4 and GPT-5.4-pro models ([#20976](https://github.com/run-llama/llama_index/pull/20976))

### llama-index-llms-openai-like [0.7.1]

- vbump all the things ([#20978](https://github.com/run-llama/llama_index/pull/20978))

### llama-index-llms-ovhcloud [0.2.1]

- vbump all the things ([#20978](https://github.com/run-llama/llama_index/pull/20978))

### llama-index-llms-perplexity [0.5.1]

- vbump all the things ([#20978](https://github.com/run-llama/llama_index/pull/20978))

### llama-index-llms-portkey [0.5.1]

- vbump all the things ([#20978](https://github.com/run-llama/llama_index/pull/20978))

### llama-index-llms-upstage [0.8.1]

- vbump all the things ([#20978](https://github.com/run-llama/llama_index/pull/20978))

### llama-index-llms-yi [0.5.1]

- vbump all the things ([#20978](https://github.com/run-llama/llama_index/pull/20978))

### llama-index-packs-agent-search-retriever [0.5.0]

- chore(deps): bump the uv group across 51 directories with 3 updates ([#20962](https://github.com/run-llama/llama_index/pull/20962))
- chore(deps): bump the uv group across 43 directories with 5 updates ([#20988](https://github.com/run-llama/llama_index/pull/20988))
- chore(deps): bump the uv group across 42 directories with 2 updates ([#21020](https://github.com/run-llama/llama_index/pull/21020))

### llama-index-packs-amazon-product-extraction [0.5.0]

- chore(deps): bump the uv group across 51 directories with 3 updates ([#20962](https://github.com/run-llama/llama_index/pull/20962))
- chore(deps): bump the uv group across 43 directories with 5 updates ([#20988](https://github.com/run-llama/llama_index/pull/20988))
- chore(deps): bump the uv group across 42 directories with 2 updates ([#21020](https://github.com/run-llama/llama_index/pull/21020))

### llama-index-packs-arize-phoenix-query-engine [0.5.0]

- chore(deps): bump the uv group across 51 directories with 3 updates ([#20962](https://github.com/run-llama/llama_index/pull/20962))
- chore(deps): bump the uv group across 43 directories with 5 updates ([#20988](https://github.com/run-llama/llama_index/pull/20988))
- chore(deps): bump the uv group across 42 directories with 2 updates ([#21020](https://github.com/run-llama/llama_index/pull/21020))

### llama-index-packs-auto-merging-retriever [0.6.0]

- chore(deps): bump the uv group across 51 directories with 3 updates ([#20962](https://github.com/run-llama/llama_index/pull/20962))
- chore(deps): bump the uv group across 43 directories with 5 updates ([#20988](https://github.com/run-llama/llama_index/pull/20988))
- chore(deps): bump the uv group across 42 directories with 2 updates ([#21020](https://github.com/run-llama/llama_index/pull/21020))

### llama-index-packs-code-hierarchy [0.7.1]

- chore(deps): bump the uv group across 51 directories with 3 updates ([#20962](https://github.com/run-llama/llama_index/pull/20962))
- vbump all the things ([#20978](https://github.com/run-llama/llama_index/pull/20978))
- chore(deps): bump the uv group across 43 directories with 5 updates ([#20988](https://github.com/run-llama/llama_index/pull/20988))
- chore(deps): bump the uv group across 42 directories with 2 updates ([#21020](https://github.com/run-llama/llama_index/pull/21020))

### llama-index-packs-cohere-citation-chat [0.6.0]

- chore(deps): bump the uv group across 51 directories with 3 updates ([#20962](https://github.com/run-llama/llama_index/pull/20962))
- chore(deps): bump the uv group across 43 directories with 5 updates ([#20988](https://github.com/run-llama/llama_index/pull/20988))
- chore(deps): bump the uv group across 42 directories with 2 updates ([#21020](https://github.com/run-llama/llama_index/pull/21020))

### llama-index-packs-deeplake-deepmemory-retriever [0.5.0]

- chore(deps): bump the uv group across 51 directories with 3 updates ([#20962](https://github.com/run-llama/llama_index/pull/20962))
- chore(deps): bump the uv group across 43 directories with 5 updates ([#20988](https://github.com/run-llama/llama_index/pull/20988))
- chore(deps): bump the uv group across 42 directories with 2 updates ([#21020](https://github.com/run-llama/llama_index/pull/21020))

### llama-index-packs-deeplake-multimodal-retrieval [0.4.0]

- chore(deps): bump the uv group across 51 directories with 3 updates ([#20962](https://github.com/run-llama/llama_index/pull/20962))
- chore(deps): bump the uv group across 43 directories with 5 updates ([#20988](https://github.com/run-llama/llama_index/pull/20988))

### llama-index-packs-dense-x-retrieval [0.6.1]

- chore(deps): bump the uv group across 51 directories with 3 updates ([#20962](https://github.com/run-llama/llama_index/pull/20962))
- vbump all the things ([#20978](https://github.com/run-llama/llama_index/pull/20978))
- chore(deps): bump the uv group across 43 directories with 5 updates ([#20988](https://github.com/run-llama/llama_index/pull/20988))
- chore(deps): bump the uv group across 42 directories with 2 updates ([#21020](https://github.com/run-llama/llama_index/pull/21020))

### llama-index-packs-diff-private-simple-dataset [0.5.0]

- chore(deps): bump the uv group across 51 directories with 3 updates ([#20962](https://github.com/run-llama/llama_index/pull/20962))
- chore(deps): bump the uv group across 43 directories with 5 updates ([#20988](https://github.com/run-llama/llama_index/pull/20988))
- chore(deps): bump the uv group across 42 directories with 2 updates ([#21020](https://github.com/run-llama/llama_index/pull/21020))

### llama-index-packs-evaluator-benchmarker [0.5.0]

- chore(deps): bump the uv group across 51 directories with 3 updates ([#20962](https://github.com/run-llama/llama_index/pull/20962))
- chore(deps): bump the uv group across 43 directories with 5 updates ([#20988](https://github.com/run-llama/llama_index/pull/20988))
- chore(deps): bump the uv group across 42 directories with 2 updates ([#21020](https://github.com/run-llama/llama_index/pull/21020))

### llama-index-packs-fusion-retriever [0.6.0]

- chore(deps): bump the uv group across 51 directories with 3 updates ([#20962](https://github.com/run-llama/llama_index/pull/20962))
- chore(deps): bump the uv group across 43 directories with 5 updates ([#20988](https://github.com/run-llama/llama_index/pull/20988))
- chore(deps): bump the uv group across 42 directories with 2 updates ([#21020](https://github.com/run-llama/llama_index/pull/21020))

### llama-index-packs-fuzzy-citation [0.5.0]

- chore(deps): bump the uv group across 51 directories with 3 updates ([#20962](https://github.com/run-llama/llama_index/pull/20962))
- chore(deps): bump the uv group across 43 directories with 5 updates ([#20988](https://github.com/run-llama/llama_index/pull/20988))
- chore(deps): bump the uv group across 42 directories with 2 updates ([#21020](https://github.com/run-llama/llama_index/pull/21020))

### llama-index-packs-gmail-openai-agent [0.5.0]

- chore(deps): bump the uv group across 51 directories with 3 updates ([#20962](https://github.com/run-llama/llama_index/pull/20962))
- chore(deps): bump the uv group across 43 directories with 5 updates ([#20988](https://github.com/run-llama/llama_index/pull/20988))
- chore(deps): bump the uv group across 42 directories with 2 updates ([#21020](https://github.com/run-llama/llama_index/pull/21020))

### llama-index-packs-koda-retriever [0.5.0]

- chore(deps): bump the uv group across 51 directories with 3 updates ([#20962](https://github.com/run-llama/llama_index/pull/20962))
- chore(deps): bump the uv group across 43 directories with 5 updates ([#20988](https://github.com/run-llama/llama_index/pull/20988))
- chore(deps): bump the uv group across 42 directories with 2 updates ([#21020](https://github.com/run-llama/llama_index/pull/21020))

### llama-index-packs-llama-dataset-metadata [0.5.0]

- chore(deps): bump the uv group across 51 directories with 3 updates ([#20962](https://github.com/run-llama/llama_index/pull/20962))
- chore(deps): bump the uv group across 43 directories with 5 updates ([#20988](https://github.com/run-llama/llama_index/pull/20988))
- chore(deps): bump the uv group across 42 directories with 2 updates ([#21020](https://github.com/run-llama/llama_index/pull/21020))

### llama-index-packs-llama-guard-moderator [0.5.0]

- chore(deps): bump the uv group across 51 directories with 3 updates ([#20962](https://github.com/run-llama/llama_index/pull/20962))
- chore(deps): bump the uv group across 43 directories with 5 updates ([#20988](https://github.com/run-llama/llama_index/pull/20988))
- chore(deps): bump the uv group across 42 directories with 2 updates ([#21020](https://github.com/run-llama/llama_index/pull/21020))

### llama-index-packs-llava-completion [0.5.0]

- chore(deps): bump the uv group across 51 directories with 3 updates ([#20962](https://github.com/run-llama/llama_index/pull/20962))
- chore(deps): bump the uv group across 43 directories with 5 updates ([#20988](https://github.com/run-llama/llama_index/pull/20988))
- chore(deps): bump the uv group across 42 directories with 2 updates ([#21020](https://github.com/run-llama/llama_index/pull/21020))

### llama-index-packs-longrag [0.6.0]

- chore(deps): bump the uv group across 51 directories with 3 updates ([#20962](https://github.com/run-llama/llama_index/pull/20962))
- chore(deps): bump the uv group across 43 directories with 5 updates ([#20988](https://github.com/run-llama/llama_index/pull/20988))
- chore(deps): bump the uv group across 42 directories with 2 updates ([#21020](https://github.com/run-llama/llama_index/pull/21020))

### llama-index-packs-mixture-of-agents [0.5.0]

- chore(deps): bump the uv group across 51 directories with 3 updates ([#20962](https://github.com/run-llama/llama_index/pull/20962))
- chore(deps): bump the uv group across 43 directories with 5 updates ([#20988](https://github.com/run-llama/llama_index/pull/20988))
- chore(deps): bump the uv group across 42 directories with 2 updates ([#21020](https://github.com/run-llama/llama_index/pull/21020))

### llama-index-packs-multi-tenancy-rag [0.6.0]

- chore(deps): bump the uv group across 51 directories with 3 updates ([#20962](https://github.com/run-llama/llama_index/pull/20962))
- chore(deps): bump the uv group across 43 directories with 5 updates ([#20988](https://github.com/run-llama/llama_index/pull/20988))
- chore(deps): bump the uv group across 42 directories with 2 updates ([#21020](https://github.com/run-llama/llama_index/pull/21020))

### llama-index-packs-multidoc-autoretrieval [0.5.0]

- chore(deps): bump the uv group across 51 directories with 3 updates ([#20962](https://github.com/run-llama/llama_index/pull/20962))
- chore(deps): bump the uv group across 43 directories with 5 updates ([#20988](https://github.com/run-llama/llama_index/pull/20988))
- chore(deps): bump the uv group across 42 directories with 2 updates ([#21020](https://github.com/run-llama/llama_index/pull/21020))

### llama-index-packs-nebulagraph-query-engine [0.6.0]

- chore(deps): bump the uv group across 51 directories with 3 updates ([#20962](https://github.com/run-llama/llama_index/pull/20962))
- chore(deps): bump the uv group across 43 directories with 5 updates ([#20988](https://github.com/run-llama/llama_index/pull/20988))
- chore(deps): bump the uv group across 42 directories with 2 updates ([#21020](https://github.com/run-llama/llama_index/pull/21020))

### llama-index-packs-neo4j-query-engine [0.5.1]

- chore(deps): bump the uv group across 51 directories with 3 updates ([#20962](https://github.com/run-llama/llama_index/pull/20962))
- chore(deps): bump the uv group across 43 directories with 5 updates ([#20988](https://github.com/run-llama/llama_index/pull/20988))
- chore(deps): bump the uv group across 42 directories with 2 updates ([#21020](https://github.com/run-llama/llama_index/pull/21020))

### llama-index-packs-node-parser-semantic-chunking [0.5.1]

- chore(deps): bump the uv group across 51 directories with 3 updates ([#20962](https://github.com/run-llama/llama_index/pull/20962))
- vbump all the things ([#20978](https://github.com/run-llama/llama_index/pull/20978))
- chore(deps): bump the uv group across 43 directories with 5 updates ([#20988](https://github.com/run-llama/llama_index/pull/20988))
- chore(deps): bump the uv group across 42 directories with 2 updates ([#21020](https://github.com/run-llama/llama_index/pull/21020))

### llama-index-packs-ollama-query-engine [0.6.0]

- chore(deps): bump the uv group across 51 directories with 3 updates ([#20962](https://github.com/run-llama/llama_index/pull/20962))
- chore(deps): bump the uv group across 43 directories with 5 updates ([#20988](https://github.com/run-llama/llama_index/pull/20988))
- chore(deps): bump the uv group across 42 directories with 2 updates ([#21020](https://github.com/run-llama/llama_index/pull/21020))

### llama-index-packs-panel-chatbot [0.5.0]

- chore(deps): bump the uv group across 51 directories with 3 updates ([#20962](https://github.com/run-llama/llama_index/pull/20962))
- chore(deps): bump the uv group across 43 directories with 5 updates ([#20988](https://github.com/run-llama/llama_index/pull/20988))
- chore(deps): bump the uv group across 42 directories with 2 updates ([#21020](https://github.com/run-llama/llama_index/pull/21020))

### llama-index-packs-raft-dataset [0.5.1]

- chore(deps): bump the uv group across 51 directories with 3 updates ([#20962](https://github.com/run-llama/llama_index/pull/20962))
- vbump all the things ([#20978](https://github.com/run-llama/llama_index/pull/20978))
- chore(deps): bump the uv group across 43 directories with 5 updates ([#20988](https://github.com/run-llama/llama_index/pull/20988))
- chore(deps): bump the uv group across 42 directories with 2 updates ([#21020](https://github.com/run-llama/llama_index/pull/21020))

### llama-index-packs-rag-evaluator [0.5.1]

- chore(deps): bump the uv group across 51 directories with 3 updates ([#20962](https://github.com/run-llama/llama_index/pull/20962))
- vbump all the things ([#20978](https://github.com/run-llama/llama_index/pull/20978))
- chore(deps): bump the uv group across 43 directories with 5 updates ([#20988](https://github.com/run-llama/llama_index/pull/20988))
- chore(deps): bump the uv group across 42 directories with 2 updates ([#21020](https://github.com/run-llama/llama_index/pull/21020))

### llama-index-packs-ragatouille-retriever [0.6.0]

- chore(deps): bump the uv group across 51 directories with 3 updates ([#20962](https://github.com/run-llama/llama_index/pull/20962))
- chore(deps): bump the uv group across 43 directories with 5 updates ([#20988](https://github.com/run-llama/llama_index/pull/20988))
- chore(deps): bump the uv group across 42 directories with 2 updates ([#21020](https://github.com/run-llama/llama_index/pull/21020))

### llama-index-packs-raptor [0.4.1]

- chore(deps): bump the uv group across 51 directories with 3 updates ([#20962](https://github.com/run-llama/llama_index/pull/20962))

### llama-index-packs-recursive-retriever [0.8.1]

- chore(deps): bump the uv group across 51 directories with 3 updates ([#20962](https://github.com/run-llama/llama_index/pull/20962))
- vbump all the things ([#20978](https://github.com/run-llama/llama_index/pull/20978))
- chore(deps): bump the uv group across 43 directories with 5 updates ([#20988](https://github.com/run-llama/llama_index/pull/20988))
- chore(deps): bump the uv group across 42 directories with 2 updates ([#21020](https://github.com/run-llama/llama_index/pull/21020))

### llama-index-packs-resume-screener [0.10.1]

- chore(deps): bump the uv group across 51 directories with 3 updates ([#20962](https://github.com/run-llama/llama_index/pull/20962))
- vbump all the things ([#20978](https://github.com/run-llama/llama_index/pull/20978))
- chore(deps): bump the uv group across 43 directories with 5 updates ([#20988](https://github.com/run-llama/llama_index/pull/20988))
- chore(deps): bump the uv group across 42 directories with 2 updates ([#21020](https://github.com/run-llama/llama_index/pull/21020))

### llama-index-packs-retry-engine-weaviate [0.6.0]

- chore(deps): bump the uv group across 51 directories with 3 updates ([#20962](https://github.com/run-llama/llama_index/pull/20962))
- chore(deps): bump the uv group across 43 directories with 5 updates ([#20988](https://github.com/run-llama/llama_index/pull/20988))
- chore(deps): bump the uv group across 42 directories with 2 updates ([#21020](https://github.com/run-llama/llama_index/pull/21020))

### llama-index-packs-searchain [0.3.0]

- chore(deps): bump the uv group across 51 directories with 3 updates ([#20962](https://github.com/run-llama/llama_index/pull/20962))
- chore(deps): bump the uv group across 43 directories with 5 updates ([#20988](https://github.com/run-llama/llama_index/pull/20988))
- chore(deps): bump the uv group across 42 directories with 2 updates ([#21020](https://github.com/run-llama/llama_index/pull/21020))

### llama-index-packs-self-discover [0.5.0]

- chore(deps): bump the uv group across 51 directories with 3 updates ([#20962](https://github.com/run-llama/llama_index/pull/20962))
- chore(deps): bump the uv group across 43 directories with 5 updates ([#20988](https://github.com/run-llama/llama_index/pull/20988))
- chore(deps): bump the uv group across 42 directories with 2 updates ([#21020](https://github.com/run-llama/llama_index/pull/21020))

### llama-index-packs-self-rag [0.5.0]

- chore(deps): bump the uv group across 51 directories with 3 updates ([#20962](https://github.com/run-llama/llama_index/pull/20962))
- chore(deps): bump the uv group across 43 directories with 5 updates ([#20988](https://github.com/run-llama/llama_index/pull/20988))
- chore(deps): bump the uv group across 42 directories with 2 updates ([#21020](https://github.com/run-llama/llama_index/pull/21020))

### llama-index-packs-sentence-window-retriever [0.6.0]

- chore(deps): bump the uv group across 51 directories with 3 updates ([#20962](https://github.com/run-llama/llama_index/pull/20962))
- chore(deps): bump the uv group across 43 directories with 5 updates ([#20988](https://github.com/run-llama/llama_index/pull/20988))
- chore(deps): bump the uv group across 42 directories with 2 updates ([#21020](https://github.com/run-llama/llama_index/pull/21020))

### llama-index-packs-snowflake-query-engine [0.6.0]

- chore(deps): bump the uv group across 51 directories with 3 updates ([#20962](https://github.com/run-llama/llama_index/pull/20962))
- chore(deps): bump the uv group across 43 directories with 5 updates ([#20988](https://github.com/run-llama/llama_index/pull/20988))
- chore(deps): bump the uv group across 42 directories with 2 updates ([#21020](https://github.com/run-llama/llama_index/pull/21020))

### llama-index-packs-stock-market-data-query-engine [0.6.0]

- chore(deps): bump the uv group across 51 directories with 3 updates ([#20962](https://github.com/run-llama/llama_index/pull/20962))
- chore(deps): bump the uv group across 43 directories with 5 updates ([#20988](https://github.com/run-llama/llama_index/pull/20988))
- chore(deps): bump the uv group across 42 directories with 2 updates ([#21020](https://github.com/run-llama/llama_index/pull/21020))

### llama-index-packs-streamlit-chatbot [0.5.2]

- chore(deps): bump the uv group across 51 directories with 3 updates ([#20962](https://github.com/run-llama/llama_index/pull/20962))

### llama-index-packs-sub-question-weaviate [0.5.0]

- chore(deps): bump the uv group across 51 directories with 3 updates ([#20962](https://github.com/run-llama/llama_index/pull/20962))
- chore(deps): bump the uv group across 43 directories with 5 updates ([#20988](https://github.com/run-llama/llama_index/pull/20988))
- chore(deps): bump the uv group across 42 directories with 2 updates ([#21020](https://github.com/run-llama/llama_index/pull/21020))

### llama-index-packs-timescale-vector-autoretrieval [0.5.0]

- chore(deps): bump the uv group across 51 directories with 3 updates ([#20962](https://github.com/run-llama/llama_index/pull/20962))
- chore(deps): bump the uv group across 43 directories with 5 updates ([#20988](https://github.com/run-llama/llama_index/pull/20988))
- chore(deps): bump the uv group across 42 directories with 2 updates ([#21020](https://github.com/run-llama/llama_index/pull/21020))

### llama-index-packs-trulens-eval-packs [0.4.1]

- chore(deps): bump the uv group across 51 directories with 3 updates ([#20962](https://github.com/run-llama/llama_index/pull/20962))
- chore(deps): bump langchain-community from 0.0.38 to 0.3.27 in /llama-index-packs/llama-index-packs-trulens-eval-packs ([#20983](https://github.com/run-llama/llama_index/pull/20983))
- chore(deps): bump the uv group across 43 directories with 5 updates ([#20988](https://github.com/run-llama/llama_index/pull/20988))

### llama-index-postprocessor-google-rerank [0.1.0]

- feat(postprocessor): add Google Discovery Engine rerank integration ([#20893](https://github.com/run-llama/llama_index/pull/20893))

### llama-index-readers-gcs [0.6.1]

- vbump all the things ([#20978](https://github.com/run-llama/llama_index/pull/20978))

### llama-index-readers-github [0.11.2]

- fix(github-reader): replace run_until_complete with asyncio_run for async compatibility ([#20963](https://github.com/run-llama/llama_index/pull/20963))
- vbump all the things ([#20978](https://github.com/run-llama/llama_index/pull/20978))

### llama-index-readers-joplin [0.6.1]

- vbump all the things ([#20978](https://github.com/run-llama/llama_index/pull/20978))

### llama-index-readers-mbox [0.6.1]

- vbump all the things ([#20978](https://github.com/run-llama/llama_index/pull/20978))

### llama-index-readers-microsoft-sharepoint [0.9.1]

- vbump all the things ([#20978](https://github.com/run-llama/llama_index/pull/20978))

### llama-index-readers-obsidian [0.7.1]

- vbump all the things ([#20978](https://github.com/run-llama/llama_index/pull/20978))

### llama-index-readers-pandas-ai [0.6.1]

- vbump all the things ([#20978](https://github.com/run-llama/llama_index/pull/20978))

### llama-index-readers-pebblo [0.6.1]

- vbump all the things ([#20978](https://github.com/run-llama/llama_index/pull/20978))

### llama-index-readers-s3 [0.6.1]

- vbump all the things ([#20978](https://github.com/run-llama/llama_index/pull/20978))

### llama-index-readers-service-now [0.3.0]

- chore(deps): bump the uv group across 51 directories with 3 updates ([#20962](https://github.com/run-llama/llama_index/pull/20962))

### llama-index-retrievers-bm25 [0.7.1]

- fix: handle empty corpus after metadata filtering in BM25Retriever ([#20926](https://github.com/run-llama/llama_index/pull/20926))

### llama-index-storage-docstore-postgres [0.5.0]

- Expose Postgres KVStore engine settings for timeouts (fix #15888) ([#20951](https://github.com/run-llama/llama_index/pull/20951))

### llama-index-storage-kvstore-postgres [0.5.0]

- Expose Postgres KVStore engine settings for timeouts (fix #15888) ([#20951](https://github.com/run-llama/llama_index/pull/20951))

### llama-index-tools-google [0.7.1]

- feat(google-tools): support service account and cloud auth for Calendar and Gmail ([#20879](https://github.com/run-llama/llama_index/pull/20879))

### llama-index-vector-stores-couchbase [0.7.1]

- vbump all the things ([#20978](https://github.com/run-llama/llama_index/pull/20978))

### llama-index-vector-stores-mongodb [0.10.1]

- vbump all the things ([#20978](https://github.com/run-llama/llama_index/pull/20978))

### llama-index-vector-stores-opensearch [1.2.0]

- feat: align text match filters across core and vector backends ([#20883](https://github.com/run-llama/llama_index/pull/20883))

### llama-index-vector-stores-postgres [0.8.1]

- feat(postgres): add MMR (Maximal Marginal Relevance) query support ([#20860](https://github.com/run-llama/llama_index/pull/20860))

### llama-index-vector-stores-qdrant [0.10.0]

- feat: align text match filters across core and vector backends ([#20883](https://github.com/run-llama/llama_index/pull/20883))

### llama-index-vector-stores-solr [0.2.0]

- feat: align text match filters across core and vector backends ([#20883](https://github.com/run-llama/llama_index/pull/20883))
- fix: correct typo 'compatability' to 'compatibility' in Solr client ([#21029](https://github.com/run-llama/llama_index/pull/21029))

## [2026-03-12]

### llama-index-agent-agentmesh [0.2.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-agent-azure [0.3.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-callbacks-agentops [0.5.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-callbacks-argilla [0.5.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-callbacks-arize-phoenix [0.7.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-callbacks-honeyhive [0.5.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-callbacks-langfuse [0.5.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-callbacks-literalai [1.4.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-callbacks-openinference [0.5.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-callbacks-opik [1.3.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-callbacks-promptlayer [0.5.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-callbacks-uptrain [0.6.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-callbacks-wandb [0.5.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-core [0.14.17]

- feat: align text match filters across core and vector backends ([#20883](https://github.com/run-llama/llama_index/pull/20883))
- fix(chat_engine): preserve chat history on incomplete stream consumption ([#20897](https://github.com/run-llama/llama_index/pull/20897))
- fix: guard against ZeroDivisionError in LlamaDebugHandler.\_get_time_stats_from_event_pairs ([#20937](https://github.com/run-llama/llama_index/pull/20937))
- fix: add stacklevel=2 to warnings.warn() for accurate caller reporting ([#20939](https://github.com/run-llama/llama_index/pull/20939))
- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-embeddings-adapter [0.5.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-embeddings-alephalpha [0.5.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-embeddings-alibabacloud-aisearch [0.4.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-embeddings-anyscale [0.5.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-embeddings-autoembeddings [0.3.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-embeddings-azure-inference [0.5.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-embeddings-azure-openai [0.5.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-embeddings-baseten [0.2.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-embeddings-bedrock [0.8.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-embeddings-clarifai [0.5.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-embeddings-clip [0.6.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-embeddings-cloudflare-workersai [0.5.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-embeddings-cohere [0.8.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-embeddings-dashscope [0.5.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-embeddings-databricks [0.5.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-embeddings-deepinfra [0.5.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-embeddings-elasticsearch [0.5.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-embeddings-fastembed [0.6.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-embeddings-fireworks [0.5.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-embeddings-gaudi [0.4.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-embeddings-gigachat [0.5.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-embeddings-google-genai [0.5.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-embeddings-heroku [0.2.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-embeddings-huggingface [0.7.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-embeddings-huggingface-api [0.5.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-embeddings-huggingface-openvino [0.7.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-embeddings-huggingface-optimum-intel [0.5.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-embeddings-instructor [0.5.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-embeddings-isaacus [0.2.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-embeddings-jinaai [0.6.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-embeddings-langchain [0.5.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-embeddings-litellm [0.5.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-embeddings-llamafile [0.5.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-embeddings-llm-rails [0.5.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-embeddings-mistralai [0.5.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-instrumentation [0.5.0]

- chore: deprecate python 3.9 once and for all ([#20956](https://github.com/run-llama/llama_index/pull/20956))

### llama-index-vector-stores-opensearch [1.2.0]

- feat: align text match filters across core and vector backends ([#20883](https://github.com/run-llama/llama_index/pull/20883))

### llama-index-vector-stores-qdrant [0.10.0]

- feat: align text match filters across core and vector backends ([#20883](https://github.com/run-llama/llama_index/pull/20883))

### llama-index-vector-stores-solr [0.2.0]

- feat: align text match filters across core and vector backends ([#20883](https://github.com/run-llama/llama_index/pull/20883))

## [2026-03-10]

### llama-index-core [0.14.16]

- Add token-bucket rate limiter for LLM and embedding API calls ([#20712](https://github.com/run-llama/llama_index/pull/20712))
- Fix/20706 chonkie init doc ([#20713](https://github.com/run-llama/llama_index/pull/20713))
- fix: pass tool_choice through FunctionCallingProgram ([#20740](https://github.com/run-llama/llama_index/pull/20740))
- feat: Multimodal LLMReranker ([#20743](https://github.com/run-llama/llama_index/pull/20743))
- feat: add optional embed_model to SemanticDoubleMergingSplitterNodeParser ([#20748](https://github.com/run-llama/llama_index/pull/20748))
- fix(core): preserve doc_id in legacy_json_to_doc ([#20750](https://github.com/run-llama/llama_index/pull/20750))
- fix: async retry backoff to avoid blocking event loop ([#20764](https://github.com/run-llama/llama_index/pull/20764))
- Fix additionalProperties in auto-generated KG schema models ([#20768](https://github.com/run-llama/llama_index/pull/20768))
- fix: respect db_schema when custom async_engine is provided ([#20779](https://github.com/run-llama/llama_index/pull/20779))
- fix(core): replace blocking `run_async_tasks` with `asyncio.gather` ([#20795](https://github.com/run-llama/llama_index/pull/20795))
- feat(rate_limiter): add SlidingWindowRateLimiter for strict per-minute caps ([#20799](https://github.com/run-llama/llama_index/pull/20799))
- fix(core): preserve `docstore_strategy` across pipeline runs when no vector store is attached ([#20824](https://github.com/run-llama/llama_index/pull/20824))
- Fix FunctionTool not respecting pydantic Field defaults ([#20839](https://github.com/run-llama/llama_index/pull/20839))
- Fix MarkdownElementNodeParser to extract code blocks ([#20840](https://github.com/run-llama/llama_index/pull/20840))
- security: add RestrictedUnpickler to SimpleObjectNodeMapping (CWE-502) ([#20857](https://github.com/run-llama/llama_index/pull/20857))
- feat: extend vector store metadata filters ([#20861](https://github.com/run-llama/llama_index/pull/20861))
- fix(react): pass system_prompt to ReActChatFormatter template ([#20873](https://github.com/run-llama/llama_index/pull/20873))
- refactor: deprecate asyncio_module in favour of get_asyncio_module ([#20902](https://github.com/run-llama/llama_index/pull/20902))
- fix(core): partial-failure handling in SubQuestionQueryEngine ([#20905](https://github.com/run-llama/llama_index/pull/20905))
- fix: add bounds check to prevent infinite loop in ChatMemoryBuffer.get() ([#20914](https://github.com/run-llama/llama_index/pull/20914))
- fix: ensure streaming flag reset on exception in CondenseQuestionChatEngine ([#20915](https://github.com/run-llama/llama_index/pull/20915))
- fix: pass through run id correctly ([#20928](https://github.com/run-llama/llama_index/pull/20928))

### llama-index-embeddings-bedrock [0.7.4]

- fix: raise ValueError when 'model' is passed instead of 'model_name' in BedrockEmbedding ([#20836](https://github.com/run-llama/llama_index/pull/20836))

### llama-index-embeddings-openai [0.5.2]

- Respect Retry-After header in OpenAI retry decorator ([#20813](https://github.com/run-llama/llama_index/pull/20813))

### llama-index-embeddings-upstage [0.5.1]

- chore(deps): bump the uv group across 47 directories with 3 updates ([#20793](https://github.com/run-llama/llama_index/pull/20793))

### llama-index-graph-stores-neo4j [0.6.0]

- Add Neo4j user agent ([#20827](https://github.com/run-llama/llama_index/pull/20827))
- feat(neo4j): add apoc_sample parameter for large database schema introspection ([#20859](https://github.com/run-llama/llama_index/pull/20859))

### llama-index-instrumentation [0.4.3]

- otel instrumentation enhancements ([#20816](https://github.com/run-llama/llama_index/pull/20816))

### llama-index-llms-anthropic [0.10.11]

- Add User-Agent header for Anthropic API calls ([#20771](https://github.com/run-llama/llama_index/pull/20771))
- fix: apply cache_control only to last block to respect Anthropic's 4-block limit ([#20875](https://github.com/run-llama/llama_index/pull/20875))

### llama-index-llms-azure-inference [0.6.0]

- fix(azure-inference): properly manage async client lifecycle to prevent unclosed sessions ([#20885](https://github.com/run-llama/llama_index/pull/20885))

### llama-index-llms-bedrock-converse [0.13.0]

- fix(bedrock-converse): Improve handling of reasoningContent in responses from Converse & ConverStream requests ([#20853](https://github.com/run-llama/llama_index/pull/20853))

### llama-index-llms-langchain [0.7.2]

- fix: bump ver to trigger llama-index-llms-langchain integration release ([#20751](https://github.com/run-llama/llama_index/pull/20751))

### llama-index-llms-mistralai [0.10.0.post2]

- Fix mistralai pkg version bump ([#20776](https://github.com/run-llama/llama_index/pull/20776))
- fix: update Mistral package Python requirement ([#20777](https://github.com/run-llama/llama_index/pull/20777))

### llama-index-llms-modelslab [0.1.0]

- feat: Add ModelsLab LLM integration (llama-index-llms-modelslab) ([#20731](https://github.com/run-llama/llama_index/pull/20731))

### llama-index-llms-openai [0.6.26]

- fix-openai-toolcall-after-thinking #20333 ([#20725](https://github.com/run-llama/llama_index/pull/20725))
- fix: forward allow_parallel_tool_calls for OpenAI chat completions ([#20744](https://github.com/run-llama/llama_index/pull/20744))
- feat: gpt-5-chat support ([#20774](https://github.com/run-llama/llama_index/pull/20774))
- feat: support reasoning_content in OpenAI Chat Completions ([#20786](https://github.com/run-llama/llama_index/pull/20786))
- nit: add openai model name ([#20800](https://github.com/run-llama/llama_index/pull/20800))
- fix: Use constrained decoding for OpenAIResponses structured_predict ([#20808](https://github.com/run-llama/llama_index/pull/20808))
- Respect Retry-After header in OpenAI retry decorator ([#20813](https://github.com/run-llama/llama_index/pull/20813))
- fix openai tool calls ([#20831](https://github.com/run-llama/llama_index/pull/20831))
- fix: strip parallel_tool_calls for reasoning models ([#20866](https://github.com/run-llama/llama_index/pull/20866))

### llama-index-node-parser-chonkie [0.1.2]

- Fix/20706 chonkie init doc ([#20713](https://github.com/run-llama/llama_index/pull/20713))

### llama-index-observability-otel [0.5.1]

- feat: add extra span processors to register within the otel tracer ([#20747](https://github.com/run-llama/llama_index/pull/20747))
- feat: pass a custom tracer provider ([#20765](https://github.com/run-llama/llama_index/pull/20765))
- feat: add inheritance for external context ([#20788](https://github.com/run-llama/llama_index/pull/20788))
- otel instrumentation enhancements ([#20816](https://github.com/run-llama/llama_index/pull/20816))

### llama-index-packs-agent-search-retriever [0.4.1]

- chore(deps): bump the uv group across 47 directories with 3 updates ([#20793](https://github.com/run-llama/llama_index/pull/20793))

### llama-index-packs-amazon-product-extraction [0.4.1]

- chore(deps): bump the uv group across 47 directories with 3 updates ([#20793](https://github.com/run-llama/llama_index/pull/20793))

### llama-index-packs-arize-phoenix-query-engine [0.4.1]

- chore(deps): bump the uv group across 47 directories with 3 updates ([#20793](https://github.com/run-llama/llama_index/pull/20793))
- chore(deps): bump the uv group across 6 directories with 2 updates ([#20856](https://github.com/run-llama/llama_index/pull/20856))

### llama-index-packs-auto-merging-retriever [0.5.1]

- chore(deps): bump the uv group across 47 directories with 3 updates ([#20793](https://github.com/run-llama/llama_index/pull/20793))

### llama-index-packs-code-hierarchy [0.6.1]

- chore(deps): bump the uv group across 8 directories with 2 updates ([#20758](https://github.com/run-llama/llama_index/pull/20758))
- chore(deps): bump the uv group across 47 directories with 3 updates ([#20793](https://github.com/run-llama/llama_index/pull/20793))
- bump the uv group across 9 directories with 2 updates ([#20798](https://github.com/run-llama/llama_index/pull/20798))
- chore(deps): bump the uv group across 6 directories with 2 updates ([#20856](https://github.com/run-llama/llama_index/pull/20856))

### llama-index-packs-cohere-citation-chat [0.5.1]

- chore(deps): bump the uv group across 47 directories with 3 updates ([#20793](https://github.com/run-llama/llama_index/pull/20793))

### llama-index-packs-deeplake-deepmemory-retriever [0.4.1]

- chore(deps): bump the uv group across 47 directories with 3 updates ([#20793](https://github.com/run-llama/llama_index/pull/20793))

### llama-index-packs-deeplake-multimodal-retrieval [0.3.1]

- chore(deps): bump the uv group across 47 directories with 3 updates ([#20793](https://github.com/run-llama/llama_index/pull/20793))

### llama-index-packs-dense-x-retrieval [0.5.1]

- chore(deps): bump the uv group across 47 directories with 3 updates ([#20793](https://github.com/run-llama/llama_index/pull/20793))

### llama-index-packs-diff-private-simple-dataset [0.4.1]

- chore(deps): bump the uv group across 47 directories with 3 updates ([#20793](https://github.com/run-llama/llama_index/pull/20793))

### llama-index-packs-evaluator-benchmarker [0.4.1]

- chore(deps): bump the uv group across 47 directories with 3 updates ([#20793](https://github.com/run-llama/llama_index/pull/20793))

### llama-index-packs-fusion-retriever [0.5.1]

- chore(deps): bump the uv group across 47 directories with 3 updates ([#20793](https://github.com/run-llama/llama_index/pull/20793))

### llama-index-packs-fuzzy-citation [0.4.1]

- chore(deps): bump the uv group across 47 directories with 3 updates ([#20793](https://github.com/run-llama/llama_index/pull/20793))

### llama-index-packs-gmail-openai-agent [0.4.1]

- chore(deps): bump the uv group across 47 directories with 3 updates ([#20793](https://github.com/run-llama/llama_index/pull/20793))

### llama-index-packs-koda-retriever [0.4.1]

- chore(deps): bump the uv group across 47 directories with 3 updates ([#20793](https://github.com/run-llama/llama_index/pull/20793))

### llama-index-packs-llama-dataset-metadata [0.4.1]

- chore(deps): bump the uv group across 47 directories with 3 updates ([#20793](https://github.com/run-llama/llama_index/pull/20793))

### llama-index-packs-llama-guard-moderator [0.4.1]

- chore(deps): bump the uv group across 47 directories with 3 updates ([#20793](https://github.com/run-llama/llama_index/pull/20793))

### llama-index-packs-llava-completion [0.4.1]

- chore(deps): bump the uv group across 47 directories with 3 updates ([#20793](https://github.com/run-llama/llama_index/pull/20793))

### llama-index-packs-longrag [0.5.1]

- chore(deps): bump the uv group across 47 directories with 3 updates ([#20793](https://github.com/run-llama/llama_index/pull/20793))

### llama-index-packs-mixture-of-agents [0.4.1]

- chore(deps): bump the uv group across 47 directories with 3 updates ([#20793](https://github.com/run-llama/llama_index/pull/20793))

### llama-index-packs-multi-tenancy-rag [0.5.1]

- chore(deps): bump the uv group across 47 directories with 3 updates ([#20793](https://github.com/run-llama/llama_index/pull/20793))

### llama-index-packs-multidoc-autoretrieval [0.4.1]

- chore(deps): bump the uv group across 47 directories with 3 updates ([#20793](https://github.com/run-llama/llama_index/pull/20793))

### llama-index-packs-nebulagraph-query-engine [0.5.1]

- chore(deps): bump the uv group across 47 directories with 3 updates ([#20793](https://github.com/run-llama/llama_index/pull/20793))

### llama-index-packs-neo4j-query-engine [0.5.1]

- chore(deps): bump the uv group across 47 directories with 3 updates ([#20793](https://github.com/run-llama/llama_index/pull/20793))
- feat(neo4j): add apoc_sample parameter for large database schema introspection ([#20859](https://github.com/run-llama/llama_index/pull/20859))

### llama-index-packs-node-parser-semantic-chunking [0.4.1]

- chore(deps): bump the uv group across 47 directories with 3 updates ([#20793](https://github.com/run-llama/llama_index/pull/20793))

### llama-index-packs-ollama-query-engine [0.5.1]

- chore(deps): bump the uv group across 47 directories with 3 updates ([#20793](https://github.com/run-llama/llama_index/pull/20793))

### llama-index-packs-panel-chatbot [0.4.1]

- chore(deps): bump the uv group across 8 directories with 2 updates ([#20758](https://github.com/run-llama/llama_index/pull/20758))
- chore(deps): bump the uv group across 47 directories with 3 updates ([#20793](https://github.com/run-llama/llama_index/pull/20793))
- bump the uv group across 9 directories with 2 updates ([#20798](https://github.com/run-llama/llama_index/pull/20798))
- chore(deps): bump the uv group across 6 directories with 2 updates ([#20856](https://github.com/run-llama/llama_index/pull/20856))

### llama-index-packs-raft-dataset [0.4.1]

- chore(deps): bump the uv group across 47 directories with 3 updates ([#20793](https://github.com/run-llama/llama_index/pull/20793))

### llama-index-packs-rag-evaluator [0.4.1]

- chore(deps): bump the uv group across 47 directories with 3 updates ([#20793](https://github.com/run-llama/llama_index/pull/20793))

### llama-index-packs-ragatouille-retriever [0.5.1]

- chore(deps): bump the uv group across 47 directories with 3 updates ([#20793](https://github.com/run-llama/llama_index/pull/20793))

### llama-index-packs-raptor [0.4.1]

- chore(deps): bump the uv group across 8 directories with 2 updates ([#20758](https://github.com/run-llama/llama_index/pull/20758))
- chore(deps): bump the uv group across 47 directories with 3 updates ([#20793](https://github.com/run-llama/llama_index/pull/20793))
- bump the uv group across 9 directories with 2 updates ([#20798](https://github.com/run-llama/llama_index/pull/20798))

### llama-index-packs-recursive-retriever [0.7.1]

- chore(deps): bump the uv group across 8 directories with 2 updates ([#20758](https://github.com/run-llama/llama_index/pull/20758))
- chore(deps): bump the uv group across 47 directories with 3 updates ([#20793](https://github.com/run-llama/llama_index/pull/20793))
- bump the uv group across 9 directories with 2 updates ([#20798](https://github.com/run-llama/llama_index/pull/20798))
- chore(deps): bump the uv group across 6 directories with 2 updates ([#20856](https://github.com/run-llama/llama_index/pull/20856))

### llama-index-packs-resume-screener [0.9.3]

- chore(deps): bump the uv group across 8 directories with 2 updates ([#20758](https://github.com/run-llama/llama_index/pull/20758))
- chore(deps): bump the uv group across 47 directories with 3 updates ([#20793](https://github.com/run-llama/llama_index/pull/20793))
- bump the uv group across 9 directories with 2 updates ([#20798](https://github.com/run-llama/llama_index/pull/20798))
- chore(deps): bump the uv group across 6 directories with 2 updates ([#20856](https://github.com/run-llama/llama_index/pull/20856))

### llama-index-packs-retry-engine-weaviate [0.5.1]

- chore(deps): bump the uv group across 47 directories with 3 updates ([#20793](https://github.com/run-llama/llama_index/pull/20793))

### llama-index-packs-searchain [0.2.1]

- chore(deps): bump the uv group across 47 directories with 3 updates ([#20793](https://github.com/run-llama/llama_index/pull/20793))

### llama-index-packs-self-discover [0.4.1]

- chore(deps): bump the uv group across 47 directories with 3 updates ([#20793](https://github.com/run-llama/llama_index/pull/20793))

### llama-index-packs-self-rag [0.4.1]

- chore(deps): bump the uv group across 47 directories with 3 updates ([#20793](https://github.com/run-llama/llama_index/pull/20793))

### llama-index-packs-sentence-window-retriever [0.5.1]

- chore(deps): bump the uv group across 47 directories with 3 updates ([#20793](https://github.com/run-llama/llama_index/pull/20793))

### llama-index-packs-snowflake-query-engine [0.5.1]

- chore(deps): bump the uv group across 47 directories with 3 updates ([#20793](https://github.com/run-llama/llama_index/pull/20793))

### llama-index-packs-stock-market-data-query-engine [0.5.1]

- chore(deps): bump the uv group across 47 directories with 3 updates ([#20793](https://github.com/run-llama/llama_index/pull/20793))

### llama-index-packs-streamlit-chatbot [0.5.2]

- chore(deps): bump the uv group across 47 directories with 3 updates ([#20793](https://github.com/run-llama/llama_index/pull/20793))

### llama-index-packs-sub-question-weaviate [0.4.1]

- chore(deps): bump the uv group across 47 directories with 3 updates ([#20793](https://github.com/run-llama/llama_index/pull/20793))

### llama-index-packs-timescale-vector-autoretrieval [0.4.1]

- chore(deps): bump the uv group across 47 directories with 3 updates ([#20793](https://github.com/run-llama/llama_index/pull/20793))

### llama-index-packs-trulens-eval-packs [0.4.1]

- chore(deps): bump the uv group across 47 directories with 3 updates ([#20793](https://github.com/run-llama/llama_index/pull/20793))

### llama-index-postprocessor-cohere-rerank [0.7.0]

- Update CohereRerank to ClientV2 to enable V4 rerankers ([#20778](https://github.com/run-llama/llama_index/pull/20778))

### llama-index-readers-github [0.10.0]

- bump the uv group across 9 directories with 2 updates ([#20798](https://github.com/run-llama/llama_index/pull/20798))

### llama-index-readers-igpt-email [0.1.0]

- feat: Add iGPT Email Intelligence tool and reader integrations ([#20727](https://github.com/run-llama/llama_index/pull/20727))

### llama-index-readers-microsoft-sharepoint [0.8.1]

- fix: set \_drive_id_endpoint before early return in SharePointReader.\_get_drive_id ([#20837](https://github.com/run-llama/llama_index/pull/20837))

### llama-index-readers-preprocess [0.5.0]

- Deprecate Preprocess reader: service discontinued ([#20759](https://github.com/run-llama/llama_index/pull/20759))

### llama-index-readers-screenpipe [0.1.0]

- feat: add Screenpipe reader integration for screen OCR and audio tran… ([#20789](https://github.com/run-llama/llama_index/pull/20789))

### llama-index-storage-chat-store-opensearch [0.1.0]

- feat: add OpenSearch chat store integration ([#20796](https://github.com/run-llama/llama_index/pull/20796))

### llama-index-storage-chat-store-redis [0.6.0]

- perf(redis-chat-store): Use Pydantic directly for ChatMessage serialization & deserialization ([#20931](https://github.com/run-llama/llama_index/pull/20931))

### llama-index-tools-aws-bedrock-agentcore [0.2.0]

- feat(tools): add browser management and code interpreter lifecycle to AWS Bedrock AgentCore ([#20811](https://github.com/run-llama/llama_index/pull/20811))

### llama-index-tools-igpt-email [0.1.0]

- feat: Add iGPT Email Intelligence tool and reader integrations ([#20727](https://github.com/run-llama/llama_index/pull/20727))

### llama-index-tools-mcp [0.4.8]

- fix: handle enum types in \_resolve_union_option for Literal unions ([#20780](https://github.com/run-llama/llama_index/pull/20780))

### llama-index-tools-moss [0.2.0]

- fix: Moss integration bug with QueryOptions ([#20815](https://github.com/run-llama/llama_index/pull/20815))

### llama-index-tools-seltz [0.2.0]

- feat(seltz): update Seltz integration to SDK 0.2.0 ([#20906](https://github.com/run-llama/llama_index/pull/20906))

### llama-index-vector-stores-azureaisearch [0.4.5]

- fix(azureaisearch): raise on unsupported query modes ([#20846](https://github.com/run-llama/llama_index/pull/20846))

### llama-index-vector-stores-lancedb [0.4.5]

- fix(lancedb): paginate table existence checks ([#20841](https://github.com/run-llama/llama_index/pull/20841))

### llama-index-vector-stores-lantern [0.4.2]

- fix(lantern,yugabytedb): remove deprecated sessionmaker.close_all() from close() ([#20884](https://github.com/run-llama/llama_index/pull/20884))

### llama-index-vector-stores-neo4jvector [0.5.3]

- Add Neo4j user agent ([#20827](https://github.com/run-llama/llama_index/pull/20827))

### llama-index-vector-stores-opensearch [1.1.1]

- fix(opensearch): defer OpensearchVectorClient index creation to first use ([#20849](https://github.com/run-llama/llama_index/pull/20849))
- fix(opensearch): track client ownership and clean up unclosed sessions ([#20903](https://github.com/run-llama/llama_index/pull/20903))

### llama-index-vector-stores-qdrant [0.9.2]

- fix(qdrant): prevent alpha=0.0 from incorrectly falling back to 0.5 ([#20880](https://github.com/run-llama/llama_index/pull/20880))

### llama-index-vector-stores-weaviate [1.5.0]

- fix: coerce Weaviate MetadataFilter values to match collection schema types ([#20730](https://github.com/run-llama/llama_index/pull/20730))

### llama-index-vector-stores-yugabytedb [0.5.5]

- fix(lantern,yugabytedb): remove deprecated sessionmaker.close_all() from close() ([#20884](https://github.com/run-llama/llama_index/pull/20884))

## [2026-02-18]

### llama-index-agent-agentmesh [0.1.0]

- [Integration] AgentMesh: Trust Layer for LlamaIndex Agents ([#20644](https://github.com/run-llama/llama_index/pull/20644))

### llama-index-core [0.14.15]

- Support basic operations for multimodal types ([#20640](https://github.com/run-llama/llama_index/pull/20640))
- Feat recursive llm type support ([#20642](https://github.com/run-llama/llama_index/pull/20642))
- fix: remove redundant metadata_seperator field from TextNode ([#20649](https://github.com/run-llama/llama_index/pull/20649))
- fix(tests): update mock prompt type in mock_prompts.py ([#20661](https://github.com/run-llama/llama_index/pull/20661))
- Feat multimodal template var formatting ([#20682](https://github.com/run-llama/llama_index/pull/20682))
- Feat multimodal prompt templates ([#20683](https://github.com/run-llama/llama_index/pull/20683))
- Feat multimodal chat prompt helper ([#20684](https://github.com/run-llama/llama_index/pull/20684))
- Add retry and error handling to BaseExtractor ([#20693](https://github.com/run-llama/llama_index/pull/20693))
- ensure at least one message/content block is returned by the old memory ([#20729](https://github.com/run-llama/llama_index/pull/20729))

### llama-index-embeddings-ibm [0.6.0.post1]

- chore: Remove persistent_connection parameter support, update ([#20714](https://github.com/run-llama/llama_index/pull/20714))
- docs: Update IBM docs ([#20718](https://github.com/run-llama/llama_index/pull/20718))

### llama-index-llms-anthropic [0.10.9]

- Sonnet 4-6 addition ([#20723](https://github.com/run-llama/llama_index/pull/20723))

### llama-index-llms-bedrock-converse [0.12.10]

- fix(bedrock-converse): ensure thinking_delta is populated in all chat modes ([#20664](https://github.com/run-llama/llama_index/pull/20664))
- feat(bedrock-converse): Add support for Claude Sonnet 4.6 ([#20726](https://github.com/run-llama/llama_index/pull/20726))

### llama-index-llms-ibm [0.7.0.post1]

- chore: Remove persistent_connection parameter support, update ([#20714](https://github.com/run-llama/llama_index/pull/20714))
- docs: Update IBM docs ([#20718](https://github.com/run-llama/llama_index/pull/20718))

### llama-index-llms-mistralai [0.10.0]

- Rrubini/mistral azure sdk ([#20668](https://github.com/run-llama/llama_index/pull/20668))

### llama-index-llms-oci-data-science [1.0.0]

- Add support for new OCI DataScience endpoint /predictWithStream for streaming use case ([#20545](https://github.com/run-llama/llama_index/pull/20545))

### llama-index-observability-otel [0.3.0]

- improve otel data serialization by flattening dicts ([#20719](https://github.com/run-llama/llama_index/pull/20719))
- feat: support custom span processor; refactor: use llama-index-instrumentation instead of llama-index-core ([#20732](https://github.com/run-llama/llama_index/pull/20732))

### llama-index-program-evaporate [0.5.2]

- Sandbox LLM-generated code execution in EvaporateExtractor ([#20676](https://github.com/run-llama/llama_index/pull/20676))

### llama-index-readers-bitbucket [0.4.2]

- fix: replace mutable default argument in load_all_file_paths ([#20698](https://github.com/run-llama/llama_index/pull/20698))

### llama-index-readers-github [0.10.0]

- feat: Enhance GitHubRepoReader with selective file fetching and deduplication (Issue #20471) ([#20550](https://github.com/run-llama/llama_index/pull/20550))

### llama-index-readers-layoutir [0.1.1]

- feat: Add LayoutIR reader integration ([#20708](https://github.com/run-llama/llama_index/pull/20708))
- fix(layoutir): hotfix for output_dir crash and Block extraction (#20708 follow-up) ([#20715](https://github.com/run-llama/llama_index/pull/20715))
- fix(layoutir): restrict requires-python to >=3.12 to match layoutir dependency ([#20733](https://github.com/run-llama/llama_index/pull/20733))

### llama-index-readers-microsoft-sharepoint [0.8.0]

- Add pagination support for Microsoft Graph API calls in SharePoint reader ([#20704](https://github.com/run-llama/llama_index/pull/20704))

### llama-index-readers-whatsapp [0.4.2]

- fix: Update WhatsAppChatLoader to retrieve DataFrame in pandas format ([#20722](https://github.com/run-llama/llama_index/pull/20722))

### llama-index-tools-mcp [0.4.7]

- feat: propagate partial_params to get_tools_from_mcp utils ([#20669](https://github.com/run-llama/llama_index/pull/20669))

### llama-index-vector-stores-faiss [0.5.3]

- Replace eval() with json.loads in FaissMapVectorStore persistence ([#20675](https://github.com/run-llama/llama_index/pull/20675))

### llama-index-vector-stores-milvus [1.0.0]

- Fix: remove ORM Collection mix-usage with MilvusClient in Milvus vector store ([#20687](https://github.com/run-llama/llama_index/pull/20687))

## [2026-02-18]

### llama-index-agent-agentmesh [0.1.0]

- [Integration] AgentMesh: Trust Layer for LlamaIndex Agents ([#20644](https://github.com/run-llama/llama_index/pull/20644))

### llama-index-core [0.14.15]

- Support basic operations for multimodal types ([#20640](https://github.com/run-llama/llama_index/pull/20640))
- Feat recursive llm type support ([#20642](https://github.com/run-llama/llama_index/pull/20642))
- fix: remove redundant metadata_seperator field from TextNode ([#20649](https://github.com/run-llama/llama_index/pull/20649))
- fix(tests): update mock prompt type in mock_prompts.py ([#20661](https://github.com/run-llama/llama_index/pull/20661))
- Feat multimodal template var formatting ([#20682](https://github.com/run-llama/llama_index/pull/20682))
- Feat multimodal prompt templates ([#20683](https://github.com/run-llama/llama_index/pull/20683))
- Feat multimodal chat prompt helper ([#20684](https://github.com/run-llama/llama_index/pull/20684))
- Add retry and error handling to BaseExtractor ([#20693](https://github.com/run-llama/llama_index/pull/20693))
- ensure at least one message/content block is returned by the old memory ([#20729](https://github.com/run-llama/llama_index/pull/20729))

### llama-index-embeddings-ibm [0.6.0.post1]

- chore: Remove persistent_connection parameter support, update ([#20714](https://github.com/run-llama/llama_index/pull/20714))
- docs: Update IBM docs ([#20718](https://github.com/run-llama/llama_index/pull/20718))

### llama-index-llms-anthropic [0.10.9]

- Sonnet 4-6 addition ([#20723](https://github.com/run-llama/llama_index/pull/20723))

### llama-index-llms-bedrock-converse [0.12.10]

- fix(bedrock-converse): ensure thinking_delta is populated in all chat modes ([#20664](https://github.com/run-llama/llama_index/pull/20664))
- feat(bedrock-converse): Add support for Claude Sonnet 4.6 ([#20726](https://github.com/run-llama/llama_index/pull/20726))

### llama-index-llms-ibm [0.7.0.post1]

- chore: Remove persistent_connection parameter support, update ([#20714](https://github.com/run-llama/llama_index/pull/20714))
- docs: Update IBM docs ([#20718](https://github.com/run-llama/llama_index/pull/20718))

### llama-index-llms-mistralai [0.10.0]

- Rrubini/mistral azure sdk ([#20668](https://github.com/run-llama/llama_index/pull/20668))

### llama-index-llms-oci-data-science [1.0.0]

- Add support for new OCI DataScience endpoint /predictWithStream for streaming use case ([#20545](https://github.com/run-llama/llama_index/pull/20545))

### llama-index-observability-otel [0.3.0]

- improve otel data serialization by flattening dicts ([#20719](https://github.com/run-llama/llama_index/pull/20719))
- feat: support custom span processor; refactor: use llama-index-instrumentation instead of llama-index-core ([#20732](https://github.com/run-llama/llama_index/pull/20732))

### llama-index-program-evaporate [0.5.2]

- Sandbox LLM-generated code execution in EvaporateExtractor ([#20676](https://github.com/run-llama/llama_index/pull/20676))

### llama-index-readers-bitbucket [0.4.2]

- fix: replace mutable default argument in load_all_file_paths ([#20698](https://github.com/run-llama/llama_index/pull/20698))

### llama-index-readers-github [0.10.0]

- feat: Enhance GitHubRepoReader with selective file fetching and deduplication (Issue #20471) ([#20550](https://github.com/run-llama/llama_index/pull/20550))

### llama-index-readers-layoutir [0.1.1]

- feat: Add LayoutIR reader integration ([#20708](https://github.com/run-llama/llama_index/pull/20708))
- fix(layoutir): hotfix for output_dir crash and Block extraction (#20708 follow-up) ([#20715](https://github.com/run-llama/llama_index/pull/20715))
- fix(layoutir): restrict requires-python to >=3.12 to match layoutir dependency ([#20733](https://github.com/run-llama/llama_index/pull/20733))

### llama-index-readers-microsoft-sharepoint [0.8.0]

- Add pagination support for Microsoft Graph API calls in SharePoint reader ([#20704](https://github.com/run-llama/llama_index/pull/20704))

### llama-index-readers-whatsapp [0.4.2]

- fix: Update WhatsAppChatLoader to retrieve DataFrame in pandas format ([#20722](https://github.com/run-llama/llama_index/pull/20722))

### llama-index-tools-mcp [0.4.7]

- feat: propagate partial_params to get_tools_from_mcp utils ([#20669](https://github.com/run-llama/llama_index/pull/20669))

### llama-index-vector-stores-faiss [0.5.3]

- Replace eval() with json.loads in FaissMapVectorStore persistence ([#20675](https://github.com/run-llama/llama_index/pull/20675))

### llama-index-vector-stores-milvus [1.0.0]

- Fix: remove ORM Collection mix-usage with MilvusClient in Milvus vector store ([#20687](https://github.com/run-llama/llama_index/pull/20687))

## [2026-02-10]

### llama-index-callbacks-wandb [0.4.2]

- Fix potential crashes and improve security defaults in core components ([#20610](https://github.com/run-llama/llama_index/pull/20610))

### llama-index-core [0.14.14]

- fix: catch pydantic ValidationError in VectorStoreQueryOutputParser ([#20450](https://github.com/run-llama/llama_index/pull/20450))
- fix: distinguish empty string from None in MediaResource.hash ([#20451](https://github.com/run-llama/llama_index/pull/20451))
- Langchain1.x support ([#20472](https://github.com/run-llama/llama_index/pull/20472))
- Fix DeprecationWarning: 'asyncio.iscoroutinefunction' is deprecated ([#20517](https://github.com/run-llama/llama_index/pull/20517))
- fix(core): fallback to bundled nltk cache if env var missing ([#20528](https://github.com/run-llama/llama_index/pull/20528))
- feat(callbacks): add TokenBudgetHandler for cost governance ([#20546](https://github.com/run-llama/llama_index/pull/20546))
- fix(core):handled a edge case in truncate_text function ([#20551](https://github.com/run-llama/llama_index/pull/20551))
- fix(core):fix in types Thread passing None when target is None instead of copy_context().run ([#20553](https://github.com/run-llama/llama_index/pull/20553))
- chore: bump llama-index lockfile, and minor test tweaks ([#20556](https://github.com/run-llama/llama_index/pull/20556))
- Compatibility for workflows context changes ([#20557](https://github.com/run-llama/llama_index/pull/20557))
- test(core): fix cache dir path test for Windows compatibility ([#20566](https://github.com/run-llama/llama_index/pull/20566))
- fix(tests): enforce utf-8 encoding in json reader tests for windows compatibility ([#20576](https://github.com/run-llama/llama_index/pull/20576))
- Fix BM25Retriever mapping in upgrade tool / 修复升级工具中的 BM25Retriever 映射 ([#20582](https://github.com/run-llama/llama_index/pull/20582))
- fix(agent): handle empty LLM responses with retry logic and add test cases ([#20596](https://github.com/run-llama/llama_index/pull/20596))
- fix: add show_progress parameter to run_transformations to prevent unexpected keyword argument error ([#20608](https://github.com/run-llama/llama_index/pull/20608))
- Fix potential crashes and improve security defaults in core components ([#20610](https://github.com/run-llama/llama_index/pull/20610))
- Add core 3.14 tests ([#20619](https://github.com/run-llama/llama_index/pull/20619))

### llama-index-embeddings-cohere [0.7.0]

- fix(embeddings-cohere): add retry logic with tenacity ([#20592](https://github.com/run-llama/llama_index/pull/20592))

### llama-index-embeddings-google-genai [0.3.2]

- Add client headers to Gemini API requests ([#20519](https://github.com/run-llama/llama_index/pull/20519))

### llama-index-embeddings-siliconflow [0.3.2]

- Fix DeprecationWarning: 'asyncio.iscoroutinefunction' is deprecated ([#20517](https://github.com/run-llama/llama_index/pull/20517))

### llama-index-embeddings-upstage [0.5.1]

- chore(deps): bump the uv group across 4 directories with 4 updates ([#20531](https://github.com/run-llama/llama_index/pull/20531))

### llama-index-graph-stores-falkordb [0.4.2]

- fix(falkordb): Fix MENTIONS relationship creation with triplet_source_id ([#20650](https://github.com/run-llama/llama_index/pull/20650))

### llama-index-llms-anthropic [0.10.8]

- chore: Update cacheable Anthropic models ([#20581](https://github.com/run-llama/llama_index/pull/20581))
- chore: add support for opus 4.6 ([#20635](https://github.com/run-llama/llama_index/pull/20635))

### llama-index-llms-bedrock-converse [0.12.8]

- fix bedrock converse empty tool config issue ([#20571](https://github.com/run-llama/llama_index/pull/20571))
- fix(llms-bedrock-converse): improve bedrock converse retry handling ([#20590](https://github.com/run-llama/llama_index/pull/20590))
- feat(bedrock-converse): Add support for Claude Opus 4.6 ([#20637](https://github.com/run-llama/llama_index/pull/20637))
- Add support for adaptive thinking in Bedrock ([#20659](https://github.com/run-llama/llama_index/pull/20659))
- chore(deps): bump the pip group across 2 directories with 7 updates ([#20662](https://github.com/run-llama/llama_index/pull/20662))

### llama-index-llms-cohere [0.7.1]

- Feat: add custom base_url support to Cohere LLM ([#20534](https://github.com/run-llama/llama_index/pull/20534))
- fix(llms-cohere): handle additional error types in retry logic ([#20591](https://github.com/run-llama/llama_index/pull/20591))

### llama-index-llms-dashscope [0.5.2]

- fix(dashscope): remove empty tool_calls from assistant messages ([#20535](https://github.com/run-llama/llama_index/pull/20535))

### llama-index-llms-google-genai [0.8.7]

- Add client headers to Gemini API requests ([#20519](https://github.com/run-llama/llama_index/pull/20519))
- fix(decorator):adds logic to llm_retry_decorator for async methods. ([#20588](https://github.com/run-llama/llama_index/pull/20588))
- Fix/google genai cleanup ([#20607](https://github.com/run-llama/llama_index/pull/20607))
- fix(google-genai): skip model meta fetch when not needed ([#20639](https://github.com/run-llama/llama_index/pull/20639))

### llama-index-llms-huggingface-api [0.6.2]

- Update sensible default provider for huggingface inference api ([#20589](https://github.com/run-llama/llama_index/pull/20589))

### llama-index-llms-langchain [0.7.1]

- Langchain1.x support ([#20472](https://github.com/run-llama/llama_index/pull/20472))

### llama-index-llms-openai [0.6.18]

- OpenAI response fix ([#20538](https://github.com/run-llama/llama_index/pull/20538))
- feat: Add support for gpt-5.2-chat model ([#20549](https://github.com/run-llama/llama_index/pull/20549))
- fix(openai): make image_url detail optional in message dict ([#20609](https://github.com/run-llama/llama_index/pull/20609))
- Add new reasoning types ([#20612](https://github.com/run-llama/llama_index/pull/20612))
- fix(openai): exclude unsupported params for all reasoning models ([#20627](https://github.com/run-llama/llama_index/pull/20627))

### llama-index-llms-openai-like [0.6.0]

- make transformers an optional dependency for openai-like ([#20580](https://github.com/run-llama/llama_index/pull/20580))

### llama-index-llms-openrouter [0.4.4]

- make transformers an optional dependency for openai-like ([#20580](https://github.com/run-llama/llama_index/pull/20580))

### llama-index-llms-siliconflow [0.4.3]

- Fix DeprecationWarning: 'asyncio.iscoroutinefunction' is deprecated ([#20517](https://github.com/run-llama/llama_index/pull/20517))

### llama-index-llms-upstage [0.7.0]

- add new upstage model(solar-pro3) ([#20544](https://github.com/run-llama/llama_index/pull/20544))

### llama-index-llms-vllm [0.6.2]

- feat: add openai-like server mode for VllmServer ([#20537](https://github.com/run-llama/llama_index/pull/20537))

### llama-index-memory-bedrock-agentcore [0.1.2]

- Add event and memory record deletion methods in bedrock-agentcorememory ([#20428](https://github.com/run-llama/llama_index/pull/20428))
- chore(deps): update llama-index-core dependency lock to include 0.14.x ([#20483](https://github.com/run-llama/llama_index/pull/20483))

### llama-index-memory-mem0 [1.0.0]

- fix: mem0 integration cleanup + refactor ([#20532](https://github.com/run-llama/llama_index/pull/20532))

### llama-index-node-parser-chonkie [0.1.1]

- feat: add chonkie integration ([#20622](https://github.com/run-llama/llama_index/pull/20622))
- update readme ([#20656](https://github.com/run-llama/llama_index/pull/20656))

### llama-index-node-parser-docling [0.4.2]

- fix: catch pydantic ValidationError in VectorStoreQueryOutputParser ([#20450](https://github.com/run-llama/llama_index/pull/20450))

### llama-index-packs-code-hierarchy [0.6.1]

- chore(deps): bump the uv group across 12 directories with 14 updates ([#20578](https://github.com/run-llama/llama_index/pull/20578))

### llama-index-packs-gmail-openai-agent [0.4.1]

- chore(deps): bump the uv group across 12 directories with 14 updates ([#20578](https://github.com/run-llama/llama_index/pull/20578))

### llama-index-packs-multidoc-autoretrieval [0.4.1]

- chore(deps): bump the uv group across 12 directories with 14 updates ([#20578](https://github.com/run-llama/llama_index/pull/20578))

### llama-index-packs-panel-chatbot [0.4.1]

- chore(deps): bump the uv group across 12 directories with 14 updates ([#20578](https://github.com/run-llama/llama_index/pull/20578))

### llama-index-packs-recursive-retriever [0.7.1]

- chore(deps): bump the uv group across 12 directories with 14 updates ([#20578](https://github.com/run-llama/llama_index/pull/20578))
- chore(deps): bump the pip group across 2 directories with 7 updates ([#20662](https://github.com/run-llama/llama_index/pull/20662))

### llama-index-packs-resume-screener [0.9.3]

- chore(deps): bump the uv group across 12 directories with 14 updates ([#20578](https://github.com/run-llama/llama_index/pull/20578))

### llama-index-packs-retry-engine-weaviate [0.5.1]

- chore(deps): bump the uv group across 12 directories with 14 updates ([#20578](https://github.com/run-llama/llama_index/pull/20578))

### llama-index-packs-streamlit-chatbot [0.5.2]

- chore(deps): bump the uv group across 12 directories with 14 updates ([#20578](https://github.com/run-llama/llama_index/pull/20578))

### llama-index-packs-sub-question-weaviate [0.4.1]

- chore(deps): bump the uv group across 12 directories with 14 updates ([#20578](https://github.com/run-llama/llama_index/pull/20578))

### llama-index-packs-timescale-vector-autoretrieval [0.4.1]

- chore(deps): bump the uv group across 12 directories with 14 updates ([#20578](https://github.com/run-llama/llama_index/pull/20578))

### llama-index-postprocessor-cohere-rerank [0.6.0]

- fix(cohere-rerank): add retry logic and tenacity dependency to cohere rerank ([#20593](https://github.com/run-llama/llama_index/pull/20593))

### llama-index-postprocessor-nvidia-rerank [0.5.4]

- fix(nvidia-rerank): fix initialization logic for on-prem auth ([#20560](https://github.com/run-llama/llama_index/pull/20560))
- fix(nvidia-rerank): correct private attribute reference ([#20570](https://github.com/run-llama/llama_index/pull/20570))
- fix(nvidia-rerank): Fix POST request url for locally hosted NIM rerankers ([#20579](https://github.com/run-llama/llama_index/pull/20579))

### llama-index-postprocessor-tei-rerank [0.4.2]

- fix(tei-rerank): use index field from API response for correct score … ([#20599](https://github.com/run-llama/llama_index/pull/20599))
- test(tei-rerank): add test coverage for rerank retry coverage ([#20600](https://github.com/run-llama/llama_index/pull/20600))

### llama-index-protocols-ag-ui [0.2.4]

- fix: avoid ValueError in ag-ui message conversion for multi-block ChatMessages ([#20648](https://github.com/run-llama/llama_index/pull/20648))

### llama-index-readers-datasets [0.1.0]

- chore(deps): bump the uv group across 4 directories with 4 updates ([#20531](https://github.com/run-llama/llama_index/pull/20531))

### llama-index-readers-microsoft-sharepoint [0.7.0]

- Sharepoint page support events ([#20572](https://github.com/run-llama/llama_index/pull/20572))

### llama-index-readers-obsidian [0.6.1]

- Langchain1.x support ([#20472](https://github.com/run-llama/llama_index/pull/20472))

### llama-index-readers-service-now [0.2.2]

- chore(deps): bump the pip group across 2 directories with 7 updates ([#20662](https://github.com/run-llama/llama_index/pull/20662))

### llama-index-tools-mcp [0.4.6]

- feat: implement partial_params support to McpToolSpec ([#20554](https://github.com/run-llama/llama_index/pull/20554))

### llama-index-tools-mcp-discovery [0.1.0]

- Add llama-index-tools-mcp-discovery integration ([#20502](https://github.com/run-llama/llama_index/pull/20502))

### llama-index-tools-moss [0.1.0]

- feat(tools): add Moss search engine integration ([#20615](https://github.com/run-llama/llama_index/pull/20615))

### llama-index-tools-seltz [0.1.0]

- feat(tools): add Seltz web knowledge tool integration ([#20626](https://github.com/run-llama/llama_index/pull/20626))

### llama-index-tools-typecast [0.1.0]

- Migrate Typecast tool to V2 API for voices endpoints ([#20548](https://github.com/run-llama/llama_index/pull/20548))

### llama-index-tools-wolfram-alpha [0.5.0]

- feat(wolfram-alpha): switch to LLM API with bearer auth ([#20586](https://github.com/run-llama/llama_index/pull/20586))

### llama-index-vector-stores-clickhouse [0.6.2]

- fix(clickhouse): Add drop_existing_table parameter to prevent data loss ([#20651](https://github.com/run-llama/llama_index/pull/20651))

### llama-index-vector-stores-milvus [0.9.6]

- chore(deps): bump the uv group across 4 directories with 4 updates ([#20531](https://github.com/run-llama/llama_index/pull/20531))

### llama-index-vector-stores-mongodb [0.9.1]

- Update MongoDB vector store tests to use newer model ([#20515](https://github.com/run-llama/llama_index/pull/20515))

### llama-index-vector-stores-oceanbase [0.4.0]

- feat(oceanbase): add sparse/fulltext/hybrid search ([#20524](https://github.com/run-llama/llama_index/pull/20524))

### llama-index-vector-stores-opensearch [1.0.0]

- Changed OpenSearch engine default from deprecated `nmslib` to `faiss` ([#20507](https://github.com/run-llama/llama_index/pull/20507))
- chore(deps): bump the uv group across 4 directories with 4 updates ([#20531](https://github.com/run-llama/llama_index/pull/20531))

### llama-index-vector-stores-postgres [0.7.3]

- fix(postgres): disable bitmap scan for vector queries ([#20514](https://github.com/run-llama/llama_index/pull/20514))

### llama-index-vector-stores-yugabytedb [0.5.4]

- Add YugabyteDB as a Vector Store ([#20559](https://github.com/run-llama/llama_index/pull/20559))
- chore(deps): bump the pip group across 2 directories with 7 updates ([#20662](https://github.com/run-llama/llama_index/pull/20662))

### llama-index-voice-agents-gemini-live [0.2.2]

- Add client headers to Gemini API requests ([#20519](https://github.com/run-llama/llama_index/pull/20519))

## [2026-01-21]

### llama-index-core [0.14.13]

- feat: add early_stopping_method parameter to agent workflows ([#20389](https://github.com/run-llama/llama_index/pull/20389))
- feat: Add token-based code splitting support to CodeSplitter ([#20438](https://github.com/run-llama/llama_index/pull/20438))
- Add RayIngestionPipeline integration for distributed data ingestion ([#20443](https://github.com/run-llama/llama_index/pull/20443))
- Added the multi-modal version of the Condensed Conversation & Context… ([#20446](https://github.com/run-llama/llama_index/pull/20446))
- Replace ChatMemoryBuffer with Memory ([#20458](https://github.com/run-llama/llama_index/pull/20458))
- fix(bug):Raise value error on when input is empty list in mean_agg instead of returning float ([#20466](https://github.com/run-llama/llama_index/pull/20466))
- fix: The classmethod of ReActChatFormatter should use cls instead of the class name ([#20475](https://github.com/run-llama/llama_index/pull/20475))
- feat: add configurable empty response message to synthesizers ([#20503](https://github.com/run-llama/llama_index/pull/20503))

### llama-index-embeddings-bedrock [0.7.3]

- Enable use of ARNs for Bedrock Embedding Models ([#20435](https://github.com/run-llama/llama_index/pull/20435))

### llama-index-embeddings-ollama [0.8.6]

- Improved Ollama batch embedding ([#20447](https://github.com/run-llama/llama_index/pull/20447))

### llama-index-embeddings-voyageai [0.5.3]

- Adding voyage-4 models ([#20497](https://github.com/run-llama/llama_index/pull/20497))

### llama-index-ingestion-ray [0.1.0]

- Add RayIngestionPipeline integration for distributed data ingestion ([#20443](https://github.com/run-llama/llama_index/pull/20443))

### llama-index-llms-anthropic [0.10.6]

- feat: enhance structured predict methods for anthropic ([#20440](https://github.com/run-llama/llama_index/pull/20440))
- fix: preserve input_tokens in Anthropic stream_chat responses ([#20512](https://github.com/run-llama/llama_index/pull/20512))

### llama-index-llms-apertis [0.1.0]

- Add Apertis LLM integration with example notebook ([#20436](https://github.com/run-llama/llama_index/pull/20436))

### llama-index-llms-bedrock-converse [0.12.4]

- chore(bedrock-converse): Remove extraneous thinking_delta kwarg from ChatMessage ([#20455](https://github.com/run-llama/llama_index/pull/20455))

### llama-index-llms-gemini [0.6.2]

- chore: deprecate llama-index-llms-gemini ([#20511](https://github.com/run-llama/llama_index/pull/20511))

### llama-index-llms-openai [0.6.13]

- Sanitize OpenAI structured output JSON schema name for generic Pydantic models ([#20452](https://github.com/run-llama/llama_index/pull/20452))
- chore: vbump openai ([#20482](https://github.com/run-llama/llama_index/pull/20482))

### llama-index-llms-openrouter [0.4.3]

- Feature/openrouter provider routing support ([#20431](https://github.com/run-llama/llama_index/pull/20431))

### llama-index-packs-recursive-retriever [0.7.1]

- security: remove exposed OpenAI API keys from notebook outputs ([#20474](https://github.com/run-llama/llama_index/pull/20474))

### llama-index-packs-sentence-window-retriever [0.5.1]

- security: remove exposed OpenAI API keys from notebook outputs ([#20474](https://github.com/run-llama/llama_index/pull/20474))

### llama-index-readers-datasets [0.1.0]

- Add HuggingFace datasets reader integration ([#20468](https://github.com/run-llama/llama_index/pull/20468))

### llama-index-readers-patentsview [1.0.0]

- Patentsview reader api changes ([#20481](https://github.com/run-llama/llama_index/pull/20481))

### llama-index-retrievers-you [1.0.0]

- Revamp YouRetriever integration ([#20493](https://github.com/run-llama/llama_index/pull/20493))

### llama-index-tools-parallel-web-systems [0.1.0]

- feat: added Parallel Web System tools ([#20442](https://github.com/run-llama/llama_index/pull/20442))

### llama-index-vector-stores-alibabacloud-mysql [0.1.0]

- Feature/alibaba mysql vector integration ([#20396](https://github.com/run-llama/llama_index/pull/20396))

### llama-index-vector-stores-milvus [0.9.6]

- Feat milvus partition names ([#20445](https://github.com/run-llama/llama_index/pull/20445))
- improve(llama-index-vector-stores-milvus): Changed the partition parameter to `milvus_partition_name` in add/delete. ([#20460](https://github.com/run-llama/llama_index/pull/20460))

### llama-index-vector-stores-mongodb [0.9.1]

- INTPYTHON-863 Fix mongodb async integration ([#20444](https://github.com/run-llama/llama_index/pull/20444))

### llama-index-vector-stores-neo4jvector [0.5.2]

- Handle missing metadata for neo4j vector store ([#20491](https://github.com/run-llama/llama_index/pull/20491))

### llama-index-vector-stores-opensearch [0.6.3]

- fix (opensearch): add close and aclose methods to vector client ([#20463](https://github.com/run-llama/llama_index/pull/20463))

### llama-index-vector-stores-qdrant [0.9.1]

- Qdrant search params ([#20476](https://github.com/run-llama/llama_index/pull/20476))

### llama-index-vector-stores-vertexaivectorsearch [0.3.4]

- feat(vertexaivectorsearch): add hybrid search support ([#20487](https://github.com/run-llama/llama_index/pull/20487))

### llama-index-vector-stores-volcenginemysql [0.2.0]

- feat: Volcengine MySQL vector store integration ([#20404](https://github.com/run-llama/llama_index/pull/20404))

## [2025-12-30]

### llama-index-callbacks-agentops [0.4.1]

- Feat/async tool spec support ([#20338](https://github.com/run-llama/llama_index/pull/20338))

### llama-index-core [0.14.12]

- Feat/async tool spec support ([#20338](https://github.com/run-llama/llama_index/pull/20338))
- Improve `MockFunctionCallingLLM` ([#20356](https://github.com/run-llama/llama_index/pull/20356))
- fix(openai): sanitize generic Pydantic model schema names ([#20371](https://github.com/run-llama/llama_index/pull/20371))
- Element node parser ([#20399](https://github.com/run-llama/llama_index/pull/20399))
- improve llama dev logging ([#20411](https://github.com/run-llama/llama_index/pull/20411))
- test(node_parser): add unit tests for Java CodeSplitter ([#20423](https://github.com/run-llama/llama_index/pull/20423))
- fix: crash in log_vector_store_query_result when result.ids is None ([#20427](https://github.com/run-llama/llama_index/pull/20427))

### llama-index-embeddings-litellm [0.4.1]

- Add docstring to LiteLLM embedding class ([#20336](https://github.com/run-llama/llama_index/pull/20336))

### llama-index-embeddings-ollama [0.8.5]

- feat(llama-index-embeddings-ollama): Add keep_alive parameter ([#20395](https://github.com/run-llama/llama_index/pull/20395))
- docs: improve Ollama embeddings README with comprehensive documentation ([#20414](https://github.com/run-llama/llama_index/pull/20414))

### llama-index-embeddings-voyageai [0.5.2]

- Voyage multimodal 35 ([#20398](https://github.com/run-llama/llama_index/pull/20398))

### llama-index-graph-stores-nebula [0.5.1]

- feat(nebula): add MENTIONS edge to property graph store ([#20401](https://github.com/run-llama/llama_index/pull/20401))

### llama-index-llms-aibadgr [0.1.0]

- feat(llama-index-llms-aibadgr): Add AI Badgr OpenAI‑compatible LLM integration ([#20365](https://github.com/run-llama/llama_index/pull/20365))

### llama-index-llms-anthropic [0.10.4]

- add back haiku-3 support ([#20408](https://github.com/run-llama/llama_index/pull/20408))

### llama-index-llms-bedrock-converse [0.12.3]

- fix: bedrock converse thinking block issue ([#20355](https://github.com/run-llama/llama_index/pull/20355))

### llama-index-llms-google-genai [0.8.3]

- Switch use_file_api to Flexible file_mode; Improve File Upload Handling & Bump google-genai to v1.52.0 ([#20347](https://github.com/run-llama/llama_index/pull/20347))
- Fix missing role from Google-GenAI ([#20357](https://github.com/run-llama/llama_index/pull/20357))
- Add signature index fix ([#20362](https://github.com/run-llama/llama_index/pull/20362))
- Add positional thought signature for thoughts ([#20418](https://github.com/run-llama/llama_index/pull/20418))

### llama-index-llms-ollama [0.9.1]

- feature: pydantic no longer complains if you pass 'low', 'medium', 'h… ([#20394](https://github.com/run-llama/llama_index/pull/20394))

### llama-index-llms-openai [0.6.12]

- fix: Handle tools=None in OpenAIResponses.\_get_model_kwargs ([#20358](https://github.com/run-llama/llama_index/pull/20358))
- feat: add support for gpt-5.2 and 5.2 pro ([#20361](https://github.com/run-llama/llama_index/pull/20361))

### llama-index-readers-confluence [0.6.1]

- fix(confluence): support Python 3.14 ([#20370](https://github.com/run-llama/llama_index/pull/20370))

### llama-index-readers-file [0.5.6]

- Loosen constraint on `pandas` version ([#20387](https://github.com/run-llama/llama_index/pull/20387))

### llama-index-readers-service-now [0.2.2]

- chore(deps): bump urllib3 from 2.5.0 to 2.6.0 in /llama-index-integrations/readers/llama-index-readers-service-now in the pip group across 1 directory ([#20341](https://github.com/run-llama/llama_index/pull/20341))

### llama-index-tools-mcp [0.4.5]

- fix: pass timeout parameters to transport clients in BasicMCPClient ([#20340](https://github.com/run-llama/llama_index/pull/20340))
- feature: Permit to pass a custom httpx.AsyncClient when creating a BasicMcpClient ([#20368](https://github.com/run-llama/llama_index/pull/20368))

### llama-index-tools-typecast [0.1.0]

- feat: add Typecast tool integration with text to speech features ([#20343](https://github.com/run-llama/llama_index/pull/20343))

### llama-index-vector-stores-azurepostgresql [0.2.0]

- Feat/async tool spec support ([#20338](https://github.com/run-llama/llama_index/pull/20338))

### llama-index-vector-stores-chroma [0.5.5]

- Fix chroma nested metadata filters ([#20424](https://github.com/run-llama/llama_index/pull/20424))
- fix(chroma): support multimodal results ([#20426](https://github.com/run-llama/llama_index/pull/20426))

### llama-index-vector-stores-couchbase [0.6.0]

- Update FTS & GSI reference docs for Couchbase vector-store ([#20346](https://github.com/run-llama/llama_index/pull/20346))

### llama-index-vector-stores-faiss [0.5.2]

- fix(faiss): pass numpy array instead of int to add_with_ids ([#20384](https://github.com/run-llama/llama_index/pull/20384))

### llama-index-vector-stores-lancedb [0.4.4]

- Feat/async tool spec support ([#20338](https://github.com/run-llama/llama_index/pull/20338))
- fix(vector_stores/lancedb): add missing '<' filter operator ([#20364](https://github.com/run-llama/llama_index/pull/20364))
- fix(lancedb): fix metadata filtering logic and list value SQL generation ([#20374](https://github.com/run-llama/llama_index/pull/20374))

### llama-index-vector-stores-mongodb [0.9.0]

- Update mongo vector store to initialize without list permissions ([#20354](https://github.com/run-llama/llama_index/pull/20354))
- add mongodb delete index ([#20429](https://github.com/run-llama/llama_index/pull/20429))
- async mongodb atlas support ([#20430](https://github.com/run-llama/llama_index/pull/20430))

### llama-index-vector-stores-redis [0.6.2]

- Redis metadata filter fix ([#20359](https://github.com/run-llama/llama_index/pull/20359))

### llama-index-vector-stores-vertexaivectorsearch [0.3.3]

- feat(vertex-vector-search): Add Google Vertex AI Vector Search v2.0 support ([#20351](https://github.com/run-llama/llama_index/pull/20351))

## [2025-12-04]

### llama-index-core [0.14.10]

- feat: add mock function calling llm ([#20331](https://github.com/run-llama/llama_index/pull/20331))

### llama-index-llms-qianfan [0.4.1]

- test: fix typo 'reponse' to 'response' in variable names ([#20329](https://github.com/run-llama/llama_index/pull/20329))

### llama-index-tools-airweave [0.1.0]

- feat: add Airweave tool integration with advanced search features ([#20111](https://github.com/run-llama/llama_index/pull/20111))

### llama-index-utils-qianfan [0.4.1]

- test: fix typo 'reponse' to 'response' in variable names ([#20329](https://github.com/run-llama/llama_index/pull/20329))

## [2025-12-02]

### llama-index-agent-azure [0.2.1]

- fix: Pin azure-ai-projects version to prevent breaking changes ([#20255](https://github.com/run-llama/llama_index/pull/20255))

### llama-index-core [0.14.9]

- MultiModalVectorStoreIndex now returns a multi-modal ContextChatEngine. ([#20265](https://github.com/run-llama/llama_index/pull/20265))
- Ingestion to vector store now ensures that \_node-content is readable ([#20266](https://github.com/run-llama/llama_index/pull/20266))
- fix: ensure context is copied with async utils run_async ([#20286](https://github.com/run-llama/llama_index/pull/20286))
- fix(memory): ensure first message in queue is always a user message after flush ([#20310](https://github.com/run-llama/llama_index/pull/20310))

### llama-index-embeddings-bedrock [0.7.2]

- feat(embeddings-bedrock): Add support for Amazon Bedrock Application Inference Profiles ([#20267](https://github.com/run-llama/llama_index/pull/20267))
- fix:(embeddings-bedrock) correct extraction of provider from model_name ([#20295](https://github.com/run-llama/llama_index/pull/20295))
- Bump version of bedrock-embedding ([#20304](https://github.com/run-llama/llama_index/pull/20304))

### llama-index-embeddings-voyageai [0.5.1]

- VoyageAI correction and documentation ([#20251](https://github.com/run-llama/llama_index/pull/20251))

### llama-index-llms-anthropic [0.10.3]

- feat: add anthropic opus 4.5 ([#20306](https://github.com/run-llama/llama_index/pull/20306))

### llama-index-llms-bedrock-converse [0.12.2]

- fix(bedrock-converse): Only use guardrail_stream_processing_mode in streaming functions ([#20289](https://github.com/run-llama/llama_index/pull/20289))
- feat: add anthropic opus 4.5 ([#20306](https://github.com/run-llama/llama_index/pull/20306))
- feat(bedrock-converse): Additional support for Claude Opus 4.5 ([#20317](https://github.com/run-llama/llama_index/pull/20317))

### llama-index-llms-google-genai [0.7.4]

- Fix gemini-3 support and gemini function call support ([#20315](https://github.com/run-llama/llama_index/pull/20315))

### llama-index-llms-helicone [0.1.1]

- update helicone docs + examples ([#20208](https://github.com/run-llama/llama_index/pull/20208))

### llama-index-llms-openai [0.6.10]

- Smallest Nit ([#20252](https://github.com/run-llama/llama_index/pull/20252))
- Feat: Add gpt-5.1-chat model support ([#20311](https://github.com/run-llama/llama_index/pull/20311))

### llama-index-llms-ovhcloud [0.1.0]

- Add OVHcloud AI Endpoints provider ([#20288](https://github.com/run-llama/llama_index/pull/20288))

### llama-index-llms-siliconflow [0.4.2]

- [Bugfix] None check on content in delta in siliconflow LLM ([#20327](https://github.com/run-llama/llama_index/pull/20327))

### llama-index-node-parser-docling [0.4.2]

- Relax docling Python constraints ([#20322](https://github.com/run-llama/llama_index/pull/20322))

### llama-index-packs-resume-screener [0.9.3]

- feat: Update pypdf to latest version ([#20285](https://github.com/run-llama/llama_index/pull/20285))

### llama-index-postprocessor-voyageai-rerank [0.4.1]

- VoyageAI correction and documentation ([#20251](https://github.com/run-llama/llama_index/pull/20251))

### llama-index-protocols-ag-ui [0.2.3]

- fix: correct order of ag-ui events to avoid event conflicts ([#20296](https://github.com/run-llama/llama_index/pull/20296))

### llama-index-readers-confluence [0.6.0]

- Refactor Confluence integration: Update license to MIT, remove requirements.txt, and implement HtmlTextParser for HTML to Markdown conversion. Update dependencies and tests accordingly. ([#20262](https://github.com/run-llama/llama_index/pull/20262))

### llama-index-readers-docling [0.4.2]

- Relax docling Python constraints ([#20322](https://github.com/run-llama/llama_index/pull/20322))

### llama-index-readers-file [0.5.5]

- feat: Update pypdf to latest version ([#20285](https://github.com/run-llama/llama_index/pull/20285))

### llama-index-readers-reddit [0.4.1]

- Fix typo in README.md for Reddit integration ([#20283](https://github.com/run-llama/llama_index/pull/20283))

### llama-index-storage-chat-store-postgres [0.3.2]

- [FIX] Postgres ChatStore automatically prefix table name with "data\_" ([#20241](https://github.com/run-llama/llama_index/pull/20241))

### llama-index-vector-stores-azureaisearch [0.4.4]

- `vector-azureaisearch`: check if user agent already in policy before add it to azure client ([#20243](https://github.com/run-llama/llama_index/pull/20243))
- fix(azureaisearch): Add close/aclose methods to fix unclosed client session warnings ([#20309](https://github.com/run-llama/llama_index/pull/20309))

### llama-index-vector-stores-milvus [0.9.4]

- Fix/consistency level param for milvus ([#20268](https://github.com/run-llama/llama_index/pull/20268))

### llama-index-vector-stores-postgres [0.7.2]

- Fix postgresql dispose ([#20312](https://github.com/run-llama/llama_index/pull/20312))

### llama-index-vector-stores-qdrant [0.9.0]

- fix: Update qdrant-client version constraints ([#20280](https://github.com/run-llama/llama_index/pull/20280))
- Feat: update Qdrant client to 1.16.0 ([#20287](https://github.com/run-llama/llama_index/pull/20287))

### llama-index-vector-stores-vertexaivectorsearch [0.3.2]

- fix: update blob path in batch_update_index ([#20281](https://github.com/run-llama/llama_index/pull/20281))

### llama-index-voice-agents-openai [0.2.2]

- Smallest Nit ([#20252](https://github.com/run-llama/llama_index/pull/20252))

## [2025-11-10]

### llama-index-core [0.14.8]

- Fix ReActOutputParser getting stuck when "Answer:" contains "Action:" ([#20098](https://github.com/run-llama/llama_index/pull/20098))
- Add buffer to image, audio, video and document blocks ([#20153](https://github.com/run-llama/llama_index/pull/20153))
- fix(agent): Handle multi-block ChatMessage in ReActAgent ([#20196](https://github.com/run-llama/llama_index/pull/20196))
- Fix/20209 ([#20214](https://github.com/run-llama/llama_index/pull/20214))
- Preserve Exception in ToolOutput ([#20231](https://github.com/run-llama/llama_index/pull/20231))
- fix weird pydantic warning ([#20235](https://github.com/run-llama/llama_index/pull/20235))

### llama-index-embeddings-nvidia [0.4.2]

- docs: Edit pass and update example model ([#20198](https://github.com/run-llama/llama_index/pull/20198))

### llama-index-embeddings-ollama [0.8.4]

- Added a test case (no code) to check the embedding through an actual connection to a Ollama server (after checking that the ollama server exists) ([#20230](https://github.com/run-llama/llama_index/pull/20230))

### llama-index-llms-anthropic [0.10.2]

- feat(llms/anthropic): Add support for RawMessageDeltaEvent in streaming ([#20206](https://github.com/run-llama/llama_index/pull/20206))
- chore: remove unsupported models ([#20211](https://github.com/run-llama/llama_index/pull/20211))

### llama-index-llms-bedrock-converse [0.11.1]

- feat: integrate bedrock converse with tool call block ([#20099](https://github.com/run-llama/llama_index/pull/20099))
- feat: Update model name extraction to include 'jp' region prefix and … ([#20233](https://github.com/run-llama/llama_index/pull/20233))

### llama-index-llms-google-genai [0.7.3]

- feat: google genai integration with tool block ([#20096](https://github.com/run-llama/llama_index/pull/20096))
- fix: non-streaming gemini tool calling ([#20207](https://github.com/run-llama/llama_index/pull/20207))
- Add token usage information in GoogleGenAI chat additional_kwargs ([#20219](https://github.com/run-llama/llama_index/pull/20219))
- bug fix google genai stream_complete ([#20220](https://github.com/run-llama/llama_index/pull/20220))

### llama-index-llms-nvidia [0.4.4]

- docs: Edit pass and code example updates ([#20200](https://github.com/run-llama/llama_index/pull/20200))

### llama-index-llms-openai [0.6.8]

- FixV2: Correct DocumentBlock type for OpenAI from 'input_file' to 'file' ([#20203](https://github.com/run-llama/llama_index/pull/20203))
- OpenAI v2 sdk support ([#20234](https://github.com/run-llama/llama_index/pull/20234))

### llama-index-llms-upstage [0.6.5]

- OpenAI v2 sdk support ([#20234](https://github.com/run-llama/llama_index/pull/20234))

### llama-index-packs-streamlit-chatbot [0.5.2]

- OpenAI v2 sdk support ([#20234](https://github.com/run-llama/llama_index/pull/20234))

### llama-index-packs-voyage-query-engine [0.5.2]

- OpenAI v2 sdk support ([#20234](https://github.com/run-llama/llama_index/pull/20234))

### llama-index-postprocessor-nvidia-rerank [0.5.1]

- docs: Edit pass ([#20199](https://github.com/run-llama/llama_index/pull/20199))

### llama-index-readers-web [0.5.6]

- feat: Add ScrapyWebReader Integration ([#20212](https://github.com/run-llama/llama_index/pull/20212))
- Update Scrapy dependency to 2.13.3 ([#20228](https://github.com/run-llama/llama_index/pull/20228))

### llama-index-readers-whisper [0.3.0]

- OpenAI v2 sdk support ([#20234](https://github.com/run-llama/llama_index/pull/20234))

### llama-index-storage-kvstore-postgres [0.4.3]

- fix: Ensure schema creation only occurs if it doesn't already exist ([#20225](https://github.com/run-llama/llama_index/pull/20225))

### llama-index-tools-brightdata [0.2.1]

- docs: add api key claim instructions ([#20204](https://github.com/run-llama/llama_index/pull/20204))

### llama-index-tools-mcp [0.4.3]

- Added test case for issue 19211. No code change ([#20201](https://github.com/run-llama/llama_index/pull/20201))

### llama-index-utils-oracleai [0.3.1]

- Update llama-index-core dependency to 0.12.45 ([#20227](https://github.com/run-llama/llama_index/pull/20227))

### llama-index-vector-stores-lancedb [0.4.2]

- fix: FTS index recreation bug on every LanceDB query ([#20213](https://github.com/run-llama/llama_index/pull/20213))

## [2025-10-30]

### llama-index-core [0.14.7]

- Feat/serpex tool integration ([#20141](https://github.com/run-llama/llama_index/pull/20141))
- Fix outdated error message about setting LLM ([#20157](https://github.com/run-llama/llama_index/pull/20157))
- Fixing some recently failing tests ([#20165](https://github.com/run-llama/llama_index/pull/20165))
- Fix: update lock to latest workflow and fix issues ([#20173](https://github.com/run-llama/llama_index/pull/20173))
- fix: ensure full docstring is used in FunctionTool ([#20175](https://github.com/run-llama/llama_index/pull/20175))
- fix api docs build ([#20180](https://github.com/run-llama/llama_index/pull/20180))

### llama-index-embeddings-voyageai [0.5.0]

- Updating the VoyageAI integration ([#20073](https://github.com/run-llama/llama_index/pull/20073))

### llama-index-llms-anthropic [0.10.0]

- feat: integrate anthropic with tool call block ([#20100](https://github.com/run-llama/llama_index/pull/20100))

### llama-index-llms-bedrock-converse [0.10.7]

- feat: Add support for Bedrock Guardrails streamProcessingMode ([#20150](https://github.com/run-llama/llama_index/pull/20150))
- bedrock structured output optional force ([#20158](https://github.com/run-llama/llama_index/pull/20158))

### llama-index-llms-fireworks [0.4.5]

- Update FireworksAI models ([#20169](https://github.com/run-llama/llama_index/pull/20169))

### llama-index-llms-mistralai [0.9.0]

- feat: mistralai integration with tool call block ([#20103](https://github.com/run-llama/llama_index/pull/20103))

### llama-index-llms-ollama [0.9.0]

- feat: integrate ollama with tool call block ([#20097](https://github.com/run-llama/llama_index/pull/20097))

### llama-index-llms-openai [0.6.6]

- Allow setting temp of gpt-5-chat ([#20156](https://github.com/run-llama/llama_index/pull/20156))

### llama-index-readers-confluence [0.5.0]

- feat(confluence): make SVG processing optional to fix pycairo install… ([#20115](https://github.com/run-llama/llama_index/pull/20115))

### llama-index-readers-github [0.9.0]

- Add GitHub App authentication support ([#20106](https://github.com/run-llama/llama_index/pull/20106))

### llama-index-retrievers-bedrock [0.5.1]

- Fixing some recently failing tests ([#20165](https://github.com/run-llama/llama_index/pull/20165))

### llama-index-tools-serpex [0.1.0]

- Feat/serpex tool integration ([#20141](https://github.com/run-llama/llama_index/pull/20141))
- add missing toml info ([#20186](https://github.com/run-llama/llama_index/pull/20186))

### llama-index-vector-stores-couchbase [0.6.0]

- Add Hyperscale and Composite Vector Indexes support for Couchbase vector-store ([#20170](https://github.com/run-llama/llama_index/pull/20170))

## [2025-10-26]

### llama-index-core [0.14.6]

- Add allow_parallel_tool_calls for non-streaming ([#20117](https://github.com/run-llama/llama_index/pull/20117))
- Fix invalid use of field-specific metadata ([#20122](https://github.com/run-llama/llama_index/pull/20122))
- update doc for SemanticSplitterNodeParser ([#20125](https://github.com/run-llama/llama_index/pull/20125))
- fix rare cases when sentence splits are larger than chunk size ([#20147](https://github.com/run-llama/llama_index/pull/20147))

### llama-index-embeddings-bedrock [0.7.0]

- Fix BedrockEmbedding to support Cohere v4 response format ([#20094](https://github.com/run-llama/llama_index/pull/20094))

### llama-index-embeddings-isaacus [0.1.0]

- feat: Isaacus embeddings integration ([#20124](https://github.com/run-llama/llama_index/pull/20124))

### llama-index-embeddings-oci-genai [0.4.2]

- Update OCI GenAI cohere models ([#20146](https://github.com/run-llama/llama_index/pull/20146))

### llama-index-llms-anthropic [0.9.7]

- Fix double token stream in anthropic llm ([#20108](https://github.com/run-llama/llama_index/pull/20108))
- Ensure anthropic content delta only has user facing response ([#20113](https://github.com/run-llama/llama_index/pull/20113))

### llama-index-llms-baseten [0.1.7]

- add GLM ([#20121](https://github.com/run-llama/llama_index/pull/20121))

### llama-index-llms-helicone [0.1.0]

- integrate helicone to llama-index ([#20131](https://github.com/run-llama/llama_index/pull/20131))

### llama-index-llms-oci-genai [0.6.4]

- Update OCI GenAI cohere models ([#20146](https://github.com/run-llama/llama_index/pull/20146))

### llama-index-llms-openai [0.6.5]

- chore: openai vbump ([#20095](https://github.com/run-llama/llama_index/pull/20095))

### llama-index-readers-imdb-review [0.4.2]

- chore: Update selenium dependency in imdb-review reader ([#20105](https://github.com/run-llama/llama_index/pull/20105))

### llama-index-retrievers-bedrock [0.5.0]

- feat(bedrock): add async support for AmazonKnowledgeBasesRetriever ([#20114](https://github.com/run-llama/llama_index/pull/20114))

### llama-index-retrievers-superlinked [0.1.3]

- Update README.md ([#19829](https://github.com/run-llama/llama_index/pull/19829))

### llama-index-storage-kvstore-postgres [0.4.2]

- fix: Replace raw SQL string interpolation with proper SQLAlchemy parameterized APIs in PostgresKVStore ([#20104](https://github.com/run-llama/llama_index/pull/20104))

### llama-index-tools-mcp [0.4.3]

- Fix BasicMCPClient resource signatures ([#20118](https://github.com/run-llama/llama_index/pull/20118))

### llama-index-vector-stores-postgres [0.7.1]

- Add GIN index support for text array metadata in PostgreSQL vector store ([#20130](https://github.com/run-llama/llama_index/pull/20130))

## [2025-10-15]

### llama-index-core [0.14.5]

- Remove debug print ([#20000](https://github.com/run-llama/llama_index/pull/20000))
- safely initialize RefDocInfo in Docstore ([#20031](https://github.com/run-llama/llama_index/pull/20031))
- Add progress bar for multiprocess loading ([#20048](https://github.com/run-llama/llama_index/pull/20048))
- Fix duplicate node positions when identical text appears multiple times in document ([#20050](https://github.com/run-llama/llama_index/pull/20050))
- chore: tool call block - part 1 ([#20074](https://github.com/run-llama/llama_index/pull/20074))

### llama-index-instrumentation [0.4.2]

- update instrumentation package metadata ([#20079](https://github.com/run-llama/llama_index/pull/20079))

### llama-index-llms-anthropic [0.9.5]

- ✨ feat(anthropic): add prompt caching model validation utilities ([#20069](https://github.com/run-llama/llama_index/pull/20069))
- fix streaming thinking/tool calling with anthropic ([#20077](https://github.com/run-llama/llama_index/pull/20077))
- Add haiku 4.5 support ([#20092](https://github.com/run-llama/llama_index/pull/20092))

### llama-index-llms-baseten [0.1.6]

- Baseten provider Kimi K2 0711, Llama 4 Maverick and Llama 4 Scout Model APIs deprecation ([#20042](https://github.com/run-llama/llama_index/pull/20042))

### llama-index-llms-bedrock-converse [0.10.5]

- feat: List Claude Sonnet 4.5 as a reasoning model ([#20022](https://github.com/run-llama/llama_index/pull/20022))
- feat: Support global cross-region inference profile prefix ([#20064](https://github.com/run-llama/llama_index/pull/20064))
- Update utils.py for opus 4.1 ([#20076](https://github.com/run-llama/llama_index/pull/20076))
- 4.1 opus bedrockconverse missing in funcitoncalling models ([#20084](https://github.com/run-llama/llama_index/pull/20084))
- Add haiku 4.5 support ([#20092](https://github.com/run-llama/llama_index/pull/20092))

### llama-index-llms-fireworks [0.4.4]

- Add Support for Custom Models in Fireworks LLM ([#20023](https://github.com/run-llama/llama_index/pull/20023))
- fix(llms/fireworks): Cannot use Fireworks Deepseek V3.1-20006 issue ([#20028](https://github.com/run-llama/llama_index/pull/20028))

### llama-index-llms-oci-genai [0.6.3]

- Add support for xAI models in OCI GenAI ([#20089](https://github.com/run-llama/llama_index/pull/20089))

### llama-index-llms-openai [0.6.4]

- Gpt 5 pro addition ([#20029](https://github.com/run-llama/llama_index/pull/20029))
- fix collecting final response with openai responses streaming ([#20037](https://github.com/run-llama/llama_index/pull/20037))
- Add support for GPT-5 models in utils.py (JSON_SCHEMA_MODELS) ([#20045](https://github.com/run-llama/llama_index/pull/20045))
- chore: tool call block - part 1 ([#20074](https://github.com/run-llama/llama_index/pull/20074))

### llama-index-llms-sglang [0.1.0]

- Added Sglang llm integration ([#20020](https://github.com/run-llama/llama_index/pull/20020))

### llama-index-readers-gitlab [0.5.1]

- feat(gitlab): add pagination params for repository tree and issues ([#20052](https://github.com/run-llama/llama_index/pull/20052))

### llama-index-readers-json [0.4.2]

- vbump the JSON reader ([#20039](https://github.com/run-llama/llama_index/pull/20039))

### llama-index-readers-web [0.5.5]

- fix: ScrapflyReader Pydantic validation error ([#19999](https://github.com/run-llama/llama_index/pull/19999))

### llama-index-storage-chat-store-dynamodb [0.4.2]

- bump dynamodb chat store deps ([#20078](https://github.com/run-llama/llama_index/pull/20078))

### llama-index-tools-mcp [0.4.2]

- 🐛 fix(tools/mcp): Fix dict type handling and reference resolution in … ([#20082](https://github.com/run-llama/llama_index/pull/20082))

### llama-index-tools-signnow [0.1.0]

- feat(signnow): SignNow mcp tools integration ([#20057](https://github.com/run-llama/llama_index/pull/20057))

### llama-index-tools-tavily-research [0.4.2]

- feat: Add Tavily extract function for URL content extraction ([#20038](https://github.com/run-llama/llama_index/pull/20038))

### llama-index-vector-stores-azurepostgresql [0.2.0]

- Add hybrid search to Azure PostgreSQL integration ([#20027](https://github.com/run-llama/llama_index/pull/20027))

### llama-index-vector-stores-milvus [0.9.3]

- fix: Milvus get_field_kwargs() ([#20086](https://github.com/run-llama/llama_index/pull/20086))

### llama-index-vector-stores-opensearch [0.6.2]

- fix(opensearch): Correct version check for efficient filtering ([#20067](https://github.com/run-llama/llama_index/pull/20067))

### llama-index-vector-stores-qdrant [0.8.6]

- fix(qdrant): Allow async-only initialization with hybrid search ([#20005](https://github.com/run-llama/llama_index/pull/20005))

## [2025-10-03]

### llama-index-core [0.14.4]

- fix pre-release installs ([#20010](https://github.com/run-llama/llama_index/pull/20010))

### llama-index-embeddings-anyscale [0.4.2]

- fix llm deps for openai ([#19944](https://github.com/run-llama/llama_index/pull/19944))

### llama-index-embeddings-baseten [0.1.2]

- fix llm deps for openai ([#19944](https://github.com/run-llama/llama_index/pull/19944))

### llama-index-embeddings-fireworks [0.4.2]

- fix llm deps for openai ([#19944](https://github.com/run-llama/llama_index/pull/19944))

### llama-index-embeddings-opea [0.2.2]

- fix llm deps for openai ([#19944](https://github.com/run-llama/llama_index/pull/19944))

### llama-index-embeddings-text-embeddings-inference [0.4.2]

- Fix authorization header setup logic in text embeddings inference ([#19979](https://github.com/run-llama/llama_index/pull/19979))

### llama-index-llms-anthropic [0.9.3]

- feat: add anthropic sonnet 4.5 ([#19977](https://github.com/run-llama/llama_index/pull/19977))

### llama-index-llms-anyscale [0.4.2]

- fix llm deps for openai ([#19944](https://github.com/run-llama/llama_index/pull/19944))

### llama-index-llms-azure-openai [0.4.2]

- fix llm deps for openai ([#19944](https://github.com/run-llama/llama_index/pull/19944))

### llama-index-llms-baseten [0.1.5]

- fix llm deps for openai ([#19944](https://github.com/run-llama/llama_index/pull/19944))

### llama-index-llms-bedrock-converse [0.9.5]

- feat: Additional support for Claude Sonnet 4.5 ([#19980](https://github.com/run-llama/llama_index/pull/19980))

### llama-index-llms-deepinfra [0.5.2]

- fix llm deps for openai ([#19944](https://github.com/run-llama/llama_index/pull/19944))

### llama-index-llms-everlyai [0.4.2]

- fix llm deps for openai ([#19944](https://github.com/run-llama/llama_index/pull/19944))

### llama-index-llms-fireworks [0.4.2]

- fix llm deps for openai ([#19944](https://github.com/run-llama/llama_index/pull/19944))

### llama-index-llms-google-genai [0.6.2]

- Fix for ValueError: ChatMessage contains multiple blocks, use 'ChatMe… ([#19954](https://github.com/run-llama/llama_index/pull/19954))

### llama-index-llms-keywordsai [1.1.2]

- fix llm deps for openai ([#19944](https://github.com/run-llama/llama_index/pull/19944))

### llama-index-llms-localai [0.5.2]

- fix llm deps for openai ([#19944](https://github.com/run-llama/llama_index/pull/19944))

### llama-index-llms-mistralai [0.8.2]

- Update list of MistralAI LLMs ([#19981](https://github.com/run-llama/llama_index/pull/19981))

### llama-index-llms-monsterapi [0.4.2]

- fix llm deps for openai ([#19944](https://github.com/run-llama/llama_index/pull/19944))

### llama-index-llms-nvidia [0.4.4]

- fix llm deps for openai ([#19944](https://github.com/run-llama/llama_index/pull/19944))

### llama-index-llms-ollama [0.7.4]

- Fix `TypeError: unhashable type: 'dict'` in Ollama stream chat with tools ([#19938](https://github.com/run-llama/llama_index/pull/19938))

### llama-index-llms-openai [0.6.1]

- feat(OpenAILike): support structured outputs ([#19967](https://github.com/run-llama/llama_index/pull/19967))

### llama-index-llms-openai-like [0.5.3]

- feat(OpenAILike): support structured outputs ([#19967](https://github.com/run-llama/llama_index/pull/19967))

### llama-index-llms-openrouter [0.4.2]

- chore(openrouter,anthropic): add py.typed ([#19966](https://github.com/run-llama/llama_index/pull/19966))

### llama-index-llms-perplexity [0.4.2]

- fix llm deps for openai ([#19944](https://github.com/run-llama/llama_index/pull/19944))

### llama-index-llms-portkey [0.4.2]

- fix llm deps for openai ([#19944](https://github.com/run-llama/llama_index/pull/19944))

### llama-index-llms-sarvam [0.2.1]

- fixed Sarvam Integration and Typos (Fixes #19931) ([#19932](https://github.com/run-llama/llama_index/pull/19932))

### llama-index-llms-upstage [0.6.4]

- fix llm deps for openai ([#19944](https://github.com/run-llama/llama_index/pull/19944))

### llama-index-llms-yi [0.4.2]

- fix llm deps for openai ([#19944](https://github.com/run-llama/llama_index/pull/19944))

### llama-index-memory-bedrock-agentcore [0.1.0]

- feat: Bedrock AgentCore Memory integration ([#19953](https://github.com/run-llama/llama_index/pull/19953))

### llama-index-multi-modal-llms-openai [0.6.2]

- fix llm deps for openai ([#19944](https://github.com/run-llama/llama_index/pull/19944))

### llama-index-readers-confluence [0.4.4]

- Fix: Respect cloud parameter when fetching child pages in ConfluenceR… ([#19983](https://github.com/run-llama/llama_index/pull/19983))

### llama-index-readers-service-now [0.2.2]

- Bug Fix :- Not Able to Fetch Page whose latest is empty or null ([#19916](https://github.com/run-llama/llama_index/pull/19916))

### llama-index-selectors-notdiamond [0.4.0]

- fix llm deps for openai ([#19944](https://github.com/run-llama/llama_index/pull/19944))

### llama-index-tools-agentql [1.2.0]

- fix llm deps for openai ([#19944](https://github.com/run-llama/llama_index/pull/19944))

### llama-index-tools-playwright [0.3.1]

- chore: fix playwright tests ([#19946](https://github.com/run-llama/llama_index/pull/19946))

### llama-index-tools-scrapegraph [0.2.2]

- feat: update scrapegraphai ([#19974](https://github.com/run-llama/llama_index/pull/19974))

### llama-index-vector-stores-chroma [0.5.3]

- docs: fix query method docstring in ChromaVectorStore Fixes #19969 ([#19973](https://github.com/run-llama/llama_index/pull/19973))

### llama-index-vector-stores-mongodb [0.8.1]

- fix llm deps for openai ([#19944](https://github.com/run-llama/llama_index/pull/19944))

### llama-index-vector-stores-postgres [0.7.0]

- fix index creation in postgres vector store ([#19955](https://github.com/run-llama/llama_index/pull/19955))

### llama-index-vector-stores-solr [0.1.0]

- Add ApacheSolrVectorStore Integration ([#19933](https://github.com/run-llama/llama_index/pull/19933))

## [2025-09-24]

### llama-index-core [0.14.3]

- Fix Gemini thought signature serialization ([#19891](https://github.com/run-llama/llama_index/pull/19891))
- Adding a ThinkingBlock among content blocks ([#19919](https://github.com/run-llama/llama_index/pull/19919))

### llama-index-llms-anthropic [0.9.0]

- Adding a ThinkingBlock among content blocks ([#19919](https://github.com/run-llama/llama_index/pull/19919))

### llama-index-llms-baseten [0.1.4]

- added kimik2 0905 and reordered list for validation ([#19892](https://github.com/run-llama/llama_index/pull/19892))
- Baseten Dynamic Model APIs Validation ([#19893](https://github.com/run-llama/llama_index/pull/19893))

### llama-index-llms-google-genai [0.6.0]

- Add missing FileAPI support for documents ([#19897](https://github.com/run-llama/llama_index/pull/19897))
- Adding a ThinkingBlock among content blocks ([#19919](https://github.com/run-llama/llama_index/pull/19919))

### llama-index-llms-mistralai [0.8.0]

- Adding a ThinkingBlock among content blocks ([#19919](https://github.com/run-llama/llama_index/pull/19919))

### llama-index-llms-openai [0.6.0]

- Adding a ThinkingBlock among content blocks ([#19919](https://github.com/run-llama/llama_index/pull/19919))

### llama-index-protocols-ag-ui [0.2.2]

- improve how state snapshotting works in AG-UI ([#19934](https://github.com/run-llama/llama_index/pull/19934))

### llama-index-readers-mongodb [0.5.0]

- Use PyMongo Asynchronous API instead of Motor ([#19875](https://github.com/run-llama/llama_index/pull/19875))

### llama-index-readers-paddle-ocr [0.1.0]

- [New Package] Add PaddleOCR Reader for extracting text from images in PDFs ([#19827](https://github.com/run-llama/llama_index/pull/19827))

### llama-index-readers-web [0.5.4]

- feat(readers/web-firecrawl): migrate to Firecrawl v2 SDK ([#19773](https://github.com/run-llama/llama_index/pull/19773))

### llama-index-storage-chat-store-mongo [0.3.0]

- Use PyMongo Asynchronous API instead of Motor ([#19875](https://github.com/run-llama/llama_index/pull/19875))

### llama-index-storage-kvstore-mongodb [0.5.0]

- Use PyMongo Asynchronous API instead of Motor ([#19875](https://github.com/run-llama/llama_index/pull/19875))

### llama-index-tools-valyu [0.5.0]

- Add Valyu Extractor and Fast mode ([#19915](https://github.com/run-llama/llama_index/pull/19915))

### llama-index-vector-stores-azureaisearch [0.4.2]

- Fix/llama index vector stores azureaisearch fix ([#19800](https://github.com/run-llama/llama_index/pull/19800))

### llama-index-vector-stores-azurepostgresql [0.1.0]

- Add support for Azure PostgreSQL ([#19709](https://github.com/run-llama/llama_index/pull/19709))

### llama-index-vector-stores-qdrant [0.8.5]

- Add proper compat for old sparse vectors ([#19882](https://github.com/run-llama/llama_index/pull/19882))

### llama-index-vector-stores-singlestoredb [0.4.2]

- Fix SQLi Vulnerability in SingleStore Db ([#19914](https://github.com/run-llama/llama_index/pull/19914))

## [2025-09-15]

### `llama-index-core` [0.14.2]

- fix: handle data urls in ImageBlock (#19856)
- fix: Move IngestionPipeline docstore document insertion after transformations (#19849)
- fix: Update IngestionPipeline async document store insertion (#19868)
- chore: remove stepwise usage of workflows from code (#19877)

### `llama-index-embeddings-fastembed` [0.5.0]

- feat: make fastembed cpu or gpu optional (#19878)

### `llama-index-llms-deepseek` [0.2.2]

- feat: pass context_window to super in deepseek llm (#19876)

### `llama-index-llms-google-genai` [0.5.0]

- feat: Add GoogleGenAI FileAPI support for large files (#19853)

### `llama-index-readers-solr` [0.1.0]

- feat: Add Solr reader integration (#19843)

### `llama-index-retrievers-alletra-x10000-retriever` [0.1.0]

- feat: add AlletraX10000Retriever integration (#19798)

### `llama-index-vector-stores-oracledb` [0.3.2]

- feat: OraLlamaVS Connection Pool Support + Filtering (#19412)

### `llama-index-vector-stores-postgres` [0.6.8]

- feat: Add `customize_query_fn` to PGVectorStore (#19847)

## [2025-09-14]

### `llama-index-core` [0.14.1]

- feat: add verbose option to RetrieverQueryEngine for detailed output (#19807)
- feat: feat: add support for additional kwargs in `aget_text_embedding_batch` method (#19808)
- feat: add `thinking_delta` field to AgentStream events to expose llm reasoning (#19785)
- fix: Bug fix agent streaming thinking delta pydantic validation (#19828)
- fix: handle positional args and kwargs both in tool calling (#19822)

### `llama-index-instrumentation` [0.4.1]

- feat: add sync event/handler support (#19825)

### `llama-index-llms-google-genai` [0.4.0]

- feat: Add VideoBlock and GoogleGenAI video input support (#19823)

### `llama-index-llms-ollama` [0.7.3]

- fix: Fix bug using Ollama with Agents and None tool_calls in final message (#19844)

### `llama-index-llms-vertex` [0.6.1]

- fix: align complete/acomplete responses (#19806)

### `llama-index-readers-confluence` [0.4.3]

- chore: Bump version constraint for atlassian-python-api to include 4.x (#19824)

### `llama-index-readers-github` [0.6.2]

- fix: Make url optional (#19851)

### `llama-index-readers-web` [0.5.3]

- feat: Add OlostepWebReader Integration (#19821)

### `llama-index-tools-google` [0.6.2]

- feat: Add optional creds argument to GoogleCalendarToolSpec (#19826)

### `llama-index-vector-stores-vectorx` [0.1.0]

- feat: Add vectorx vectorstore (#19758)

## [2025-09-08]

**NOTE:** All packages have been bumped to handle the latest llama-index-core version.

### `llama-index-core` [0.14.0]

- breaking: bumped `llama-index-workflows` dependency to 2.0
  - Improve stacktraces clarity by avoiding wrapping errors in WorkflowRuntimeError
  - Remove deprecated checkpointer feature
  - Remove deprecated sub-workflows feature
  - Remove deprecated `send_event` method from Workflow class (still existing on the Context class)
  - Remove deprecated `stream_events()` methods from Workflow class (still existing on the Context class)
  - Remove deprecated support for stepwise execution

### `llama-index-llms-openai` [0.5.6]

- feat: add support for document blocks in openai chat completions (#19809)

## [2025-09-06]

### `llama-index-core` [0.13.6]

- chore: remove openai selector from core utils function (#19803)

### `llama-index-llms-cometapi` [0.1.0]

- feat: Add CometAPI LLM integration (#19793)

## [2025-09-04]

### `llama-index-core` [0.13.5]

- feat: add thinking delta field to AgentStream events to expose from LLM responses (#19785)
- fix: fix path handling in SimpleDirectoryReader and PDFReader path fix (#19794)

### `llama-index-llms-bedrock-converse` [0.9.0]

- feat: add system prompt and tool caching config kwargs to BedrockConverse (#19737)

### `llama-index-llms-litellm` [0.6.2]

- fix: Handle missing tool call IDs with UUID fallback (#19789)
- fix: Fix critical context window calculation (#19787)

### `llama-index-readers-file` [0.5.3]

- fix: fix path handling in SimpleDirectoryReader and PDFReader path fix (#19794)

### `llama-index-storage-chat-store-yugabytedb` [0.1.0]

- feat: add Yugabytedb chat store (#19768)

### `llama-index-vector-stores-milvus` [0.9.1]

- fix: create TextNode if no '\_node_content' set (#19772)

### `llama-index-vector-stores-postgres` [0.6.5]

- fix: make postgres regex punctuation handling consistent with plainto_tsquery (#19781)

## [2025-09-01]

### `llama-index-core` [0.13.4]

- feat: Add PostgreSQL schema support to Memory and SQLAlchemyChatStore (#19741)
- feat: add missing sync wrapper of put_messages in memory (#19746)
- feat: add option for an initial tool choice in FunctionAgent (#19738)
- fix: Calling ContextChatEngine with a QueryBundle (instead of a string) (#19714)

### `llama-index-embeddings-baseten` [0.1.0]

- feat: baseten integration (#19710)

### `llama-index-embeddings-ibm` [0.5.0]

- feat: Support for additional/external urls, make instance_id deprecated (#19749)

### `llama-index-llms-baseten` [0.1.0]

- feat: baseten integration (#19710)

### `llama-index-llms-bedrock-converse` [0.8.3]

- feat: add `amazon.nova-premier-v1:0` to BEDROCK_MODELS (#19728)

### `llama-index-llms-ibm` [0.6.0]

- feat: Support for additional/external urls, make instance_id deprecated (#19749)

### `llama-index-postprocessor-ibm` [0.3.0]

- feat: Support for additional/external urls, make instance_id deprecated (#19749)

### `llama-index-postprocessor-sbert-rerank` [0.4.1]

- fix: fix SentenceTransformerRerank init device (#19756)

### `llama-index-readers-google` [0.7.1]

- feat: raise google drive errors (#19752)

### `llama-index-readers-web` [0.5.1]

- feat: Add ZenRows web reader (#19699)

### `llama-index-vector-stores-chroma` [0.5.2]

- feat: add mmr search to chroma (#19731)

### `llama-index-vector-stores-postgres` [0.6.4]

- fix: Use the indexed metadata field 'ref_doc_id' instead of 'doc_id' during deletion (#19759)

### `llama-index-vector-stores-qdrant` [0.8.2]

feat: Payload indexes support to QdrantVectorStore (#19743)

## [2025-08-22]

### `llama-index-core` [0.13.3]

- fix: add timeouts on image `.get()` requests (#19723)
- fix: fix StreamingAgentChatResponse losses message bug (#19674)
- fix: Fixing crashing when retrieving from empty vector store index (#19706)
- fix: Calling ContextChatEngine with a QueryBundle (instead of a string) (#19714)
- fix: Fix faithfulness evaluate crash when no images provided (#19686)

### `llama-index-embeddings-heroku` [0.1.0]

- feat: Adds support for HerokuEmbeddings (#19685)

### `llama-index-embeddings-ollama` [0.8.2]

- feat: enhance OllamaEmbedding with instruction support (#19721)

### `llama-index-llms-anthropic` [0.8.5]

- fix: Fix prompt caching with CachePoint (#19711)

### `llama-index-llms-openai` [0.5.4]

- feat: add gpt-5-chat-latest model support (#19687)

### `llama-index-llms-sagemaker-endpoint` [0.4.1]

- fix: fix constructor region read to not read region_name before is popped from kwargs, and fix assign to super (#19705)

### `llama-index-llms-upstage` [0.6.2]

- chore: remove deprecated model(solar-pro) (#19704)

### `llama-index-readers-confluence` [0.4.1]

- fix: Support concurrent use of multiple ConfluenceReader instances (#19698)

### `llama-index-vector-stores-chroma` [0.5.1]

- fix: fix `get_nodes()` with empty node ids (#19711)

### `llama-index-vector-stores-qdrant` [0.8.1]

- feat: support qdrant sharding (#19652)

### `llama-index-vector-stores-tencentvectordb` [0.4.1]

- fix: Resolve AttributeError in CollectionParams.filter_fields access (#19695)

## [2025-08-14]

### `llama-index-core` [0.13.2]

- feat: allow streaming to be disabled in agents (#19668)
- fix: respect the value of NLTK_DATA env var if present (#19664)
- fix: Order preservation and fetching in batch non-cached embeddings in `a/get_text_embedding_batch()` (#19536)

### `llama-index-embeddings-ollama` [0.8.1]

- fix: Access embedding output (#19635)
- fix: use normalized embeddings (#19622)

### `llama-index-graph-rag-cognee` [0.3.0]

- fix: Update and fix cognee integration (#19650)

### `llama-index-llms-anthropic` [0.8.4]

- fix: Error in Anthropic extended thinking with tool use (#19642)
- chore: context window for claude 4 sonnet to 1 mln tokens (#19649)

### `llama-index-llms-bedrock-converse` [0.8.2]

- feat: add openai-oss models to BedrockConverse (#19653)

### `llama-index-llms-ollama` [0.7.1]

- fix: fix ollama role response detection (#19671)

### `llama-index-llms-openai` [0.5.3]

- fix: AzureOpenAI streaming token usage (#19633)

### `llama-index-readers-file` [0.5.1]

- feat: enhance PowerPoint reader with comprehensive content extraction (#19478)

### `llama-index-retrievers-bm25` [0.6.3]

- fix: fix persist+load for bm25 (#19657)

### `llama-index-retrievers-superlinked` [0.1.0]

- feat: add Superlinked retriever integration (#19636)

### `llama-index-tools-mcp` [0.4.0]

- feat: Handlers for custom types and pydantic models in tools (#19601)

### `llama-index-vector-stores-clickhouse` [0.6.0]

- chore: Updates to ClickHouse integration based on new vector search capabilities in ClickHouse (#19647)

### `llama-index-vector-stores-postgres` [0.6.3]

- fix: Add other special characters in `ts_query` normalization (#19637)

## [2025-08-08]

### `llama-index-core` [0.13.1]

- fix: safer token counting in messages (#19599)
- fix: Fix Document truncation in `FunctionTool._parse_tool_output` (#19585)
- feat: Enabled partially formatted system prompt for ReAct agent (#19598)

### `llama-index-embeddings-ollama` [0.8.0]

- fix: use /embed instead of /embeddings for ollama (#19622)

### `llama-index-embeddings-voyageai` [0.4.1]

- feat: Add support for voyage context embeddings (#19590)

### `llama-index-graph-stores-kuzu` [0.9.0]

- feat: Update Kuzu graph store integration to latest SDK (#19603)

### `llama-index-indices-managed-llama-cloud` [0.9.1]

- chore: deprecate llama-index-indices-managed-llama-cloud in favor of llama-cloud-services (#19608)

### `llama-index-llms-anthropic` [0.8.2]

- feat: anthropic citation update to non-beta support (#19624)
- feat: add support for opus 4.1 (#19593)

### `llama-index-llms-heroku` [0.1.0]

- feat: heroku llm integration (#19576)

### `llama-index-llms-nvidia` [0.4.1]

- feat: add support for gpt-oss NIM (#19618)

### `llama-index-llms-oci-genai` [0.6.1]

- chore: update list of supported LLMs for OCI integration (#19604)

### `llama-index-llms-openai` [0.5.2]

- fix: fix isinstance check in openai (#19617)
- feat: add gpt-5 (#19613)

### `llama-index-llms-upstage` [0.6.1]

- fix: Fix reasoning_effort parameter ineffective and Add new custom parameters (#19619)

### `llama-index-postprocessor-presidio` [0.5.0]

- feat: Support presidio entities (#19584)

### `llama-index-retrievers-bm25` [0.6.2]

- fix: BM25 Retriever allow `top_k` value greater than number of nodes added (#19577)
- feat: Add metadata filtering support to BM25 Retriever and update documentation (#19586)

### `llama-index-tools-aws-bedrock-agentcore` [0.1.0]

- feat: Bedrock AgentCore browser and code interpreter toolspecs (#19559)

### `llama-index-vector-stores-baiduvectordb` [0.6.0]

- fix: fix filter operators and add stores_text support (#19591)
- feat: add wait logic for critical operations (#19587)

### `llama-index-vector-stores-postgres` [0.6.2]

- fix: Fixed special character bug in PGVectorStore query (#19621)
- fix: change ts_query definition to avoid double-stemming (#19581)

## [2025-07-30]

**NOTE:** All packages have been bumped to handle the latest llama-index-core version.

### `llama-index-core` [0.13.0]

- breaking: removed deprecated agent classes, including `FunctionCallingAgent`, the older `ReActAgent` implementation, `AgentRunner`, all step workers, `StructuredAgentPlanner`, `OpenAIAgent`, and more. All users should migrate to the new workflow based agents: `FunctionAgent`, `CodeActAgent`, `ReActAgent`, and `AgentWorkflow` (#19529)
- breaking: removed deprecated `QueryPipeline` class and all associated code (#19554)
- breaking: changed default `index.as_chat_engine()` to return a `CondensePlusContextChatEngine`. Agent-based chat engines have been removed (which was the previous default). If you need an agent, use the above mentioned agent classes. (#19529)
- fix: Update BaseDocumentStore to not return Nones in result (#19513)
- fix: Fix FunctionTool param doc parsing and signature mutation; update tests (#19532)
- fix: Handle empty prompt in MockLLM.stream_complete (#19521)

### `llama-index-embeddings-mixedbreadai` [0.5.0]

- feat: Update mixedbread embeddings and rerank for latest sdk (#19519)

### `llama-index-instrumentation` [0.4.0]

- fix: let wrapped exceptions bubble up (#19566)

### `llama-index-llms-google-genai` [0.3.0]

- feat: Add Thought Summaries and signatures for Gemini (#19505)

### `llama-index-llms-nvidia` [0.4.0]

- feat: add support for kimi-k2-instruct (#19525)

### `llama-index-llms-upstage` [0.6.0]

- feat: add new upstage model(solar-pro2) (#19526)

### `llama-index-postprocessor-mixedbreadai-rerank` [0.5.0]

- feat: Update mixedbread embeddings and rerank for latest sdk (#19519)

### `llama-index-readers-github` [0.8.0]

- feat: Github Reader enhancements for file filtering and custom processing (#19543)

### `llama-index-readers-s3` [0.5.0]

- feat: add support for region_name via `client_kwargs` in S3Reader (#19546)

### `llama-index-tools-valyu` [0.4.0]

- feat: Update Valyu sdk to latest version (#19538)

### `llama-index-voice-agents-gemini-live` [0.2.0]

- feat(beta): adding first implementation of gemini live (#19489)

### `llama-index-vector-stores-astradb` [0.5.0]

- feat: astradb get nodes + delete nodes support (#19544)

### `llama-index-vector-stores-milvus` [0.9.0]

- feat: Add support for specifying partition_names in Milvus search configuration (#19555)

### `llama-index-vector-stores-s3` [0.2.0]

- fix: reduce some metadata keys from S3VectorStore to save space (#19550)

### `llama-index-vector-stores-postgres` [0.6.0]

- feat: Add support for ANY/ALL postgres operators (#19553)

## [2025-07-22]

### `llama-index-core` [0.12.52.post1]

- fix: do not write system prompt to memory in agents (#19512)

### `llama-index-core` [0.12.52]

- fix: Fix missing prompt in async MultiModalLLMProgram calls (#19504)
- fix: Properly raise errors from docstore, fixes Vector Index Retrieval for `stores_text=True/False` (#19501)

### `llama-index-indices-managed-bge-m3` [0.5.0]

- feat: optimize memory usage for BGEM3Index persistence (#19496)

### `llama-index-readers-web` [0.4.5]

- feat: Add timeout to webpage readers, defaults to 60 seconds (#19503)

### `llama-index-tools-jira-issue` [0.1.0]

- feat: added jira issue tool spec (#19457)

### `llama-index-vector-stores-azureaisearch` [0.3.10]

- chore: add `**kwargs` into AzureAISearchVectorStore super init (#19500)

### `llama-index-vector-stores-neo4jvector` [0.4.1]

- fix: Patch Neo4jVector Call version (#19498)

## [2025-07-21]

### `llama-index-core` [0.12.51]

- feat: Enhance FunctionTool with auto type conversion for basic Python types like date when using pydantic fields in functions (#19479)
- fix: Fix retriever KeyError when using FAISS and other vector stores that do no store text (#19476)
- fix: add system prompt to memory and use it also for structured generation (#19490)

### `llama-index-readers-azstorage-blob` [0.3.2]

- fix: Fix metadata serialization issue in AzStorageBlobReader (#19491)

## [2025-07-19]

### `llama-index-core` [0.12.50]

- feat: support html table extraction in MarkdownElementNodeParser (#19449)
- fix/slightly breaking: make `get_cache_dir()` function more secure by changing default location (#19415)
- fix: resolve race condition in SQLAlchemyChatStore with precise timestamps (#19432)
- fix: update document store import to use BaseDocumentStore in DocumentContextExtractor (#19466)
- fix: improve empty retrieval check in vector index retriever (#19471)
- fix: Fix running workflow agents as MCP servers by adding start event handling to workflow agents (#19470)
- fix: handle ID type mismatch in various retrievers (#19448)
- fix: add structured output to multi agent also from secondary constructor + tests (#19435)
- fix: duplicated `session_id` metadata_filter in VectorMemoryBlock (#19427)
- fix: make sure to stop agent on function tool return direct (#19413)
- fix: use a private folder to store NTLK cache (#19444)
- fix: Update ReAct agent parse error message (#19431)

### `llama-index-instrumentation` [0.3.0]

- feat: Improve instrumentation span name (#19454)

### `llama-index-llms-bedrock-converse` [0.7.6]

- chore: added llama 4 models in Bedrock Converse, remove llama 3.2 1b and 3b from function calling models (#19434)

### `llama-index-llms-cloudflare-ai-gateway` [0.1.0]

- feat: introduce cloudflare ai gateway (#19395)

### `llama-index-llms-google-genai` [0.2.5]

- feat: Add `google_search` Tool Support to GoogleGenAI LLM Integration (#19406)

### `llama-index-readers-confluence` [0.3.2]

- refactor: various Confluence reader enhancements (logging, error handling) (#19424)

### `llama-index-readers-service-now` [0.1.0]

- feat: added service-now reader (#19429)

### `llama-index-protocols-ag-ui` [0.1.4]

- chore: remove some stray debug prints from AGUI (#19469)

### `llama-index-tools-wikipedia` [0.3.1]

- fix: Remove load_kwargs from `WikipediaToolSpec.load_data` tool (#19464)

### `llama-index-vector-stores-baiduvectordb` [0.3.1]

- fix: pass `**kwargs` to `super().__init__` in BaiduVectorDB (#19436)

### `llama-index-vector-stores-moorcheh` [0.1.1]

- fix: Update Moorcheh Vector Store namespace resolution (#19461)

### `llama-index-vector-stores-s3` [0.1.0]

- feat: s3 vectors support (#19456)

## [2025-07-14]

### `llama-index-core` [0.12.49]

- fix: skip tests on CI (#19416)
- fix: fix structured output (#19414)
- Fix: prevent duplicate triplets in SimpleGraphStore.upsert_triplet (#19404)
- Add retry capability to workflow agents (#19393)
- chore: modifying raptors dependencies with stricter rules to avoid test failures (#19394)
- feat: adding a first implementation of structured output in agents (#19337)
- Add tests for and fix issues with Vector Store node serdes (#19388)
- Refactor vector index retrieval (#19382)
- Retriever Query Engine should use async node postprocessors (#19380)

### `llama-index-llms-bedrock-converse` [0.7.5]

- Fix BedrockConverse streaming token counting by handling messageStop … (#19369)

### `llama-index-llms-nvidia` [0.3.5]

- nvidia-llm : Adding support to use llm models outside default list (#19366)

### `llama-index-llms-oci-genai` [0.5.2]

- Fix bugs in tool calling for OCI generative AI Llama models (#19376)

### `llama-index-postprocessor-flashrank-rerank` [0.1.0]

- Fix bugs in tool calling for OCI generative AI Llama models (#19376)

### `llama-index-readers-web` [0.4.4]

- fix: avoid SimpleWebPageReader and others to use url as a Document id (#19398)

### `llama-index-storage-docstore-duckdb` [0.1.0]

- Add DuckDB KV, Document, and Index Store
  (#19282)

### `llama-index-storage-index-store-duckdb` [0.1.0]

- Add DuckDB KV, Document, and Index Store
  (#19282)

### `llama-index-storage-kvstore-duckdb` [0.1.3]

- DuckDB: Deadlocks-b-gone (#19401)
- Improvements for DuckDB thread safety and embed dimension handling (#19391)
- Add DuckDB KV, Document, and Index Store
  (#19282)

### `llama-index-vector-stores-duckdb` [0.4.6]

- DuckDB: Deadlocks-b-gone (#19401)
- Improvements for DuckDB thread safety and embed dimension handling (#19391)
- DuckDB Async and Faster Cosine Similarity
  (#19383)
- DuckDB Small clean-up and add embeddings to returned nodes (#19377)

### `llama-index-vector-stores-moorcheh` [0.1.0]

- feat: Add Moorcheh vector store integration (#19349)

## [2025-07-09]

### `llama-index-core` [0.12.48]

- fix: convert dict chat_history to ChatMessage objects in AgentWorkflowStartEvent (#19371)
- fix: Replace ctx.get/set with ctx.store.get/set in Context (#19350)
- Bump the pip group across 6 directories with 1 update (#19357)
- Make fewer trips to KV store during Document Hash Checks (#19362)
- Don't store Copy of document in metadata and properly return Nodes (#19343)
- Bump llama-index-core from 0.12.8 to 0.12.41 in /docs in the pip group across 1 directory (#19345)
- fix: Ensure CallbackManager is applied to default embed_model (#19335)
- fix publish sub-package workflow (#19338)

### `llama-index-embeddings-huggingface-optimum-intel` [0.3.1]

- Fix IntelEmbedding base.py (#19351)

### `llama-index-indices-managed-lancedb` [0.1.0]

- Fix broken lancedb tests (#19352)

### `llama-index-indices-managed-llamacloud` [0.7.10]

- vbump llama-cloud (#19355)
- Fix async retrieval of page figure nodes (#19334)

### `llama-index-llms-google-genai` [0.2.4]

- Add Cached Content Support to GoogleGenAI LLM Integration (#19361)

### `llama-index-llms-oci-genai` [0.5.1]

- Add support of Image prompt for OCI generative AI Llama models (#19306)

### `llama-index-readers-file` [0.4.11]

- swamp xml for defusedxml (#19342)

### `llama-index-storage-chat-stores-postgres` [0.2.2]

- Update asyncpg (#19365)

## [2025-07-06]

### `llama-index-core` [0.12.47]

- feat: add default `max_iterations` arg to `.run()` of 20 for agents (#19035)
- feat: set `tool_required` to `True` for `FunctionCallingProgram` and structured LLMs where supported (#19326)
- fix: fix missing raw in agent workflow events (#19325)
- fix: fixed parsing of empty list in parsing json output (#19318)
- chore: Deprecate Multi Modal LLMs (#19115)
  - All existing multi-modal llms are now extensions of their base `LLM` counterpart
  - Base `LLM` classes support multi-modal features in `llama-index-core`
  - Base `LLM` classes use `ImageBlock` internally to support multi-modal features

### `llama-index-cli` [0.4.4]

- fix: prevent command injection vulnerability in RAG CLI --clear flag (#19322)

### `llama-index-indices-managed-lancedb` [0.1.0]

- feat: Adding an integration for LanceDB MultiModal AI LakeHouse (#19232)

### `llama-index-llms-anthropic` [0.7.6]

- feat: anthropic citations support (#19316)

### `llama-index-llms-oci-genai` [0.5.1]

- feat: Add support of Image prompt for OCI generative AI Llama models (#19306)

### `llama-index-readers-web` [0.4.3]

- chore: Add firecrawl integration source (#19203)

## [2025-07-02]

### `llama-index-core` [0.12.46]

- feat: Add async delete and insert to vector store index (#19281)
- fix: Fixing ChatMessage to str handling of empty inputs (#19302)
- fix: fix function tool context detection with typed context (#19309)
- fix: inconsistent ref node handling (#19286)
- chore: simplify citation block schema (#19308)

### `llama-index-embeddings-google-genai` [0.2.1]

- chore: bump min google-genai version (#19304)

### `llama-index-embeddings-nvidia` [0.3.4]

- fix: embedding model with custom endpoints 404 error (#19295)

### `llama-index-llms-google-genai` [0.2.3]

- chore: bump min google-genai version (#19304)

### `llama-index-tools-mcp` [0.2.6]

- fix: configuring resources from the mcp server correctly (#19307)

### `llama-index-voice-agents-elevenlabs` [0.3.0-beta]

- fix: Migrating Elevenlabs to adjust it to framework standard (#19273)

## [2025-06-30]

### `llama-index-core` [0.12.45]

- feat: allow tools to output content blocks (#19265)
- feat: Add chat UI events and models to core package (#19242)
- fix: Support loading `Node` from ingestion cache (#19279)
- fix: Fix SemanticDoubleMergingSplitterNodeParser not respecting max_chunk_size (#19235)
- fix: replace `get_doc_id()` with `id_` in base index (#19266)
- chore: remove usage and references to deprecated Context get/set API (#19275)
- chore: deprecate older agent packages (#19249)

### `llama-index-llms-anthropic` [0.7.5]

- feat: Adding new AWS Claude models available on Bedrock (#19233)

### `llama-index-embeddings-azure-openai` [0.3.9]

- feat: Add dimensions parameter to AzureOpenAIEmbedding (#19239)

### `llama-index-embeddings-bedrock` [0.5.2]

- feat: Update aioboto3 dependency (#19237)

### `llama-index-llms-bedrock-converse` [0.7.4]

- feat: Update aioboto3 dependency (#19237)

### `llama-index-llms-dashscope` [0.4.1]

- fix: Fix dashscope qwen assistant api Error response problem, extract `tool_calls` info from ChatMessage kwargs to top level (#19224)

### `llama-index-memory-mem0` [0.3.2]

- feat: Adapting Mem0 to new framework memory standard (#19234)

### `llama-index-tools-google` [0.5.0]

- feat: Add proper async google search to tool spec (#19250)
- fix: Clean up results in GoogleSearchToolSpec (#19246)

### `llama-index-vector-stores-postgres` [0.5.4]

- fix: Fix pg vector store sparse query (#19241)

## [2025-06-25]

### `llama-index-core` [0.12.44]

- feat: Adding a `CachePoint` content block for caching chat messages (#19193)
- fix: fix react system header formatting in workflow agent (#19158)
- fix: fix ReActOutputParser when no "Thought:" prefix is produced by the LLM (#19190)
- fix: Fixed string striping in react output parser (#19192)
- fix: properly handle system prompt for CodeAct agent (#19191)
- fix: Exclude raw field in AgentStream event to fix potential serialization issue (#19150)
- chore: Mark older agent architectures in core as deprecated (#19205)
- chore: deprecate query pipelines in code (#19206)

### `llama-index-embeddings-fastembed` [0.3.5]

- feat: Add Batch Support for FastEmbed (#19147)

### `llama-index-embeddings-huggingface` [0.5.5]

- feat: Add async batching for huggingface using `asyncio.to_thread` (#19207)

### `llama-index-llms-anthropic` [0.7.4]

- fix: update kwargs for anthropic bedrock (#19169)

### `llama-index-llms-google-genai` [0.2.2]

- fix: Setting up System instruction properly for google genai client (#19196)

### `llama-index-llms-mistralai` [0.6.1]

- fix: Fix image url handling in Mistral AI (#19139)

### `llama-index-llms-perplexity` [0.3.7]

- fix: make api_key use `PPLX_API_KEY` in perplexity llm integration (#19217)

### `llama-index-postprocessor-bedrock-rerank` [0.4.0]

- fix: Avoid changing 'top_n' self attribute at runtime (#19221)

### `llama-index-postprocessor-sbert-rerank` [0.3.2]

- feat: add `cross_encoder_kwargs` parameter for advanced configuration (#19148)

### `llama-index-utils-workflow` [0.3.5]

- feat: Adding visualization functions for single/multi agent workflows (#19101)

### `llama-index-vector-stores-azureaisearch` [0.3.8]

- feat: Enable forwarding of arbitrary Azure Search SDK parameters in AzureAISearchVectorStore for document retrieval (#19173)

### `llama-index-vector-stores-db2` [0.1.0]

- feat: add IBM Db2 vector store (#19195)

### `llama-index-vector-stores-duckdb` [0.4.0]

- feat: refactor DuckDB VectorStore (#19106)

### `llama-index-vector-stores-pinecone` [0.6.0]

- feat: support pinecone v7 (#19163)
- fix: support python version `>=3.9,<4.0` for `llama-index-vector-stores-pinecone` (#19186)

### `llama-index-vector-stores-qdrant` [0.6.1]

- fix: fix types with IN/NIN filters in qdrant (#19159)

### `llama-index-voice-agents-openai` [0.1.1-beta]

- feat: Adding beta OpenAI Realtime Conversation integration (#19010)

## [2025-06-18]

### `llama-index-core` [0.12.43]

- feat: Make BaseWorkflowAgent a workflow itself (#19052)
- fix: make the progress bar of title extractor unified (#19131)
- fix: Use `get_tqdm_iterable` in SimpleDirectoryReader (#18722)
- chore: move out Workflows code to `llama-index-workflows` and keeping backward compatibility (#19043)
- chore: move instrumentation code out to its own package `llama-index-instrumentation` (#19062)

### `llama-index-llms-bedrock-converse` [0.7.2]

- fix: improve empty tool call handling in bedrock converse (#19084)

### `llama-index-llms-openai` [0.4.7]

- fix: fix building openai responses dicts (#19089, #19094)

### `llama-index-llms-perplexity` [0.3.6]

- feat: Perf/improve robustness of perplexity llm integration (#19022)

### `llama-index-postprocessor-sbert-rerank` [0.3.1]

- feat: Added cache dir to Sentence Transformers post processor (#19097)

### `llama-index-protocols-ag-ui` [0.1.2]

- feat: add `ag-ui` protocol support (#19104, #19103, #19102, #18898)

### `llama-index-readers-google` [0.6.2]

- fix: Fix error getting metadata file IDs in google drive reader (#19118)

### `llama-index-readers-hive` [0.3.1]

- chore: deprecate and remove hive reader (#18990)

### `llama-index-readers-mongodb` [0.3.2]

- feat: Added Async driver for `alazy_load_data` for mongodb reader (#19038)

### `llama-index-storage-chat-store-sqlite` [0.1.1]

- fix: sqlite chat store compatibility with sqlalchemy 1.4 (#19067)

### `llama-index-tools-hive` [0.1.0]

- feat: Add Hive Intelligence search tool (#19029)

### `llama-index-utils-workflow` [0.3.4]

- feat: support drawing mermaid diagrams of workflows (#19083)

### `llama-index-vector-stores-lancedb` [0.3.3]

- fix: create table with pre-defined schema (#19064)

### `llama-index-vector-stores-milvus` [0.8.5]

- fix: `Connections.connect()` got multiple values for argument `alias` (#19119)

### `llama-index-vector-stores-opengauss` [0.1.0]

- feat: add openGauss integration (#19024)

## [2025-06-11]

### `llama-index-core` [0.12.42]

- fix: pass input message to memory get (#19054)
- fix: use async memory operations within async functions (#19032)
- fix: Using uuid instead of hashing for broader compatibility in SQLTableNodeMapping (#19011)

### `llama-index-embeddings-bedrock` [0.5.1]

- feat: Update aioboto3 dependency (#19015)

### `llama-index-indices-managed-llama-cloud` [0.7.7]

- feat: figure retrieval SDK integration (#19017)
- fix: Return empty list when argument `raw_figure_nodes` is None type in `page_figure_nodes_to_node_with_score` (#19053)

### `llama-index-llms-mistralai` [0.6.0]

- feat: Add reasoning support to mistralai LLM + magistral (#19048)

### `llama-index-llms-openai` [0.4.5]

- feat: O3 pro day 0 support (#19030)
- fix: skip tool description length check in openai response api (#18956)

### `llama-index-llms-perplexity` [0.3.5]

- fix: perplexity llm integration bug fix (#19007)

### `llama-index-multi-modal-llms-openai-like` [0.1.0]

- feat: add openai like multi-modal LLM (#18997)

### `llama-index-postprocessor-bedrock-rerank` [0.3.3]

- feat: Prefer 'BedrockRerank' over 'AWSBedrockRerank' (#19016)

### `llama-index-readers-papers` [0.3.1]

- fix: make filename hashing more robust (#18318)

### `llama-index-tools-artifact-editor` [0.1.0]

- feat: Create ArtifactEditorToolSpec for editing pydantic objects (#18989)

### `llama-index-utils-workflow` [0.3.3]

- feat: Add label truncation to workflow visualization (#19027)

### `llama-index-vector-stores-opensearch` [0.5.6]

- feat: Add ability to exclude source fields from query response (#19018)

### `llama-index-voice-agents-elevenlabs` [0.2.0-beta]

- fix: Docs corrections + integrating tools for ElevenLabs integration (#19014)

## [2025-06-07]

### `llama-index-core` [0.12.41]

- feat: Add MutableMappingKVStore for easier caching (#18893)
- fix: async functions in tool specs (#19000)
- fix: properly apply file limit to SimpleDirectoryReader (#18983)
- fix: overwriting of LLM callback manager from Settings (#18951)
- fix: Adding warning in the docstring of JsonPickleSerializer for the user to deserialize only safe things, rename to PickleSerializer (#18943)
- fix: ImageDocument path and url checking to ensure that the input is really an image (#18947)
- chore: remove some unused utils from core (#18985)

### `llama-index-embeddings-azure-openai` [0.3.8]

- fix: Azure api-key and azure-endpoint resolution fixes (#18975)
- fix: api_base vs azure_endpoint resolution fixes (#19002)

### `llama-index-graph-stores-ApertureDB` [0.1.0]

- feat: Aperturedb propertygraph (#18749)

### `llama-index-indices-managed-llama-cloud` [0.7.4]

- fix: resolve retriever llamacloud index (#18949)
- chore: composite retrieval add ReRankConfig (#18973)

### `llama-index-llms-azure-openai` [0.3.4]

- fix: api_base vs azure_endpoint resolution fixes (#19002)

### `llama-index-llms-bedrock-converse` [0.7.1]

- fix: handle empty message content to prevent ValidationError (#18914)

### `llama-index-llms-litellm` [0.5.1]

- feat: Add DocumentBlock support to LiteLLM integration (#18955)

### `llama-index-llms-ollama` [0.6.2]

- feat: Add support for the new think feature in ollama (#18993)

### `llama-index-llms-openai` [0.4.4]

- feat: add OpenAI JSON Schema structured output support (#18897)
- fix: skip tool description length check in openai response api (#18956)

### `llama-index-packs-searchain` [0.1.0]

- feat: Add searchain package (#18929)

### `llama-index-readers-docugami` [0.3.1]

- fix: Avoid hash collision in XML parsing (#18986)

### `llama-index-readers-file` [0.4.9]

- fix: pin llama-index-readers-file pandas for now (#18976)

### `llama-index-readers-gcs` [0.4.1]

- feat: Allow newer versions of gcsfs (#18987)

### `llama-index-readers-obsidian` [0.5.2]

- fix: Obsidian reader checks and skips hardlinks (#18950)

### `llama-index-readers-web` [0.4.2]

- fix: Use httpx instead of urllib in llama-index-readers-web (#18945)

### `llama-index-storage-kvstore-postgres` [0.3.5]

- fix: Remove unnecessary psycopg2 from llama-index-storage-kvstore-postgres dependencies (#18964)

### `llama-index-tools-mcp` [0.2.5]

- fix: actually format the workflow args into a start event instance (#19001)
- feat: Adding support for log recording during MCP tool calls (#18927)

### `llama-index-vector-stores-chroma` [0.4.2]

- fix: Update ChromaVectorStore port field and argument types (#18977)

### `llama-index-vector-stores-milvus` [0.8.4]

- feat: Upsert Entities supported in Milvus (#18962)

### `llama-index-vector-stores-redis` [0.5.2]

- fix: Correcting Redis URL/Client handling (#18982)

### `llama-index-voice-agents-elevenlabs` [0.1.0-beta]

- feat: ElevenLabs beta integration (#18967)

## [2025-06-02]

### `llama-index-core` [0.12.40]

- feat: Add StopEvent step validation so only one workflow step can handle StopEvent (#18932)
- fix: Add compatibility check before providing `tool_required` to LLM args (#18922)

### `llama-index-embeddings-cohere` [0.5.1]

- fix: add batch size validation with 96 limit for Cohere API (#18915)

### `llama-index-llms-anthropic` [0.7.2]

- feat: Support passing static AWS credentials to Anthropic Bedrock (#18935)
- fix: Handle untested no tools scenario for anthropic tool config (#18923)

### `llama-index-llms-google-genai` [0.2.1]

- fix: use proper auto mode for google-genai function calling (#18933)

### `llama-index-llms-openai` [0.4.2]

- fix: clear up some field typing issues of OpenAI LLM API (#18918)
- fix: migrate broken `reasoning_effort` kwarg to `reasoning_options` dict in OpenAIResponses class (#18920)

### `llama-index-tools-measurespace` [0.1.0]

- feat: Add weather, climate, air quality and geocoding tool from Measure Space (#18909)

### `llama-index-tools-mcp` [0.2.3]

- feat: Add headers handling to BasicMCPClient (#18919)

## [2025-05-30]

### `llama-index-core` [0.12.39]

- feat: Adding Resource to perform dependency injection in Workflows (docs coming soon!) (#18884)
- feat: Add `require_tool` param to function calling LLMs (#18654)
- fix: make prefix and response non-required for hitl events (#18896)
- fix: SelectionOutputParser when LLM chooses no choices (#18886)

### `llama-index-indices-managed-llama-cloud` [0.7.2]

- feat: add non persisted composite retrieval (#18908)

### `llama-index-llms-bedrock-converse` [0.7.0]

- feat: Update aioboto3 dependency to allow latest version (#18889)

### `llama-index-llms-ollama` [0.6.1]

- Support ollama 0.5.0 SDK, update ollama docs (#18904)

### `llama-index-vector-stores-milvus` [0.8.3]

- feat: Multi language analyzer supported in Milvus (#18901)

## [2025-05-28]

### `llama-index-core` [0.12.38]

- feat: Adding a very simple implementation of an embeddings cache (#18864)
- feat: Add `cols_retrievers` in NLSQLRetriever (#18843)
- feat: Add row, col, and table retrievers as args in NLSQLTableQueryEngine (#18874)
- feat: add configurable allow_parallel_tool_calls to FunctionAgent (#18829)
- feat: Allow ctx in BaseToolSpec functions, other ctx + tool calling overhauls (#18783)
- feat: Optimize get_biggest_prompt for readability and efficiency (#18808)
- fix: prevent DoS attacks in JSONReader (#18877)
- fix: SelectionOutputParser when LLM chooses no choices (#18886)
- fix: resuming AgentWorkflow from ctx during hitl (#18844)
- fix: context serialization during AgentWorkflow runs (#18866)
- fix: Throw error if content block resolve methods yield empty bytes (#18819)
- fix: Reduce issues when parsing "Thought/Action/Action Input" ReActAgent completions (#18818)
- fix: Strip code block backticks from QueryFusionRetriever llm response (#18825)
- fix: Fix `get_function_tool` in function_program.py when schema doesn't have "title" key (#18796)

### `llama-index-agent-azure-foundry` [0.1.0]

- feat: add azure foundry agent integration (#18772)

### `llama-index-agent-llm-compiler` [0.3.1]

- feat: llm-compiler support `stream_step`/`astream_step` (#18809)

### `llama-index-embeddings-google-genai` [0.2.0]

- feat: add gemini embeddings tests and retry configs (#18846)

### `llama-index-embeddings-openai-like` [0.1.1]

- fix: Pass `http_client` & `async_http_client` to parent for OpenAILikeEmbedding (#18881)

### `llama-index-embeddings-voyageai` [0.3.6]

- feat: Introducing voyage-3.5 models (#18793)

### `llama-index-indices-managed-llama-cloud` [0.7.1]

- feat: add client support for `search_filters_inference_schema` (#18867)
- feat: add async methods and blank index creation (#18859)

### `llama-index-llms-anthropic` [0.6.19]

- feat: update for claude 4 support in Anthropic LLM (#18817)
- fix: thinking + tool calls in anthropic (#18834)
- fix: check thinking is non-null in anthropic messages (#18838)
- fix: update/fix claude-4 support (#18820)

### `llama-index-llms-bedrock-converse` [0.6.0]

- feat: add-claude4-model-support (#18827)
- fix: fixing DocumentBlock usage within Bedrock Converse (#18791)
- fix: calling tools with empty arguments (#18786)

### `llama-index-llms-cleanlab` [0.5.0]

- feat: Update package name and models (#18483)

### `llama-index-llms-featherlessai` [0.1.0]

- feat: featherless-llm-integration (#18778)

### `llama-index-llms-google-genai` [0.1.14]

- fix: Google GenAI token counting behavior, add basic retry mechanism (#18876)

### `llama-index-llms-ollama` [0.5.6]

- feat: Attempt to automatically set context window in ollama (#18822)
- feat: use default temp in ollama models (#18815)

### `llama-index-llms-openai` [0.3.44]

- feat: Adding new OpenAI responses features (image gen, mcp call, code interpreter) (#18810)
- fix: Update OpenAI response type imports for latest openai library compatibility (#18824)
- fix: Skip tool description length check in OpenAI agent (#18790)

### `llama-index-llms-servam` [0.1.1]

- feat: add Servam AI LLM integration with OpenAI-like interface (#18841)

### `llama-index-observability-otel` [0.1.0]

- feat: OpenTelemetry integration for observability (#18744)

### `llama-index-packs-raptor` [0.3.2]

- Use global `llama_index` tokenizer in Raptor clustering (#18802)

### `llama-index-postprocessor-rankllm-rerank` [0.5.0]

- feat: use latest rank-llm sdk (#18831)

### `llama-index-readers-azstorage-blob` [0.3.1]

- fix: Metadata and filename in azstorageblobreader (#18816)

### `llama-index-readers-file` [0.4.8]

- fix: reading pptx files from remote fs (#18862)

### `llama-index-storage-kvstore-postgres` [0.3.1]

- feat: Create PostgresKVStore from existing SQLAlchemy Engine (#18798)

### `llama-index-tools-brightdata` [0.1.0]

- feat: brightdata integration (#18690)

### `llama-index-tools-google` [0.3.1]

- fix: `GmailToolSpec.load_data()` calls search with missing args (#18832)

### `llama-index-tools-mcp` [0.2.2]

- feat: enhance SSE endpoint detection for broader compatibility (#18868)
- feat: overhaul `BasicMCPClient` to support all MCP features (#18833)
- fix: McpToolSpec fetch all tools given the empty allowed_tools list (#18879)
- fix: add missing `BasicMCPClient.with_oauth()` kwargs (#18845)

### `llama-index-tools-valyu` [0.2.0]

- feat: Update to valyu 2.0.0 (#18861)

### `llama-index-vector-stores-azurecosmosmongo` [0.6.0]

- feat: Add Vector Index Compression support for Azure Cosmos DB Mongo vector store (#18850)

### `llama-index-vector-stores-opensearch` [0.5.5]

- feat: add filter support to check if a metadata key doesn't exist (#18851)
- fix: dont pass in both `extra_info` and `metadata` in vector store nodes (#18805)

## [2025-05-19]

### `llama-index-core` [0.12.37]

- Ensure `Memory` returns at least one message (#18763)
- Separate text blocks with newlines when accessing `message.content` (#18763)
- reset `next_agent` in multi agent workflows (#18782)
- support sqlalchemy v1 in chat store (#18780)
- fix: broken hotpotqa dataset URL (#18764)
- Use `get_tqdm_iterable` in SimpleDirectoryReader (#18722)
- Pass agent workflow kwargs into start event (#18747)
- fix(chunking): Ensure correct handling of multi-byte characters during AST node chunking (#18702)

### `llama-index-llms-anthropic` [0.6.14]

- Fixed DocumentBlock handling in OpenAI and Anthropic (#18769)

### `llama-index-llms-bedrock-converse` [0.5.4]

- Fix tool call parsing for bedrock converse (#18781)
- feat: add missing client params for bedrock (#18768)
- fix merging multiple tool calls in bedrock converse (#18761)

### `llama-index-llms-openai` [0.3.42]

- Fixed DocumentBlock handling in OpenAI and Anthropic (#18769)
- Remove tool-length check in openai (#18784)
- Add check for empty tool call delta, bump version (#18745)

### `llama-index-llms-openai-like` [0.3.5]

- Remove tool-length check in openai (#18784)

### `llama-index-retrievers-vectorize` [0.1.0]

- Add Vectorize retriever (#18685)

### `llama-index-tools-desearch` [0.1.0]

- Feature/desearch integration (#18738)

## [2025-05-14]

### `llama-index-core` [0.12.36]

- add support for automatic session_id filtering in vector memory blocks (#18730)
- Add feature: support for DocumentBlock in chat messages (#18719)
- Added initial Async methods for BaseIndex (#18711)
- use fs to check ingestion pipeline path (#18680)
- add edge case handling in StreamingAgentChatResponse (#18679)

### `llama-index-embeddings-azure-openai` [0.3.5]

- look for azure openai key env var in auzre embeddings (#18703)
- only get `api_key` if not `use_azure_ad` (#18708)
- fix typo of the if branch of get `api_key` if not `use_azure_ad` (#18720)

### `llama-index-embeddings-cohere` [0.5.0]

- Support Cohere V4 embeddings and V2 client (#18464)

### `llama-index-embeddings-fastembed` [0.3.2]

- Bugfix: FastEmbedEmbedding was missing code to pass extra arguments to the api (#18695)

### `llama-index-graph-stores-neptune` [0.3.3]

- fix: Handle possible OverflowError when getting Neptune node properties (#18687)

### `llama-index-readers-legacy-office` [0.1.1]

- feat: `legacy_office`, Apache Tika based `.doc` reader (#18649)
- chore: fix lagecy office reader bloated metadata (#18696)

### `llama-index-retrievers-vectorize` [0.1.0]

- Add Vectorize retriever (#18685)

### `llama-index-tools-brightdata` [0.1.0]

- Feature/brightdata integration (#18690)

### `llama-index-tools-mcp` [0.1.3]

- MCP one-liners for workflow servers and function tools (#18729)

### `llama-index-tools-openapi` [0.4.0]

- feat Improve OpenAPI and Requests tool capabilities and reliability (#18681)

### `llama-index-tools-requests` [0.4.0]

- feat Improve OpenAPI and Requests tool capabilities and reliability (#18681)

### `llama-index-vector-stores-milvus` [0.8.2]

- fix(MilvusVectorStore): use primary key from milvus by its name instead of 'id' (#18714)

### `llama-index-vector-stores-postgres` [0.5.3]

- Add `IS_EMPTY` support for PGVectorStore (#18667)

### `llama-index-vector-stores-redis` [0.5.1]

- Adding Async Redis Vector Store support (#18675)

## [2025-05-08]

### `llama-index-core` [0.12.35]

- add support for prefilling partial tool kwargs on `FunctionTool` (#18658)
- Fix/react agent max iterations skipping (#18634)
- handling for edge-case serialization in prebuilt workflows like `AgentWorkflow` (#18628)
- memory revamp with new base class (#18594)
- add prebuilt memory blocks (#18607)

### `llama-index-embeddings-autoembeddings` [0.1.0]

- Support for AutoEmbeddings integration from chonkie (#18578)

### `llama-index-embeddings-huggingface-api` [0.3.1]

- Fix dep versions for huggingface-hub (#18662)

### `llama-index-indices-managed-vectara` [0.4.5]

- Bugfix in using cutoff argument with chain reranker in Vectara (#18610)

### `llama-index-llms-anthropic` [0.6.12]

- anthropic citations and tool calls (#18657)

### `llama-index-llms-cortex` [0.3.0]

- Cortex enhancements 2 for auth (#18588)

### `llama-index-llms-dashscope` [0.3.3]

- Fix dashscope tool call parsing (#18608)

### `llama-index-llms-google-genai` [0.1.12]

- Fix modifying object references in google-genai llm (#18616)
- feat(llama-index-llms-google-genai): 2.5-flash-preview tests (#18575)
- Fix last_msg indexing (#18611)

### `llama-index-llms-huggingface-api` [0.4.3]

- Huggingface API fixes for task and deps (#18662)

### `llama-index-llms-litellm` [0.4.2]

- fix parsing streaming tool calls (#18653)

### `llama-index-llms-meta` [0.1.1]

- Support Meta Llama-api as an LLM provider (#18585)

### `llama-index-node-parser-docling` [0.3.2]

- Fix/docling node parser metadata (#186390)

### `llama-index-node-parser-slide` [0.1.0]

- add SlideNodeParser integration (#18620)

### `llama-index-readers-github` [0.6.1]

- Fix: Add follow_redirects=True to GitHubIssuesClient (#18630)

### `llama-index-readers-markitdown` [0.1.1]

- Fix MarkItDown Reader bugs (#18613)

### `llama-index-readers-oxylabs` [0.1.2]

- Add Oxylabs readers (#18555)

### `llama-index-readers-web` [0.4.1]

- Fixes improper invocation of Firecrawl library (#18646)
- Add Oxylabs readers (#18555)

### `llama-index-storage-chat-store-gel` [0.1.0]

- Add Gel integrations (#18503)

### `llama-index-storage-docstore-gel` [0.1.0]

- Add Gel integrations (#18503)

### `llama-index-storage-kvstore-gel` [0.1.0]

- Add Gel integrations (#18503)

### `llama-index-storage-index-store-gel` [0.1.0]

- Add Gel integrations (#18503)

### `llama-index-utils-workflow` [0.3.2]

- Fix event colors of draw_all_possible_flows (#18660)

### `llama-index-vector-stores-faiss` [0.4.0]

- Add Faiss Map Vector store and fix missing index_struct delete (#18638)

### `llama-index-vector-stores-gel` [0.1.0]

- Add Gel integrations (#18503)

### `llama-index-vector-stores-postgres` [0.5.2]

- add indexed metadata fields (#18595)

## [2025-04-30]

- Migrate repo from poetry to uv (#18524)

### `llama-index-core` [0.12.34]

- fix: `aextract_table_summaries` cause unwanted output when showprogress is False (#18528)

### `llama-index-embeddings-cohere` [0.4.1]

- Fix Cohere Embedding Multiprocessing with Custom Endpoint (#18551)

### `llama-index-embeddings-openvino-genai` [0.5.0]

- add openvino genai embedding (#18569)

### `llama-index-llms-bedrock-converse` [0.5.0]

- Add support for AWS Bedrock Application Inference Profiles (#18549)

### `llama-index-llms-google-genai` [0.1.10]

- 2.5-flash-preview tests + structured predict changes/fixes (#18575)
- unlock pillow dep in google genai llm (#18533)
- merge tool messages properly (#18527)

### `llama-index-llms-huggingface-api` [0.4.2]

- Add provider support to HuggingFaceInferenceAPI (#18574)

### `llama-index-llms-vllm` [0.5.1]

- feat: add is_chat_model option (#18552)

### `llama-index-packs-code-hierarchy` [0.5.1]

- Code Hierarchy Agent Pack Issue with Empty and different encoding based files (#18538)

### `llama-index-postprocessor-cohere-rerank` [0.4.0]

- update default model version to v3.0 in CohereRerank (#18579)

### `llama-index-readers-database` [0.4.0]

- Enhance DatabaseReader with new features and improved documentation (#18537)

### `llama-index-tools-mcp` [0.1.2]

- Prevent MCP Connections Hang (#18512)

### `llama-index-vector-stores-opensearch` [0.5.3]

- Add OpensearchVectorClient to conditionally check index existence for AOSS (#18560)

### `llama-index-vector-stores-postgres` [0.5.1]

- Implement aget_nodes and adelete in PGVectorStore (#18515)
- Allow PGVectorStore to allow passing in engines (#18507)

## [2025-04-23]

### `llama-index-core` [0.12.33 / 0.12.33.post1]

- bundle newer tiktoken encodings, bump min tiktoken version (#18509)

### `llama-index-vector-stores-milvus` [0.8.1]

- Milvus Vector Store: Update metadata filtering demo (#18502)

## [2025-04-21]

### `llama-index-core` [0.12.32]

- Fix media resource serialization (#18496)
- fix react agent prompt updates (#18494)

### `llama-index-indices-managed-vectara` [0.4.4]

- Close "session" in VectaraIndex on GC (#18484)

### `llama-index-llms-openai` [0.3.38]

- allow content blocks in openai assistant messages (#18495)

### `llama-index-llms-openvino-genai` [0.1.1]

- fix the openvino llm initialize issue (#18481)

### `llama-index-vector-stores-milvus` [0.8.0]

- MilvusVectorStore: BM25 as default sparse embedding function (#18460)

## [2025-04-16]

### `llama-index-core` [0.12.31]

- Fix/memory multimodal content serialization (#18447)
- add async to memory and postprocessor base classes (#18438)

### `llama-index-callbacks-arize-pheonix` [0.5.1]

- llama index callbacks arize phoenix python version bump (#18466)

### `llama-index-graph-stores-nebula` [0.4.2]

- fix nebula index ddl (#18461)

### `llama-index-indices-managed-vectara` [0.4.3]

- Added `llm_name` argument for Vectara (#18472)

### `llama-index-llms-cohere` [0.4.1]

- expand cohere model support (#18440)

### `llama-index-llms-llama-api` [0.4.0]

- Fix LlamaAPI integration by wrapping OpenAI (#18437)

### `llama-index-llms-perplexity` [0.3.3]

- Update Perplexity Implementation for new models (#1844