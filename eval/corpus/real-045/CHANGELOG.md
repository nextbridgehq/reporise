# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [3.1127.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1126.0...v3.1127.0) (2026-09-04)


### Features

* **client-bedrock:** New AWS REVIEW mode as supported data retention mode for Bedrock models ([cbd9ea9](https://github.com/aws/aws-sdk-js-v3/commit/cbd9ea9a4262cb007ed74da234d52e8feef0402f))
* **client-ec2:** Adds support for ValidateSecurityGroupQuotasForInterface, an API that specifically authorized AWS services use to validate security group rule quotas before creating an elastic network interface. ([f51c3b3](https://github.com/aws/aws-sdk-js-v3/commit/f51c3b3e30327dd6fa45a9b8398422c7078d905d))
* **client-mediatailor:** Elemental MediaTailor now supports two new Monetization Functions lifecycle hooks, Post Ads Response and Pre Manifest Insertion, and a VAST Request function type that calls a VAST or VMAP ad server. This release also adds Yield Optimization with demand from Amazon Publisher Services. ([c238a69](https://github.com/aws/aws-sdk-js-v3/commit/c238a693cf4e9e9fa4bd5ad76f83caa35279ad46))
* **client-service-quotas:** Service Quotas adds the AdjustableAtLevel property to QuotaContext, indicating whether a quota is adjustable at the account or resource level. ([f56bdf2](https://github.com/aws/aws-sdk-js-v3/commit/f56bdf2c0e9581a97b246204dd95b7be1028a6f9))





# [3.1126.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1125.0...v3.1126.0) (2026-09-03)


### Features

* **client-bedrock-agentcore-control:** AgentCore Identity adds Consent Portal APIs to manage portals that let end users grant OAuth authorization for agents to access resources. AgentCore Evaluation adds trace source selection by log group prefix, custom or source log group result destinations, and metrics namespace customization. ([2f82647](https://github.com/aws/aws-sdk-js-v3/commit/2f826477e17f07464f9a8cc1336e9467d9948b37))
* **client-bedrock-agentcore:** Adds log group name prefix trace source selection, custom or source log group result destinations, and metrics namespace customization ([823b2d3](https://github.com/aws/aws-sdk-js-v3/commit/823b2d337b05368b88a488e988f4fc2b24133fae))
* **client-connect:** This release enables TagOnCreate for Rule resource on CreateRule API. It also introduces a new field called PreEvaluationFilters to Rule resource, thereby impacting all Create, Update, Describe and Search APIs for Rules ([18bb14b](https://github.com/aws/aws-sdk-js-v3/commit/18bb14bcc83208229fba893ede04a7cb6e77af05))
* **client-drs:** AWS Elastic Disaster Recovery now includes source server architecture in SourceProperties to identify x86 and ARM64 systems. ([20f19e0](https://github.com/aws/aws-sdk-js-v3/commit/20f19e0e2a30b73cff7dba02f07af83068306657))
* **client-ecs:** Adds a critical parameter to the Amazon ECS managed daemon APIs that controls whether a daemon task failure drains the container instance. Non-critical daemon failures no longer drain the instance or block instance registration. ([2e6a07d](https://github.com/aws/aws-sdk-js-v3/commit/2e6a07d57083a221355891dfb18e9aa129e5987b))
* **client-eks:** Deprecate EncryptionConfig resources field. Amazon EKS encrypts all Kubernetes API data with envelope encryption by default for clusters running Kubernetes version 1.28 or higher, so this field no longer affects which resources are encrypted. ([c66ca41](https://github.com/aws/aws-sdk-js-v3/commit/c66ca41b9a97108402d0e3bd8e467babc35a7bac))
* **client-evs:** Amazon EVS now allows users to set, update, and retrieve values for parameters that apply across all EVS Environments in their account at a regional level, such as the VCF License portability core count. ([803b694](https://github.com/aws/aws-sdk-js-v3/commit/803b694cec8ae130760716bc5d0bb1d531ca67a4))
* **client-guardduty:** Adding support for Sequence Activities in GuardDuty Findings ([5c12a0e](https://github.com/aws/aws-sdk-js-v3/commit/5c12a0eb1bdd18f3df7be39bb5f0c3e15be438b5))
* **client-socialmessaging:** Adding support for WhatsApp Flows with endpoints. ([3a3a620](https://github.com/aws/aws-sdk-js-v3/commit/3a3a6205d3d39f6f98b445323359a938ae59ce1a))
* **client-transcribe:** Amazon Transcribe now supports specifying up to 29 PII entity types in the ContentRedaction configuration of a StartTranscriptionJob request, allowing all supported entity types to be redacted in a single batch transcription job. ([5fb0b9a](https://github.com/aws/aws-sdk-js-v3/commit/5fb0b9a5bbb6cf9c61859a6946034aaf86e9e822))
* **client-transfer:** AWS Transfer Family SFTP Connectors now support specifying an ordered list of AWS Secrets Manager version stages for secret retrieval. This enables seamless credential rotation workflows where external partners may take time to update their systems with new credentials. ([e4bf3ec](https://github.com/aws/aws-sdk-js-v3/commit/e4bf3ecce921aa42320c6b0d89278443d229b898))
* **lib-transfer-manager:** add download directory functionality ([#8274](https://github.com/aws/aws-sdk-js-v3/issues/8274)) ([6e591ee](https://github.com/aws/aws-sdk-js-v3/commit/6e591ee8a054e364dda13cb66a800b6afa4aa9ea))





# [3.1125.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1124.0...v3.1125.0) (2026-09-02)


### Bug Fixes

* **cloudfront-signer:** preserve plus in query strings when signing URLs ([#8283](https://github.com/aws/aws-sdk-js-v3/issues/8283)) ([dd76a0d](https://github.com/aws/aws-sdk-js-v3/commit/dd76a0ddb0440a506442e0a9fc3c16e1502e6e49))


### Features

* **client-appintegrations:** This release adds a force parameter to DeleteApplication and a ConflictException to UpdateApplication, letting customers delete applications with existing associations in one call and get a clear error when an update conflicts with the application's current state. ([62b7304](https://github.com/aws/aws-sdk-js-v3/commit/62b7304c2f18940c625ce2fbf8a8446de80f6d6e))
* **client-bedrock-agentcore:** Batch evaluation now supports up to 10 CloudWatch log groups per CloudWatchLogsSource ([cebd317](https://github.com/aws/aws-sdk-js-v3/commit/cebd317918b8c28a253befaf1207f12005202ed6))
* **client-ec2:** This release adds support to retain interruptible Capacity Reservations in an active state when all capacity is reclaimed. ([336c789](https://github.com/aws/aws-sdk-js-v3/commit/336c7896d1103fd5ad3d049ac4b18cc30b9295a2))
* **client-medialive:** AWS Elemental MediaLive now supports AB forensic video watermarking ([d48e9e1](https://github.com/aws/aws-sdk-js-v3/commit/d48e9e1515040ea6a95361bee682b12ba6814fea))
* **client-mgn:** AWS Transform for migrations adds a second network migration option - apply your source security posture to existing VPCs. Upload a source network file with firewall rules, tag the in-scope VPCs, and AWS Transform matches source subnets to them by CIDR and generates the security groups. ([822144b](https://github.com/aws/aws-sdk-js-v3/commit/822144b21e4ca9bbf41cfd6dc78f1f95c19508d6))
* **client-mwaa:** Enabled customers to clear optional S3 paths (plugins, requirements, and startup script) for their Amazon MWAA environments by accepting empty strings for the associated fields in UpdateEnvironment requests. ([9fa2e0c](https://github.com/aws/aws-sdk-js-v3/commit/9fa2e0c1413fd814aed07d97e34de2aab8c3f321))
* **client-odb:** Adds the ListFlexComponents API for listing the flex components available for a given DB system shape. ([551174b](https://github.com/aws/aws-sdk-js-v3/commit/551174bfc63c2f19cb7db7e9a3bd935d0c57e142))
* **client-sagemaker-featurestore-runtime:** Amazon SageMaker Feature Store now supports the UpdateRecord API, enabling partial updates to individual feature values in an existing Online Store record without rewriting the entire record. This reduces write payloads and latency for high-frequency feature-level writes . ([7192096](https://github.com/aws/aws-sdk-js-v3/commit/71920960e24c2399ab408bb48c32e1af45e80bf9))
* **client-sagemaker:** Amazon SageMaker Feature Store now supports the Standard V2 online store type, which enables feature-level writes to feature groups. You can select Standard V2 when creating a feature group, and update the storage type of an existing feature group via UpdateFeatureGroup. ([5287db7](https://github.com/aws/aws-sdk-js-v3/commit/5287db7fb3bb7269e2ddff8dbf16445914c6ae7b))





# [3.1124.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1123.0...v3.1124.0) (2026-09-01)


### Features

* **client-bedrock-agentcore-control:** Online evaluation configurations now support up to 25 evaluators. CloudWatch Logs data sources for online evaluation now support up to 10 log groups. ([add6274](https://github.com/aws/aws-sdk-js-v3/commit/add6274465d43abc87b6906ae4120ebe781fd117))
* **client-ec2:** Update UserData and UploadPolicy shapes to use SecureBlob ([0369a0e](https://github.com/aws/aws-sdk-js-v3/commit/0369a0ea4d2a035f83ed50bee70c2dde699aaa67))
* **client-guardduty:** Amazon GuardDuty now supports custom detection rules, including APIs to manage rule associations and organization-level configurations. ([c430945](https://github.com/aws/aws-sdk-js-v3/commit/c4309459f0cdefe421f297d62a09718866eaa7db))
* **client-iotsitewise:** AWS IoT SiteWise Scenario Discovery now supports mounting Amazon S3 data directly into pipeline task containers via S3 Access Points, and configuring additional ephemeral storage per task. Mount configurations can be overridden at execution time. See the API guide for details. ([3b3b8a5](https://github.com/aws/aws-sdk-js-v3/commit/3b3b8a5b54bf1d84eb9852d7d33ed5dd69469566))
* **client-kinesis:** Amazon Kinesis Data Streams now supports a dry run feature for data-plane APIs to validate the permissions and request parameters. If all checks complete successfully, the API returns a 'DryRunOperationException', confirming the request would have succeeded without the 'DryRun' parameter. ([b7c1241](https://github.com/aws/aws-sdk-js-v3/commit/b7c1241eb9057be16dd1c8524708bcfd1e2ab0f3))
* **client-lambda:** AWS Lambda now provides configurable control over S3 direct access, allowing you to explicitly enable or disable how functions stream file reads directly from S3 buckets. This gives you flexibility to tune data access behavior based on your workload requirements, independent of memory size. ([b4738db](https://github.com/aws/aws-sdk-js-v3/commit/b4738dbb8a2d21758f9c4ebf005fb6d766bfd417))
* **client-lightsail:** This release adds support for the Amazon Lightsail GetProfile API, which returns the profile for the specified account. ([a05a4bf](https://github.com/aws/aws-sdk-js-v3/commit/a05a4bf26cb6b487c136a4a386de3fd654537d88))
* **client-marketplace-agreement:** This release adds renewal support for AWS Marketplace private offers. Agreements report whether they renew and, if not, why. Renewal terms add price increases, renewal limits, renewal decision deadlines, and payment schedule templates. SearchAgreements adds filters. ([5cffee4](https://github.com/aws/aws-sdk-js-v3/commit/5cffee4c9b6275d77927ff7bbb730c00bf3485e0))
* **client-marketplace-discovery:** GetOfferTerms now returns renewalTerm for offers with pre-authorized renewals, exposing maxRenewals, lockoutPeriod, adjustmentDeadline, priceIncrease (fixed percentage or percentage range), and termTemplates (renewal payment schedules). Enables buyers to view renewal pricing and terms. ([1fbc92c](https://github.com/aws/aws-sdk-js-v3/commit/1fbc92ca1bf046ddbdc7735bf551ed5c4fc3afc2))
* **client-mediaconvert:** Adds support for AAC passthrough. Adds ManifestCues option to support HLS manifest Cue marker passthrough. Adds playback device compatibility mode for DASH H.265 outputs. Adds TTML caption styling options. Adds interlace mode support for XAVC HD Intra CBG profile. ([4f9ca64](https://github.com/aws/aws-sdk-js-v3/commit/4f9ca64dcae7be64090d657721742434c96642e5))
* **client-sesv2:** Added support for managing SMIME signing certificates for email identities, including associating, listing, and disassociating certificates. Added the UpdateConfigurationSet operation to configure message security options such as signing scheme. ([5d6518c](https://github.com/aws/aws-sdk-js-v3/commit/5d6518c22e633a027d6f6256fbb061420546f617))
* **client-taxsettings:** France and Monaco Additional Info changes ([93faab8](https://github.com/aws/aws-sdk-js-v3/commit/93faab8560bc9b101465bc805a9829abe476be5b))
* **clients:** update client endpoints as of 2026-09-01 ([5f5319a](https://github.com/aws/aws-sdk-js-v3/commit/5f5319a0725d161a33214c9f68f9cafcf39f9c74))





# [3.1123.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1122.0...v3.1123.0) (2026-08-31)


### Bug Fixes

* **credential-provider-node:** handle passive credential refresh rejection ([#8281](https://github.com/aws/aws-sdk-js-v3/issues/8281)) ([f36843d](https://github.com/aws/aws-sdk-js-v3/commit/f36843d44080477ce9b677df75d33240d909c653))


### Features

* **client-agent-registry:** Release HTTP and AGUI descriptors to the dataplane model ([3c4c742](https://github.com/aws/aws-sdk-js-v3/commit/3c4c7422f59da24786fc3bd4832fd7e43ac113f2))





# [3.1122.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1121.0...v3.1122.0) (2026-08-31)


### Features

* **client-agent-registry-control:** AWS Agent Registry becomes Generally Available ([e41244e](https://github.com/aws/aws-sdk-js-v3/commit/e41244e9301730ac7632a4e5f67bb2933156769c))
* **client-agent-registry:** AWS Agent Registry becomes Generally Available ([e60306f](https://github.com/aws/aws-sdk-js-v3/commit/e60306f198e7ad374089161aa448602dab590287))
* **client-connect:** Added support for global routing on Amazon Connect Global Resiliency instances. New APIs GetCrossRegionRouting and UpdateCrossRegionRouting allow you to view and control cross-region contact routing between linked instances, so both Regions are active at all times. ([ce41026](https://github.com/aws/aws-sdk-js-v3/commit/ce41026342e42c9454be6c68ef24fe721f8149f2))
* **client-customer-profiles:** This release introduces new APIs for segment membership events allowing segment definition membership events to be exported to a kinesis stream for downstream processing. Additionally, includes new calculated attribute statistic and 2 new segment dimension types. ([be1a9da](https://github.com/aws/aws-sdk-js-v3/commit/be1a9dab4280a118cd0e47c7aaacee919e01c02b))
* **client-devops-agent:** Adds support for Slack bidirectional communication configuration in AWS DevOps Agent agent spaces. ([75bc6d6](https://github.com/aws/aws-sdk-js-v3/commit/75bc6d6da3f88c398be5a737ad01d8d631773fcf))
* **client-kafkaconnect:** Amazon MSK Connect now supports restarting newly created connectors via the asynchronous RestartConnector API. Restart all tasks or only failed tasks, while preserving configuration and committed offsets. This returns a connector operation ARN that you can track with DescribeConnectorOperation. ([8771afa](https://github.com/aws/aws-sdk-js-v3/commit/8771afafd4c1723c29c1745ff8683145a837bda2))
* **client-kinesis:** Adds support for data delivery to Amazon S3 Tables (Apache Iceberg) and general purpose Amazon S3 buckets with new CreateChannel, UpdateChannel, DeleteChannel, DescribeChannel, and ListChannels APIs for Amazon Kinesis Data Streams. ([64ebb05](https://github.com/aws/aws-sdk-js-v3/commit/64ebb058e0b7ae64bd240c7ae325099fc64ab43a))
* **client-pinpoint-sms-voice-v2:** AWS End User Messaging SMS now returns ConditionalBehavior on DescribeRegistrationFieldDefinitions, allowing you to programmatically discover which registration fields are required, optional, or disallowed based on the values of other fields in the same form. ([9cbace1](https://github.com/aws/aws-sdk-js-v3/commit/9cbace13989c31d55c45812ee801a29cf90f00ed))
* **client-quicksight:** This release adds support for managing apps in Amazon QuickSight with ListApps, SearchApps, DescribeApp, DescribeAppPermissions, UpdateAppPermissions, and DeleteApp ([98a4957](https://github.com/aws/aws-sdk-js-v3/commit/98a49570d50f800f74fce9014ec4ab0985fc0775))
* **client-sagemaker:** Amazon SageMaker Batch Transform now supports G6e instances, powered by NVIDIA L40S Tensor Core GPUs. G6e instances are the most cost-efficient GPU instances for deploying generative AI models and the highest-performance GPU instances for spatial computing workloads. ([b063cf7](https://github.com/aws/aws-sdk-js-v3/commit/b063cf77a91073f3b32a33a1386f20978b646059))
* **client-support:** AWS Support now allows up to 10 attachments (150 MB each) per case correspondence, up from 3 at 5 MB. Customers can share large diagnostic logs, heap dumps, and packet captures directly in cases to reduce back-and-forth and speed up resolution. Available in US East, US West, and Europe (Ireland). ([4ddd79c](https://github.com/aws/aws-sdk-js-v3/commit/4ddd79c10633ffa37d957d96313bdffddcba4867))
* **client-workspaces-instances:** Amazon WorkSpaces Core managed instances now support nested virtualization. Customers can enable nested virtualization with supported instance types at launch via CpuOptions.NestedVirtualization in CreateWorkspaceInstance to run hypervisors and virtual machines inside their WorkSpaces Instance. ([29587d1](https://github.com/aws/aws-sdk-js-v3/commit/29587d1236c8805f7f72305e06a011bfc48ae55c))





# [3.1121.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1120.0...v3.1121.0) (2026-08-28)


### Features

* **client-bedrock-agent:** Adds an optional syncSchedule field to CreateDataSource and UpdateDataSource for Managed Knowledge Bases data source connectors, so a data source can sync automatically on a daily, weekly, or monthly schedule. ([a8d3714](https://github.com/aws/aws-sdk-js-v3/commit/a8d3714a751f972452553ba631a98176e6ea584c))
* **client-bedrock-agentcore:** AgentCore Memory now supports direct ingestion into long-term memory via IngestData API ([20d652d](https://github.com/aws/aws-sdk-js-v3/commit/20d652de566b291145576f6e4c24a7c8da4ea2be))
* **client-cognito-identity-provider:** Adds two new operations - GetClientToken which allows M2M auth through the SDK, and DescribeTermsByClient to find which Terms are associated with a user-pool client without knowing the Terms resource id. ([86dffd2](https://github.com/aws/aws-sdk-js-v3/commit/86dffd282f1ac269d1268f9a75f1550df61c5cc6))
* **client-ecs:** Amazon Elastic Container Service - This release adds support for early success criteria on ECS rolling deployments, letting deployment complete once a configurable percentage of tasks are healthy, with configurable BLOCKING (required) or DEFERRED (asynchronous) cleanup of previous service revisions. ([ef22d75](https://github.com/aws/aws-sdk-js-v3/commit/ef22d750f27bd01ff6b88b8e1cc0f34efea8d171))
* **client-healthlake:** New HealthLake API, RestoreFHIRDatastore, providing the capability to restore active datastores to a point in time within the last 30 days or recover a deleted datastore from the delete snapshot. ([6249174](https://github.com/aws/aws-sdk-js-v3/commit/6249174262656b83d0bba16cf59ba892b849a707))
* **client-partnercentral-selling:** Releasing PARC, new APN Program that lets sellers add solftware revenue details to aws opportunity summary ([2b6350f](https://github.com/aws/aws-sdk-js-v3/commit/2b6350f01269baa5e6d079a93ff9f6b0804d982f))





# [3.1120.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1119.0...v3.1120.0) (2026-08-27)


### Features

* **client-cloudwatch-logs:** Added resultCount to QueryStatistics in GetQueryResults. This field returns the total number of output rows in the final result set, helping customers programmatically determine whether a query produced results after all operations including post-aggregation filters. ([0e4d242](https://github.com/aws/aws-sdk-js-v3/commit/0e4d242b71b24dc7305d6a3b7356e052bd969e67))
* **client-codedeploy:** Added a deploymentMode parameter to CreateDeployment. Set it to RESTART to restart an EC2 and on-premises fleet, using the last successful revision, honoring Deployment Configuration. ([78d4f96](https://github.com/aws/aws-sdk-js-v3/commit/78d4f9640b6a9fe509f5a466cfa821052f76a614))
* **client-cognito-identity-provider:** Adds the AdminDeleteSoftwareToken API operation, enabling administrators to remove a user's registered TOTP (software token) MFA configuration from a user pool. ([f661beb](https://github.com/aws/aws-sdk-js-v3/commit/f661bebc4db63a4cea2e02b2ec722e82e4908425))
* **client-datazone:** Add cascadeDelete to DeleteDomain. When specified, DataZone recursively deletes all projects, environments, subscriptions, and their underlying AWS resources before removing the domain. Deletion progress is reported via deleteProgress and resource failures via failureReasons on GetDomain. ([3a74dc4](https://github.com/aws/aws-sdk-js-v3/commit/3a74dc4b94d54616c93dabef996e6680c2ef1edb))
* **client-ec2:** EC2 allows AMI owners to define compatible instance types on their AMIs, blocking RunInstances calls automatically for launches on non-permitted instance types. ([311b3b2](https://github.com/aws/aws-sdk-js-v3/commit/311b3b26dbad32a32a94713fca4ffb65eaf2ec61))
* **client-lambda-microvms:** Added InsufficientCapacityException to RunMicrovm for capacity-related failures. Added lifecycle status field (AVAILABLE, DEPRECATED) to ListManagedMicrovmImageVersions. Added ConflictException to CreateMicrovmAuthToken and CreateMicrovmShellAuthToken for unregistered MicroVMs. ([72a8ff8](https://github.com/aws/aws-sdk-js-v3/commit/72a8ff80923f172e73030a0b28d9946fb16d0ffa))
* **client-rds:** Adding support for the full snapshot size, in bytes, of DB instance snapshots. ([ab2f66f](https://github.com/aws/aws-sdk-js-v3/commit/ab2f66f5f52d48690e0e914fb1cf52c290837ec5))





# [3.1119.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1118.0...v3.1119.0) (2026-08-26)


### Features

* **client-devops-agent:** AWS DevOps Agent now supports trigger filter groups for Release Readiness Review, letting you control when the capability auto-triggers based on webhook events and target branches. ([bc3d53d](https://github.com/aws/aws-sdk-js-v3/commit/bc3d53d55006d95d34928b8044289a080f3fe512))
* **client-ec2:** Adds deleting state to possible VPC States. ([43091d5](https://github.com/aws/aws-sdk-js-v3/commit/43091d55b3ca5ef039506afdcbd9c293162c61f3))
* **client-license-manager-user-subscriptions:** Released support for License Expiry field in ListProductSubscriptions API ([454d7f7](https://github.com/aws/aws-sdk-js-v3/commit/454d7f7ffbfe044a534ac3f874c108e4eae1739e))
* **client-network-firewall:** Adding new status enum for Firewalls. ([4cb21cb](https://github.com/aws/aws-sdk-js-v3/commit/4cb21cb3b82b7dbb9bdad31694d084e517f8047a))
* **client-sagemaker:** Amazon SageMaker AI now supports ml.g7 instances for model optimization. You can now run model optimization jobs on ml.g7 instances, in supported AWS Regions. ([6d5e106](https://github.com/aws/aws-sdk-js-v3/commit/6d5e106634bcc6f63cf148bb3339a64f3d5c0404))





# [3.1118.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1117.0...v3.1118.0) (2026-08-25)


### Features

* **client-auto-scaling:** Adds support for Distribution Segments in mixed instances policies, providing ordered prioritization across On-Demand Capacity Reservations, Capacity Blocks, interruptible Capacity Reservations, and On-Demand capacity. ([986ae92](https://github.com/aws/aws-sdk-js-v3/commit/986ae9241a144e9451649a2a9ffaff34e0f92580))
* **client-devops-agent:** Adds the UpdateApprovalAction API for resolving agent action approvals in AWS DevOps Agent agent spaces. ([6dfd3b3](https://github.com/aws/aws-sdk-js-v3/commit/6dfd3b3406c6fb6e62d22e52e75ea4868771874a))
* **client-ec2:** Fleet feature to support Capacity Reservation Resource Groups with Amazon EC2 Capacity Blocks and interruptible Capacity Reservations ([144e994](https://github.com/aws/aws-sdk-js-v3/commit/144e9945727c1f0ad29a8802a71252ccfa45685b))
* **client-eks:** This feature would give customers the ability to tune TerminatedPodGcThreshold configuration in an Amazon EKS cluster. ([bdc0470](https://github.com/aws/aws-sdk-js-v3/commit/bdc0470b66fbc407e269b9ce8585b89f9e88f1b6))
* **client-evs:** EVS now supports i7i.metal-48xl EC2 bare metal instance type, delivering high random IOPS performance with real-time latency, ideal for IO intensive and latency-sensitive workloads such as transactional databases, real-time analytics, and AI ML pre-processing. ([7b66b72](https://github.com/aws/aws-sdk-js-v3/commit/7b66b723ef49dd23c2c0d75519f158afdc4ff339))
* **client-iam-toolbox:** AWS Identity and Access Management (IAM) announces access troubleshooter, helping you debug access denied errors faster. Supported error messages now include an identifier you can use to retrieve detailed evaluations of the policies considered and their results. Preview in US East (N. Virginia). ([3187bf7](https://github.com/aws/aws-sdk-js-v3/commit/3187bf7af85ea69be074c7e116a47eaf1fc5aacc))
* **client-iot:** As part of this release, we are extending capability of AWS IoT Rules Engine to support IoT InfluxDB Action. The IoT InfluxDB action lets customers send messages from IoT sensors and applications to InfluxDB. ([9e82d71](https://github.com/aws/aws-sdk-js-v3/commit/9e82d71cdf27d94e117e7cbe4246c45b6896fbfa))
* **clients:** update client endpoints as of 2026-08-25 ([c732c7a](https://github.com/aws/aws-sdk-js-v3/commit/c732c7aef2a152da059c8c3e8095b95fba74f0a4))





# [3.1117.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1116.0...v3.1117.0) (2026-08-24)


### Features

* **client-bedrock:** Adds support for specifying an inference profile ID or ARN, or an application inference profile ARN as the target model in CreateAdvancedPromptOptimizationJob. ([9110f46](https://github.com/aws/aws-sdk-js-v3/commit/9110f46bc465f2e48dde0cf60a01a2237c64c149))
* **client-connect-contact-lens:** This release adds the ExtractedInformation segment to the ListRealtimeContactAnalysisSegments API, enabling customers to retrieve information extracted from real-time contact analysis. ([9c5bda8](https://github.com/aws/aws-sdk-js-v3/commit/9c5bda85ffcdbe88f13cf0523a7db2dd8bbb9c24))
* **client-connect:** This release adds the ExtractedInformation segment to the ListRealtimeContactAnalysisSegmentsV2 API, enabling customers to retrieve information extracted from real-time contact analysis. ([775d1ad](https://github.com/aws/aws-sdk-js-v3/commit/775d1ad448656964101a68254d6f3bc427cc1c71))
* **client-dsql:** Corrected the validation pattern on the ServiceName response field in the GetVpcEndpointServiceName API to match the values Amazon Aurora DSQL actually returns. ([1b689a9](https://github.com/aws/aws-sdk-js-v3/commit/1b689a9f60c4e25b68c5bda5dc13099a832ab7d2))
* **client-elementalinference:** Added support for the GetFixture API, enabling customers to retrieve the details of a fixture from its fixture ID, and added the access role ARN to the CreateFeed, GetFeed, and UpdateFeed responses. ([d4b7183](https://github.com/aws/aws-sdk-js-v3/commit/d4b71834e5c6b1ec7578383b377ca56cb5fa15ff))
* **client-kafka:** Amazon MSK Replicator now supports OAuth authentication when connecting to external Apache Kafka clusters, enabling customers to replicate data from clusters that require OAuth for client authentication. This new capability is supported in all AWS Regions where MSK Express brokers are available. ([a461b5a](https://github.com/aws/aws-sdk-js-v3/commit/a461b5a05e729c86fa25cbea2a50c8a212229059))
* **client-launch-wizard:** Added accountConstraints and patternType to GetWorkload, ListWorkloads, GetWorkloadDeploymentPattern and ListWorkloadDeploymentPatterns for Launch Wizard ([721b9f4](https://github.com/aws/aws-sdk-js-v3/commit/721b9f472cd55b438546f4a381bb34f908def7c0))
* **client-securityagent:** Adding private and self-signed certificate configuration support for penetration tests ([42f6ecb](https://github.com/aws/aws-sdk-js-v3/commit/42f6ecb8005948dd807a6dda70d65bf04f604df9))
* **client-timestream-influxdb:** Service-managed parameter groups now only apply optimized defaults to DB Clusters automatically. New field effectiveDbParameterGroupIdentifier surfaces the parameter group actually applied. ([8c7f04c](https://github.com/aws/aws-sdk-js-v3/commit/8c7f04cdea238dab23f4f43c9e368937931686e9))





# [3.1116.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1115.0...v3.1116.0) (2026-08-21)


### Features

* **client-bedrock-agentcore-control:** Update Dataset schema to THIRDPARTYEVALUATIONV1 ([f0fe8db](https://github.com/aws/aws-sdk-js-v3/commit/f0fe8db338215ab7282bb6dc28a45d633c38390a))
* **client-bedrock-agentcore:** Increase spans count from 1k to 20k ([e83264a](https://github.com/aws/aws-sdk-js-v3/commit/e83264aa59df69c8c79c73afcff152ebf9f0f14d))
* **client-cloudwatch:** Allows customers to specify an initial warm up period to wait for metrics to arrive when creating metric or log alarms ([e354f16](https://github.com/aws/aws-sdk-js-v3/commit/e354f162a662f9a7037e0749079b85fce50c1d23))
* **client-device-farm:** Added support to CreateRemoveAccessSession for selecting a server version on the mobile WebDriver endpoint. ([d91e09c](https://github.com/aws/aws-sdk-js-v3/commit/d91e09c83fde16fc9c9a0c2cb4f3cfe093ea6636))
* **client-kinesis:** Generate account endpoint for Kinesis Data Streams requests when the account ID is available ([ed9966e](https://github.com/aws/aws-sdk-js-v3/commit/ed9966e2cf2557ed22b64f9be573c618466c2f26))





# [3.1115.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1114.0...v3.1115.0) (2026-08-20)


### Features

* **client-amplify:** Increased the maximum allowed length from 255 to 4,096 characters to support longer access tokens. ([f7f8ecd](https://github.com/aws/aws-sdk-js-v3/commit/f7f8ecd1b8b45ba69bb48d1ac61a5bafc2a2d672))
* **client-arc-region-switch:** Adds support for Rds switchover read replica for Oracle databases in Region switch plans ([85ffb20](https://github.com/aws/aws-sdk-js-v3/commit/85ffb20a7857736b13916df32017903c6fd0b3e0))
* **client-batch:** AWS Batch now supports a new compute environment type that provides fully managed EC2 capacity with broader compute flexibility than Fargate, including GPU instances, bare metal, and specific instance type selection, without infrastructure management overhead. ([9c559a7](https://github.com/aws/aws-sdk-js-v3/commit/9c559a7366166cbe4e81c2752eb1c26696a884a9))
* **client-cloudfront:** Added SigV4a as a supported signing protocol for Origin Access Control (OAC), enabling CloudFront to sign requests to Amazon S3 Multi-Region Access Point (S3-MRAP) origins. ([9547629](https://github.com/aws/aws-sdk-js-v3/commit/95476293d5fa70f266cb4aa4c54ecebce9c771ce))
* **client-direct-connect:** This release adds custom route prefix pool allocations for Direct Connect. You can set IPv4 and IPv6 route prefix counts on private and transit virtual interfaces, and view pool size and unallocated counts on connections and LAGs, plus direct connect gateway attachment prefix allocation totals. ([a94fb97](https://github.com/aws/aws-sdk-js-v3/commit/a94fb9783b97be5c59ef543ea7448d0e09f6f048))
* **client-ec2:** EC2 marks UEFI instance metadata field as sensitive. ([c232746](https://github.com/aws/aws-sdk-js-v3/commit/c232746ad78da7961a997005c6102943c392c30c))
* **client-lambda:** Adds support for full JSON resource-based policies, enabling customers to create, retrieve, update, and delete function resource policies as complete JSON documents. ([72573a2](https://github.com/aws/aws-sdk-js-v3/commit/72573a2ad860a406a0fe742dfd40b50458b6153d))
* **client-sagemaker:** Added IAM Identity Center (IdC) support to CreatePartnerApp and UpdatePartnerApp APIs. Added Customer Managed Key (CMK) support to CreateMlflowApp and DescribeMlflowApp. ([5548588](https://github.com/aws/aws-sdk-js-v3/commit/5548588739d30ba5b7ebf1c6a88fa5749adb15b0))
* **client-sesv2:** Amazon SES now supports per-message tracking overrides. You can use the new ConfigurationOverrides parameter in SendEmail and SendBulkEmail to enable or disable open and click tracking for individual messages without changing your account-level or configuration set settings. ([da56caa](https://github.com/aws/aws-sdk-js-v3/commit/da56caa551406c67f4add96bcb7a98ac9ad9ec5d))





# [3.1114.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1113.0...v3.1114.0) (2026-08-19)


### Features

* **client-account-access:** Adds throttling exceptions to operation outputs that were previously inconsistent with other operations. ([1e39b38](https://github.com/aws/aws-sdk-js-v3/commit/1e39b38544c7b77246db936bc6313163f98718b9))
* **client-batch:** AWS Batch now supports managing CloudWatch Container Insights on compute environments via CreateComputeEnvironment and UpdateComputeEnvironment. ([f77fc37](https://github.com/aws/aws-sdk-js-v3/commit/f77fc37f101238d66a1849924da42be3ac50f4c5))
* **client-bedrock-agentcore-control:** AgentCore Memory now supports Flexible Namespaces ([65c89d6](https://github.com/aws/aws-sdk-js-v3/commit/65c89d6d82897e07d0d671fbd0a3a0a44a93a9a2))
* **client-bedrock-agentcore:** AgentCore Memory now supports Flexible Namespaces and Non-Conversational Payloads in CreateEvent API ([a0d8fb6](https://github.com/aws/aws-sdk-js-v3/commit/a0d8fb6df9d13bd1f22f89c1a5defef183becaf4))
* **client-eks:** Adds support for EKS cluster certificate authorities (CA) ([a1316ea](https://github.com/aws/aws-sdk-js-v3/commit/a1316eaec0734d880bdb975c082110f36d3d7180))
* **client-medialive:** AWS Elemental MediaLive now supports video cropping and output positioning. Use cropRectangle and outputPositionRectangle to position the encoded video within the output frame, with the surrounding area filled with black. ([2bf1331](https://github.com/aws/aws-sdk-js-v3/commit/2bf1331a81cddad987b30380c685cc3b4f85f18b))
* **client-redshift-serverless:** Amazon Redshift Enhanced System Table Retention that allows customers to store their system table data directly in S3 Tables in customer's account instead of Redshift Managed Storage ([73ad53c](https://github.com/aws/aws-sdk-js-v3/commit/73ad53c311578c41c4420d71835f63ff021b703a))
* **client-redshift:** Amazon Redshift enhanced System Table retention that allows customers to store their system table data directly in S3 Tables in customer's account instead of Redshift Managed Storage ([a46d1f9](https://github.com/aws/aws-sdk-js-v3/commit/a46d1f96345459f8c606642be702b8a723d97d51))
* **client-vpc-lattice:** Amazon VPC Lattice now supports modification of private DNS options on Service Network VPC Associations ([92c89b2](https://github.com/aws/aws-sdk-js-v3/commit/92c89b2723c281f6fc8d2562ec86dbd3c9716bdf))
* **lib-transfer-manager:** add file based download api and worker thread based download. ([#8259](https://github.com/aws/aws-sdk-js-v3/issues/8259)) ([b2d6035](https://github.com/aws/aws-sdk-js-v3/commit/b2d60357c87e86ce7da8902c9bd243bcc3bb34b2))





# [3.1113.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1112.0...v3.1113.0) (2026-08-18)


### Bug Fixes

* **token-providers:** update SSO refresh throttle per session ([#8268](https://github.com/aws/aws-sdk-js-v3/issues/8268)) ([ac44fb0](https://github.com/aws/aws-sdk-js-v3/commit/ac44fb0458e60ede908be394e814a542803ffb17))


### Features

* **client-entityresolution:** Added ResourceNotFoundException to DeleteSchemaMapping, DeleteMatchingWorkflow, DeleteIdMappingWorkflow, and DeleteIdNamespace. These operations now return a 404 ResourceNotFoundException (previously a 200 Success) when the target resource does not exist. ([860ccc2](https://github.com/aws/aws-sdk-js-v3/commit/860ccc2017d41a2fdc590eb1994b82ecb516ce93))
* **client-marketplace-catalog:** Introducing two new APIs, DescribeAssessment and ListAssessments. These APIs expose validation issues on Marketplace resources. The validation issues are exposed via a newly created resource called Assessment. ([a2a6ab2](https://github.com/aws/aws-sdk-js-v3/commit/a2a6ab2fa2efc9f7d153df8a8ccd223878246b18))
* **client-medialive:** AWS Elemental MediaLive now supports SCTE-35 marker passthrough without IDR frame insertion for CMAF Ingest, MediaPackage V2, and transport stream outputs. ([b93c2f3](https://github.com/aws/aws-sdk-js-v3/commit/b93c2f346ea5540ad7fef15147c0a1f4ebdf1627))
* **client-outposts:** AWS Outposts now supports VPC Endpoint configuration in CreatePrivateConnectivityConfig, enabling scoped private connectivity with provisioning role creation for secure outpost installations ([74c9d45](https://github.com/aws/aws-sdk-js-v3/commit/74c9d45862ce98dea54768e85412952f85d85e65))
* **client-workspaces:** Amazon WorkSpaces now supports nested virtualization, allowing you to run hypervisors and virtualization-based workloads within your WorkSpaces. You can enable or disable nested virtualization when creating a WorkSpace or by modifying an existing WorkSpace's properties. ([b15dc81](https://github.com/aws/aws-sdk-js-v3/commit/b15dc8120b455b776d7a79789ca767b8d38c687c))





# [3.1112.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1111.0...v3.1112.0) (2026-08-17)


### Features

* **client-bedrock-agent-runtime:** AgenticRetrieveStream API now supports Amazon Bedrock AgentCore Memory. Use the new memoryConfiguration parameter to continue a session from short-term memory and retrieve from long-term memory. ([cd02310](https://github.com/aws/aws-sdk-js-v3/commit/cd02310c5f22c50a5cd7841d868b8b5133ded163))
* **client-bedrock-agentcore-control:** Adds implementations of third-party evaluators, both managed-as-a-service and as templates within custom evaluators. ([f34b614](https://github.com/aws/aws-sdk-js-v3/commit/f34b614ac620e2eda1acff4413b559fb42d57092))
* **client-connect:** This release adds new APIs to create, describe, update, delete, and list extraction definitions, enabling customers to manage lifecycle of extraction definition resources. Additionally, this release adds new event sources for Rules related to ACW and new action to Extract Information. ([7e3a6ef](https://github.com/aws/aws-sdk-js-v3/commit/7e3a6ef737a6facc14e74b1551b49c98bf0c66eb))
* **client-drs:** AWS Elastic Disaster Recovery (AWS DRS) now offers Recovery Plans to recover multi-server applications in the right order in one action. Define the launch sequence once, with ordered steps and wait times, and DRS runs it automatically. Validate with non-disruptive drills and monitor in real time. ([3c0ff26](https://github.com/aws/aws-sdk-js-v3/commit/3c0ff266264be0ee6c2c2d59b00e1400421ba7b2))
* **client-ecr:** Documentation update for the ECR PutReplicationConfiguration API to increase the replication rule limit from 10 to 25 ([dc40608](https://github.com/aws/aws-sdk-js-v3/commit/dc40608182e0bdaa9f2827432842f204f1ad6350))
* **client-geo-maps:** Amazon Location Service now supports POI density and category filtering on dynamic maps. The GetStyleDescriptor API adds two optional parameters. PoiDensity (Off to VeryDense) controls POI volume, and PoiCategories filters by up to nine categories. Available on HERE and Grab map styles. ([629fb9e](https://github.com/aws/aws-sdk-js-v3/commit/629fb9e12a97f62946cc9606baf7b88870ab8d17))
* **client-organizations:** Add new Transfer Responsibility error codes and document related CloudTrail events for accepting and terminating a Transfer Responsibility. ([7ec2697](https://github.com/aws/aws-sdk-js-v3/commit/7ec2697329f0b50cc36577d9a6fc313999dd41c3))





# [3.1111.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1110.0...v3.1111.0) (2026-08-14)


### Features

* **client-bedrock-agent-runtime:** Adds CheckIngestedDocumentAcl and GetIngestedDocumentAcl APIs to Amazon Bedrock Knowledge Bases. Customers can verify user access to documents based on ingested ACLs and retrieve full ACL details including allow and deny entries, enabling validation of ACL ingestion without test retrievals. ([e86c420](https://github.com/aws/aws-sdk-js-v3/commit/e86c42049cc69793f80c332bd9829ba6871153ad))
* **client-bedrock-agentcore-control:** Adds AgentCore Payments support for CMK, Marketplace Subscriptions and QuickCreate ([39108eb](https://github.com/aws/aws-sdk-js-v3/commit/39108eb0d601bb5916971f56dc8573ec17842cf8))
* **client-bedrock-agentcore:** Add support for the Machine Payments Protocol (MPP) and x402 upto scheme payments protocol in Amazon Bedrock AgentCore Payments. Customers can now pay for MPP-gated resources and also pay services which requires upto scheme in x402 ([7fdf457](https://github.com/aws/aws-sdk-js-v3/commit/7fdf457a8a7ff25eb019ef61c074158a3630816a))
* **client-glue:** Added support for associating glossary terms with iterable form items, such as table columns. ([4c2e27d](https://github.com/aws/aws-sdk-js-v3/commit/4c2e27d138f73f804774572c7772bcfd6a44006c))
* **client-mwaa-serverless:** Adds support for Consuming code for MWAA Serverless ([e3edae2](https://github.com/aws/aws-sdk-js-v3/commit/e3edae27ddc8bcaf3e30f5ec93abdae0e013fae2))
* **client-observabilityadmin:** CloudWatch Logs centralization rules now support tag propagation. You can configure a TagPropagationConfiguration on your centralization rule to automatically sync resource tags from source to destination log groups, with configurable conflict resolution strategies. ([c57d7a4](https://github.com/aws/aws-sdk-js-v3/commit/c57d7a4cd3b279d750cc035e8861f1b2c8857da7))
* **client-sagemaker:** Release support for g7.2xlarge, g7.4xlarge, g7.8xlarge, g7.12xlarge, g7.24xlarge, and g7.48xlarge instance types for SageMaker HyperPod ([7198c19](https://github.com/aws/aws-sdk-js-v3/commit/7198c1938d7897dc4f3839b04d8a55dba0f75c4b))
* **clients:** update client endpoints as of 2026-08-14 ([1e7a280](https://github.com/aws/aws-sdk-js-v3/commit/1e7a28061dde539727980cb25689db3c50d1507e))





# [3.1110.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1109.0...v3.1110.0) (2026-08-13)


### Features

* **client-acm:** This change allows customers to update their existing email-validated certificates to use the DNS validation method. ([71c194a](https://github.com/aws/aws-sdk-js-v3/commit/71c194a4678abd7a368925a38c5b63f411fbd483))
* **client-auto-scaling:** Amazon EC2 Auto Scaling now supports terminating multiple instances in a single TerminateInstanceInAutoScalingGroup call via the new InstanceIds parameter, returning an Activities list. LaunchInstances now returns IdempotentCallInProgressFault for duplicate client tokens. ([ee70798](https://github.com/aws/aws-sdk-js-v3/commit/ee707980d238c2b5028e03084914a3398ce92709))
* **client-cleanrooms:** This release adds support for minimum aggregation thresholds and comparison controls to the Custom analysis rule type. ([1f84f2a](https://github.com/aws/aws-sdk-js-v3/commit/1f84f2ae77a1cf4aed0b61dafba5da358894d61f))
* **client-codecommit:** Added the GetBlobDifferences API operation, which returns line-level diffs between two blob versions without requiring a local clone. Returns structured hunks with context, additions, and deletions. Supports pagination for large diffs. ([f1165c6](https://github.com/aws/aws-sdk-js-v3/commit/f1165c620804c3e7e1b035ecb9e083c723b8fba3))
* **client-connect:** Adds the StartAssistantContact API to start chat contacts handled by an AI agent. Adds SegmentAttributes to StartWebRTCContact, and corrects its error response to now receive AccessDeniedException (previously returned as an internal server error due to a missing error declaration). ([67f9b7b](https://github.com/aws/aws-sdk-js-v3/commit/67f9b7bb9bed253cc03580527faf7a94a2ebb2bf))
* **client-securityagent:** Add support for setting a maximum task-hour budget cap on penetration tests and code reviews, and for revalidating previously reported findings via a new REVALIDATION job type. ([aba75d7](https://github.com/aws/aws-sdk-js-v3/commit/aba75d728bf5a19eebc7afa1c78df8f18d9ae8d0))





# [3.1109.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1108.0...v3.1109.0) (2026-08-12)


### Features

* **client-dsql:** Improved validation of Kinesis stream ARN format to ensure only valid ARN characters are accepted ([f571a2a](https://github.com/aws/aws-sdk-js-v3/commit/f571a2af01532cc3216fa1a60c1515bd32dd2d8f))
* **client-iam:** Introduced role manager, an IAM capability that automatically sets up the IAM roles your AWS services need. When you set up a supported service in the console, role manager creates a role for you or reuses an existing one from an AWS-managed template. ([1f81145](https://github.com/aws/aws-sdk-js-v3/commit/1f81145e047a2ddb9b7d4facb144fa6b6254d865))
* **client-mediaconnect:** AWS MediaConnect now supports tuning the internal recovery latency between Router Inputs and Outputs to prioritize stream quality versus end-to-end latency. ([1ecada3](https://github.com/aws/aws-sdk-js-v3/commit/1ecada3cb026b728ec2e7efe5b855cbe746c4267))
* **client-odb:** Adds support for Oracle Exadata on Exascale Infrastructure (ExaDB-XS) resources including storage vaults and VM clusters. ([9fa1607](https://github.com/aws/aws-sdk-js-v3/commit/9fa1607083b5c712aa9299332684da5d6428d1ba))
* **client-quicksight:** Added APIs for DLP with Microsoft Purview (manage configs with label enforcement across Spaces, Chat, Knowledge Bases), Approval Workflows (CRUD for policies on asset sharing for Agents, Knowledge Bases, Spaces), and Limits Management (limit profiles for index storage and agent hours per user). ([b8913fb](https://github.com/aws/aws-sdk-js-v3/commit/b8913fb592fddb4ea99e1075e18932c03589827a))
* **client-wellarchitected:** This change releases the Well-Architected Agent, a generative AI service that analyzes a customer's AWS environment and delivers personalized, prioritized recommendations across cost, security, performance, and resilience. ([72d3422](https://github.com/aws/aws-sdk-js-v3/commit/72d3422bb3c0049573dc1b88b98af7045ae08261))





# [3.1108.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1107.0...v3.1108.0) (2026-08-11)


### Bug Fixes

* **lib-transfer-manager:** optimize worker HTTP connections and file I/O ([#8256](https://github.com/aws/aws-sdk-js-v3/issues/8256)) ([3ea6bc4](https://github.com/aws/aws-sdk-js-v3/commit/3ea6bc4b05b3acd358b4755bea1f3c42d99f8de5))


### Features

* **client-account-access:** Adds SDK support for AWS IAM account access manager, a feature that enables mapping of IAM roles to the users and groups in AWS IAM Identity Center. ([536036b](https://github.com/aws/aws-sdk-js-v3/commit/536036b252511b2d4c34fc903714b5341b115b1f))
* **client-bedrock-agentcore:** Adding online eval arn as input for recommendation API ([a0d8503](https://github.com/aws/aws-sdk-js-v3/commit/a0d8503e677822f36adf6357f670cea7b87cf64e))
* **client-cleanrooms:** Adds support for exporting redacted query execution logs in AWS Clean Rooms ([dc4ece1](https://github.com/aws/aws-sdk-js-v3/commit/dc4ece15ba91749e29fb9961a7cdfca343630996))
* **client-connect:** Seven new APIs for managing custom metrics, including create, describe, update, and delete. Using Custom Metrics, customers of Amazon Connect Customer can tailor analytics dashboards to their needs by applying custom thresholds, filters, and calculations to one or more out of the box measurements. ([97209f3](https://github.com/aws/aws-sdk-js-v3/commit/97209f36ed978a84c1e4bf1c8fda747def813e71))
* **client-datazone:** GetSubscriptionGrant now returns materialized asset scope name for mapping Lake Formation data cell filters or Redshift views to subscription grants. ([95ff8a9](https://github.com/aws/aws-sdk-js-v3/commit/95ff8a96ce8c5d619a760b153b22b40c58c69cd9))
* **client-eks:** This feature would give customers the ability to selectively tune certain configurations of Kubernetes control plane components in an Amazon EKS cluster. ([6d5d141](https://github.com/aws/aws-sdk-js-v3/commit/6d5d1413111d44ff029016c81bdc226c542fd430))
* **clients:** update client endpoints as of 2026-08-11 ([60a8bce](https://github.com/aws/aws-sdk-js-v3/commit/60a8bce439befd29cbee3e3938b229e654c709e3))





# [3.1107.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1106.0...v3.1107.0) (2026-08-10)


### Features

* **client-connect:** Added Malay language option to use AI to automatically fill evaluation forms in Malay ([6f82fc3](https://github.com/aws/aws-sdk-js-v3/commit/6f82fc3ae38a42ead056406e895cee05cdd1622c))
* **client-elementalinference:** Added support for the SearchFixtures API and DataSourceConfiguration, enabling customers to map fixture event data onto clipping outputs for improved feature accuracy. ([8a63a39](https://github.com/aws/aws-sdk-js-v3/commit/8a63a39da7312385da2688ea00d1b6d0bf6574d0))
* **client-medialive:** Added VirtualSourceAddress to multicast output destinations for MediaLive Anywhere channels. Specifies the source IP address for outbound multicast packets when downstream networks enforce source-IP filtering. ([dc24c64](https://github.com/aws/aws-sdk-js-v3/commit/dc24c644a6c8380230b7f35eaa874dd697af8faa))
* **client-sagemaker-runtime:** Added the PrefixAwareId header to InvokeEndpoint and InvokeEndpointWithResponseStream. This optional parameter serves as a routing hint for endpoints configured with prefix-aware routing, differentiating routing decisions for requests that share the same prompt prefix. ([8345d8e](https://github.com/aws/aws-sdk-js-v3/commit/8345d8ef198ac6757a68236eadeb289c03bf6f4b))
* **client-sagemaker:** Added PREFIX AWARE routing strategy and PrefixAwareRoutingConfig to CreateEndpointConfig. Configure PrefixLength and ConcurrencyThreshold to route requests that share the same prompt prefix to the same instance. ([c0ce67e](https://github.com/aws/aws-sdk-js-v3/commit/c0ce67e2f937791fd90ea056b8ecf6925958abfc))





# [3.1106.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1105.0...v3.1106.0) (2026-08-07)


### Features

* **client-amplify:** Increased the maximum allowed length of the oauthToken parameter in the CreateApp and UpdateApp APIs to support longer OAuth tokens issued by third-party Git providers. ([b239e29](https://github.com/aws/aws-sdk-js-v3/commit/b239e29295315bacf5d76a343e6d5aa397987642))
* **client-connect:** Supports updating the task template associated with in-progress task contacts using the new UpdateContactTaskTemplate API. This enables supervisors and developers to dynamically reassign task templates without creating a new task. ([24f4041](https://github.com/aws/aws-sdk-js-v3/commit/24f404168125e330e402673b14003258403979c7))
* **client-ec2:** This release adds support for BGP route protection in Amazon VPC IP Address Manager (IPAM), including route discovery, RPKI route protection findings, and delegated RPKI (Internet Registry Associations, routing policy registrations, and ROA management) for BYOIP prefixes. ([62f281d](https://github.com/aws/aws-sdk-js-v3/commit/62f281df5a1d7476485851907d2331f35c480d8e))
* **client-healthlake:** Adds provenanceEnabled to StartFHIRImportJob ([18ac6ef](https://github.com/aws/aws-sdk-js-v3/commit/18ac6efeb92731ee5b0a8d616e05766a2dd33dbf))
* **client-mediapackagev2:** StreamNameOutputMode - a new optional field on MediaPackageV2 OriginEndpoints that lets customers choose whether egress manifests use numeric stream indices (default) or encoder-assigned stream names from the input ([7f49cb0](https://github.com/aws/aws-sdk-js-v3/commit/7f49cb060702dc502b6b5733a18eee753a84005e))
* **client-mediatailor:** Added support for inserting ads via the VAST Ad Buffet standard. You can now configure MediaTailor to insert ads in sequence order using the AdSequencingMode setting in your playback configuration. Standalone ads are used as fallbacks when a sequenced ad is unavailable. ([7bebb1e](https://github.com/aws/aws-sdk-js-v3/commit/7bebb1e56db3c40906a554b824640848c6f1539e))
* **client-sagemaker:** Amazon SageMaker adds maintenance lifecycle statuses for Notebook Instances ([6ce0f88](https://github.com/aws/aws-sdk-js-v3/commit/6ce0f8843a4d69e0426e53dae61a194c8e576d76))
* **client-securityagent:** Added enableEmailMfa input field on Actor to enable email-based MFA during penetration tests. When enabled, a server-generated mfaForwardingAddress is returned. Set up a forwarding rule in your email provider to forward MFA emails to this address so the agent can complete email-based MFA login flows ([e21d391](https://github.com/aws/aws-sdk-js-v3/commit/e21d39190ef400777abbaf689a61c6b231f333e0))
* **clients:** update client endpoints as of 2026-08-07 ([c5d0542](https://github.com/aws/aws-sdk-js-v3/commit/c5d05426d83dccbcee03b0b0c024ba255bea4418))





# [3.1105.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1104.0...v3.1105.0) (2026-08-06)


### Features

* **client-agent-registry-control:** Agent Registry's Public Preview release ([a137863](https://github.com/aws/aws-sdk-js-v3/commit/a137863d854230093579807ab5f1d4edfedb2582))
* **client-agent-registry:** Agent Registry's Public Preview release ([632ae47](https://github.com/aws/aws-sdk-js-v3/commit/632ae47917c818dc16fa4fba183a90d3a6a8b931))
* **client-auto-scaling:** EC2 Auto Scaling now supports being managed by other AWS services via the operator field. ([f5d54fc](https://github.com/aws/aws-sdk-js-v3/commit/f5d54fce5f196113a276fa282da2ad0e1190838a))
* **client-backup:** AWS Backup now lets you create read-only access points for Amazon S3 recovery points, enabling you to access backup data using S3 APIs without initiating a restore. ([636228a](https://github.com/aws/aws-sdk-js-v3/commit/636228a9535bd3992a69093e27dcdc5d376f8b61))
* **client-bedrock-agentcore-control:** Add support for Gateway rate limits and Runtime instances in Amazon Bedrock AgentCore. Customers can now configure rate limits scoped to control request rates, token consumption rates, and active connection rates. Customers can now create capacity providers to launch runtimes on their EC2 instances. ([865d21e](https://github.com/aws/aws-sdk-js-v3/commit/865d21efa6b8b76fcf693655e3eb34d498027a00))
* **client-bedrock-agentcore:** Add support for capacity provider sessions in Amazon Bedrock AgentCore. Customers can now delete an active session running on a runtime instance launched through their capacity provider. ([bd30153](https://github.com/aws/aws-sdk-js-v3/commit/bd301533b88ffe5eead68964c90cb82a76d4dc3b))
* **client-cloudwatch-logs:** This release adds index category support to the CloudWatch Logs DescribeFieldIndexes API. Customers can filter and identify DEFAULT, CUSTOM, AUTO, and INACTIVE field indexes. ([e17fff6](https://github.com/aws/aws-sdk-js-v3/commit/e17fff6fee91039894b4004860657b0eedeed439))
* **client-device-farm:** Adds support for service generated insights across runs, jobs, and tests. ([6c601b7](https://github.com/aws/aws-sdk-js-v3/commit/6c601b71011de09898e06a1a24f2a6cfc34b8a83))
* **client-ec2:** Adds a new optional IncludeLocalZones parameter to the Spot Placement Score API that defaults to false. When set to true, the Spot Placement Score API will consider the relevant Local Zones with Spot capacity when computing the Spot Placement Score. ([4367384](https://github.com/aws/aws-sdk-js-v3/commit/43673842a0545caf2e6843c7d3e82349270f48df))
* **client-gamelift:** Adds support for C8a, C8i, C9g, M8a, M8i, and M9g EC2 instance type families for managed EC2 and container fleets. Also adds explicit anchors on most string regexes. ([30dfd63](https://github.com/aws/aws-sdk-js-v3/commit/30dfd63ab84fbcca27dc257af51e44359eb9c75d))
* **client-kafka:** MSK Clusters can now deliver authorizer logs alongside broker logs to the destinations defined by you ([b7e3193](https://github.com/aws/aws-sdk-js-v3/commit/b7e319378345cbd88c558df301477edc98939855))
* **client-marketplace-agreement:** GetAgreementTerms now returns a new term variant in AcceptedTerm, netPaymentTerm, with a paymentDuePeriod field (example "P30D"). ([50b0d6d](https://github.com/aws/aws-sdk-js-v3/commit/50b0d6d565c7f1ce784ab870ec6a89c4c859f3fb))
* **client-marketplace-discovery:** GetOfferTerms now returns netPaymentTerm in offerTerms, specifying payment due period after invoice date. The paymentDuePeriod field uses ISO 8601 duration format (e.g., "P30D" for net 30 days). This is a backward-compatible addition. See API documentation for full structure and examples. ([f4fd7ae](https://github.com/aws/aws-sdk-js-v3/commit/f4fd7ae7b8b872cb9f4e497470ea401a642683fd))
* **client-mediatailor:** AWS Elemental MediaTailor now supports concurrent function execution. The new Concurrent Executor function type runs multiple independent child functions in parallel within a single lifecycle hook, reducing pipeline latency to the duration of the slowest call instead of the sum of all calls. ([1cf6147](https://github.com/aws/aws-sdk-js-v3/commit/1cf61475d4320afddf9610addf91742d0f8173c3))
* **client-s3:** AWS Backup now lets you create read-only access points for Amazon S3 recovery points, enabling you to access backup data using S3 APIs without initiating a restore. ([faf6560](https://github.com/aws/aws-sdk-js-v3/commit/faf65602698bd9924362b5f1544b40f410cffb7d))
* **client-sagemaker:** Releases new Model Customization SequenceLength parameter for Training and g7 instance types for Training and Processing. ([14bd2ac](https://github.com/aws/aws-sdk-js-v3/commit/14bd2ac7dcd439796f379b9b44cd3f6ce9094984))
* **client-securityhub:** Security Hub is adding a new public API, ListFreeTrialStatusesV2 to describe the free trial statuses of the Security Hub service and its opt-in features. ([e44b358](https://github.com/aws/aws-sdk-js-v3/commit/e44b3582d5bb381c6ab6798c1718bc177d266011))
* **client-socialmessaging:** Add support for WhatsApp Conversions APIs. ([5c29a86](https://github.com/aws/aws-sdk-js-v3/commit/5c29a869869738008410e38f2d353c12139a0344))
* **clients:** update client endpoints as of 2026-08-06 ([e4f7b32](https://github.com/aws/aws-sdk-js-v3/commit/e4f7b32fca9d7c72e76dad9be36dcc2b2665e965))





# [3.1104.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1103.0...v3.1104.0) (2026-08-05)


### Features

* **client-acm-pca:** Private Certificate Authority service now supports RSASSA-PSS signing algorithm. ([203b57d](https://github.com/aws/aws-sdk-js-v3/commit/203b57d1eca019243b0b8ee1223ced5c9a92cd9a))
* **client-bedrock-agentcore-control:** Adding support for fine-grained access control for AgentCore Memory through managed AgentCore Gateway HTTP Connectors. ([448fc0f](https://github.com/aws/aws-sdk-js-v3/commit/448fc0f78c7165b1132f341c8e63fc8343672f00))
* **client-deadline:** AWS Deadline Cloud now reports persistent volume costs alongside compute and license costs. Customers can view per-fleet storage costs in Usage Explorer by selecting the Usage Type grouping, helping them better understand the costs of their infrastructure. ([f6649b9](https://github.com/aws/aws-sdk-js-v3/commit/f6649b9d31255c736336eb0f0092f6c34ebd9758))
* **client-ecs:** New enum values added for Agent Connectivity issues ([13e0f98](https://github.com/aws/aws-sdk-js-v3/commit/13e0f989a80604286d673cfe3ee2524723decfeb))
* **client-glue:** Added the PutDataCatalogExportConfiguration to export Glue Data Catalog metadata to systems tables stored in S3 Tables. ([31c6944](https://github.com/aws/aws-sdk-js-v3/commit/31c69446c13c149c89c50b588648ae6b304bd2a7))





# [3.1103.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1102.0...v3.1103.0) (2026-08-04)


### Bug Fixes

* **core/protocols:** fix number precision check ([#8252](https://github.com/aws/aws-sdk-js-v3/issues/8252)) ([3ab3c0e](https://github.com/aws/aws-sdk-js-v3/commit/3ab3c0e2eab6fd19ab26d011061095d2a090040f))


### Features

* **client-connect:** Amazon Connect Customer now supports up to 50 attachments per email, increased from the previous limit of 10. The individual maximum attachment size limit of 20 MB and the total email size limit of 25 MB still hold true. ([a0b556c](https://github.com/aws/aws-sdk-js-v3/commit/a0b556cba045b055d6c01fa414555fe25055a855))
* **client-dynamodb:** Vector indexes are a type of index in Amazon DynamoDB that enable similarity search on vector embedding stored in your table items. Vector indexes use approximate nearest neighbor search to find items whose vectors are most similar to a query vector that you provide. ([3b4460c](https://github.com/aws/aws-sdk-js-v3/commit/3b4460cb551ec1b3969ff1f1dc0bc87eee1fe661))
* **client-ec2:** Amazon EC2 now supports Application Status Checks, a new status check that monitors your application's health through configurable HTTP(S) paths and ports, so you can detect and automatically respond to application-level impairments. ([b66fadc](https://github.com/aws/aws-sdk-js-v3/commit/b66fadcac6a74c151a905255046f72f2ec15331b))
* **client-iam:** Updating endpoint generation logic ([4f3cb1d](https://github.com/aws/aws-sdk-js-v3/commit/4f3cb1da9b9500c0e19c1e1593a1a50be69fe26a))
* **client-inspector2:** Adding Azure SBOM export capability. ([c8824ff](https://github.com/aws/aws-sdk-js-v3/commit/c8824ff264dd01096be66458cd7f2fde2db871dd))
* **client-partnercentral-selling:** Partners can now create leads with only 5 required fields and free-text values for all other fields, reducing import friction. Engagement invitations now include enrichment data (propensity scores, lead readiness) directly in the response. ([108bded](https://github.com/aws/aws-sdk-js-v3/commit/108bdedcc7520760281fdd65eb10fcfb24168946))
* **client-sso-admin:** AWS IAM Identity Center now lets you create organization-level instances without enabling multi-account permissions. You can enable multi-account permissions during instance creation or later via console or API, which then provisions the necessary service-linked roles. ([97c52b6](https://github.com/aws/aws-sdk-js-v3/commit/97c52b6c02bb13e8e44d81019a3dd791dd02c6bc))
* **client-workspaces:** Added ClientExperiencePolicy to ClientProperties object for ModifyClientProperties and DescribeClientProperties APIs. ([c05ebd0](https://github.com/aws/aws-sdk-js-v3/commit/c05ebd0e43d10af5a49342343075795b5bdb02e7))





# [3.1102.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1101.0...v3.1102.0) (2026-08-03)


### Bug Fixes

* **core/protocols:** document and number serialization fixes ([#8245](https://github.com/aws/aws-sdk-js-v3/issues/8245)) ([71d4384](https://github.com/aws/aws-sdk-js-v3/commit/71d4384273083464c78fa30c2f88a21f1d6e147b))
* **credential-provider-login:** always read token from disk ([#8216](https://github.com/aws/aws-sdk-js-v3/issues/8216)) ([5caf21f](https://github.com/aws/aws-sdk-js-v3/commit/5caf21f6aea89905f0b54aa4fec9dea7786a2463))


### Features

* **client-direct-connect:** Added route visibility support for AWS Direct Connect, allowing customers to call ListVirtualInterfaceRoutes to view the BGP routes including AS path and BGP communities advertised over their virtual interfaces. ([1267534](https://github.com/aws/aws-sdk-js-v3/commit/1267534822ae551665baa29f858bc4a8299d0445))
* **client-eks-auth:** Added eksNodeName, instanceId, and zone optional parameters to the AssumeRoleForPodIdentity API. ([bbb99c9](https://github.com/aws/aws-sdk-js-v3/commit/bbb99c9a76c36ae3c48d36ef4d01e8b82a474868))
* **client-mediaconvert:** Updates Kantar server URL validation to accept Fifty5Blue domain. Adds support for output to S3 Glacier Instant Retrieval. ([01860cb](https://github.com/aws/aws-sdk-js-v3/commit/01860cb3161a1a5736473991921c340ba84b83d5))
* **client-network-firewall:** This launch allows customers to use Network Firewall as an explicit Proxy and protect their workloads against threat of data exfiltration. ([46a686e](https://github.com/aws/aws-sdk-js-v3/commit/46a686e22b479eaad5b02c7c2507c13b8bd7773a))
* **client-observabilityadmin:** Launch CMK support for Telemetry Enablement Organization and Account Rules. ([d6dcfbd](https://github.com/aws/aws-sdk-js-v3/commit/d6dcfbd3e0a78e0d8443a63cb5e2822bdb88cdfe))
* **client-timestream-influxdb:** This release adds support for customer-managed backup restore, and encryption of new DbInstances and DbClusters using customer-managed KMS keys. ([8eb5763](https://github.com/aws/aws-sdk-js-v3/commit/8eb57639feafc5795d766cb37b0872af8cf623c5))





# [3.1101.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1100.0...v3.1101.0) (2026-07-31)


### Features

* **client-amp:** Amazon Managed Service for Prometheus adds support for an Amazon OpenSearch Service exporter for managed collectors. ([d9c634a](https://github.com/aws/aws-sdk-js-v3/commit/d9c634a8c532638c447b6b278486fe01400b37c8))
* **client-bedrock-runtime:** Added support for mid-conversation tool changes in the Amazon Bedrock Converse and ConverseStream APIs ([8f29d85](https://github.com/aws/aws-sdk-js-v3/commit/8f29d85608d95c5183f8f140bc94ee007e3a6916))
* **client-billing:** Adds GetEnterpriseSupportChargeSummary, GetEnterpriseSupportContractDetails, and ListEnterpriseSupportLinkedAccountCharges. These APIs provide first-time programmatic access to billing data for Enterprise Support usage previously only available upon request through AWS Concierge or Support. ([643d01c](https://github.com/aws/aws-sdk-js-v3/commit/643d01c5bba9e2fe98b447b593e3515c012e1682))
* **client-cloudformation:** Adding enum for sensitive property to DriftIgnoredReason ([ce2fa95](https://github.com/aws/aws-sdk-js-v3/commit/ce2fa95dce9d46dd6ab9531ce5b2963e1de975f5))
* **client-cloudwatch-logs:** Amazon CloudWatch Logs now lets you create and update lookup tables directly from CloudWatch Logs query results by passing a queryId, and configure a lookup table as a scheduled query destination so it refreshes automatically with the latest query results on each run. ([6f5f75a](https://github.com/aws/aws-sdk-js-v3/commit/6f5f75a050a9a99b6097dbef7408765750b86449))
* **client-connectcampaignsv2:** Launching feature for abandonment rate pacing control for outbound campaigns. ([fbb8c22](https://github.com/aws/aws-sdk-js-v3/commit/fbb8c2250cdf154d8784363242e10729048df20f))
* **client-datazone:** Adding support for enhanced Git experience in Sagemaker Unified Studio. ([e5fcea3](https://github.com/aws/aws-sdk-js-v3/commit/e5fcea3c33ffd135acc6bdb9eecbaed5524b8f8a))
* **client-elementalinference:** AWS Elemental Inference now supports graphic composition on cropped video outputs, enabling branded graphics and other visual elements to be overlaid as part of the inference workflow. ([b9116f8](https://github.com/aws/aws-sdk-js-v3/commit/b9116f87914d20d93f754e71c2f415b29835109a))
* **client-marketplace-catalog:** This release enhances the ListEntities API to support TargetAgreementId, TargetAgreementIntent, and CreatedBySource filters for the Offer entity type. ([550b6cf](https://github.com/aws/aws-sdk-js-v3/commit/550b6cf0250dc4dc4c145a205701be256b244b77))
* **client-network-firewall:** Doc Updates for Container Attributes ([82107b3](https://github.com/aws/aws-sdk-js-v3/commit/82107b320f1e493c309bb117aea21f06bcdae815))
* **client-outposts:** Adds the "EKS" value to the AWSServiceName enum and marks the Address field as sensitive. ([65dd193](https://github.com/aws/aws-sdk-js-v3/commit/65dd1932ac793ff463e7573b4857802abcbe326c))
* **client-quicksight:** Adding TopicV2 management APIs, adding possibility to use Topics in Analysis ([087bb50](https://github.com/aws/aws-sdk-js-v3/commit/087bb505c40e67ce1d323a3fe054abaec4a86d96))
* **client-rds:** Adds StorageOperationStatus and StorageOperationPercentProgress to DescribeDBInstances, letting you monitor RDS storage initialization and optimization progress. ([842d177](https://github.com/aws/aws-sdk-js-v3/commit/842d177975ae50728bfaf3fded3a754444318f4f))
* **client-resiliencehubv2:** Adding support for new testing capability in AWS Resilience Hub. ([105876c](https://github.com/aws/aws-sdk-js-v3/commit/105876ce472f2cfd08cd028cf78c10f53d8ecb26))
* **client-transcribe-streaming:** This release adds a new optional TranscriptFormat parameter to the Amazon Transcribe streaming API, letting customers select spoken or written form for numeric and formatted output. ([5808fd5](https://github.com/aws/aws-sdk-js-v3/commit/5808fd5ccd93261f809ed480351fcdbd72528ee7))





# [3.1100.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1099.0...v3.1100.0) (2026-07-31)


### Bug Fixes

* **core/protocols:** v2 JSON codec updates and JsonBytesStringAdapter ([#8238](https://github.com/aws/aws-sdk-js-v3/issues/8238)) ([a1001f4](https://github.com/aws/aws-sdk-js-v3/commit/a1001f4b580d631ee5307774f564ad6bff6ef486))


### Features

* **client-bcm-pricing-calculator:** Removing Smithy RPC v2 CBOR support that was added in previous SDK release. ([edce242](https://github.com/aws/aws-sdk-js-v3/commit/edce242c3ac8fc292bec7dca743044d69f6d4074))
* **client-bcm-recommended-actions:** Removing Smithy RPC v2 CBOR support that was added in previous SDK release. ([7bed97a](https://github.com/aws/aws-sdk-js-v3/commit/7bed97ab502ffcf3930e47cbf292225fc56c6c82))
* **clients:** update client endpoints as of 2026-07-31 ([30d44c7](https://github.com/aws/aws-sdk-js-v3/commit/30d44c7ec4eeb17625606cd8ea59c8a3f15c46be))





# [3.1099.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1098.0...v3.1099.0) (2026-07-30)


### Features

* **client-bedrock-agentcore-control:** Adds support for configuring models through the OpenResponses API for custom evaluators. CreateEvaluator and UpdateEvaluator now accept an OpenResponses model configuration for LLM-as-a-Judge evaluations. ([9cfbf37](https://github.com/aws/aws-sdk-js-v3/commit/9cfbf372a2ca9cf19ba57017bae861cb3c796f91))
* **client-iam:** Improved IAM Policy Simulator accuracy. Simulator now evaluates SCP conditions and resource scoping, returns explicitDeny for explicit SCP denials, and reports accurate cross-account decisions. ([d8cd86e](https://github.com/aws/aws-sdk-js-v3/commit/d8cd86e4536d6f23ff32f987b5dcdff7bd52fcf1))
* **client-kafka:** Amazon MSK Express brokers now support streaming tables for Apache Iceberg, continuously materializing Apache Kafka topics as Iceberg tables in Amazon S3 Tables. Express brokers also now support data delivery to Amazon S3 general purpose buckets. ([1623625](https://github.com/aws/aws-sdk-js-v3/commit/162362550a7acbfd5068333f3691211787cd906a))
* **client-lambda:** Add Python3.15 (python3.15) and NodeJs 26 (nodejs26.x) support to AWS Lambda ([e9cf506](https://github.com/aws/aws-sdk-js-v3/commit/e9cf506952759ba95ce3c3dd9a4a9f49cd341229))
* **client-network-firewall:** Adds UPDATING field to Container Association Status ([65a8fd3](https://github.com/aws/aws-sdk-js-v3/commit/65a8fd3f58202e28691b740214129e0a62ed2f07))
* **client-pricing-plan-manager:** Adds support for Public PricingPlanManager SDK ([f5af47b](https://github.com/aws/aws-sdk-js-v3/commit/f5af47b60721e11888748135651558bc3c114879))
* **client-sagemaker:** Adds support for g7 family instance types for SageMaker Studio JupyterLab and CodeEditor apps for IAD (us-east-1), PDX (us-west-2), CMH (us-east-2). ([5e4ec9c](https://github.com/aws/aws-sdk-js-v3/commit/5e4ec9ceceb4a4fc64b884ab6f3548dfb913c96b))
* **client-securityagent:** Adds support for providing a branch override when configured integrated repositories ([0f5a2dd](https://github.com/aws/aws-sdk-js-v3/commit/0f5a2dd0c68c7bbc943a612bb029af54b69d9109))
* **clients:** update client endpoints as of 2026-07-30 ([e93ec43](https://github.com/aws/aws-sdk-js-v3/commit/e93ec43aaeb8278faa1147c8bd841881f16bc143))





# [3.1098.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1097.0...v3.1098.0) (2026-07-29)


### Features

* **client-ec2:** This release adds support for policy-based routing on AWS Transit Gateway, enabling you to route traffic based on 5-tuple matching (source IP, destination IP, source port, destination port, and protocol) using new policy table entry APIs that direct matching traffic to a target route table. ([8ef115c](https://github.com/aws/aws-sdk-js-v3/commit/8ef115c88858d5f900ff24de4e3c8ed649e48ff3))
* **client-gameliftstreams:** Adds ListApplicationShaderCaches API to retrieve shader cache metadata for applications and adds stream URLs, which give end users temporary, unauthenticated access to a stream session in their browser. Includes CreateStreamUrl, GetStreamUrl, ListStreamUrls, and RevokeStreamUrl operations. ([03de214](https://github.com/aws/aws-sdk-js-v3/commit/03de214927dd649bdfe66913c1fb45b5ab72a8c7))
* **client-glue:** Adding filtering, partitioning, and VPC support to AWS Glue REST API connector ([d43351c](https://github.com/aws/aws-sdk-js-v3/commit/d43351c53e98902a11c1d64c10933d3e5ab80dd6))
* **client-iotsitewise:** We have released a new set of APIs in support of a major new feature within AWS IoT SiteWise called Scenario Discover. Please see user guide about the feature and the API guide in public documentation for new APIs. ([61dd73b](https://github.com/aws/aws-sdk-js-v3/commit/61dd73b278f7b1c40b5c01a29176749b44c85d78))
* **client-wafv2:** AWS WAF now supports pre-parse text transformations, letting you normalize raw query strings before parsing, available on rule statements that use SingleQueryArgument or AllQueryArguments as the FieldToMatch. AWS WAF also added 10 new text transformations, including ModSecurity v3 parity options. ([1b06f48](https://github.com/aws/aws-sdk-js-v3/commit/1b06f488e57e1292c93e62380442939f75d0f810))
* **clients:** update client endpoints as of 2026-07-29 ([d2fe87e](https://github.com/aws/aws-sdk-js-v3/commit/d2fe87e78a0d7247a66d8d4ae982a2512817500c))





# [3.1097.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1096.0...v3.1097.0) (2026-07-28)


### Features

* **client-bedrock-agentcore-control:** AgentCore Identity now supports Private Key JWT client authentication for OAuth 2.0 credential providers. Agents can authenticate to identity provider token endpoints with a JWT client assertion signed by a customer-managed AWS KMS asymmetric key, eliminating the need for client secrets. ([fa2b1a0](https://github.com/aws/aws-sdk-js-v3/commit/fa2b1a0adcc10d747c0fe81a33391417c41d067d))
* **client-rolesanywhere:** Increases certificate string length for trust anchor source data to support new adjustable trust anchor limits. ([20c913f](https://github.com/aws/aws-sdk-js-v3/commit/20c913fd6a61b8706d75e4d2e9aab2b6eafd9569))
* **client-trustedadvisor:** Adds ListRecommendationsForResource API and four CheckSummary fields (resourceArnQueryable, awsResourceTypes, checkGranularity, recommendationId) to retrieve recommendations for a given resource ARN. ([16e67f1](https://github.com/aws/aws-sdk-js-v3/commit/16e67f168da8d32de2ca85b1783b3829e02cfb5a))





# [3.1096.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1095.0...v3.1096.0) (2026-07-27)


### Bug Fixes

* **core/protocols:** handle JSON exponent notation in jsonReviver ([#8226](https://github.com/aws/aws-sdk-js-v3/issues/8226)) ([c3b27fd](https://github.com/aws/aws-sdk-js-v3/commit/c3b27fd34b72822c9b0a05f0ded228e4247206ce))


### Features

* **client-account:** This release adds support for the GetPrimaryEmailUpdateStatus API operation, which allows customers to retrieve the current status of a primary email address update request for an AWS account. The operation returns status information including whether the update is pending, completed, or failed. ([d633065](https://github.com/aws/aws-sdk-js-v3/commit/d633065c50c147dac19c7315e137d6c08c502112))
* **client-bcm-data-exports:** With this release, customers can configure their data exports to deliver CSV reports in ZIP compressed format. ([bf6df63](https://github.com/aws/aws-sdk-js-v3/commit/bf6df63c8e938853a644e8434dd863881bf0609c))
* **client-cleanroomsml:** This release adds support for the CR.8X worker type for SQL (32 vCPU) ([bcabd86](https://github.com/aws/aws-sdk-js-v3/commit/bcabd86abe463c536f8d8e5eccbc15f4cf69a8c8))
* **client-cleanrooms:** This release adds support for the CR.8X worker type for SQL (32 vCPU) ([4c53218](https://github.com/aws/aws-sdk-js-v3/commit/4c532188997ad62ee62191fbe49597f591614868))
* **client-emr-containers:** With this launch, you can now set concurrent job limits on a virtual cluster, giving you fine-grained control over how many job runs execute at once and how many can wait in queue. ([b6c745a](https://github.com/aws/aws-sdk-js-v3/commit/b6c745a4d078196ad443468940ee75728cd46368))
* **client-glue:** Adds BatchGetDataQualityRulesetEvaluationRun API to retrieve multiple runs in one call, ObservationScope and ObservationMode parameters for anomaly detection, writing evaluation results to Data Catalog tables, and custom log group paths for recommendation runs. ([70d8b71](https://github.com/aws/aws-sdk-js-v3/commit/70d8b71e930d7997c7b9a9326890452d3e686866))
* **client-partnercentral-account:** Adds optional headquarters location to StartProfileUpdateTask, letting partners record their headquarters as an ISO 3166 country and subdivision code on their profile. When headquarters is provided, both the country and subdivision codes are required. ([db69aaa](https://github.com/aws/aws-sdk-js-v3/commit/db69aaa763209fd5f580fb01b000adb14cdc157c))
* **client-quicksight:** Added new Governance fields to Custom Permissions API to support Deny By Default functionality. ([730d471](https://github.com/aws/aws-sdk-js-v3/commit/730d471635dbf602fc4128eb280bbf20836f0e18))
* **client-sagemaker:** This release adds LoRA adapters, training plans, and new instance types to SageMaker inference optimization. CreateAIRecommendationJob accepts optional AdapterSource and CreateOptimizationJob accepts optional TrainingPlanArns and the ml.g7e and ml.p6-b200 families. ([587c643](https://github.com/aws/aws-sdk-js-v3/commit/587c6437b3ebb47920ebe1dc1709e1666f750133))
* **client-securityagent:** AWS Security Agent adds a new task hours field that reflects the active work done for a task. ([6419f79](https://github.com/aws/aws-sdk-js-v3/commit/6419f7932493dac015f47cf095c563b2367064e3))
* **clients:** update client endpoints as of 2026-07-27 ([24e536e](https://github.com/aws/aws-sdk-js-v3/commit/24e536eedc9e6fd9b0023346005660bfef74201e))





# [3.1095.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1094.0...v3.1095.0) (2026-07-24)


### Bug Fixes

* **core/protocols:** avoid Buffer.slice in return ByteJsonShapeSerializer.flush ([#8222](https://github.com/aws/aws-sdk-js-v3/issues/8222)) ([d4f2aeb](https://github.com/aws/aws-sdk-js-v3/commit/d4f2aeb5fa98a6596baef04779a365498f327755))


### Features

* **client-application-insights:** This release adds Smithy RPC v2 CBOR as an additional protocol alongside the existing AWS JSON 1.1. The SDK will prioritize its most performant protocol. ([20dd588](https://github.com/aws/aws-sdk-js-v3/commit/20dd58867268d9aae3926c5917be30bcd680189c))
* **client-artifact:** Added the PutComplianceInquiryFeedback API, enabling customers to submit feedback on compliance inquiry responses. Customers can rate responses as helpful or not helpful and provide optional reason codes and comments. ([e2d5f0e](https://github.com/aws/aws-sdk-js-v3/commit/e2d5f0e29e79b765d767fdee08a6360758388b40))
* **client-cognito-identity-provider:** Amazon Cognito user pools now support the AdminGetUserAuthFactors operation, which lets administrators retrieve the configured authentication factors (such as password, SMS, email, and TOTP) available for a specific user in a user pool. ([fb3d908](https://github.com/aws/aws-sdk-js-v3/commit/fb3d908c1173ced1d17b98adcfab35bbcd562d74))
* **client-dynamodb:** Endpoint test standardizations ([2e9ccdb](https://github.com/aws/aws-sdk-js-v3/commit/2e9ccdb423e85835fc0be463f2189da9cb2067ef))
* **client-neptune-graph:** Update validations for Tag Keys and KMS Key ARNs. ([9109ccf](https://github.com/aws/aws-sdk-js-v3/commit/9109ccf7a34856eb9e23b6cd03fe1fb471e087cf))
* **client-rtbfabric:** The deprecated inboundLinksCount field has been removed from the GetResponderGateway API response. Customers who previously relied on this field should use linksRequestedCount instead. ([70e61b3](https://github.com/aws/aws-sdk-js-v3/commit/70e61b39cf2be0a5168a6cf7f9febd545670586c))
* **clients:** update client endpoints as of 2026-07-24 ([f84113a](https://github.com/aws/aws-sdk-js-v3/commit/f84113a78811741bf8e1469b3e71997bf21d5abf))
* **core:** update clock skew detection threshold and configs ([#8189](https://github.com/aws/aws-sdk-js-v3/issues/8189)) ([a2773d5](https://github.com/aws/aws-sdk-js-v3/commit/a2773d5663965069fbe650815d2a45f1f95a645e))





# [3.1094.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1093.0...v3.1094.0) (2026-07-23)


### Features

* **client-appstream:** This release adds Smithy RPC v2 CBOR as an additional protocol alongside the existing AWS JSON 1.1. The SDK will prioritize its most performant protocol. ([aa5d998](https://github.com/aws/aws-sdk-js-v3/commit/aa5d998da6e3d2f946567d5554ea33cde36c0a76))
* **client-backup-gateway:** This release adds Smithy RPC v2 CBOR as an additional protocol alongside the existing AWS JSON 1.0. The SDK will prioritize its most performant protocol. ([2bfb991](https://github.com/aws/aws-sdk-js-v3/commit/2bfb9913655bffb903981a7d5e9c4f0a12872c8f))
* **client-bcm-pricing-calculator:** This release adds Smithy RPC v2 CBOR as an additional protocol alongside the existing AWS JSON 1.0. The SDK will prioritize its most performant protocol. ([f47c152](https://github.com/aws/aws-sdk-js-v3/commit/f47c152c3ba9f85ffcc4234bd254d74062f5648c))
* **client-bcm-recommended-actions:** This release adds Smithy RPC v2 CBOR as an additional protocol alongside the existing AWS JSON 1.0. The SDK will prioritize its most performant protocol. ([635ae75](https://github.com/aws/aws-sdk-js-v3/commit/635ae75d08e18385cd05f624a2264a2cca6e4b6f))
* **client-bedrock-agentcore-control:** Adds support for the Bring Your Own Storage(BYOS) feature in AgentCore Browser and Code Interpreter. Enables mounting S3Files and EFS File Systems via Access points. ([f845b47](https://github.com/aws/aws-sdk-js-v3/commit/f845b470deac54bc4d5eb7337289a962a00079e2))
* **client-bedrock-agentcore:** Adds support for the Bring Your Own Storage(BYOS) feature in AgentCore Browser and Code Interpreter. Enables mounting S3Files and EFS File Systems via Access points. ([a689531](https://github.com/aws/aws-sdk-js-v3/commit/a689531c7675e2743a2416620603afcc6df01419))
* **client-datazone:** Adds support for notebook sync with S3 ipynb files ([ce84e9c](https://github.com/aws/aws-sdk-js-v3/commit/ce84e9c6c7097b0b781d2e3b849c727c4d6a9dbc))
* **client-gameliftstreams:** GameLift Streams now supports configuring a custom aspect ratio per stream session to accommodate different player devices. Supported aspect ratios include landscape, portrait, and square - delivering a full-screen experience without letterboxing or cropping. ([77119b6](https://github.com/aws/aws-sdk-js-v3/commit/77119b6b736ab9a2527c0644e52520a5bc935b1d))
* **client-kendra-ranking:** This release adds Smithy RPC v2 CBOR as an additional protocol alongside the existing AWS JSON 1.0. The SDK will prioritize its most performant protocol. ([1b65b73](https://github.com/aws/aws-sdk-js-v3/commit/1b65b736404e1af8cb7ac1f30a61a2c07ec51abb))
* **client-mediapackagev2:** This release adds support for non-epoch-locked CMAF ingest in MediaPackageV2 channels. ([024499b](https://github.com/aws/aws-sdk-js-v3/commit/024499b2c569634bc810d76217c7f3ff78c7d454))
* **client-quicksight:** Added new capabilities to custom permissions profiles to control access to Amazon Quick through the browser extension and Microsoft Word, Outlook, Excel, and PowerPoint add-ins. ([59a1b6e](https://github.com/aws/aws-sdk-js-v3/commit/59a1b6ebbaccbe4628dbfb38c047a38162ae3e54))
* **client-redshift-data:** This release include long polling provids a new parameter wait-time-seconds to 5 API operations, new API ListSessions, and a new parameter execution-mode to BatchExecuteStatement ([ad898eb](https://github.com/aws/aws-sdk-js-v3/commit/ad898eba1b45e4a0b3495bf73ea98070e9ea747d))
* **client-sagemaker:** Release support for c6a, m6a, m6g, m7g, m8g instance types for SageMaker HyperPod ([9af2f24](https://github.com/aws/aws-sdk-js-v3/commit/9af2f2475fe226005bb7f3908d832fe0e4f16300))
* **client-workspaces-instances:** This release adds Smithy RPC v2 CBOR as an additional protocol alongside the existing AWS JSON 1.0. The SDK will prioritize its most performant protocol. ([ce7eec0](https://github.com/aws/aws-sdk-js-v3/commit/ce7eec0f798fb57569e12755b59bc8a352a49216))





# [3.1093.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1092.0...v3.1093.0) (2026-07-22)


### Features

* **client-amp:** Add CloudWatch dataset destinations for Amazon Managed Service for Prometheus collectors. ([3709a0b](https://github.com/aws/aws-sdk-js-v3/commit/3709a0bd52c24410dd5f5682929eefe581e681e4))
* **client-arc-region-switch:** Adds support for a client token in StartPlanExecution to make plan execution requests idempotent for safe retries. ([6cfe2c0](https://github.com/aws/aws-sdk-js-v3/commit/6cfe2c059376935b80bb9b27835c6cdf34b41b6b))
* **client-cloudwatch:** Adds documented value constraints for CloudWatch Log Alarm scheduled query configuration fields, and makes LogGroupIdentifiers optional for log alarms. ([5884c0d](https://github.com/aws/aws-sdk-js-v3/commit/5884c0d40e6e8af1b005e6b6c297137b780af470))
* **client-guardduty:** Amazon GuardDuty now returns filter lifecycle metadata in GetFilter responses. The response includes createdAt and updatedAt timestamps and a version number that increments on each update, giving you visibility into when a filter was created and last modified. ([15117c9](https://github.com/aws/aws-sdk-js-v3/commit/15117c9160d49bbb3ea1ce84c44cfc8ff1211b04))
* **client-observabilityadmin:** Enablement for ALB and Bedrock Knowledge Base logs via Observability Admin Telemetry Rule for account and organization level ([0bd549c](https://github.com/aws/aws-sdk-js-v3/commit/0bd549cf6e01adb650db7c826986fe0eb4d6776e))
* **client-partnercentral-account:** Adds Qualifications Association APIs that enable partners to associate a subsidiary account's qualifications with a primary account. Once associated, qualifications are shared across all connected accounts and scorecards are consolidated. Partners can start and track association and disassociation. ([4b0d8db](https://github.com/aws/aws-sdk-js-v3/commit/4b0d8db8bf1cae2d72cda42abaf645a57a62d149))
* **client-pcs:** AWS PCS Node Lifecycle Actions provides a structured way to run custom scripts at defined points in a compute node's lifecycle directly through the AWS PCS compute node group API. ([c3c4289](https://github.com/aws/aws-sdk-js-v3/commit/c3c4289aa7d277fdadecff25196911edfd43112b))
* **client-sesv2:** Launching DEED and MREP in US GOV ([2971803](https://github.com/aws/aws-sdk-js-v3/commit/2971803946e47bc8dd0df6aa865d337370d8a657))
* **clients:** update client endpoints as of 2026-07-22 ([8e084a4](https://github.com/aws/aws-sdk-js-v3/commit/8e084a494b75dc927c3202f12368aa31676b281c))





# [3.1092.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1091.0...v3.1092.0) (2026-07-21)


### Features

* **client-emr-containers:** Added support for the DeleteSecurityConfiguration API, which allows customers to delete security configurations in Amazon EMR on EKS. Also added authenticationConfiguration in securityConfigurationdata structure. ([e344cea](https://github.com/aws/aws-sdk-js-v3/commit/e344cea997509a58334096da2269e7b61ae34b69))
* **client-entityresolution:** Add support for real time matching with AWS Entity Resolution matching workflows with advanced rule sets. ([b92fd6c](https://github.com/aws/aws-sdk-js-v3/commit/b92fd6c4199c84eb85d1bb58056b0c2472b14fef))
* **client-inspector2:** GA date - July 21st 2026, remove Tags field from ListCodeSecurityIntegration and ListCodeSecurityScanConfiguration. ([33a1778](https://github.com/aws/aws-sdk-js-v3/commit/33a1778dda593b289641717f0df9c08107d8a55d))
* **client-invoicing:** Added the SendProcurementPortalValidation and VerifyProcurementPortalValidation APIs. You can use the AWS SDKs to self-service activate your Procurement Portal Preferences created on the Billing Preferences page with a one-time-passcode (OTP) delivered to your portal. ([35e023c](https://github.com/aws/aws-sdk-js-v3/commit/35e023c05d6a8671e5b6848d24c5d3addfe56c6d))
* **client-redshift-data:** update the workgroupArn to include EUSC partition, tests in THF Gamma and Prod no issue ([4f372fc](https://github.com/aws/aws-sdk-js-v3/commit/4f372fc5411bc7336227df8a4af7bac4cdb73f4e))
* **client-redshift:** Amazon Redshift - Added support for managing Query Editor V2 IAM Identity Center applications via new CreateQev2IdcApplication, DescribeQev2IdcApplications, ModifyQev2IdcApplication, and DeleteQev2IdcApplication API operations. ([17507f2](https://github.com/aws/aws-sdk-js-v3/commit/17507f23fa6a9baea128353c2819e4cc2e90c3e6))
* **client-ssm:** Added a WarningMessage field to Automation along with corresponding public documentation. ([7af6eb5](https://github.com/aws/aws-sdk-js-v3/commit/7af6eb584260597163ef479eb86de199d3267e19))
* **client-timestream-influxdb:** This release adds support for custom plugins in Amazon Timestream for InfluxDB. InfluxDB 3 Core and Enterprise DB parameter groups now accept a plugin repository URL and optional AWS Secrets Manager secret ARN, so the Processing Engine loads your Python plugins from a public or private repository. ([ade4b96](https://github.com/aws/aws-sdk-js-v3/commit/ade4b9693d2b2c9ea5f7a7f6c6bc534226e01e5d))
* **core/protocols:** bytebuffer serializer and buffer deserializer for JSON ([#8202](https://github.com/aws/aws-sdk-js-v3/issues/8202)) ([f39955a](https://github.com/aws/aws-sdk-js-v3/commit/f39955afbdfdcf665a5cf43cab8a057c56744dc4))





# [3.1091.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1090.0...v3.1091.0) (2026-07-20)


### Features

* **client-bedrock-agentcore-control:** This release adds support for specifying a connector version on Gateway targets to pin the connector's tool schema. It also introduces web-search connector version 1.2.0, which adds agent-side domain filtering, published date range filtering, and admin-side domain allowlisting. ([2c37055](https://github.com/aws/aws-sdk-js-v3/commit/2c37055a89a32783babd2ac3813d89b21d4bc7e9))
* **client-bedrock-agentcore:** Add W3C trace context headers (traceparent, tracestate, baggage) and X-Amzn-Trace-Id to InvokeHarness request for end-to-end observability propagation. Add toolResultMetadata to the streaming content block delta for MCP tool result meta delivery without oversized SSE frames. ([4cf22ef](https://github.com/aws/aws-sdk-js-v3/commit/4cf22ef38ed3caa0e15c779e1d93f67ff5747288))
* **client-inspector2:** Adds Windows path support for deep inspection. Fixes tag propagation for connector CloudFormation stack operations. ([2263613](https://github.com/aws/aws-sdk-js-v3/commit/2263613f795a6c5caaa421f529109436892a6faf))
* **client-mediatailor:** This change adds api support for configuring ad decision server timeouts and concurrency fields on MediaTailor playback configurations ([97ea965](https://github.com/aws/aws-sdk-js-v3/commit/97ea965ee220d53cb041fe095f361a8caba729e6))
* **client-quicksight:** Adds support for custom permissions for Triggers, allowing administrators to control user access to Schedule, Inbound Email and Quick Event triggers. ([fbe7d94](https://github.com/aws/aws-sdk-js-v3/commit/fbe7d94d5751c21ca65b96aff97786752aca884c))
* **client-sesv2:** Amazon SES introduces three new Pricing Plans (Essentials, Pro, Enterprise), which bundle SES features under one pricing umbrella.  The new PutAccountPricingAttributes API lets the user set the account's plan, while current plan retrievalif done through the new PricingAttributes field on GetAccount. ([751dc8d](https://github.com/aws/aws-sdk-js-v3/commit/751dc8df47e1a2353680b45bc53b7f431f84123d))





# [3.1090.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1089.0...v3.1090.0) (2026-07-17)


### Features

* **client-cognito-identity-provider:** Amazon Cognito user pools now support sending SMS via AWS End User Messaging. A new EumsSms object in SmsConfigurationType lets you deliver MFA and verification texts through AWS End User Messaging, alongside the existing Amazon SNS option. ([600cf8d](https://github.com/aws/aws-sdk-js-v3/commit/600cf8d5cb99b819ab1bbb0296d645ee8690a05f))
* **client-gameliftstreams:** Amazon GameLift Streams now supports assigning an IAM role to a stream session, enabling your application to securely access resources in your AWS account, such as Amazon S3 buckets and DynamoDB tables. ([cf945cd](https://github.com/aws/aws-sdk-js-v3/commit/cf945cdbdfbcc0ea5bbf36b1f4048aef95097237))
* **client-kinesis-analytics-v2:** Support for Flink 2.3 in Managed Service for Apache Flink ([1ad0421](https://github.com/aws/aws-sdk-js-v3/commit/1ad0421fb0f752af3417a9bb6b55280fa021a8f0))
* **client-odb:** Adds support for sourcing Autonomous Database admin and wallet passwords from customer-managed AWS Secrets Manager secrets, including password source configuration and summaries, and enabling or disabling the OCI IAM service role for Secrets Manager integration via InitializeService. ([d5619c8](https://github.com/aws/aws-sdk-js-v3/commit/d5619c8bb18547fd7fe95bdf5f4ed8eff3178275))
* **client-rds:** Adds the AssociatedRoles parameter to CreateDBCluster, RestoreDBClusterFromSnapshot, RestoreDBClusterToPointInTime, and RestoreDBClusterFromS3, letting customers associate IAM roles with an Aurora DB cluster at create or restore time instead of calling AddRoleToDBCluster afterward. ([48b74a4](https://github.com/aws/aws-sdk-js-v3/commit/48b74a4393b494e2e59b16d8a61ab47c385a0b05))
* **clients:** update client endpoints as of 2026-07-17 ([857153f](https://github.com/aws/aws-sdk-js-v3/commit/857153f32bc002c6c13c784843c612e24c1ec3c2))





# [3.1089.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1088.0...v3.1089.0) (2026-07-16)


### Bug Fixes

* **package.json:** run make lint format without file args ([#8201](https://github.com/aws/aws-sdk-js-v3/issues/8201)) ([33ac9c0](https://github.com/aws/aws-sdk-js-v3/commit/33ac9c0b184907603ea288f0b71c4cd9a77601d1))


### Features

* **client-chime-sdk-voice:** Marked CreateProxySession, DeleteProxySession, GetProxySession, ListProxySessions, UpdateProxySession, PutVoiceConnectorProxy, DeleteVoiceConnectorProxy, and GetVoiceConnectorProxy as deprecated. ([d706c45](https://github.com/aws/aws-sdk-js-v3/commit/d706c4567374de6cb774ec9e57440b6bee202fe7))
* **client-emr:** Amazon EMR updates the Session object returned by GetSession API ([863234a](https://github.com/aws/aws-sdk-js-v3/commit/863234ad7a0f08a13d24aac2b31dbe12fc14d62f))
* **client-omics:** Adds support for returning the task UUID (universally unique identifier) in GetRunTask and ListRunTasks responses ([bafd66d](https://github.com/aws/aws-sdk-js-v3/commit/bafd66dde7a91690c7a01a3da87709056f3aaca3))
* **client-sagemaker:** Release support for g7 instance type for SageMaker inference endpoints. ([668f46c](https://github.com/aws/aws-sdk-js-v3/commit/668f46cb4b4da795b341153fded865aaf643a76f))
* **client-sustainability:** Adds support for retrieving estimated water allocation data. ([432031b](https://github.com/aws/aws-sdk-js-v3/commit/432031b68ada0cb596f07e3747aec70adb1a39c8))
* **clients:** update client endpoints as of 2026-07-16 ([c9150fe](https://github.com/aws/aws-sdk-js-v3/commit/c9150fe6891b8d1c9a8455ea8f32f403a43c464c))





# [3.1088.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1087.0...v3.1088.0) (2026-07-15)


### Features

* **client-bedrock-agentcore-control:** Fix HarnessEndpointArn pattern to match the actual service-emitted ARN format ('harness-endpoint' instead of 'endpoint'). Add additionalParams to Gemini model configuration for passing provider-specific parameters through to the model unchanged. ([5b7701e](https://github.com/aws/aws-sdk-js-v3/commit/5b7701e82520538b19cf739ba4445c32adbf6f6e))
* **client-elastic-load-balancing-v2:** This release adds support for the IpAddressType field on SourceIpConfig, enabling Network Load Balancer listener rules to match traffic based on whether the source IP is IPv4 or IPv6. ([8012e14](https://github.com/aws/aws-sdk-js-v3/commit/8012e14ff65acf9340dd1fa12cfaba1fcb3c4c91))
* **client-healthlake:** AWS HealthLake now offers data transformation in Preview to convert CSV and C-CDA data to FHIR R4. Customers can maintain reusable mapping profiles, run sync or async jobs with provenance tracking and drift detection, and use an AI agent to build and edit mapping logic from natural language. ([69cdbbc](https://github.com/aws/aws-sdk-js-v3/commit/69cdbbcc09d0d3f33625fd7d7703cb2964600d71))
* **client-payment-cryptography-data:** Adds support for UnionPay session key derivation to the GenerateAuthRequestCryptogram, VerifyAuthRequestCryptogram, GenerateMac, and VerifyMac APIs. ([6188712](https://github.com/aws/aws-sdk-js-v3/commit/618871277ab613bae1fb60aa0da13014f031ad74))
* **client-rds:** Adds support for modifying EngineLifecycleSupport on DB instances and DB clusters through ModifyDBInstance and ModifyDBCluster. ([faa78bc](https://github.com/aws/aws-sdk-js-v3/commit/faa78bc92ac9aa0a876f613869a6dd0bf7595acc))





# [3.1087.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1086.0...v3.1087.0) (2026-07-14)


### Bug Fixes

* **scripts:** add typesVersions entries for submodules ([#8186](https://github.com/aws/aws-sdk-js-v3/issues/8186)) ([9eade26](https://github.com/aws/aws-sdk-js-v3/commit/9eade2692bd0f4486bc03c606a6963bc96706fd1))


### Features

* **client-connect:** This release adds SearchRules API which can be used to search for rules within an Amazon Connect instance. ([f29288c](https://github.com/aws/aws-sdk-js-v3/commit/f29288c751327448c91ad5e89ea25d702dadab96))
* **client-drs:** Fast recovery of EC2 based drs workloads by skipping the conversion step ([89a090d](https://github.com/aws/aws-sdk-js-v3/commit/89a090d83c0d8413a849f56bde61feb59417e467))
* **client-emr-containers:** Introduced 5 new fields across 3 APIs as part of Spark Connect server launch for EMR on EKS. The fields added are sessionIdleTimeoutInMinutes, sessionEnabled, endpointToken, authProxyUrl and encryptionKeyArn. ([a62275e](https://github.com/aws/aws-sdk-js-v3/commit/a62275e33d64fd761c495af7b3603fccef34f99f))
* **client-lambda:** AWS Lambda now returns a new DependencyError value in StateReasonCode and LastUpdateStatusReasonCode to provide more actionable information when a function reaches a failed state due to an error from an upstream dependency or service. ([aa8732a](https://github.com/aws/aws-sdk-js-v3/commit/aa8732a0942c6bc2e9897ebab5f358e4041a1a6e))
* **client-mq:** This release adds storage size parameter for Amazon MQ for RabbitMQ cluster deployment broker on engine version RabbitMQ 4.2. You can now set a configurable storage size within a range of sizes dependent on broker instance size. ([a19e4c8](https://github.com/aws/aws-sdk-js-v3/commit/a19e4c8be0c2e18081e0d5025905b2b850042231))
* **client-securityhub:** AWS Security Hub now provides an AI inventory, giving central security teams a continuously updated, organization-wide view of AI assets and their security posture ([e5e2f52](https://github.com/aws/aws-sdk-js-v3/commit/e5e2f52e31e671a4115e0ac249e1ec1418a43674))
* **client-servicediscovery:** Fixed Cloud Map endpoint resolution to correctly route to the dualstack endpoint when dualstack is enabled. ([f853718](https://github.com/aws/aws-sdk-js-v3/commit/f853718ec74623127a5789e00034f07411472f48))
* **client-ssm:** Update AWS Systems Manager Automation Targets to be correct max value. ([7506cef](https://github.com/aws/aws-sdk-js-v3/commit/7506cef18526419998e08e8dd97c1a5d56534d3a))





# [3.1086.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1085.0...v3.1086.0) (2026-07-13)


### Bug Fixes

* **credential-providers:** memoization in fromNodeProviderChain ([#8185](https://github.com/aws/aws-sdk-js-v3/issues/8185)) ([1f878ba](https://github.com/aws/aws-sdk-js-v3/commit/1f878badeb9c7c9484b6ce9dea3af36edd72ff13))


### Features

* **client-elasticsearch-service:** Adds support for the EngineMode and UseCase parameters on Amazon Elasticsearch Service domains, enabling GENERAL or OPTIMIZED engine modes and SEARCH, VECTOR, OBSERVABILITY, or MIXED usecases when creating and updating domain configurations. ([f8248f2](https://github.com/aws/aws-sdk-js-v3/commit/f8248f273eafd3d38a85b00a910e8361b88f4234))
* **client-gamelift:** Amazon GameLift Servers now includes fleet expiration for managed fleets. A managed fleet expires one year after creation, transitioning to EXPIRED status, emitting a FLEET EXPIRED event, and scaling to zero instances. Expired fleets cannot host new game sessions or increase capacity. ([ca1487c](https://github.com/aws/aws-sdk-js-v3/commit/ca1487cad489ca2e88496be68c6357faf74bf492))
* **client-guardduty:** GuardDuty AI Protection is now publicly available. Findings include Bedrock guardrail details, model details, observation numbers, and continuous scan details. GuardrailArn and GuardrailVersion are deprecated in favor of the guardrails list. ([7456bef](https://github.com/aws/aws-sdk-js-v3/commit/7456befb0b4c391b0038961f290afa9b8a1cc609))
* **client-lambda:** Add Java 8, 11 and 17 on AL2023 (java8.al2023, java11.al2023, java17.al2023) support to AWS Lambda. ([b9cd8db](https://github.com/aws/aws-sdk-js-v3/commit/b9cd8db4e16718877328cdde9a8478ffecaee714))
* **client-redshift-serverless:** Add support for preserving datasharing, zero-ETL and S3 event integrations on snapshot restore to serverless namespace. ([0ed5e33](https://github.com/aws/aws-sdk-js-v3/commit/0ed5e330fc88ba16a49ac673962622e8373f85b4))
* **clients:** update client endpoints as of 2026-07-13 ([22a3bc5](https://github.com/aws/aws-sdk-js-v3/commit/22a3bc515d256663596f02b273aaf38b6bf91830))





# [3.1085.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1084.0...v3.1085.0) (2026-07-10)


### Features

* **client-cloudwatch:** CloudWatch now assigns a unique identifier to each anomaly detector. PutAnomalyDetector and DescribeAnomalyDetectors return this AnomalyDetectorId, which you can use to describe or delete a specific anomaly detector directly. ([36fc0ee](https://github.com/aws/aws-sdk-js-v3/commit/36fc0ee52f520bcd30676ec8954140309719677f))
* **client-ec2:** New Amazon EC2 instances. M9g, M9gd, C9g, and C9gd on AWS Graviton5. C8in, M8in, and R8in add 600 Gbps network. C8ib, M8ib, and R8ib add 300 Gbps EBS. C8ine, M8ine, M8idn, R8idn, M8idb, and R8idb round out Intel Xeon 6. Mac-m3ultra with Apple M3 Ultra. G7 with NVIDIA RTX PRO 4500 Blackwell GPUs. ([35aaf38](https://github.com/aws/aws-sdk-js-v3/commit/35aaf38707d66fa250c40fbef879fb9254a38cab))
* **client-inspector2:** Support for 3 day and 7 day ECR re-scan durations ([4b0b5c8](https://github.com/aws/aws-sdk-js-v3/commit/4b0b5c86d1c0c228751d3ad42287c96599982eab))
* **client-lambda:** Added TelemetryConfig support for Managed Instances Capacity Provider, enabling customers to configure system log level and custom log group for managed instance logging. ([6338813](https://github.com/aws/aws-sdk-js-v3/commit/6338813981e21da09c2afff2774453bfeed8b0de))
* **client-license-manager:** Added the ResetUsage field to the CreateLicenseVersion API. When set to true, the entitlement usage counts for the license are reset to 0. If it is false or not specified, entitlement usage is left unchanged. ([52f1c9c](https://github.com/aws/aws-sdk-js-v3/commit/52f1c9c03192532f8d7fd99fbd9a3a1a567df6ad))
* **client-quicksight:** Provides CreateKnowledgeBase and UpdateKnowledgeBase APIs ([42de552](https://github.com/aws/aws-sdk-js-v3/commit/42de55235e68fccff5f36ba5dddd4f6026b9c4f4))
* **client-sagemaker:** Release support for g4d, c6g, c7g, c8g instance types for SageMaker HyperPod ([800976d](https://github.com/aws/aws-sdk-js-v3/commit/800976de4cc075bdd3f835982236e646e2871566))
* **clients:** update client endpoints as of 2026-07-10 ([dffbeab](https://github.com/aws/aws-sdk-js-v3/commit/dffbeab020cb30acaf3e126b70df855fbd644b38))





# [3.1084.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1083.0...v3.1084.0) (2026-07-09)


### Features

* **client-connect:** Amazon Connect - Added DeleteContactData API to support PII deletion of customer endpoint, additional email recipients and email subject. ([87f4ae0](https://github.com/aws/aws-sdk-js-v3/commit/87f4ae0edee3b09fccf660a9ec06f3819c0de033))
* **client-ec2:** Added support for additional override parameters in CreateFleet, including LaunchTemplateSpecificationUserData, KeyName, IamInstanceProfile, and MetadataOptions. The CreateFleet response now also includes SubnetId, AvailabilityZone, and AvailabilityZoneId for launched instances. ([6fcc95d](https://github.com/aws/aws-sdk-js-v3/commit/6fcc95d184daf8db8b4ab131932b86d011628deb))
* **client-guardduty:** Adding "AI Analyst" enum value for detector ([20518a4](https://github.com/aws/aws-sdk-js-v3/commit/20518a4ffa622068a3452405a2d56565a5076ed3))
* **client-ivs:** adds support for AWS IVS ad configuration APIs to allow for a postRollConfiguration object on the ad configuration resource ([7dd93c4](https://github.com/aws/aws-sdk-js-v3/commit/7dd93c48dbdb50fe7039cbb94071c73249bc6419))
* **client-synthetics:** CloudWatch Synthetics adds support for customer managed KMS keys for canary environment variables. Customers can now encrypt their canary's Lambda function environment variables at rest using their own AWS KMS key, providing additional control over data protection. ([c737915](https://github.com/aws/aws-sdk-js-v3/commit/c7379151145d04c34200a72783f0439873519b6d))





# [3.1083.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1082.0...v3.1083.0) (2026-07-08)


### Features

* **client-signin:** Adds support for OAuth 2.0 token operations in AWS Sign-In, CreateOAuth2TokenWithIAM (client credentials flow), IntrospectOAuth2TokenWithIAM (token inspection), and RevokeOAuth2TokenWithIAM (token revocation). ([bc64f6b](https://github.com/aws/aws-sdk-js-v3/commit/bc64f6b2017dedd2fd49a3f3a4a67a967ec5c2cf))





# [3.1082.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1081.0...v3.1082.0) (2026-07-08)


### Bug Fixes

* **lib-transfer-manager:** destroy orphaned response streams on abort ([#8165](https://github.com/aws/aws-sdk-js-v3/issues/8165)) ([8a5e590](https://github.com/aws/aws-sdk-js-v3/commit/8a5e590c9386c2106444971fc26dbb4f21926358))


### Features

* **client-appconfig:** Update ExperimentRun APIs to support ConflictExceptions. ([d985124](https://github.com/aws/aws-sdk-js-v3/commit/d985124fd39f761a7b65a2d467778cf03f8946c6))
* **client-bedrock-agentcore-control:** AgentCore Gateway now supports mapping allowed scopes to separate advertised scopes on the inbound authorizer. ([bde793c](https://github.com/aws/aws-sdk-js-v3/commit/bde793c87392f5f6991790abe0f4f9a6f7fe2363))
* **client-ec2:** Replace Root Volume now supports a VolumeId parameter. This allows the customer to pass in a pre-prepared volume as the target root volume for an RRV workflow. ([76859d4](https://github.com/aws/aws-sdk-js-v3/commit/76859d480e3786942a43b82e55b74632fdce0ee1))
* **client-ecs:** Amazon ECS now automatically detects the correct CPU architecture for Express Mode services. ([a273b75](https://github.com/aws/aws-sdk-js-v3/commit/a273b75711e07dc1c0445880172ca76e6bfafb3c))
* **client-geo-places:** Added AddressNamesMode, AddressNameTranslations, MobilityMode, PostalCodeMode, SecondaryAddresses, and DriveThrough features across Places V2 APIs to support address name formatting,  multilingual translations, travel-aware search, multi-city postal codes, and unit-level address resolution. ([81bbd67](https://github.com/aws/aws-sdk-js-v3/commit/81bbd6772403999d20f80bb4bd0e582769251751))
* **client-iot-wireless:** Default session downlink transmission parameters have been added to the existing Multicast Group APIs. Explicit transmission parameters are no longer required when starting a multicast session during the FUOTA procedure. ([a2e2650](https://github.com/aws/aws-sdk-js-v3/commit/a2e2650398637a623a7f99eaddd2267f26c3f2e0))
* **client-resiliencehubv2:** Next Generation Resilience Hub now supports filtering and sorting failure mode assessments, resource type filtering in ListResources, cross-region and cross-account topology edges, data recovery achievability status, and more granular dependency discovery progress tracking. ([572ad2c](https://github.com/aws/aws-sdk-js-v3/commit/572ad2cf71f6925d7ecef0affa0e82cef0ccc24a))
* **core/client:** propagate w3c trace headers ([#8156](https://github.com/aws/aws-sdk-js-v3/issues/8156)) ([e5f383c](https://github.com/aws/aws-sdk-js-v3/commit/e5f383c77b935532ab183a43b139faf1d889a0fc))
* **credential-providers:** deferred loading for credential providers aggregation package ([#8129](https://github.com/aws/aws-sdk-js-v3/issues/8129)) ([d0f426c](https://github.com/aws/aws-sdk-js-v3/commit/d0f426cb354454238efc135a059ee413406a196c))
* **undici-http-handler:** bump version to 3.0.0 ([#8168](https://github.com/aws/aws-sdk-js-v3/issues/8168)) ([6c243a1](https://github.com/aws/aws-sdk-js-v3/commit/6c243a15d8e0b059098d547a7b48311d9e43e352))





# [3.1081.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1080.0...v3.1081.0) (2026-07-07)


### Bug Fixes

* **credential-provider-http:** fix token and URI path priority resolution ([#8159](https://github.com/aws/aws-sdk-js-v3/issues/8159)) ([e9e857d](https://github.com/aws/aws-sdk-js-v3/commit/e9e857d324d216f705e5b2fe0e8f8c535e55d7fb))
* **scripts:** publish unreleased X.0.0 baseline versions as-is ([#8160](https://github.com/aws/aws-sdk-js-v3/issues/8160)) ([ee9dc95](https://github.com/aws/aws-sdk-js-v3/commit/ee9dc9534e5979931167a39c98e330f9a6a79cee))
* **tests:** use ES format for rollup bundle-size benchmark ([#8163](https://github.com/aws/aws-sdk-js-v3/issues/8163)) ([506e3ae](https://github.com/aws/aws-sdk-js-v3/commit/506e3aee8c6f66d91c1921b51779f76d8b4ac7b1))


### Features

* **client-config-service:** Added support for connecting AWS Config to third-party cloud service providers. New APIs include PutConnector, GetConnector, DeleteConnector, and ListConnectors for managing connectors, and PutThirdPartyServiceLinkedConfigurationRecorder for creating third-party service-linked recorders. ([df52cb1](https://github.com/aws/aws-sdk-js-v3/commit/df52cb13ddd306ff78731fc126e0b4b1b60bde4b))
* **client-connect:** Adds support for CreateAuthCode and DeleteSession APIs. ([b84bbf6](https://github.com/aws/aws-sdk-js-v3/commit/b84bbf6f4aa3e3ed630d76029180872a5c3c99ee))
* **client-ec2:** This launch surfaces the public SSM parameter associated with public AMIs in the AMI metadata. ([9e8f9fa](https://github.com/aws/aws-sdk-js-v3/commit/9e8f9fa870eab8f555c7caea5ca42a5e4a996533))
* **client-inspector2:** This release extends vulnerability management to Azure VM, container registries and function apps. Adds support for per-member-account scan configuration settings. ([ae9b7bc](https://github.com/aws/aws-sdk-js-v3/commit/ae9b7bcfc791fa573cf258443e56ec3620e48783))
* **client-lambda:** AWS Lambda Durable Functions now supports customer managed KMS keys. This allows customers to configure a KMS key in Durable Config to have all their durable execution data encrypted. ([796bc54](https://github.com/aws/aws-sdk-js-v3/commit/796bc54a27e4b180498f91c998553194a793d179))
* **client-marketplace-catalog:** This release enhances the ListEntities API to support ResellerRole filter for ResaleAuthorization entity. ([d7b7cb7](https://github.com/aws/aws-sdk-js-v3/commit/d7b7cb79170267e6c6b7c38432a9d8ef8288d28c))
* **client-partnercentral-revenue-measurement:** Add support for AWS Partner Central Revenue Measurement API for creating, managing, and tracking revenue attributions and marketplace revenue share allocations. ([9f3e80e](https://github.com/aws/aws-sdk-js-v3/commit/9f3e80e613d9c234ddc3dcd8a6916ee3d0653ab9))
* **client-route53globalresolver:** Adds ListSharedDNSViews operation to list all DNS Views shared with caller using AWS Resource Access Manager. Also updates ListHostedZoneAssociations operation so that resource ARN param is optional, allowing caller to list all HostedZoneAssociations in account. ([0e11517](https://github.com/aws/aws-sdk-js-v3/commit/0e11517de3c81ff489ad83876301828ea7803a3b))
* **client-securityhub:** release SecurityHub MultiCloud integration with Azure ([6f7d08e](https://github.com/aws/aws-sdk-js-v3/commit/6f7d08e01be650bfbc6fa76ccb87362bda1066b0))
* **client-ssm:** Adding SSM Cloud Connector to support Azure Virtual Machines onboarding to AWS Systems Manager ([6efef57](https://github.com/aws/aws-sdk-js-v3/commit/6efef57f1f2da74e5765bc1de2bc16f89cc30253))
* **clients:** update client endpoints as of 2026-07-07 ([fc9fb99](https://github.com/aws/aws-sdk-js-v3/commit/fc9fb9908ee490cb91e7e5b32a3875d8b54fdb5c))





# [3.1080.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1079.0...v3.1080.0) (2026-07-06)


### Features

* **client-billing:** Adds support for managing AWS account credits and billing preferences, including retrieving credit details, viewing per-month credit allocation history, redeeming promotional codes, and configuring credit sharing and billing preferences. ([f710aa7](https://github.com/aws/aws-sdk-js-v3/commit/f710aa709dde305de0e40eb488fe52f97ba323b2))
* **client-cloudwatch-logs:** Added PutStorageTierPolicy and GetStorageTierPolicy APIs to Amazon CloudWatch Logs. Customers can now configure account-level Intelligent Tiering to automatically optimize log storage costs by moving infrequently accessed data to lower-cost storage tiers. ([f3cba29](https://github.com/aws/aws-sdk-js-v3/commit/f3cba29f50f693632d3af11f4f9115647d2d107f))
* **client-mailmanager:** This release adds Smithy RPC v2 CBOR as an additional protocol alongside the existing AWS JSON 1.0. The SDK will prioritize its most performant protocol. ([d929091](https://github.com/aws/aws-sdk-js-v3/commit/d929091bafbed2b5fe73fb47cf10c9797745f79b))
* **client-opensearch:** This release introduces Saved Object Migration APIs, enabling users to migrate dashboards, visualizations, index patterns, and other saved objects from a data source into an Amazon OpenSearch Service application workspace with configurable export filters and conflict resolution strategies. ([1c8fbcf](https://github.com/aws/aws-sdk-js-v3/commit/1c8fbcf822e652bcc2ca8d4d14500f6a975b7231))
* **clients:** update client endpoints as of 2026-07-06 ([fc19f57](https://github.com/aws/aws-sdk-js-v3/commit/fc19f57715455380d1af5f2c820639a79fd8b1d1))





# [3.1079.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1078.0...v3.1079.0) (2026-07-02)


### Bug Fixes

* **core:** remove turbo.json ([#8141](https://github.com/aws/aws-sdk-js-v3/issues/8141)) ([91d738d](https://github.com/aws/aws-sdk-js-v3/commit/91d738d3ab851a8809f816584aaf4169fb23638e))


### Features

* **client-cognito-identity-provider:** Add support for provisioned limit management, enabling customers to view and update their provisioned API rate limits for Amazon Cognito User Pools programmatically through the new GetProvisionedLimit and UpdateProvisionedLimit APIs. ([160778d](https://github.com/aws/aws-sdk-js-v3/commit/160778dc11e6b8e93c3a576dd9bca809498eebf2))
* **client-config-service:** AWS Config now supports tag-on-create for organization-managed Config rules and conformance packs through the PutOrganizationConfigRule and PutOrganizationConformancePack APIs. ([2ca9232](https://github.com/aws/aws-sdk-js-v3/commit/2ca9232a8a31003d542403c0a31d5aaeada78b83))
* **client-customer-profiles:** Amazon Connect Customer Profiles adds support for diversityConfig to recommenderConfig which can be used for diversifying the recommendations. This release also includes model versioning support which helps customer to rollback trained models. ([202ec32](https://github.com/aws/aws-sdk-js-v3/commit/202ec32a9586d6581485424c681626d49babaefe))
* **client-elementalinference:** Adding new BDD representation of endpoint ruleset ([dd21a6e](https://github.com/aws/aws-sdk-js-v3/commit/dd21a6ecbf8dfbc6be8cc2fd8b07f81bde140978))
* **client-mediatailor:** Added dual-stack (IPv4 and IPv6) endpoint fields to SSAI and Channel Assembly API responses. ([63a258c](https://github.com/aws/aws-sdk-js-v3/commit/63a258ce969e11cd16dbdcb3e4c994c2940fe618))
* **client-odb:** Updated model definitions for ODB service. ([a9d3fd5](https://github.com/aws/aws-sdk-js-v3/commit/a9d3fd5e34e1fc223ce0a4c7db51306d8ebe2fb7))
* **client-outposts:** Tighten Outpost site ContactPhoneNumber regex to perform phone number validation. ([4e2b31d](https://github.com/aws/aws-sdk-js-v3/commit/4e2b31dbebaa446b6d435756b1ccaa4807d82730))
* **clients:** update client endpoints as of 2026-07-02 ([cc43668](https://github.com/aws/aws-sdk-js-v3/commit/cc43668e0ad4e748c61f38070cae026123fec751))





# [3.1078.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1077.0...v3.1078.0) (2026-07-01)


### Features

* **client-artifact:** Add support for Assurance Assistant APIs for managing compliance inquiries along with tagging features. ([a1aeba1](https://github.com/aws/aws-sdk-js-v3/commit/a1aeba10d896dff4b5a8c4525854812ae0e29c38))
* **client-connect:** Adds a new Amazon Connect Service API, SendOutboundWebNotification, that delivers web notifications to end-customer chat widget sessions. Callable only by the Amazon Connect Outbound Campaigns service principal. ([68a3994](https://github.com/aws/aws-sdk-js-v3/commit/68a399419e31730c0ae135f183082ae8675e9ff9))
* **client-ec2:** Use declarative policies to enable VPC Encryption Controls across your organization or select accounts. Added AMD SEV-SNP support for EC2 Dedicated Hosts. Managed resource visibility settings control whether AWS-provisioned resources in your account appear in console views and API list operations. ([6d82b78](https://github.com/aws/aws-sdk-js-v3/commit/6d82b78d175808ca5fd5ab7d414d75c705d42930))
* **client-gameliftstreams:** Added CreateStreamSessionAdminShell API operation to enable customers to establish secure terminal connections to the live runtime environment of streaming sessions for troubleshooting purposes. ([6040732](https://github.com/aws/aws-sdk-js-v3/commit/60407323a7acd73a6422139ac15274fb94d13abe))
* **client-mediaconvert:** Adds support for integer-second duration normalization and the option to disable explicit weighted prediction. ([0a11644](https://github.com/aws/aws-sdk-js-v3/commit/0a11644bbd2284c8fd5cd9a8ec898b77ba552b9c))
* **client-opensearch:** To create a Mustang domain via the AWS CLI, you must pass EngineMode OPTIMIZED (along with UseCase OBSERVABILITY or MIXED)  without it, the domain defaults to a regular (GENERAL) domain. Also this release includes Insights Feedback API which user can use to provide feedback for Insight API. ([8927c3a](https://github.com/aws/aws-sdk-js-v3/commit/8927c3ad57503d069a5a764d931b8ce554c2fe1e))
* **client-quicksight:** Adding support for FileSource PhysicalTables.  This adds support for datasets with file sources. ([1ce4d09](https://github.com/aws/aws-sdk-js-v3/commit/1ce4d09aabc4016bf88bf542c6c64386982bc514))
* **clients:** update client endpoints as of 2026-07-01 ([0c0bc42](https://github.com/aws/aws-sdk-js-v3/commit/0c0bc427405e032df4028b786271e7938cf83b5f))





# [3.1077.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1076.0...v3.1077.0) (2026-06-30)


### Features

* **client-acm:** AWS Certificate Manager now supports the Automatic Certificate Management Environment (ACME) protocol to issue public certificates. ACME is an industry-standard protocol for automating certificate lifecycle on customer-managed infrastructure such as on-premises servers and Kubernetes clusters. ([9841f50](https://github.com/aws/aws-sdk-js-v3/commit/9841f50ddef56a3a17896db869ec0d6468f492f5))
* **client-auto-scaling:** This release adds support for a new reservations-then-balanced capacity distribution strategy, which first attempts to launch instances into your Capacity Reservations and then balances remaining capacity across healthy Availability Zones. ([38d2d62](https://github.com/aws/aws-sdk-js-v3/commit/38d2d626cd0bfce2f88e1efd339ba83626300610))
* **client-cleanrooms:** Adds support for intermediate tables in AWS Clean Rooms collaborations. ([a259b5a](https://github.com/aws/aws-sdk-js-v3/commit/a259b5abe2e417dff759c0ad9fa6bfcd464123ca))
* **client-cloudformation:** AWS CloudFormation adds a DeploymentConfig parameter to enable Express mode, which completes stack operations as soon as resource configuration is applied. Also adds a DisableValidation parameter to skip pre-deployment validation, which now runs automatically on CreateStack and UpdateStak. ([5ac630b](https://github.com/aws/aws-sdk-js-v3/commit/5ac630b8e2ef81348a2961fe7bbd8423a238544b))
* **client-cloudwatch:** Customers can configure alarms with wall-clock-aligned evaluation windows instead of sliding windows, with optional timezone support for daily or weekly periods ([3b42825](https://github.com/aws/aws-sdk-js-v3/commit/3b4282598c3600ac2f442894880734cea0903207))
* **client-codebuild:** Adds support for host kernel selection for on-demand builds. ([c051e43](https://github.com/aws/aws-sdk-js-v3/commit/c051e4320a8e62c43d234a95c59db92b2229521f))
* **client-connect:** Amazon Connect - Added CreateAttachedFile and StartContactConversationalAnalyticsJob APIs to import call recordings and run conversational analytics. ([526d3d5](https://github.com/aws/aws-sdk-js-v3/commit/526d3d5f4bd46d576a9781f1acc15d7c26c2ad77))
* **client-datazone:** Amazon DataZone now supports SNOWFLAKE as a connection type in the CreateConnection API, enabling metadata and lineage retrieval from Snowflake databases. Specify snowflakeProperties with connection details, a Secrets Manager secret, an Athena spill bucket, and an identity mapping for Snowflake. ([4bdc89d](https://github.com/aws/aws-sdk-js-v3/commit/4bdc89d6d82100aa3569847fde1d1b2aefb73b83))
* **client-ec2:** Adds ModifyVpcEndpointPayerResponsibility API, which enables VPC endpoint service owners to modify the billing account for VPC endpoint usage charges at the individual endpoint level ([843c934](https://github.com/aws/aws-sdk-js-v3/commit/843c934cc8917bee5e1246306a4e1fa0e83c4d23))
* **client-eks:** Adds Kubernetes version rollback support, including the CancelUpdate operation to cancel an in-progress VersionRollback update, the RollbackConfig structure with a timeoutMinutes field, and the Cancellation structure surfaced via the new cancellation field on the Update object. ([17e627a](https://github.com/aws/aws-sdk-js-v3/commit/17e627a941f83c6b1f188d429e3d9f7825f0f41b))
* **client-network-firewall:** AWS Network Firewall now supports container associations for monitoring ECS and EKS workloads. You can create container associations to dynamically track the IP addresses of running containers in your Amazon ECS and Amazon EKS clusters. ([a884f90](https://github.com/aws/aws-sdk-js-v3/commit/a884f90a81cf0df24453b8d9f600cf3ef008df47))
* **client-observabilityadmin:** Organization and account level telemetry rule via Observability Admin and CloudWatch pipelines for metrics ([35b4d8a](https://github.com/aws/aws-sdk-js-v3/commit/35b4d8a28691cbe4398d3c7f62d48ee42f7cd1f7))
* **client-partnercentral-selling:** This release adds AwsMarketplaceSolutions and AwsMarketplaceProducts entity types to the Associate and Disassociate APIs, returns them in GetOpportunity, and adds AwsMarketplaceSolutionArn to ListSolutions ,letting partners link Marketplace listings directly to opportunities. ([2d2de8d](https://github.com/aws/aws-sdk-js-v3/commit/2d2de8d10b708020f790070c278286192ba8ab90))
* **client-sso-admin:** AWS IAM Identity Center now returns PrimaryRegion and Regions in the ListInstances response, providing information about replicated instances. ([8538563](https://github.com/aws/aws-sdk-js-v3/commit/8538563a100bec41b75ac2a04f5940947be39d18))
* **client-supportauthz:** New SDK release for SupportAuthZ. ([bad44b4](https://github.com/aws/aws-sdk-js-v3/commit/bad44b4b85c952269b61546c69d947ef08af56ea))
* **clients:** update client endpoints as of 2026-06-30 ([f184889](https://github.com/aws/aws-sdk-js-v3/commit/f1848891ea566dd097a9c69dd62759686658c68c))
* **lib-transfer-manager:** add uploadDirectory functionality ([#8121](https://github.com/aws/aws-sdk-js-v3/issues/8121)) ([29b5656](https://github.com/aws/aws-sdk-js-v3/commit/29b5656447cbf5367825a88c11f325a911652524))





# [3.1076.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1075.0...v3.1076.0) (2026-06-29)


### Features

* **client-appconfig:** AWS AppConfig introduces Experimentation tools - enhanced capabilities within AWS AppConfig that enable you to run AB tests, multivariate tests, and gradual feature rollouts across your application stack. ([2b8591d](https://github.com/aws/aws-sdk-js-v3/commit/2b8591de5c93c50901b5ae1e7abe0f8c3e557fdb))
* **client-cloudwatch:** This release adds the API (PutLogAlarm) to manage a new CloudWatch resource, Log Based Alarms. Log Based Alarms allows customers to alarm directly on CloudWatch Logs query results. ([14f023b](https://github.com/aws/aws-sdk-js-v3/commit/14f023badd34a78632b4792a4039c6f6faa7486b))
* **client-connectcampaignsv2:** Adding new attributes to PutProfileOutboundRequest API that will create an outbound request call for the customer's Web Notification outbound campaign. ([05f467f](https://github.com/aws/aws-sdk-js-v3/commit/05f467f78815884db3d8dcb4a99e1ab95679efe5))
* **client-connecthealth:** Expand input validation to support Unicode characters and markdown table syntax. ([a20832a](https://github.com/aws/aws-sdk-js-v3/commit/a20832a34042dc7a64fe27207d26e32950f04c92))
* **client-ec2:** Adds support for the precision time strategy and a parentGroupId parameter on CreatePlacementGroup and DescribePlacementGroups. Precision time placement groups and cluster placement groups with a parent precision time placement group ensure instances launch on precision time capable hardware. ([3482937](https://github.com/aws/aws-sdk-js-v3/commit/3482937a47912a63508f7673372812c109e61578))
* **client-ecs:** Amazon ECS now supports customizable deployment circuit breaker configurations. Customers can now define the failure threshold or control the failure counting mechanism. ([ff85bd3](https://github.com/aws/aws-sdk-js-v3/commit/ff85bd339bd4e5023feaef0559766015e3da9b40))
* **client-evs:** Amazon EVS introduces a VMware Cloud Foundation (VCF) self-deployed mode, along with new connectors to VCF components such as the Operations and SDDC managers to monitor coverage and usage. ([2ae38fe](https://github.com/aws/aws-sdk-js-v3/commit/2ae38fea02b0248faaacee4fcd090d40865a8942))
* **client-glue:** Added the UpdateAsset operation to set the business name and description for an existing AWS Glue Data Catalog asset. ([fe604af](https://github.com/aws/aws-sdk-js-v3/commit/fe604af0d8fb13aba0bd2829458e5d0476f47970))
* **client-imagebuilder:** Adds support for AMI watermarks in Image Builder. ([17e643a](https://github.com/aws/aws-sdk-js-v3/commit/17e643a9fd646c648fece0738a2af282ac1edf23))
* **client-lambda:** Lambda now supports self-managed S3 buckets for Lambda code storage giving you the option for Lambda to reference a copy of your source code from your own S3 buckets. This allows you to maintain a single copy of your source code and manage your own code storage limits. ([0268f93](https://github.com/aws/aws-sdk-js-v3/commit/0268f939a68bc042e376ab192a1bd9790750fa28))
* **client-pcs:** Add support for in-place Slurm version upgrades on existing clusters by accepting scheduler.version in UpdateCluster. ([16469f6](https://github.com/aws/aws-sdk-js-v3/commit/16469f6b6af8a6f2968d2342213b8020529ec926))
* **client-pinpoint-sms-voice-v2:** This launch is an expansion of our Q1 RCS for business launch where we will release an API that supports rich media and interactive messaging elements. ([46b1644](https://github.com/aws/aws-sdk-js-v3/commit/46b16440ad40f8ab26d01ff7c09a94c2c9521cfc))
* **client-resource-explorer-2:** Added CFN resource type fields for Search and ListSupportedResourceTypes responses. Added SLRec field for ServiceView ([a377383](https://github.com/aws/aws-sdk-js-v3/commit/a3773832d2f12cd7376faab68ae92f90edde2313))
* **client-sagemaker-featurestore-runtime:** Add support for ListRecords and BatchWriteRecord APIs to Feature Store. ([7a6ffe5](https://github.com/aws/aws-sdk-js-v3/commit/7a6ffe5ed4120d6637fc176a27efcaccc0752c95))
* **client-vpc-lattice:** Amazon VPC Lattice now supports mutable idle timeout configuration on VPC Lattice Services ([217aaea](https://github.com/aws/aws-sdk-js-v3/commit/217aaea51e06d66991ddaecd204f0eb9b515838d))
* **client-wafv2:** AWS WAF added support for associating AWS WAF web ACLs with Amazon Bedrock AgentCore Gateway resources. You can now use AssociateWebACL, DisassociateWebACL, GetWebACLForResource, and ListResourcesForWebACL to protect your AgentCore Gateways with AWS WAF. ([54ea321](https://github.com/aws/aws-sdk-js-v3/commit/54ea3212eb9c71f378ac801e94fa689efde0e2df))





# [3.1075.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1074.0...v3.1075.0) (2026-06-23)


### Features

* **client-kafka:** Amazon MSK Replicator now supports mTLS authentication when connecting to external Apache Kafka clusters, enabling customers to replicate data from clusters that require mutual TLS for client authentication. This capability is supported when replicating to Amazon MSK Express brokers. ([005f952](https://github.com/aws/aws-sdk-js-v3/commit/005f9529d4d3cd0c98b002a3584773b253a702dc))





# [3.1074.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1073.0...v3.1074.0) (2026-06-22)


### Bug Fixes

* **cloudfront-signer:** filename asterisk apostrophe encoding fix ([#8119](https://github.com/aws/aws-sdk-js-v3/issues/8119)) ([35acab4](https://github.com/aws/aws-sdk-js-v3/commit/35acab408b9bd5350928525c8a67563ae551580a))


### Features

* **client-application-signals:** Application Signals now supports dynamic instrumentation and Service Events telemetry. Add instrumentation at runtime without restarts, and use fine-grained profiling data to quickly pinpoint latency and error root causes. ([f93b1c0](https://github.com/aws/aws-sdk-js-v3/commit/f93b1c0333846b2d16c698f8c9b4034f93ab867c))
* **client-bedrock-agentcore:** Adds an optional extractionMode field to CreateEvent. SKIP retains the event in short-term memory but excludes it from long-term memory extraction. ([749753a](https://github.com/aws/aws-sdk-js-v3/commit/749753adae395e3ab3ab494df119f8d6354ca562))
* **client-cloudwatch-logs:** CloudWatch Logs Updates - New APIs introduced to support syslog ingestion to a log group. For more information, see CloudWatch Logs API documentation. ([01a3b51](https://github.com/aws/aws-sdk-js-v3/commit/01a3b513503169fb86db0bea0889f585c9004b55))
* **client-direct-connect:** Added VIF rate limiting support for AWS Direct Connect, allowing customers to set bandwidth allocations on virtual interfaces to manage traffic on dedicated connections. ([228a95d](https://github.com/aws/aws-sdk-js-v3/commit/228a95dc0c11cbcc1f007718faf93181c014a854))
* **client-ec2:** This release adds support for AMI Watermark and Allowed AMIs integration ([d1698be](https://github.com/aws/aws-sdk-js-v3/commit/d1698bed3961295343fdd86d0a57820538023bc7))
* **client-guardduty:** Added AI-powered investigations that automatically analyze security findings, correlate related activity, and produce structured summaries with risk assessment, confidence scoring, MITRE technique classification, and actionable next steps. ([83c2983](https://github.com/aws/aws-sdk-js-v3/commit/83c2983945db4a54b004feed8d2d18935a3df431))
* **client-kafka:** Amazon MSK Replicator now supports mTLS authentication when connecting to external Apache Kafka clusters, enabling customers to replicate data from clusters that require mutual TLS for client authentication. This capability is supported when replicating to Amazon MSK Express brokers. ([ce7d1bf](https://github.com/aws/aws-sdk-js-v3/commit/ce7d1bf501fe6f7d6a454f96c1befc3829e23385))
* **client-lambda-core:** Initial release of the AWS Lambda Core SDK with APIs to create, manage, and tag network connectors that enable Lambda compute resources to access private resources in your Amazon VPC. ([e35cdab](https://github.com/aws/aws-sdk-js-v3/commit/e35cdab89fcf7ca679f37776418cb8d8e1269c14))
* **client-lambda-microvms:** Lambda MicroVMs GA launch. Lambda MicroVMs enable isolated and highly responsive execution of user-supplied or LLM-generated code. ([5519a7e](https://github.com/aws/aws-sdk-js-v3/commit/5519a7e28fae4f57dd852109244b6370ff79f8bb))
* **client-lambda:** Add support for tagging Network Connector resources in AWS Lambda. ([fbfc407](https://github.com/aws/aws-sdk-js-v3/commit/fbfc40785e024fe2564e4be02ef425280693fce6))
* **client-mediaconnect:** AWS MediaConnect now supports Content Quality Analysis for Router Inputs, enabling detection of black frames, frozen frames, and silent audio with configurable thresholds. ([0505485](https://github.com/aws/aws-sdk-js-v3/commit/05054853a5aa6e740597c3932b5e2491b15e3a12))
* **client-omics:** Adds support for scratch ephemeral storage mounted at tmp ([331e302](https://github.com/aws/aws-sdk-js-v3/commit/331e3023c1049c5188dc4cec3adabae0c62e84f2))
* **client-quicksight:** Updated the Amazon Quick Spaces API to remove unsupported SPACE and ARTIFACT values from the SpaceQuickSightResourceType enum. ([e1b325d](https://github.com/aws/aws-sdk-js-v3/commit/e1b325d42e491ceb75742bbdb56bfc3b98767ff1))
* **clients:** update client endpoints as of 2026-06-22 ([3a55a33](https://github.com/aws/aws-sdk-js-v3/commit/3a55a3338792f712baf2e97d3f3c597fc28707c1))





# [3.1073.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1072.0...v3.1073.0) (2026-06-19)


### Features

* **client-appstream:** Amazon WorkSpaces Agent Access now supports domain-joined fleets for enterprise identity integration, real-time agent observation with instant stop controls, and MCP tool forwarding for lower-latency, cost-effective desktop tool access. ([d9c25f0](https://github.com/aws/aws-sdk-js-v3/commit/d9c25f0b3f641fdc1999f0d4377140c0f3476ede))
* **client-bedrock-agent:** Add support for metadata-only retrieval on GetFlow, GetFlowVersion, and GetPrompt APIs. ([c9d5fb3](https://github.com/aws/aws-sdk-js-v3/commit/c9d5fb3378ba0d1c7ab7d3fe7bec0296491c6bbc))
* **client-connect:** This is the release for point based scoring system and the evaluation form validation project ([b19c162](https://github.com/aws/aws-sdk-js-v3/commit/b19c162a2e22094c09d77d484ba0dfcfd3a5ecff))
* **client-glue:** Adds the SearchAssets operation for discovering assets in the AWS Glue Data Catalog using full-text search and filters. Minor naming refinements across the Glossary Terms and Attachment APIs for consistency. ([ef20465](https://github.com/aws/aws-sdk-js-v3/commit/ef204650ce46482b8b2bfeeb9c539244b59a848e))
* **client-opensearch:** This release introduces data source attachment APIs, enabling users to attach and detach Amazon OpenSearch Service domains and Amazon OpenSearch Serverless collections to an OpenSearch application. ([6cce3d6](https://github.com/aws/aws-sdk-js-v3/commit/6cce3d69dc550fb64245fa1eae1b4e74d6d23607))





# [3.1072.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1071.0...v3.1072.0) (2026-06-18)


### Features

* **client-application-auto-scaling:** Adds support for ECS high-resolution predefined scaling metrics (ECSServiceAverageCPUUtilizationHighResolution, ECSServiceAverageMemoryUtilizationHighResolution) enabling 20-second metric periods for faster scaling ([95b3513](https://github.com/aws/aws-sdk-js-v3/commit/95b3513a224a678fb92dc623f149d24adb96ae7b))
* **client-batch:** Adds Support for ordered allocation strategies- BEST-FIT-PROGRESSIVE-ORDERED or SPOT-CAPACITY-OPTIMIZED-PRIORITIZED ([0e57e53](https://github.com/aws/aws-sdk-js-v3/commit/0e57e53b1e0914a03b5b7c7d346245a1e6b6da11))
* **client-cloudwatch-logs:** Added optional startFromHead parameter to FilterLogEvents enabling descending timestamp order (newest first) when set to false. Default true preserves existing ascending order. Reverse sorting requires a startTime on or after Jan 1, 2024. ([1be63ed](https://github.com/aws/aws-sdk-js-v3/commit/1be63ed942af46df978e55df4bec6fb6c9d16e60))
* **client-cognito-identity-provider:** In order to support the new TLS Self-Service feature, this change adds SecurityPolicyType to CustomDomainConfigType. During CreateUserPoolDomain and UpdateUserPoolDomain this is used to select a custom domain's TLS enforcement, and for DescribeUserPoolDomain it informs users about the current TLS. ([e893778](https://github.com/aws/aws-sdk-js-v3/commit/e89377876aa392ea403636b6821cdb3df253648b))
* **client-compute-optimizer:** This release surfaces two new metrics Volume IOPS Exceeded and Volume Throughput Exceeded into EBS volume rightsizing recommendations. ([ded6618](https://github.com/aws/aws-sdk-js-v3/commit/ded6618d5249ab413bd90b26d4cea91d5f4b9b8f))
* **client-ecs:** Amazon ECS services now support high resolution (20 second) CloudWatch metrics for CPUUtilization and MemoryUtilization. Use these metrics for faster service auto scaling. ([93055ac](https://github.com/aws/aws-sdk-js-v3/commit/93055ac93bffca3e2957b2d67cb24ecdc784457a))
* **client-eks:** Adds support for configurable control plane egress routing in Amazon EKS, allowing you to route control plane egress traffic through your VPC and control how the control plane reaches resources in your network such as webhook servers and OIDC providers. ([693db62](https://github.com/aws/aws-sdk-js-v3/commit/693db62958c6818b4cb847887b8e36a66347c119))
* **client-gamelift:** Amazon GameLift Servers has launched support for customizing Linux capabilities in container fleets. You can now specify additional Linux capabilities for containers in a container group definition, giving you finer control over the default Docker capabilities available to your containers. ([93cefd9](https://github.com/aws/aws-sdk-js-v3/commit/93cefd905d4fc0c649b1d7ed69f4c8f0d79d3371))
* **client-healthlake:** Adding New Configurations to the FHIR Create Datastore. The new configurations include NLP Configuration, AnalyticsConfiguration, ProfileConfiguration ([494fa59](https://github.com/aws/aws-sdk-js-v3/commit/494fa59f48705e23ab79da259046966831183c71))
* **client-lambda:** Converging and fixing existing documentation gaps in Lambda SDK ([6555a56](https://github.com/aws/aws-sdk-js-v3/commit/6555a565348a308dad7a51c85457c2bcee87feb8))
* **client-sagemaker:** Adds support for automatic AMI patching on HyperPod clusters. Customers can configure patching strategies to automatically apply security patch with zero job termination. Customers can also specify an AMI version at instance group level and update cluster software to a certain AMI version. ([fd33a5e](https://github.com/aws/aws-sdk-js-v3/commit/fd33a5e46ca314f064b9149900abe4e451661b5e))
* **client-synthetics:** CloudWatch Synthetics adds support for multi-location canaries. Customers can now monitor their endpoints from multiple locations with centralized management from a primary location. The SDK includes new parameters for configuring multiple locations and tracking their state. ([f2c8b48](https://github.com/aws/aws-sdk-js-v3/commit/f2c8b480812b5ba2d1e173a8a074df6d72654239))





# [3.1071.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1070.0...v3.1071.0) (2026-06-17)


### Features

* **client-bedrock-agent-runtime:** Adds new AgenticRetrieveStream API for managed knowledge bases to use conversation history and autonomously plan for multi-hop multi-KB reasoning with built-in evaluation and access-control. Updates Retrieve API for access-control-based filtering for managed knowledge bases. ([557f7b3](https://github.com/aws/aws-sdk-js-v3/commit/557f7b3246fb6530fb8dcb481f1035d7827d2a1e))
* **client-bedrock-agentcore-control:** AgentCore Gateway now supports inference targets to LLM providers (direct config or built-in connectors), HTTP passthrough targets with session stickiness, runtime target API schemas, AWS WAF web ACL association with configurable fail-open or fail-close modes, and interceptor payload filtering. ([75f1d58](https://github.com/aws/aws-sdk-js-v3/commit/75f1d588d526de04060ebd653ca1a96e7ea75ff6))
* **client-bedrock-agentcore:** AgentCore Harness service will be Generally Available at NYS 2026 with this Treb release. Harness will support invoking specific endpoints via the qualifier parameter, AWS Skills for pre-built agent capabilities, and improved validation for skill git source URLs. ([5bf9fcc](https://github.com/aws/aws-sdk-js-v3/commit/5bf9fcccc3b4cc204df57caea2adcf254c5d3846))
* **client-bedrock-agent:** Launching Bedrock Managed Knowledge Bases. Added support for resource-based policies on Knowledge Base resources, enabling cross-account access for Managed Knowledge Bases. ([de0affe](https://github.com/aws/aws-sdk-js-v3/commit/de0affe4ad738b7f07d91574e2b2cfd83a447d44))
* **client-compute-optimizer-automation:** This launch adds IfExists comparison operators to Compute Optimizer Automation rule criteria, so a rule can include recommended actions whose specified attribute isn't present. ([ab2c616](https://github.com/aws/aws-sdk-js-v3/commit/ab2c616d167a0796fba91e44d1118a6a8baee60d))
* **client-devops-agent:** Adds support for Remote A2A (Agent-to-Agent) agent registration and management. Adds new Release Readiness Review and Release Testing capabilities. Adds support for Git managed skills in AWS DevOps Agent. ([ebc040e](https://github.com/aws/aws-sdk-js-v3/commit/ebc040e1f3fc292d3eee1a9b146c972338e14807))
* **client-ecs:** Releasing the ability to bring-your-own task-definition for CreateExpressGatewayService and UpdateGatewayExpressService ([b7b9cb4](https://github.com/aws/aws-sdk-js-v3/commit/b7b9cb4f46a34c4ab0fedf2138a9a5ba17bdd731))
* **client-glue:** This release adds support for Search and Discovery in AWS Glue, letting you and your applications search Data Catalog assets such as table and enrich them with business context and glossary terms. ([b394fc0](https://github.com/aws/aws-sdk-js-v3/commit/b394fc0b39c814d5f72593dfc4db5ff5c2cbe643))
* **client-mq:** This release adds private networking support for Amazon MQ for RabbitMQ. You can now associate AWS RAM resource shares with your broker and retrieve shared resource details using the new DescribeSharedResources API. ([e96af45](https://github.com/aws/aws-sdk-js-v3/commit/e96af4503bfea9a6f211bc905b8e949af6cc38d7))
* **client-opensearch:** Adds support for configuring IAM Identity Center options on existing OpenSearch applications via the UpdateApplication API. ([94f06a2](https://github.com/aws/aws-sdk-js-v3/commit/94f06a20a15ab75302088d5f3c31d708a8256e5c))
* **client-partnercentral-selling:** Cosell Resonate AND Prospecing API Launch with ARN correction ([7e8c98a](https://github.com/aws/aws-sdk-js-v3/commit/7e8c98abe070924fbbd1ea2abc183f0715f80945))
* **client-securityagent:** Updated AWS Security Agent SDK model with new APIs for threat modeling, code review, security requirements, and additional integration providers. ([9c3d335](https://github.com/aws/aws-sdk-js-v3/commit/9c3d3351842902b1ea1e8be52c4e7f40b868daae))





# [3.1070.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1069.0...v3.1070.0) (2026-06-16)


### Features

* **client-direct-connect:** Added VIF rate limiting support for AWS Direct Connect, allowing customers to set bandwidth allocations on virtual interfaces to manage traffic on dedicated connections. ([73df938](https://github.com/aws/aws-sdk-js-v3/commit/73df93835943446ede93e9fdd1e053920cafa18b))
* **client-outposts:** Adds support for creating an order from quotes. ([d438988](https://github.com/aws/aws-sdk-js-v3/commit/d4389889cc293fa5eee48933589b7bb8783f76f6))
* **client-partnercentral-selling:** Added Prospecting APIs to convert engagements into AI-enriched leads with scoring insights. Extended Engagement APIs with ProspectingResult and Lead contexts. Added CoSell Scoring to GetAwsOpportunitySummary- quality score, trend, agent-driven recommendations, and engagement classification. ([c6c54ef](https://github.com/aws/aws-sdk-js-v3/commit/c6c54ef001cdc5dcc6bc13891a733d4643579ecd))
* **client-route53resolver:** Adds supports for PartnerManagedRules ([b76e2ee](https://github.com/aws/aws-sdk-js-v3/commit/b76e2eeddfb7ec05ea007177988db34b4cb3bc0c))
* **client-s3:** Added support for annotations. You can now attach up to 1000 annotations (up to 1 MB each) directly to objects and create, retrieve, list, and delete them using new annotation APIs. Also added support for configuring an annotation table in S3 Metadata. ([c555874](https://github.com/aws/aws-sdk-js-v3/commit/c555874690846b81904a2c0c1e96130bd03bbeaa))
* **client-s3vectors:** Amazon S3 Vectors now supports paginated QueryVectors requests, returning up to 10,000 results per query. ([8b2ef7f](https://github.com/aws/aws-sdk-js-v3/commit/8b2ef7f217f089d2a59bc2d6e50d42d40a2236ca))
* **client-sagemaker:** Add EnableDetailedObservability to Endpoint MetricsConfig. Publishes GPU, host, and framework-native inference metrics to CloudWatch with per-inference-component, availability-zone, and instance dimensions. Adds Inference Component provisioning lifecycle and multi-AZ placement metrics. ([97bb02c](https://github.com/aws/aws-sdk-js-v3/commit/97bb02cfa0cb952ac992ff873668892b382dc9be))
* **clients:** update client endpoints as of 2026-06-16 ([dc04478](https://github.com/aws/aws-sdk-js-v3/commit/dc0447840e46473b44a9998676ece31649ff74d5))





# [3.1069.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1068.0...v3.1069.0) (2026-06-15)


### Features

* **client-bedrock-runtime:** InvokeGuardrailChecks API evaluates prompts and responses against safety checks (content filters, prompt attacks, sensitive info) without creating guardrail resources. It's a detect-only API, returning numeric scores so you can build adaptive logic as per your application. ([4b1fd02](https://github.com/aws/aws-sdk-js-v3/commit/4b1fd023258687353bf12a08cdedae80e3dce6ca))
* **client-cloudwatch-logs:** Added endTimeOffset parameter to Scheduled Queries APIs (Create, Update, Get) enabling bounded time window configuration. Introduced scheduleType filter (CUSTOMER MANAGED, AWS MANAGED) for ListScheduledQueries and exposed it in Get and Update responses. ([e131884](https://github.com/aws/aws-sdk-js-v3/commit/e13188404db8ebab00d8cb2cc6f884a414bf4abf))
* **client-datazone:** Adds support for deleting lineage events in Amazon DataZone. ([8e2a176](https://github.com/aws/aws-sdk-js-v3/commit/8e2a176da89bf29ecf38f5ad89568b4594eecc37))
* **client-mgn:** AWS Transform for VMware now supports Amazon FSx for NetApp ONTAP as a target storage. Customers can migrate source server disks directly to FSx for NetApp ONTAP iSCSI LUNs. Target storage is configurable per source server, and compute, network, and storage migrate together in coordinated waves. ([cc83d72](https://github.com/aws/aws-sdk-js-v3/commit/cc83d72353d54145f44a96494160e452b7cebc3f))
* **client-wafv2:** AWS WAF now supports AI traffic monetization for CloudFront. Configure payment networks and pricing on your web ACL, use the new Monetize rule action to charge AI agents via x402, and monitor revenue with new GetRevenueStatisticsSummary, GetRevenueStatistics, and ListSettlementRecords APIs. ([49bed3c](https://github.com/aws/aws-sdk-js-v3/commit/49bed3c93cbd86e6be1a8cc7e859aa126a8d194d))
* **client-workspaces:** Added a validation for null check for ImageIds in DescribeWorkspaceImages API request parameters. ([4d72e87](https://github.com/aws/aws-sdk-js-v3/commit/4d72e87d10692091d12eaca3a799b1095f354862))





# [3.1068.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1067.0...v3.1068.0) (2026-06-12)


### Features

* **client-acm:** Certificate transparency logging opt-out is no longer available. Per compliance requirements, all public ACM certificates are automatically recorded in certificate transparency logs. The CertificateTransparencyLoggingPreference option is deprecated. ([ca60b0f](https://github.com/aws/aws-sdk-js-v3/commit/ca60b0f934de6000d65c60d217217cd179949e60))
* **client-bedrock-agentcore-control:** Added tagging and CMK support for optimizations and an insights feature to identify failure patterns, extract user intents, and summarize execution behavior ([571ac1e](https://github.com/aws/aws-sdk-js-v3/commit/571ac1e7ab21fed49d403db02046705f55226622))
* **client-bedrock-agentcore:** Added tagging and CMK support across optimization, an explanation field in recommendation output, and an insights feature to identify failure patterns, extract user intents, and summarize execution behavior ([1c06496](https://github.com/aws/aws-sdk-js-v3/commit/1c06496ff0a14ee1a5a5862de03d70cd149fe6f6))
* **client-devops-agent:** Adds support for Trigger CRUD APIs (CreateTrigger, GetTrigger, UpdateTrigger, DeleteTrigger, ListTriggers) for managing schedule-based automation triggers in DevOps Agent agent spaces. ([7139cf1](https://github.com/aws/aws-sdk-js-v3/commit/7139cf1ecc18c1497ad029bb6073ef8c39bd7fb3))
* **client-eks:** Patches missing enum values for EKS updates ([c2df34d](https://github.com/aws/aws-sdk-js-v3/commit/c2df34dc67e001dbe5eb49b77a567f65136202d3))
* **client-firehose:** Update KeyARN in DeliveryStreamEncryptionConfigurationInput to accept KMS key ARNs only (not alias ARNs), matching service behavior. ([80837cd](https://github.com/aws/aws-sdk-js-v3/commit/80837cd31669d8be732a9e2b9bf2b13808099242))
* **client-glue:** Adds support for retrieving Apache Iceberg table metadata via GetTable. Use the new AttributesToGet parameter with LATEST ICEBERG METADATA to receive schema, partition specs, sort orders, and table properties in the response. ([f45445f](https://github.com/aws/aws-sdk-js-v3/commit/f45445f9f2218542a4800a1f0b65b506ccbde2b8))
* **client-sagemaker-runtime:** Added support for inline request payloads to the InvokeEndpointAsync operation to allow users to provide the inference payload directly in the request Body (up to 128,000 bytes) as an alternative to uploading the payload to Amazon S3 and passing InputLocation. ([c4e229d](https://github.com/aws/aws-sdk-js-v3/commit/c4e229ddd3e868a668e2e97458c2330d767fa369))
* **clients:** update client endpoints as of 2026-06-12 ([3f89d03](https://github.com/aws/aws-sdk-js-v3/commit/3f89d039a6e67ad96c3c7c4593d2906d2b2b6abd))





# [3.1067.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1066.0...v3.1067.0) (2026-06-11)


### Features

* **client-bedrock-agentcore-control:** Supports deterministic metadata for AgentCore Memory ([af7a995](https://github.com/aws/aws-sdk-js-v3/commit/af7a995a2fa892857f852231715edb0845102315))
* **client-bedrock-agentcore:** Adds support to perform cross account data plane actions on an AgentCore Memory resource ([8d92e48](https://github.com/aws/aws-sdk-js-v3/commit/8d92e480ebd75d7aba85a8e759c252363c005d63))
* **client-eks:** Introduce new CreateCluster parameters for Amazon EKS local clusters on AWS Outposts. Added etcdInstanceType for configuring the EC2 instance type for dedicated etcd instances, and spreadLevel for configuring the placement group spread level for Kubernetes control plane and etcd instances. ([383363d](https://github.com/aws/aws-sdk-js-v3/commit/383363d5724d0212f22891283d3b606669a00862))
* **client-healthlake:** Adds the UpdateFHIRDatastore API and adds analytics, NLP, and profile configuration support to CreateFHIRDatastore and DescribeFHIRDatastore. ([c74ab00](https://github.com/aws/aws-sdk-js-v3/commit/c74ab0051493446397950ebe16fb42c162a3afc8))
* **client-neptune:** Amazon Neptune now supports IPv6 dual-stack networking. You can create and manage Neptune DB clusters accessible over both IPv4 and IPv6 by specifying NetworkType as DUAL in CreateDBCluster, ModifyDBCluster, RestoreDBClusterFromSnapshot, and RestoreDBClusterToPointInTime API operations ([ae089f9](https://github.com/aws/aws-sdk-js-v3/commit/ae089f94ad19eaebd056378561636647aa944053))
* **client-omics:** Adds support for workflowName in the ListRuns API response. ([fa2f460](https://github.com/aws/aws-sdk-js-v3/commit/fa2f460474a394301d86a980325c2f5c09dd15b2))
* **client-support:** Adding new BDD representation of endpoint ruleset ([cd9dac2](https://github.com/aws/aws-sdk-js-v3/commit/cd9dac213e3d7ece5cfc0f84e70631fc367606f7))





# [3.1066.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1065.0...v3.1066.0) (2026-06-10)


### Features

* **client-amp:** Adds supports for out-of-order sample ingestion (default 1-minute window) and a configurable rule query offset to reduce data loss and improve alerting accuracy. ([7c5a641](https://github.com/aws/aws-sdk-js-v3/commit/7c5a6413fe3786fc2f31d20c8a2d54783514e4fd))
* **client-connecthealth:** Add support for MedicalScribeBinaryAudioEvent in the Medical Scribe streaming input. This new event type lets you send audio as a raw binary payload instead of a base64-encoded value ([b53e627](https://github.com/aws/aws-sdk-js-v3/commit/b53e62719c52a2231a3d00a3db77012048e2e189))
* **client-ec2:** This release adds support for AMI Watermark which a structured identifier that helps in tracking AMI provenance ([e4a7c0b](https://github.com/aws/aws-sdk-js-v3/commit/e4a7c0b84264e82677ed15f2e9267118cf16b0c5))
* **client-ecs:** Amazon ECS Managed Daemon task definitions now support pidMode and ipcMode parameters. Set shared to allow daemons to share PID or IPC namespaces with co-located tasks on Managed Instances, enabling process tracing and shared memory communication. ([4a88904](https://github.com/aws/aws-sdk-js-v3/commit/4a88904d67e2b9293a9352218615cd7566338757))
* **client-lightsail:** This release adds support for Asia Pacific (Hong Kong) (ap-east-1), Europe (Spain) (eu-south-2) and South America (Sao Paulo) (sa-east-1) Regions. ([2d21213](https://github.com/aws/aws-sdk-js-v3/commit/2d21213a040099efb4265d25f3c881fdcd2a51f4))
* **client-medialive:** Adding premixer settings to pid and track audio inputs in MediaLIve to allow greater control over mixing audio from multiple source streams including support for AudioPidSelectors made up of multiple audio PIDs. ([82f4fa6](https://github.com/aws/aws-sdk-js-v3/commit/82f4fa6a5d267d9078c2b90ef4fe589ff3db241a))
* **client-sagemaker:** Add support for G6e instances (ml.g6e.xlarge through ml.g6e.48xlarge) on Amazon SageMaker Notebook Instances. ([1f9aaa5](https://github.com/aws/aws-sdk-js-v3/commit/1f9aaa5b6b507edf9e2838414d588f539395ffde))
* **client-signin:** AWS Sign-In now allows customers to control access to the AWS Management Console using resource-based policies. With this release customers can restrict console access based on network perimeters such as VPC IDs, VPC endpoints, and IP addresses. ([7ac0cf5](https://github.com/aws/aws-sdk-js-v3/commit/7ac0cf5ffcd6864f67affa5471fc2af16874df4e))
* **undici-http-handler:** re-export '@smithy/undici-http-handler' ([#8093](https://github.com/aws/aws-sdk-js-v3/issues/8093)) ([7a1992b](https://github.com/aws/aws-sdk-js-v3/commit/7a1992b089765dbe035fbcd15822af7f6a898523))





# [3.1065.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1064.0...v3.1065.0) (2026-06-09)


### Bug Fixes

* **core:** export legacy root symbols from submodules instead of relative paths ([#8086](https://github.com/aws/aws-sdk-js-v3/issues/8086)) ([abea090](https://github.com/aws/aws-sdk-js-v3/commit/abea090cb45feecf626d4abeffde999b774350a2))
* **credential-provider-sso:** forward clientConfig to SSO token provider ([#8089](https://github.com/aws/aws-sdk-js-v3/issues/8089)) ([4bacac3](https://github.com/aws/aws-sdk-js-v3/commit/4bacac32fc593bd47a48501504575cf15eaffaba))


### Features

* **client-bedrock-agentcore:** Add RetryableConflictException (HTTP 409) to InvokeAgentRuntimeCommand and GetAgentCard to prevent orphaned VMs during concurrent session access. The SDK automatically retries this exception with backoff. Enforcement is not yet active and will be enabled in a future service update. ([a9c4a0d](https://github.com/aws/aws-sdk-js-v3/commit/a9c4a0dac49fd624896af7d0c38950f39328df63))
* **client-bedrock:** Adds support for the Amazon Bedrock account-level data retention APIs PutAccountDataRetention and GetAccountDataRetention. ([9acf4f7](https://github.com/aws/aws-sdk-js-v3/commit/9acf4f7fb1df00c72c671a372e8712de0c98c0c5))
* **client-cloudwatch:** This release adds the APIs (AssociateDatasetKmsKey, DisassociateDatasetKmsKey, GetDataset) to manage encryption at rest for OpenTelemetry metrics in CloudWatch using AWS KMS customer managed keys. ([67566cd](https://github.com/aws/aws-sdk-js-v3/commit/67566cd62dec418034287e32dea4e2e88fc803e5))
* **client-dynamodb-streams:** Adding new BDD representation of endpoint ruleset ([eeaa782](https://github.com/aws/aws-sdk-js-v3/commit/eeaa78277d41ca386013742e00281928b97b26ae))
* **client-ec2:** Added TagFieldSpecifications to CreateFlowLogs and DescribeFlowLogs APIs. Customers can now specify tag keys in their Flow Logs subscriptions to capture associated EC2 resource tag values in their logs, enabling tag-based visibility. ([6a382a8](https://github.com/aws/aws-sdk-js-v3/commit/6a382a8a858c47a3304b80ac242882d2f1073f26))
* **client-iotsitewise:** Adding new BDD representation of endpoint ruleset ([b9314d4](https://github.com/aws/aws-sdk-js-v3/commit/b9314d4a457e338d7975076f1b7923fea4febbdd))
* **client-marketplace-commerce-analytics:** Adding new BDD representation of endpoint ruleset ([0adb8bd](https://github.com/aws/aws-sdk-js-v3/commit/0adb8bd9484bbf97b40554fa13dc26fa1a5b2001))
* **client-odb:** Releases Autonomous Database Serverless APIs, autonomousDatabaseOciIntegrationIamRoles, linkedOciTenancyId, linkedOciCompartmentId, and subscriptionErrors fields in GetOciOnboardingStatus API response. ([fad7009](https://github.com/aws/aws-sdk-js-v3/commit/fad7009ced5a19c5953633ad1530c58c8d874046))
* **client-outposts:** Added AWS Outposts APIs for self-service Outposts quoting and ordering. New operations include CreateQuote, GetQuote, UpdateQuote, DeleteQuote, ListQuotes, and ListOrderableInstanceTypes. ([bb1279e](https://github.com/aws/aws-sdk-js-v3/commit/bb1279eff5d814bc9795836dfc2b9d47f75bf6b5))
* **client-timestream-query:** Adding new BDD representation of endpoint ruleset ([878fc72](https://github.com/aws/aws-sdk-js-v3/commit/878fc723bc8d77161255f8b3c12aa5cb14e9382f))
* **client-timestream-write:** Adding new BDD representation of endpoint ruleset ([4514868](https://github.com/aws/aws-sdk-js-v3/commit/45148681a66afe8e7bbf6a3845eb86c1bf3c2d1a))
* **clients:** update client endpoints as of 2026-06-09 ([935d71b](https://github.com/aws/aws-sdk-js-v3/commit/935d71be412b58187acbaa20fbc3f8e1003f9a73))





# [3.1064.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1063.0...v3.1064.0) (2026-06-08)


### Features

* **client-compute-optimizer:** Adds new Idle Recommendation Resource types in the AWS Compute Optimizer API ([503a9b0](https://github.com/aws/aws-sdk-js-v3/commit/503a9b0aa1ff60b0395ca356605e15eb692df56e))
* **client-cost-optimization-hub:** Adds new Idle Recommendation types in the Cost Optimization Hub API ([872710e](https://github.com/aws/aws-sdk-js-v3/commit/872710e9a6c5d5ad7fa808fe46748c90e179f4b7))
* **client-deadline:** Added optional identityCenterRegion parameter to AssociateMember APIs to allow managing memberships for users and groups in other regions. ([5f03ea0](https://github.com/aws/aws-sdk-js-v3/commit/5f03ea0e77154cb43a3f6cce30d32f87f8fb47fb))
* **client-devops-agent:** Add Asset APIs for managing versioned assets and asset files in AWS DevOps Agent agent spaces. ([bcef961](https://github.com/aws/aws-sdk-js-v3/commit/bcef96141a9661948e0336835e2548ab007827f6))
* **client-mediapackagev2:** Adds support for DASH Audio Timeline Patternization. This enables your DASH manifests to templatize the repeating patterns that emerge in audio segment timelines. This compacts the total timeline length, utilizing the repeat notation, such that manifests don't grow indefinitely long. ([5aad023](https://github.com/aws/aws-sdk-js-v3/commit/5aad0234fa646eda7b921b07d6b3472f124771a4))
* **client-mgn:** AWS Transform discovery tool now supported as network migration input source. You can now use the AWS Transform Discovery tool as a source for network migration alongside modelizeIT, enabling hybrid network migrations for environments running both VMware and non-VMware workloads. ([2cff08e](https://github.com/aws/aws-sdk-js-v3/commit/2cff08e654ea5a3b2d9f16800f25e83e596e1b5b))
* **client-observabilityadmin:** CloudWatch Observability Admin extends CentralizationRuleForOrganization APIs to support metrics, enabling centralization of metrics across accounts and Regions alongside logs. ([823cc1d](https://github.com/aws/aws-sdk-js-v3/commit/823cc1d66014ffe4cc28e11dcea145155f62eff3))
* **client-omics:** StartRunBatch API - Add EngineSettings ([0df4009](https://github.com/aws/aws-sdk-js-v3/commit/0df4009f5ea4f1a8ecc3197197170e35a20c478b))
* **client-taxsettings:** Adds support for additional tax information fields for Philippines, Belgium, Chile, France, Poland, and Italy in the Tax Settings API. ([f4ab1b2](https://github.com/aws/aws-sdk-js-v3/commit/f4ab1b2b4f043013675b8135261ea6910a252cb7))
* **lib-transfer-manager:** add @aws-sdk/lib-transfer-manager as private package ([#8074](https://github.com/aws/aws-sdk-js-v3/issues/8074)) ([3d051b5](https://github.com/aws/aws-sdk-js-v3/commit/3d051b5d26a22924ab36d77eb2f9a361b8136789))





# [3.1063.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1062.0...v3.1063.0) (2026-06-05)


### Bug Fixes

* **core/httpAuthSchemes:** fix concurrent skew correction ([#8078](https://github.com/aws/aws-sdk-js-v3/issues/8078)) ([83e4892](https://github.com/aws/aws-sdk-js-v3/commit/83e48928b9f31c78c6c10adc2127d663837ddd2a))


### Features

* **client-dynamodb:** Adding new BDD representation of endpoint ruleset ([416005d](https://github.com/aws/aws-sdk-js-v3/commit/416005d46847152ba1a24e4ce3297f47469f685c))
* **client-emr-serverless:** Adds support for updating max capacity and custom fields while application is started ([6c9cce0](https://github.com/aws/aws-sdk-js-v3/commit/6c9cce08f51a2b91ca5c7fc9dca2bfd293980546))
* **client-mediaconvert:** Adds support for configurable number of Clear Lead segments at the beginning of encrypted output. Adds support for multiple trickplay variants. ([40eb4c6](https://github.com/aws/aws-sdk-js-v3/commit/40eb4c6b527bb508bc7bdb2402528cff5ed49198))
* **client-payment-cryptography:** Adds CloudFormation support for resource-based policies on AWS Payment Cryptography keys. ([c32019a](https://github.com/aws/aws-sdk-js-v3/commit/c32019a8ffa7be444993d1ee8288d2c43c8a3f89))
* **client-quicksight:** Adds support for Knowledge Base APIs and Index Capacity API ([8205152](https://github.com/aws/aws-sdk-js-v3/commit/8205152f535d2a38e0f0ea5e2d516ab8b484650d))
* **client-sagemaker:** This release adds support for MLflow experiment tracking in SageMaker inference optimization. CreateAIRecommendationJob and CreateAIBenchmarkJob now accept an optional OutputConfig.MlflowConfig (MLflow App ARN, experiment, run name) to stream benchmark metrics and artifacts to your own MLflow App. ([3943044](https://github.com/aws/aws-sdk-js-v3/commit/394304420ef42ed5c8918990273788bfd69d5f5a))
* **clients:** update client endpoints as of 2026-06-05 ([fe9a398](https://github.com/aws/aws-sdk-js-v3/commit/fe9a398fbfb3d324e4b67c7677fc63f62933f283))





# [3.1062.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1061.0...v3.1062.0) (2026-06-04)


### Features

* **client-amplifybackend:** Adding new BDD representation of endpoint ruleset ([40fcadd](https://github.com/aws/aws-sdk-js-v3/commit/40fcadd6821780a74f121ff8960bb74296e47c8f))
* **client-appflow:** Adding new BDD representation of endpoint ruleset ([63dd2cd](https://github.com/aws/aws-sdk-js-v3/commit/63dd2cd097a121cc2340cac08d53815f5293044e))
* **client-appintegrations:** Adding new BDD representation of endpoint ruleset ([3b257e6](https://github.com/aws/aws-sdk-js-v3/commit/3b257e66010f7c5a1da0f3af5c92fbea08d9e368))
* **client-auditmanager:** Adding new BDD representation of endpoint ruleset ([b2fff65](https://github.com/aws/aws-sdk-js-v3/commit/b2fff65521418ea053a630f116985d48ade7c70f))
* **client-chime-sdk-voice:** Adding new BDD representation of endpoint ruleset ([1ff9833](https://github.com/aws/aws-sdk-js-v3/commit/1ff983366658074676acc14a2185fbc5dffc0ce4))
* **client-cloudformation:** Adding new BDD representation of endpoint ruleset ([64f2514](https://github.com/aws/aws-sdk-js-v3/commit/64f2514b791c1ca2e4aaa577439778ea44e4751a))
* **client-config-service:** AWS Config now supports internal service-linked rules, allowing AWS service partners to deploy Config rules for customers and use the evaluation results to build enhanced features. ([ba9173b](https://github.com/aws/aws-sdk-js-v3/commit/ba9173b9efa45159b4af240bcc5d5acce01897aa))
* **client-connectparticipant:** Adding new BDD representation of endpoint ruleset ([22db2a6](https://github.com/aws/aws-sdk-js-v3/commit/22db2a6a6f37796f76290bcd3faf1a5bec0f4426))
* **client-cost-explorer:** Adding new BDD representation of endpoint ruleset ([fb8ea9c](https://github.com/aws/aws-sdk-js-v3/commit/fb8ea9cba5827971024a2059753b8950e19fd320))
* **client-ec2-instance-connect:** Adding new BDD representation of endpoint ruleset ([c2a4981](https://github.com/aws/aws-sdk-js-v3/commit/c2a4981e83ab456c1335204c4c5693cf2b4ef510))
* **client-efs:** Adding new BDD representation of endpoint ruleset ([c7b29f3](https://github.com/aws/aws-sdk-js-v3/commit/c7b29f338f7b26d10f3e73100be0b09b71d6171a))
* **client-emr:** Added support for Spark Connect interactive sessions on Amazon EMR on EC2 with new APIs - StartSession, GetSession, GetSessionEndpoint, ListSessions, and TerminateSession. Added sessionEnabled field in RunJobFlow and DescribeCluster to enable Spark Connect endpoints on EMR clusters. ([ba57019](https://github.com/aws/aws-sdk-js-v3/commit/ba570192099541cc0c98e2eaa91dd14f6db29c2f))
* **client-geo-maps:** Adding new BDD representation of endpoint ruleset ([5835084](https://github.com/aws/aws-sdk-js-v3/commit/5835084269aeb80c8bffefcd4d55c52e97fa620c))
* **client-glue:** AWS Glue Interactive Sessions now supports Apache Spark Connect, enabling remote Spark execution over gRPC with minimal client-side dependencies. Adds GetSessionEndpoint and GetDashboardUrl APIs. Modifies CreateSession now accepts SPARK CONNECT session type. ([41ebf94](https://github.com/aws/aws-sdk-js-v3/commit/41ebf943216c010b938508d2da389586e0d0a5fb))
* **client-interconnect:** Adding new BDD representation of endpoint ruleset ([34e23ef](https://github.com/aws/aws-sdk-js-v3/commit/34e23ef23951a492d90749601a3c2e395177b019))
* **client-ivs:** adds UpdateAdConfiguration operation to AWS IVS low-latency APIs ([8cda4ea](https://github.com/aws/aws-sdk-js-v3/commit/8cda4ea154dd3c189830933573452d2492535ed6))
* **client-kendra:** Adding new BDD representation of endpoint ruleset ([51dfa7c](https://github.com/aws/aws-sdk-js-v3/commit/51dfa7c30d47a9fbb1b861c64a7d25cff587eea8))
* **client-mediaconnect:** BDD bulk update change rollout ([789ef79](https://github.com/aws/aws-sdk-js-v3/commit/789ef792d1bf9eac73a735366c77ec49d4dd51d6))
* **client-mediapackage-vod:** Adding new BDD representation of endpoint ruleset ([f949a4c](https://github.com/aws/aws-sdk-js-v3/commit/f949a4c52062a1a7f375eb7da0da46d49484aaae))
* **client-mediapackage:** Adding new BDD representation of endpoint ruleset ([eaa3192](https://github.com/aws/aws-sdk-js-v3/commit/eaa31923091a4c04a8811b14c63ae9b31b688d38))
* **client-mq:** BDD bulk update change rollout ([e058b8f](https://github.com/aws/aws-sdk-js-v3/commit/e058b8fd7fb9bffbacde2468108973c5a82139e2))
* **client-mwaa-serverless:** Adding new BDD representation of endpoint ruleset ([7cb9160](https://github.com/aws/aws-sdk-js-v3/commit/7cb9160420bc692521a0eec4f59b1ea16e6b7e10))
* **client-opensearchserverless:** Adding new BDD representation of endpoint ruleset ([d08ce2e](https://github.com/aws/aws-sdk-js-v3/commit/d08ce2edcdb37c500c66138d4f6c2c1bac8b36ca))
* **client-route53-recovery-readiness:** Adding new BDD representation of endpoint ruleset ([78b2555](https://github.com/aws/aws-sdk-js-v3/commit/78b2555f57cdd1c38543c47b77873fcb17b2c306))
* **client-s3files:** Adding new BDD representation of endpoint ruleset ([e538b48](https://github.com/aws/aws-sdk-js-v3/commit/e538b48504723a02bd02efc80c9ff0787ab5258e))
* **client-sagemaker-runtime-http2:** Adding new BDD representation of endpoint ruleset ([924b2e3](https://github.com/aws/aws-sdk-js-v3/commit/924b2e3a04ac179162c0f535613295cdae53ad6d))
* **client-sagemaker:** Adds the IncludedData parameter to DescribeModelCard and DescribeModelPackage. Set it to MetadataOnly to retrieve a model card without decrypt permission on the customer managed AWS KMS key (default AllData returns full content). Adds support for the MTRL Job resource in SageMaker Search. ([215af86](https://github.com/aws/aws-sdk-js-v3/commit/215af86dc4da79e119fc403c4e7be097192cb60d))
* **client-signer-data:** Adding new BDD representation of endpoint ruleset ([36e2055](https://github.com/aws/aws-sdk-js-v3/commit/36e20555e76357a54133dc76cc421241de806b01))
* **client-sns:** Adding new BDD representation of endpoint ruleset ([1cc60ac](https://github.com/aws/aws-sdk-js-v3/commit/1cc60ac87a8da9aebbf96337912b4e65e779ae02))
* **client-sustainability:** Adding new BDD representation of endpoint ruleset ([506f985](https://github.com/aws/aws-sdk-js-v3/commit/506f985f631874d8fe9e668db062e58f8c365a6c))
* **client-taxsettings:** Adding new BDD representation of endpoint ruleset ([dcc90be](https://github.com/aws/aws-sdk-js-v3/commit/dcc90beeea0c2febba9aa034952afc736f0f0635))
* **client-uxc:** Adding new BDD representation of endpoint ruleset ([4d2a802](https://github.com/aws/aws-sdk-js-v3/commit/4d2a80261c03584ad3947b03b0903004da83f83b))
* **client-wickr:** AWS Wickr now allows network administrators to configure a maximum session duration for non-SSO users in security groups, and display customizable consent popups to users at login for terms of use or compliance acknowledgements. ([ceb38f6](https://github.com/aws/aws-sdk-js-v3/commit/ceb38f6b46181ccb1a05990f287e82ac3e98e584))
* **client-workdocs:** Adding new BDD representation of endpoint ruleset ([a88a31d](https://github.com/aws/aws-sdk-js-v3/commit/a88a31d073e755f030a78d46d4657924500be15f))
* **client-workspaces:** Adding new BDD representation of endpoint ruleset ([6b1e360](https://github.com/aws/aws-sdk-js-v3/commit/6b1e3602cde54d7840c6ab80610c46c9bd07262c))





# [3.1061.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1060.0...v3.1061.0) (2026-06-03)


### Features

* **client-apigatewaymanagementapi:** Adding new BDD representation of endpoint ruleset ([672907d](https://github.com/aws/aws-sdk-js-v3/commit/672907d8101178bef41bd3c1c20cd2ec986a72dd))
* **client-appconfigdata:** Adding new BDD representation of endpoint ruleset ([e648b96](https://github.com/aws/aws-sdk-js-v3/commit/e648b9684d6f5553212fa9890e2da3a37b3019c1))
* **client-appfabric:** Adding new BDD representation of endpoint ruleset ([802d460](https://github.com/aws/aws-sdk-js-v3/commit/802d4609a4bcf3233a5375beb4fe2f4a22e78c6e))
* **client-application-auto-scaling:** Adding new BDD representation of endpoint ruleset ([1230344](https://github.com/aws/aws-sdk-js-v3/commit/1230344280919128f81acfc7f2b1bbc82a3614b7))
* **client-arc-region-switch:** ARC Region Switch now supports three new execution blocks for multi-Region database workloads-Amazon Aurora Serverless scaling, Amazon Aurora Provisioned scaling, and Amazon Neptune Global Database failover. ([69c7232](https://github.com/aws/aws-sdk-js-v3/commit/69c723251329730bc85d33b714d31c02cac647a4))
* **client-cloudfront:** Adding new BDD representation of endpoint ruleset ([1316608](https://github.com/aws/aws-sdk-js-v3/commit/1316608643943dd905dfa9be0fa73d4a793d3127))
* **client-cloudtrail-data:** Adding new BDD representation of endpoint ruleset ([43c7e35](https://github.com/aws/aws-sdk-js-v3/commit/43c7e358c423ffc1286a4eeb33e6f0bf3bb000b2))
* **client-cloudwatch-logs:** Adding new BDD representation of endpoint ruleset ([b4e3e68](https://github.com/aws/aws-sdk-js-v3/commit/b4e3e68919af66b27d5fbdc8bad70291cea85555))
* **client-compute-optimizer:** This release lets customers extend the lookback period for Amazon EBS volume and Amazon ECS rightsizing recommendations to 32 days. ([d6abbe1](https://github.com/aws/aws-sdk-js-v3/commit/d6abbe1b4b37aa7908f38b8af2f90f55bf76335d))
* **client-connectcampaigns:** Adding new BDD representation of endpoint ruleset ([81d5579](https://github.com/aws/aws-sdk-js-v3/commit/81d55791c458a324d81ed500db83281dc5cf45a9))
* **client-connect:** SearchContacts Connect API now supports filtering contacts by the AI Agents involved in handling them ([e18e618](https://github.com/aws/aws-sdk-js-v3/commit/e18e6189fc85180cf6faaf0727a570044c7d10af))
* **client-cost-explorer:** Added support for target-coverage-based Savings Plans purchase analysis. The StartCommitmentPurchaseAnalysis API now accepts a new TARGET AVERAGE COVERAGE value for AnalysisType, as well as an optional SavingsPlansTargetCoverage field in SavingsPlansPurchaseAnalysisConfiguration ([bb1e38a](https://github.com/aws/aws-sdk-js-v3/commit/bb1e38a52e1c8eda55aed7f778d790a2ffc0e5a2))
* **client-dax:** Adding new BDD representation of endpoint ruleset ([8e47fa8](https://github.com/aws/aws-sdk-js-v3/commit/8e47fa8fe5794e337221dc4895d00bc1273f3bd9))
* **client-direct-connect:** Adding new BDD representation of endpoint ruleset ([c407f18](https://github.com/aws/aws-sdk-js-v3/commit/c407f18cb8edb15df006227dd1996dc1524f0521))
* **client-firehose:** Adding new BDD representation of endpoint ruleset ([4064ae7](https://github.com/aws/aws-sdk-js-v3/commit/4064ae73c96f688ed16a96cdff13fef6bf1eacf8))
* **client-inspector2:** Inspector support for enhanced scanning ([c84f4ec](https://github.com/aws/aws-sdk-js-v3/commit/c84f4ec3fcbfcc4d92cc9edfed2c0249a0ea1353))
* **client-iot-events:** Adding new BDD representation of endpoint ruleset ([c2d17f7](https://github.com/aws/aws-sdk-js-v3/commit/c2d17f78972316cafcf918e89f728b3fa3447a5e))
* **client-iotsecuretunneling:** Adding new BDD representation of endpoint ruleset ([573ad2c](https://github.com/aws/aws-sdk-js-v3/commit/573ad2c43a6dcd6552713ffa0289386412205afe))
* **client-kinesis:** Adding new BDD representation of endpoint ruleset ([2094b2d](https://github.com/aws/aws-sdk-js-v3/commit/2094b2d98a23cd24e8681136eab368cb388c5785))
* **client-lakeformation:** Adding new BDD representation of endpoint ruleset ([82b6e65](https://github.com/aws/aws-sdk-js-v3/commit/82b6e6530a27310351bd389a097a3ac106b37d19))
* **client-macie2:** Adding new BDD representation of endpoint ruleset ([b40f72a](https://github.com/aws/aws-sdk-js-v3/commit/b40f72aa53ba4a9df077820a4c8809aa4c7d3684))
* **client-pinpoint-sms-voice:** Adding new BDD representation of endpoint ruleset ([b44ce4d](https://github.com/aws/aws-sdk-js-v3/commit/b44ce4d1afea7e56212acbfcefb75d47931ef3c3))
* **client-rds:** Adding new BDD representation of endpoint ruleset ([907053d](https://github.com/aws/aws-sdk-js-v3/commit/907053d559e5b0a4d4e02ca679d919537b91dee5))
* **client-resource-groups:** Adding new BDD representation of endpoint ruleset ([287b030](https://github.com/aws/aws-sdk-js-v3/commit/287b030ecdd635545050c08914bf705a2131f5dd))
* **client-route53profiles:** Adding new BDD representation of endpoint ruleset ([fdb2439](https://github.com/aws/aws-sdk-js-v3/commit/fdb24398918f5389e27031ac73e8a16d639fc6bf))
* **client-s3outposts:** Adding new BDD representation of endpoint ruleset ([5a69738](https://github.com/aws/aws-sdk-js-v3/commit/5a697389d067341a8bda91d457aa78239b9b7786))
* **client-securitylake:** Adding new BDD representation of endpoint ruleset ([60fd3fe](https://github.com/aws/aws-sdk-js-v3/commit/60fd3fe7e01d12537c8eb624948053b9dbbbabdb))
* **client-ses:** Adding new BDD representation of endpoint ruleset ([ce4a6b0](https://github.com/aws/aws-sdk-js-v3/commit/ce4a6b072757c50e2696cb0bfad19769b48ff575))
* **client-snow-device-management:** Adding new BDD representation of endpoint ruleset ([3dd8d2a](https://github.com/aws/aws-sdk-js-v3/commit/3dd8d2ad513c9a3d335dda1798cc2f93bc04f4d4))
* **client-socialmessaging:** Adding support for WhatsApp flow APIs and adding AccessDeniedByMetaException for Template APIs ([5e9c74c](https://github.com/aws/aws-sdk-js-v3/commit/5e9c74c60135388db6cc3066de80465f8a7090c9))
* **client-transcribe-streaming:** Adding new BDD representation of endpoint ruleset ([f6c86b7](https://github.com/aws/aws-sdk-js-v3/commit/f6c86b79686140d06478951a9bcd5884b3ec4f7c))
* **client-vpc-lattice:** Adding new BDD representation of endpoint ruleset ([2ced3aa](https://github.com/aws/aws-sdk-js-v3/commit/2ced3aa90f074030969fbf2be5cdef3bbebf7897))
* **client-waf-regional:** Adding new BDD representation of endpoint ruleset ([b3ce6f4](https://github.com/aws/aws-sdk-js-v3/commit/b3ce6f437f8792d3a5c82bea93af60bc92252295))
* **client-wisdom:** Adding new BDD representation of endpoint ruleset ([fbac5a3](https://github.com/aws/aws-sdk-js-v3/commit/fbac5a35c58251510760edf0fdbf5dad2cf9d40f))





# [3.1060.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1059.0...v3.1060.0) (2026-06-03)


### Bug Fixes

* **client-dynamodb:** dynamodb special retry config fixed to be merge-compatible with user-supplied retry config ([#8068](https://github.com/aws/aws-sdk-js-v3/issues/8068)) ([a569d9c](https://github.com/aws/aws-sdk-js-v3/commit/a569d9c425edae68ceb45331fffdff18f8710628))


### Features

* **client-geo-routes:** Add "standardRegionalEndpoints" back to fix 'Could not connect to the endpoint URL' ([324aa6a](https://github.com/aws/aws-sdk-js-v3/commit/324aa6ade9e3caa1d7b9f0abb818224c4a408da9))
* **clients:** update client endpoints as of 2026-06-03 ([8e6cc9f](https://github.com/aws/aws-sdk-js-v3/commit/8e6cc9f1e60bc431fc2f9c65399fdcf1b2814280))





# [3.1059.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1058.0...v3.1059.0) (2026-06-02)


### Features

* **client-cloudwatch:** Adding new BDD representation of endpoint ruleset ([cf2abcc](https://github.com/aws/aws-sdk-js-v3/commit/cf2abcc89f02348a58aaec6c4b515255ce012f04))
* **client-ec2:** Amazon EC2 now supports self-service cancellation of future-dated Capacity Reservations. A cancellation charge applies based on remaining commitment. Customers can generate a cancellation quote to review charges before confirming. ([bc81e97](https://github.com/aws/aws-sdk-js-v3/commit/bc81e97a5b305df40abb5b2665c8cc18c06a60c2))
* **client-elasticache:** Amazon ElastiCache for Valkey now supports durability. This new capability is enabled through a Multi-AZ transactional log, enabling fast recovery and restart during failures. ([7e7e796](https://github.com/aws/aws-sdk-js-v3/commit/7e7e79636c5f91c9583f638ea490cbba461a9fc5))
* **client-geo-routes:** Added Transit and Intermodal travel modes to CalculateRoutes. Plan routes using public transit (bus, subway, train, ferry) or combine transit with driving, taxi, and rental car segments in a single multi-modal route. ([462e13e](https://github.com/aws/aws-sdk-js-v3/commit/462e13e0825f94cdb5ae838fa48d9be34a82aeef))
* **client-guardduty:** Amazon GuardDuty Runtime Monitoring now supports 3 new SensitiveFileModified finding types (Persistence, PrivilegeEscalation, DefenseEvasion) that detect when security-sensitive system files are modified on EC2 instances or containers, indicating potential compromise through file tampering. ([55413a1](https://github.com/aws/aws-sdk-js-v3/commit/55413a1decafb6946ce1e05fa8e64f704a392156))
* **client-keyspacesstreams:** Added iterator description to the GetRecords API response for Amazon Keyspaces Change Data Capture (CDC) streams, enabling consumers to track their current position within the stream. ([6f9b8a6](https://github.com/aws/aws-sdk-js-v3/commit/6f9b8a69fdafe9cd61dac7d85ecd3bcdce9c2b9e))
* **client-lambda:** Adds configuration for tag propagation to Lambda-managed resources. ([d2a9416](https://github.com/aws/aws-sdk-js-v3/commit/d2a9416fa61927e2aafba0a54982a8c335a91d2e))
* **client-lex-runtime-service:** Adding new BDD representation of endpoint ruleset ([e47af6b](https://github.com/aws/aws-sdk-js-v3/commit/e47af6bde754c6ad27b0f6a9e45025b3c329b0cc))
* **client-managedblockchain:** Adding new BDD representation of endpoint ruleset ([9c140f8](https://github.com/aws/aws-sdk-js-v3/commit/9c140f8de2c38480280734b34e70ce9c569efc1c))
* **client-marketplace-metering:** Adding new BDD representation of endpoint ruleset ([cffe742](https://github.com/aws/aws-sdk-js-v3/commit/cffe742123559fa869955b6aca61ff7774c031f4))
* **client-mediaconvert:** Adding new BDD representation of endpoint ruleset ([77b7313](https://github.com/aws/aws-sdk-js-v3/commit/77b73137ef2c93e58f7980c1c09bc8a583f46d60))
* **client-medialive:** Adding new BDD representation of endpoint ruleset ([fc6eaf6](https://github.com/aws/aws-sdk-js-v3/commit/fc6eaf60c4fbde72dae42b6a55fcd1ea199eec81))
* **client-mediastore:** Adding new BDD representation of endpoint ruleset ([17a0e01](https://github.com/aws/aws-sdk-js-v3/commit/17a0e01397699ab1495434d65c5dcc409c7fd60e))
* **client-migration-hub:** Adding new BDD representation of endpoint ruleset ([2432567](https://github.com/aws/aws-sdk-js-v3/commit/2432567836e6706c0ed62b6f45381fd19d39bf6e))
* **client-mturk:** Adding new BDD representation of endpoint ruleset ([413f406](https://github.com/aws/aws-sdk-js-v3/commit/413f4066a815dbfd7ceebd398b6a66d47053ba6a))
* **client-neptune:** Adding new BDD representation of endpoint ruleset ([9c6c356](https://github.com/aws/aws-sdk-js-v3/commit/9c6c356ef61f1a331d9cd9c4bec42aa48285001b))
* **client-personalize-runtime:** Adding new BDD representation of endpoint ruleset ([e578bf9](https://github.com/aws/aws-sdk-js-v3/commit/e578bf9142bab3055bbb2f0ede93c5fe23e06e7f))
* **client-pi:** Adding new BDD representation of endpoint ruleset ([7e00807](https://github.com/aws/aws-sdk-js-v3/commit/7e00807a7e7eec1349b18b3b4ab164faeababd47))
* **client-pinpoint-email:** Adding new BDD representation of endpoint ruleset ([556489a](https://github.com/aws/aws-sdk-js-v3/commit/556489af7dd848e2694d442932ade6baa49af1b0))
* **client-pinpoint:** Adding new BDD representation of endpoint ruleset ([81501bb](https://github.com/aws/aws-sdk-js-v3/commit/81501bb052433b635b46c07bd0ec2b93dcba3254))
* **client-polly:** Adding new BDD representation of endpoint ruleset ([c88a5ba](https://github.com/aws/aws-sdk-js-v3/commit/c88a5bac631f0e7324d2f8f8ccd82ecbd53e01fb))
* **client-ram:** Adding new BDD representation of endpoint ruleset ([f349b64](https://github.com/aws/aws-sdk-js-v3/commit/f349b64a07c7973e4f2a5beddd7cfe4fa98a365f))
* **client-redshift:** Adding new BDD representation of endpoint ruleset ([a2545b1](https://github.com/aws/aws-sdk-js-v3/commit/a2545b1e94bccb21d8d40a12b43dec491256d4af))
* **client-rekognition:** Adding new BDD representation of endpoint ruleset ([fdbac92](https://github.com/aws/aws-sdk-js-v3/commit/fdbac926f9035b76059fa19e33b68cd072ff2600))
* **client-resource-groups-tagging-api:** Adding new BDD representation of endpoint ruleset ([3f93549](https://github.com/aws/aws-sdk-js-v3/commit/3f93549562ffa1a87a8bf530e851f7daf8683940))
* **client-route-53-domains:** Adding new BDD representation of endpoint ruleset ([374fda6](https://github.com/aws/aws-sdk-js-v3/commit/374fda69eb25c74b0e7b821315604edb62169018))
* **client-route-53:** Adding new BDD representation of endpoint ruleset ([86c9030](https://github.com/aws/aws-sdk-js-v3/commit/86c903061707b2825a77bc84e7b1e055c42faebf))
* **client-s3:** Adding new BDD representation of endpoint ruleset ([c261060](https://github.com/aws/aws-sdk-js-v3/commit/c2610606ff85a4309511558232cb0701fd4c5b63))
* **client-sagemaker:** Amazon SageMaker Job is a new service to help you manage various workloads related to model fine tuning, evaluation etc. Two job categories are supported today, AgentRFT for multi-turn agentic reinforcement fine tuning, and AgentRFTEvaluation for evaluating base model or trained model from AgentRFT. ([fa498a2](https://github.com/aws/aws-sdk-js-v3/commit/fa498a217cde5eb0c9263f96ee98274ea7f48c3f))
* **client-sagemakerjobruntime:** Amazon SageMaker Job Runtime is a new service for managing trajectory data during multi-turn customization jobs. It provides APIs to send inference requests to models during job execution, mark rollouts as complete, and submit reward values for training trajectories. ([75c6d35](https://github.com/aws/aws-sdk-js-v3/commit/75c6d359ebaa96823c875166cf26753900d88911))
* **client-secrets-manager:** Adding new BDD representation of endpoint ruleset ([9f23fbc](https://github.com/aws/aws-sdk-js-v3/commit/9f23fbc4d988b8aa43dd5d6fb06d291eb58daf1e))
* **client-service-catalog:** Adding new BDD representation of endpoint ruleset ([a14dfb2](https://github.com/aws/aws-sdk-js-v3/commit/a14dfb2219bfddfda757554ed66189d5f4bdc727))
* **client-sfn:** Adding new BDD representation of endpoint ruleset ([e49a22b](https://github.com/aws/aws-sdk-js-v3/commit/e49a22bf454065b2621aa0f7e698bfebc2549a10))
* **client-shield:** Adding new BDD representation of endpoint ruleset ([71f5f7e](https://github.com/aws/aws-sdk-js-v3/commit/71f5f7e47ec48e94b7207e4abb38d670c3cb389b))
* **client-snowball:** Adding new BDD representation of endpoint ruleset ([2be7cb1](https://github.com/aws/aws-sdk-js-v3/commit/2be7cb1c7a0dac2d79809c5fc252d26a9d949829))
* **client-sqs:** Adding new BDD representation of endpoint ruleset ([d2a4593](https://github.com/aws/aws-sdk-js-v3/commit/d2a4593640151529b3143fa7439e8a7fd3ee0a14))
* **client-ssm:** Adding new BDD representation of endpoint ruleset ([44b3221](https://github.com/aws/aws-sdk-js-v3/commit/44b3221c38e996460a116969763853013cbea7e0))
* **client-sso:** Adding new BDD representation of endpoint ruleset ([4578d43](https://github.com/aws/aws-sdk-js-v3/commit/4578d430b4d7924943ae84780ab9912b5d9a80f3))
* **client-storage-gateway:** Adding new BDD representation of endpoint ruleset ([7953156](https://github.com/aws/aws-sdk-js-v3/commit/7953156c7392bc921096fc6634d10f3e6e7b6dae))
* **client-sts:** Adding new BDD representation of endpoint ruleset ([469246b](https://github.com/aws/aws-sdk-js-v3/commit/469246b8e57419ded863183452b0f4254f29cb9d))
* **client-swf:** Adding new BDD representation of endpoint ruleset ([875e374](https://github.com/aws/aws-sdk-js-v3/commit/875e3740326741e445a2efc9ad8f112aaad9f6f0))
* **client-transcribe:** Release new Language locales including am-ET, es-MX, fa-AF, ht-HT, jv-ID, km-KH, my-MM, sq-AL, ne-NP. The commit shows past locales that have already been release which include cy-gb, ga-ie, gd-gb. ([bd20b50](https://github.com/aws/aws-sdk-js-v3/commit/bd20b5083a5e4f01680209bec2d108fe07bc3e13))
* **client-transfer:** Adding new BDD representation of endpoint ruleset ([da0b48f](https://github.com/aws/aws-sdk-js-v3/commit/da0b48fc0df0ec755c3d0c19798e782ce885ed92))
* **client-waf:** Adding new BDD representation of endpoint ruleset ([4d90e8e](https://github.com/aws/aws-sdk-js-v3/commit/4d90e8eb2e5214f5a15ece31032d5ca013e467e6))
* **client-xray:** Adding new BDD representation of endpoint ruleset ([37c3656](https://github.com/aws/aws-sdk-js-v3/commit/37c3656117e4a4a32092e6e8caef3f71c41b0d82))
* **clients:** update client endpoints as of 2026-06-02 ([164aa65](https://github.com/aws/aws-sdk-js-v3/commit/164aa659d183948f25a60b53233ed7662c6a05c0))





# [3.1058.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1057.0...v3.1058.0) (2026-06-01)


### Bug Fixes

* **credential-provider-node:** update cached credential on forceRefresh ([#8055](https://github.com/aws/aws-sdk-js-v3/issues/8055)) ([bae4bc0](https://github.com/aws/aws-sdk-js-v3/commit/bae4bc0f1bafc951f6593c94c223e63c47f24692))


### Features

* **client-amplify:** Adding new BDD representation of endpoint ruleset ([686293e](https://github.com/aws/aws-sdk-js-v3/commit/686293e22392d1155c793efec09d95e53c7b4a66))
* **client-app-mesh:** Adding new BDD representation of endpoint ruleset ([2a96e64](https://github.com/aws/aws-sdk-js-v3/commit/2a96e646c9cda20419ac2c625d1ede57982364fa))
* **client-application-discovery-service:** Adding new BDD representation of endpoint ruleset ([a99cee4](https://github.com/aws/aws-sdk-js-v3/commit/a99cee4664f34c442bee51789eb60654041a704e))
* **client-appsync:** Adding new BDD representation of endpoint ruleset ([4443c0b](https://github.com/aws/aws-sdk-js-v3/commit/4443c0b009d0c1a100a4cbbb9dda4ad4016a8d00))
* **client-cloudwatch-events:** Adding new BDD representation of endpoint ruleset ([c44169d](https://github.com/aws/aws-sdk-js-v3/commit/c44169d55e323b1785e9b85abcc9d272f9ecb7e9))
* **client-codepipeline:** Adding new BDD representation of endpoint ruleset ([e4a3db2](https://github.com/aws/aws-sdk-js-v3/commit/e4a3db202bed7e2cc40dbbd5449b9fd6ca78eb96))
* **client-cognito-identity-provider:** Add support for multi-region replication, enabling synchronization of user data and configurations to a secondary user pool in a standby Region. Add support for customer managed keys (CMK) in AWS KMS for encrypting user pool data at rest. ([80583f4](https://github.com/aws/aws-sdk-js-v3/commit/80583f455bda46e1a08a0a943f7f3683d481a9a3))
* **client-cognito-identity:** Adding new BDD representation of endpoint ruleset ([bd6f4b3](https://github.com/aws/aws-sdk-js-v3/commit/bd6f4b328c6bcb3f7fbdd9039c9f8ec17af07e49))
* **client-cognito-sync:** Adding new BDD representation of endpoint ruleset ([0151012](https://github.com/aws/aws-sdk-js-v3/commit/015101250c42fc743affcada37320e1d72616423))
* **client-config-service:** Adding new BDD representation of endpoint ruleset ([84fd6e4](https://github.com/aws/aws-sdk-js-v3/commit/84fd6e40aaf7c8be8464601e5f95c87074b77f5b))
* **client-cost-and-usage-report-service:** Adding new BDD representation of endpoint ruleset ([4ad3ef5](https://github.com/aws/aws-sdk-js-v3/commit/4ad3ef50411aa0221501839059693413d2cda367))
* **client-data-pipeline:** Adding new BDD representation of endpoint ruleset ([f78e7c7](https://github.com/aws/aws-sdk-js-v3/commit/f78e7c7a5b45164100b88ec9fa4ecd77dd5edf89))
* **client-database-migration-service:** Adding new BDD representation of endpoint ruleset ([5069ba1](https://github.com/aws/aws-sdk-js-v3/commit/5069ba101fdca6c2e38f86eeff0d01702f2961a0))
* **client-device-farm:** Adding new BDD representation of endpoint ruleset ([c04ddb0](https://github.com/aws/aws-sdk-js-v3/commit/c04ddb0f979e3d41e94558f2c50be1c92f5ac8f5))
* **client-directory-service:** Adding new BDD representation of endpoint ruleset ([b3e6b91](https://github.com/aws/aws-sdk-js-v3/commit/b3e6b91b15e3d376f7a18af2f02b8edca23d697f))
* **client-docdb:** Adding new BDD representation of endpoint ruleset ([3ed90e3](https://github.com/aws/aws-sdk-js-v3/commit/3ed90e3e2606c72e82079e5f788f0bf9464138e3))
* **client-ecr:** Adding new BDD representation of endpoint ruleset ([45e375f](https://github.com/aws/aws-sdk-js-v3/commit/45e375f8f00d01b483dcdab4719a123e1dd36383))
* **client-ecs:** Adding new BDD representation of endpoint ruleset ([822d4aa](https://github.com/aws/aws-sdk-js-v3/commit/822d4aa70153301150e01d6b14600c70b648f5bc))
* **client-elastic-beanstalk:** Adding new BDD representation of endpoint ruleset ([9300185](https://github.com/aws/aws-sdk-js-v3/commit/9300185b9347cc7f6ee293b70073d120542194f9))
* **client-elastic-load-balancing-v2:** Adding new BDD representation of endpoint ruleset ([18cc8fd](https://github.com/aws/aws-sdk-js-v3/commit/18cc8fd6f2837cf45cf8fa97f3bc467f6f1f1195))
* **client-elastic-load-balancing:** Adding new BDD representation of endpoint ruleset ([9787fed](https://github.com/aws/aws-sdk-js-v3/commit/9787fed0261b01a7a27cb2d1d37eef23649e7539))
* **client-elasticache:** Adding new BDD representation of endpoint ruleset ([17c54f7](https://github.com/aws/aws-sdk-js-v3/commit/17c54f7d1cbb100451f20a143f62f36a82327f91))
* **client-elasticsearch-service:** Adding new BDD representation of endpoint ruleset ([cb40604](https://github.com/aws/aws-sdk-js-v3/commit/cb406049aaaef4c7856f5d0c67dba62e71b26d6d))
* **client-emr:** Adding new BDD representation of endpoint ruleset ([8d24bcc](https://github.com/aws/aws-sdk-js-v3/commit/8d24bcc4885d03e164c24a16cb0beb440070867b))
* **client-gamelift:** Adding new BDD representation of endpoint ruleset ([bdf2d6d](https://github.com/aws/aws-sdk-js-v3/commit/bdf2d6ddc349a84a623be5e73305c40e9106a124))
* **client-glacier:** Adding new BDD representation of endpoint ruleset ([83c5868](https://github.com/aws/aws-sdk-js-v3/commit/83c586807ee3471d698dd7c7ca2dde1ef55b2988))
* **client-greengrass:** Adding new BDD representation of endpoint ruleset ([a968dd9](https://github.com/aws/aws-sdk-js-v3/commit/a968dd9abd81d91d342499e59de53e1c1ff9cffb))
* **client-health:** Adding new BDD representation of endpoint ruleset ([0717d7d](https://github.com/aws/aws-sdk-js-v3/commit/0717d7de08c1b4f307cc4c6123992a6fd0ca7730))
* **client-iam:** Adding new BDD representation of endpoint ruleset ([07529e0](https://github.com/aws/aws-sdk-js-v3/commit/07529e039308189ae7d33c3eba2e6474734eb4b9))
* **client-inspector:** Adding new BDD representation of endpoint ruleset ([19599af](https://github.com/aws/aws-sdk-js-v3/commit/19599afaa6dc7d150f81a8f9257e9fd9cc00289b))
* **client-iot-events-data:** Adding new BDD representation of endpoint ruleset ([a681125](https://github.com/aws/aws-sdk-js-v3/commit/a6811251164a282216539aef6330f6a64d7422ea))
* **client-iot:** Adding new BDD representation of endpoint ruleset ([d63272e](https://github.com/aws/aws-sdk-js-v3/commit/d63272ed1c45f22d6425ac03cdadcbb63a7e2afc))
* **client-kinesis-analytics:** Adding new BDD representation of endpoint ruleset ([2d36e3d](https://github.com/aws/aws-sdk-js-v3/commit/2d36e3dab23fbe432d84026b3b69d447ee9ca482))
* **client-kinesis-video-media:** Adding new BDD representation of endpoint ruleset ([bb86c1b](https://github.com/aws/aws-sdk-js-v3/commit/bb86c1bb764f6d8a5e918e23b5200990cdfdc533))
* **client-kinesis-video:** Adding new BDD representation of endpoint ruleset ([35fbe7d](https://github.com/aws/aws-sdk-js-v3/commit/35fbe7d4eb9303a2ab0c911d4ca8debf78cfc478))
* **client-kms:** Adding new BDD representation of endpoint ruleset ([fd8e6fe](https://github.com/aws/aws-sdk-js-v3/commit/fd8e6fe00e6af4fdc80fcef244492468d1b54d25))
* **client-lambda:** Adding new BDD representation of endpoint ruleset ([609bdcc](https://github.com/aws/aws-sdk-js-v3/commit/609bdcc9bdfeef477309877582d98fd3c1017f46))
* **client-lex-model-building-service:** Adding new BDD representation of endpoint ruleset ([05290f1](https://github.com/aws/aws-sdk-js-v3/commit/05290f13151acdf6860417d80ffcab6076f80ce6))
* **client-license-manager:** Adding new BDD representation of endpoint ruleset ([1530e16](https://github.com/aws/aws-sdk-js-v3/commit/1530e16f42d9a9c0b7fb7e28de9a6519bdc0ea92))
* **client-lightsail:** Adding new BDD representation of endpoint ruleset ([9f6e0fc](https://github.com/aws/aws-sdk-js-v3/commit/9f6e0fcb31dd74a5d15d426563f284797c6dc257))
* **client-machine-learning:** Adding new BDD representation of endpoint ruleset ([72468b7](https://github.com/aws/aws-sdk-js-v3/commit/72468b7131d5a57ba5313c183a89142831c956d9))
* **client-marketplace-agreement:** Adding Entitlements in SearchAgreements Response ([c8094c4](https://github.com/aws/aws-sdk-js-v3/commit/c8094c45cc4ba7e5566143cc925f771179d1036f))
* **client-marketplace-catalog:** Adding new BDD representation of endpoint ruleset ([3617974](https://github.com/aws/aws-sdk-js-v3/commit/361797472ff18a9d3cd034fbb1622342f76ccf16))
* **client-mediastore-data:** Adding new BDD representation of endpoint ruleset ([be45627](https://github.com/aws/aws-sdk-js-v3/commit/be45627ca8bca281220216461191c557a448fb9f))
* **client-personalize:** Adding new BDD representation of endpoint ruleset ([f5bf041](https://github.com/aws/aws-sdk-js-v3/commit/f5bf04113e8bc0a622f6160d3713af43128fd1c4))
* **client-quicksight:** This release adds public APIs for Amazon QuickSight Spaces, Agents, and Flows. Spaces APIs enable management of curated resource collections. Agents APIs provide lifecycle control over AI-powered agents that leverage Spaces. Flows APIs add CRUDL APIs for automated workflows. ([be0ff8d](https://github.com/aws/aws-sdk-js-v3/commit/be0ff8d2237a6e90f558345868d64e08d9fa960e))
* **cloudfront-signer:** enable SHA256 for cloudfront-signer ([#8045](https://github.com/aws/aws-sdk-js-v3/issues/8045)) ([9e39438](https://github.com/aws/aws-sdk-js-v3/commit/9e3943842af48bc0d1ff69aaded892d9cfd3ad08))
* **rds-signer:** automatically refresh AWS credentials before getting token ([#8054](https://github.com/aws/aws-sdk-js-v3/issues/8054)) ([3c25320](https://github.com/aws/aws-sdk-js-v3/commit/3c25320e9c7b292650f28f41fcb8f63e376a07dc))





# [3.1057.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1056.0...v3.1057.0) (2026-05-29)


### Features

* **client-account:** Adding new BDD representation of endpoint ruleset ([043ec31](https://github.com/aws/aws-sdk-js-v3/commit/043ec31b7338385f175b0e04a86e613ab50225e1))
* **client-application-insights:** Adding new BDD representation of endpoint ruleset ([8188d14](https://github.com/aws/aws-sdk-js-v3/commit/8188d14ab9c122f186dd9bfb6d3048a276a88635))
* **client-arc-zonal-shift:** Adding new BDD representation of endpoint ruleset ([5c22811](https://github.com/aws/aws-sdk-js-v3/commit/5c2281130d513e23304d47100fe4770afcdcb30e))
* **client-athena:** Adding new BDD representation of endpoint ruleset ([a9a05af](https://github.com/aws/aws-sdk-js-v3/commit/a9a05afb01b24028ae71092b755366dac79516e2))
* **client-auto-scaling-plans:** Adding new BDD representation of endpoint ruleset ([be4de62](https://github.com/aws/aws-sdk-js-v3/commit/be4de62099fe1d61855efb884472a491b2c46c82))
* **client-auto-scaling:** Adding new BDD representation of endpoint ruleset ([2038f34](https://github.com/aws/aws-sdk-js-v3/commit/2038f34d4922399b73b319e1692989efc5deab7f))
* **client-backup-gateway:** Adding new BDD representation of endpoint ruleset ([78977a6](https://github.com/aws/aws-sdk-js-v3/commit/78977a6c9a9e6c887ec49c7e89cf546135687c43))
* **client-bedrock-agentcore-control:** Reference your own AWS Secrets Manager secrets when configuring credential providers, giving you control over encryption, rotation, and access policies instead of using service-managed secrets. ([ac8eac9](https://github.com/aws/aws-sdk-js-v3/commit/ac8eac96883d615126f725163a6ac765892cf411))
* **client-bedrock:** Automated Reasoning checks - Added two build workflows for policies. Iterative Refine Policy uses AI to update policy definitions based on test results and feedback. Resolve Policy Ambiguities consolidates ambiguous variables in Automated Reasoning policies, a common source of ambiguous validation. ([dc971ce](https://github.com/aws/aws-sdk-js-v3/commit/dc971ce117e5a6d902c8c9a5618109c54fcfa95f))
* **client-budgets:** Adding new BDD representation of endpoint ruleset ([d49141c](https://github.com/aws/aws-sdk-js-v3/commit/d49141cc1fc4eae0d0940a23e272c2d67b544a05))
* **client-chime:** Adding new BDD representation of endpoint ruleset ([f8e2cde](https://github.com/aws/aws-sdk-js-v3/commit/f8e2cde591e2d33f10b58633311e866ddca13a3e))
* **client-clouddirectory:** Adding new BDD representation of endpoint ruleset ([5826e35](https://github.com/aws/aws-sdk-js-v3/commit/5826e3575d13ee1acfd0e9c176a1425e5723902c))
* **client-cloudhsm-v2:** Adding new BDD representation of endpoint ruleset ([16dc3f8](https://github.com/aws/aws-sdk-js-v3/commit/16dc3f837c8fdcb9621706e317af13d6b1ed440f))
* **client-cloudhsm:** Adding new BDD representation of endpoint ruleset ([b960d63](https://github.com/aws/aws-sdk-js-v3/commit/b960d63339e667d2d21f723e1450154cbee01aa0))
* **client-cloudsearch-domain:** Adding new BDD representation of endpoint ruleset ([84e5f9f](https://github.com/aws/aws-sdk-js-v3/commit/84e5f9f0d9dade03032a39348885ee8e6904f229))
* **client-cloudsearch:** Adding new BDD representation of endpoint ruleset ([954a562](https://github.com/aws/aws-sdk-js-v3/commit/954a562982520a880c0f174c0ea77408126e6cdb))
* **client-cloudtrail:** Adding new BDD representation of endpoint ruleset ([f8aca9f](https://github.com/aws/aws-sdk-js-v3/commit/f8aca9fee33b903c423d215eddcf0753cf40b24d))
* **client-codebuild:** Adding new BDD representation of endpoint ruleset ([8d82661](https://github.com/aws/aws-sdk-js-v3/commit/8d82661f2f770848919d0aa19980b81339df2e8c))
* **client-codecatalyst:** Adding new BDD representation of endpoint ruleset ([5d0951a](https://github.com/aws/aws-sdk-js-v3/commit/5d0951a12ba6c2339690e4b2fd8d17a68b19ddad))
* **client-codecommit:** Adding new BDD representation of endpoint ruleset ([3dc4ba9](https://github.com/aws/aws-sdk-js-v3/commit/3dc4ba9cafc0ccb34a9820471bf2fc36e02d753e))
* **client-codedeploy:** Adding new BDD representation of endpoint ruleset ([7c04b84](https://github.com/aws/aws-sdk-js-v3/commit/7c04b84fbcf66251ac8c3865418c3cc7b853b110))
* **client-codeguru-security:** Adding new BDD representation of endpoint ruleset ([b5e7960](https://github.com/aws/aws-sdk-js-v3/commit/b5e7960032ad59db18ebcf870b2fc45446e1621f))
* **client-connect-contact-lens:** Adding new BDD representation of endpoint ruleset ([5356eaf](https://github.com/aws/aws-sdk-js-v3/commit/5356eaf451c55e645224fa53ff10d55610c5c260))
* **client-connectcampaignsv2:** Adding new BDD representation of endpoint ruleset ([610e00f](https://github.com/aws/aws-sdk-js-v3/commit/610e00f65dc426e28f266db68c35e43e0b4387ef))
* **client-directory-service-data:** Adding new BDD representation of endpoint ruleset ([a4c4696](https://github.com/aws/aws-sdk-js-v3/commit/a4c4696bcf31fee57e2a5f8c13623a2acccf3c5b))
* **client-drs:** Adding new BDD representation of endpoint ruleset ([af7bbc3](https://github.com/aws/aws-sdk-js-v3/commit/af7bbc33b7103359fa665b7efb661754b0daf4a0))
* **client-entityresolution:** Adding new BDD representation of endpoint ruleset ([cbe0dd2](https://github.com/aws/aws-sdk-js-v3/commit/cbe0dd2e64859a37b48b6aa4c32ab9110c24eb81))
* **client-grafana:** Adding new BDD representation of endpoint ruleset ([a0c1dbf](https://github.com/aws/aws-sdk-js-v3/commit/a0c1dbf44a5eceae952ce7aebc347275ace72a69))
* **client-groundstation:** Adds support for Alpha-5 satellite number encoding in the Two-Line Element ephemeris format. ([1702995](https://github.com/aws/aws-sdk-js-v3/commit/17029957a2cfd565405a294a536fb46bb55b3a67))
* **client-inspector-scan:** Adding new BDD representation of endpoint ruleset ([f4eb551](https://github.com/aws/aws-sdk-js-v3/commit/f4eb551144f0aaca20866c2587befca55b91135e))
* **client-lex-models-v2:** Adding new BDD representation of endpoint ruleset ([46879a2](https://github.com/aws/aws-sdk-js-v3/commit/46879a2b4f0bf6e69679b6e3b2d8944522433b52))
* **client-lex-runtime-v2:** Adding new BDD representation of endpoint ruleset ([2e4709c](https://github.com/aws/aws-sdk-js-v3/commit/2e4709c61d7247245b40f31e96612847f7fd4737))
* **client-mailmanager:** Adding new BDD representation of endpoint ruleset ([89075b5](https://github.com/aws/aws-sdk-js-v3/commit/89075b5d5c94a8a0b3532baa0f820bea6bdeae83))
* **client-mwaa:** Adding new BDD representation of endpoint ruleset ([58e3ca2](https://github.com/aws/aws-sdk-js-v3/commit/58e3ca280e18a5b323a3e1f04864d3953f2a1a11))
* **client-networkflowmonitor:** Adding new BDD representation of endpoint ruleset ([2571d33](https://github.com/aws/aws-sdk-js-v3/commit/2571d33cf88706932279760c4b500e38708871b1))
* **client-omics:** Add engineSettings to StartRun and GetRun. Add profiles and profileParameterTemplates to GetWorkflow and GetWorkflowVersion. ([b742790](https://github.com/aws/aws-sdk-js-v3/commit/b742790fa0cdcaaea6e1bfdbaa0acc926f5909ff))
* **client-payment-cryptography-data:** Adding new BDD representation of endpoint ruleset ([d3b4a30](https://github.com/aws/aws-sdk-js-v3/commit/d3b4a3045d8fc6f4288bdcb323fd0e8b2d534016))
* **client-pcs:** Adding new BDD representation of endpoint ruleset ([eec245d](https://github.com/aws/aws-sdk-js-v3/commit/eec245d25eec024908d3f169c0ffd19321fc95d7))
* **client-personalize-events:** Adding new BDD representation of endpoint ruleset ([75da9a4](https://github.com/aws/aws-sdk-js-v3/commit/75da9a4b75b740b629d752f5b3ead34f75e8a082))
* **client-proton:** Adding new BDD representation of endpoint ruleset ([937b25e](https://github.com/aws/aws-sdk-js-v3/commit/937b25e01d6bac09ce133d6fd9a912ea74afeb7a))
* **client-qbusiness:** Adding new BDD representation of endpoint ruleset ([4770f02](https://github.com/aws/aws-sdk-js-v3/commit/4770f0272e6e08f14d10fad67d3816eb3617e3ba))
* **client-quicksight:** Adds support for creating, updating, describing, listing, and deleting an OAuthClientApplication resource, a new quicksight resource that allows customers to store OAuth configurations to connect to their databases via 3 Legged OAuth. ([62d39a8](https://github.com/aws/aws-sdk-js-v3/commit/62d39a8100c170f50b075b03e9b8a55b16f05a9d))
* **client-rds-data:** RDS Data API arrays (longValues, doubleValues, stringValues, booleanValues) in ExecuteStatement responses now correctly support null elements. Runtime change for JS v3 and .NET. Compile-time change for C plus plus, .NET, Kotlin, Rust. No impact for Java, Python, Ruby, PHP, Go. ([43e8abc](https://github.com/aws/aws-sdk-js-v3/commit/43e8abc90592e66c4524fe660aca567fad1e51f2))
* **client-route53-recovery-cluster:** Adding new BDD representation of endpoint ruleset ([295e9e4](https://github.com/aws/aws-sdk-js-v3/commit/295e9e4bd745a617e1e06d5b9e6a6c69f39876da))
* **client-route53resolver:** Added BatchCreateFirewallRule, BatchUpdateFirewallRule, BatchDeleteFirewallRule, and ListFirewallRuleTypes APIs. Added FirewallRuleType support to Firewall Rule APIs. ([a5c6d72](https://github.com/aws/aws-sdk-js-v3/commit/a5c6d72261136b238790cf57d658e2082a1fb07e))
* **client-sesv2:** This release introduces support for Tenant Suppression Lists ([3de2020](https://github.com/aws/aws-sdk-js-v3/commit/3de2020c8015c8201643e6d6939185a0618b263b))
* **client-ssm-guiconnect:** Adding new BDD representation of endpoint ruleset ([e5c019d](https://github.com/aws/aws-sdk-js-v3/commit/e5c019d395e72ed01d7b72f7d1c28ba700015ccf))
* **client-synthetics:** Adding new BDD representation of endpoint ruleset ([59d0871](https://github.com/aws/aws-sdk-js-v3/commit/59d0871f64cdfa03a24ff532cd2f7d38360e38c0))
* **client-wafv2:** Adding new BDD representation of endpoint ruleset ([4ec2c0f](https://github.com/aws/aws-sdk-js-v3/commit/4ec2c0f72473c72ac9195355df1b73ea331c51d3))
* **client-workspaces-instances:** Adding new BDD representation of endpoint ruleset ([2b06af5](https://github.com/aws/aws-sdk-js-v3/commit/2b06af5e273a26322475d1b852987945f3672be4))
* **clients:** update client endpoints as of 2026-05-29 ([100e59e](https://github.com/aws/aws-sdk-js-v3/commit/100e59e3c3649d1faeffb40dde241698a420ca82))





# [3.1056.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1055.0...v3.1056.0) (2026-05-28)


### Features

* **client-accessanalyzer:** Adding new BDD representation of endpoint ruleset ([0f08f2c](https://github.com/aws/aws-sdk-js-v3/commit/0f08f2c10a8b91bf6e5763592b51abf31472b49c))
* **client-amp:** Adding new BDD representation of endpoint ruleset ([1ac03ab](https://github.com/aws/aws-sdk-js-v3/commit/1ac03ab608e7db55d32d02c20e470b5f8e8ccc6e))
* **client-amplifyuibuilder:** Adding new BDD representation of endpoint ruleset ([1f10e2e](https://github.com/aws/aws-sdk-js-v3/commit/1f10e2e33c30db1cbd9b5c63efa2faa6656eea9e))
* **client-appstream:** Amazon WorkSpaces Applications now supports BYOL (Bring Your Own License). This enables customers to import their own WorkSpaces images and use them in WorkSpaces Applications. ([41ff7ab](https://github.com/aws/aws-sdk-js-v3/commit/41ff7ab4c917f257e185a0da30092b5424cefce5))
* **client-arc-region-switch:** Adding new BDD representation of endpoint ruleset ([b5cb1cb](https://github.com/aws/aws-sdk-js-v3/commit/b5cb1cbe9ab9b52c2b9ca4f4d2733ab2c575b572))
* **client-artifact:** Adding new BDD representation of endpoint ruleset ([063e978](https://github.com/aws/aws-sdk-js-v3/commit/063e97837897c68aac02a3e660b30f982e05869d))
* **client-backupsearch:** Adding new BDD representation of endpoint ruleset ([7f0029b](https://github.com/aws/aws-sdk-js-v3/commit/7f0029b97d5b0ff323d1154abe656e19a39b7fb4))
* **client-bedrock-agentcore-control:** Added Harness support for LiteLLM model configuration for third-party model providers. Added S3 and Git skill source types. Added Responses API format for OpenAI and Bedrock models. Added runtimeUserId parameter to InvokeHarness for end-user identification. ([d8da94c](https://github.com/aws/aws-sdk-js-v3/commit/d8da94cbd10ae493c07970329efbae5aa675834c))
* **client-bedrock-agentcore:** Added Harness support for LiteLLM model configuration for third-party model providers. Added S3 and Git skill source types. Added Responses API format for OpenAI and Bedrock models. Added runtimeUserId and runtimeClientError to InvokeHarness. ([35ad0ff](https://github.com/aws/aws-sdk-js-v3/commit/35ad0ff216cc78a94c224d14ef2329f3e6415851))
* **client-bedrock-data-automation-runtime:** Adding new BDD representation of endpoint ruleset ([09253cf](https://github.com/aws/aws-sdk-js-v3/commit/09253cfa8acdee2e397358358bcab9055927f0ce))
* **client-bedrock-runtime:** Support system role in message ([51ddbc0](https://github.com/aws/aws-sdk-js-v3/commit/51ddbc0cf5d6cb1281b47be833339ba7155123df))
* **client-bedrock:** Add support for ModelPackageArn in Bedrock's CreateCustomModel API ([0c0e5f5](https://github.com/aws/aws-sdk-js-v3/commit/0c0e5f5cbb1a095620e73088d2f11450dac7b8f0))
* **client-billingconductor:** Adding new BDD representation of endpoint ruleset ([2099d2b](https://github.com/aws/aws-sdk-js-v3/commit/2099d2b65ae6d7e48f4839191cac457c4efc8fe2))
* **client-braket:** Adding new BDD representation of endpoint ruleset ([3345442](https://github.com/aws/aws-sdk-js-v3/commit/33454422248974aeeb98898f15bd876565ad7d75))
* **client-chatbot:** Adding new BDD representation of endpoint ruleset ([5610d2b](https://github.com/aws/aws-sdk-js-v3/commit/5610d2bcdcfbb3f475c71bc73fb914532ea2bf5e))
* **client-chime-sdk-meetings:** Adding new BDD representation of endpoint ruleset ([783bcf9](https://github.com/aws/aws-sdk-js-v3/commit/783bcf97a7e7f240c6ebdb55587b2381e9d616cb))
* **client-chime-sdk-messaging:** Adding new BDD representation of endpoint ruleset ([0d5a236](https://github.com/aws/aws-sdk-js-v3/commit/0d5a236d24a5d7caf064dac06ef20c6401261b5e))
* **client-cloudfront-keyvaluestore:** Adding new BDD representation of endpoint ruleset ([e907fca](https://github.com/aws/aws-sdk-js-v3/commit/e907fca8179b732ecc0fe082715b0224d172ad42))
* **client-codeguru-reviewer:** Adding new BDD representation of endpoint ruleset ([2573236](https://github.com/aws/aws-sdk-js-v3/commit/25732365cefbff325d474fb66f1fe9d67cdabf05))
* **client-codestar-connections:** Adding new BDD representation of endpoint ruleset ([5039cf3](https://github.com/aws/aws-sdk-js-v3/commit/5039cf3dd756fd35083a8f85b2ad7a5e37625aca))
* **client-controlcatalog:** AWS Control Catalog - Added GovernedProviders response field and inclusion filter to GetControl and ListControls APIs to identify and filter by cloud provider. Added ParameterRequirementSummary response field indicating parameter requirements. ([4a5795d](https://github.com/aws/aws-sdk-js-v3/commit/4a5795daba81aa7d2599ebfad6a83273716c5304))
* **client-cost-optimization-hub:** Adding new BDD representation of endpoint ruleset ([90787cb](https://github.com/aws/aws-sdk-js-v3/commit/90787cba4b9f126a057a318180b8cf4a8e43d9d1))
* **client-customer-profiles:** BatchPutProfileObject API adds multiple profile objects to a domain of a given ObjectType in a single API call. ([aa4efa9](https://github.com/aws/aws-sdk-js-v3/commit/aa4efa97cfc82f138862680aeb0d5c62031ef9fb))
* **client-deadline:** Added support for persistent storage on Service-Managed Fleets, allowing customers to configure persistent storage that preserves data across worker sessions which reduces job startup times for workloads with large software installations or asset caches. ([0a79955](https://github.com/aws/aws-sdk-js-v3/commit/0a799553fdab78401469d7fbdb22c2b30fe638fd))
* **client-detective:** Adding new BDD representation of endpoint ruleset ([75f4e94](https://github.com/aws/aws-sdk-js-v3/commit/75f4e94d447f4a626c54715d7ad8a517249c2190))
* **client-finspace-data:** Adding new BDD representation of endpoint ruleset ([2f1c6e6](https://github.com/aws/aws-sdk-js-v3/commit/2f1c6e6725fc2296ab366fbd27f4747432af2af4))
* **client-geo-routes:** Adding new BDD representation of endpoint ruleset ([6783fb1](https://github.com/aws/aws-sdk-js-v3/commit/6783fb1b977ead15d8aece86c5e8102a833aabac))
* **client-groundstation:** Adding new BDD representation of endpoint ruleset ([72088fa](https://github.com/aws/aws-sdk-js-v3/commit/72088fa3c1b753b8c3e333d1831c06d77cf707ef))
* **client-iot-data-plane:** Adding GetConnection, ListSubscriptions, and SendDirectMessage APIs to IoT Data Plane ([0308c79](https://github.com/aws/aws-sdk-js-v3/commit/0308c7967aa38cf2a95faf62498a114ca849a978))
* **client-iot:** Adds new connectivity-related fields to Fleet Indexing API requests and responses. ([d5aed82](https://github.com/aws/aws-sdk-js-v3/commit/d5aed82d843315f045adea3f8df6af3427a23865))
* **client-iottwinmaker:** Adding new BDD representation of endpoint ruleset ([0973a5f](https://github.com/aws/aws-sdk-js-v3/commit/0973a5f0c6fd17083d309109baa2c760eab78a6d))
* **client-ivs:** Adding new BDD representation of endpoint ruleset ([fec9533](https://github.com/aws/aws-sdk-js-v3/commit/fec9533c11eb74f51ed0673bc40d456b8f9b34fb))
* **client-keyspaces:** Adding new BDD representation of endpoint ruleset ([dc2f05a](https://github.com/aws/aws-sdk-js-v3/commit/dc2f05acec030283193c24e90022322c66763801))
* **client-kinesis-analytics-v2:** Adding new BDD representation of endpoint ruleset ([ed4c974](https://github.com/aws/aws-sdk-js-v3/commit/ed4c974474ae6758d05841a44eb04d93f38078cb))
* **client-kinesis-video-signaling:** Adding new BDD representation of endpoint ruleset ([c698841](https://github.com/aws/aws-sdk-js-v3/commit/c69884149c2cdc0de75d7da9f8f6cea6d2ecdeaf))
* **client-lookoutequipment:** Adding new BDD representation of endpoint ruleset ([cc3aa1f](https://github.com/aws/aws-sdk-js-v3/commit/cc3aa1f5a7f2225b3b4a05c3c8f282d44a9daf69))
* **client-marketplace-reporting:** Adding new BDD representation of endpoint ruleset ([b6ec741](https://github.com/aws/aws-sdk-js-v3/commit/b6ec7411a2bc17170b7bff8404e033e830c9a626))
* **client-migrationhubstrategy:** Adding new BDD representation of endpoint ruleset ([457165b](https://github.com/aws/aws-sdk-js-v3/commit/457165bca3bb6541783b4d9b69924ef6915aa61e))
* **client-neptune-graph:** Adding new BDD representation of endpoint ruleset ([de4bdcd](https://github.com/aws/aws-sdk-js-v3/commit/de4bdcd0882e0c72d682cb7b035523058cf26e8a))
* **client-networkmonitor:** Adding new BDD representation of endpoint ruleset ([694361c](https://github.com/aws/aws-sdk-js-v3/commit/694361c10abe19f217cc28b92138370687aa19e7))
* **client-opensearchserverless:** Adds support for deletion protection on collections, ability to create NEXTGEN collection groups and autoscaling visibility for NEXTGEN collection groups ([9e4a9ad](https://github.com/aws/aws-sdk-js-v3/commit/9e4a9ad8017760254c78fd336ff2f09187efb216))
* **client-pcs:** This release adds support for configuring scaleDownIdleTimeInSeconds at the compute node group level, allowing customers to set different idle timeouts per node group. Previously this setting was only available at the cluster level. ([bdf351f](https://github.com/aws/aws-sdk-js-v3/commit/bdf351ffc80a8ae28ee1dd1609ef29ad3049ea4a))
* **client-pinpoint-sms-voice-v2:** Adding new BDD representation of endpoint ruleset ([c3ca2e5](https://github.com/aws/aws-sdk-js-v3/commit/c3ca2e58d0392825fefa3c0960a53e1fcf54b158))
* **client-redshift-data:** Adding new BDD representation of endpoint ruleset ([6c60d18](https://github.com/aws/aws-sdk-js-v3/commit/6c60d189bca4d02420b231727305aab5cb76c0fc))
* **client-resiliencehubv2:** This is the initial SDK release for the next generation of Resilience Hub. ([d09980b](https://github.com/aws/aws-sdk-js-v3/commit/d09980b2beabf1591b9888fb94bc5c94a065c9e7))
* **client-route53-recovery-control-config:** Adding new BDD representation of endpoint ruleset ([495d97a](https://github.com/aws/aws-sdk-js-v3/commit/495d97aa196fefc426b11ad445e0bec8f6100c6e))
* **client-s3-control:** Update the minimum value of MinStorageBytesPercentage in StorageLensPrefixLevel.SelectionCriteria from 0.1 to 1, aligning the model with the documented contract. ([e25686b](https://github.com/aws/aws-sdk-js-v3/commit/e25686b17d0a563e294200fc9202d3260f2298a7))
* **client-sagemaker-a2i-runtime:** Adding new BDD representation of endpoint ruleset ([f844e2a](https://github.com/aws/aws-sdk-js-v3/commit/f844e2a44811c898f5ad6ca7cab55adef2091ba0))
* **client-sagemaker-runtime:** Adding new BDD representation of endpoint ruleset ([f48de89](https://github.com/aws/aws-sdk-js-v3/commit/f48de897d514337ac6c7a537afa71c1a0a337ad8))
* **client-securityagent:** Adding new BDD representation of endpoint ruleset ([a685b5a](https://github.com/aws/aws-sdk-js-v3/commit/a685b5ad66a606f4825fd6cb9e1896d4897469a1))
* **client-signin:** Adding new BDD representation of endpoint ruleset ([418e846](https://github.com/aws/aws-sdk-js-v3/commit/418e846a00be68c9a4c3d82b84f07a12ed70d3e3))
* **client-socialmessaging:** Adding new BDD representation of endpoint ruleset ([4002278](https://github.com/aws/aws-sdk-js-v3/commit/40022781d9d8d5d96b17c3cee296aea7cb3649be))
* **client-ssm-incidents:** Adding new BDD representation of endpoint ruleset ([a7a96a9](https://github.com/aws/aws-sdk-js-v3/commit/a7a96a9e0a5164ca2203d06ebc6f708e3292bdb2))
* **client-supplychain:** Adding new BDD representation of endpoint ruleset ([91291e1](https://github.com/aws/aws-sdk-js-v3/commit/91291e12a37e8c0b8f333469ec651ff373b36574))
* **client-timestream-influxdb:** Adding new BDD representation of endpoint ruleset ([f8f87e6](https://github.com/aws/aws-sdk-js-v3/commit/f8f87e633cf8a327401187f91ffbd02dfe98ecd2))
* **client-trustedadvisor:** Adding new BDD representation of endpoint ruleset ([774a86a](https://github.com/aws/aws-sdk-js-v3/commit/774a86a3e845f00f387af80fdd8a978dcc86160b))
* **client-verifiedpermissions:** Adding new BDD representation of endpoint ruleset ([595b901](https://github.com/aws/aws-sdk-js-v3/commit/595b901ae67032785daa204677a097ab4d817c39))
* **client-wickr:** Adding new BDD representation of endpoint ruleset ([568cfb2](https://github.com/aws/aws-sdk-js-v3/commit/568cfb25942ccc319f02d03acabd34e399a1e75a))
* **clients:** update client endpoints as of 2026-05-28 ([10f0c9b](https://github.com/aws/aws-sdk-js-v3/commit/10f0c9be7cd02607ec8ee3a06617b78f51b8998f))





# [3.1055.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1054.0...v3.1055.0) (2026-05-27)


### Features

* **client-bcm-dashboards:** Adding new BDD representation of endpoint ruleset ([7f65a57](https://github.com/aws/aws-sdk-js-v3/commit/7f65a570df320467b9ed24fa1dbce497c8247885))
* **client-bedrock-data-automation:** Matcher Fallback extends the CustomOutputConfiguration for the Document modality in DataAutomationProjects, enabling a fallback blueprint when no match is found. A FALLBACK match status is returned, improving the matching experience and guaranteeing customers always receive CustomOutputResults. ([91b7640](https://github.com/aws/aws-sdk-js-v3/commit/91b76402f2285e390fbc91a6c14aedf4fcc62cc1))
* **client-compute-optimizer-automation:** Adding new BDD representation of endpoint ruleset ([eff7fde](https://github.com/aws/aws-sdk-js-v3/commit/eff7fdeb93da8e70125f8e9a2c3c46f617a2bc1e))
* **client-compute-optimizer:** Adding new BDD representation of endpoint ruleset ([71f6911](https://github.com/aws/aws-sdk-js-v3/commit/71f69111c0868c6277efa402a2bb178cda04779c))
* **client-connectcases:** Adding new BDD representation of endpoint ruleset ([9cd442f](https://github.com/aws/aws-sdk-js-v3/commit/9cd442f930d92a33e0b7bf89925300ba93dff582))
* **client-dataexchange:** Adding new BDD representation of endpoint ruleset ([b1a544f](https://github.com/aws/aws-sdk-js-v3/commit/b1a544f00f08d928cc0050459d3e30b4e50111cd))
* **client-devops-agent:** Adding new BDD representation of endpoint ruleset ([0bc6b6c](https://github.com/aws/aws-sdk-js-v3/commit/0bc6b6c59df7e510cfe33dc3ab5e87901b7a7631))
* **client-docdb-elastic:** Adding new BDD representation of endpoint ruleset ([f660451](https://github.com/aws/aws-sdk-js-v3/commit/f66045108d9a7efc0f11518c177774619b32d0ec))
* **client-ebs:** Adding new BDD representation of endpoint ruleset ([83d916a](https://github.com/aws/aws-sdk-js-v3/commit/83d916a514bc547abee569348f3462bb57e164ec))
* **client-ecr-public:** Adding new BDD representation of endpoint ruleset ([8e485f4](https://github.com/aws/aws-sdk-js-v3/commit/8e485f48e77909f899543dd4be3b84899710b9c2))
* **client-ecs:** Add support for Neuron device resource requirements for Amazon ECS ([aef0e10](https://github.com/aws/aws-sdk-js-v3/commit/aef0e100b84da1ed4550af862e7142af229c3574))
* **client-eks-auth:** Adding new BDD representation of endpoint ruleset ([0d567c9](https://github.com/aws/aws-sdk-js-v3/commit/0d567c95e4ff1e6011220d1c2f2835085538a9b9))
* **client-elementalinference:** Added support for smart subtitles in Elemental Inference, enabling automatic generation of subtitles for media content. Available in English, Spanish, French, German, Italian, and Portuguese. ([a0c52b2](https://github.com/aws/aws-sdk-js-v3/commit/a0c52b23fa312d24f24e9c7de8d4955a6b07f9d3))
* **client-eventbridge:** Adding new BDD representation of endpoint ruleset ([7f75e10](https://github.com/aws/aws-sdk-js-v3/commit/7f75e1005ba62a7ae34b00d4cac08de2bcfd8a16))
* **client-finspace:** Adding new BDD representation of endpoint ruleset ([72e5bc9](https://github.com/aws/aws-sdk-js-v3/commit/72e5bc9e5ef83441ef7282b65bb91415b65acd5f))
* **client-fis:** Adding new BDD representation of endpoint ruleset ([bf27021](https://github.com/aws/aws-sdk-js-v3/commit/bf27021c5c38a3aa3a881527b0c065d67a40dc39))
* **client-imagebuilder:** Adding new BDD representation of endpoint ruleset ([4fccd91](https://github.com/aws/aws-sdk-js-v3/commit/4fccd91d186352be43f444ac5b681556487e85eb))
* **client-inspector2:** Adding new BDD representation of endpoint ruleset ([871d416](https://github.com/aws/aws-sdk-js-v3/commit/871d41645ca55c5a9ff8f5276821f3265df7c280))
* **client-iotdeviceadvisor:** Adding new BDD representation of endpoint ruleset ([20660f6](https://github.com/aws/aws-sdk-js-v3/commit/20660f6e8744aacd72ad48888759496b1d4fe2d1))
* **client-iotfleetwise:** Adding new BDD representation of endpoint ruleset ([49c889b](https://github.com/aws/aws-sdk-js-v3/commit/49c889bbdf3eaf8dfe8e153f5b535b5d4e8af44c))
* **client-iotthingsgraph:** Adding new BDD representation of endpoint ruleset ([8e449e0](https://github.com/aws/aws-sdk-js-v3/commit/8e449e0e4a4d1b16611c58b71246008d4780cccf))
* **client-launch-wizard:** Adding new BDD representation of endpoint ruleset ([dbba848](https://github.com/aws/aws-sdk-js-v3/commit/dbba8489fed9f546b90829ded6f22492d0d3c6ee))
* **client-location:** Adding new BDD representation of endpoint ruleset ([2ab5e7f](https://github.com/aws/aws-sdk-js-v3/commit/2ab5e7f22fcc9fe212bf8d7a0dcc4ef929b1f2e0))
* **client-m2:** Adding new BDD representation of endpoint ruleset ([c9a0c8d](https://github.com/aws/aws-sdk-js-v3/commit/c9a0c8d7a4958a41d014505489dc5c6d8513ab70))
* **client-marketplace-deployment:** Adding new BDD representation of endpoint ruleset ([4ebc757](https://github.com/aws/aws-sdk-js-v3/commit/4ebc757a95bb86d92865c2a6ae73a62c65133f76))
* **client-medialive:** AWS Elemental MediaLive now supports Smart Subtitles, a new caption source that uses AWS Elemental Inference to automatically generate WebVTT and TTML captions from source audio. Available in English, Spanish, French, German, Italian, and Portuguese. ([fea4801](https://github.com/aws/aws-sdk-js-v3/commit/fea480170c75800e8dc5604c637b7040e6397249))
* **client-memorydb:** Adding new BDD representation of endpoint ruleset ([8e5e1e1](https://github.com/aws/aws-sdk-js-v3/commit/8e5e1e1cd121cc4963ae6d5c130fb83ad257fbee))
* **client-mgn:** Adding new BDD representation of endpoint ruleset ([43df313](https://github.com/aws/aws-sdk-js-v3/commit/43df313f73fd9a0baf173a4fb7bd041498e2dc81))
* **client-mpa:** Adding new BDD representation of endpoint ruleset ([c7d9e57](https://github.com/aws/aws-sdk-js-v3/commit/c7d9e5761ace6e0f81566bf0fcd13c4f05e3f0d7))
* **client-nova-act:** Adding new BDD representation of endpoint ruleset ([d20208a](https://github.com/aws/aws-sdk-js-v3/commit/d20208ac93b6f08aef6aeed56db7e0f6f0c87594))
* **client-omics:** Adding new BDD representation of endpoint ruleset ([f0d5729](https://github.com/aws/aws-sdk-js-v3/commit/f0d572905a9a1978dd96e8bfff5f244496643b0f))
* **client-opensearch:** OpenSearch will now support multi-segment paths in JWKS URLs. ([19774e3](https://github.com/aws/aws-sdk-js-v3/commit/19774e3027be3eeb7f39ee253e2be27fb157dcca))
* **client-partnercentral-benefits:** Adding new BDD representation of endpoint ruleset ([a51c074](https://github.com/aws/aws-sdk-js-v3/commit/a51c0749f2acd4dabfe1dbd33be9bc553da4aace))
* **client-partnercentral-selling:** Adding new BDD representation of endpoint ruleset ([8fd0d9f](https://github.com/aws/aws-sdk-js-v3/commit/8fd0d9f1b2c937daa159c6b3dc441705735eaae9))
* **client-payment-cryptography:** Adding new BDD representation of endpoint ruleset ([038b995](https://github.com/aws/aws-sdk-js-v3/commit/038b995df8bcdb4d1bb3125322b06c266987e954))
* **client-pca-connector-ad:** Adding new BDD representation of endpoint ruleset ([c922bfa](https://github.com/aws/aws-sdk-js-v3/commit/c922bfa579ebb4837a82ea613052caba1cc6e51a))
* **client-resource-explorer-2:** Adding new BDD representation of endpoint ruleset ([675b8b7](https://github.com/aws/aws-sdk-js-v3/commit/675b8b7d75a8b30477707a219ebf70548bd5d8c1))
* **client-rtbfabric:** Adding new BDD representation of endpoint ruleset ([d7495b1](https://github.com/aws/aws-sdk-js-v3/commit/d7495b1d54e4c225782011f65103054bf6a3fb9c))
* **client-rum:** Adding new BDD representation of endpoint ruleset ([56728db](https://github.com/aws/aws-sdk-js-v3/commit/56728db30e4c459217fe70de2e00dd8ffe2e6c55))
* **client-sagemaker-featurestore-runtime:** Adding new BDD representation of endpoint ruleset ([55a9a5e](https://github.com/aws/aws-sdk-js-v3/commit/55a9a5e5af52a28d8310343a9f1f18446ac3d1ad))
* **client-sagemaker:** Adds shared environment support for Restricted Instance Groups (RIGs) on SageMaker HyperPod, enabling cross-RIG workload scheduling and FSx sharing. This unlocks shared CPU-GPU environments needed for cost-efficient RL training (e.g., Nova Forge). Adds p6 instance support for recommendation jobs ([7519b9b](https://github.com/aws/aws-sdk-js-v3/commit/7519b9bf7495ae3009b02c7bc0cadaacf8307c77))
* **client-savingsplans:** Adding new BDD representation of endpoint ruleset ([65a9b62](https://github.com/aws/aws-sdk-js-v3/commit/65a9b6218f833ed882b322fd069192c5d2f19751))
* **client-security-ir:** Adding new BDD representation of endpoint ruleset ([877b839](https://github.com/aws/aws-sdk-js-v3/commit/877b83940ce1e5bb3e936c7f9779dcd865c07ec9))
* **client-simpledbv2:** Adding new BDD representation of endpoint ruleset ([1186b97](https://github.com/aws/aws-sdk-js-v3/commit/1186b978380aa8569442880a64c8fb4b7b08b6cd))
* **client-ssm-contacts:** Adding new BDD representation of endpoint ruleset ([3e8fa15](https://github.com/aws/aws-sdk-js-v3/commit/3e8fa1564e0e8b3b4c2d4697597a322d24bc1800))
* **client-ssm-sap:** Adding new BDD representation of endpoint ruleset ([46f23a8](https://github.com/aws/aws-sdk-js-v3/commit/46f23a8be4fa1bc66dfa0a75445dc4b9c7374e11))
* **client-support-app:** Adding new BDD representation of endpoint ruleset ([0c6720d](https://github.com/aws/aws-sdk-js-v3/commit/0c6720d5f5bc39d66bdd3fc1c993140d067557d1))
* **client-voice-id:** Adding new BDD representation of endpoint ruleset ([4ea1f63](https://github.com/aws/aws-sdk-js-v3/commit/4ea1f631d6ec3e791a1e8ce8b9eb57cc511c5296))
* **client-wellarchitected:** Adding new BDD representation of endpoint ruleset ([12c1733](https://github.com/aws/aws-sdk-js-v3/commit/12c1733fb1bbbcea18afb5d1068fafd0eed02a3b))
* **client-workmailmessageflow:** Adding new BDD representation of endpoint ruleset ([7d1639c](https://github.com/aws/aws-sdk-js-v3/commit/7d1639c0c5a49c13615bd11822142bda0b4e3813))
* **client-workspaces-web:** Adding new BDD representation of endpoint ruleset ([16accb9](https://github.com/aws/aws-sdk-js-v3/commit/16accb93c7b7234c647e8f70192c444fa552a9e1))





# [3.1054.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1053.0...v3.1054.0) (2026-05-26)


### Bug Fixes

* **credential-provider-http:** close sockets after connection attempts ([#7995](https://github.com/aws/aws-sdk-js-v3/issues/7995)) ([a0b25e1](https://github.com/aws/aws-sdk-js-v3/commit/a0b25e152e01a0a1186987f8abb3240142fa5427))


### Features

* **client-aiops:** Adding new BDD representation of endpoint ruleset ([471960e](https://github.com/aws/aws-sdk-js-v3/commit/471960e262546a494d27c88f5357f6985965d3f3))
* **client-applicationcostprofiler:** Adding new BDD representation of endpoint ruleset ([2d5e9e4](https://github.com/aws/aws-sdk-js-v3/commit/2d5e9e40207011f51dbd208528da8a6c19371730))
* **client-apprunner:** Adding new BDD representation of endpoint ruleset ([45b9c7f](https://github.com/aws/aws-sdk-js-v3/commit/45b9c7f5ef9475e4bc8b2a54653763cad17fe0dd))
* **client-backup:** Launching S3 PITR malware scanning support for AWS Backup ([31e74c6](https://github.com/aws/aws-sdk-js-v3/commit/31e74c66f213289a8654d966a5e9ca2f3cda1388))
* **client-batch:** Increase the maximum value of jobExecutionTimeoutMinutes to support longer job timeouts during compute environment infrastructure updates. ([7fe682a](https://github.com/aws/aws-sdk-js-v3/commit/7fe682a52fed0fe85616ade6b85285add1efc2bb))
* **client-bcm-data-exports:** Adding new BDD representation of endpoint ruleset ([7870d06](https://github.com/aws/aws-sdk-js-v3/commit/7870d063aa836cdf1f6d4b570a42b05a5ae7425c))
* **client-bedrock-agentcore-control:** Adding new BDD representation of endpoint ruleset ([a9707eb](https://github.com/aws/aws-sdk-js-v3/commit/a9707ebf9271642e2e26e6858c964b375f924f9d))
* **client-bedrock-agentcore:** Adding new BDD representation of endpoint ruleset ([67af24d](https://github.com/aws/aws-sdk-js-v3/commit/67af24d699c5946ba100c1c59e8a6543a0ef3bab))
* **client-bedrock-data-automation:** Adding new BDD representation of endpoint ruleset ([0312844](https://github.com/aws/aws-sdk-js-v3/commit/03128441f94be2ab4dbab2bba99710708364768e))
* **client-billing:** Adding new BDD representation of endpoint ruleset ([cad5c50](https://github.com/aws/aws-sdk-js-v3/commit/cad5c50dd1c391781fb6840ea965b6abb265c1e2))
* **client-chime-sdk-identity:** Adding new BDD representation of endpoint ruleset ([718695a](https://github.com/aws/aws-sdk-js-v3/commit/718695ab030409a2dffe2ed2f3a19d57f6e35bfe))
* **client-chime-sdk-media-pipelines:** Adding new BDD representation of endpoint ruleset ([6e00744](https://github.com/aws/aws-sdk-js-v3/commit/6e007442f1bbc63afefe9d2905ce0aca11c84918))
* **client-cleanrooms:** Adding new BDD representation of endpoint ruleset ([0f61670](https://github.com/aws/aws-sdk-js-v3/commit/0f61670c2f3938a3d76199bdd3c4bfbb27e2e54d))
* **client-cleanroomsml:** Adding new BDD representation of endpoint ruleset ([30ab8d0](https://github.com/aws/aws-sdk-js-v3/commit/30ab8d0791cb9d75f0ce2266d159fe92d1478a37))
* **client-codeconnections:** Adding new BDD representation of endpoint ruleset ([cb808b4](https://github.com/aws/aws-sdk-js-v3/commit/cb808b4ed60866de7ea02769e5222811ff185539))
* **client-connecthealth:** Adding new BDD representation of endpoint ruleset ([0ceab8f](https://github.com/aws/aws-sdk-js-v3/commit/0ceab8f3ea89ac2e04ba1e6d0d20fea3fdaf0310))
* **client-controlcatalog:** Adding new BDD representation of endpoint ruleset ([2a735ee](https://github.com/aws/aws-sdk-js-v3/commit/2a735ee48d06ff2fd1b34bd93803078429089aba))
* **client-datazone:** Added resourceConfigurations and allowUserProvidedConfigurations fields to environment blueprint configuration APIs, enabling customers who migrated from V1 to V2 domains to update resource configurations (such as lineage schedules) programmatically via the SDK. ([0e45085](https://github.com/aws/aws-sdk-js-v3/commit/0e45085dbe5d1c042c8535ba2b19e343f9b2f105))
* **client-devops-guru:** Adding new BDD representation of endpoint ruleset ([6d2a2e8](https://github.com/aws/aws-sdk-js-v3/commit/6d2a2e8fac52ee753461e93105fc029b3291d827))
* **client-emr-serverless:** Adding new BDD representation of endpoint ruleset ([63e4792](https://github.com/aws/aws-sdk-js-v3/commit/63e479282286f0c2618c2d5e8d75d193ac3a2b1f))
* **client-evs:** Adding new BDD representation of endpoint ruleset ([7194f05](https://github.com/aws/aws-sdk-js-v3/commit/7194f05d93f2c9c4c23121dfa6a3343db8c56aa2))
* **client-greengrassv2:** Adding new BDD representation of endpoint ruleset ([8c9b853](https://github.com/aws/aws-sdk-js-v3/commit/8c9b8538e8f5728bc951951b4944c0cffa4d1343))
* **client-guardduty:** Add malware scan support for Continuous Backups, also known as Point-In-Time Recovery Points (PITR). ([1c98266](https://github.com/aws/aws-sdk-js-v3/commit/1c9826698130aad2908a53c310fcabde8e778337))
* **client-identitystore:** Adding new BDD representation of endpoint ruleset ([0a98a37](https://github.com/aws/aws-sdk-js-v3/commit/0a98a373086bf6f065511d1811ffc968eadd823d))
* **client-iot-managed-integrations:** Adding new BDD representation of endpoint ruleset ([99b55d1](https://github.com/aws/aws-sdk-js-v3/commit/99b55d173f3fdf06a23e3dc5457caa9f60e122a2))
* **client-ivschat:** Adding new BDD representation of endpoint ruleset ([4daac35](https://github.com/aws/aws-sdk-js-v3/commit/4daac351073d07c3b9f13081c80dca5f2881348c))
* **client-keyspacesstreams:** Adding new BDD representation of endpoint ruleset ([f561e99](https://github.com/aws/aws-sdk-js-v3/commit/f561e99b12fa97005fe059a196cb160704e58aba))
* **client-kinesis-video-webrtc-storage:** Adding new BDD representation of endpoint ruleset ([590aa8b](https://github.com/aws/aws-sdk-js-v3/commit/590aa8bb48757252ecd5bb49bebfa36f1bb1b8bf))
* **client-managedblockchain-query:** Adding new BDD representation of endpoint ruleset ([39c1d42](https://github.com/aws/aws-sdk-js-v3/commit/39c1d425762a64d02ae8df4b71ebf352661b36cf))
* **client-marketplace-agreement:** Adding new BDD representation of endpoint ruleset ([55451c6](https://github.com/aws/aws-sdk-js-v3/commit/55451c63ab306f143708df1634723977e80b0147))
* **client-mediapackagev2:** Adding new BDD representation of endpoint ruleset ([177a4e1](https://github.com/aws/aws-sdk-js-v3/commit/177a4e14dd6f68560653fd2f9df5b33cd80b711d))
* **client-medical-imaging:** Adding new BDD representation of endpoint ruleset ([696f02f](https://github.com/aws/aws-sdk-js-v3/commit/696f02f8ada917ac49fd4ceb81cbe1155b1b8c28))
* **client-notifications:** Adding new BDD representation of endpoint ruleset ([20353b1](https://github.com/aws/aws-sdk-js-v3/commit/20353b1edc36d0d5a7910b50f9a144d8e102cab0))
* **client-observabilityadmin:** Adding new BDD representation of endpoint ruleset ([8b22750](https://github.com/aws/aws-sdk-js-v3/commit/8b2275044ca47c516c4be25ca5d0a74f4f71d628))
* **client-odb:** Adding new BDD representation of endpoint ruleset ([2204969](https://github.com/aws/aws-sdk-js-v3/commit/220496998f7c2156067f90870d5068971765afda))
* **client-osis:** Adding new BDD representation of endpoint ruleset ([32637e0](https://github.com/aws/aws-sdk-js-v3/commit/32637e00e69c88b7c98fa9e3a3d4f61283622f11))
* **client-partnercentral-channel:** Adding new BDD representation of endpoint ruleset ([96f8533](https://github.com/aws/aws-sdk-js-v3/commit/96f85334ba9c28c12714c91ca3e0620392b10ab5))
* **client-pca-connector-scep:** Adding new BDD representation of endpoint ruleset ([be523d0](https://github.com/aws/aws-sdk-js-v3/commit/be523d0f0f54ab9f44faf3b949add765fb023e86))
* **client-pipes:** Adding new BDD representation of endpoint ruleset ([2ea634e](https://github.com/aws/aws-sdk-js-v3/commit/2ea634e0a9a4c8319db745c942df718e3afb717a))
* **client-redshift-serverless:** Adding new BDD representation of endpoint ruleset ([30534fd](https://github.com/aws/aws-sdk-js-v3/commit/30534fdee57aba9c5e8cf27a9669b408c3aa7a2c))
* **client-resiliencehub:** Adding new BDD representation of endpoint ruleset ([c28aec5](https://github.com/aws/aws-sdk-js-v3/commit/c28aec5b7d122f52492ffbdc040f4333c3d75d92))
* **client-resource-groups-tagging-api:** The GetResources API now returns MissingTagKeys in ComplianceDetails, listing tag keys defined as required in the ReportRequiredTagBlock block of the effective tag policy that are absent from the resource. ([996d828](https://github.com/aws/aws-sdk-js-v3/commit/996d8283858a9846fe2d73f2c5957b313aada751))
* **client-rolesanywhere:** Adding new BDD representation of endpoint ruleset ([1adcba4](https://github.com/aws/aws-sdk-js-v3/commit/1adcba48f64b9ec2e9626077b527876a93e5cf0d))
* **client-route53globalresolver:** Adding new BDD representation of endpoint ruleset ([b376696](https://github.com/aws/aws-sdk-js-v3/commit/b376696f3dd0060cfce04efaad214a7981d3a913))
* **client-s3tables:** Adding new BDD representation of endpoint ruleset ([1e9f967](https://github.com/aws/aws-sdk-js-v3/commit/1e9f9670394f607776e05f12bbb3128b5abe02f8))
* **client-sagemaker-edge:** Adding new BDD representation of endpoint ruleset ([6820a27](https://github.com/aws/aws-sdk-js-v3/commit/6820a275b28b1b4ad0b212ac4c483e66d14987a5))
* **client-sagemaker-geospatial:** Adding new BDD representation of endpoint ruleset ([d762b99](https://github.com/aws/aws-sdk-js-v3/commit/d762b99458181954af18c5d10784f5df76c23f78))
* **client-scheduler:** Adding new BDD representation of endpoint ruleset ([d0d221b](https://github.com/aws/aws-sdk-js-v3/commit/d0d221b2c1b23680b2426a3c85e2ac4ebfb31aed))
* **client-service-quotas:** Adding new BDD representation of endpoint ruleset ([4b88f64](https://github.com/aws/aws-sdk-js-v3/commit/4b88f648a00ad8f2d57352d0c298cd9deedbfa82))
* **client-servicediscovery:** Adding new BDD representation of endpoint ruleset ([82072b4](https://github.com/aws/aws-sdk-js-v3/commit/82072b4b296aedbd8fe09c9203f4c7f41ba5a158))
* **client-ssm-quicksetup:** Adding new BDD representation of endpoint ruleset ([25a54fa](https://github.com/aws/aws-sdk-js-v3/commit/25a54fa0acab14e5496b6f989fb3aad92ee684f9))
* **client-workspaces-thin-client:** Adding new BDD representation of endpoint ruleset ([9f6fae7](https://github.com/aws/aws-sdk-js-v3/commit/9f6fae73a342ef6461628b05200430aec762ef62))





# [3.1053.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1052.0...v3.1053.0) (2026-05-22)


### Features

* **client-appconfig:** Adding new BDD representation of endpoint ruleset ([e757a91](https://github.com/aws/aws-sdk-js-v3/commit/e757a91539c7e5633896a6165098a1802de3255c))
* **client-application-signals:** Adding new BDD representation of endpoint ruleset ([38a20bf](https://github.com/aws/aws-sdk-js-v3/commit/38a20bfa5b7ebd899bbb4382366e6a06e27dc286))
* **client-b2bi:** Adding new BDD representation of endpoint ruleset ([66bb63d](https://github.com/aws/aws-sdk-js-v3/commit/66bb63d12d590f6e191714b9263affccf478f3b2))
* **client-bcm-pricing-calculator:** Adding new BDD representation of endpoint ruleset ([69e44c0](https://github.com/aws/aws-sdk-js-v3/commit/69e44c0d790426ebf70e3b16b7b2a32ea94c9207))
* **client-bcm-recommended-actions:** Adding new BDD representation of endpoint ruleset ([45477f0](https://github.com/aws/aws-sdk-js-v3/commit/45477f0838686bbbd69ad1afbd6b3b7ecda1a1c3))
* **client-bedrock-agent-runtime:** Adding new BDD representation of endpoint ruleset ([7ac37e3](https://github.com/aws/aws-sdk-js-v3/commit/7ac37e3af8fc13de2a6e5127d417f8a7ecb621a5))
* **client-bedrock:** Adding new BDD representation of endpoint ruleset ([fdd7c1e](https://github.com/aws/aws-sdk-js-v3/commit/fdd7c1ef638f8a047ff81cfc5d8923ac92ab8a9d))
* **client-cloudcontrol:** Adding new BDD representation of endpoint ruleset ([2e7ef3b](https://github.com/aws/aws-sdk-js-v3/commit/2e7ef3bf7a1497a06a0ae1cbdfaa6bfa68b6ffe4))
* **client-codestar-notifications:** Adding new BDD representation of endpoint ruleset ([d95ca14](https://github.com/aws/aws-sdk-js-v3/commit/d95ca14cfe7e22f165246649e0979be415718077))
* **client-controltower:** Adding new BDD representation of endpoint ruleset ([b99b7a1](https://github.com/aws/aws-sdk-js-v3/commit/b99b7a1820b90840d18c8b39edc9a4d10afdf553))
* **client-customer-profiles:** Adding new BDD representation of endpoint ruleset ([9de89c1](https://github.com/aws/aws-sdk-js-v3/commit/9de89c10330b5641dc0427653815f8131209edca))
* **client-databrew:** Adding new BDD representation of endpoint ruleset ([4a1bcdb](https://github.com/aws/aws-sdk-js-v3/commit/4a1bcdb9123163d275247b25f02845097260fb51))
* **client-datazone:** Add support for VPC connection ([49e859b](https://github.com/aws/aws-sdk-js-v3/commit/49e859b1aaa5317c55c3196be28a47c93844ff8a))
* **client-dsql:** Adding new BDD representation of endpoint ruleset ([55e7cc4](https://github.com/aws/aws-sdk-js-v3/commit/55e7cc4b9a5f2eb9a20b13223f764c872e4e98e6))
* **client-ec2:** The ModifyInstanceAttribute API now supports modification of EnclaveOptions for the instance as a typed parameter. ([bc91aa6](https://github.com/aws/aws-sdk-js-v3/commit/bc91aa621fed3c15fecfe07660458aafa59242df))
* **client-emr-containers:** Adding new BDD representation of endpoint ruleset ([e99cccb](https://github.com/aws/aws-sdk-js-v3/commit/e99cccbde15f31ac18b780138c8f880600e7e516))
* **client-forecast:** Adding new BDD representation of endpoint ruleset ([5964d82](https://github.com/aws/aws-sdk-js-v3/commit/5964d82b99f5dd46a92341f85053db135c0d23fc))
* **client-forecastquery:** Adding new BDD representation of endpoint ruleset ([ada5ae3](https://github.com/aws/aws-sdk-js-v3/commit/ada5ae322c6b5eb88ba194b1d8715b5d699de1ce))
* **client-frauddetector:** Adding new BDD representation of endpoint ruleset ([9c130d5](https://github.com/aws/aws-sdk-js-v3/commit/9c130d58eb968baaaf07f9f45eae3f01ae7d4d59))
* **client-freetier:** Adding new BDD representation of endpoint ruleset ([e3cf14a](https://github.com/aws/aws-sdk-js-v3/commit/e3cf14a2f64239d4b7c4160fd8c5b95672deb9b6))
* **client-geo-places:** Adding new BDD representation of endpoint ruleset ([965ac97](https://github.com/aws/aws-sdk-js-v3/commit/965ac97a33901ae783e8ea29c56b80380951d211))
* **client-internetmonitor:** Adding new BDD representation of endpoint ruleset ([117e04a](https://github.com/aws/aws-sdk-js-v3/commit/117e04a99f7c58f946947e77b0bc75f87998198e))
* **client-invoicing:** Adds support for idempotency with a new ClientToken field for the CreateInvoiceUnit, DeleteInvoiceUnit, UpdateInvoiceUnit, DeleteProcurementPortalPreference, PutProcurementPortalPreference, and UpdateProcurementPortalPreferenceStatus APIs. ([ce7691e](https://github.com/aws/aws-sdk-js-v3/commit/ce7691e1891a4347d5e9fc14652168a74ecfd10c))
* **client-iot-wireless:** Adding new BDD representation of endpoint ruleset ([bab66e3](https://github.com/aws/aws-sdk-js-v3/commit/bab66e38bcd3654cb10734206f5fab2d1d27c7e5))
* **client-ivs-realtime:** Adding new BDD representation of endpoint ruleset ([adeea78](https://github.com/aws/aws-sdk-js-v3/commit/adeea78b85eb00bed1a973b7344ecddbd89345f0))
* **client-kafkaconnect:** Adding new BDD representation of endpoint ruleset ([380c7ef](https://github.com/aws/aws-sdk-js-v3/commit/380c7efab19bdf3c1b2f2655611fd88d6c51c2fe))
* **client-license-manager-linux-subscriptions:** Adding new BDD representation of endpoint ruleset ([2c43da7](https://github.com/aws/aws-sdk-js-v3/commit/2c43da72be08813fca5a62745e1a9f94e5f23dd4))
* **client-license-manager-user-subscriptions:** Adding new BDD representation of endpoint ruleset ([7fd5d20](https://github.com/aws/aws-sdk-js-v3/commit/7fd5d2020b79ef05efcf6857ce1d3b81ef51d781))
* **client-marketplace-discovery:** Adding new BDD representation of endpoint ruleset ([4513296](https://github.com/aws/aws-sdk-js-v3/commit/45132960757e60a48c2eef3b36350c282b32f727))
* **client-migration-hub-refactor-spaces:** Adding new BDD representation of endpoint ruleset ([a4e5e7b](https://github.com/aws/aws-sdk-js-v3/commit/a4e5e7ba8ec707c4bbdf27a7e38425cb9652861c))
* **client-neptunedata:** Adding new BDD representation of endpoint ruleset ([418745d](https://github.com/aws/aws-sdk-js-v3/commit/418745d5411b2ff30ffb2c8472d4301f485a71a6))
* **client-network-firewall:** Adding new BDD representation of endpoint ruleset ([963a128](https://github.com/aws/aws-sdk-js-v3/commit/963a1286bf936d17d6e0df5aad2e1ffb602e469e))
* **client-notificationscontacts:** Adding new BDD representation of endpoint ruleset ([e9ca97a](https://github.com/aws/aws-sdk-js-v3/commit/e9ca97abed6a82e58c6ae305eeda869b13c5b008))
* **client-oam:** Adding new BDD representation of endpoint ruleset ([5a30b72](https://github.com/aws/aws-sdk-js-v3/commit/5a30b72248e4f26b10173b2f64c7892d1b963eaa))
* **client-outposts:** Adding new BDD representation of endpoint ruleset ([6e7917a](https://github.com/aws/aws-sdk-js-v3/commit/6e7917a6e550d5190564edefc4f65ea392d864ab))
* **client-panorama:** Adding new BDD representation of endpoint ruleset ([d227732](https://github.com/aws/aws-sdk-js-v3/commit/d227732b924cfcefad956561e9d000226b6472a1))
* **client-partnercentral-account:** Adding new BDD representation of endpoint ruleset ([ad88edb](https://github.com/aws/aws-sdk-js-v3/commit/ad88edbb4a8ef4029b1d7897f7221c50da491865))
* **client-pi:** Added ListPerformanceAnalysisReportRecommendations API to retrieve recommendations for a performance analysis report. Added analysis configuration support to CreatePerformanceAnalysisReport for enhanced analysis types such as vacuum analysis. ([b09c19b](https://github.com/aws/aws-sdk-js-v3/commit/b09c19bf6e70f660073b94da11abf5ea4e6ea882))
* **client-qconnect:** Added guardrail assessment results to inference spans in the ListSpans API. You can now see which AI Guardrail policies were evaluated, whether content was blocked or masked, and per-policy details for each Bedrock Converse call ([0213a86](https://github.com/aws/aws-sdk-js-v3/commit/0213a8624e82ca946be41fe8833d460e709d2d2a))
* **client-rbin:** Adding new BDD representation of endpoint ruleset ([5e73fd4](https://github.com/aws/aws-sdk-js-v3/commit/5e73fd45b4407462c931a4f82a025d1c2d1d93a9))
* **client-repostspace:** Adding new BDD representation of endpoint ruleset ([15fec74](https://github.com/aws/aws-sdk-js-v3/commit/15fec74b7b20e186a9eb70d593819dfa73b7f782))
* **client-s3vectors:** Adding new BDD representation of endpoint ruleset ([4071f1a](https://github.com/aws/aws-sdk-js-v3/commit/4071f1a4d21610fb883f2af611b3d69d2922cd5f))
* **client-schemas:** Adding new BDD representation of endpoint ruleset ([d8835cf](https://github.com/aws/aws-sdk-js-v3/commit/d8835cfc2971415619c70bd9d298fd2498d8d4b8))
* **client-securityagent:** Adds support for verification scripts on penetration test findings. Customers can now download executable scripts to independently reproduce confirmed vulnerabilities, with instructions and required environment variables provided for each finding. ([f34ceec](https://github.com/aws/aws-sdk-js-v3/commit/f34ceec0577b4829afe6b3ffbc4793a3b72467a7))
* **client-sesv2:** Adding new BDD representation of endpoint ruleset ([6f1bd2e](https://github.com/aws/aws-sdk-js-v3/commit/6f1bd2e812a1aef1c515999880d5de6614562d45))
* **client-simspaceweaver:** Adding new BDD representation of endpoint ruleset ([c6617b6](https://github.com/aws/aws-sdk-js-v3/commit/c6617b6d847a27bc7e32bef03c10fb04b227e21f))
* **client-sso-oidc:** Adding new BDD representation of endpoint ruleset ([2e909d2](https://github.com/aws/aws-sdk-js-v3/commit/2e909d25a859634f57fd2cdcd20a760c36bfc42b))
* **client-tnb:** Adding new BDD representation of endpoint ruleset ([f07457c](https://github.com/aws/aws-sdk-js-v3/commit/f07457cbe17f8f1621475ba0c585363e36aef9d7))
* **clients:** update client endpoints as of 2026-05-22 ([3518814](https://github.com/aws/aws-sdk-js-v3/commit/3518814ad7011517e95ba077b4d60b64834dc0f5))





# [3.1052.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1051.0...v3.1052.0) (2026-05-21)


### Bug Fixes

* **cloudfront-signer:** encode URL path before signing ([#8039](https://github.com/aws/aws-sdk-js-v3/issues/8039)) ([4d708d6](https://github.com/aws/aws-sdk-js-v3/commit/4d708d600c681532df30285aa5a2f21b07226269))


### Features

* **client-acm-pca:** Adding new BDD representation of endpoint ruleset ([73c5c7f](https://github.com/aws/aws-sdk-js-v3/commit/73c5c7f0db262f1d5a97ec9f022fef4be92adcda))
* **client-acm:** Adding new BDD representation of endpoint ruleset ([15634c5](https://github.com/aws/aws-sdk-js-v3/commit/15634c51625ca99d610332b39903c395048d1153))
* **client-api-gateway:** Adding new BDD representation of endpoint ruleset ([26e618e](https://github.com/aws/aws-sdk-js-v3/commit/26e618e896e7c07422cf54503a81238e8000dd99))
* **client-apigatewayv2:** Adding new BDD representation of endpoint ruleset ([b218bd7](https://github.com/aws/aws-sdk-js-v3/commit/b218bd7722f69b745e3b0738d954e4062d0fb85f))
* **client-appstream:** Adding new BDD representation of endpoint ruleset ([ea9efaf](https://github.com/aws/aws-sdk-js-v3/commit/ea9efafa0ab2e9e6c37b51c176838ad87a7fcdc9))
* **client-backup:** Adding new BDD representation of endpoint ruleset ([c809d3b](https://github.com/aws/aws-sdk-js-v3/commit/c809d3b994c332f093d36f4958e13ae363501165))
* **client-bedrock-agent:** Adding new BDD representation of endpoint ruleset ([a9a7195](https://github.com/aws/aws-sdk-js-v3/commit/a9a719583dfd89bf4ca5fcd3be8e99572d1fe415))
* **client-bedrock-agentcore-control:** Adds dataset management APIs for creating, versioning, and managing evaluation datasets. ([225ba34](https://github.com/aws/aws-sdk-js-v3/commit/225ba34550f725de0319b3b70abd735004f90954))
* **client-bedrock-runtime:** Adding new BDD representation of endpoint ruleset ([f09451b](https://github.com/aws/aws-sdk-js-v3/commit/f09451b1563aadbfb4d64580019df8969dfd255f))
* **client-cleanrooms:** Collaboration creators can update payment configurations without recreating the collaboration. When multiple payer candidates are configured for a cost type, analysis runners can specify the actual payer at submission time, providing granular control over billing. ([1cee155](https://github.com/aws/aws-sdk-js-v3/commit/1cee155ce27c40a0000227393e0e8356652b70e2))
* **client-cleanroomsml:** Collaboration creators can update payment configurations without recreating the collaboration. When multiple payer candidates are configured for a cost type, analysis runners can specify the actual payer at submission time, providing granular control over billing. ([191561c](https://github.com/aws/aws-sdk-js-v3/commit/191561ce144dbd5c3237a7716fa7874c09388d34))
* **client-cloud9:** Adding new BDD representation of endpoint ruleset ([78d50c2](https://github.com/aws/aws-sdk-js-v3/commit/78d50c2e0950529fdd37789d80a2c6a5ae17ff59))
* **client-codeartifact:** Adding new BDD representation of endpoint ruleset ([7f5da31](https://github.com/aws/aws-sdk-js-v3/commit/7f5da314ddf00ae0b7b2e98ee285273648ba92d1))
* **client-codeguruprofiler:** Adding new BDD representation of endpoint ruleset ([b94dfaa](https://github.com/aws/aws-sdk-js-v3/commit/b94dfaafc8e279c30facce4ecc3941a4c66f452b))
* **client-comprehend:** Adding new BDD representation of endpoint ruleset ([703f5fa](https://github.com/aws/aws-sdk-js-v3/commit/703f5fa66a1891cee20858932a038181bde7ade8))
* **client-comprehendmedical:** Adding new BDD representation of endpoint ruleset ([101e2da](https://github.com/aws/aws-sdk-js-v3/commit/101e2da80b38d8855b267a44d2a23c15cfed0370))
* **client-connect:** Adding new BDD representation of endpoint ruleset ([dafa111](https://github.com/aws/aws-sdk-js-v3/commit/dafa111c22cd4a0a5151e6133fc06daa7629dc00))
* **client-datasync:** Adding new BDD representation of endpoint ruleset ([4b9532a](https://github.com/aws/aws-sdk-js-v3/commit/4b9532a180b73dd60dcd1af930dce85e7ae4acb5))
* **client-dlm:** Adding new BDD representation of endpoint ruleset ([b2dd6ba](https://github.com/aws/aws-sdk-js-v3/commit/b2dd6ba2e9eb63b93158ebb5884a7055f5039614))
* **client-eks:** Adding new BDD representation of endpoint ruleset ([b194851](https://github.com/aws/aws-sdk-js-v3/commit/b194851ecd4a6b068e38fcd2a8d8baa25691475a))
* **client-evs:** A new GetDepotUrl API has been added to retrieve a URL for accessing Amazon EVS custom addon packages. Customers can use this URL to configure vSphere Lifecycle Manager (vLCM) as an online depot source, enabling upgrades of addon components across ESXi hosts. ([20d0157](https://github.com/aws/aws-sdk-js-v3/commit/20d015718c256234ab98fd43a849bd11bb6b349c))
* **client-fms:** Adding new BDD representation of endpoint ruleset ([db51918](https://github.com/aws/aws-sdk-js-v3/commit/db5191849c6890b888dd73c472a1a07eedcaf9f5))
* **client-fsx:** Adding new BDD representation of endpoint ruleset ([83c595a](https://github.com/aws/aws-sdk-js-v3/commit/83c595a4e1862f3ae3973334f73d802cbe03da28))
* **client-global-accelerator:** Adding new BDD representation of endpoint ruleset ([5e60c75](https://github.com/aws/aws-sdk-js-v3/commit/5e60c75c1f809bb7637e825070820eea50454ab4))
* **client-guardduty:** Adding new BDD representation of endpoint ruleset ([4aa7b6d](https://github.com/aws/aws-sdk-js-v3/commit/4aa7b6d28a8abed97905b8e4c9271b203f08fec4))
* **client-healthlake:** Adding new BDD representation of endpoint ruleset ([1b33b0e](https://github.com/aws/aws-sdk-js-v3/commit/1b33b0eaaa53217c4bbd49d2eb4bda1416bc1289))
* **client-iot-jobs-data-plane:** Adding new BDD representation of endpoint ruleset ([958ab81](https://github.com/aws/aws-sdk-js-v3/commit/958ab819f53123274e382b1c856a345ae884f690))
* **client-kafka:** Adding new BDD representation of endpoint ruleset ([6978460](https://github.com/aws/aws-sdk-js-v3/commit/697846097d51391b8b29522552fbf1148ec9cf42))
* **client-kendra-ranking:** Adding new BDD representation of endpoint ruleset ([209096f](https://github.com/aws/aws-sdk-js-v3/commit/209096f621a1281afa54e2111af222350f1d0f12))
* **client-kinesis-video-archived-media:** Adding new BDD representation of endpoint ruleset ([c286df4](https://github.com/aws/aws-sdk-js-v3/commit/c286df485acbb195bcb6f8a86246fb08e8235fb7))
* **client-marketplace-entitlement-service:** Adding new BDD representation of endpoint ruleset ([ca50a36](https://github.com/aws/aws-sdk-js-v3/commit/ca50a3667f8256435b7f7361e93cb7e5fa3fe562))
* **client-mediaconnect:** Adds support for controlling the timecode source of NDI flow outputs. ([e1d3cfb](https://github.com/aws/aws-sdk-js-v3/commit/e1d3cfb07f1afa1761fd709c946414f0abe44e76))
* **client-mediatailor:** Adding new BDD representation of endpoint ruleset ([7300263](https://github.com/aws/aws-sdk-js-v3/commit/7300263097ec0584c50e4517fac7c656c14fc31b))
* **client-migrationhub-config:** Adding new BDD representation of endpoint ruleset ([ffe071b](https://github.com/aws/aws-sdk-js-v3/commit/ffe071b215171e18ec1e8ca36beec5cc1558ac44))
* **client-migrationhuborchestrator:** Adding new BDD representation of endpoint ruleset ([0bb854f](https://github.com/aws/aws-sdk-js-v3/commit/0bb854ff2b340e86b4012c1af57c2086fb772f82))
* **client-networkmanager:** Adding new BDD representation of endpoint ruleset ([fdda311](https://github.com/aws/aws-sdk-js-v3/commit/fdda311078218ee54c67208e38a07b6a83ff79cb))
* **client-pricing:** Adding new BDD representation of endpoint ruleset ([01e82e5](https://github.com/aws/aws-sdk-js-v3/commit/01e82e58979d6d9ce58211335af2e2f70598f57a))
* **client-qapps:** Adding new BDD representation of endpoint ruleset ([b1bb929](https://github.com/aws/aws-sdk-js-v3/commit/b1bb929f17a61ec74a92a55e65389a7fd60361b5))
* **client-quicksight:** Adding new BDD representation of endpoint ruleset ([7f5bcda](https://github.com/aws/aws-sdk-js-v3/commit/7f5bcda1c8a60203c09603d31132a01a7d1ab1ec))
* **client-route53resolver:** Adding new BDD representation of endpoint ruleset ([71ea880](https://github.com/aws/aws-sdk-js-v3/commit/71ea880f35f4bb22a5c1750cb2bb0b3980272116))
* **client-sagemaker-metrics:** Adding new BDD representation of endpoint ruleset ([151bcd1](https://github.com/aws/aws-sdk-js-v3/commit/151bcd1db99e736212a1251f259c78ef4e428e1f))
* **client-sagemaker:** Add support for disabling home EFS file system creation on SageMaker domains. ([a9896a7](https://github.com/aws/aws-sdk-js-v3/commit/a9896a7a82c73f3267a1afeb490b5a0cf8742ba6))
* **client-securityhub:** Adding new BDD representation of endpoint ruleset ([d9edee6](https://github.com/aws/aws-sdk-js-v3/commit/d9edee64538e2b130dc4969d8af6a583451dc8ec))
* **client-serverlessapplicationrepository:** Adding new BDD representation of endpoint ruleset ([2c5e6f6](https://github.com/aws/aws-sdk-js-v3/commit/2c5e6f6ea55869a39dae9afb9ac250f6c7b4a2c2))
* **client-service-catalog-appregistry:** Adding new BDD representation of endpoint ruleset ([45eb10a](https://github.com/aws/aws-sdk-js-v3/commit/45eb10a05b741f0b0b2ce6142ffdae17ed2a3189))
* **client-signer:** Adding new BDD representation of endpoint ruleset ([6c786ca](https://github.com/aws/aws-sdk-js-v3/commit/6c786ca9180390c35335500e6f78e5ca58c4244f))
* **client-sso-admin:** Adding new BDD representation of endpoint ruleset ([b88345c](https://github.com/aws/aws-sdk-js-v3/commit/b88345c299ded320fe1d8c9ae0ca06cfcc343ca5))
* **client-textract:** Adding new BDD representation of endpoint ruleset ([f1282b2](https://github.com/aws/aws-sdk-js-v3/commit/f1282b2d63b0bebbb41fea00f2db6581b250cdd7))
* **client-transcribe:** Adding new BDD representation of endpoint ruleset ([f5ceb26](https://github.com/aws/aws-sdk-js-v3/commit/f5ceb26148c33aaf5aa82baee7a087432bac4e78))
* **client-translate:** Adding new BDD representation of endpoint ruleset ([4955d4a](https://github.com/aws/aws-sdk-js-v3/commit/4955d4a1fd25b99d302fae9384a2117585d21d23))
* **client-verifiedpermissions:** Support hard deleting policy store aliases. Users can now delete an alias and immediately reassign it to a different policy store without waiting for the soft-delete retention period. ([f8b7f31](https://github.com/aws/aws-sdk-js-v3/commit/f8b7f31e73b117696da0d74da47157f45f08139c))
* **client-workmail:** Adding new BDD representation of endpoint ruleset ([0fc6a8a](https://github.com/aws/aws-sdk-js-v3/commit/0fc6a8a09fdb405a9eba733f8dad0f05f7d3d5e5))





# [3.1051.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1050.0...v3.1051.0) (2026-05-20)


### Features

* **client-bedrock-runtime:** Supporting Request Metadata for Invoke Model and Invoke Model with Response Stream ([d063386](https://github.com/aws/aws-sdk-js-v3/commit/d0633866a6c571e43fdf7f208c29b6e1ba1f2552))
* **client-customer-profiles:** Amazon Connect Customer Profiles adds support for item catalog columns in RecommenderSchema, ExcludedColumns in Create and Update Recommender to specify columns to exclude from training, and the ability to disable automatic retraining by setting TrainingFrequency to 0. ([15e208e](https://github.com/aws/aws-sdk-js-v3/commit/15e208ec10012312a27f36ff395171f264900154))
* **client-kms:** AWS KMS now supports creating grants for AWS service principals using new GranteeServicePrincipal and RetiringServicePrincipal parameters. This release adds SourceArn grant constraint and three condition keys for controlling CreateGrant access. For more information, see Grants in AWS KMS. ([be8a411](https://github.com/aws/aws-sdk-js-v3/commit/be8a4113a3df01597243f55d5984c9fa7e6899c8))
* **client-payment-cryptography-data:** GenerateAuthRequestCryptogram API launch. ([bb91020](https://github.com/aws/aws-sdk-js-v3/commit/bb91020a23670e4bee36c2da84d958b1b9bdeda7))
* **clients:** update client endpoints as of 2026-05-20 ([1214aae](https://github.com/aws/aws-sdk-js-v3/commit/1214aae4089976c5abf2c274108bd854569093e6))





# [3.1050.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1049.0...v3.1050.0) (2026-05-19)


### Features

* **client-bedrock-agentcore:** Add RetryableConflictException (HTTP 409) to InvokeAgentRuntime and StopRuntimeSession to prevent orphaned VMs during concurrent session access. The SDK automatically retries this exception with backoff. Enforcement is not yet active and will be enabled in a future service update. ([239af13](https://github.com/aws/aws-sdk-js-v3/commit/239af13eb6799a89d6cf3257d664004a7a4fbfa2))
* **client-devops-agent:** Added a new serviceType mcpserversigv4 service and association. This provides feature to register MCP sigv4 authorization based MCPs ([84e18e5](https://github.com/aws/aws-sdk-js-v3/commit/84e18e58dcd72556aeabadf32a4b58405e3f6e4a))
* **client-grafana:** Introduce degraded workspace status as a possible Amazon Managed Grafana workspace status, and a new field named degraded workspace reason which informs customers why the workspace is degraded in the DescribeWorkspace API response. ([af49cb8](https://github.com/aws/aws-sdk-js-v3/commit/af49cb81d0dd0a7e0e4c448c293808df842ca4b1))
* **client-guardduty:** Adding support for exposure and vulnerability context from AWS Security Hub in GuardDuty Extended Threat Detection attack sequence findings. ([de2356d](https://github.com/aws/aws-sdk-js-v3/commit/de2356de06977694d70b64340ba802682acd1ea8))
* **client-rtbfabric:** This release is to deprecate 'inboundLinksCount' field in GetResponderGateway response and introduce the new field 'linksRequestedCount' to replace it. ([3c9765e](https://github.com/aws/aws-sdk-js-v3/commit/3c9765e351c0a632e3a57890a06633ac47beaea3))
* **client-sagemaker:** Add support for ml.p5.4xlarge and ml.p5en.48xlarge instances on SageMaker Notebook Instances Platform. ([73a3e28](https://github.com/aws/aws-sdk-js-v3/commit/73a3e28f8c4741e657e131dfb0decc37700b828c))
* **clients:** update client endpoints as of 2026-05-19 ([9a5e6f0](https://github.com/aws/aws-sdk-js-v3/commit/9a5e6f03be25b20c97a2f0826cb6b74061e57b8d))





# [3.1049.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1048.0...v3.1049.0) (2026-05-18)


### Bug Fixes

* **client-sts:** update imports to new module locations ([#8025](https://github.com/aws/aws-sdk-js-v3/issues/8025)) ([be183b6](https://github.com/aws/aws-sdk-js-v3/commit/be183b6d7ac286e626f0301cbee2ca5101e87acb))
* **core/protocols:** make error namespace removal unconditional in JSON RPC ([#8031](https://github.com/aws/aws-sdk-js-v3/issues/8031)) ([7cee4f2](https://github.com/aws/aws-sdk-js-v3/commit/7cee4f2752226e76902ab933477122782472469c))


### Features

* **client-accessanalyzer:** Services manage service-linked analyzers through dedicated APIs - CreateServiceLinkedAnalyzer and DeleteServiceLinkedAnalyzer that separate service-linked specific operations from customer-managed operations. It also shows up in ListAnalyzers and GetAnalyzer responses. ([fdfcbe8](https://github.com/aws/aws-sdk-js-v3/commit/fdfcbe80822475752a5433a6b830962379701cc1))
* **client-connect:** Amazon Connect Cases now supports SLA durations of up to 2 years (1,051,200 minutes), increased from the previous maximum of 90 days (129,600 minutes). This enables you to track long-running service level agreements for cases that require extended resolution timelines. ([045e138](https://github.com/aws/aws-sdk-js-v3/commit/045e1382ed3e4a3a7192416d4636e6849f5fc847))
* **client-ec2:** Amazon VPC IP Address Manager (IPAM) now supports tags on IPAM pool allocations, enabling all standard tagging features for allocations including tag-on-create. ([0ac6d44](https://github.com/aws/aws-sdk-js-v3/commit/0ac6d448ed6a0f04d45d59d1bcde953454b61f78))
* **client-ecs:** Amazon ECS now supports Pause lifecycle hooks for service deployments, allowing customers to automatically pause deployments at specified stages and use the new ContinueServiceDeployment API to continue or roll back with confidence. ([8437bd6](https://github.com/aws/aws-sdk-js-v3/commit/8437bd6c125ba1ea4f5baf7a8fdf9fa9694ff4a7))
* **client-ivs:** Adds support for up to 3 mediaTailorPlaybackConfiguration objects in an ad configuration resource ([e7a59d8](https://github.com/aws/aws-sdk-js-v3/commit/e7a59d859f9cf88f6e19fc4df520336f968da88d))
* **client-quicksight:** Support for dataset enrichment and geo spatial in new data preparation experience ([c303669](https://github.com/aws/aws-sdk-js-v3/commit/c3036698d995bb62e8cf487df88c36192533efd5))
* **clients:** update client endpoints as of 2026-05-18 ([a5f4e2a](https://github.com/aws/aws-sdk-js-v3/commit/a5f4e2a21dba69087a8b0534ffd574b877551a2a))





# [3.1048.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1047.0...v3.1048.0) (2026-05-15)


### Features

* **client-cloudwatch-logs:** Updating the max limit for start query api parameter. ([931876e](https://github.com/aws/aws-sdk-js-v3/commit/931876e1ad4e2a7c2d6aeb3fd975f4ae1b071520))
* **client-mediapackagev2:** This release adds support for AvailabilityStartTimeConfiguration in MediaPackageV2 DASH manifests ([6c8a84d](https://github.com/aws/aws-sdk-js-v3/commit/6c8a84d47e137a9e9e5aefa1a4a2eb386d4064ad))
* **client-partnercentral-selling:** Enable TCV intake on Opportunity to improve Opportunities Hygiene and downstream revenue attribution. ([d68a75c](https://github.com/aws/aws-sdk-js-v3/commit/d68a75c460ef92ffe402cb5c331eecffb2d93b4a))
* **clients:** update client endpoints as of 2026-05-15 ([4aa76bd](https://github.com/aws/aws-sdk-js-v3/commit/4aa76bd0c70b7603e9f23e950fb6b079e4cac68f))





# [3.1047.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1046.0...v3.1047.0) (2026-05-14)


### Features

* **client-bedrock:** Advanced Prompt Optimization (AdvPO) allows you to optimize and migrate your prompts for any model on Bedrock by automatically evaluating responses and rewriting prompts to improve performance. This release provides a programmatic way to create, get, list, stop, and delete AdvPO jobs. ([7e479fd](https://github.com/aws/aws-sdk-js-v3/commit/7e479fde2146f51d3165f57eff529ae4ff2222cc))
* **client-cloudfront:** Adding a new boolean for OCSP Revocations in Viewer mTLS Create and Update APIs, and adding a new 'Passthrough' option for TrustStore modes ([ee96afa](https://github.com/aws/aws-sdk-js-v3/commit/ee96afaa0f294bb1dc3de89eac75cb7f4ec064df))
* **client-database-migration-service:** Add 9 SDK waiters for DMS Schema Conversion async operations. Eliminates manual polling for import, assessment, conversion, export, and creation jobs. ([32d372e](https://github.com/aws/aws-sdk-js-v3/commit/32d372e79edce8fe22d5671f8555874a8075fc26))
* **client-datazone:** Adds support for SageMaker Unified Studio notebook operations, including notebook import and export ([383f4ea](https://github.com/aws/aws-sdk-js-v3/commit/383f4ea2d9ef976310fd98d0bb15f3452424f8c9))
* **client-glue:** Release --has-databases parameter for AWS Glue get-catalogs API, which filters catalog responses to include only those capable of containing databases, excluding parent catalogs that hold only other catalogs. Remove model-level validation on partition index list size for AWS Glue tables. ([e2b076e](https://github.com/aws/aws-sdk-js-v3/commit/e2b076eea6202df964b17d73795cd181baf8e37e))
* **client-grafana:** Adds support for dual-stack (IPv4 and IPv6) connectivity to Amazon Managed Grafana workspaces. Customers can configure the ipAddressType parameter when creating or updating a workspace to choose between IPv4-only or dual-stack (IPv4 and IPv6) access. ([1184c5e](https://github.com/aws/aws-sdk-js-v3/commit/1184c5e5e58e3ec07eb535698f75344700158526))
* **client-mgn:** Introducing new option for security groups mapping - with MAP-DHCP the service translates security rules from your source environment with DHCP compatibility. ([27c0704](https://github.com/aws/aws-sdk-js-v3/commit/27c07049303a068fb86511bd2d823bb825c35d66))
* **client-qconnect:** ListModels is an API that returns the available AI models for a Connect Assistant based on its region and AI prompt type. ([0d6d7ec](https://github.com/aws/aws-sdk-js-v3/commit/0d6d7ec3b165593aaff93cd691f0405abda53a96))
* **clients:** update client endpoints as of 2026-05-14 ([3505575](https://github.com/aws/aws-sdk-js-v3/commit/3505575ddb0441cd291dfbb044bc01af6f859b32))





# [3.1046.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1045.0...v3.1046.0) (2026-05-14)


### Bug Fixes

* **cloudfront-signer:** url-encode special characters in URL path ([#7763](https://github.com/aws/aws-sdk-js-v3/issues/7763)) ([e942132](https://github.com/aws/aws-sdk-js-v3/commit/e942132d7020b456157d82d56bc6d1b6ee5cc03d))
* **core/protocols:** corrections for absolute and relative shape id lookup for errors ([#8001](https://github.com/aws/aws-sdk-js-v3/issues/8001)) ([c9921dc](https://github.com/aws/aws-sdk-js-v3/commit/c9921dcb70445adc22ecafad4164a4c83fc20dfd))


### Features

* **client-arc-region-switch:** Adds support for enabling and disabling Lambda event source mappings in Region switch plans. ([5b7d56f](https://github.com/aws/aws-sdk-js-v3/commit/5b7d56f339fcc63ab9393f229eadcdad3d677b27))
* **client-bedrock-agentcore-control:** Adds support for read-only summary APIs for Policy Engine, Policy, and Policy Generation resources, enabling metadata retrieval without KMS decryption for AWS Config integration. ([6d63081](https://github.com/aws/aws-sdk-js-v3/commit/6d630817bb629cf526e75ffea79db61e7953fdf2))
* **client-billingconductor:** Add ConflictException to UpdateCustomLineItem operation. ([f0f73ba](https://github.com/aws/aws-sdk-js-v3/commit/f0f73bae6bc456bd47ea8902a9d9ba70219467ab))
* **client-connectcampaignsv2:** This release added support for Outbound Campaign timezone detection using all available contact methods ([1a0d5fe](https://github.com/aws/aws-sdk-js-v3/commit/1a0d5feeb02b0de4cb21297caa01df364e984e53))
* **client-connectcases:** Amazon Connect Cases now supports SLA durations of up to 2 years (1,051,200 minutes), increased from the previous maximum of 90 days (129,600 minutes). This enables you to track long-running service level agreements for cases that require extended resolution timelines. ([883cc0f](https://github.com/aws/aws-sdk-js-v3/commit/883cc0f74218a9a47e14f8c144d7afc4f165f994))
* **client-connect:** This change added three new EventSourceName for schedule notification feature ([b8f49e2](https://github.com/aws/aws-sdk-js-v3/commit/b8f49e23dcfdb067b627073119c0b57e39b3673a))
* **client-dsql:** Added support for Amazon Aurora DSQL change data capture (CDC) streams that deliver row-level database changes to Amazon Kinesis in JSON format. Includes CreateStream, GetStream, ListStreams, and DeleteStream operations. ([d071f80](https://github.com/aws/aws-sdk-js-v3/commit/d071f80accda50f87a466dfa6a6b6f3dec8f110d))
* **client-ec2:** Include length limits in the SDK and documentation for text fields in Image (AMI) APIs such as the image name and description ([9a5ca59](https://github.com/aws/aws-sdk-js-v3/commit/9a5ca595bb81a6b7e7064c5ad07d6baf650a7423))
* **client-elasticsearch-service:** Adds support for AutomatedSnapshotPauseOptions. ([e1a722a](https://github.com/aws/aws-sdk-js-v3/commit/e1a722aa95eb4055d9f942a0d6f8ba21ca6ce6d9))
* **client-lightsail:** Added OriginIpAddressTypeEnum (ipv4, ipv6, dualstack) and ipAddressType field to Origin and InputOrigin structures for Lightsail CDN distributions. Allows customers to specify how the distribution connects to origins, using IPv4, IPv6, or dualstack networking ([eaa9853](https://github.com/aws/aws-sdk-js-v3/commit/eaa98531939fa4843cc0436d953e915019d1eaf1))
* **client-opensearch:** Adds support for AutomatedSnapshotPauseOptions. ([8bc57f1](https://github.com/aws/aws-sdk-js-v3/commit/8bc57f1fb82edc6f2b973f6c1fc553beebd7bc77))
* **client-partnercentral-account:** Added ServiceQuotaExceededExceptions for Profile operations ([725a2b6](https://github.com/aws/aws-sdk-js-v3/commit/725a2b6d265b655e8bc8a0b8c55740fa20b1b1cd))
* **client-pcs:** Add support for Amazon EC2 Interruptible-ODCR ([cbd2be2](https://github.com/aws/aws-sdk-js-v3/commit/cbd2be246a2d08343d3849dc63c0e329340099ee))
* **client-quicksight:** Adds five new custom permission option for Quick Apps so that these capabilities can be controlled by public SDK and CLI. ([8e76717](https://github.com/aws/aws-sdk-js-v3/commit/8e76717ded9a6b12b6f2bfeeb23113f5c81b9fef))
* **client-rtbfabric:** Customers can now configure custom domain names for their RTB Fabric gateways. This enables partners to use their own branded domain for RTB traffic instead of the default rtbfabric endpoint ([b1e0392](https://github.com/aws/aws-sdk-js-v3/commit/b1e0392d6ebf5cda03249824ccb214439f8db23d))
* **client-sagemaker:** Adds execution role session name mode to reflect user identity in Studio. Adds Flexible Training Plans on Studio apps. Adds restricted model packages to control access to proprietary model artifacts via IAM. Fixed instance type parity between inference endpoints and managed shadow tests. ([c6c8751](https://github.com/aws/aws-sdk-js-v3/commit/c6c875160bde427d356ee0fb9be20b2d0e1e6a79))
* **client-securityagent:** Add support for code reviews, a new resource type that enables automated security-focused static analysis of source code repositories. ([8ae5b43](https://github.com/aws/aws-sdk-js-v3/commit/8ae5b437a21e58e83600904070c4023dd4cc035f))
* **client-sfn:** Updated default SDK endpoints for AWS Step Functions in AWS GovCloud (US) regions. The default Dual-Stack endpoints now resolve to "states-fips" prefixed hostnames. There are no changes to service behavior. No customer action is required. ([3590854](https://github.com/aws/aws-sdk-js-v3/commit/359085440cdb1d092a1723a6e6c07c0f84e2f6e5))
* **client-socialmessaging:** Adds parameters to call the GetWhatsAppMessageTemplate and UpdateWhatsAppMessageTemplate APIs with a template name and language code in place of the template ID. Linked WhatsApp accounts also describe whether the WABA is onboarded to Meta's Marketing Messages API. ([085c2dd](https://github.com/aws/aws-sdk-js-v3/commit/085c2dd6a965861902dcc4d2cd803564dcff5266))
* **clients:** update client endpoints as of 2026-05-14 ([0a8e3b7](https://github.com/aws/aws-sdk-js-v3/commit/0a8e3b777c93c86f3402a149350088c257668851))





# [3.1045.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1044.0...v3.1045.0) (2026-05-07)


### Features

* **client-bcm-data-exports:** With this release, customers can configure their data exports to generate additional integration artifacts for Athena and Redshift. ([238da2c](https://github.com/aws/aws-sdk-js-v3/commit/238da2c16c5885ef9051c2798c0bec4a5c10fa9f))
* **client-bedrock-agentcore-control:** Launching AgentCore payments - a capability that provides secure, instant microtransaction payments for AI agents to access paid APIs, MCP servers, and content. It handles payment processing for x402 protocol, payment limits, and 3P wallet integrations with Coinbase CDP and Stripe (Privy). ([fe5861a](https://github.com/aws/aws-sdk-js-v3/commit/fe5861ae18b0b71616398dcbb54936a919af1d8f))
* **client-bedrock-agentcore:** Launching AgentCore payments - a capability that provides secure, instant microtransaction payments for AI agents to access paid APIs, MCP servers, and content. It handles payment processing for x402 protocol, payment limits, and 3P wallet integrations with Coinbase CDP and Stripe (Privy). ([1e1031a](https://github.com/aws/aws-sdk-js-v3/commit/1e1031a7c070e56c2c781df05af75baf543e65ca))
* **client-ec2:** DescribeInstanceTypes now accepts an IncludeUnsupportedInRegion parameter. When set, the response also lists instance types that are not available in the current Region. Each instance type includes a SupportedInRegion field indicating its regional availability. ([7026243](https://github.com/aws/aws-sdk-js-v3/commit/7026243303994e24be2996bf169b6acd50d5b081))
* **client-invoicing:** Updated ListInvoiceSummaries API to add new ReceiverRole filter in Request and Response ([60a448c](https://github.com/aws/aws-sdk-js-v3/commit/60a448cbfb17643b0b93c0bf72848b404dc31a83))
* **client-route53resolver:** Adds supports for DNS64 on inbound endpoints and IPv6 forwarding through the internet gateway (IGW) on outbound endpoints, making it easier to manage hybrid DNS across IPv4 and IPv6 networks. ([8e6e18c](https://github.com/aws/aws-sdk-js-v3/commit/8e6e18c603f2392b7b61d5f2efdfc54dab0d8126))
* **clients:** update client endpoints as of 2026-05-07 ([8131076](https://github.com/aws/aws-sdk-js-v3/commit/81310767bd884df988d524faf7d1f131f15c6197))





# [3.1044.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1043.0...v3.1044.0) (2026-05-06)


### Features

* **client-bedrock-agentcore-control:** Adds support for bring-your-own file system in AgentCore Runtime. Developers can mount Amazon S3 Files and Amazon EFS access points directly into agent sessions using filesystemConfigurations. ([e20f24d](https://github.com/aws/aws-sdk-js-v3/commit/e20f24d92f340e25371fa4b00e1321b627211b98))
* **client-glue:** Adds support for a CustomLogGroupPrefix parameter in StartDataQualityRulesetEvaluationRun to specify custom CloudWatch log group paths, and a RulesetName filter in ListDataQualityRulesetEvaluationRuns to filter evaluation runs by ruleset name. ([b95d850](https://github.com/aws/aws-sdk-js-v3/commit/b95d850bd64dae6c73588e9035803b9924781a4d))
* **client-imagebuilder:** The ImportDiskImage API now enforces a maximum character limit of 128 characters on the image name field. ([7fc2565](https://github.com/aws/aws-sdk-js-v3/commit/7fc2565c6b8b25d3257729b962125cffe00e5c42))
* **client-lex-models-v2:** Amazon Lex V2 introduces audio filler support for speech-to-speech bots. Configure melody or typing sounds that play during backend processing to reduce perceived latency and maintain a natural conversational experience for callers. ([01426f8](https://github.com/aws/aws-sdk-js-v3/commit/01426f8e5c9073cdf81e7bd2a6d816156bd81249))
* **client-mwaa:** Amazon MWAA now supports a PublicAndPrivate webserver access mode. The Airflow web server is accessible over both public and private endpoints, enabling workers in VPCs without internet access to reach the Task API privately while retaining public access to the Airflow UI. ([3a6054e](https://github.com/aws/aws-sdk-js-v3/commit/3a6054ef54e1f8afbc167fa27761c1cd36dffa5e))
* **client-s3:** Validate outpost access point resource name ([bee88a5](https://github.com/aws/aws-sdk-js-v3/commit/bee88a56c5d1e8ffe9b2953117d81f4fc221ac68))
* **client-sagemaker:** Amazon SageMaker HyperPod now returns ImageVersionStatus in DescribeCluster, DescribeClusterNode, and ListClusterNodes responses, indicating whether cluster instances are running the latest available image version. ([2be7e6b](https://github.com/aws/aws-sdk-js-v3/commit/2be7e6b4b07f9732823fbb6b9b6e0c78b640e44f))
* **client-securityhub:** Release GenerateRecommendedPolicyV2 and GetRecommendedPolicyV2 APIs. This supports generating and retrieving policy recommendations to remediate unused permissions findings that are now being supported on Security Hub. ([772b862](https://github.com/aws/aws-sdk-js-v3/commit/772b8629c270edee6fb4bb6874bb4036102d0f60))





# [3.1043.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1042.0...v3.1043.0) (2026-05-05)


### Features

* **client-cleanroomsml:** Increase max configurable output limits in the Clean Rooms ML configured model algorithm association resource. ([73fa973](https://github.com/aws/aws-sdk-js-v3/commit/73fa9731ac7db1c4152f7f3831399ba3ba5e00a8))
* **client-cloudfront:** Adds support for tagging CloudFront Functions and KeyValueStores resources. ([cb71d30](https://github.com/aws/aws-sdk-js-v3/commit/cb71d306ef0d83818e90e7ce8b31689362605542))
* **client-marketplace-agreement:** With this release, Agreements API provides a programmatic way to generate quotes, accept offers, track charges and entitlements, manage renewals and cancellations, and streamline operations entirely through APIs without navigating to the AWS Marketplace website or AWS Management Console. ([a4c2d76](https://github.com/aws/aws-sdk-js-v3/commit/a4c2d76fb186b377283218ffe507be92d9c5a125))
* **client-mediatailor:** Added support for Monetization Functions. Monetization Functions let you enrich ad requests with external data and transform session parameters using JSONata expressions, without deploying custom infrastructure. ([5e80d37](https://github.com/aws/aws-sdk-js-v3/commit/5e80d370c96c356b7ab2ab7c603d138ec682a05b))
* **client-medical-imaging:** Add support for DICOM Json Metadata Override features in startDICOMImportJob API ([008d261](https://github.com/aws/aws-sdk-js-v3/commit/008d261373642a9d4dd879554c808a6139849ced))
* **client-opensearch:** Amazon OpenSearch Service now supports VPC egress, enabling outbound traffic from your OpenSearch domain to route privately through your VPC instead of the public internet. ([4de6b07](https://github.com/aws/aws-sdk-js-v3/commit/4de6b07e92169f18fdd9b9c265a03476632cb648))
* **client-route-53-domains:** This release adds the TLDInMaintenance exception. ([31c38a3](https://github.com/aws/aws-sdk-js-v3/commit/31c38a3e958873a55e7949b80f178e5bf4498114))
* **client-sagemaker:** Adds support for ml.p5.4xlarge instance type for SageMaker Studio JupyterLab and CodeEditor apps for IAD (us-east-1), NRT (ap-northeast-1), BOM (ap-south-1), CGK (ap-southeast-3), GRU (sa-east-1), PDX (us-west-2), CMH (us-east-2). ([e737436](https://github.com/aws/aws-sdk-js-v3/commit/e737436dd3446e6a479679e4e3eb070bf306e1eb))
* **clients:** update client endpoints as of 2026-05-05 ([f577bd7](https://github.com/aws/aws-sdk-js-v3/commit/f577bd742cc58b4a2f936c5906a1e5889025b340))





# [3.1042.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1041.0...v3.1042.0) (2026-05-04)


### Features

* **client-bedrock-agentcore-control:** Amazon Bedrock AgentCore gateways now support MCP Sessions and response streaming from MCP targets. Session timeouts can be set between 15 minutes and 8 hours, and response streaming enables forwarding stream events sent by MCP targets to gateway users. ([7d8baef](https://github.com/aws/aws-sdk-js-v3/commit/7d8baefc796b7e2b0504fe1c88c821070b46822d))
* **client-cloudwatch-logs:** Adding an additional optional deliverySourceConfiguration field to PutDeliverySource API. This enables customers to pass service-specific configurations through IngestionHub such as tracing enablement or sampling rates that will be propagated to the source resource. ([fa70b57](https://github.com/aws/aws-sdk-js-v3/commit/fa70b5707ddbac451c9281f18a93fc33b40004a3))
* **client-ec2:** This feature allows customers to change the tunnel bandwidth on existing VPN connections using the ModifyVpnConnectionOptions API ([e37b846](https://github.com/aws/aws-sdk-js-v3/commit/e37b846c2470541a174027772d9c4f2dd14eebf3))
* **client-geo-routes:** Added support for TravelTimeExceedsDriverWorkHours, ViolatedBlockedRoad, and ViolatedVehicleRestriction notice codes to the CalculateRoutes API response. ([6b35d38](https://github.com/aws/aws-sdk-js-v3/commit/6b35d3837d773eeb050f89c756f8f0955a5991f4))
* **client-lex-model-building-service:** Lex V1 is deprecated, use Lex V2 instead ([1c35eb7](https://github.com/aws/aws-sdk-js-v3/commit/1c35eb7aae19964e66c4eaba663ca750145a8bc8))
* **client-medialive:** Updates the type of the MediaLiveRouterOutputConnectionMap. ([6a558da](https://github.com/aws/aws-sdk-js-v3/commit/6a558da2679ce6e5395c215b398b67ffaf8ac52a))
* **client-securityagent:** AWS Security Agent is adding a new target domain verification method for private VPC penetration testing. Additionally, the target domain resource will now have a verification status reason field to surface additional details about domain verification ([c3570ea](https://github.com/aws/aws-sdk-js-v3/commit/c3570eac7ed21a5f819808662831373eaf96dc25))
* **client-vpc-lattice:** Amazon VPC Lattice now supports privately resolvable DNS resources ([6b1b6ab](https://github.com/aws/aws-sdk-js-v3/commit/6b1b6abacb278e2a3e026b460c6b11cc0c2627c8))





# [3.1041.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1040.0...v3.1041.0) (2026-05-01)


### Bug Fixes

* **lib-storage:** use Math.ceil in default partSize calculation to prevent exceeding 10,000 parts ([#7982](https://github.com/aws/aws-sdk-js-v3/issues/7982)) ([8a58046](https://github.com/aws/aws-sdk-js-v3/commit/8a58046be17e4b0c1aec704c3aff12a421567eb8))


### Features

* **client-appstream:** Amazon WorkSpaces Applications now enables AI agents to securely operate desktop applications. Administrators configure stacks to provide agents access to WorkSpaces. Agents can click, type, and take screenshots. Agents authenticate with AWS IAM credentials with activity logged in AWS CloudTrail. ([5ca40b4](https://github.com/aws/aws-sdk-js-v3/commit/5ca40b43d2ca97240646f06eb565b2a3cc2e461e))
* **client-cloudwatch-logs:** Adds support for filtering log groups by tags in the ListLogGroups API via the new logGroupTags parameter. ([25dc6d2](https://github.com/aws/aws-sdk-js-v3/commit/25dc6d23e50df0bb6ad9c365e47e3f5a5056f254))
* **client-cloudwatch:** This release adds tag support for CloudWatch Dashboards. The PutDashboard API now accepts a Tags parameter, allowing you to tag dashboards at creation time. Additionally, the TagResource, UntagResource, and ListTagsForResource APIs now support dashboard ARNs as resources. ([e87c147](https://github.com/aws/aws-sdk-js-v3/commit/e87c1479c6173e1e9f2b9f033825dbeded3614a6))
* **client-entityresolution:** Add support for transitive matching in AWS Entity Resolution rule-based matching workflows. When enabled, records that match through different rules are grouped together into the same match group, allowing related records to be connected across rule levels. ([2048796](https://github.com/aws/aws-sdk-js-v3/commit/20487961bac124830a2163c24cb36b059bb56588))
* **client-iot:** AWS IoT HTTP rule actions now support cross-topic batching, combining messages from different MQTT topics into single HTTP requests. ([82edd29](https://github.com/aws/aws-sdk-js-v3/commit/82edd29f8d3a7c61ab90ff4fd6f9a64e218d923a))
* **client-qconnect:** Added reasoning details, statusDescription, and timeToFirstTokenMs fields to the ListSpans response in Amazon Q in Connect to provide visibility into model thinking, error diagnostics, and inference latency metrics. ([2c668c9](https://github.com/aws/aws-sdk-js-v3/commit/2c668c9d2f8791486d82a67c86dd74e9cb487122))
* **client-quicksight:** Add IdentityProviderCACertificatesBundleS3Uri for private CA certs with OAuth datasources. 256-char limit for FontFamily in themes. ControlTitleFormatText on all 13 filters. ControlTitleFontConfiguration. ContextRegion for cross-region identity context. Story,scenario in CreateCustomCapability API. ([a625879](https://github.com/aws/aws-sdk-js-v3/commit/a625879c0d4b71c4bfa72984deccd6db2e212aa4))
* **clients:** update client endpoints as of 2026-05-01 ([d48b40d](https://github.com/aws/aws-sdk-js-v3/commit/d48b40d58f158f50c193eebf42efb72ba6931c00))





# [3.1040.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1039.0...v3.1040.0) (2026-04-30)


### Features

* **client-bedrock-agentcore-control:** AgentCore Identity now supports on-behalf-of token exchange OAuth2. AgentCore Memory now supports metadata for LongTerm Memory Records. ([6b9d13e](https://github.com/aws/aws-sdk-js-v3/commit/6b9d13e32ec62f14899030b3b6555c6e4e6d555a))
* **client-bedrock-agentcore:** AgentCore Identity now supports on-behalf-of token exchange OAuth2. AgentCore Memory now supports metadata for LongTerm Memory Records. ([948fd09](https://github.com/aws/aws-sdk-js-v3/commit/948fd098ee4dfca06475b0f5e9e324f76a7fed90))
* **client-datazone:** Adds support for asynchronous notebook runs ([e562cc0](https://github.com/aws/aws-sdk-js-v3/commit/e562cc0f737781c005eedbf729c838144afaa49e))
* **client-eks:** Vended logs update param for capability vended logs feature ([7741c8f](https://github.com/aws/aws-sdk-js-v3/commit/7741c8f535b0f0bb828a045e992c894b4c14476e))
* **client-kafka:** Adds support for ZookeeperAccess field to control the Client-Zookeeper connectivity. ([34de26b](https://github.com/aws/aws-sdk-js-v3/commit/34de26bd63a0087346fe33c6fb4720a80515b2f7))
* **client-observabilityadmin:** Observability Admin enablement launch for AWS Kafka, Bedrock Agent Core Workload Identity and OTel metric enablement. ([8cea5eb](https://github.com/aws/aws-sdk-js-v3/commit/8cea5eb66cdb7a2ddc347fcf55f709253cfb336a))
* **client-payment-cryptography:** Adds support for resource-based policies on AWS Payment Cryptography keys, enabling cross-account key sharing. Also adds Multi-Party Approval (MPA) team association APIs for protecting sensitive import root public key operations. ([4d7fdfa](https://github.com/aws/aws-sdk-js-v3/commit/4d7fdfa8294313ab6d08b7cc223f09eec75685ad))
* **client-route53globalresolver:** Adds support for regions in the UpdateGlobalResolver input. ([84b15b2](https://github.com/aws/aws-sdk-js-v3/commit/84b15b2ee5fd99a10ecf8bf9a995a42efc0c8cb1))
* **client-sagemaker:** Add InstancePools support to Endpoint for flexible provisioning across a prioritized list of instance types. Add Specifications support to InferenceComponent for per-instance-type model configurations. ([05c49aa](https://github.com/aws/aws-sdk-js-v3/commit/05c49aa9feeaf33b3c8fa6bd30083348cac58426))
* **client-sso-admin:** Add InstanceArn and IdentityStoreArn in the response of CreateApplication API and IdentityStoreArn in the response of DescribeApplication API ([d46aaf5](https://github.com/aws/aws-sdk-js-v3/commit/d46aaf53f9ebb9bf49a7c7b5b14d7f260786a5f0))
* **clients:** update client endpoints as of 2026-04-30 ([2620ccb](https://github.com/aws/aws-sdk-js-v3/commit/2620ccbde703e7736c282c18f661b05057048919))





# [3.1039.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1038.0...v3.1039.0) (2026-04-29)


### Bug Fixes

* **xml-builder:** inline nodable/entities for dist format compatibility ([#7968](https://github.com/aws/aws-sdk-js-v3/issues/7968)) ([02b6be6](https://github.com/aws/aws-sdk-js-v3/commit/02b6be6bec6d47d3dcecbdcad6e4319107ae2172))


### Features

* **client-account:** Adds AccountState in the response for the GetAccountInformation API. Each state represents a specific phase in the account lifecycle. Use this information to manage account access, automate workflows, or trigger actions based on account state changes. ([dc28353](https://github.com/aws/aws-sdk-js-v3/commit/dc283531a71fd6a04dc60174dca53ea5f2cc0d6b))
* **client-bedrock-agentcore-control:** Adds configuration bundles for versioned, immutable agent configuration snapshots with branch-based lineage ([480b651](https://github.com/aws/aws-sdk-js-v3/commit/480b6517551ec62ebdaf6eba1edbe6f0b7bc65f3))
* **client-bedrock-agentcore:** Adds batch evaluation for running evaluators against multiple agent sessions with server-side orchestration, AI-powered recommendations for optimizing system prompts and tool descriptions, and AB testing with controlled traffic splitting and statistical significance reporting ([c9db871](https://github.com/aws/aws-sdk-js-v3/commit/c9db871637ce5b58a88b77d49f98d4c6010b07c7))
* **client-cloudfront:** Amazon CloudFront now supports cache tag. Tag objects via response headers and invalidate all matching objects in a single request, replacing manual URL tracking and broad wildcards. ([fac8398](https://github.com/aws/aws-sdk-js-v3/commit/fac83987712b960debc5ba412571fa19a1a6abad))
* **client-deadline:** Adds support for rtx-pro-server-6000 GPU accelerator for service-managed fleets. ([86aab76](https://github.com/aws/aws-sdk-js-v3/commit/86aab769147360954d2e19c5dfa8e95366c93c22))
* **client-gamelift:** Amazon GameLift Servers adds a new DescribeContainerGroupPortMappings API for container fleets, making it easy to discover which connection ports map to your container ports without needing to remotely access the compute. ([71e95d8](https://github.com/aws/aws-sdk-js-v3/commit/71e95d8fadc47939e8c0256711ced1ba6b9114b8))
* **client-mediapackagev2:** This feature adds configuration for specifying SCTE marker handling and allow greater control over generated manifest and segment URIs ([cd814f6](https://github.com/aws/aws-sdk-js-v3/commit/cd814f6b30a943bdfb52e66b8739a8e31e4b5c05))
* **client-transfer:** This launch will increase the limits for customers to list the contents from the remote directories from 10k to 200k. ([58052c9](https://github.com/aws/aws-sdk-js-v3/commit/58052c95a4417ce5a348b6ee6da27e1ee67906a8))
* **client-workspaces-web:** Allow admins to configure IPv6 ranges on IP Access Settings. ([a1d8beb](https://github.com/aws/aws-sdk-js-v3/commit/a1d8beb2e04804f9e2d358557fe5c9bae85777a6))
* **clients:** update client endpoints as of 2026-04-29 ([2c0c097](https://github.com/aws/aws-sdk-js-v3/commit/2c0c09793fb67bd3c6b09c7e39ca943772b38acf))





# [3.1038.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1037.0...v3.1038.0) (2026-04-27)


### Bug Fixes

* **xml-builder:** use xml 1.1 parsing behavior for entities ([#7964](https://github.com/aws/aws-sdk-js-v3/issues/7964)) ([7a30bce](https://github.com/aws/aws-sdk-js-v3/commit/7a30bce017601c93aea1b6aed38c0c9882e05834))


### Features

* **client-application-signals:** Application Signals now supports creating composite Service Level Objectives on Service Operations. Users can now create service SLO on multiple operations. ([6a04d60](https://github.com/aws/aws-sdk-js-v3/commit/6a04d604cbd7ee7058fd3ee18b98a49cc2ba401e))
* **client-billingconductor:** Add support for Passthrough pricing plan ([31ed64a](https://github.com/aws/aws-sdk-js-v3/commit/31ed64a485f9cb44f801a38a65a2f4ed9e8b7098))
* **client-cloudwatch-logs:** Adds support for selecting all logs sources and types in a single association. ([0f94449](https://github.com/aws/aws-sdk-js-v3/commit/0f9444959266c854db73989f2335150f0c7083a8))
* **client-glue:** Addition of AdditionalAuditContext to GetPartition, GetPartitions, GetTableVersion, and GetTableVersions ([eaf5eef](https://github.com/aws/aws-sdk-js-v3/commit/eaf5eef0956457502cab66e902d666bb7260db81))
* **client-ivs:** Adds tags parameter to the CreateAdConfiguration operation ([6e9a5a0](https://github.com/aws/aws-sdk-js-v3/commit/6e9a5a05c472beb4bc410608fa05a83b85ed8054))
* **client-kms:** KMS GetKeyLastUsage API provides information on the last successful cryptographic operation performed on KMS keys. This new API provides KMS customers with the last timestamp, CloudTrail eventId, and the cryptographic operation that was performed on the key. ([7edc07d](https://github.com/aws/aws-sdk-js-v3/commit/7edc07d473e2eb7932696943bf4e681785c4c6ae))
* **client-mgn:** Added network modernization support, enabling customers to edit, resize, merge, and split VPCs and subnets during migration while retaining functional, non-conflicting IP addresses. ([8cc9996](https://github.com/aws/aws-sdk-js-v3/commit/8cc999681d4be96343b8572ef3a13f83f1d9debb))
* **client-omics:** Enable Public Internet or VPC configuration to BatchRun ([345017d](https://github.com/aws/aws-sdk-js-v3/commit/345017d340b604dfd9a20cb6626afd5f4d8bcd17))
* **client-opensearch:** Amazon OpenSearch Service now supports JWKS URL configuration for JWT authentication ([5dfd054](https://github.com/aws/aws-sdk-js-v3/commit/5dfd0544b8ad56b7e9f48cf0beccf920ab0c64ea))
* **client-sagemaker:** Updated API documentation for endpoint MetricsConfig. Added details on supported metric publish frequencies and clarified how EnableEnhancedMetrics controls utilization and invocation metric behavior. ([c3a61e2](https://github.com/aws/aws-sdk-js-v3/commit/c3a61e2d6ccaaa8112ebc6b46304ae79145f44da))
* **client-workspaces:** Added support for Protocol as modified resource and added update failure as modification state ([6bd9ee4](https://github.com/aws/aws-sdk-js-v3/commit/6bd9ee46a6042faacce0fad44d8f721a21b086ef))





# [3.1037.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1036.0...v3.1037.0) (2026-04-24)


### Bug Fixes

* **client-kinesis:** tolerance for flaky H2 session ordering assertion in E2E test ([#7959](https://github.com/aws/aws-sdk-js-v3/issues/7959)) ([5873496](https://github.com/aws/aws-sdk-js-v3/commit/587349604bf02f47f6b9f1ea871e899f550174bd))


### Features

* **client-bedrock-agentcore-control:** Added support for configuring identity providers and inbound authorizers within a private VPC for AWS Bedrock AgentCore, enabling secure network connection without public internet access ([a0bf24c](https://github.com/aws/aws-sdk-js-v3/commit/a0bf24cdd0e25ba11271d2b29be9ef723a1736d9))
* **client-cloudwatch-logs:** Adding nextToken and maxItems to the GetQueryResults API. ([1a5ef61](https://github.com/aws/aws-sdk-js-v3/commit/1a5ef61934e2eff7072103ed452952b5b559ed1e))
* **client-connect:** Amazon Connect is expanding attachment capabilities to give customers greater flexibility and control. Currently limited to predefined file types, the new feature will allow contact center administrators to customize which file extensions and sizes are supported across chat, email, tasks, and cases. ([7e987e8](https://github.com/aws/aws-sdk-js-v3/commit/7e987e88800c133572a09fd9910cd0d74e02ea22))
* **client-connecthealth:** Corrected CreateWebAppConfiguration documentation. Adding slash as an allowed character for the Ambient documentation agent to allow pronoun specifications. ([c21882c](https://github.com/aws/aws-sdk-js-v3/commit/c21882c4645ad0ef53423e426fe79df03f3ded77))
* **client-evs:** EVS now supports i7i.metal-24xl EC2 bare metal instance type, delivering high random IOPS performance with real-time latency, ideal for IO intensive and latency-sensitive workloads such as transactional databases, real-time analytics, and AI ML pre-processing. ([fd92ee4](https://github.com/aws/aws-sdk-js-v3/commit/fd92ee48de0325846d7ff69ce1c2568c45f0ac6b))
* **client-transfer:** AWS Transfer Family now support configurable IP address types for Web Apps of type VPC, enabling customers to select IPv4-only or dual-stack (IPv4 and IPv6) configurations based on their network requirements. ([f2a72a8](https://github.com/aws/aws-sdk-js-v3/commit/f2a72a8511682e4a10a931c58b34c7aaf5820b81))
* **clients:** update client endpoints as of 2026-04-24 ([ca3df2b](https://github.com/aws/aws-sdk-js-v3/commit/ca3df2be81f16be0919b8fe8f384d2495def6754))





# [3.1036.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1035.0...v3.1036.0) (2026-04-23)


### Features

* **client-datazone:** Releasing For LakehouseProperties attributes in the Connections API's ([d0c0372](https://github.com/aws/aws-sdk-js-v3/commit/d0c03722e3e8761edc796b772295a6e46154bea6))
* **client-iot-managed-integrations:** Adds "Status" field to provisioning profile operation response types, giving users visibility into the readiness of a provisioning profile to be used for device provisioning. ([72d6968](https://github.com/aws/aws-sdk-js-v3/commit/72d6968c252410178bf7dbdcfdefe883c1ea84b0))
* **client-opensearch:** Amazon OpenSearch UI applications now support cross-Region domain association, enabling you to connect OpenSearch Dashboards in one AWS Region to OpenSearch domains in other Regions within the same partition for centralized data visualization. ([600311b](https://github.com/aws/aws-sdk-js-v3/commit/600311b94218e85cdf2d770347a848a83fcc9c45))





# [3.1035.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1034.0...v3.1035.0) (2026-04-22)


### Bug Fixes

* **client-s3:** retry errors with 200 status code ([#7945](https://github.com/aws/aws-sdk-js-v3/issues/7945)) ([7d9d8d1](https://github.com/aws/aws-sdk-js-v3/commit/7d9d8d17c5d743f0c4ccf4bbe6f0c1d5b2264667))
* **client-sts:** override IDPCommunicationError to be retryable ([#7946](https://github.com/aws/aws-sdk-js-v3/issues/7946)) ([d75e129](https://github.com/aws/aws-sdk-js-v3/commit/d75e129a8c188d793e079d316815c2aa29902425))


### Features

* **client-batch:** Support of S3Files volume type, container start and stop timeouts. ([802ac4b](https://github.com/aws/aws-sdk-js-v3/commit/802ac4b8c860541edc9cef18173e6125272fe381))
* **client-bedrock-agentcore-control:** Adds support for Amazon Bedrock AgentCore Harness control plane APIs, enabling customers to create, manage, and configure managed agent loops with customizable models, tools, memory, and isolated execution environments. ([ace8fec](https://github.com/aws/aws-sdk-js-v3/commit/ace8fec531b6fce1f8407e12ea3a93c6cb0ae558))
* **client-bedrock-agentcore:** Adds support for Amazon Bedrock AgentCore Harness data plane APIs, enabling customers to invoke managed agent loops and execute commands on live agent sessions with streaming responses. ([a465bad](https://github.com/aws/aws-sdk-js-v3/commit/a465bad856440f341eb49f5d6be50d5fc1c0a8b0))
* **client-ec2:** Managed resource visibility settings control whether resources that AWS services provision on your behalf within your AWS account appear in your Amazon console views and API list operations. ([698293a](https://github.com/aws/aws-sdk-js-v3/commit/698293af3f9151cc60a69347b140b2dc9dee7b41))
* **client-ecs:** GPU health monitoring and auto-repair for ECS Managed Instances ([0ffa109](https://github.com/aws/aws-sdk-js-v3/commit/0ffa1090394e3c0dbfff5c92025aca54ed6ed992))
* **client-emr-serverless:** This release adds support for Spark connect sessions starting with release label emr-7.13.0. ([966d493](https://github.com/aws/aws-sdk-js-v3/commit/966d49344c735b4e8e2e0dfbcc95edb6748d00ac))
* **client-iot-wireless:** Enable customers to optionally specify a desired confidence level for Cellular and WiFi position estimates. Customers can use this to trade off confidence level and radius of uncertainty based on their needs. ([9fcaea5](https://github.com/aws/aws-sdk-js-v3/commit/9fcaea59ffb0c04d4263af037a2450a5ac1200ba))
* **client-ivs:** Adds support for Amazon IVS server-side ad insertion ([a4a29e9](https://github.com/aws/aws-sdk-js-v3/commit/a4a29e9ef7023637a43def2889010e2d59029cf0))
* **client-lambda:** Add Ruby 4.0 (ruby4.0) support to AWS Lambda. ([ece8ce8](https://github.com/aws/aws-sdk-js-v3/commit/ece8ce801e1288224acca7635899888f70438152))
* **client-opensearch:** Adds support for RollbackServiceSoftwareUpdate API ([e8b3794](https://github.com/aws/aws-sdk-js-v3/commit/e8b3794581fc5c6fd930e88eb6fe06e33f2e0666))
* **client-osis:** Update the pipeline configuration body character limit for the CreatePipeline API call. ([d19d406](https://github.com/aws/aws-sdk-js-v3/commit/d19d4063fdd7b239ba429db9720622fd2cea3cba))
* **client-s3-control:** This release adds support for five additional checksum algorithms for data integrity checking in Amazon S3 - MD5, SHA-512, XXHash3, XXHash64, and XXHash128. ([e8c4a76](https://github.com/aws/aws-sdk-js-v3/commit/e8c4a764a2fa04751e6ddb655907e1312f62fca4))
* **client-s3:** This release adds five additional checksum algorithms for S3 data integrity (MD5, SHA-512, XXHash3, XXHash64, XXHash128) and support for S3 Inventory on directory buckets (S3 Express One Zone). ([41a6a59](https://github.com/aws/aws-sdk-js-v3/commit/41a6a5957c88b40e093129de256bb00ab56230fb))





# [3.1034.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1033.0...v3.1034.0) (2026-04-21)


### Bug Fixes

* **lockfile:** update yarn.lock for util-retry resolution version ([#7944](https://github.com/aws/aws-sdk-js-v3/issues/7944)) ([f83dd48](https://github.com/aws/aws-sdk-js-v3/commit/f83dd4822559eca40d1fcd13bf330259c588bc28))


### Features

* **client-cognito-identity-provider:** Adding dutch language support for Cognito Managed Login and Terms on Console ([dca261d](https://github.com/aws/aws-sdk-js-v3/commit/dca261d2a204e45532eecdcb05de158e0f1a4598))
* **client-comprehendmedical:** This release adds Smithy RPC v2 CBOR as an additional protocol alongside the existing AWS JSON 1.1. The SDK will prioritize its most performant protocol. ([d3de08b](https://github.com/aws/aws-sdk-js-v3/commit/d3de08b9ccbd465c43a21742743f6ce2fa073b30))
* **client-compute-optimizer-automation:** This release adds Smithy RPC v2 CBOR as an additional protocol alongside the existing AWS JSON 1.0. The SDK will prioritize its most performant protocol. ([1dce21e](https://github.com/aws/aws-sdk-js-v3/commit/1dce21e2eb521a97160a3b3224eaf1e70e6fec26))
* **client-compute-optimizer:** This release adds Smithy RPC v2 CBOR as an additional protocol alongside the existing AWS JSON 1.0. The SDK will prioritize its most performant protocol. ([bfd1554](https://github.com/aws/aws-sdk-js-v3/commit/bfd1554d917ab439f2755952d53827d520a24344))
* **client-gamelift:** This release adds Smithy RPC v2 CBOR as an additional protocol alongside the existing AWS JSON 1.1. The SDK will prioritize its most performant protocol. ([c1e7383](https://github.com/aws/aws-sdk-js-v3/commit/c1e73830150125b9422cf3ae68ab36af643b6297))
* **client-marketplace-entitlement-service:** This release adds Smithy RPC v2 CBOR as an additional protocol alongside the existing AWS JSON 1.1. The SDK will prioritize its most performant protocol. ([76ca21f](https://github.com/aws/aws-sdk-js-v3/commit/76ca21fc89587fc2e4a19c0f89f2dc46f364e8f2))
* **client-network-firewall:** Support for new types of partner managed rulegroups for Network Firewall Service ([267a4f8](https://github.com/aws/aws-sdk-js-v3/commit/267a4f8ed42a1809a30af68137f25e34e4de5fca))
* **client-sagemaker:** SageMaker AI now supports generative AI inference recommendations. Provide your model and workload, and SageMaker AI optimizes configurations, benchmarks them on real GPUs, and returns deployment-ready recommendations with validated metrics, accelerating the path to production from weeks to hours. ([d111c8b](https://github.com/aws/aws-sdk-js-v3/commit/d111c8b87ddc8803bb69110be1d701f1c9c838b5))
* **client-snowball:** This release adds Smithy RPC v2 CBOR as an additional protocol alongside the existing AWS JSON 1.1. The SDK will prioritize its most performant protocol. ([dc2372c](https://github.com/aws/aws-sdk-js-v3/commit/dc2372c36ecfc12ca25670d663874668d9c69da7))





# [3.1033.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1032.0...v3.1033.0) (2026-04-20)


### Bug Fixes

* **core:** replace Object.entries with for-in loops in shape serde ([#7940](https://github.com/aws/aws-sdk-js-v3/issues/7940)) ([785e3b2](https://github.com/aws/aws-sdk-js-v3/commit/785e3b286aedcce993f889d20d8962e9f1b6189b))


### Features

* **client-application-signals:** Releasing Second phase of SLO Recommendations where you can create recommended SLOs out-of-the box using CreateSLO API ([266b97c](https://github.com/aws/aws-sdk-js-v3/commit/266b97c3f61cc2799fc79a8c237f5de76e8f42f4))
* **client-bedrock-agentcore-control:** Supporting listingMode for AgentCore Gateway MCP server targets ([23d06d5](https://github.com/aws/aws-sdk-js-v3/commit/23d06d568faa80436834fbdfe75e18a1a21970a8))
* **client-ec2:** Added Transit Gateway Integration into AWS Client VPN. ([7ea00cb](https://github.com/aws/aws-sdk-js-v3/commit/7ea00cb503a5656383b41e0989f8d5f6eb6cf85e))
* **client-evs:** Amazon EVS now allows you to create connectors to your vCenter appliances and create Windows Server entitlements for virtual machines running in your EVS environments ([f4cdcf8](https://github.com/aws/aws-sdk-js-v3/commit/f4cdcf8d1b079bfa789ddc36cb5093e1940aa293))
* **client-kafka:** Amazon MSK Replicator now supports data migration from external Apache Kafka clusters to Amazon MSK Express brokers. This release adds SaslScram authentication with TLS encryption, enhanced consumer offset synchronization, and customer log forwarding for troubleshooting. ([543ff57](https://github.com/aws/aws-sdk-js-v3/commit/543ff5712c5d6f184539bb96e853b21b8ce6f91e))
* **client-location:** This release adds support for new Job APIs for bulk workloads. The initial job type supported is Address Validation. The new APIs added are StartJob, CancelJob, ListJobs, and GetJob. ([444f15c](https://github.com/aws/aws-sdk-js-v3/commit/444f15cef3d743ebef229c8db4171990a9b53fc4))
* **client-observabilityadmin:** Enablement for Security Hub v2 via Observability Admin Telemetry Rule for account and organization level. ([f70978f](https://github.com/aws/aws-sdk-js-v3/commit/f70978fb30a073aaad8b3b7e60144ef2689b9b9e))
* **clients:** update client endpoints as of 2026-04-20 ([d6a7886](https://github.com/aws/aws-sdk-js-v3/commit/d6a7886a68e4e65f74410e1068ec9f5cade83ca4))
* **clients:** use binary decision diagrams for endpoint resolution ([#7931](https://github.com/aws/aws-sdk-js-v3/issues/7931)) ([ff1b2ba](https://github.com/aws/aws-sdk-js-v3/commit/ff1b2baed919216fa1ddf3d116d500d05f0e436b))





# [3.1032.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1031.0...v3.1032.0) (2026-04-17)


### Bug Fixes

* **core:** reduce object allocations in protocol serde ([#7939](https://github.com/aws/aws-sdk-js-v3/issues/7939)) ([d0c9af0](https://github.com/aws/aws-sdk-js-v3/commit/d0c9af067e32d5e745bf08be5d932ba5e07ba3f2))


### Features

* **client-cleanrooms:** This release adds support for configurable spark properties for Cleanrooms PySpark workloads. ([c5de550](https://github.com/aws/aws-sdk-js-v3/commit/c5de550663bff4133b3bf965a34d5f630dc31f0c))
* **client-connectcampaignsv2:** This release adds support for campaign entry limits configuration and hourly refresh frequency in Amazon Connect Outbound Campaigns. ([4ee31ae](https://github.com/aws/aws-sdk-js-v3/commit/4ee31aed90b30b3a8bb506bde9bddc387f2affdf))
* **client-connect:** Fixes in SDK for customers using TestCase APIs ([bd88a7e](https://github.com/aws/aws-sdk-js-v3/commit/bd88a7ec14468746f37cb688deb8ffe7bf8ec8d6))
* **client-groundstation:** Adds support for updating contacts, listing antennas, and listing ground station reservations. New API operations - UpdateContact, ListContactVersions, DescribeContactVersion, ListAntennas, and ListGroundStationReservations. ([360c381](https://github.com/aws/aws-sdk-js-v3/commit/360c381768bf161bdddf1fd8ee2eee9b1b57f882))
* **client-imagebuilder:** ImportDiskImage API adds registerImageOptions for Secure Boot control and custom UEFI data. It adds windowsConfiguration for selecting a specific edition from multi-image .wim files during ISO import. ([d211b30](https://github.com/aws/aws-sdk-js-v3/commit/d211b308a4e5de099a440e65d6f819ac8a40a434))
* **client-quicksight:** Public release of dashboard customization summary, S3 Tables data source type, Athena cross-account connector, custom sorting for controls, and AI-powered analysis generation. ([da327c4](https://github.com/aws/aws-sdk-js-v3/commit/da327c4788535cdabd4e43f4bed0198e79d8d1c6))
* **client-sagemaker:** Adds support for providing NetworkInterface for efa enabled instances and Simplified cluster creation for Slurm-orchestrated clusters with optional Lifecycle Script (LCS) configuration. ([ffcb883](https://github.com/aws/aws-sdk-js-v3/commit/ffcb883d48003c58a619932f6eebd25463241475))
* **client-sts:** The STS client now supports configuring SigV4a through the auth scheme preference setting. SigV4a uses asymmetric cryptography, enabling customers using long-term IAM credentials to continue making STS API calls even when a region is isolated from the partition leader. ([c575546](https://github.com/aws/aws-sdk-js-v3/commit/c57554661350838482c9d19b414ef92207630f3b))
* **clients:** update client endpoints as of 2026-04-17 ([1fd8c26](https://github.com/aws/aws-sdk-js-v3/commit/1fd8c265d2098688e887fe7ba6d1407ded39272e))





# [3.1031.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1030.0...v3.1031.0) (2026-04-16)


### Bug Fixes

* **eventstream-handler-node:** use static credentials in event signing streams ([#7930](https://github.com/aws/aws-sdk-js-v3/issues/7930)) ([c5af293](https://github.com/aws/aws-sdk-js-v3/commit/c5af293d7181a30eb9cca7c1b8c524b638e9e6d0))
* **tests:** resolve lerna.json from monorepo root and let rollup use UMD output format ([#7928](https://github.com/aws/aws-sdk-js-v3/issues/7928)) ([a1313f9](https://github.com/aws/aws-sdk-js-v3/commit/a1313f90debd2eb5535364b53812431491918d5a))


### Features

* **client-appstream:** Add content redirection to Update Stack ([1bde7c7](https://github.com/aws/aws-sdk-js-v3/commit/1bde7c7852c2f8f0e5df93a1530a74e20ef3c980))
* **client-auto-scaling:** This release adds support for specifying Availability Zone IDs as an alternative to Availability Zone names when creating or updating Auto Scaling groups. ([40e2faa](https://github.com/aws/aws-sdk-js-v3/commit/40e2faa7ed1426a8da681d1f52031b7d1a033246))
* **client-bedrock-agentcore:** Introducing NamespacePath in AgentCore Memory to support hierarchical prefix based memory record retrieval. ([91aeaed](https://github.com/aws/aws-sdk-js-v3/commit/91aeaedc493b90f434a359edd6fc349a6ebd4414))
* **client-cloudwatch-logs:** Endpoint update for CloudWatch Logs Streaming APIs. ([6b28a14](https://github.com/aws/aws-sdk-js-v3/commit/6b28a1420ca6cbee8371c10c352865198006003e))
* **client-cognito-identity-provider:** Adds support for passkey-based multi-factor authentication in Cognito User Pools. Users can authenticate securely using FIDO2-compliant passkeys with user verification, enabling passwordless MFA flows while maintaining backward compatibility with password-based authentication ([4995e67](https://github.com/aws/aws-sdk-js-v3/commit/4995e67c6255b6c69beabdc74a2d4c4423b5ae3a))
* **client-connectcases:** Added error handling for service quota limits ([658cb4b](https://github.com/aws/aws-sdk-js-v3/commit/658cb4b35325c196530e8db7aacc5f566ec88e5a))
* **client-connect:** This release updates the Amazon Connect Rules CRUD APIs to support a new EventSourceName - OnEmailAnalysisAvailable. Use this event source to trigger rules when conversational analytics results are available for email contacts. ([7abcd2c](https://github.com/aws/aws-sdk-js-v3/commit/7abcd2c7651274f072cea38b19b1945bbf5cdf75))
* **client-customer-profiles:** Amazon Connect Customer Profiles adds RecommenderSchema CRUD APIs for custom ML training columns. CreateRecommender and CreateRecommenderFilter now accept optional RecommenderSchemaName. ([be0aa8b](https://github.com/aws/aws-sdk-js-v3/commit/be0aa8b03f745db8f65ecc42982c4f649d5eb66b))
* **client-datazone:** Launching SMUS IAM domain SDK support ([60bff8a](https://github.com/aws/aws-sdk-js-v3/commit/60bff8a76295f8419822fa514c0e84cda8537bfd))
* **client-devops-agent:** Deprecate the userId from the Chat operations. This update also removes  support of AllowVendedLogDeliveryForResource API from AWS SDKs. ([39729e0](https://github.com/aws/aws-sdk-js-v3/commit/39729e01b4e7422870c8ac053ab3384944a45327))
* **client-drs:** Updating regex for identification of AWS Regions. ([9405d28](https://github.com/aws/aws-sdk-js-v3/commit/9405d28341da3e17ab2aa4437be676aabb815daa))
* **client-dynamodb:** performance improvements in JSON serialization ([#7933](https://github.com/aws/aws-sdk-js-v3/issues/7933)) ([c647598](https://github.com/aws/aws-sdk-js-v3/commit/c647598de8e496634a193ad26467808341d320e0))
* **client-mediaconvert:** Adds support for Elemental Inference powered smart crop feature, enabling video verticalization ([c82e5ca](https://github.com/aws/aws-sdk-js-v3/commit/c82e5cacc51ad70785880c92b57d8682ec1c8b50))
* **client-rds:** Adds a new DescribeServerlessV2PlatformVersions API to describe platform version properties for Aurora Serverless v2. Also introduces a new valid maintenance action value for serverless platform version updates. ([b72b175](https://github.com/aws/aws-sdk-js-v3/commit/b72b175a5593462b09adf3cebb4ae8427b8d95bb))
* **clients:** update client endpoints as of 2026-04-16 ([68ae10a](https://github.com/aws/aws-sdk-js-v3/commit/68ae10a11ed93f2d816d883bf00aa5f866b11d34))





# [3.1030.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1029.0...v3.1030.0) (2026-04-13)


### Features

* **client-customer-profiles:** This release introduces changes to SegmentDefinition APIs to support sorting by attributes. ([c5c5196](https://github.com/aws/aws-sdk-js-v3/commit/c5c519686e996c23b469194d19b3c43e11632ac3))
* **client-deadline:** Adds GetMonitorSettings and UpdateMonitorSettings APIs to Deadline Cloud. Enables reading and writing monitor settings as key-value pairs (up to 64 keys per monitor). UpdateMonitorSettings supports upsert and delete (via empty value) semantics and is idempotent. ([c21faa8](https://github.com/aws/aws-sdk-js-v3/commit/c21faa8466eb33a2b316153e63d6d66eed1b0408))
* **client-interconnect:** Initial release of AWS Interconnect -- a managed private connectivity service that enables you to create high-speed network connections between your AWS Virtual Private Clouds (VPCs) and your VPCs on other public clouds or your on-premise networks. ([209d363](https://github.com/aws/aws-sdk-js-v3/commit/209d36331a7a92d4b4f15ff50b7af3bc03f666d2))
* **client-macie2:** This release adds an optional expectedBucketOwner field to the Macie S3 export configuration, allowing customers to verify bucket ownership before Macie writes results to the destination bucket. ([4ce1dad](https://github.com/aws/aws-sdk-js-v3/commit/4ce1dadc0876cb27bc843ba72be1592a16c7a039))
* **client-securityhub:** Provide organizational unit scoping capability for GetFindingsV2, GetFindingStatisticsV2, GetResourcesV2, GetResourcesStatisticsV2 APIs. ([7dbb49e](https://github.com/aws/aws-sdk-js-v3/commit/7dbb49e26b7b543b5957a8e390b0c273ad0691af))
* **clients:** update client endpoints as of 2026-04-13 ([c2fd223](https://github.com/aws/aws-sdk-js-v3/commit/c2fd223de3808dd9b6ad75111a880904980486fe))





# [3.1029.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1028.0...v3.1029.0) (2026-04-10)


### Features

* **client-connect:** Conversational Analytics for Email ([fd2820f](https://github.com/aws/aws-sdk-js-v3/commit/fd2820f8dd33c67471100f2c7ff9fadfbc1ffc7a))
* **client-devops-agent:** Devops Agent now supports associate Splunk, Datadog and custom MCP server to an Agent Space. ([4450317](https://github.com/aws/aws-sdk-js-v3/commit/4450317588a78674b066acb06a2813686f6e45ff))
* **client-ecs:** Minor updates to exceptions for completeness ([788ab4a](https://github.com/aws/aws-sdk-js-v3/commit/788ab4a6e9d756429b6597ecdcfaba971ef3cbc8))
* **client-imagebuilder:** Image pipelines can now automatically apply tags to images they create. Set the imageTags property when creating or updating your pipelines to get started. ([5eb366f](https://github.com/aws/aws-sdk-js-v3/commit/5eb366f5edb132b2bf9a7556fdc72534132ce2bd))
* **client-mediaconvert:** Adds support for MV-HEVC video output and clear lead for AV1 DRM output. ([812d3da](https://github.com/aws/aws-sdk-js-v3/commit/812d3dad9ee2a7c7e6b1c0de27e34cdbc50f2572))
* **client-observabilityadmin:** CloudWatch Observability Admin adds support for multi-region telemetry evaluation and telemetry enablement rules. ([861e172](https://github.com/aws/aws-sdk-js-v3/commit/861e172aa8c12a7226c9d312a8b411124d424d21))
* **client-rtbfabric:** Adds optional health check configuration for Responder Gateways with ASG Managed Endpoints. When provided, RTB Fabric continuously probes customers' instance IPs and routes traffic only to healthy ones, reducing errors during deployments, scaling events, and instance failures. ([3e89043](https://github.com/aws/aws-sdk-js-v3/commit/3e89043766f865865af301c1c3b525b294b9100f))
* **client-sagemaker:** Support new SageMaker StartClusterHealthCheck API for on-demand DHC on Hyperpod EKS cluster. Support updated CreateCluster, UpdateCluster, DescribeCluster, BatchAddClusterNodes APIs for flexible instance group on HyperPod cluster ([dfcde03](https://github.com/aws/aws-sdk-js-v3/commit/dfcde032c387d7a6e2abe0fb9b09186f701f5620))





# [3.1028.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1027.0...v3.1028.0) (2026-04-09)


### Features

* **client-bcm-dashboards:** Scheduled email reports of Billing and Cost Management Dashboards ([5e7231a](https://github.com/aws/aws-sdk-js-v3/commit/5e7231a11fb84317876381fabbb3468f5bd1a378))
* **client-bedrock-agentcore-control:** Initial release for CRUDL in AgentCore Registry Service ([ec57632](https://github.com/aws/aws-sdk-js-v3/commit/ec576322f9476affa41bfe45ff9501ba3c2301b7))
* **client-bedrock-agentcore:** Introducing support for SearchRegistryRecords API on AgentCoreRegistry ([6ac1ecc](https://github.com/aws/aws-sdk-js-v3/commit/6ac1ecc5ed727a2c9b92d587dd7b41ac3d5440ee))
* **client-mediaconnect:** Adds support for MediaLive Channel-type Router Inputs. ([858c746](https://github.com/aws/aws-sdk-js-v3/commit/858c746dc2fcd16712905fabdbd09b1a364f7c77))
* **client-redshift-data:** The BatchExecuteStatement API now supports named SQL parameters, enabling secure batch queries with parameterized values. This enhancement helps prevent SQL injection vulnerabilities and improves query reusability. ([de8f2af](https://github.com/aws/aws-sdk-js-v3/commit/de8f2afba6b945dcb804a55b6e9d944eaf213d50))
* **client-sagemaker:** Release support for g7e instance types for SageMaker HyperPod ([c92e9e6](https://github.com/aws/aws-sdk-js-v3/commit/c92e9e66bd0109504f7f15ebd409a23cc8821ec4))





# [3.1027.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1026.0...v3.1027.0) (2026-04-08)


### Features

* **client-backup:** Adding EKS specific backup vault notification types for AWS Backup. ([c5badfd](https://github.com/aws/aws-sdk-js-v3/commit/c5badfde9ad0899a64a6a506682506cf458cf838))
* **client-drs:** This changes adds support for modifying the replication configuration to support data replication using IPv6. ([b2cd445](https://github.com/aws/aws-sdk-js-v3/commit/b2cd4452c436577d4d780fc3c51c04a042f5179d))
* **client-ecr:** Add UnableToListUpstreamImageReferrersException in ListImageReferrers ([459df0b](https://github.com/aws/aws-sdk-js-v3/commit/459df0bc3e99151fcfaffa59608032f789225181))
* **client-ivs-realtime:** Adds support for Amazon IVS real-time streaming redundant ingest. ([1a8caf9](https://github.com/aws/aws-sdk-js-v3/commit/1a8caf9ec958d6a72d41c18f0c6e426325ddd016))
* **client-marketplace-discovery:** AWS Marketplace Discovery API provides an interface that enables programmatic access to the AWS Marketplace catalog, including searching and browsing listings, retrieving product details and fulfillment options, and accessing public and private offer pricing and terms. ([1523d99](https://github.com/aws/aws-sdk-js-v3/commit/1523d996c9baed4f0d56459be0460d8a11ce6bd6))
* **client-medialive:** MediaLive is adding support for MediaConnect Router by supporting a new output type called MEDIACONNECT ROUTER. This new output type will provide seamless encrypted transport between your MediaLive channel and MediaConnect Router. ([9d257a3](https://github.com/aws/aws-sdk-js-v3/commit/9d257a3f456eb61ebd2e6e823e80797b31bfc182))
* **client-outposts:** Add AWS Outposts APIs to view renewal pricing options and submit renewal requests for Outpost contracts ([ba6c2a7](https://github.com/aws/aws-sdk-js-v3/commit/ba6c2a7e3c2fc2ed15f44949bedc4a8f048cbaf2))
* **clients:** update client endpoints as of 2026-04-08 ([88eb668](https://github.com/aws/aws-sdk-js-v3/commit/88eb6682733b52d243befa8ff9b6cd7972207542))





# [3.1026.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1025.0...v3.1026.0) (2026-04-07)


### Bug Fixes

* **scripts:** default generate-client-tarball-since to origin/main ([#7917](https://github.com/aws/aws-sdk-js-v3/issues/7917)) ([314b203](https://github.com/aws/aws-sdk-js-v3/commit/314b203d283df1e8d9e78080f2823cc81a14a223))


### Features

* **client-accessanalyzer:** Revert previous additions of API changes. ([2498b34](https://github.com/aws/aws-sdk-js-v3/commit/2498b34454db79c36fffdeaf3ea21efc606ec090))
* **client-bedrock-agentcore:** This release includes support for 1) InvokeBrowser API, enabling OS-level control of AgentCore Browser Tool sessions through mouse actions, keyboard input, and screenshots. 2) Added documentation noting that empty sessions are automatically deleted after one day in the ListSessions API. ([209baf8](https://github.com/aws/aws-sdk-js-v3/commit/209baf8c3004f6b7d9aa736fcaf896f6bb35ada1))
* **client-braket:** Added support for t3, g6, and g6e instance types for Hybrid Jobs. ([5107b43](https://github.com/aws/aws-sdk-js-v3/commit/5107b43e9ed72f4a5a2c5ab65ce8686540a5dc16))
* **client-connect:** The voice enhancement mode used by the agent can now be viewed on the contact record via the DescribeContact api. ([1411825](https://github.com/aws/aws-sdk-js-v3/commit/1411825c58f5351b15a5f561e914f54aa9a61b7f))
* **client-datasync:** Allow IAM role ARNs with IAM Paths for "SecretAccessRoleArn" field in "CustomSecretConfig" ([2493464](https://github.com/aws/aws-sdk-js-v3/commit/2493464bae635f3707ac32e79db4d8aa1fdf6fbf))
* **client-datazone:** Update Configurations and registerS3AccessGrantLocation as public attributes for cfn ([4959747](https://github.com/aws/aws-sdk-js-v3/commit/49597475aa62448829fb5e0fc958a1f1e263c1c2))
* **client-ec2:** EC2 Capacity Manager adds new dimensions for grouping and filtering capacity metrics, including tag-based dimensions and Account Name. ([4f5a452](https://github.com/aws/aws-sdk-js-v3/commit/4f5a452ac08084462195df32604cd720a3d5951e))
* **client-ecs:** This release provides the functionality of mounting Amazon S3 Files to Amazon ECS tasks by adding support for the new S3FilesVolumeConfiguration parameter in ECS RegisterTaskDefinition API. ([1816b91](https://github.com/aws/aws-sdk-js-v3/commit/1816b9153fc7805c933193b2b5455e68b1f680ac))
* **client-eks:** EKS MNG WarmPool feature to support ASG WarmPool feature. ([b982b67](https://github.com/aws/aws-sdk-js-v3/commit/b982b6788cad08dac3f335ab1f52739b10f565ca))
* **client-lambda:** Launching Lambda integration with S3 Files as a new file system configuration. ([4e40cc0](https://github.com/aws/aws-sdk-js-v3/commit/4e40cc0ce3526c16d5d0464e37755692143532a1))
* **client-outposts:** This change allows listAssets to surface pending and non-compute asset information. Adds the INSTALLING asset state enum and the STORAGE, POWERSHELF, SWITCH, and NETWORKING AssetTypes. ([12921a6](https://github.com/aws/aws-sdk-js-v3/commit/12921a6f530a2bdcdcc66e8c3e687f9a23944e3d))
* **client-rtbfabric:** AWS RTB Fabric External Responder gateways now support HTTP in addition to HTTPS for inbound external links. Gateways can accept bid requests on port 80 or serve both protocols simultaneously via listener configuration, giving customers flexible transport options for their bidding infrastructure ([e7dae9e](https://github.com/aws/aws-sdk-js-v3/commit/e7dae9e324f9f5e7b0810633d7e085182f5de5a4))
* **client-s3files:** Support for S3 Files, a new shared file system that connects any AWS compute directly with your data in Amazon S3. It provides fast, direct access to all of your S3 data as files with full file system semantics and low-latency performance, without your data ever leaving S3. ([b87065a](https://github.com/aws/aws-sdk-js-v3/commit/b87065a7c02cdf72e65c3e1249ca66e2bebed3bc))
* **client-s3:** Updated list of the valid AWS Region values for the LocationConstraint parameter for general purpose buckets. ([229167d](https://github.com/aws/aws-sdk-js-v3/commit/229167dd9dc54fa300fd9bd68837fcf6eb82e566))
* **clients:** update client endpoints as of 2026-04-07 ([1a9724c](https://github.com/aws/aws-sdk-js-v3/commit/1a9724c88ec4457cbdd24f1fbb871eccbfb2f3e6))





# [3.1025.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1024.0...v3.1025.0) (2026-04-06)


### Features

* **client-accessanalyzer:** Brookie helps customers preview the impact of SCPs before deployment using historical access activity. It evaluates attached policies and proposed policy updates using collected access activity through CloudTrail authorization events and reports where currently allowed access will be denied. ([940df70](https://github.com/aws/aws-sdk-js-v3/commit/940df70360ac51652192675a9f377cac4ba3db4d))
* **client-deadline:** Added 8 batch APIs (BatchGetJob, BatchGetStep, BatchGetTask, BatchGetSession, BatchGetSessionAction, BatchGetWorker, BatchUpdateJob, BatchUpdateTask) for bulk operations. Monitors can now use an Identity Center instance in a different region via the identityCenterRegion parameter. ([64147e0](https://github.com/aws/aws-sdk-js-v3/commit/64147e0837aeeade6809d40f34c443403a30f58b))
* **client-dlm:** This release adds support for Fast Snapshot Restore AvailabilityZone Ids in Amazon Data Lifecycle Manager EBS snapshot lifecycle policies. ([18d4b47](https://github.com/aws/aws-sdk-js-v3/commit/18d4b471019f383d44daa7e42cd8feb23dcb5a14))
* **client-guardduty:** Migrated to Smithy. No functional changes ([0054ddd](https://github.com/aws/aws-sdk-js-v3/commit/0054ddde0e7b5cc663ac42ad7be76811cb2c57e1))
* **client-lightsail:** This release adds support for the Asia Pacific (Malaysia) (ap-southeast-5) Region. ([6ceeb5d](https://github.com/aws/aws-sdk-js-v3/commit/6ceeb5d63759e180ca54aac1d36aaac4b90addc4))
* **client-mediatailor:** This change adds support for Tagging the resource types Programs and Prefetch Schedules ([cfa9a0a](https://github.com/aws/aws-sdk-js-v3/commit/cfa9a0a9a29534151741cdcc1a24ead2b36bf665))
* **client-qconnect:** Added optional originRequestId parameter to SendMessageRequest and ListSpans response in Amazon Q in Connect to support request tracing across service boundaries. ([5b3e0a7](https://github.com/aws/aws-sdk-js-v3/commit/5b3e0a76e4c5cec1d955b98fa6d8f8c70577f574))
* **client-transfer:** AWS Transfer Family Connectors now support IPv6 connectivity, enabling outbound connections to remote SFTP or AS2 servers using IPv4-only or dual-stack (IPv4 and IPv6) configurations based on network requirements. ([51cf6a6](https://github.com/aws/aws-sdk-js-v3/commit/51cf6a624b30aaa76d96aa7447b110ec6ed1240c))
* **clients:** update client endpoints as of 2026-04-06 ([a2eb33d](https://github.com/aws/aws-sdk-js-v3/commit/a2eb33dab191fcd690a3b7010b62b3097d44dbda))





# [3.1024.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1023.0...v3.1024.0) (2026-04-03)


### Features

* **client-bedrock-agent:** Added strict parameter to ToolSpecification to allow users to enforce strict JSON schema adherence for tool input schemas. ([2d57cd6](https://github.com/aws/aws-sdk-js-v3/commit/2d57cd61c7c6e65c716726b117de387a3c985143))
* **client-bedrock:** Amazon Bedrock Guardrails enforcement configuration APIs now support selective guarding controls for system prompts as well as user and assistant messages, along with SDK support for Amazon Bedrock resource policy APIs. ([4aa232c](https://github.com/aws/aws-sdk-js-v3/commit/4aa232cc268e3cb4f3b24d947fe3b39742a8a0f3))
* **client-cloudwatch-logs:** Added queryDuration, bytesScanned, and userIdentity fields to the QueryInfo response object returned by DescribeQueries. Customers can now view detailed query cost information including who ran the query, how long it took, and the volume of data scanned. ([c4b9df8](https://github.com/aws/aws-sdk-js-v3/commit/c4b9df8e63abc716559d7a9c6f96a4562f43f6c1))
* **client-imagebuilder:** Updated pagination token validation for ListContainerRecipes API to support maximum size of 65K characters ([0d392c9](https://github.com/aws/aws-sdk-js-v3/commit/0d392c9013b89fa469e08ac59415ab1b6d79daef))
* **client-lightsail:** Add support for tagging of Alarm resource type ([ad9e0d7](https://github.com/aws/aws-sdk-js-v3/commit/ad9e0d7195bffce0987ba447089a9c068c30c0f3))
* **client-medialive:** AWS Elemental MediaLive released a new features that allows customers to use HLG 2020 as a color space for AV1 video codec. ([b9ff368](https://github.com/aws/aws-sdk-js-v3/commit/b9ff368c11c6747f7d104bda4955407cfea000c1))
* **client-payment-cryptography:** Adds optional support to retrieve previously generated import and export tokens to simplify import and export functions ([7627474](https://github.com/aws/aws-sdk-js-v3/commit/7627474328ec5741df10bff91b7db564a672d30d))





# [3.1023.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1022.0...v3.1023.0) (2026-04-02)


### Features

* **client-appstream:** Amazon WorkSpaces Applications now supports drain mode for instances in multi-session fleets. This capability allows administrators to instruct individual fleet instances to stop accepting new user sessions while allowing existing sessions to continue uninterrupted. ([3644b4c](https://github.com/aws/aws-sdk-js-v3/commit/3644b4c1b9d7f2903782c01f6fda12d7988fdeb0))
* **client-bedrock-agentcore-control:** Adds support for three-legged (Authorization Code grant type) OAuth along with predefined MCP tool schema configuration for Amazon Bedrock AgentCore gateway MCP server targets. ([3bf4e65](https://github.com/aws/aws-sdk-js-v3/commit/3bf4e65003f3ff7642c07ed69d7e685272398afb))
* **client-bedrock-data-automation:** Data Automation Library is a BDA capability that lets you create reusable entity resources to improve extraction accuracy. Libraries support Custom Vocabulary entities that enhance speech recognition for audio and video content with domain-specific terminology shared across projects ([b7560ab](https://github.com/aws/aws-sdk-js-v3/commit/b7560ab11e24a6c3f9e6e88d33cb4b745aab8d93))
* **client-bedrock-runtime:** Relax ToolUseId pattern to allow dots and colons ([2837c47](https://github.com/aws/aws-sdk-js-v3/commit/2837c47705656a871fadb1db5ae5f9d6587a7cfe))
* **client-cloudwatch-logs:** We are pleased to announce that our logs transformation csv processor now has a destination field, allowing you to specify under which parent node parsed columns be placed under. ([d3d6f2b](https://github.com/aws/aws-sdk-js-v3/commit/d3d6f2bb383b8b18797237bd3553a7555dc881f2))
* **client-cloudwatch:** CloudWatch now supports OTel enrichment to make vended metrics for supported AWS resources queryable via PromQL with resource ARN and tag labels, and PromQL alarms for metrics ingested via the OTLP endpoint with multi-contributor evaluation. ([c34638a](https://github.com/aws/aws-sdk-js-v3/commit/c34638a1910a8536e3a1935481055b41f142c0d4))
* **client-connect:** Include CUSTOMER to evaluation target and participant role. Support Korean, Japanese and Simplified Chinese in evaluation forms. ([69be144](https://github.com/aws/aws-sdk-js-v3/commit/69be1448fb6468f3a2f60e6628c62c3a00064bcc))
* **client-deadline:** AWS Deadline Cloud now supports configurable scheduling on each queue. The scheduling configuration controls how workers are distributed across jobs. ([522c454](https://github.com/aws/aws-sdk-js-v3/commit/522c454c9ad64391491564211483d4c85a747a2e))
* **client-gamelift:** Amazon GameLift Servers now includes a ComputeName field in game session API responses, making it easier to identify which compute is hosting a game session without cross-referencing IP addresses. ([9eb2723](https://github.com/aws/aws-sdk-js-v3/commit/9eb2723f8ef541d9f5f1d4d5401dbfa4cf28ad61))
* **client-pricing:** This release increases the MaxResults parameter of the GetAttributeValues API from 100 to 10000. ([f394460](https://github.com/aws/aws-sdk-js-v3/commit/f3944601156bd3826d2f8c40efd135bbe34d6784))
* **clients:** update client endpoints as of 2026-04-02 ([b5ffded](https://github.com/aws/aws-sdk-js-v3/commit/b5ffded0d79f0990f66e033fc071ebcb129d3a0d))





# [3.1022.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1021.0...v3.1022.0) (2026-04-01)


### Features

* **client-bedrock-agentcore-control:** Adds support for VPC egress private endpoints for Amazon Bedrock AgentCore gateway targets, enabling private connectivity through managed VPC Lattice resources. Also adds IAM credential provider for gateway targets, enabling IAM-based authentication to target endpoints ([de64266](https://github.com/aws/aws-sdk-js-v3/commit/de64266978a92920bc003895149c4e759cfd834c))
* **client-bedrock-agentcore:** Added the ability to filter out empty sessions when listing sessions. Customers can now retrieve only sessions that still contain events, eliminating the need to check each session individually. No changes required for existing integrations. ([a4d1169](https://github.com/aws/aws-sdk-js-v3/commit/a4d1169cd9611b5ed059e436250a26304de804c5))
* **client-bedrock:** Adds support for Bedrock Batch Inference Job Progress Monitoring ([4f7aa9c](https://github.com/aws/aws-sdk-js-v3/commit/4f7aa9cf900b5a0b9767a8fa55a9fc7421fc724e))
* **client-ecs:** Amazon ECS now supports Managed Daemons with dedicated APIs for registering daemon task definitions, creating daemons, and managing daemon deployments. ([244432f](https://github.com/aws/aws-sdk-js-v3/commit/244432f24eb0a7e51833c1f74b292666b31b2b4b))
* **client-elasticache:** Updated SnapshotRetentionLimit documentation for ServerlessCache to correctly describe the parameter as number of days (max 35) instead of number of snapshots. ([67fd75e](https://github.com/aws/aws-sdk-js-v3/commit/67fd75ea4f4c67b6f2fd7d002ea4da11ef504d22))
* **client-elasticsearch-service:** Adding Policy-Min-TLS-1-2-RFC9151-FIPS-2024-08 as TLS Policy in Supported Regions ([4819301](https://github.com/aws/aws-sdk-js-v3/commit/4819301bb7989bf80727f2c42f850039254c443e))
* **client-geo-routes:** This release makes RoutingBoundary optional in CalculateRouteMatrix, set StopDuration with a maximum value of 49999 for CalculateRoutes, set TrailerCount with a maximum value of 4, and introduces region restrictions for Grab Maps users. ([fc9dd50](https://github.com/aws/aws-sdk-js-v3/commit/fc9dd509095710d0368a3bf5723578410f864278))
* **client-medical-imaging:** Added new boolean flag to persist metadata updates to all primary image sets in the same study as the requested image set. ([af90be3](https://github.com/aws/aws-sdk-js-v3/commit/af90be39a051be2e1d619a74445923179d12c32a))
* **client-opensearch:** Adding Policy-Min-TLS-1-2-RFC9151-FIPS-2024-08 as TLS Policy in Supported Regions ([3173ac0](https://github.com/aws/aws-sdk-js-v3/commit/3173ac0bf336d3b7c1afb4556126f319ec44e51d))





# [3.1021.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1020.0...v3.1021.0) (2026-03-31)


### Bug Fixes

* **codegen:** sync for adaptive retry throttling detection fix ([#7905](https://github.com/aws/aws-sdk-js-v3/issues/7905)) ([03f108d](https://github.com/aws/aws-sdk-js-v3/commit/03f108d08c37fcde9de0a62c29887458e980d84e))


### Features

* **client-acm:** Adds support for searching for ACM certificates using the new SearchCertificates API. ([4fd3187](https://github.com/aws/aws-sdk-js-v3/commit/4fd3187c31bf7dbb98b68a31e838c9b5e16308da))
* **client-cloudfront:** This release adds bring your own IP (BYOIP) IPv6 support to CloudFront's CreateAnycastIpList and UpdateAnycastIpList API through the IpamCidrConfigs field. ([5d0f730](https://github.com/aws/aws-sdk-js-v3/commit/5d0f730026a83ab34f9c315b74216cc57c729ced))
* **client-database-migration-service:** To successfully connect to the IBM DB2 LUW database server, you may need to specify additional security parameters that are passed to the JDBC driver. These parameters are EncryptionAlgorithm and SecurityMechanism. Both parameters accept integer values. ([6cdf668](https://github.com/aws/aws-sdk-js-v3/commit/6cdf6680aa99ade511f23256e6e3158a7a0d06f6))
* **client-dataexchange:** Support Tags for AWS Data Exchange resource Assets ([43896f5](https://github.com/aws/aws-sdk-js-v3/commit/43896f5010bf3044056142fdc1cc5ae1f66f33e8))
* **client-datazone:** Adds environmentConfigurationName field to CreateEnvironmentInput and UpdateEnvironmentInput, so that Domain Owners can now recover orphaned environments by recreating deleted configurations with the same name, and will auto-recover orphaned environments ([e372358](https://github.com/aws/aws-sdk-js-v3/commit/e372358f3fc176b24c39dff58f1962eccc08e480))
* **client-devops-agent:** AWS DevOps Agent service General Availability release. ([85d0436](https://github.com/aws/aws-sdk-js-v3/commit/85d0436b1a31878ba4a5d70bc10cd99571d1cf95))
* **client-geo-maps:** This release expands map customization options with adjustable contour line density, dark mode support for Hybrid and Satellite views, enhanced traffic information across multiple map styles, and transit and truck travel modes for Monochrome and Hybrid map styles. ([f7e1a71](https://github.com/aws/aws-sdk-js-v3/commit/f7e1a7162cbd1060f3aa91e5e652f0f73ad210e3))
* **client-kinesis-analytics-v2:** Support for Flink 2.2 in Managed Service for Apache Flink ([62c491f](https://github.com/aws/aws-sdk-js-v3/commit/62c491f2980040aafd8d427d36ca8fcad9efe9ce))
* **client-mailmanager:** Amazon SES Mail Manager now supports optional TLS policy for accepting unencrypted connections and mTLS authentication for ingress endpoints with configurable trust stores. Two new rule actions are available, Bounce for sending non-delivery reports and Lambda invocation for custom email processing. ([1fc4082](https://github.com/aws/aws-sdk-js-v3/commit/1fc4082695a946d537f893f5b7e90d032210ac28))
* **client-marketplace-agreement:** This release adds 8 new APIs for AWS Marketplace sellers. 4 APIs for Cancellations (Send, List, Get, Cancel action on AgreementCancellationRequest), 3 APIs for Billing Adjustments (BatchCreate, List, Get action on BillingAdjustmentRequest), and 1 API to List Invoices (ListAgreementInvoiceLineItems) ([4ac5471](https://github.com/aws/aws-sdk-js-v3/commit/4ac54712b6d369a86c275fcde12b74eb9d1a44b3))
* **client-observabilityadmin:** This release adds the Bedrock and Security Hub resource types for Omnia Enablement launch for March 31. ([6614c09](https://github.com/aws/aws-sdk-js-v3/commit/6614c09e028ea6e89526c53af149144894e16a05))
* **client-odb:** Adds support for EC2 Placement Group integration with ODB Network. The GetOdbNetwork and ListOdbNetworks API responses now include the ec2PlacementGroupIds field. ([33da2f5](https://github.com/aws/aws-sdk-js-v3/commit/33da2f5adc47677e228d714c014883fec39d928d))
* **client-opensearch:** Support RegisterCapability, GetCapability, DeregisterCapability API for AI Assistant feature management for OpenSearch UI Applications ([e1738b0](https://github.com/aws/aws-sdk-js-v3/commit/e1738b0aea7f04d6dcb89b79cb7fcdef145b5be3))
* **client-organizations:** Added Path field to Account and OrganizationalUnit objects in AWS Organizations API responses. ([8699003](https://github.com/aws/aws-sdk-js-v3/commit/8699003ab4a532bf8421e0dd91d527640ac59e7e))
* **client-partnercentral-selling:** Adding EURO Currency for MRR Amount ([807094b](https://github.com/aws/aws-sdk-js-v3/commit/807094be97f4fe5968115509bbb90f2f6483f6ca))
* **client-pinpoint-sms-voice-v2:** This release adds RCS for Business messaging and Notify support. RCS lets you create and manage agents, send and receive messages in the US and Canada via SendTextMessage API, and configure SMS fallback. Notify lets you send templated OTP messages globally in minutes with no phone number required. ([11d660c](https://github.com/aws/aws-sdk-js-v3/commit/11d660ce020103aa83663bdacde51d73a762940c))
* **client-quicksight:** Adds StartAutomationJob and DescribeAutomationJob APIs for automation jobs. Adds three custom permission capabilities that allow admins to control whether users can manage Spaces and chat agents. Adds an OAuthClientCredentials structure to provide OAuth 2.0 client credentials inline to data sources. ([4f13aba](https://github.com/aws/aws-sdk-js-v3/commit/4f13aba28d3aae9e6c164de6e5f778567a776cac))
* **client-s3-control:** Adding an optional auditContext parameter to S3 Access Grants credential vending API GetDataAccess to enable job-level audit correlation in S3 CloudTrail logs ([78652f0](https://github.com/aws/aws-sdk-js-v3/commit/78652f0bae7e808c0b72cbccdf999e242948047b))
* **client-s3:** Add Bucket Metrics configuration support to directory buckets ([67ff7cc](https://github.com/aws/aws-sdk-js-v3/commit/67ff7cc5dd608937694b7d1e10aceef09e611011))
* **client-s3tables:** S3 Tables now supports nested types when creating tables. Users can define complex column schemas using struct, list, and map types. These types can be composed together to model complex, hierarchical data structures within table schemas. ([b105320](https://github.com/aws/aws-sdk-js-v3/commit/b105320b3b115e52d285f8ed2a3f271d6888b66d))
* **client-securityagent:** AWS Security Agent is a service that proactively secures applications throughout the development lifecycle with automated security reviews and on-demand penetration testing. ([744d89a](https://github.com/aws/aws-sdk-js-v3/commit/744d89a126f05c7c05ccc1802da794966a526508))
* **client-sustainability:** This is the first release of the AWS Sustainability SDK, which enables customers to access their sustainability impact data via API. ([bfa7251](https://github.com/aws/aws-sdk-js-v3/commit/bfa725183ddc7b787e2d38f6fadd937e783aa812))
* **clients:** update client endpoints as of 2026-03-31 ([461ac73](https://github.com/aws/aws-sdk-js-v3/commit/461ac73c52d096342eccc733e232d339e8942ab8))





# [3.1020.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1019.0...v3.1020.0) (2026-03-30)


### Features

* **client-appstream:** Add support for URL Redirection ([16a9f16](https://github.com/aws/aws-sdk-js-v3/commit/16a9f16e6fe4b5e6c31e0dd85747bf3282cd6b4a))
* **client-auto-scaling:** Adds support for new instance lifecycle states introduced by the instance lifecycle policy and replace root volume features. ([ba89a3d](https://github.com/aws/aws-sdk-js-v3/commit/ba89a3d5e34b5b4253eca348e6781450a77168f4))
* **client-bedrock-agentcore:** Adds Ground Truth support for AgentCore Evaluations (Evaluate) ([7d2bcbf](https://github.com/aws/aws-sdk-js-v3/commit/7d2bcbf65452c9b6285f9e26b539a9c2b1c74051))
* **client-cloudwatch-logs:** Adds Lookup Tables to CloudWatch Logs for log enrichment using CSV key-value data with KMS encryption support. ([fb89aea](https://github.com/aws/aws-sdk-js-v3/commit/fb89aeac17441432e30766761117aa3ce9aeef24))
* **client-deadline:** AWS Deadline Cloud now supports three new fleet auto scaling settings. With scale out rate, you can configure how quickly workers launch. With worker idle duration, you can set how long workers wait before shutting down. With standby worker count, you can keep idle workers ready for fast job start. ([6010b7a](https://github.com/aws/aws-sdk-js-v3/commit/6010b7a8ec4ae563b8fb71315836b6297ed1e523))
* **client-devops-agent:** AWS DevOps Agent General Availability. ([44e4c21](https://github.com/aws/aws-sdk-js-v3/commit/44e4c21623d87bbe944dfb0f2504a787897dd894))
* **client-ecs:** Adding Local Storage support for ECS Managed Instances by introducing a new field "localStorageConfiguration" for CreateCapacityProvider and UpdateCapacityProvider APIs. ([4b1dba9](https://github.com/aws/aws-sdk-js-v3/commit/4b1dba9774e3cb803aa73d377acdb487e3c692ef))
* **client-opensearch:** Added Cluster Insights API's In OpenSearch Service SDK. ([90168a0](https://github.com/aws/aws-sdk-js-v3/commit/90168a0000cd23b8daa5d34ac07a552f090530fd))
* **client-partnercentral-account:** KYB Supplemental Form enables partners who fail business verification to submit additional details and supporting documentation through a self-service form, triggering an automated re-verification without requiring manual intervention from support teams. ([3b4f484](https://github.com/aws/aws-sdk-js-v3/commit/3b4f484fd757953f40a2dc566314f68a5bbb65e8))
* **client-sagemaker:** Added support for placement strategy and consolidation for SageMaker inference component endpoints. Customers can now configure how inference component copies are distributed across instances and availability zones (AZs), and enable automatic consolidation to optimizes resource utilization. ([77f2e66](https://github.com/aws/aws-sdk-js-v3/commit/77f2e662173a298f92ea0ffc747f10cbf3ce03e1))
* **clients:** update client endpoints as of 2026-03-30 ([2b7cac6](https://github.com/aws/aws-sdk-js-v3/commit/2b7cac68884aa566fb6cc7680957a511c48524f5))





# [3.1019.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1018.0...v3.1019.0) (2026-03-27)


### Features

* **client-bedrock-agentcore-control:** Adds support for custom code-based evaluators using customer-managed Lambda functions. ([42dda2d](https://github.com/aws/aws-sdk-js-v3/commit/42dda2d1d1d60be1de02a9a11c82bf8b30d1c8e7))
* **client-bedrock-agentcore:** Adding AgentCore Code Interpreter Node.js Runtime Support with an optional runtime field ([5a5bd74](https://github.com/aws/aws-sdk-js-v3/commit/5a5bd7431d23c50120ab155cc73f0e18dff3db97))
* **client-omics:** AWS HealthOmics now supports VPC networking, allowing users to connect runs to external resources with NAT gateway, AWS VPC resources, and more. New Configuration APIs support configuring VPC settings. StartRun API now accepts networkingMode and configurationName parameters to enable VPC networking. ([a16cb60](https://github.com/aws/aws-sdk-js-v3/commit/a16cb606468bb8b01665ed727e6a6575e1f5d04f))





# [3.1018.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1017.0...v3.1018.0) (2026-03-26)


### Features

* **client-bcm-data-exports:** With this release we are providing an option to accounts to have their export delivered to an S3 bucket that is not owned by the account. ([ec48160](https://github.com/aws/aws-sdk-js-v3/commit/ec48160efacd618fb6624fb76c379bcbd88e8192))
* **client-cloudwatch-logs:** This release adds parameter support to saved queries in CloudWatch Logs Insights. Define reusable query templates with named placeholders, invoke them using start query. Available in Console, CLI and SDK ([2c09ac4](https://github.com/aws/aws-sdk-js-v3/commit/2c09ac48f254ea7b0f5915cad5d387197e589bb7))
* **client-emr:** Add StepExecutionRoleArn to RunJobFlow API ([59a0577](https://github.com/aws/aws-sdk-js-v3/commit/59a0577f97bf21a8cce255d97bb9cd57e1ee60a1))
* **client-sagemaker:** Release support for ml.r5d.16xlarge instance types for SageMaker HyperPod ([db6db4e](https://github.com/aws/aws-sdk-js-v3/commit/db6db4e38b768b849146ecf1eee964457be37887))
* **client-timestream-influxdb:** Timestream for InfluxDB adds support for customer defined maintenance windows. This allows customers to define maintenance schedule during resource creation and updates ([22d9a2c](https://github.com/aws/aws-sdk-js-v3/commit/22d9a2c89b71410267d00164d0abce2b1ed129a3))
* **clients:** update client endpoints as of 2026-03-26 ([bc19bda](https://github.com/aws/aws-sdk-js-v3/commit/bc19bda4a875239b26e5d624d0e8809f40290e13))





# [3.1017.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1016.0...v3.1017.0) (2026-03-25)


### Features

* **client-apigatewayv2:** Added DISABLE IN PROGRESS and DISABLE FAILED Portal statuses. ([1dc7ba2](https://github.com/aws/aws-sdk-js-v3/commit/1dc7ba26bbc78b1b6582af30da6e1b281bc14d86))
* **client-application-signals:** This release adds support for creating SLOs on RUM appMonitors, Synthetics canaries and services. ([324daae](https://github.com/aws/aws-sdk-js-v3/commit/324daaeb9be6a45898df9add3235616b1dea914e))
* **client-marketplace-agreement:** The Variable Payments APIs enable AWS Marketplace Sellers to perform manage their payment requests (send, get, list, cancel). ([b9f85b1](https://github.com/aws/aws-sdk-js-v3/commit/b9f85b12b18b5155027e8d3da25e52ef1c416ecd))
* **client-polly:** Add support for Mu-law and A-law codecs for output format ([16b8ce2](https://github.com/aws/aws-sdk-js-v3/commit/16b8ce279c691ad1019df73336cf6560bf4a38fa))
* **client-uxc:** GA release of AccountCustomizations, used to manage account color, visible services, and visible regions settings in the AWS Management Console. ([0258442](https://github.com/aws/aws-sdk-js-v3/commit/025844285b406c33a2b3d35f62208778454dd33b))
* **clients:** update client endpoints as of 2026-03-25 ([289b4f1](https://github.com/aws/aws-sdk-js-v3/commit/289b4f177ac1d54c450910eb7ad941f5b45e8141))





# [3.1016.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1015.0...v3.1016.0) (2026-03-24)


### Features

* **client-bedrock-agentcore-control:** Adds SDK support for 1) Persist session state in AgentCore Runtime via filesystemConfigurations in CreateAgentRuntime, UpdateAgentRuntime, and GetAgentRuntime APIs, 2) Optional name-based filtering on AgentCore ListBrowserProfiles API. ([72c67eb](https://github.com/aws/aws-sdk-js-v3/commit/72c67eb252af3b2167082ce68a5f5e1023aea88f))
* **client-mediapackagev2:** Reduces the minimum allowed value for startOverWindowSeconds from 60 to 0, allowing customers to effectively disable the start-over window. ([7f93210](https://github.com/aws/aws-sdk-js-v3/commit/7f932107bda9f1d8b93d50507611b8a923874bd2))
* **client-opensearchserverless:** Adds support for updating the vector options field for existing collections. ([e2ec053](https://github.com/aws/aws-sdk-js-v3/commit/e2ec053d3821aee17fd2d446c4fbc696097925a6))
* **client-pcs:** This release adds support for custom slurmdbd and cgroup configuration in AWS PCS. Customers can now specify slurmdbd and cgroup settings to configure database accounting and reporting for their HPC workloads, and control resource allocation and limits for compute jobs. ([e95c806](https://github.com/aws/aws-sdk-js-v3/commit/e95c80624e95219f2a6bcd504ac14f11794b7b97))
* **client-rds:** Adds support in Aurora PostgreSQL serverless databases for express configuration based creation through WithExpressConfiguration in CreateDbCluster API, and for restoring clusters using RestoreDBClusterToPointInTime and RestoreDBClusterFromSnapshot APIs. ([d1038f0](https://github.com/aws/aws-sdk-js-v3/commit/d1038f0fbf08a9172422088a9773e780df8f7d0d))





# [3.1015.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1014.0...v3.1015.0) (2026-03-23)


### Bug Fixes

* **core/protocols:** use composite error registry for error handling, revert default error message to "UnknownError" ([#7877](https://github.com/aws/aws-sdk-js-v3/issues/7877)) ([55f7726](https://github.com/aws/aws-sdk-js-v3/commit/55f7726977a2c87d58e7591ba22f6e77b1c55617))


### Features

* **client-batch:** AWS Batch AMI Visibility feature support. Adds read-only batchImageStatus to Ec2Configuration to provide visibility on the status of Batch-vended AMIs used by Compute Environments. ([a1eace0](https://github.com/aws/aws-sdk-js-v3/commit/a1eace0cafa76426e8d22f4e14026e61966b2c7c))
* **client-connectcases:** You can now use the UpdateRelatedItem API to update the content of comments and custom related items associated with a case. ([ca3fcd6](https://github.com/aws/aws-sdk-js-v3/commit/ca3fcd61fb66ea865995cc672af99e38e73bebc3))
* **client-lightsail:** Add support for tagging of ContactMethod resource type ([9e5c87c](https://github.com/aws/aws-sdk-js-v3/commit/9e5c87c65cec72f7c9b4456d02c9468a841cf5c6))
* **client-omics:** Adds support for batch workflow runs in Amazon Omics, enabling users to submit, manage, and monitor multiple runs as a single batch. Includes APIs to create, cancel, and delete batches, track submission statuses and counts, list runs within a batch, and configure default settings. ([5dd6fe2](https://github.com/aws/aws-sdk-js-v3/commit/5dd6fe2fd2005543bb5cb79dce382ddc3ab86985))





# [3.1014.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1013.0...v3.1014.0) (2026-03-20)


### Features

* **client-dynamodb:** Adding ReplicaArn to ReplicaDescription of a global table replica ([51c2c17](https://github.com/aws/aws-sdk-js-v3/commit/51c2c17a869241002cbe1b2c8748217467ae5014))
* **client-opensearch:** Added support for Amazon Managed Service for Prometheus (AMP) as a connected data source in OpenSearch UI. Now users can analyze Prometheus metrics in OpenSearch UI without data copy. ([c9bdbb5](https://github.com/aws/aws-sdk-js-v3/commit/c9bdbb54cea3fcd0e6a703ad33d7c6a72c79d6e2))
* **client-verifiedpermissions:** Adds support for Policy Store Aliases, Policy Names, and Policy Template Names. These are customizable identifiers that can be used in place of Policy Store ids, Policy ids, and Policy Template ids respectively in Amazon Verified Permissions APIs. ([c8fe185](https://github.com/aws/aws-sdk-js-v3/commit/c8fe1858d26a9910832f210f4d6177d567bee5fb))
* **clients:** update client endpoints as of 2026-03-20 ([6450a12](https://github.com/aws/aws-sdk-js-v3/commit/6450a12d4635c548e24f09ce6ec3da07a3394b41))





# [3.1013.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1012.0...v3.1013.0) (2026-03-19)


### Bug Fixes

* **xml-builder:** configure maxTotalExpansions on fast-xml-parser ([#7868](https://github.com/aws/aws-sdk-js-v3/issues/7868)) ([2ad1477](https://github.com/aws/aws-sdk-js-v3/commit/2ad14770e35ed1eed1918657ae7670dffcf980a0))


### Features

* **client-batch:** AWS Batch now supports quota management, enabling administrators to allocate shared compute resources across teams and projects through quota shares with capacity limits, resource-sharing strategies, and priority-based preemption - currently available for SageMaker Training job queues. ([3e695b9](https://github.com/aws/aws-sdk-js-v3/commit/3e695b9aad1eb973d79cd78d7993c0d93cc789af))
* **client-bedrock-agentcore-control:** Adds support for the following new features. 1. Enterprise Policies support for AgentCore Browser Tool. 2. Root CA Configuration support for AgentCore Browser Tool and Code Interpreter. ([d286f51](https://github.com/aws/aws-sdk-js-v3/commit/d286f51fab030d5f5cc496934a440386a0d49927))
* **client-bedrock-agentcore:** This release includes SDK support for the following new features on AgentCore Built In Tools.  1. Enterprise Policies for AgentCore Browser Tool. 2. Root CA Configuration Support for AgentCore Browser Tool and Code Interpreter. 3. API changes to AgentCore Browser Profile APIs ([088f058](https://github.com/aws/aws-sdk-js-v3/commit/088f0580ba0fdaca8c1d86daa6317a4c1a9047c1))
* **client-ec2:** Amazon EC2 Fleet instant mode now supports launching instances into Interruptible Capacity Reservations, enabling customers to use spare capacity shared by Capacity Reservation owners within their AWS Organization. ([5ae4a55](https://github.com/aws/aws-sdk-js-v3/commit/5ae4a552d7d650af248213fc7187842e89460820))
* **client-observabilityadmin:** Adding a new field in the CreateCentralizationRuleForOrganization, UpdateCentralizationRuleForOrganization API and updating the GetCentralizationRuleForOrganization API response to include the new field ([f8dcb3a](https://github.com/aws/aws-sdk-js-v3/commit/f8dcb3a1ee2be84a7bfc64e099248f96baffe3e9))
* **client-polly:** Added bi-directional streaming functionality through a new API, StartSpeechSynthesisStream. This API allows streaming input text through inbound events and receiving audio as part of an output stream simultaneously. ([581bf84](https://github.com/aws/aws-sdk-js-v3/commit/581bf8494d5e76aa05b5ec3f472269db2a25461a))
* **clients:** update client endpoints as of 2026-03-19 ([485aa08](https://github.com/aws/aws-sdk-js-v3/commit/485aa0860360c4f0b33f778a6df7043300199776))





# [3.1012.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1011.0...v3.1012.0) (2026-03-18)


### Features

* **client-ec2:** The DescribeInstanceTypes API now returns default connection tracking timeout values for TCP, UDP, and UDP stream via the new connectionTrackingConfiguration field on NetworkInfo. ([0ee6f8d](https://github.com/aws/aws-sdk-js-v3/commit/0ee6f8d16b85c73f7370a06a8edcc527011d45de))
* **client-mediaconvert:** This update adds additional bitrate options for Dolby AC-4 audio outputs. ([06f6a76](https://github.com/aws/aws-sdk-js-v3/commit/06f6a76a246f9ac22b01f02b5fb619fde95de294))





# [3.1011.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1010.0...v3.1011.0) (2026-03-17)


### Features

* **client-bedrock-agentcore-control:** Deprecating namespaces field and adding namespaceTemplates. ([6f765c0](https://github.com/aws/aws-sdk-js-v3/commit/6f765c064a447c54da3ef2333b755a795515fb86))
* **client-emr:** Add S3LoggingConfiguration to Control LogUploads ([8d30ccf](https://github.com/aws/aws-sdk-js-v3/commit/8d30ccf458f4738b1d83f3db8a8c2e955da0bba1))
* **client-glue:** Provide approval to overwrite existing Lake Formation permissions on all child resources with the default permissions specified in 'CreateTableDefaultPermissions' and 'CreateDatabaseDefaultPermissions' when updating catalog. Allowed values are ["Accept","Deny"] . ([949f557](https://github.com/aws/aws-sdk-js-v3/commit/949f5573dac85798065ac384fbe8051a0340de8b))





# [3.1010.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1009.0...v3.1010.0) (2026-03-16)


### Features

* **client-bedrock-agentcore-control:** Supporting hosting of public ECR Container Images in AgentCore Runtime ([a3ca4b6](https://github.com/aws/aws-sdk-js-v3/commit/a3ca4b6eeb2d41a5dfac7880c095d937426498db))
* **client-bedrock-agentcore:** Provide support to perform deterministic operations on agent runtime through shell command executions via the new InvokeAgentRuntimeCommand API ([14fb557](https://github.com/aws/aws-sdk-js-v3/commit/14fb5577676ccd1dded7633ce1efe6efcc3b1632))
* **client-bedrock:** You can now generate policy scenarios on demand using the new GENERATE POLICY SCENARIOS build workflow type. Scenarios will no longer be automatically generated during INGEST CONTENT, REFINE POLICY, and IMPORT POLICY workflows, resulting in faster completion times for these operations. ([e9c8b9c](https://github.com/aws/aws-sdk-js-v3/commit/e9c8b9cecc7b2f89b3d4c89923927dc141ca09a3))
* **client-ecs:** Amazon ECS now supports configuring whether tags are propagated to the EC2 Instance Metadata Service (IMDS) for instances launched by the Managed Instances capacity provider. This gives customers control over tag visibility in IMDS when using ECS Managed Instances. ([f165f18](https://github.com/aws/aws-sdk-js-v3/commit/f165f183a152e4de4138faba366871a3b9503d9e))
* **clients:** update client endpoints as of 2026-03-16 ([6ae1dd8](https://github.com/aws/aws-sdk-js-v3/commit/6ae1dd8ab89d6ceb3dc82fef427f7d4f46fb0995))
* **middleware-flexible-checksums:** allow custom checksums to be used in responses ([#7849](https://github.com/aws/aws-sdk-js-v3/issues/7849)) ([213defa](https://github.com/aws/aws-sdk-js-v3/commit/213defa2e2a2b1a1e45cdd301e8103f09cc1d43a))





# [3.1009.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1008.0...v3.1009.0) (2026-03-13)


### Features

* **client-api-gateway:** API Gateway now supports an additional security policy "SecurityPolicy-TLS13-1-2-FIPS-PFS-PQ-2025-09" for REST APIs and custom domain names. The new policy is compliant with TLS 1.3, Federal Information Processing Standards (FIPS), Perfect Forward Secrecy (PFS), and post-quantum (PQ) cryptography ([663ec58](https://github.com/aws/aws-sdk-js-v3/commit/663ec5888aab7b276a6bf39d86286be93a583b73))
* **client-config-service:** Fix pagination support for DescribeConformancePackCompliance, and update OrganizationConfigRule InputParameters max length to match ConfigRule. ([469faf6](https://github.com/aws/aws-sdk-js-v3/commit/469faf6f5a8bc5b2124c2e7e3e31e95693bf8fe4))
* **client-connect:** Deprecating PredefinedNotificationID field ([20194f1](https://github.com/aws/aws-sdk-js-v3/commit/20194f10f25d5f0afe8639108a2ff0f161571d55))
* **client-gameliftstreams:** Feature launch that enables customers to connect streaming sessions to their own VPCs running in AWS. ([9b2dfe8](https://github.com/aws/aws-sdk-js-v3/commit/9b2dfe80b10a0f8bdaf39e4ac6184f01a1fad23b))
* **client-glue:** Add QuerySessionContext to BatchGetPartitionRequest ([e39731f](https://github.com/aws/aws-sdk-js-v3/commit/e39731faa4e134c6f6ab6704940f2e2a9c7bb56e))
* **client-ivs-realtime:** Updates maximum reconnect window seconds from 60 to 300 for participant replication ([e384ea1](https://github.com/aws/aws-sdk-js-v3/commit/e384ea14b8e2672b599b0c2ca7340c254c4f7105))
* **client-mediaconvert:** This update adds support for Dolby AC-4 audio output, frame rate conversion between non-Dolby Vision inputs to Dolby Vision outputs, and clear lead CMAF HLS output. ([11615b9](https://github.com/aws/aws-sdk-js-v3/commit/11615b9fb746fa82a001a19fd5620eba8eb951fe))
* **client-mgn:** Network Migration APIs are now publicly available for direct programmatic access. Customers can now call Network Migration APIs directly without going through AWS Transform (ATX), enabling automation, integration with existing tools, and self-service migration workflows. ([2c814ea](https://github.com/aws/aws-sdk-js-v3/commit/2c814ea89efdffef4721d485021041b21d1f0dbb))
* **client-quicksight:** The change adds a new capability named ManageSharedFolders in Custom Permissions ([cffca16](https://github.com/aws/aws-sdk-js-v3/commit/cffca16fe99af1027665be549ab3ba01a0312603))
* **clients:** update client endpoints as of 2026-03-13 ([079cb59](https://github.com/aws/aws-sdk-js-v3/commit/079cb59479a663a63d859323cdb0ca7e96aec329))





# [3.1008.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1007.0...v3.1008.0) (2026-03-12)


### Bug Fixes

* **util-user-agent-node:** read typescript version from app package.json ([#7840](https://github.com/aws/aws-sdk-js-v3/issues/7840)) ([5253141](https://github.com/aws/aws-sdk-js-v3/commit/5253141cd68e5be1bf6d3b5cd282bd5747450af2))


### Features

* **client-datasync:** DataSync's 3 location types, Hadoop Distributed File System (HDFS), FSx for Windows File Server (FSx Windows), and FSx for NetApp ONTAP (FSx ONTAP) now have credentials managed via Secrets Manager, which may be encrypted with service keys or be configured to use customer-managed keys or secret. ([dee9cb3](https://github.com/aws/aws-sdk-js-v3/commit/dee9cb3e5c46b80d97229b7dfe2b1a99e87bc679))
* **client-ecr:** Add Chainguard to PTC upstreamRegistry enum ([4f3727d](https://github.com/aws/aws-sdk-js-v3/commit/4f3727d384f02366e61a24cfd5a208fe393ae926))
* **client-s3:** Adds support for account regional namespaces for general purpose buckets. The account regional namespace is a reserved subdivision of the global bucket namespace where only your account can create general purpose buckets. ([1791028](https://github.com/aws/aws-sdk-js-v3/commit/179102877b8b119d9662e3bcb791ebafca57de2d))
* **clients:** update client endpoints as of 2026-03-12 ([c33f9da](https://github.com/aws/aws-sdk-js-v3/commit/c33f9da7edefde96685fa9d7398757d533134da9))





# [3.1007.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1006.0...v3.1007.0) (2026-03-11)


### Features

* **client-customer-profiles:** Today, Amazon Connect is announcing the ability to filter (include or exclude) recommendations based on properties of items and interactions. ([810cc7b](https://github.com/aws/aws-sdk-js-v3/commit/810cc7be006e03a1e9d504eb6ba5846ddb9b502e))
* **client-eks:** Adds support for a new tier in controlPlaneScalingConfig on EKS Clusters. ([289c5b7](https://github.com/aws/aws-sdk-js-v3/commit/289c5b711cb9d02f85fe08cb429406f71575bdd4))
* **client-polly:** Added support for the new voices - Ambre (fr-FR), Beatrice (it-IT), Florian (fr-FR), Lennart (de-DE), Lorenzo (it-IT) and Tiffany (en-US). They are available as a Generative voices only. ([44817c3](https://github.com/aws/aws-sdk-js-v3/commit/44817c34a191b0c4b0e2b4edf8ede18001ca374a))
* **client-sagemaker:** SageMaker training plans allow you to extend your existing training plans to avoid workload interruptions without workload reconfiguration. When a training plan is approaching expiration, you can extend it directly through the SageMaker AI console or programmatically using the API or AWS CLI. ([85b667e](https://github.com/aws/aws-sdk-js-v3/commit/85b667e0f5c7974e109f2d38827a658c87521de4))
* **client-simpledbv2:** Introduced Amazon SimpleDB export functionality enabling domain data export to S3 in JSON format. Added three new APIs StartDomainExport, GetExport, and ListExports via SimpleDBv2 service. Supports cross-region exports and KMS encryption. ([0de020c](https://github.com/aws/aws-sdk-js-v3/commit/0de020c7f4cb0659534697c8909a386c31545c34))
* **client-workspaces:** Added WINDOWS SERVER 2025 OperatingSystemName. ([bf045be](https://github.com/aws/aws-sdk-js-v3/commit/bf045be8f6ee366cdf00e636fa37ce18ec031682))
* **clients:** update client endpoints as of 2026-03-11 ([b7f094d](https://github.com/aws/aws-sdk-js-v3/commit/b7f094d39abcfa2e0fd9ad50a816f2c8e3ea1315))





# [3.1006.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1005.0...v3.1006.0) (2026-03-10)


### Features

* **client-bedrock-agentcore-control:** Adding first class support for AG-UI protocol in AgentCore Runtime. ([c092730](https://github.com/aws/aws-sdk-js-v3/commit/c092730e0cac85beff2d47c36bebb2cabac83dbc))
* **client-connectcases:** Added functionality for the Required and Hidden case rule types to be conditionally evaluated on up to 5 conditions. ([40ed59f](https://github.com/aws/aws-sdk-js-v3/commit/40ed59fc97a17ab7edd0d177592a68fe36cd9fcb))
* **client-kafka:** Add dual stack endpoint to SDK ([574d2c5](https://github.com/aws/aws-sdk-js-v3/commit/574d2c5bc6df3aab480ae753f4f61900d81754e6))
* **client-lex-models-v2:** This release introduces a new generative AI feature called Lex Bot Analyzer. This feature leverage AI to analyze the bot configuration against AWS Lex best practices to identify configuration issues and provides recommendations. ([d670f6b](https://github.com/aws/aws-sdk-js-v3/commit/d670f6b3be1ae3b6da9276da288f5aafb978c521))





# [3.1005.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1004.0...v3.1005.0) (2026-03-09)


### Features

* **client-mgn:** Adds support for new storeSnapshotOnLocalZone field in ReplicationConfiguration and updateReplicationConfiguration ([c7d93e0](https://github.com/aws/aws-sdk-js-v3/commit/c7d93e0dd4ecccafe22f9cc3af740e02aa049105))
* **client-opensearch:** This change enables cross-account and cross-region access for DataSources. Customers can now define access policies on their datasources to allow other AWS accounts to access and query their data. ([ddb8f9d](https://github.com/aws/aws-sdk-js-v3/commit/ddb8f9d8c0623c13421f17c1ebf07ee93a3bda86))
* **client-route53globalresolver:** Adds support for dual stack Global Resolvers and Dictionary-based Domain Generation Firewall Advanced Protection. ([8604ad9](https://github.com/aws/aws-sdk-js-v3/commit/8604ad97377ee5ed1d359d416639c5b9625942e1))





# [3.1004.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1003.0...v3.1004.0) (2026-03-06)


### Bug Fixes

* **build:** fix package release ordering ([#7829](https://github.com/aws/aws-sdk-js-v3/issues/7829)) ([cc6da58](https://github.com/aws/aws-sdk-js-v3/commit/cc6da58f9b94de5e1bd45b6486fecdf222f669d1))
* **middleware-user-agent:** use retry strategy mode property instead of legacy fallback ([#7811](https://github.com/aws/aws-sdk-js-v3/issues/7811)) ([db78633](https://github.com/aws/aws-sdk-js-v3/commit/db7863372abba6035e12aaf8a015f9f6bc020bbb))


### Features

* **client-appintegrations:** This release adds support for webhooks, allowing customers to create an Event Integration with a webhook source. ([c86ed4e](https://github.com/aws/aws-sdk-js-v3/commit/c86ed4e1a4295d2654b2cc1ef8e195a6a97bcb58))
* **client-bcm-data-exports:** Fixed wrong endpoint resolutions in few regions. Added AWS CFN resource schema for BCM Data Exports. Added max value validation for pagination parameter. Fixed ARN format validation for BCM Data Exports resources. Updated size constraints for table properties. Added AccessDeniedException error. ([23fdf99](https://github.com/aws/aws-sdk-js-v3/commit/23fdf9940dbeb9fab236e565d4ef529779a19862))
* **client-bedrock-agentcore-control:** Adds support for streaming memory records in AgentCore Memory ([1746857](https://github.com/aws/aws-sdk-js-v3/commit/174685704e07d5b8cbb6414cd6d9f2f6a85736c3))
* **client-bedrock:** Amazon Bedrock Guardrails account-level enforcement APIs now support lists for model inclusion and exclusion from guardrail enforcement. ([63b3598](https://github.com/aws/aws-sdk-js-v3/commit/63b3598691d116dadd5c389362be5369d5901a39))
* **client-connect:** Amazon Connect now supports the ability to programmatically configure and run automated tests for contact center experiences for Chat. Integrate testing into CICD pipelines, run multiple tests at scale, and retrieve results via API to automate validation of chat interactions and workflows. ([696614a](https://github.com/aws/aws-sdk-js-v3/commit/696614ae8195f9ba2f9d3366e2d27e3aacf45726))
* **client-deadline:** AWS Deadline Cloud now supports cost scale factors for farms, enabling studios to adjust reported costs to reflect their actual rendering economics. Adjusted costs are reflected in Deadline Cloud's Usage Explorer and Budgets. ([16f6d51](https://github.com/aws/aws-sdk-js-v3/commit/16f6d5104bf57a9d034affe12f33d4f424c7ed0f))
* **client-gameliftstreams:** Added new Gen6 stream classes based on the EC2 G6f instance family. These stream classes provide cost-optimized options for streaming well-optimized or lower-fidelity games on Windows environments. ([3ce882b](https://github.com/aws/aws-sdk-js-v3/commit/3ce882b68e004b3589f882c1d5fbb9443e07b5b1))
* **client-sesv2:** Adds support for longer email message header values, increasing the maximum length from 870 to 995 characters for RFC 5322 compliance. ([3a57303](https://github.com/aws/aws-sdk-js-v3/commit/3a573039fa760964ce4b8aef17b46b96183f3087))
* **clients:** update client endpoints as of 2026-03-06 ([8c6015c](https://github.com/aws/aws-sdk-js-v3/commit/8c6015c0d1c17e8807e3be1326377bcf2176efdd))





# [3.1003.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1002.0...v3.1003.0) (2026-03-05)


### Bug Fixes

* **nested-clients:** add bundler instructions for browser credential clients ([#7823](https://github.com/aws/aws-sdk-js-v3/issues/7823)) ([f32f353](https://github.com/aws/aws-sdk-js-v3/commit/f32f353945f0bda18e6518ec017f81ea6843f33e))


### Features

* **client-connecthealth:** Connect-Health SDK is AWS's unified SDK for the Amazon Connect Health offering. It allows healthcare developers to integrate purpose-built agents - such as patient insights, ambient documentation, and medical coding - into their existing applications, including EHRs, telehealth, and revenue cycle. ([454c6cb](https://github.com/aws/aws-sdk-js-v3/commit/454c6cb7d73b92d737c008a9d9ef7fdb6365d647))
* **client-ec2:** Added metadata field to CapacityAllocation. ([d7cce1c](https://github.com/aws/aws-sdk-js-v3/commit/d7cce1c2a1a299c49f16f9bc02ee88d904d723de))
* **client-guardduty:** Added MALICIOUS FILE to IndicatorType enum in MDC Sequence ([bb9d466](https://github.com/aws/aws-sdk-js-v3/commit/bb9d466281db2b1023129d249ed576bd94730b18))
* **client-mpa:** Updates to multi-party approval (MPA) service to add support for approval team baseline operations. ([e958154](https://github.com/aws/aws-sdk-js-v3/commit/e95815438c56f42e2ffa47962c1aaa3c82afeef8))
* **client-sagemaker:** Adds support for S3 Bucket Ownership validation for SageMaker Managed MLflow. ([b621656](https://github.com/aws/aws-sdk-js-v3/commit/b62165643e03cc036e13cd463cde57116f36b38b))
* **client-savingsplans:** Added support for OpenSearch and Neptune Analytics to Database Savings Plans. ([9e06391](https://github.com/aws/aws-sdk-js-v3/commit/9e0639134fff8635622886260fb2127daa8778de))
* **clients:** update client endpoints as of 2026-03-05 ([e9a8d8d](https://github.com/aws/aws-sdk-js-v3/commit/e9a8d8dea104165b03857c991d4e9e8ae4dec3a3))





# [3.1002.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1001.0...v3.1002.0) (2026-03-04)


### Bug Fixes

* **core/protocols:** preserve nulls in non-sparse collections ([#7800](https://github.com/aws/aws-sdk-js-v3/issues/7800)) ([bf3ffdf](https://github.com/aws/aws-sdk-js-v3/commit/bf3ffdf3a8b57737800abf9b3a1354b05583a6bc))
* **xhr-http-handler:** fix import delcaration of event emitter ([#7813](https://github.com/aws/aws-sdk-js-v3/issues/7813)) ([c5d6f26](https://github.com/aws/aws-sdk-js-v3/commit/c5d6f26a1cd65ef598a798c40217996a273a3a33))


### Features

* **client-connect:** Added support for configuring additional email addresses on queues in Amazon Connect. Agents can now select an outbound email address and associate additional email addresses for replying to or initiating emails. ([b79a4db](https://github.com/aws/aws-sdk-js-v3/commit/b79a4dbd20bc5f3bcf1c3a72ec6b3d0e1e94e6e0))
* **client-elastic-beanstalk:** As part of this release, Beanstalk introduce a new info type - analyze for request environment info and retrieve environment info operations. When customers request an Al analysis, Elastic Beanstalk runs a script on an instance in their environment and returns an analysis of events, health and logs. ([44048ce](https://github.com/aws/aws-sdk-js-v3/commit/44048ced6ccd02b2c986b530aa6068c849d8e1e4))
* **client-elasticsearch-service:** Adds support for DeploymentStrategyOptions. ([703a57c](https://github.com/aws/aws-sdk-js-v3/commit/703a57c5a1b582fb12712bf6620a56b358c8c1c7))
* **client-gamelift:** Amazon GameLift Servers now offers DDoS protection for Linux-based EC2 and Container Fleets on SDKv5. The player gateway proxy relay network provides traffic validation, per-player rate limiting, and game server IP address obfuscation all with negligible added latency and no additional cost. ([1fc4ece](https://github.com/aws/aws-sdk-js-v3/commit/1fc4ece8bfc7c7fa6fcde43ab1ad032a7e652375))
* **client-opensearch:** Adding support for DeploymentStrategyOptions ([cf6a881](https://github.com/aws/aws-sdk-js-v3/commit/cf6a881010a9ebaf56ff5fbf3a0cfa85358faae0))
* **client-quicksight:** Added several new values for Capabilities, increased visual limit per sheet from previous limit to 75, renamed Quick Suite to Quick in several places. ([c94f306](https://github.com/aws/aws-sdk-js-v3/commit/c94f306e60e69fc8dac17dae20a5c9c3dc984b29))





# [3.1001.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1000.0...v3.1001.0) (2026-03-03)


### Bug Fixes

* **util-user-agent-node:** validate typescript version for semver and strip metadata ([#7799](https://github.com/aws/aws-sdk-js-v3/issues/7799)) ([f5a49a1](https://github.com/aws/aws-sdk-js-v3/commit/f5a49a13f914fe7fb72c17bcd086f87da4335040))


### Features

* **client-bedrock-agentcore-control:** Support for AgentCore Policy GA ([b71557c](https://github.com/aws/aws-sdk-js-v3/commit/b71557c88842cd365b34327b7e147df3ce51b717))
* **client-cloudwatch-logs:** CloudWatch Logs updates- Added support for the PutBearerTokenAuthentication API to enable or disable bearer token authentication on a log group. For more information, see CloudWatch Logs API documentation. ([4efe87a](https://github.com/aws/aws-sdk-js-v3/commit/4efe87a38339cc60616d4edc1cb0b4b8bf82cc4e))
* **client-datazone:** Adding QueryGraph operation to DataZone SDK ([5aaa630](https://github.com/aws/aws-sdk-js-v3/commit/5aaa63006c0fbe1e9f3818cfe3cfeac0f297b19f))
* **client-partnercentral-channel:** Adds the Resold Unified Operations support plan and removes the Resold Business support plan in the CreateRelationship and UpdateRelationship APIs ([d87cfc9](https://github.com/aws/aws-sdk-js-v3/commit/d87cfc94d92d08069ef0b40ae0ea7cbf0f688a48))
* **client-sagemaker:** This release adds b300 and g7e instance types for SageMaker inference endpoints. ([823258f](https://github.com/aws/aws-sdk-js-v3/commit/823258f2e036ca7b892887be3414d7e9bbbcd673))
* **clients:** update client endpoints as of 2026-03-03 ([f063511](https://github.com/aws/aws-sdk-js-v3/commit/f0635119a01f3bf7ead12a29de45a8a40db24943))





# [3.1000.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.999.0...v3.1000.0) (2026-02-27)


### Features

* **client-arc-region-switch:** Post-Recovery Workflows enable customers to maintain comprehensive disaster recovery automation. This allows customer SREs and leadership to have complete recovery orchestration from failover through post-recovery preparation, ensuring Regions remain ready for subsequent recovery events. ([3abb520](https://github.com/aws/aws-sdk-js-v3/commit/3abb5202facd67fd9527cb60eae725fff8961142))
* **client-batch:** This feature allows customers to specify the minimum time (in minutes) that AWS Batch keeps instances running in a compute environment after all jobs on the instance complete ([25f4947](https://github.com/aws/aws-sdk-js-v3/commit/25f4947adc15dcb0d9f212492cbdf142cda71d06))
* **client-bedrock:** Added four new model lifecycle date fields, startOfLifeTime, endOfLifeTime, legacyTime, and publicExtendedAccessTime. Adds support for using the Converse API with Bedrock Batch inference jobs. ([29b1fe6](https://github.com/aws/aws-sdk-js-v3/commit/29b1fe6db67d7eb796f13ef4389e7bb7fff2473a))
* **client-cognito-identity-provider:** Cognito is introducing a two-secret rotation model for app clients, enabling seamless credential rotation without downtime. Dedicated APIs support passing in a custom secret. Custom secrets need to be at least 24 characters. This eliminates reconfiguration needs and reduces security risks. ([582a381](https://github.com/aws/aws-sdk-js-v3/commit/582a3813cab7d2451c432ad01c5963de5df5f769))
* **client-connect:** Deprecate EvaluationReviewMetadata's CreatedBy and CreatedTime, add EvaluationReviewMetadata's RequestedBy and RequestedTime ([df058de](https://github.com/aws/aws-sdk-js-v3/commit/df058ded3268f7f6e6f633e411d9131b9794c0bb))
* **client-customer-profiles:** This release introduces an optional SourcePriority parameter to the ProfileObjectType APIs, allowing you to control the precedence of object types when ingesting data from multiple sources. Additionally, WebAnalytics and Device have been added as new StandardIdentifier values. ([6166dfb](https://github.com/aws/aws-sdk-js-v3/commit/6166dfb71125b62795dc564894acbf5c7e6242fa))
* **client-health:** Updates the regex for validating availabilityZone strings used in the describe events filters. ([eded08f](https://github.com/aws/aws-sdk-js-v3/commit/eded08f6fc17241801b04a5718896ef2476578f9))
* **client-keyspacesstreams:** Added support for Change Data Capture (CDC) streams with Duration DataType. ([59b9432](https://github.com/aws/aws-sdk-js-v3/commit/59b943286312fc05729ea9187490c1558c88d726))
* **client-odb:** ODB Networking Route Management is a feature improvement which allows for implicit creation and deletion of EC2 Routes in the Peer Network Route Table designated by the customer via new optional input. This feature release is combined with Multiple App-VPC functionality for ODB Network Peering(s). ([d372d85](https://github.com/aws/aws-sdk-js-v3/commit/d372d85d42922bd3059659ad94af2a677f0236e2))
* **client-ram:** Resource owners can now specify ResourceShareConfiguration request parameter for CreateResourceShare API including RetainSharingOnAccountLeaveOrganization boolean parameter ([3cc0ca9](https://github.com/aws/aws-sdk-js-v3/commit/3cc0ca9da4da4345d13b45d6ca47019cd3ae3968))
* **client-transcribe-streaming:** AWS Transcribe Streaming now supports specifying a resumption window for the stream through the SessionResumeWindow parameter, allowing customers to reconnect to their streams for a longer duration beyond stream start time. ([56168c5](https://github.com/aws/aws-sdk-js-v3/commit/56168c57a66f87ae5d94db8a9158aeac27e0c2e6))





# [3.999.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.998.0...v3.999.0) (2026-02-26)


### Features

* **client-backup-gateway:** This release updates GetGateway API to include deprecationDate and softwareVersion in the response, enabling customers to track gateway software versions and upcoming deprecation dates. ([9dd68dd](https://github.com/aws/aws-sdk-js-v3/commit/9dd68ddc18d5f288921085fcdb26f5b34f295b81))
* **client-ec2:** Add c8id, m8id and hpc8a instance types. ([f49cb0c](https://github.com/aws/aws-sdk-js-v3/commit/f49cb0c1d0d17b719175aa0b9fc54b10c18efe84))
* **client-ecs:** Adding support for Capacity Reservations for ECS Managed Instances by introducing a new "capacityOptionType" value of "RESERVED" and new field "capacityReservations" for CreateCapacityProvider and UpdateCapacityProvider APIs. ([4a7cfd0](https://github.com/aws/aws-sdk-js-v3/commit/4a7cfd05ca2682bda2dbb5856d47b27563a56925))
* **client-marketplace-entitlement-service:** Added License Arn as a new optional filter for GetEntitlements and LicenseArn field in each entitlement in the response. ([b884b35](https://github.com/aws/aws-sdk-js-v3/commit/b884b35b49f5244c177a6ad24f423741887929e5))
* **client-marketplace-metering:** Added LicenseArn to ResolveCustomer response and BatchMeterUsage usage records. BatchMeterUsage now accepts LicenseArn in each UsageRecord to report usage at the license level. Added InvalidLicenseException error response for invalid license parameters. ([f5f5c09](https://github.com/aws/aws-sdk-js-v3/commit/f5f5c096e816e517098f601389e6e6ff2cba908e))
* **client-securityhub:** Security Hub added EXTENDED PLAN integration type to DescribeProductsV2 and added metadata.product.vendor name GroupBy support to GetFindingStatisticsV2 ([1d1c982](https://github.com/aws/aws-sdk-js-v3/commit/1d1c9825970e4b464ffc3f3573003a1c61f7b4a6))
* **util-user-agent-node:** populate typescript version in user agent when available ([#7786](https://github.com/aws/aws-sdk-js-v3/issues/7786)) ([0a5ab57](https://github.com/aws/aws-sdk-js-v3/commit/0a5ab579ac6a0496ba8b856562d76407b5666298))





# [3.998.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.997.0...v3.998.0) (2026-02-25)


### Features

* **client-ec2:** Add support for EC2 Capacity Blocks in Local Zones. ([7029db2](https://github.com/aws/aws-sdk-js-v3/commit/7029db2c62ee83aa511910fdfeb85ebfc9a481a1))
* **client-ecr:** Update repository name regex to comply with OCI Distribution Specification ([fa176d3](https://github.com/aws/aws-sdk-js-v3/commit/fa176d37b82665781e50135b41cc04fd9874cc71))
* **client-neptune:** Neptune global clusters now supports tags ([e3c73a0](https://github.com/aws/aws-sdk-js-v3/commit/e3c73a0f634d8d9282381a8c2b79c817bf0c7d2c))
* **client-wafv2:** AWS WAF now supports GetTopPathStatisticsByTraffic that provides aggregated statistics on the top URI paths accessed by bot traffic. Use this operation to see which paths receive the most bot traffic, identify the specific bots accessing them, and filter by category, organization, or bot name. ([68165e5](https://github.com/aws/aws-sdk-js-v3/commit/68165e555880efee2b1cfeedef75491c434e6825))
* **clients:** update client endpoints as of 2026-02-25 ([9bb005e](https://github.com/aws/aws-sdk-js-v3/commit/9bb005efed3c379c001a912a46b82c709cb668a8))
* **middleware-flexible-checksums:** allow custom checksum algorithm implementations ([#7746](https://github.com/aws/aws-sdk-js-v3/issues/7746)) ([34e99cd](https://github.com/aws/aws-sdk-js-v3/commit/34e99cdda62d79edeb7ca353d8ceabc60c68abda))





# [3.997.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.996.0...v3.997.0) (2026-02-24)


### Features

* **client-cloudwatch:** This release adds the APIs (PutAlarmMuteRule, ListAlarmMuteRules, GetAlarmMuteRule and DeleteAlarmMuteRule) to manage a new Cloudwatch resource, AlarmMuteRules. AlarmMuteRules allow customers to temporarily mute alarm notifications during expected downtime periods. ([cc014d1](https://github.com/aws/aws-sdk-js-v3/commit/cc014d1addd225c58492177047a88f045a0520df))
* **client-ec2:** Adds httpTokensEnforced property to ModifyInstanceMetadataDefaults API. Set per account or manage organization-wide using declarative policies to prevent IMDSv1-enabled instance launch and block attempts to enable IMDSv1 on existing IMDSv2-only instances. ([89d8e7e](https://github.com/aws/aws-sdk-js-v3/commit/89d8e7e9e19db2aaf746cf533b854befe840ce1e))
* **client-elasticsearch-service:** Fixed HTTP binding for DescribeDomainAutoTunes API to correctly pass request parameters as query parameters in the HTTP request. ([aff0c5e](https://github.com/aws/aws-sdk-js-v3/commit/aff0c5ebec8ffffa3889395fe7351b73313c232f))
* **client-elementalinference:** Initial GA launch for AWS Elemental Inference including capabilities of Smart Crop and Live Event Clipping ([592e5a7](https://github.com/aws/aws-sdk-js-v3/commit/592e5a73f9ae6464718b1031108e7634d09c9948))
* **client-medialive:** AWS Elemental MediaLive - Added support for Elemental Inference for Smart Cropping and Clipping features for MediaLive. ([967c712](https://github.com/aws/aws-sdk-js-v3/commit/967c712b99caf0598ffcb345d8b061bcced9dd3b))
* **client-observabilityadmin:** Adding a new field in the CreateCentralizationRuleForOrganization, UpdateCentralizationRuleForOrganization API and updating the GetCentralizationRuleForOrganization API response to include the new field ([7025fca](https://github.com/aws/aws-sdk-js-v3/commit/7025fca93eea0864ab9d0ae420073a29a12433e7))
* **client-opensearch:** Fixed HTTP binding for DescribeDomainAutoTunes API to correctly pass request parameters as query parameters in the HTTP request. ([5aaa8bc](https://github.com/aws/aws-sdk-js-v3/commit/5aaa8bc9e3aa075a67bb33b404de05d738077dbb))
* **client-partnercentral-selling:** Added support for filtering opportunities by target close date in the ListOpportunities API. You can now filter results to return opportunities with a target close date before or after a specified date, enabling more precise opportunity searches based on expected closure timelines. ([bf80322](https://github.com/aws/aws-sdk-js-v3/commit/bf803227a27ffe4811121fc488d2fc6db14835a3))
* **clients:** update client endpoints as of 2026-02-24 ([3f22faa](https://github.com/aws/aws-sdk-js-v3/commit/3f22faa1ffdf35c05f21e6106212d176b22f93cf))





# [3.996.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.995.0...v3.996.0) (2026-02-23)


### Bug Fixes

* **core:** handle empty error response body in AwsQuery protocol deserialization ([#7766](https://github.com/aws/aws-sdk-js-v3/issues/7766)) ([7d97314](https://github.com/aws/aws-sdk-js-v3/commit/7d973147197feb4321014df284a184d5d5667222))
* **protocols:** handle missing error.Error in queryCompat mode  ([#7758](https://github.com/aws/aws-sdk-js-v3/issues/7758)) ([15a27f9](https://github.com/aws/aws-sdk-js-v3/commit/15a27f99b8dadd6de7694cb82222403ac573856a)), closes [#7756](https://github.com/aws/aws-sdk-js-v3/issues/7756)
* **scripts:** disable Rollup externalLiveBindings to fix Jest auto-mocking ([#7767](https://github.com/aws/aws-sdk-js-v3/issues/7767)) ([95d1cc6](https://github.com/aws/aws-sdk-js-v3/commit/95d1cc6cd54feaeb2b6a40d71893b60d82b42b17))


### Features

* **client-bedrock:** Automated Reasoning checks in Amazon Bedrock Guardrails now support fidelity report generation. The new workflow type assesses policy coverage and accuracy against customer documents. The GetAutomatedReasoningPolicyBuildWorkflowResultAssets API adds support for the three new asset types. ([3fe6610](https://github.com/aws/aws-sdk-js-v3/commit/3fe66102044d2e40b3a7900931d504b4a005295c))
* **client-connectcases:** SearchCases API can now accept 25 fields in the request and response as opposed to the previous limit of 10. DeleteField's hard limit of 100 fields per domain has been lifted. ([21ae04f](https://github.com/aws/aws-sdk-js-v3/commit/21ae04f9eda396e1fbd3f23f3e00f59fc6816566))
* **client-datazone:** Add workflow properties support to connections APIs ([b76f82b](https://github.com/aws/aws-sdk-js-v3/commit/b76f82b319167baadecd1c4014c2a927a1aeb4b5))
* **client-dynamodb:** This change supports the creation of multi-account global tables. It adds one new arguments to UpdateTable, GlobalTableSettingsReplicationMode. ([8e185cb](https://github.com/aws/aws-sdk-js-v3/commit/8e185cb484ed3e1d5c1d0ee0feb402b7689b7fbc))
* **client-mediatailor:** Updated endpoint rule set for dualstack endpoints. Added a new opt-in option to log raw ad decision server requests for Playback Configurations. ([3068c8e](https://github.com/aws/aws-sdk-js-v3/commit/3068c8eea700ea3cf22dcd725e3aa948d9c1b75a))
* **client-quicksight:** Adds support for SEMISTRUCT to InputColumn Type ([581e9ea](https://github.com/aws/aws-sdk-js-v3/commit/581e9ea9821a2368098292b9b80626a7b48d1604))
* **client-wickr:** AWS Wickr now provides APIs to manage your Wickr OpenTDF integration. These APIs enable you to test and save your OpenTDF configuration allowing you to manage rooms based on Trusted Data Format attributes. ([750b4d8](https://github.com/aws/aws-sdk-js-v3/commit/750b4d862b2b480dde8959a4893016b173ad4e0d))
* **clients:** update client endpoints as of 2026-02-23 ([02d8340](https://github.com/aws/aws-sdk-js-v3/commit/02d83401666e4301b14489acce1218f2a2197101))





# [3.995.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.994.0...v3.995.0) (2026-02-20)


### Features

* **client-appstream:** Adding new attribute to disable IMDS v1 APIs for fleet, Image Builder and AppBlockBuilder instances. ([7202188](https://github.com/aws/aws-sdk-js-v3/commit/720218892a2c5eae9c5157e383a253d02a5b3959))
* **client-ecs:** Migrated to Smithy. No functional changes ([20258a5](https://github.com/aws/aws-sdk-js-v3/commit/20258a5ffedcaffdf80b85eeb66d5e00057de37d))
* **client-sagemaker-runtime:** Added support for S3OutputPathExtension and Filename parameters to the InvokeEndpointAsync API to allow users to customize the S3 output path and file name for async inference response payloads. ([edac3d7](https://github.com/aws/aws-sdk-js-v3/commit/edac3d730ce23289651582209425f567912be4fd))
* **client-signer-data:** This release introduces AWS Signer Data Plane SDK client supporting GetRevocationStatus API. The new client enables AWS PrivateLink connectivity with both private DNS and VPC endpoint URLs. ([b03b059](https://github.com/aws/aws-sdk-js-v3/commit/b03b059db8d788eed82aa57f354adc89d06767c7))
* **client-ssm:** Add support for AssociationDispatchAssumeRole in AWS SSM State Manager. ([83535fc](https://github.com/aws/aws-sdk-js-v3/commit/83535fc82c40d5871dea60dc4374527d6a2ff5be))
* **client-trustedadvisor:** Adding a new enum attribute(statusReason) to TrustedAdvisorAPI response. This attribute explains reasoning behind check status for certain specific scenarios. ([2d4a1eb](https://github.com/aws/aws-sdk-js-v3/commit/2d4a1eb4804aafa8b4581783e0db0dcb3eb61e8d))
* **clients:** update client endpoints as of 2026-02-20 ([aa23f1e](https://github.com/aws/aws-sdk-js-v3/commit/aa23f1e0e151ac3e2ce430b8b847ee196d78f457))





# [3.994.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.993.0...v3.994.0) (2026-02-19)


### Features

* **client-bcm-dashboards:** The Billing and Cost Management GetDashboard API now returns identifier for each widget, enabling users to uniquely identify widgets within their dashboards. ([4d6e1de](https://github.com/aws/aws-sdk-js-v3/commit/4d6e1de79c505a6806eb8c66d48bd278f60868f9))
* **client-ecr:** Adds multiple artifact types filter support in ListImageReferrers API. ([9335ea3](https://github.com/aws/aws-sdk-js-v3/commit/9335ea37587772acdb32fd218b0227b8ce2c14ac))
* **client-pca-connector-scep:** AWS Private CA Connector for SCEP now supports AWS PrivateLink, allowing your clients to request certificates from within your Amazon Virtual Private Cloud (VPC) without traversing the public internet. With this launch, you can create VPC endpoints to connect to your SCEP connector privately. ([6ffd8f0](https://github.com/aws/aws-sdk-js-v3/commit/6ffd8f08c3d0fc44ea0b4ce41f707411530d3bf4))





# [3.993.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.992.0...v3.993.0) (2026-02-18)


### Features

* **client-cleanrooms:** This release adds support for federated catalogs in Athena-sourced configured tables. ([f657502](https://github.com/aws/aws-sdk-js-v3/commit/f657502fd3010a9950f39c9ba5ac6558cc923c7b))
* **clients:** update client endpoints as of 2026-02-18 ([c1adc9d](https://github.com/aws/aws-sdk-js-v3/commit/c1adc9d82d277e5ef4ef9f5bbe6ab3422f1dc7e1))





# [3.992.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.991.0...v3.992.0) (2026-02-17)


### Features

* **client-ec2:** Add Operator field to CreatePlacementGroup and DescribePlacementGroup APIs. ([ccdf06a](https://github.com/aws/aws-sdk-js-v3/commit/ccdf06ad091052487c004656f37f2a7e0735e7fa))
* **client-grafana:** This release updates Amazon Managed Grafana's APIs to support customer managed KMS keys. ([276a337](https://github.com/aws/aws-sdk-js-v3/commit/276a337c073570ca05e7c180ce29d331f0ff46c7))
* **client-rds:** Adds support for the StorageEncryptionType field to specify encryption type for DB clusters, DB instances, snapshots, automated backups, and global clusters. ([976ce19](https://github.com/aws/aws-sdk-js-v3/commit/976ce1931dc7c5a468728d7877d3b207636c18b8))
* **client-workspaces-web:** Adds support for branding customization without requiring a custom wallpaper. ([dce7846](https://github.com/aws/aws-sdk-js-v3/commit/dce78467312566e5fdca2342560bea22f52f986e))
* **clients:** update client endpoints as of 2026-02-17 ([72c7805](https://github.com/aws/aws-sdk-js-v3/commit/72c7805906244b8796a3a0df64892a857071e847))





# [3.991.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.990.0...v3.991.0) (2026-02-16)


### Features

* **client-kafka:** Amazon MSK now supports dual-stack connectivity (IPv4 and IPv6) for existing MSK clusters. You can enable dual-stack on existing clusters by specifying the NetworkType parameter in updateConnectivity API. ([67a33d9](https://github.com/aws/aws-sdk-js-v3/commit/67a33d9aaeaab51779b50d7c3b31117645241fb9))
* **client-kms:** Added support for Decrypt and ReEncrypt API's to use dry run feature without ciphertext for authorization validation ([492b281](https://github.com/aws/aws-sdk-js-v3/commit/492b2819ebcc83aa4c7bfaa5668abe91993ede88))
* **client-qconnect:** Update MessageType enum to include missing types. ([9aaf67f](https://github.com/aws/aws-sdk-js-v3/commit/9aaf67f21701b136a7439e00a16c1bf083a24163))
* **clients:** update client endpoints as of 2026-02-16 ([c3afa91](https://github.com/aws/aws-sdk-js-v3/commit/c3afa9115eb9f0391e272dacfff8e3ed636b5230))





# [3.990.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.989.0...v3.990.0) (2026-02-13)


### Features

* **client-cloudwatch:** Adding new evaluation states that provides information about the alarm evaluation process. Evaluation error Indicates configuration errors in alarm setup that require review and correction. Evaluation failure Indicates temporary CloudWatch issues. ([5a085a8](https://github.com/aws/aws-sdk-js-v3/commit/5a085a8ae5c58427d73c19fb55632117a91eb68c))
* **client-connect:** API release for headerr notifications in the admin website. APIs allow customers to publish brief messages (including URLs) to a specified audience, and a new header icon will indicate when unread messages are available. ([11a9568](https://github.com/aws/aws-sdk-js-v3/commit/11a9568e2cea18e86f8110d466ae01fc592ecc53))
* **client-ec2:** This release adds geography information to EC2 region and availability zone APIs. DescribeRegions now includes a Geography field, while DescribeAvailabilityZones includes both Geography and SubGeography fields, enabling better geographic classification for AWS regions and zones. ([eed96c0](https://github.com/aws/aws-sdk-js-v3/commit/eed96c0586c1200cce5e25077e0bfcb7902f185b))
* **client-inspector2:** Added .Net 10 (dotnet10) and Node 24.x (node24.x) runtime support for lambda package scanning ([168caeb](https://github.com/aws/aws-sdk-js-v3/commit/168caeb6a2cd510d8d8373f91fab175b70e8f7dd))
* **client-sagemaker:** Enable g7e instance type support for SageMaker Processing, and enable single file configuration provisioning for HyperPod Slurm, where customers have the option to use HyperPod API to provide the provisioning parameters. ([6f77d87](https://github.com/aws/aws-sdk-js-v3/commit/6f77d876fc26c887c0bcfe153a751b2505345ad3))





# [3.989.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.988.0...v3.989.0) (2026-02-12)


### Bug Fixes

* **client-ec2:** fix ec2QueryName serialization ([#7734](https://github.com/aws/aws-sdk-js-v3/issues/7734)) ([05e3a62](https://github.com/aws/aws-sdk-js-v3/commit/05e3a621a6d8d49a4d027638987326d9c850dbf3))


### Features

* **client-ec2:** Launching nested virtualization. This feature allows you to run nested VMs inside virtual (non-bare metal) EC2 instances. ([9541a83](https://github.com/aws/aws-sdk-js-v3/commit/9541a839f1825bd6fbb29a8708813fff67ce26ff))





# [3.988.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.987.0...v3.988.0) (2026-02-11)


### Features

* **client-batch:** Add support for listing jobs by share identifier and getting snapshots of active capacity utilization by job queue and share. ([951d363](https://github.com/aws/aws-sdk-js-v3/commit/951d36346b42cbb57be81880dad529808985145a))
* **client-ec2:** R8i instances powered by custom Intel Xeon 6 processors available only on AWS with sustained all-core 3.9 GHz turbo frequency ([72ad526](https://github.com/aws/aws-sdk-js-v3/commit/72ad52628aea8adb0a856d5bc9ab7a09bd5f9fb7))
* **client-eks:** This release adds support for Windows Server 2025 in Amazon EKS Managed Node Groups. ([6af8b6b](https://github.com/aws/aws-sdk-js-v3/commit/6af8b6b969e7205044c3dc0f87d630e732ba0a35))
* **client-kafkaconnect:** Support configurable upper limits on task count during autoscaling operations via maxAutoscalingTaskCount parameter. ([c996f67](https://github.com/aws/aws-sdk-js-v3/commit/c996f67dda4fcfaa0006e77919c505ab554cbbd2))
* **client-s3tables:** S3 Tables now supports setting partition specifications and sort orders on tables. Partition specs allow users to define how data is organized using transform functions. Sort order configurations enable users to specify sort directions and null ordering preferences for optimized data layout. ([e6b5be0](https://github.com/aws/aws-sdk-js-v3/commit/e6b5be094895d5341684473063b45bc2d9eec336))





# [3.987.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.986.0...v3.987.0) (2026-02-10)


### Features

* **client-bedrock-agentcore:** Added AgentCore browser proxy configuration support, allowing routing of browser traffic through HTTP and HTTPS proxy servers with authentication and bypass rules. ([9bdc1cf](https://github.com/aws/aws-sdk-js-v3/commit/9bdc1cf81adf5a42bc61e98e48c9449c1732428a))
* **client-connect:** Amazon Connect now supports per-channel auto-accept and After Contact Work (ACW) timeouts. Configure agents with auto-accept and ACW timeout settings for chat, tasks, emails, and callbacks. Use the new UpdateUserConfig API to manage these settings. ([9408c41](https://github.com/aws/aws-sdk-js-v3/commit/9408c4135ba64f680ce5038e8b10bb4c96126087))
* **client-eks:** Introducing an optional policy field, an IAM policy applied to pod identity associations in addition to IAM role policies. When specified, pod permissions are the intersection of IAM role policies and the policy field, ensuring the principle of least privilege. ([c35168e](https://github.com/aws/aws-sdk-js-v3/commit/c35168e301f2f874ea38c2e85743fff1a6bf4d79))
* **client-kafka:** Amazon MSK adds three new APIs, CreateTopic, UpdateTopic, and DeleteTopic for managing Kafka topics in your MSK clusters. ([cc06eb6](https://github.com/aws/aws-sdk-js-v3/commit/cc06eb6f4b6f46d8381bfe0372f357f9f398d2e2))
* **client-rds:** This release adds backup configuration for RDS and Aurora restores, letting customers set backup retention period and preferred backup window during restore. It also enables viewing backup settings when describing snapshots or automated backups for instances and clusters. ([dfcf7f3](https://github.com/aws/aws-sdk-js-v3/commit/dfcf7f3d55be4a863fafd3bf8a66311824590078))
* **clients:** update client endpoints as of 2026-02-10 ([1bee3fe](https://github.com/aws/aws-sdk-js-v3/commit/1bee3fecd51d26d694f1e85a0f6b53d67ac77f60))





# [3.986.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.985.0...v3.986.0) (2026-02-09)


### Features

* **client-connectcampaignsv2:** Add the missing event type for WhatsApp ([6b19703](https://github.com/aws/aws-sdk-js-v3/commit/6b19703e15bf13fb26fe5ddbcd8e73d154204e17))
* **client-ec2:** Amazon Secondary Networks is a networking feature that provides high-performance, low-latency connectivity for specialized workloads. ([0ba27c2](https://github.com/aws/aws-sdk-js-v3/commit/0ba27c28535f80e5156fe5d2f142c8999233674b))
* **client-eks:** Amazon EKS adds a new DescribeUpdate update type, VendedLogsUpdate, to support an integration between EKS Auto Mode and Amazon CloudWatch Vended Logs. ([85135c4](https://github.com/aws/aws-sdk-js-v3/commit/85135c4a3104b958b11b32547ea0fda0405d0a63))
* **client-imagebuilder:** EC2 Image Builder now supports wildcard patterns in lifecycle policies with recipes and enhances the experience of tag-scoped policies. ([f015ab6](https://github.com/aws/aws-sdk-js-v3/commit/f015ab63de494b18cc2395af769407d25269280a))
* **client-neptunedata:** Added edgeOnlyLoad boolean parameter to Neptune bulk load request. When TRUE, files are loaded in order without scanning. When FALSE (default), the loader scans files first, then loads vertex files before edge files automatically. ([012843a](https://github.com/aws/aws-sdk-js-v3/commit/012843ab3d96994b945cb555887ffecfe1b92f3d))
* **client-pcs:** Introduces RESUMING state for clusters, compute node groups, and queues. ([78ec45d](https://github.com/aws/aws-sdk-js-v3/commit/78ec45d517dcb9a2ea0ee279ec99d7bca6a7db50))
* **clients:** update client endpoints as of 2026-02-09 ([b81f169](https://github.com/aws/aws-sdk-js-v3/commit/b81f169c19677987668177af06f9f104e2ea4178))





# [3.985.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.984.0...v3.985.0) (2026-02-06)


### Bug Fixes

* **core/protocols:** nested Error objects in REST XML ([#7717](https://github.com/aws/aws-sdk-js-v3/issues/7717)) ([2c0d671](https://github.com/aws/aws-sdk-js-v3/commit/2c0d671fe5ed2505a5825620424a05c8f3b9c2ed))


### Features

* **client-bedrock-data-automation-runtime:** Add OutputConfiguration to InvokeDataAutomation input and output to support S3 output ([72c126f](https://github.com/aws/aws-sdk-js-v3/commit/72c126f09b2b346d37168224a901d7fe0afcb44b))
* **client-deadline:** Adds support for tagging jobs during job creation ([444dcec](https://github.com/aws/aws-sdk-js-v3/commit/444dcec97d3476eb0a568f3a916367fcc08bd86b))
* **client-iot-managed-integrations:** Adding support for Custom(General) Authorization in managed integrations for AWS IoT Device Management cloud connectors. ([f683f7b](https://github.com/aws/aws-sdk-js-v3/commit/f683f7b94a491f9590f679d680f66909f8900ee0))
* **client-partnercentral-selling:** Releasing AWS Opportunity Snapshots for SDK release. ([9b27cd2](https://github.com/aws/aws-sdk-js-v3/commit/9b27cd2b691c80f4c7b23826b547d9bc6dacb100))
* **client-sagemaker:** Adding g7e instance support in Sagemaker Training ([01f57c1](https://github.com/aws/aws-sdk-js-v3/commit/01f57c152554c2195855ebc0bc521faf1543b633))





# [3.984.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.983.0...v3.984.0) (2026-02-05)


### Features

* **client-arc-region-switch:** Updates documentation for ARC Region switch and provides stronger validation for Amazon Aurora Global Da