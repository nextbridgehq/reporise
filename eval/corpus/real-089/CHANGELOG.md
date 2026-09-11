## [v3.7.13](https://github.com/traefik/traefik/tree/v3.7.13) (2026-09-04)
[All Commits](https://github.com/traefik/traefik/compare/v3.7.12...v3.7.13)

**Bug fixes:**
- **[acme]** Bump github.com/go-acme/lego/v5 to v5.4.1 ([#13759](https://github.com/traefik/traefik/pull/13759) @ldez)
- **[acme]** Disable recursive nss propagation by default for DNS challenge ([#13830](https://github.com/traefik/traefik/pull/13830) @rtribotte)
- **[acme]** Do not require recursive nameservers propagation by default for the DNS-01 challenge ([#13710](https://github.com/traefik/traefik/pull/13710) @amazon7737)
- **[acme, tls]** Ignore negated matchers when parsing rule domains ([#13725](https://github.com/traefik/traefik/pull/13725) @rtribotte)
- **[consulcatalog, nomad]** Build a collision-free item key in the Consul Catalog and Nomad providers ([#13741](https://github.com/traefik/traefik/pull/13741) @rtribotte)
- **[http3]** Dedicate a transport per HTTP/3 client connection ([#13812](https://github.com/traefik/traefik/pull/13812) @sdelicata)
- **[k8s/ingress-nginx]** Fix sticky cookie expiration per request ([#13496](https://github.com/traefik/traefik/pull/13496) @makaiver)
- **[k8s/ingress-nginx]** Create HTTP redirect router for ssl-passthrough with force-ssl-redirect ([#13457](https://github.com/traefik/traefik/pull/13457) @mmatur)
- **[k8s/ingress-nginx]** Preserve leading dot in sticky session cookie Domain attribute ([#13456](https://github.com/traefik/traefik/pull/13456) @mmatur)
- **[logs, middleware]** Set access log entry level and time before formatting the OTLP body ([#13767](https://github.com/traefik/traefik/pull/13767) @emilevauge)
- **[logs, tls, k8s/crd]** Downgrade default TLS resources namespace mismatch log to warning ([#13780](https://github.com/traefik/traefik/pull/13780) @lazerg)
- **[middleware]** Fix {url} placeholder in customErrors middleware now includes correct scheme ([#13320](https://github.com/traefik/traefik/pull/13320) @AnouarMohamed)
- **[middleware, authentication]** Prevent user enumeration through the basic auth singleflight key ([#13816](https://github.com/traefik/traefik/pull/13816) @sdelicata)
- **[server]** Build the configuration copy once per change ([#13746](https://github.com/traefik/traefik/pull/13746) @jspdown)
- **[server]** Do not forward h2c upgrade headers to the backend ([#13797](https://github.com/traefik/traefik/pull/13797) @sdelicata)
- **[server]** Deny request with an opaque request target ([#13796](https://github.com/traefik/traefik/pull/13796) @sdelicata)
- **[server]** Do not forward request trailer values to the backend ([#13822](https://github.com/traefik/traefik/pull/13822) @rtribotte)
- **[server]** Bump github.com/quic-go/quic-go to v0.62.0 ([#13807](https://github.com/traefik/traefik/pull/13807) @Nelwhix)
- **[tls]** Redact duplicate TLS certificates in provider merge logs ([#13548](https://github.com/traefik/traefik/pull/13548) @xsergos)
- **[webui]** Fix displayed number on details pages ([#13779](https://github.com/traefik/traefik/pull/13779) @gndz07)

**Documentation:**
- **[k8s]** Add warning about Ingress API frozen state ([#13783](https://github.com/traefik/traefik/pull/13783) @jnoordsij)
- **[k8s]** Remove namespace reference for providers.kubernetesGateway.labelSelector ([#13790](https://github.com/traefik/traefik/pull/13790) @jnoordsij)
- **[k8s/crd]** Fix broken redirect for the Kubernetes CRD reference docs ([#13811](https://github.com/traefik/traefik/pull/13811) @thev1ndu)
- Tell scanning agents to read the security policy and decisions pages ([#13753](https://github.com/traefik/traefik/pull/13753) @emilevauge)

## [v2.11.57](https://github.com/traefik/traefik/tree/v2.11.57) (2026-09-04)
[All Commits](https://github.com/traefik/traefik/compare/v2.11.56...v2.11.57)

**Bug fixes:**
- **[acme]** Disable recursive nss propagation by default for DNS challenge ([#13830](https://github.com/traefik/traefik/pull/13830) @rtribotte)
- **[http3]** Dedicate a transport per HTTP/3 client connection ([#13812](https://github.com/traefik/traefik/pull/13812) @sdelicata)
- **[server]** Deny request with an opaque request target ([#13796](https://github.com/traefik/traefik/pull/13796) @sdelicata)
- **[server]** Do not forward h2c upgrade headers to the backend ([#13797](https://github.com/traefik/traefik/pull/13797) @sdelicata)

## [v3.7.12](https://github.com/traefik/traefik/tree/v3.7.12) (2026-08-26)
[All Commits](https://github.com/traefik/traefik/compare/v3.7.11...v3.7.12)

**Bug fixes:**
- **[fastproxy]** Bump github.com/valyala/fasthttp to v1.73.0 ([#13769](https://github.com/traefik/traefik/pull/13769) @mmatur)
- **[file]** Include the filename in file provider configuration errors ([#13527](https://github.com/traefik/traefik/pull/13527) @lazerg)
- **[http3]** Apply read timeout, idle timeout, and max header bytes for HTTP/3 ([#13717](https://github.com/traefik/traefik/pull/13717) @gndz07)
- **[k8s]** Fix typos in docs and an OCSP log message ([#13722](https://github.com/traefik/traefik/pull/13722) @MsfPablo)
- **[k8s, k8s/ingress-nginx]** Fix redirect www host with a non-numeric port ([#13708](https://github.com/traefik/traefik/pull/13708) @mmatur)
- **[k8s/ingress-nginx]** Fix TLS option name collision across namespaces in the ingress-nginx provider ([#13721](https://github.com/traefik/traefik/pull/13721) @gndz07)
- **[server]** Add an entry point option to handle request headers with aliasing names ([#13720](https://github.com/traefik/traefik/pull/13720) @rtribotte)
- **[tcp, udp]** Reject negative weights in TCP and UDP weighted services ([#13749](https://github.com/traefik/traefik/pull/13749) @rtribotte)
- Bump etcd client modules to v3.5.33 ([#13756](https://github.com/traefik/traefik/pull/13756) @mmatur)

**Documentation:**
- **[k8s]** Update redirections block reference in basic.md ([#13723](https://github.com/traefik/traefik/pull/13723) @Larzenegger)
- **[k8s]** Fix formatting in Kubernetes setup guide ([#13742](https://github.com/traefik/traefik/pull/13742) @stefkiourk)
- **[security]** Document the security threat model and settled security decisions ([#13740](https://github.com/traefik/traefik/pull/13740) @emilevauge)
- **[service]** Clarify ServersTransport behavior for the errors middleware in Kubernetes ([#13531](https://github.com/traefik/traefik/pull/13531) @lazerg)
- Fix v3.7.11 migration guide ([#13730](https://github.com/traefik/traefik/pull/13730) @gndz07)
- Move Jean-Baptiste Doumenjou and Mathieu Lonjaret to past maintainers ([#13736](https://github.com/traefik/traefik/pull/13736) @emilevauge)
- Reduce SECURITY.md to a pointer to the security documentation ([#13732](https://github.com/traefik/traefik/pull/13732) @emilevauge)
- Update end of support dates ([#13712](https://github.com/traefik/traefik/pull/13712) @nmengin)

## [v2.11.56](https://github.com/traefik/traefik/tree/v2.11.56) (2026-08-26)
[All Commits](https://github.com/traefik/traefik/compare/v2.11.55...v2.11.56)

**Bug fixes:**
- **[http3]** Apply read timeout, idle timeout, and max header bytes for HTTP/3 ([#13717](https://github.com/traefik/traefik/pull/13717) @gndz07)
- **[server]** Add an entry point option to handle request headers with aliasing names ([#13720](https://github.com/traefik/traefik/pull/13720) @rtribotte)
- **[tcp, udp]** Reject negative weights in TCP and UDP weighted services ([#13749](https://github.com/traefik/traefik/pull/13749) @rtribotte)
- Bump etcd client modules to v3.5.33 ([#13756](https://github.com/traefik/traefik/pull/13756) @mmatur)

**Documentation:**
- Update end of support dates ([#13712](https://github.com/traefik/traefik/pull/13712) @nmengin)

## [v3.7.11](https://github.com/traefik/traefik/tree/v3.7.11) (2026-08-18)
[All Commits](https://github.com/traefik/traefik/compare/v3.7.10...v3.7.11)

**Bug fixes:**
- **[fastproxy]** Reject out-of-range status codes from backends when using FastProxy ([#13635](https://github.com/traefik/traefik/pull/13635) @gndz07)
- **[http3]** Bump github.com/quic-go/quic-go to v0.61.0 ([#13688](https://github.com/traefik/traefik/pull/13688) @jnoordsij)
- **[k8s/crd]** Prevent generated name collisions in the Kubernetes CRD provider ([#13656](https://github.com/traefik/traefik/pull/13656) @rtribotte)
- **[k8s/crd]** Add an option to restrict the namespace of the default TLS resources ([#13665](https://github.com/traefik/traefik/pull/13665) @rtribotte)
- **[k8s/crd]** Scope generated Kubernetes Service names to their parent in the CRD provider ([#13668](https://github.com/traefik/traefik/pull/13668) @rtribotte)
- **[k8s/crd]** Name failover generated services after the referenced Kubernetes Service ([#13677](https://github.com/traefik/traefik/pull/13677) @rtribotte)
- **[k8s/crd]** Add safe naming option to avoid collisions for Kubernetes CRD provider ([#13689](https://github.com/traefik/traefik/pull/13689) @gndz07)
- **[k8s/gatewayapi]** Preserve encoded path segments in Gateway API URLRewrite and RequestRedirect ([#13641](https://github.com/traefik/traefik/pull/13641) @gndz07)
- **[k8s/gatewayapi]** Fix Gateway API router rules ([#13645](https://github.com/traefik/traefik/pull/13645) @rtribotte)
- **[k8s/ingress-nginx]** Dedupe client-auth TLS options across ingresses sharing a host for ingress-nginx provider ([#13638](https://github.com/traefik/traefik/pull/13638) @gndz07)
- **[k8s/ingress-nginx]** Apply auth, custom-headers, custom errors and ssl-redirect to ingress default backend ([#13575](https://github.com/traefik/traefik/pull/13575) @rtribotte)
- **[k8s/ingress-nginx]** Honor asDefault and exclude internal entrypoints from default selection for ingress-nginx provider ([#13629](https://github.com/traefik/traefik/pull/13629) @gndz07)
- **[k8s/ingress]** Enforce crossProviderNamespace for Kubernetes Ingress service middleware ([#13670](https://github.com/traefik/traefik/pull/13670) @gndz07)
- **[middleware, authentication]** Bump github.com/containous/go-http-auth to b975dcaa8c48 ([#13636](https://github.com/traefik/traefik/pull/13636) @kevinpollet)
- **[tls]** Add an option to disable the fallback to the default TLS options ([#13639](https://github.com/traefik/traefik/pull/13639) @rtribotte)
- Bump golang.org/x dependencies ([#13699](https://github.com/traefik/traefik/pull/13699) @mmatur)

**Documentation:**
- **[accesslogs]** Clarify OriginStatus and DownstreamStatus in access logs documentation ([#13609](https://github.com/traefik/traefik/pull/13609) @rtribotte)
- **[api]** Fix doubled word in API/dashboard reference docs ([#13663](https://github.com/traefik/traefik/pull/13663) @latent-9)
- **[docker]** Remove :ro from docker.sock ([#12656](https://github.com/traefik/traefik/pull/12656) @bluepuma77)
- **[k8s/gatewayapi]** Clarify v3.7.10 migration guide for Gateway API 1.6.1 ([#13628](https://github.com/traefik/traefik/pull/13628) @rtribotte)
- **[k8s/gatewayapi]** Document the Experimental Channel CRDs requirement of the Kubernetes Gateway provider ([#13634](https://github.com/traefik/traefik/pull/13634) @rtribotte)
- **[k8s/ingress-nginx]** Docs: Update supported server snippet directives ([#13687](https://github.com/traefik/traefik/pull/13687) @rtsui-harmonicinc)
- **[middleware]** Add rejectStatusCode to the ipAllowList middleware configuration example ([#13664](https://github.com/traefik/traefik/pull/13664) @amazon7737)
- **[middleware]** Mark the errors middleware service option as required ([#13684](https://github.com/traefik/traefik/pull/13684) @lazerg)
- **[tls]** Document the TLS options conflict resolution ([#13640](https://github.com/traefik/traefik/pull/13640) @rtribotte)
- **[tls]** Clarify router TLS replaces entrypoint TLS ([#13630](https://github.com/traefik/traefik/pull/13630) @sornapudisuresh)
- Document Redis keyspace notifications requirement ([#13691](https://github.com/traefik/traefik/pull/13691) @omkar619-dev)
- Remove retired Go Report Card badge ([#13637](https://github.com/traefik/traefik/pull/13637) @yardenshoham)
- Restore the systemd socket activation documentation ([#13701](https://github.com/traefik/traefik/pull/13701) @lazerg)
- Update version support policy starting with v3.6 ([#13627](https://github.com/traefik/traefik/pull/13627) @nmengin)

## [v3.6.26](https://github.com/traefik/traefik/tree/v3.6.26) (2026-08-11)
[All Commits](https://github.com/traefik/traefik/compare/v3.6.25...v3.6.26)

Release canceled

## [v2.11.55](https://github.com/traefik/traefik/tree/v2.11.55) (2026-08-18)
[All Commits](https://github.com/traefik/traefik/compare/v2.11.54...v2.11.55)

**Bug fixes:**
- **[k8s/crd]** Prevent generated name collisions in the Kubernetes CRD provider ([#13656](https://github.com/traefik/traefik/pull/13656) @rtribotte)
- **[k8s/crd]** Add an option to restrict the namespace of the default TLS resources ([#13665](https://github.com/traefik/traefik/pull/13665) @rtribotte)
- **[k8s/crd]** Scope generated Kubernetes Service names to their parent in the CRD provider ([#13668](https://github.com/traefik/traefik/pull/13668) @rtribotte)
- **[k8s/crd]** Add safe naming option to avoid collisions for Kubernetes CRD provider ([#13689](https://github.com/traefik/traefik/pull/13689) @gndz07)
- **[k8s/gatewayapi]** Fix Gateway API router rules ([#13645](https://github.com/traefik/traefik/pull/13645) @rtribotte)
- **[middleware, authentication]** Bump github.com/containous/go-http-auth to b975dcaa8c48 ([#13636](https://github.com/traefik/traefik/pull/13636) @kevinpollet)
- **[tls]** Add an option to disable the fallback to the default TLS options ([#13639](https://github.com/traefik/traefik/pull/13639) @rtribotte)
- Bump golang.org/x dependencies ([#13699](https://github.com/traefik/traefik/pull/13699) @mmatur)

## [v3.7.10](https://github.com/traefik/traefik/tree/v3.7.10) (2026-07-31)
[All Commits](https://github.com/traefik/traefik/compare/v3.7.9...v3.7.10)

**Bug fixes:**
- **[acme]** Bump github.com/go-acme/lego/v5 to v5.3.1 ([#13547](https://github.com/traefik/traefik/pull/13547) @ldez)
- **[middleware, authentication]** Fix auth singleflight key collision ([#13572](https://github.com/traefik/traefik/pull/13572) @mmatur)
- **[k8s/gatewayapi]** Avoid router name collisions in Kubernetes Gateway API provider ([#13580](https://github.com/traefik/traefik/pull/13580) @gndz07)
- **[tracing]** Bump github.com/DataDog/dd-trace-go/v2 to 2.8.1 ([#13530](https://github.com/traefik/traefik/pull/13530) @kevinpollet)
- Bump golang.org/x/text to v0.40.0 and golang.org/x/net v0.57.0 ([#13574](https://github.com/traefik/traefik/pull/13574) @mmatur)
- **[k8s/crd]** Fix cross-namespace service reference check in Kubernetes CRD provider ([#13573](https://github.com/traefik/traefik/pull/13573) @gndz07)
- **[middleware]** Bump github.com/klauspost/compress to v1.18.7 ([#13587](https://github.com/traefik/traefik/pull/13587) @mmatur)
- **[k8s/gatewayapi]** Bump sigs.k8s.io/gateway-api to v1.6.1 ([#13589](https://github.com/traefik/traefik/pull/13589) @rtribotte)

**Documentation:**
- **[k8s/ingress-nginx]** Clarify auth-url/rewrite-target interaction on ingress-nginx provider ([#13607](https://github.com/traefik/traefik/pull/13607) @gndz07)

## [v3.6.25](https://github.com/traefik/traefik/tree/v3.6.25) (2026-07-31)
[All Commits](https://github.com/traefik/traefik/compare/v3.6.24...v3.6.25)

**Bug fixes:**
- **[acme]** Bump github.com/go-acme/lego/v5 to v5.3.1 ([#13547](https://github.com/traefik/traefik/pull/13547) @ldez)
- **[middleware, authentication]** Fix auth singleflight key collision ([#13572](https://github.com/traefik/traefik/pull/13572) @mmatur)
- **[k8s/gatewayapi]** Avoid router name collisions in Kubernetes Gateway API provider ([#13580](https://github.com/traefik/traefik/pull/13580) @gndz07)
- **[tracing]** Bump github.com/DataDog/dd-trace-go/v2 to 2.8.1 ([#13530](https://github.com/traefik/traefik/pull/13530) @kevinpollet)
- Bump golang.org/x/text to v0.40.0 and golang.org/x/net v0.57.0 ([#13574](https://github.com/traefik/traefik/pull/13574) @mmatur)
- **[k8s/crd]** Fix cross-namespace service reference check in Kubernetes CRD provider ([#13573](https://github.com/traefik/traefik/pull/13573) @gndz07)
- **[middleware]** Bump github.com/klauspost/compress to v1.18.7 ([#13587](https://github.com/traefik/traefik/pull/13587) @mmatur)

## [v2.11.54](https://github.com/traefik/traefik/tree/v2.11.54) (2026-07-31)
[All Commits](https://github.com/traefik/traefik/compare/v2.11.53...v2.11.54)

**Bug fixes:**
- **[tracing]** Bump github.com/DataDog/dd-trace-go/v2 to 2.8.1 ([#13530](https://github.com/traefik/traefik/pull/13530) @kevinpollet)
- Bump golang.org/x/text to v0.40.0 and golang.org/x/net v0.57.0 ([#13574](https://github.com/traefik/traefik/pull/13574) @mmatur)
- **[k8s/crd]** Fix cross-namespace service reference check in Kubernetes CRD provider ([#13573](https://github.com/traefik/traefik/pull/13573) @gndz07)
- **[middleware]** Bump github.com/klauspost/compress to v1.18.7 ([#13587](https://github.com/traefik/traefik/pull/13587) @mmatur)

## [v3.7.9](https://github.com/traefik/traefik/tree/v3.7.9) (2026-07-24)
[All Commits](https://github.com/traefik/traefik/compare/v3.7.8...v3.7.9)

**Bug fixes:**
- **[k8s/ingress-nginx]** Fix redirect with use-regex in IngressNGINX provider ([#13476](https://github.com/traefik/traefik/pull/13476) @AmariahAK)
- **[middleware]** Disable Zstd support in the gzhttp wrapper ([#13533](https://github.com/traefik/traefik/pull/13533) @kevinpollet)
- **[server]** Defer the CONNECT payload until the backend accepts the tunnel ([#13542](https://github.com/traefik/traefik/pull/13542) @sdelicata)
- **[server]** Discard CONNECT body in forwardauth and reject CONNECT requests with fast proxy ([#13543](https://github.com/traefik/traefik/pull/13543) @sdelicata)
- **[server]** Bump google.golang.org/grpc to v1.82.1 ([#13551](https://github.com/traefik/traefik/pull/13551) @piscue)
- **[server]** Do not add back CONNECT requests to the pool ([#13556](https://github.com/traefik/traefik/pull/13556) @kevinpollet)

**Documentation:**
- **[k8s/gatewayapi]** Document Gateway API generated service names change in the migration guide ([#13541](https://github.com/traefik/traefik/pull/13541) @rtribotte)
- **[k8s/ingress-nginx]** Fix typo in nginx annotation proxy-buffer-numbers ([#13545](https://github.com/traefik/traefik/pull/13545) @fischerman)
- Add a migration note for CONNECT requests ([#13554](https://github.com/traefik/traefik/pull/13554) @kevinpollet)

## [v3.6.24](https://github.com/traefik/traefik/tree/v3.6.24) (2026-07-24)
[All Commits](https://github.com/traefik/traefik/compare/v3.6.23...v3.6.24)

**Bug fixes:**
- **[middleware, k8s/crd]** Add missing ErrorRequestHeaders field to CRDs ([#13498](https://github.com/traefik/traefik/pull/13498) @kevinpollet)
- **[logs]** Remove unrelated error from nonexistent cert resolver log ([#13469](https://github.com/traefik/traefik/pull/13469) @ArthurHlt)
- **[middleware]** Disable Zstd support in the gzhttp wrapper ([#13533](https://github.com/traefik/traefik/pull/13533) @kevinpollet)
- **[server]** Defer the CONNECT payload until the backend accepts the tunnel ([#13542](https://github.com/traefik/traefik/pull/13542) @sdelicata)
- **[server]** Discard CONNECT body in forwardauth and reject CONNECT requests with fast proxy ([#13543](https://github.com/traefik/traefik/pull/13543) @sdelicata)
- **[server]** Bump google.golang.org/grpc to v1.82.1 ([#13551](https://github.com/traefik/traefik/pull/13551) @piscue)
- **[server]** Do not add back CONNECT requests to the pool ([#13556](https://github.com/traefik/traefik/pull/13556) @kevinpollet)

**Documentation:**
- **[k8s]** Align certificateRef and indicate ports ([#13473](https://github.com/traefik/traefik/pull/13473) @veenoise)
- **[rules]** Fix syntax notes in routing rule documentation ([#13501](https://github.com/traefik/traefik/pull/13501) @stevenlele)
- Add a migration note for CONNECT requests ([#13554](https://github.com/traefik/traefik/pull/13554) @kevinpollet)

## [v2.11.53](https://github.com/traefik/traefik/tree/v2.11.53) (2026-07-24)
[All Commits](https://github.com/traefik/traefik/compare/v2.11.52...v2.11.53)

**Bug fixes:**
- **[middleware, k8s/crd]** Add missing ErrorRequestHeaders field to CRDs ([#13498](https://github.com/traefik/traefik/pull/13498) @kevinpollet)
- **[server]** Defer the CONNECT payload until the backend accepts the tunnel ([#13542](https://github.com/traefik/traefik/pull/13542) @sdelicata)
- **[server]** Bump google.golang.org/grpc to v1.82.1 ([#13551](https://github.com/traefik/traefik/pull/13551) @piscue)
- **[server]** Do not add back CONNECT requests to the pool ([#13556](https://github.com/traefik/traefik/pull/13556) @kevinpollet)

**Documentation:**
- Add a migration note for CONNECT requests ([#13554](https://github.com/traefik/traefik/pull/13554) @kevinpollet)

## [v3.7.8](https://github.com/traefik/traefik/tree/v3.7.8) (2026-07-15)
[All Commits](https://github.com/traefik/traefik/compare/v3.7.7...v3.7.8)

**Bug fixes:**
- **[middleware, k8s/crd]** Add missing ErrorRequestHeaders field to CRDs ([#13498](https://github.com/traefik/traefik/pull/13498) @kevinpollet)
- **[k8s/ingress-nginx]** Sanitize rewritten target on ingress-nginx provider ([#13506](https://github.com/traefik/traefik/pull/13506) @gndz07)
- **[logs]** Remove unrelated error from nonexistent cert resolver log ([#13469](https://github.com/traefik/traefik/pull/13469) @ArthurHlt)
- **[middleware]** Fix panic in retry middleware with Websockets ([#13520](https://github.com/traefik/traefik/pull/13520) @juliens)

**Documentation:**
- **[k8s]** Align certificateRef and indicate ports ([#13473](https://github.com/traefik/traefik/pull/13473) @veenoise)
- **[rules]** Fix syntax notes in routing rule documentation ([#13501](https://github.com/traefik/traefik/pull/13501) @stevenlele)
- **[k8s/crd]** Fix duplicated options table in ServersTransport CRD reference ([#13518](https://github.com/traefik/traefik/pull/13518) @rachana5)

## [v3.7.7](https://github.com/traefik/traefik/tree/v3.7.7) (2026-07-08)
[All Commits](https://github.com/traefik/traefik/compare/v3.7.6...v3.7.7)

**Bug fixes:**
- **[middleware, k8s/ingress-nginx]** Add app-root middleware with nginx variable interpolation ([#13398](https://github.com/traefik/traefik/pull/13398) @dfeinblatt)
- **[rules]** Fix consistency between HostSNI(*) and Host(*) ([#13460](https://github.com/traefik/traefik/pull/13460) @juliens)
- **[k8s, k8s/gatewayapi]** Fix ExtensionRef filters on backendRefs to resolve against the HTTPRoute namespace ([#13462](https://github.com/traefik/traefik/pull/13462) @gndz07)
- **[middleware]** Fix handle empty unknown-length bodies in mirroring ([#13399](https://github.com/traefik/traefik/pull/13399) @amazon7737)
- **[k8s/crd]** Fix cross-provider ref check for TCP ServersTransport in Kubernetes CRD provider ([#13458](https://github.com/traefik/traefik/pull/13458) @gndz07)
- **[middleware]** Sanitize replaced path in ReplacePathRegex middleware ([#13466](https://github.com/traefik/traefik/pull/13466) @kevinpollet)
- **[acme]** Bump software.sslmate.com/src/go-pkcs12 to v0.7.3 ([#13477](https://github.com/traefik/traefik/pull/13477) @rtribotte)
- **[otel]** Bump go.opentelemetry.io/otel to v1.44.0 ([#13478](https://github.com/traefik/traefik/pull/13478) @rtribotte)
- **[k8s]** Fix panic when endpointslice port value or name is nil ([#13481](https://github.com/traefik/traefik/pull/13481) @kevinpollet)

**Documentation:**
- Fix version in migration guide ([#13434](https://github.com/traefik/traefik/pull/13434) @kevinpollet)
- Fix changelog v2.11.51 ([#13430](https://github.com/traefik/traefik/pull/13430) @mmatur)
- Add v3.7 to supported version docs ([#13118](https://github.com/traefik/traefik/pull/13118) @jnoordsij)
- Fix some function names in comments ([#13443](https://github.com/traefik/traefik/pull/13443) @blackflytech)
- Add @nandorKollar as a current maintainer ([#13451](https://github.com/traefik/traefik/pull/13451) @emilevauge)
- Add @amazon7737 as a current maintainer ([#13450](https://github.com/traefik/traefik/pull/13450) @emilevauge)
- **[middleware]** Clarify buffering middleware defaults ([#13401](https://github.com/traefik/traefik/pull/13401) @amazon7737)
- Fix grammar in TLS, TCP service, and routing reference docs ([#13461](https://github.com/traefik/traefik/pull/13461) @almightymoon)
- Fix X-Forwarded-Prefix documentation for dashboard redirection ([#13472](https://github.com/traefik/traefik/pull/13472) @kevinpollet)

## [v3.6.23](https://github.com/traefik/traefik/tree/v3.6.23) (2026-07-08)
[All Commits](https://github.com/traefik/traefik/compare/v3.6.22...v3.6.23)

**Bug fixes:**
- **[acme]** Bump software.sslmate.com/src/go-pkcs12 to v0.7.3 ([#13477](https://github.com/traefik/traefik/pull/13477) @rtribotte)
- **[k8s]** Fix panic when endpointslice port value or name is nil ([#13481](https://github.com/traefik/traefik/pull/13481) @kevinpollet)
- **[k8s/crd]** Fix cross-provider ref check for TCP ServersTransport in Kubernetes CRD provider ([#13458](https://github.com/traefik/traefik/pull/13458) @gndz07)
- **[middleware]** Fix handle empty unknown-length bodies in mirroring ([#13399](https://github.com/traefik/traefik/pull/13399) @amazon7737)
- **[middleware]** Sanitize replaced path in ReplacePathRegex middleware ([#13466](https://github.com/traefik/traefik/pull/13466) @kevinpollet)
- **[otel]** Bump go.opentelemetry.io/otel to v1.44.0 ([#13478](https://github.com/traefik/traefik/pull/13478) @rtribotte)

**Documentation:**
- **[middleware]** Clarify buffering middleware defaults ([#13401](https://github.com/traefik/traefik/pull/13401) @amazon7737)
- Add @amazon7737 as a current maintainer ([#13450](https://github.com/traefik/traefik/pull/13450) @emilevauge)
- Add @nandorKollar as a current maintainer ([#13451](https://github.com/traefik/traefik/pull/13451) @emilevauge)
- Fix changelog v2.11.51 ([#13430](https://github.com/traefik/traefik/pull/13430) @mmatur)
- Fix grammar in TLS, TCP service, and routing reference docs ([#13461](https://github.com/traefik/traefik/pull/13461) @almightymoon)
- Fix some function names in comments ([#13443](https://github.com/traefik/traefik/pull/13443) @blackflytech)
- Fix version in migration guide ([#13434](https://github.com/traefik/traefik/pull/13434) @kevinpollet)
- Fix X-Forwarded-Prefix documentation for dashboard redirection ([#13472](https://github.com/traefik/traefik/pull/13472) @kevinpollet)

## [v2.11.52](https://github.com/traefik/traefik/tree/v2.11.52) (2026-07-08)
[All Commits](https://github.com/traefik/traefik/compare/v2.11.51...v2.11.52)

**Bug fixes:**
- **[middleware]** Sanitize replaced path in ReplacePathRegex middleware ([#13466](https://github.com/traefik/traefik/pull/13466) @kevinpollet)
- **[acme]** Bump software.sslmate.com/src/go-pkcs12 to v0.7.3 ([#13477](https://github.com/traefik/traefik/pull/13477) @rtribotte)
- **[otel]** Bump go.opentelemetry.io/otel to v1.44.0 ([#13478](https://github.com/traefik/traefik/pull/13478) @rtribotte)

**Documentation:**
- Fix changelog v2.11.51 ([#13430](https://github.com/traefik/traefik/pull/13430) @mmatur)

## [v3.7.6](https://github.com/traefik/traefik/tree/v3.7.6) (2026-06-30)
[All Commits](https://github.com/traefik/traefik/compare/v3.7.5...v3.7.6)

**Bug fixes:**
- **[acme, logs]** Bump github.com/go-acme/lego/v5 ([#13154](https://github.com/traefik/traefik/pull/13154) @ldez)
- **[acme]** Bump github.com/go-acme/lego/v5 ([#13359](https://github.com/traefik/traefik/pull/13359) @juliens)
- **[k8s, k8s/ingress-nginx]** Fix ingress-nginx ssl passthrough status updates ([#13212](https://github.com/traefik/traefik/pull/13212) @nickmnt)
- **[k8s/gatewayapi]** Add missing Gateway API features in conformance tests ([#13356](https://github.com/traefik/traefik/pull/13356) @AnatoleLucet)
- **[k8s/gatewayapi]** Avoid collisions for Gateway API services names ([#13367](https://github.com/traefik/traefik/pull/13367) @rtribotte)
- **[k8s/gatewayapi]** Ignore other gateways parentRefs and update route parent statuses only for managed gateways ([#13397](https://github.com/traefik/traefik/pull/13397) @rtribotte)
- **[k8s/ingress-nginx]** Configure retry according to buffering configuration ([#13039](https://github.com/traefik/traefik/pull/13039) @rtribotte)
- **[k8s/ingress-nginx]** Fix force-ssl-redirect routing 418 when TLS is terminated upstream ([#13386](https://github.com/traefik/traefik/pull/13386) @carloslima)
- **[k8s]** Detect EndpointSlice condition changes ([#13405](https://github.com/traefik/traefik/pull/13405) @kevinpollet)
- **[k8s]** Index Kubernetes EndpointSlice by service name ([#13395](https://github.com/traefik/traefik/pull/13395) @kevinpollet)
- **[k8s]** Sort endpointslices to keep backend IPs consistent across rebuilds ([#13406](https://github.com/traefik/traefik/pull/13406) @kevinpollet)
- **[kv]** Bump kvtools/redis to v1.2.1 ([#13403](https://github.com/traefik/traefik/pull/13403) @ldez)
- **[middleware, authentication]** Fix x-forwarded-port in forward-auth ([#13344](https://github.com/traefik/traefik/pull/13344) @juliens)
- **[middleware, k8s/gatewayapi]** Fix Gateway API redirect missing statuses ([#13360](https://github.com/traefik/traefik/pull/13360) @AnatoleLucet)
- **[middleware, k8s/gatewayapi]** Fix Host header not being modified by RequestHeaderModifier ([#12805](https://github.com/traefik/traefik/pull/12805) @mihuross)
- **[middleware, k8s/gatewayapi]** Fix request scheme derivation when Gateway API RequestRedirect omits scheme ([#13347](https://github.com/traefik/traefik/pull/13347) @gndz07)
- **[middleware]** Fix CORS Max-Age set to 0 by default ([#13371](https://github.com/traefik/traefik/pull/13371) @AnatoleLucet)
- **[middleware]** Fix CORS wildcard when allow-credentials is true ([#13368](https://github.com/traefik/traefik/pull/13368) @AnatoleLucet)
- **[server]** Add an option to remove request headers with underscores ([#13262](https://github.com/traefik/traefik/pull/13262) @youkoulayley)
- **[server]** Configurable max request header size ([#13353](https://github.com/traefik/traefik/pull/13353) @juliens)
- **[tls]** Fix nondeterministic TLS certificate selection on shared SAN ([#13348](https://github.com/traefik/traefik/pull/13348) @rtribotte)
- **[webui]** Bump axios to v1.18.0 ([#13380](https://github.com/traefik/traefik/pull/13380) @gndz07)
- **[websocket]** Fix connection upgrades when backend server is using h2c scheme ([#12967](https://github.com/traefik/traefik/pull/12967) @stffabi)

**Documentation:**
- **[k8s/crd]** Fix broken CRD reference links in IngressRoute page ([#13375](https://github.com/traefik/traefik/pull/13375) @s3onghyun)
- **[k8s/gatewayapi]** Remove experimental note for Gateway API/TLSRoute documentation ([#13392](https://github.com/traefik/traefik/pull/13392) @jnoordsij)
- **[k8s/ingress-nginx]** Add Kubernetes Ingress NGINX to the providers list ([#13372](https://github.com/traefik/traefik/pull/13372) @nmengin)
- **[k8s]** Align Helm chart documented values with chart v41 ([#13366](https://github.com/traefik/traefik/pull/13366) @mloiseleur)
- **[middleware, authentication, k8s/ingress-nginx]** Clarify intentional auth-response-headers gating and absence of stripping incoming X-Forwarded-* headers ([#13342](https://github.com/traefik/traefik/pull/13342) @rtribotte)
- **[middleware]** Clarify entryPoint middleware reference format ([#13364](https://github.com/traefik/traefik/pull/13364) @mloiseleur)
- **[security]** Add HTTP/2 header memory exhaustion security documentation ([#13381](https://github.com/traefik/traefik/pull/13381) @emilevauge)
- Adds documentations on maxHeaderBytes ([#13363](https://github.com/traefik/traefik/pull/13363) @juliens)
- Fix inaccuracies in reference documentation ([#13304](https://github.com/traefik/traefik/pull/13304) @sheddy-traefik)

## [v3.6.22](https://github.com/traefik/traefik/tree/v3.6.22) (2026-06-30)
[All Commits](https://github.com/traefik/traefik/compare/v3.6.21...v3.6.22)

**Bug fixes:**
- **[acme, logs]** Bump github.com/go-acme/lego/v5 ([#13154](https://github.com/traefik/traefik/pull/13154) @ldez)
- **[acme]** Bump github.com/go-acme/lego/v5 ([#13359](https://github.com/traefik/traefik/pull/13359) @juliens)
- **[k8s/gatewayapi]** Add missing Gateway API features in conformance tests ([#13356](https://github.com/traefik/traefik/pull/13356) @AnatoleLucet)
- **[k8s/gatewayapi]** Ignore other gateways parentRefs and update route parent statuses only for managed gateways ([#13397](https://github.com/traefik/traefik/pull/13397) @rtribotte)
- **[k8s]** Detect EndpointSlice condition changes ([#13405](https://github.com/traefik/traefik/pull/13405) @kevinpollet)
- **[k8s]** Index Kubernetes EndpointSlice by service name ([#13395](https://github.com/traefik/traefik/pull/13395) @kevinpollet)
- **[k8s]** Sort endpointslices to keep backend IPs consistent across rebuilds ([#13406](https://github.com/traefik/traefik/pull/13406) @kevinpollet)
- **[kv]** Bump kvtools/redis to v1.2.1 ([#13403](https://github.com/traefik/traefik/pull/13403) @ldez)
- **[middleware, authentication]** Fix x-forwarded-port in forward-auth ([#13344](https://github.com/traefik/traefik/pull/13344) @juliens)
- **[middleware, k8s/gatewayapi]** Fix Host header not being modified by RequestHeaderModifier ([#12805](https://github.com/traefik/traefik/pull/12805) @mihuross)
- **[middleware, k8s/gatewayapi]** Fix request scheme derivation when Gateway API RequestRedirect omits scheme ([#13347](https://github.com/traefik/traefik/pull/13347) @gndz07)
- **[middleware]** Fix CORS Max-Age set to 0 by default ([#13371](https://github.com/traefik/traefik/pull/13371) @AnatoleLucet)
- **[middleware]** Fix CORS wildcard when allow-credentials is true ([#13368](https://github.com/traefik/traefik/pull/13368) @AnatoleLucet)
- **[tls]** Fix nondeterministic TLS certificate selection on shared SAN ([#13348](https://github.com/traefik/traefik/pull/13348) @rtribotte)
- **[server]** Add an option to remove request headers with underscores ([#13262](https://github.com/traefik/traefik/pull/13262) @youkoulayley)
- **[server]** Configurable max request header size ([#13353](https://github.com/traefik/traefik/pull/13353) @juliens)
- **[webui]** Bump axios to v1.18.0 ([#13380](https://github.com/traefik/traefik/pull/13380) @gndz07)
- **[websocket]** Fix connection upgrades when backend server is using h2c scheme ([#12967](https://github.com/traefik/traefik/pull/12967) @stffabi)

**Documentation:**
- **[k8s]** Align Helm chart documented values with chart v41 ([#13366](https://github.com/traefik/traefik/pull/13366) @mloiseleur)
- **[k8s/crd]** Fix broken CRD reference links in IngressRoute page ([#13375](https://github.com/traefik/traefik/pull/13375) @s3onghyun)
- **[k8s/ingress-nginx]** Add Kubernetes Ingress NGINX to the providers list ([#13372](https://github.com/traefik/traefik/pull/13372) @nmengin)
- **[middleware]** Clarify entryPoint middleware reference format ([#13364](https://github.com/traefik/traefik/pull/13364) @mloiseleur)
- **[security]** Add HTTP/2 header memory exhaustion security documentation ([#13381](https://github.com/traefik/traefik/pull/13381) @emilevauge)
- **[server]** Adds documentations on maxHeaderBytes ([#13363](https://github.com/traefik/traefik/pull/13363) @juliens)
- Fix inaccuracies in reference documentation ([#13304](https://github.com/traefik/traefik/pull/13304) @sheddy-traefik)

## [v2.11.51](https://github.com/traefik/traefik/tree/v2.11.51) (2026-06-30)
[All Commits](https://github.com/traefik/traefik/compare/v2.11.50...v2.11.51)

**Bug fixes:**
- **[acme]** Bump github.com/go-acme/lego/v5 ([#13359](https://github.com/traefik/traefik/pull/13359) @juliens)
- **[middleware, authentication]** Fix x-forwarded-port in forward-auth ([#13344](https://github.com/traefik/traefik/pull/13344) @juliens)
- **[server]** Add an option to remove request headers with underscores ([#13262](https://github.com/traefik/traefik/pull/13262) @youkoulayley)
- **[server]** Configurable max request header size ([#13353](https://github.com/traefik/traefik/pull/13353) @juliens)
- **[webui]** Bump axios to v1.18.0 ([#13380](https://github.com/traefik/traefik/pull/13380) @gndz07)

**Documentation:**
- **[security]** Add HTTP/2 header memory exhaustion security documentation ([#13381](https://github.com/traefik/traefik/pull/13381) @emilevauge)
- **[server]** Adds documentations on maxHeaderBytes ([#13363](https://github.com/traefik/traefik/pull/13363) @juliens)

## [v3.7.5](https://github.com/traefik/traefik/tree/v3.7.5) (2026-06-10)
[All Commits](https://github.com/traefik/traefik/compare/v3.7.4...v3.7.5)

**Bug fixes:**
- **[k8s/ingress-nginx]** Skip ingress when auth-secret resolution fails ([#13323](https://github.com/traefik/traefik/pull/13323) @gndz07)
- **[k8s/ingress-nginx]** Pass endpointslice fencing on ingress-nginx provider ([#13290](https://github.com/traefik/traefik/pull/13290) @Learloj)
- **[k8s/gatewayapi]** Reject cross-provider references with backendRefs.namespace ([#13322](https://github.com/traefik/traefik/pull/13322) @youkoulayley)
- **[server]** Bump to github.com/pires/go-proxyproto v0.12.0 ([#13313](https://github.com/traefik/traefik/pull/13313) @timschumi)
- **[tls]** Fix routers with same host, different tlsoptions on different entryPoint ([#13329](https://github.com/traefik/traefik/pull/13329) @juliens)
- **[tls]** Fix snicheck for routers with no hosts ([#13333](https://github.com/traefik/traefik/pull/13333) @rtribotte)

## [v3.6.21](https://github.com/traefik/traefik/tree/v3.6.21) (2026-06-10)
[All Commits](https://github.com/traefik/traefik/compare/v3.6.20...v3.6.21)

**Bug fixes:**
- **[k8s/gatewayapi]** Reject cross-provider references with backendRefs.namespace ([#13322](https://github.com/traefik/traefik/pull/13322) @youkoulayley)
- **[server]** Bump to github.com/pires/go-proxyproto v0.12.0 ([#13313](https://github.com/traefik/traefik/pull/13313) @timschumi)
- **[tls]** Fix routers with same host, different tlsoptions on different entryPoint ([#13329](https://github.com/traefik/traefik/pull/13329) @juliens)
- **[tls]** Fix snicheck for routers with no hosts ([#13333](https://github.com/traefik/traefik/pull/13333) @rtribotte)

## [v2.11.50](https://github.com/traefik/traefik/tree/v2.11.50) (2026-06-10)
[All Commits](https://github.com/traefik/traefik/compare/v2.11.49...v2.11.50)

**Bug fixes:**
- **[tls]** Fix routers with same host, different tlsoptions on different entryPoint ([#13329](https://github.com/traefik/traefik/pull/13329) @juliens)
- **[tls]** Fix snicheck for routers with no hosts ([#13333](https://github.com/traefik/traefik/pull/13333) @rtribotte)

## [v3.7.4](https://github.com/traefik/traefik/tree/v3.7.4) (2026-06-05)
[All Commits](https://github.com/traefik/traefik/compare/v3.7.3...v3.7.4)

**Bug fixes:**
- **[middleware]** Fix redis write timeout option configuration ([#13273](https://github.com/traefik/traefik/pull/13273) @bzyy1024)
- **[webui]** Bump react-router and jsdom ([#13301](https://github.com/traefik/traefik/pull/13301) @gndz07)
- **[k8s/gatewayapi]** Fix BackendTLSPolicy status update ([#13306](https://github.com/traefik/traefik/pull/13306) @AnatoleLucet)
- **[http3]** Bump github.com/quic-go/quic-go to v0.59.1 ([#13300](https://github.com/traefik/traefik/pull/13300) @rtribotte)
- **[webui]** Bump axios to v1.17.0 ([#13299](https://github.com/traefik/traefik/pull/13299) @gndz07)
- **[tls]** Fix snicheck with keepalive ([#13305](https://github.com/traefik/traefik/pull/13305) @juliens)

## [v3.6.20](https://github.com/traefik/traefik/tree/v3.6.20) (2026-06-05)
[All Commits](https://github.com/traefik/traefik/compare/v3.6.19...v3.6.20)

**Bug fixes:**
- **[middleware]** Fix redis write timeout option configuration ([#13273](https://github.com/traefik/traefik/pull/13273) @bzyy1024)
- **[webui]** Bump react-router and jsdom ([#13301](https://github.com/traefik/traefik/pull/13301) @gndz07)
- **[k8s/gatewayapi]** Fix BackendTLSPolicy status update ([#13306](https://github.com/traefik/traefik/pull/13306) @AnatoleLucet)
- **[http3]** Bump github.com/quic-go/quic-go to v0.59.1 ([#13300](https://github.com/traefik/traefik/pull/13300) @rtribotte)
- **[webui]** Bump axios to v1.17.0 ([#13299](https://github.com/traefik/traefik/pull/13299) @gndz07)
- **[tls]** Fix snicheck with keepalive ([#13305](https://github.com/traefik/traefik/pull/13305) @juliens)

## [v2.11.49](https://github.com/traefik/traefik/tree/v2.11.49) (2026-06-05)
[All Commits](https://github.com/traefik/traefik/compare/v2.11.48...v2.11.49)

**Bug fixes:**
- **[http3]** Bump github.com/quic-go/quic-go to v0.59.1 ([#13300](https://github.com/traefik/traefik/pull/13300) @rtribotte)
- **[webui]** Bump axios to v1.17.0 ([#13299](https://github.com/traefik/traefik/pull/13299) @gndz07)
- **[tls]** Fix snicheck with keepalive ([#13305](https://github.com/traefik/traefik/pull/13305) @juliens)

## [v3.7.3](https://github.com/traefik/traefik/tree/v3.7.3) (2026-06-04)
[All Commits](https://github.com/traefik/traefik/compare/v3.7.1...v3.7.3)

**Bug fixes:**
- **[tls]** Compute resolved tlsOptions after applying models ([#13291](https://github.com/traefik/traefik/pull/13291) @rtribotte)
- **[webui, tcp]** Fix TCP router service resolution in dashboard flow diagram ([#13155](https://github.com/traefik/traefik/pull/13155) @aliamerj)
- **[k8s/ingress-nginx]** Trim quotes from proxy_set_header header name ([#13203](https://github.com/traefik/traefik/pull/13203) @crisbal)
- **[accesslogs]** Escape double quotes in quoted log fields ([#13180](https://github.com/traefik/traefik/pull/13180) @KaanSimsek)
- **[k8s/gatewayapi]** Escape exact gRPC method matches ([#13201](https://github.com/traefik/traefik/pull/13201) @nickmnt)
- **[logs, middleware]** Allow query parameters to be dropped from RequestPath in access log ([#13091](https://github.com/traefik/traefik/pull/13091) @calinelson)
- **[k8s/ingress-nginx]** Clear Ssl-Client-* headers when no client certificate is present ([#13260](https://github.com/traefik/traefik/pull/13260) @gndz07)
- **[k8s/gatewayapi]** Bump github.com/moby/spdystream to v0.5.1 ([#13252](https://github.com/traefik/traefik/pull/13252) @kevinpollet)
- **[file]** Improve file provider behavior regarding dangling symlinks ([#12449](https://github.com/traefik/traefik/pull/12449) @fh-yuxiao-zeng)
- **[server]** Bump github.com/bytedance/sonic to v1.15.1 ([#13254](https://github.com/traefik/traefik/pull/13254) @kevinpollet)
- **[middleware, authentication]** Add error on basic auth build if users is empty ([#13195](https://github.com/traefik/traefik/pull/13195) @rtribotte)
- **[k8s/ingress]** Avoid ingress path matcher injection and backport 11d251415 ([#13227](https://github.com/traefik/traefik/pull/13227) @rtribotte)
- **[server]** Move snicheck to ctx instead of simulated routing ([#13214](https://github.com/traefik/traefik/pull/13214) @juliens)
- **[middleware]** Reject requests with different paths after StripPrefix and StripPrefixRegex normalisation ([#13215](https://github.com/traefik/traefik/pull/13215) @rtribotte)
- **[server]** Bump golang.org/x/net to v0.55.0 ([#13251](https://github.com/traefik/traefik/pull/13251) @kevinpollet)
- **[k8s/gatewayapi]** Change default values and expose configuration for Kubernetes client QPS and Burst ([#13277](https://github.com/traefik/traefik/pull/13277) @kevinpollet)
- **[server]** Bump golang.org/x/crypto to v0.52.0 ([#13276](https://github.com/traefik/traefik/pull/13276) @rtribotte)

**Documentation:**
- **[k8s]** Document new chart behavior on Gateway API ([#13167](https://github.com/traefik/traefik/pull/13167) @mloiseleur)
- **[file]** Replace generated File routing reference page ([#13170](https://github.com/traefik/traefik/pull/13170) @sheddy-traefik)
- **[k8s/crd]** Fix typo in accesslogs field name ([#13177](https://github.com/traefik/traefik/pull/13177) @PlayMTL)
- **[k8s/ingress-nginx]** Surface the Ingress status race condition during NGINX coexistence ([#13205](https://github.com/traefik/traefik/pull/13205) @emilevauge)
- Polish grammar in migration guides ([#13174](https://github.com/traefik/traefik/pull/13174) @quyentonndbs)
- **[middleware]** Remove whitespace in HTML tag ([#13160](https://github.com/traefik/traefik/pull/13160) @marbon87)
- Add @LBF38 as a current maintainer ([#13225](https://github.com/traefik/traefik/pull/13225) @emilevauge)
- Add ingressClassName to Kubernetes CRD provider migration guide ([#13248](https://github.com/traefik/traefik/pull/13248) @kevinpollet)
- **[k8s/ingress-nginx]** Add nginx.ingress.kubernetes.io/enable-global-auth to the list of supported annotations ([#13219](https://github.com/traefik/traefik/pull/13219) @filip2mac)
- **[k8s/ingress-nginx]** Capitalize NGINX in kubernetesIngressNGINX ([#13236](https://github.com/traefik/traefik/pull/13236) @smellems)

## [v3.6.19](https://github.com/traefik/traefik/tree/v3.6.19) (2026-06-04)
[All Commits](https://github.com/traefik/traefik/compare/v3.6.17...v3.6.19)

**Bug fixes:**
- **[tls]** Compute resolved tlsOptions after applying models ([#13291](https://github.com/traefik/traefik/pull/13291) @rtribotte)
- **[accesslogs]** Escape double quotes in quoted log fields ([#13180](https://github.com/traefik/traefik/pull/13180) @KaanSimsek)
- **[k8s/gatewayapi]** Escape exact gRPC method matches ([#13201](https://github.com/traefik/traefik/pull/13201) @nickmnt)
- **[logs, middleware]** Allow query parameters to be dropped from RequestPath in access log ([#13091](https://github.com/traefik/traefik/pull/13091) @calinelson)
- **[k8s/gatewayapi]** Bump github.com/moby/spdystream to v0.5.1 ([#13252](https://github.com/traefik/traefik/pull/13252) @kevinpollet)
- **[file]** Improve file provider behavior regarding dangling symlinks ([#12449](https://github.com/traefik/traefik/pull/12449) @fh-yuxiao-zeng)
- **[server]** Bump github.com/bytedance/sonic to v1.15.1 ([#13254](https://github.com/traefik/traefik/pull/13254) @kevinpollet)
- **[middleware, authentication]** Add error on basic auth build if users is empty ([#13195](https://github.com/traefik/traefik/pull/13195) @rtribotte)
- **[k8s/ingress]** Avoid ingress path matcher injection and backport 11d251415 ([#13227](https://github.com/traefik/traefik/pull/13227) @rtribotte)
- **[server]** Move snicheck to ctx instead of simulated routing ([#13214](https://github.com/traefik/traefik/pull/13214) @juliens)
- **[middleware]** Reject requests with different paths after StripPrefix and StripPrefixRegex normalisation ([#13215](https://github.com/traefik/traefik/pull/13215) @rtribotte)
- **[server]** Bump golang.org/x/net to v0.55.0 ([#13251](https://github.com/traefik/traefik/pull/13251) @kevinpollet)
- **[k8s/gatewayapi]** Change default values and expose configuration for Kubernetes client QPS and Burst ([#13277](https://github.com/traefik/traefik/pull/13277) @kevinpollet)
- **[server]** Bump golang.org/x/crypto to v0.52.0 ([#13276](https://github.com/traefik/traefik/pull/13276) @rtribotte)

**Documentation:**
- **[file]** Replace generated File routing reference page ([#13170](https://github.com/traefik/traefik/pull/13170) @sheddy-traefik)
- **[k8s/crd]** Fix typo in accesslogs field name ([#13177](https://github.com/traefik/traefik/pull/13177) @PlayMTL)
- **[k8s/ingress-nginx]** Surface the Ingress status race condition during NGINX coexistence ([#13205](https://github.com/traefik/traefik/pull/13205) @emilevauge)
- Polish grammar in migration guides ([#13174](https://github.com/traefik/traefik/pull/13174) @quyentonndbs)
- **[middleware]** Remove whitespace in HTML tag ([#13160](https://github.com/traefik/traefik/pull/13160) @marbon87)
- Add @LBF38 as a current maintainer ([#13225](https://github.com/traefik/traefik/pull/13225) @emilevauge)
- **[k8s/ingress-nginx]** Capitalize NGINX in kubernetesIngressNGINX ([#13236](https://github.com/traefik/traefik/pull/13236) @smellems)

## [v2.11.48](https://github.com/traefik/traefik/tree/v2.11.48) (2026-06-04)
[All Commits](https://github.com/traefik/traefik/compare/v2.11.46...v2.11.48)

**Bug fixes:**
- **[tls]** Compute resolved tlsOptions after applying models ([#13291](https://github.com/traefik/traefik/pull/13291) @rtribotte)
- **[middleware, authentication]** Add error on basic auth build if users is empty ([#13195](https://github.com/traefik/traefik/pull/13195) @rtribotte)
- **[k8s/ingress]** Avoid ingress path matcher injection and backport 11d251415 ([#13227](https://github.com/traefik/traefik/pull/13227) @rtribotte)
- **[server]** Move snicheck to ctx instead of simulated routing ([#13214](https://github.com/traefik/traefik/pull/13214) @juliens)
- **[middleware]** Reject requests with different paths after StripPrefix and StripPrefixRegex normalisation ([#13215](https://github.com/traefik/traefik/pull/13215) @rtribotte)
- **[server]** Bump golang.org/x/net to v0.55.0 ([#13251](https://github.com/traefik/traefik/pull/13251) @kevinpollet)
- **[server]** Bump golang.org/x/crypto to v0.52.0 ([#13276](https://github.com/traefik/traefik/pull/13276) @rtribotte)
- 
## [v3.7.2](https://github.com/traefik/traefik/tree/v3.7.2) (2026-06-03)
[All Commits](https://github.com/traefik/traefik/compare/v3.7.1...v3.7.2)

Release canceled.

## [v3.6.18](https://github.com/traefik/traefik/tree/v3.6.18) (2026-06-03)
[All Commits](https://github.com/traefik/traefik/compare/v3.6.17...v3.6.18)

Release canceled.

## [v2.11.47](https://github.com/traefik/traefik/tree/v2.11.47) (2026-06-03)
[All Commits](https://github.com/traefik/traefik/compare/v2.11.46...v2.11.47)

Release canceled.

## [v3.7.1](https://github.com/traefik/traefik/tree/v3.7.1) (2026-05-11)
[All Commits](https://github.com/traefik/traefik/compare/v3.7.0...v3.7.1)

**Bug fixes:**
- **[k8s/ingress, k8s/crd, k8s/gatewayapi]** Add CrossProviderNamespaces option  ([#13094](https://github.com/traefik/traefik/pull/13094) @rtribotte)
- **[k8s/crd]** Fix cross-provider ref check for Kubernetes CRD provider ([#13121](https://github.com/traefik/traefik/pull/13121) @rtribotte)

## [v3.6.17](https://github.com/traefik/traefik/tree/v3.6.17) (2026-05-11)
[All Commits](https://github.com/traefik/traefik/compare/v3.6.16...v3.6.17)

**Bug fixes:**
- **[k8s/ingress, k8s/crd, k8s/gatewayapi]** Add CrossProviderNamespaces option  ([#13094](https://github.com/traefik/traefik/pull/13094) @rtribotte)
- **[k8s/crd]** Fix cross-provider ref check for Kubernetes CRD provider ([#13121](https://github.com/traefik/traefik/pull/13121) @rtribotte)

## [v2.11.46](https://github.com/traefik/traefik/tree/v2.11.46) (2026-05-11)
[All Commits](https://github.com/traefik/traefik/compare/v2.11.45...v2.11.46)

**Bug fixes:**
- **[k8s/ingress, k8s/crd, k8s/gatewayapi]** Add CrossProviderNamespaces option  ([#13094](https://github.com/traefik/traefik/pull/13094) @rtribotte)
- **[k8s/crd]** Fix cross-provider ref check for Kubernetes CRD provider ([#13121](https://github.com/traefik/traefik/pull/13121) @rtribotte)

##  [v3.7.0](https://github.com/traefik/traefik/tree/v3.7.0) (2026-05-05)
[All Commits](https://github.com/traefik/traefik/compare/v3.6.0-rc1...v3.7.0)

**Enhancements:**
- **[k8s/ingress-nginx]** Use a metamodel to generate dynamic configuration in ingress-nginx ([#13062](https://github.com/traefik/traefik/pull/13062) @juliens)
- **[k8s/ingress-nginx]** Add limit-connections support ([#13030](https://github.com/traefik/traefik/pull/13030) @amazon7737)
- **[webui]** Display server weight in service detail view ([#12325](https://github.com/traefik/traefik/pull/12325) @murataslan1)
- **[webui, tls]** Add certificates menu and overview ([#12628](https://github.com/traefik/traefik/pull/12628) @holomekc)
- **[provider]** Add providers routing precedence configuration ([#12895](https://github.com/traefik/traefik/pull/12895) @juliens)
- **[k8s/ingress-nginx]** Support NGINX global auth annotation ([#12893](https://github.com/traefik/traefik/pull/12893) @foxcool)
- **[k8s/ingress-nginx]** Add limit-burst-multiplier annotation support ([#12899](https://github.com/traefik/traefik/pull/12899) @amazon7737)
- **[k8s/ingress-nginx, k8s/ingress, rules]** Add wildcard host in Host and HostSNI matchers ([#12884](https://github.com/traefik/traefik/pull/12884) @juliens)
- **[k8s/gatewayapi]** Support multiple certificateRefs on gateway listeners ([#12590](https://github.com/traefik/traefik/pull/12590) @mortennordbye)
- **[k8s/gatewayapi]** Add secret support for BackendTLSPolicy caCertificateRefs ([#12927](https://github.com/traefik/traefik/pull/12927) @kevinpollet)
- **[accesslogs, k8s/ingress-nginx]** Support nginx.ingress.kubernetes.io/enable-access-log annotation ([#12908](https://github.com/traefik/traefik/pull/12908) @ris-tlp)
- **[accesslogs, k8s/ingress-nginx, k8s/ingress]** Add Kubernetes Ingress logs fields ([#12913](https://github.com/traefik/traefik/pull/12913) @rtribotte)
- **[k8s/knative]** Support knative v1.20.0 ([#12441](https://github.com/traefik/traefik/pull/12441) @idurgakalyan)
- **[k8s/gatewayapi]** Bump sigs.k8s.io/gateway-api to v1.5.1 ([#12768](https://github.com/traefik/traefik/pull/12768) @mmatur)
- **[k8s/ingress-nginx, middleware, authentication]** Add support for auth-snippet ([#12778](https://github.com/traefik/traefik/pull/12778) @juliens)
- **[accesslogs, otel]** Allow Stdio access logs alongsige OTLP logging ([#12307](https://github.com/traefik/traefik/pull/12307) @Mulgish)
- **[acme]** Add CertificateTimeout ACME configuration option ([#12278](https://github.com/traefik/traefik/pull/12278) @ceko)
- **[k8s/ingress-nginx]** Support nginx.ingress.kubernetes.io/allowlist-source-range ([#12659](https://github.com/traefik/traefik/pull/12659) @ris-tlp)
- **[k8s/crd]** Add ingressClassName field to the CRDs spec ([#12313](https://github.com/traefik/traefik/pull/12313) @kkrypt0nn)
- **[k8s/crd]** Service failover support in TraefikService CRD ([#12733](https://github.com/traefik/traefik/pull/12733) @jspdown)
- **[k8s/crd, service]** Support cipher suites configuration with ServersTransport ([#11965](https://github.com/traefik/traefik/pull/11965) @NEwa-05)
- **[k8s/ingress, middleware, k8s/crd, service, k8s/gatewayapi]** Services middleware and Gateway API filters on HTTP backends ([#12544](https://github.com/traefik/traefik/pull/12544) @juliens)
- **[k8s/ingress-nginx]** Add nginx.ingress.kubernetes.io/proxy-connect-timeout annotation ([#12572](https://github.com/traefik/traefik/pull/12572) @gndz07)
- **[k8s/ingress-nginx]** Add rewrite-target nginx annotations support ([#12534](https://github.com/traefik/traefik/pull/12534) @LBF38)
- **[k8s/ingress-nginx]** Add support for app-root nginx annotation ([#12576](https://github.com/traefik/traefik/pull/12576) @LBF38)
- **[k8s/ingress-nginx]** Add support for auth-signin annotation ([#12502](https://github.com/traefik/traefik/pull/12502) @DesalLama)
- **[k8s/ingress-nginx]** Add support for from-to-www-redirect NGINX annotation ([#12610](https://github.com/traefik/traefik/pull/12610) @LBF38)
- **[k8s/ingress-nginx]** Add support for proxy-read-timeout and proxy-send-timeout NGINX annotations ([#12630](https://github.com/traefik/traefik/pull/12630) @LBF38)
- **[k8s/ingress-nginx]** Add support for session-cookie-expires nginx annotation ([#12558](https://github.com/traefik/traefik/pull/12558) @LBF38)
- **[k8s/ingress-nginx]** Add support for upstream-hash-by NGINX annotation ([#12749](https://github.com/traefik/traefik/pull/12749) @LBF38)
- **[k8s/ingress-nginx]** Allow entry points to be specified on Nginx Ingresses ([#12727](https://github.com/traefik/traefik/pull/12727) @ajacques)
- **[k8s/ingress-nginx]** Implement proxy-http-version annotation ([#12743](https://github.com/traefik/traefik/pull/12743) @KshitijBharde)
- **[k8s/ingress-nginx]** Nginx x-forwarded-prefix annotation ([#12697](https://github.com/traefik/traefik/pull/12697) @nandorKollar)
- **[k8s/ingress-nginx]** Support auth-tls-secret and auth-tls-verify-client annotations ([#12595](https://github.com/traefik/traefik/pull/12595) @gndz07)
- **[k8s/ingress-nginx]** Support limit-rpm annotation for ingress-nginx ([#12703](https://github.com/traefik/traefik/pull/12703) @Ph4rell)
- **[k8s/ingress-nginx]** Support limit-rps annotation for Ingress NGINX ([#12709](https://github.com/traefik/traefik/pull/12709) @amazon7737)
- **[k8s/ingress-nginx]** Support NGINX buffering annotations ([#12459](https://github.com/traefik/traefik/pull/12459) @blasko03)
- **[k8s/ingress-nginx]** Support NGINX canary annotations ([#12739](https://github.com/traefik/traefik/pull/12739) @kevinpollet)
- **[k8s/ingress-nginx]** Support NGINX custom-headers annotation ([#12414](https://github.com/traefik/traefik/pull/12414) @nandorKollar)
- **[k8s/ingress-nginx]** Support NGINX upstream-vhost annotation ([#12412](https://github.com/traefik/traefik/pull/12412) @nandorKollar)
- **[k8s/ingress-nginx]** Support NGINX whitelist-source-range annotation ([#12423](https://github.com/traefik/traefik/pull/12423) @blasko03)
- **[k8s/ingress-nginx]** Support permanent-redirect and temporal-redirect annotations ([#12561](https://github.com/traefik/traefik/pull/12561) @LBF38)
- **[k8s/ingress-nginx]** Support proxy-next-upstream* annotations ([#12710](https://github.com/traefik/traefik/pull/12710) @gndz07)
- **[k8s/ingress-nginx]** Support server-alias annotation for Ingress NGINX ([#12707](https://github.com/traefik/traefik/pull/12707) @amazon7737)
- **[k8s/ingress-nginx]** Support upstream-keepalive-timeout ([#12708](https://github.com/traefik/traefik/pull/12708) @jcob-sikorski)
- **[k8s/ingress-nginx]** Add support for variable interpolation in auth-signin NGINX annotation ([#12640](https://github.com/traefik/traefik/pull/12640) @LBF38)
- **[k8s/ingress-nginx]** Implement server-snippet and configuration-snippet annotations ([#12715](https://github.com/traefik/traefik/pull/12715) @juliens)
- **[k8s/ingress-nginx]** Add custom-http-errors and default-backend annotations ([#12637](https://github.com/traefik/traefik/pull/12637) @juliens)
- **[k8s/ingress-nginx]** Support auth-tls-pass-certificate-to-upstream annotation ([#12629](https://github.com/traefik/traefik/pull/12629) @gndz07)
- **[metrics]** Support file path for metrics.influxdb2.token option ([#12458](https://github.com/traefik/traefik/pull/12458) @barhun)
- **[middleware]** Add encodedCharacters middleware ([#12555](https://github.com/traefik/traefik/pull/12555) @gndz07)
- **[middleware]** Enable retries based on HTTP response status codes, timeout, and non-idempotent methods ([#12667](https://github.com/traefik/traefik/pull/12667) @LBF38)
- **[middleware, authentication]** Add authSignInURL in forward auth middleware ([#12293](https://github.com/traefik/traefik/pull/12293) @kyounghunJang)
- **[server]** Add global option to disable X-Forwarded-For appending ([#12374](https://github.com/traefik/traefik/pull/12374) @lbenguigui)
- **[server]** Replace Split in loops with more efficient SplitSeq ([#12316](https://github.com/traefik/traefik/pull/12316) @boqishan)
- **[service]** Failover according to response status code ([#12596](https://github.com/traefik/traefik/pull/12596) @lbenguigui)
- **[tls]** Make TLSStore gracefully handle missing secrets ([#12522](https://github.com/traefik/traefik/pull/12522) @david-garcia-garcia)
- **[webui]** Add dashboard name configuration ([#12410](https://github.com/traefik/traefik/pull/12410) @gndz07)
- **[webui]** Web UI dashboard improvements ([#12236](https://github.com/traefik/traefik/pull/12236) @gndz07)
- **[webui]** Details pages UI improvement ([#12377](https://github.com/traefik/traefik/pull/12377) @gndz07)
- Use unicode.MaxASCII for clearer ASCII check ([#12741](https://github.com/traefik/traefik/pull/12741) @1911860538)

**Bug fixes:**
- **[k8s/ingress-nginx]** Add ipAllowListStrategy option for allowlist/whitelist annotations ([#12932](https://github.com/traefik/traefik/pull/12932) @mathieuherbert)
- **[k8s/ingress-nginx]** Fix regressions after refacto of the ingress-nginx provider ([#13086](https://github.com/traefik/traefik/pull/13086) @juliens)
- **[k8s/ingress-nginx]** Fix typo in default CORS allowed headers ([#13088](https://github.com/traefik/traefik/pull/13088) @mliang2)
- **[docker, ecs]** Migrate to github.com/moby/moby modules ([#12672](https://github.com/traefik/traefik/pull/12672) @thaJeztah)
- **[logs, metrics, tracing]** Bump go.opentelemetry.io/otel ([#13100](https://github.com/traefik/traefik/pull/13100) @juliens)
- **[k8s/crd]** Remove cross-provider sanitization for Kubernetes service loading ([#13087](https://github.com/traefik/traefik/pull/13087) @rtribotte)
- **[docker, ecs]** Migrate to github.com/moby/moby modules ([#13053](https://github.com/traefik/traefik/pull/13053) @mmatur)
- **[k8s/ingress-nginx]** Fix SSL redirect behavior for ingress-nginx provider ([#13028](https://github.com/traefik/traefik/pull/13028) @gndz07)
- **[k8s/ingress-nginx]** Do not require a port for ExternalName services ([#13033](https://github.com/traefik/traefik/pull/13033) @kevinpollet)
- **[k8s, k8s/ingress-nginx]** Add regression test for ingress default backend without rules ([#13066](https://github.com/traefik/traefik/pull/13066) @mmatur)
- **[acme]** Bump github.com/go-acme/lego/v4 to v4.35.1 ([#13027](https://github.com/traefik/traefik/pull/13027) @ldez)
- **[server]** Bump github.com/vulcand/oxy to v2.1.0 ([#13046](https://github.com/traefik/traefik/pull/13046) @ldez)
- **[acme]** Bump github.com/go-acme/lego/v4 to v4.35.2 ([#13043](https://github.com/traefik/traefik/pull/13043) @ldez)
- **[middleware]** Add errorRequestHeaders option to Errors middleware ([#13034](https://github.com/traefik/traefik/pull/13034) @gndz07)
- **[acme]** Bump github.com/go-acme/lego/v4 to v4.34.0 ([#12993](https://github.com/traefik/traefik/pull/12993) @ldez)
- **[docker]** Downgrade log level for missing container on inspect ([#12900](https://github.com/traefik/traefik/pull/12900) @Otoru)
- **[k8s/crd, k8s]** Honor allowCrossNamespace with chain middleware CRD ([#12976](https://github.com/traefik/traefik/pull/12976) @rtribotte)
- **[k8s/ingress-nginx]** Avoid 302 redirect when rewrite-target value is not an absolute URL for ingress-nginx provider ([#12977](https://github.com/traefik/traefik/pull/12977) @gndz07)
- **[k8s/ingress-nginx]** Fix custom headers annotation with 503 Service Unavailable ([#12969](https://github.com/traefik/traefik/pull/12969) @LBF38)
- **[k8s/ingress-nginx]** Fix service unavailable on ingress-nginx ([#12996](https://github.com/traefik/traefik/pull/12996) @LBF38)
- **[k8s/ingress-nginx]** Handle duplicate server-alias on ingress-nginx provider ([#13019](https://github.com/traefik/traefik/pull/13019) @gndz07)
- **[k8s/ingress-nginx]** Use QuoteMeta for cookie name when building canary rules ([#12973](https://github.com/traefik/traefik/pull/12973) @kevinpollet)
- **[middleware, authentication]** Cleanup and make ForwardAuth logs consistent ([#13013](https://github.com/traefik/traefik/pull/13013) @kevinpollet)
- **[middleware, authentication]** Fix trustForwardHeader on forward auth middleware ([#12994](https://github.com/traefik/traefik/pull/12994) @juliens)
- **[middleware, authentication]** Remove map lookup making the basic auth notFoundSecret empty ([#12960](https://github.com/traefik/traefik/pull/12960) @rtribotte)
- **[middleware, k8s/ingress-nginx]** Fix app-root with query params redirect ([#12986](https://github.com/traefik/traefik/pull/12986) @LBF38)
- **[middleware, k8s/ingress-nginx]** Fix rewrite target with full URL and no regex in ingress path ([#12992](https://github.com/traefik/traefik/pull/12992) @LBF38)
- **[middleware, k8s/ingress-nginx]** Preserve request query on absolute-URL redirect ([#13020](https://github.com/traefik/traefik/pull/13020) @SAY-5)
- **[middleware, k8s/ingress-nginx]** Resolve NGINX variables in ingress-nginx upstream-vhost annotation ([#12978](https://github.com/traefik/traefik/pull/12978) @mmatur)
- **[middleware]** Deprecate ForwardAuth.TrustForwardHeader option ([#13012](https://github.com/traefik/traefik/pull/13012) @kevinpollet)
- **[middleware]** Remove untrusted X headers with underscores ([#12961](https://github.com/traefik/traefik/pull/12961) @rtribotte)
- **[middleware]** Sanitize the request URL after stripping the prefix ([#12990](https://github.com/traefik/traefik/pull/12990) @kevinpollet)
- **[sticky-session, k8s/crd]** Make SameSite cookie value case-insensitive ([#12922](https://github.com/traefik/traefik/pull/12922) @murataslan1)
- **[tls]** Restore default cipher suites when serversTransport has no explicit cipherSuites ([#12974](https://github.com/traefik/traefik/pull/12974) @mmatur)
- **[webui]** Bump lodash version ([#12954](https://github.com/traefik/traefik/pull/12954) @gndz07)
- **[webui]** Upgrade form-data to 2.5.4, 3.0.4, 4.0.4 ([#12958](https://github.com/traefik/traefik/pull/12958) @orbisai0security)
- **[k8s/ingress-nginx]** Fix rewrite-target annotation handling with empty path and non-regex path ([#12905](https://github.com/traefik/traefik/pull/12905) @LBF38)
- **[middleware]** Bump github.com/klauspost/compress v1.18.4 ([#12937](https://github.com/traefik/traefik/pull/12937) @thaJeztah)
- **[k8s/crd]** Fix panic with Failover services in Kubernetes ([#12853](https://github.com/traefik/traefik/pull/12853) @juliens)
- **[k8s/ingress-nginx]** Fix rewrite directive in configuration-snippet to trim quotes ([#12855](https://github.com/traefik/traefik/pull/12855) @gndz07)
- **[k8s/ingress-nginx]** Fix rewrite-target to handle full URL ([#12854](https://github.com/traefik/traefik/pull/12854) @gndz07)
- **[k8s/ingress-nginx]** Handle empty rewrite-target like unset rewrite-target ([#12832](https://github.com/traefik/traefik/pull/12832) @sathieu)
- **[k8s/ingress-nginx]** Fix TLS behavior in ingress-nginx provider ([#12831](https://github.com/traefik/traefik/pull/12831) @LBF38)
- **[k8s/ingress-nginx]** Fix auth-response-headers whitespace trimming in ingress-nginx provider ([#12856](https://github.com/traefik/traefik/pull/12856) @mmatur)
- **[acme]** Bump github.com/go-acme/lego/v4 to v4.33.0 ([#12840](https://github.com/traefik/traefik/pull/12840) @ldez)
- **[server, tcp]** Fix postgres STARTTLS with TLS termination ([#12847](https://github.com/traefik/traefik/pull/12847) @mmatur)
- **[api]** Fix allow colons and tildes in api.basePath validation ([#12857](https://github.com/traefik/traefik/pull/12857) @mmatur)
- **[server]** Fix comment and unnecessary allocation in withRoutingPath ([#12880](https://github.com/traefik/traefik/pull/12880) @boinger)
- **[grpc]** Bump google.golang.org/grpc to v1.79.3 ([#12845](https://github.com/traefik/traefik/pull/12845) @mmatur)
- **[middleware, authentication]** Prevent duplicate user headers in basic and digest auth middleware ([#12851](https://github.com/traefik/traefik/pull/12851) @juliens)
- **[middleware]** Fix StripPrefix and StripPrefixRegex to slice the prefix using encoded prefix length ([#12863](https://github.com/traefik/traefik/pull/12863) @gndz07)
- **[k8s/ingress-nginx]** Fix use-regex annotation behavior and add strictValidatePathType config for ingress-nginx provider ([#12773](https://github.com/traefik/traefik/pull/12773) @gndz07)
- **[logs, otel]** Add OTel-conformant trace context attributes to access logs ([#12801](https://github.com/traefik/traefik/pull/12801) @mmatur)
- **[k8s/gatewayapi]** Fix incorrect hostname matching between listener and route ([#12599](https://github.com/traefik/traefik/pull/12599) @TheColorman)
- **[k8s/ingress]** Fix ingress router's rule ([#12808](https://github.com/traefik/traefik/pull/12808) @gndz07)
- **[webui]** Remove AGPL license in code ([#12799](https://github.com/traefik/traefik/pull/12799) @Desel72)
- **[k8s/ingress-nginx]** Fix proxy-ssl-verify annotation ([#12825](https://github.com/traefik/traefik/pull/12825) @LBF38)
- **[http]** Add maxResponseBodySize configuration on HTTP provider ([#12788](https://github.com/traefik/traefik/pull/12788) @gndz07)
- **[tls]** Support fragmented TLS client hello ([#12787](https://github.com/traefik/traefik/pull/12787) @rtribotte)
- **[middleware, authentication]** Make basic auth check timing constant ([#12803](https://github.com/traefik/traefik/pull/12803) @rtribotte)
- **[acme]** Add missing renew options ([#12467](https://github.com/traefik/traefik/pull/12467) @ldez)
- **[acme]** Add timeout to ACME-TLS/1 challenge handshake ([#12516](https://github.com/traefik/traefik/pull/12516) @LBF38)
- **[acme]** Alter TLS renewal period ([#12479](https://github.com/traefik/traefik/pull/12479) @LtHummus)
- **[acme]** Bump github.com/go-acme/lego/v4 to v4.28.0 ([#12218](https://github.com/traefik/traefik/pull/12218) @ldez)
- **[acme]** Bump github.com/go-acme/lego/v4 to v4.29.0 ([#12333](https://github.com/traefik/traefik/pull/12333) @ldez)
- **[acme]** Bump github.com/go-acme/lego/v4 to v4.30.1 ([#12432](https://github.com/traefik/traefik/pull/12432) @ldez)
- **[acme]** Bump github.com/go-acme/lego/v4 to v4.31.0 ([#12529](https://github.com/traefik/traefik/pull/12529) @ldez)
- **[acme]** Bump github.com/go-acme/lego/v4 to v4.32.0 ([#12702](https://github.com/traefik/traefik/pull/12702) @ldez)
- **[acme]** Remove invalid private key in log ([#12574](https://github.com/traefik/traefik/pull/12574) @juliens)
- **[acme]** Replace hardcoded references to LetsEncrypt in log messages ([#12464](https://github.com/traefik/traefik/pull/12464) @schildbach)
- **[cli]** Fix health check ping ([#12512](https://github.com/traefik/traefik/pull/12512) @olamilekan000)
- **[docker]** Auto-negotiate Docker API Version ([#12256](https://github.com/traefik/traefik/pull/12256) @felixbuenemann)
- **[docker]** Bump Docker and OpenTelemetry dependencies ([#12761](https://github.com/traefik/traefik/pull/12761) @mmatur)
- **[docker, docker/swarm]** Auto-negotiate Docker API version ([#12262](https://github.com/traefik/traefik/pull/12262) @kevinpollet)
- **[fastproxy]** Bump github.com/valyala/fasthttp to v1.69.0 ([#12763](https://github.com/traefik/traefik/pull/12763) @kevinpollet)
- **[healthcheck]** Reject absolute URL in healthcheck path configuration ([#12653](https://github.com/traefik/traefik/pull/12653) @rtribotte)
- **[healthcheck]** Validate healthcheck path configuration ([#12642](https://github.com/traefik/traefik/pull/12642) @rtribotte)
- **[healthcheck, grpc]** Remove path parsing with grpc healthcheck ([#12760](https://github.com/traefik/traefik/pull/12760) @rtribotte)
- **[http3]** Bump github.com/quic-go/quic-go to v0.57.0 ([#12308](https://github.com/traefik/traefik/pull/12308) @GreyXor)
- **[http3]** Bump github.com/quic-go/quic-go to v0.57.1 ([#12319](https://github.com/traefik/traefik/pull/12319) @GreyXor)
- **[http3]** Bump github.com/quic-go/quic-go to v0.58.0 ([#12448](https://github.com/traefik/traefik/pull/12448) @GreyXor)
- **[http3]** Bump github.com/quic-go/quic-go to v0.59.0 ([#12553](https://github.com/traefik/traefik/pull/12553) @jnoordsij)
- **[k8s]** Fix condition used for serving and fenced endpoints ([#12521](https://github.com/traefik/traefik/pull/12521) @LBF38)
- **[k8s/gatewayapi]** Fix Gateway API router's rules ([#12753](https://github.com/traefik/traefik/pull/12753) @rtribotte)
- **[k8s/ingress]** Fix panic for empty defaultBackend and defaultBackend without resources ([#12509](https://github.com/traefik/traefik/pull/12509) @gndz07)
- **[k8s/ingress-nginx]** Add AllowCrossNamespaceResources and GlobalAllowedResponseHeader options to control custom headers annotations ([#12680](https://github.com/traefik/traefik/pull/12680) @rtribotte)
- **[k8s/ingress-nginx]** Deprecate Kubernetes Ingress NGINX provider experimental flag ([#12286](https://github.com/traefik/traefik/pull/12286) @rtribotte)
- **[k8s/ingress-nginx]** Fix nginx rewrite target ([#12730](https://github.com/traefik/traefik/pull/12730) @mmatur)
- **[k8s/ingress-nginx]** Fix NGINX sslredirect annotation support ([#12387](https://github.com/traefik/traefik/pull/12387) @rtribotte)
- **[k8s/ingress-nginx]** Fix nginx.ingress.kubernetes.io/proxy-ssl-verify annotation support ([#12351](https://github.com/traefik/traefik/pull/12351) @rtribotte)
- **[k8s/ingress-nginx]** Fix SSL redirect to match NGINX behavior ([#12361](https://github.com/traefik/traefik/pull/12361) @mmatur)
- **[k8s/ingress-nginx]** Fix the service name for ingress-nginx provider ([#12352](https://github.com/traefik/traefik/pull/12352) @mmatur)
- **[k8s/ingress-nginx]** Fix use-regex nginx annotation ([#12531](https://github.com/traefik/traefik/pull/12531) @LBF38)
- **[k8s/ingress-nginx]** Prevent Ingress Nginx provider http router to attach to an entrypoint with TLS ([#12528](https://github.com/traefik/traefik/pull/12528) @rtribotte)
- **[metrics, tracing, accesslogs]** Fix ObservabilityConfig SetDefaults  ([#12636](https://github.com/traefik/traefik/pull/12636) @mmatur)
- **[middleware]** Fix case sensitivity on x-forwarded headers for Connection ([#12690](https://github.com/traefik/traefik/pull/12690) @LBF38)
- **[middleware]** Fix HasSecureHeadersDefined returning false when stsSeconds is 0 ([#12684](https://github.com/traefik/traefik/pull/12684) @veeceey)
- **[middleware, authentication]** Add maxResponseBodySize configuration to forwardAuth middleware ([#12694](https://github.com/traefik/traefik/pull/12694) @gndz07)
- **[middleware, authentication]** Change ForwardAuth error log level from DEBUG to ERROR ([#12324](https://github.com/traefik/traefik/pull/12324) @murataslan1)
- **[middleware, authentication]** Handle empty/missing User-Agent header ([#12545](https://github.com/traefik/traefik/pull/12545) @a-stangl)
- **[middleware, k8s, k8s/ingress-nginx]** Fix from to www nginx annotation ([#12736](https://github.com/traefik/traefik/pull/12736) @mmatur)
- **[middleware, k8s/ingress-nginx]** Fix custom error pages behavior for ingress-nginx provider ([#12738](https://github.com/traefik/traefik/pull/12738) @mmatur)
- **[otel]** Bump go.opentelemetry.io/otel dependencies ([#12754](https://github.com/traefik/traefik/pull/12754) @rtribotte)
- **[plugins]** Validate plugin module name ([#12291](https://github.com/traefik/traefik/pull/12291) @kevinpollet)
- **[redis]** Fix mutually exclusive verification for Redis ([#12442](https://github.com/traefik/traefik/pull/12442) @juliens)
- **[server]** Bump golang.org/x/crypto to v0.45.0 ([#12296](https://github.com/traefik/traefik/pull/12296) @kevinpollet)
- **[server]** Bump golang.org/x/net to v0.51.0 ([#12756](https://github.com/traefik/traefik/pull/12756) @kevinpollet)
- **[server]** Filter unknown nodes with file and env for the deprecation loader ([#12227](https://github.com/traefik/traefik/pull/12227) @rtribotte)
- **[server]** Fix deny encoded characters ([#12454](https://github.com/traefik/traefik/pull/12454) @rtribotte)
- **[server]** Fix deny encoded characters ([#12457](https://github.com/traefik/traefik/pull/12457) @rtribotte)
- **[server]** Fix multi-layer routing with models ([#12258](https://github.com/traefik/traefik/pull/12258) @juliens)
- **[server]** Fix TLS handshake error handling ([#12692](https://github.com/traefik/traefik/pull/12692) @juliens)
- **[server]** Make encoded character options opt-in ([#12540](https://github.com/traefik/traefik/pull/12540) @gndz07)
- **[server]** Make the aggregator compute provider namespace for router's parentRefs ([#12235](https://github.com/traefik/traefik/pull/12235) @rtribotte)
- **[server]** Print access logs for rejected requests and warn about new behavior ([#12424](https://github.com/traefik/traefik/pull/12424) @kevinpollet)
- **[server]** Print access logs for rejected requests and warn about new behavior ([#12426](https://github.com/traefik/traefik/pull/12426) @rtribotte)
- **[server]** Reject suspicious encoded characters ([#12360](https://github.com/traefik/traefik/pull/12360) @rtribotte)
- **[server]** Remove conn deadline after STARTTLS negociation ([#12639](https://github.com/traefik/traefik/pull/12639) @rtribotte)
- **[service]** Avoid recursion with services ([#12591](https://github.com/traefik/traefik/pull/12591) @juliens)
- **[tls]** Fix verifyServerCertMatchesURI function behavior ([#12575](https://github.com/traefik/traefik/pull/12575) @kevinpollet)
- **[tls, server]** Cap TLS record length to RFC 8446 limit in ClientHello peeking ([#12638](https://github.com/traefik/traefik/pull/12638) @mmatur)
- **[tracing, otel]** Use ParentBased sampler to respect parent span sampling decision ([#12403](https://github.com/traefik/traefik/pull/12403) @xe-leon)
- **[udp]** Revert "Avoid allocations in readLoop by using sync.Pool" ([#12267](https://github.com/traefik/traefik/pull/12267) @kevinpollet)
- **[webui]** Bump dependencies of documentation and webui ([#12581](https://github.com/traefik/traefik/pull/12581) @gndz07)
- **[webui]** Fix basePath validation for dashboard template ([#12729](https://github.com/traefik/traefik/pull/12729) @gndz07)
- **[webui]** Fix blocked navigation on Safari ([#12231](https://github.com/traefik/traefik/pull/12231) @gndz07)
- **[webui]** Fix missing type definition ([#12780](https://github.com/traefik/traefik/pull/12780) @gndz07)
- **[webui]** Fix priority display in dashboard and ACME bypass redirect ([#12740](https://github.com/traefik/traefik/pull/12740) @mmatur)
- **[webui]** Restore remote Upgrade to Hub button web component ([#12219](https://github.com/traefik/traefik/pull/12219) @gndz07)
- **[webui]** Use url.Parse to validate X-Forwarded-Prefix value ([#12643](https://github.com/traefik/traefik/pull/12643) @kevinpollet)
- **[webui]** Validate X-Forwarded-Prefix value for dashboard redirect ([#12514](https://github.com/traefik/traefik/pull/12514) @LBF38)

**Documentation:**
- **[service]** Service-level Middleware Documentation ([#13095](https://github.com/traefik/traefik/pull/13095) @nmengin)
- **[k8s/gatewayapi]** Update Helm chart values link for Kubernetes Gateway ([#13063](https://github.com/traefik/traefik/pull/13063) @0054)
- **[k8s/ingress-nginx]** Add ingress-nginx ConfigMap migration step ([#12963](https://github.com/traefik/traefik/pull/12963) @sheddy-traefik)
- **[k8s/ingress-nginx]** Delete the coming soon section from the ingress-nginx documentation ([#13037](https://github.com/traefik/traefik/pull/13037) @nmengin)
- **[k8s]** Fix yaml indentation ([#12957](https://github.com/traefik/traefik/pull/12957) @isayme)
- **[k8s]** Clarify install config watchNamespace watches only one namespace ([#12962](https://github.com/traefik/traefik/pull/12962) @parkerfath)
- **[k8s/crd]** Update ingressroute.md ([#12916](https://github.com/traefik/traefik/pull/12916) @Rajakavitha1)
- **[k8s/ingress-nginx]** Document the rd parameter behavior for the auth-signin annotation ([#13017](https://github.com/traefik/traefik/pull/13017) @kevinpollet)
- Reverse versions order in migration guide ([#12959](https://github.com/traefik/traefik/pull/12959) @nmengin)
- Update vulnerability submission guidelines ([#12968](https://github.com/traefik/traefik/pull/12968) @emilevauge)
- **[docker]** Fix docker-compose.yaml location in Docker setup page ([#12860](https://github.com/traefik/traefik/pull/12860) @ScottA38)
- **[docker, consul, ecs, k8s]** Fix documentation on how to restrict the scope of service discovery ([#12645](https://github.com/traefik/traefik/pull/12645) @mloiseleur)
- **[k8s/gatewayapi]** Update gateway-api link in getting-started to v1.5.1 ([#12930](https://github.com/traefik/traefik/pull/12930) @isayme)
- **[k8s/ingress-nginx]** Add OVHcloud (OpenStack Octavia) to Cloud-Specific IP Management ([#12759](https://github.com/traefik/traefik/pull/12759) @antonin-a)
- **[k8s/ingress-nginx]** Clarify IngressClass selection logic ([#12926](https://github.com/traefik/traefik/pull/12926) @kevinpollet)
- Add redirects for deleted pages ([#12889](https://github.com/traefik/traefik/pull/12889) @sheddy-traefik)
- Fix default value of http.sanitizePath ([#12904](https://github.com/traefik/traefik/pull/12904) @iTob191)
- **[acme]** Clarify CNAME explanation in ACME Documentation ([#12818](https://github.com/traefik/traefik/pull/12818) @sheddy-traefik)
- **[k8s/ingress-nginx]** Add ingress-nginx migration banner on documentation pages ([#12872](https://github.com/traefik/traefik/pull/12872) @gndz07)
- **[k8s/ingress]** Improve Kubernetes Ingress Routing Documentation ([#12876](https://github.com/traefik/traefik/pull/12876) @sheddy-traefik)
- **[k8s/ingress-nginx]** Clarify that NGINX Ingress watchNamespace watches only one namespace ([#12873](https://github.com/traefik/traefik/pull/12873) @parkerfath)
- **[k8s]** Improve the multi tenant security note ([#12822](https://github.com/traefik/traefik/pull/12822) @nmengin)
- Fix unnecessary escaping of pipe in regexp examples ([#12784](https://github.com/traefik/traefik/pull/12784) @diegmonti)
- Add vulnerability submission quality guidelines ([#12807](https://github.com/traefik/traefik/pull/12807) @emilevauge)
- Fix start up message format ([#12806](https://github.com/traefik/traefik/pull/12806) @mloiseleur)
- Remove unsupported servers[n].address from TCP label examples ([#12817](https://github.com/traefik/traefik/pull/12817) @sheddy-traefik)
- Bump mkdocs-traefiklabs to use consent mode ([#12804](https://github.com/traefik/traefik/pull/12804) @darkweaver87)
- **[acme]** Add missing ACME options and clean up table for more visibility ([#12208](https://github.com/traefik/traefik/pull/12208) @sheddy-traefik)
- **[api]** Fix typo in API dashboard configuration instructions ([#12335](https://github.com/traefik/traefik/pull/12335) @NAICOLAS)
- **[docker]** Add documentation for loadbalancer.server.url in Docker and Swarm providers ([#12289](https://github.com/traefik/traefik/pull/12289) @webash)
- **[docker]** Update docker in-depth setup guide ([#12682](https://github.com/traefik/traefik/pull/12682) @mdevino)
- **[docker/swarm]** Update swarm.md traefik version ([#12508](https://github.com/traefik/traefik/pull/12508) @DBouraoui)
- **[k8s]** Fix Gateway API version and the list of features supported ([#12254](https://github.com/traefik/traefik/pull/12254) @nmengin)
- **[k8s]** Fix Kubernetes reference yml file ([#12406](https://github.com/traefik/traefik/pull/12406) @mmatur)
- **[k8s]** Fix kubernetes.md with correct http redirections ([#12603](https://github.com/traefik/traefik/pull/12603) @MartenM)
- **[k8s]** Fix Nginx provider documentation ([#12266](https://github.com/traefik/traefik/pull/12266) @nmengin)
- **[k8s]** Improve the K8S multi-tenancy security note ([#12444](https://github.com/traefik/traefik/pull/12444) @nmengin)
- **[k8s]** Make labelSelector option casing more consistent ([#12658](https://github.com/traefik/traefik/pull/12658) @holysoles)
- **[k8s, k8s/ingress-nginx]** Add configmaps right to Ingress NGINX RBAC ([#12557](https://github.com/traefik/traefik/pull/12557) @kevinpollet)
- **[k8s/gatewayapi]** Fix links of Helm chart values reference to providers.kubernetesGateway.enabled ([#12315](https://github.com/traefik/traefik/pull/12315) @shouhei)
- **[k8s/ingress, k8s]** Fix Kubernetes Ingress provider documentation ([#12443](https://github.com/traefik/traefik/pull/12443) @nmengin)
- **[k8s/ingress-nginx]** Add auth-signin to unsupported nginx annotations list ([#12370](https://github.com/traefik/traefik/pull/12370) @fibsifan)
- **[k8s/ingress-nginx]** Add RBAC documentation for Ingress NGINX provider ([#12445](https://github.com/traefik/traefik/pull/12445) @nmn3m)
- **[k8s/ingress-nginx]** Add temporary note to advertise the incoming NGINX annotations ([#12699](https://github.com/traefik/traefik/pull/12699) @nmengin)
- **[k8s/ingress-nginx]** Fix default value of ingress-nginx provider in documentation ([#12328](https://github.com/traefik/traefik/pull/12328) @mloiseleur)
- **[k8s/ingress-nginx]** Fix ingress-nginx annotations documentation ([#12510](https://github.com/traefik/traefik/pull/12510) @nmengin)
- **[k8s/ingress-nginx]** Improve ingress-nginx provider documentation ([#12288](https://github.com/traefik/traefik/pull/12288) @sheddy-traefik)
- **[k8s/ingress-nginx]** Improve the configuration options display of the Kubernetes ingress-nginx provider ([#12297](https://github.com/traefik/traefik/pull/12297) @mloiseleur)
- **[k8s/ingress-nginx]** NGINX Ingress Controller to Traefik Migration Guide ([#12318](https://github.com/traefik/traefik/pull/12318) @sheddy-traefik)
- **[middleware]** Correct documentation for Digest auth ([#12651](https://github.com/traefik/traefik/pull/12651) @Zash)
- **[middleware]** Fix default encodings in compress middleware ([#12216](https://github.com/traefik/traefik/pull/12216) @Belphemur)
- **[middleware, k8s/crd]** Fix the errors middleware's document for Kubernetes CRD ([#12600](https://github.com/traefik/traefik/pull/12600) @yuito-it)
- **[service]** Fix loadbalancer doc for highest random weight ([#12283](https://github.com/traefik/traefik/pull/12283) @ozon2)
- **[tls]** Clarify SNI selection ([#12482](https://github.com/traefik/traefik/pull/12482) @AnuragEkkati)
- Add @gndz07 as a current maintainer ([#12594](https://github.com/traefik/traefik/pull/12594) @emilevauge)
- Add a Breaking change note to the changelog ([#12398](https://github.com/traefik/traefik/pull/12398) @nmengin)
- Add documentation about checkNewVersion ([#12298](https://github.com/traefik/traefik/pull/12298) @darkweaver87)
- Add missing `.http` to TOML table names ([#12713](https://github.com/traefik/traefik/pull/12713) @Darsstar)
- Add product comparison matrix and features page ([#12037](https://github.com/traefik/traefik/pull/12037) @sheddy-traefik)
- Bring back security section on API & Dashboard documentation page ([#12507](https://github.com/traefik/traefik/pull/12507) @gndz07)
- Clarify doc about encoded characters rejection ([#12391](https://github.com/traefik/traefik/pull/12391) @rtribotte)
- Clean Up Menu Entries & Update Expose Overview ([#12405](https://github.com/traefik/traefik/pull/12405) @sheddy-traefik)
- Correct encoded characters allowance in entrypoints.md ([#12679](https://github.com/traefik/traefik/pull/12679) @Apflkuacha)
- Correctly Format the HTTP Service Documentation ([#12311](https://github.com/traefik/traefik/pull/12311) @sheddy-traefik)
- Document negative priority support for routers ([#12505](https://github.com/traefik/traefik/pull/12505) @understood-the-assignment)
- Document Path matcher placeholder removal in v3 migration guide ([#12570](https://github.com/traefik/traefik/pull/12570) @sheddy-traefik)
- Fix API basepath option documentation ([#12744](https://github.com/traefik/traefik/pull/12744) @nmengin)
- Fix broken links in TCP Service and HTTP Router documentation ([#12215](https://github.com/traefik/traefik/pull/12215) @sheddy-traefik)
- Fix code copy button positioning ([#12520](https://github.com/traefik/traefik/pull/12520) @AnuragEkkati)
- Fix encoded characters entryPoint option documentation ([#12384](https://github.com/traefik/traefik/pull/12384) @rtribotte)
- Fix encoded characters option documentation ([#12373](https://github.com/traefik/traefik/pull/12373) @kevinpollet)
- Fix encodedCharacters entryPoint option documentation ([#12385](https://github.com/traefik/traefik/pull/12385) @rtribotte)
- Fix incorrect TOML example in entrypoints docs ([#12711](https://github.com/traefik/traefik/pull/12711) @mfmfuyu)
- Fix link description in Traefik Proxy documentation ([#12488](https://github.com/traefik/traefik/pull/12488) @schaerfo)
- Fix Menu Item Naming ([#12431](https://github.com/traefik/traefik/pull/12431) @sheddy-traefik)
- Fix migration guide indentation ([#12365](https://github.com/traefik/traefik/pull/12365) @kevinpollet)
- Fix migration guide URLs in deprecation notice ([#12430](https://github.com/traefik/traefik/pull/12430) @alexmar07)
- Fix typo in kubernetes.md ([#12515](https://github.com/traefik/traefik/pull/12515) @EdwardSalkeld)
- Fix typo in v3.6 migration guide ([#12212](https://github.com/traefik/traefik/pull/12212) @jnoordsij)
- Fix typo on JWT documentation ([#12616](https://github.com/traefik/traefik/pull/12616) @mdevino)
- Improve Service Reference page ([#12541](https://github.com/traefik/traefik/pull/12541) @sheddy-traefik)
- Improve the structure of the routing reference pages ([#12429](https://github.com/traefik/traefik/pull/12429) @sheddy-traefik)
- Increased content width in documentation ([#12632](https://github.com/traefik/traefik/pull/12632) @tobiasge)
- Remove extra dots in migration guide ([#12573](https://github.com/traefik/traefik/pull/12573) @rtribotte)
- Remove extraneous dots in migration guide ([#12571](https://github.com/traefik/traefik/pull/12571) @dathbe)
- Restore documentation on http.maxHeaderBytes ([#12440](https://github.com/traefik/traefik/pull/12440) @mloiseleur)
- Split Expose User Guides & Add Multi-Layer Routing Section ([#12238](https://github.com/traefik/traefik/pull/12238) @sheddy-traefik)
- Update Configuration Overview Page ([#12202](https://github.com/traefik/traefik/pull/12202) @sheddy-traefik)
- Update SECURITY.md ([#12304](https://github.com/traefik/traefik/pull/12304) @cwayne18)
- Update SECURITY.md to streamline information ([#12310](https://github.com/traefik/traefik/pull/12310) @emilevauge)

**Misc:**
- Make FLAGS Make variable usable ([#13009](https://github.com/traefik/traefik/pull/13009) @twz123)

## [v3.6.16](https://github.com/traefik/traefik/tree/v3.6.16) (2026-05-05)
[All Commits](https://github.com/traefik/traefik/compare/v3.6.15...v3.6.16)

**Bug fixes:**
- **[k8s/crd]** Remove cross-provider sanitization for Kubernetes service loading ([#13087](https://github.com/traefik/traefik/pull/13087) @rtribotte)
- **[k8s/ingress-nginx]** Fix typo in default CORS allowed headers ([#13088](https://github.com/traefik/traefik/pull/13088) @mliang2)
- **[logs, metrics, tracing]** Bump go.opentelemetry.io/otel ([#13100](https://github.com/traefik/traefik/pull/13100) @juliens)
- **[docker, ecs]** Migrate to github.com/moby/moby modules ([#12672](https://github.com/traefik/traefik/pull/12672) @thaJeztah)
- **[docker, ecs]** Migrate to github.com/moby/moby modules ([#13053](https://github.com/traefik/traefik/pull/13053) @mmatur)

**Documentation:**
- **[k8s/gatewayapi]** Update Helm chart values link for Kubernetes Gateway ([#13063](https://github.com/traefik/traefik/pull/13063) @0054)

## [v2.11.45](https://github.com/traefik/traefik/tree/v2.11.45) (2026-05-05)
[All Commits](https://github.com/traefik/traefik/compare/v2.11.44...v2.11.45)

**Bug fixes:**
- **[k8s/crd]** Remove cross-provider sanitization for Kubernetes service loading ([#13087](https://github.com/traefik/traefik/pull/13087) @rtribotte)
- **[docker, ecs]** Migrate to github.com/moby/moby modules ([#13053](https://github.com/traefik/traefik/pull/13053) @mmatur)

## [v3.7.0-rc.3](https://github.com/traefik/traefik/tree/v3.7.0-rc.3) (2026-04-29)
[All Commits](https://github.com/traefik/traefik/compare/v3.7.0-rc.2...v3.7.0-rc.3)

**Enhancements:**
- **[k8s/ingress-nginx]** Use a metamodel to generate dynamic configuration in ingress-nginx ([#13062](https://github.com/traefik/traefik/pull/13062) @juliens)
- **[k8s/ingress-nginx]** Add limit-connections support ([#13030](https://github.com/traefik/traefik/pull/13030) @amazon7737)

**Bug fixes:**
- **[k8s/ingress-nginx]** Fix SSL redirect behavior for ingress-nginx provider ([#13028](https://github.com/traefik/traefik/pull/13028) @gndz07)
- **[k8s/ingress-nginx]** Do not require a port for ExternalName services ([#13033](https://github.com/traefik/traefik/pull/13033) @kevinpollet)
- **[k8s, k8s/ingress-nginx]** Add regression test for ingress default backend without rules ([#13066](https://github.com/traefik/traefik/pull/13066) @mmatur)
- **[acme]** Bump github.com/go-acme/lego/v4 to v4.35.1 ([#13027](https://github.com/traefik/traefik/pull/13027) @ldez)
- **[server]** Bump github.com/vulcand/oxy to v2.1.0 ([#13046](https://github.com/traefik/traefik/pull/13046) @ldez)
- **[acme]** Bump github.com/go-acme/lego/v4 to v4.35.2 ([#13043](https://github.com/traefik/traefik/pull/13043) @ldez)
- **[middleware]** Add errorRequestHeaders option to Errors middleware ([#13034](https://github.com/traefik/traefik/pull/13034) @gndz07)

**Documentation:**
- **[k8s/ingress-nginx]** Add ingress-nginx ConfigMap migration step ([#12963](https://github.com/traefik/traefik/pull/12963) @sheddy-traefik)
- **[k8s/ingress-nginx]** Delete the coming soon section from the ingress-nginx documentation ([#13037](https://github.com/traefik/traefik/pull/13037) @nmengin)

**Misc:**
- Make FLAGS Make variable usable ([#13009](https://github.com/traefik/traefik/pull/13009) @twz123)

## [v3.6.15](https://github.com/traefik/traefik/tree/v3.6.15) (2026-04-29)
[All Commits](https://github.com/traefik/traefik/compare/v3.6.14...v3.6.15)

**Bug fixes:**
- **[acme]** Bump github.com/go-acme/lego/v4 to v4.35.2 ([#13043](https://github.com/traefik/traefik/pull/13043) @ldez)
- **[acme]** Bump github.com/go-acme/lego/v4 to v4.35.1 ([#13027](https://github.com/traefik/traefik/pull/13027) @ldez)
- **[middleware]** Add errorRequestHeaders option to Errors middleware ([#13034](https://github.com/traefik/traefik/pull/13034) @gndz07)
- **[k8s/ingress-nginx]** Do not require a port for ExternalName services ([#13033](https://github.com/traefik/traefik/pull/13033) @kevinpollet)
- **[server]** Bump github.com/vulcand/oxy to v2.1.0 ([#13046](https://github.com/traefik/traefik/pull/13046) @ldez)

**Misc:**
- Make FLAGS Make variable usable ([#13009](https://github.com/traefik/traefik/pull/13009) @twz123)

## [v2.11.44](https://github.com/traefik/traefik/tree/v2.11.44) (2026-04-29)
[All Commits](https://github.com/traefik/traefik/compare/v2.11.43...v2.11.44)

**Bug fixes:**
- **[middleware]** Add errorRequestHeaders option to Errors middleware ([#13034](https://github.com/traefik/traefik/pull/13034) @gndz07)
- **[acme]** Bump github.com/go-acme/lego to v4.35.2 ([#13052](https://github.com/traefik/traefik/pull/13052) @mmatur)

**Misc:**
- Make FLAGS Make variable usable ([#13009](https://github.com/traefik/traefik/pull/13009) @twz123)

## [v3.7.0-rc.2](https://github.com/traefik/traefik/tree/v3.7.0-rc.2) (2026-04-22)
[All Commits](https://github.com/traefik/traefik/compare/v3.7.0-rc.1...v3.7.0-rc.2)

**Bug fixes:**
- **[acme]** Bump github.com/go-acme/lego/v4 to v4.34.0 ([#12993](https://github.com/traefik/traefik/pull/12993) @ldez)
- **[docker]** Downgrade log level for missing container on inspect ([#12900](https://github.com/traefik/traefik/pull/12900) @Otoru)
- **[k8s/crd, k8s]** Honor allowCrossNamespace with chain middleware CRD ([#12976](https://github.com/traefik/traefik/pull/12976) @rtribotte)
- **[k8s/ingress-nginx]** Avoid 302 redirect when rewrite-target value is not an absolute URL for ingress-nginx provider ([#12977](https://github.com/traefik/traefik/pull/12977) @gndz07)
- **[k8s/ingress-nginx]** Fix custom headers annotation with 503 Service Unavailable ([#12969](https://github.com/traefik/traefik/pull/12969) @LBF38)
- **[k8s/ingress-nginx]** Fix service unavailable on ingress-nginx ([#12996](https://github.com/traefik/traefik/pull/12996) @LBF38)
- **[k8s/ingress-nginx]** Handle duplicate server-alias on ingress-nginx provider ([#13019](https://github.com/traefik/traefik/pull/13019) @gndz07)
- **[k8s/ingress-nginx]** Use QuoteMeta for cookie name when building canary rules ([#12973](https://github.com/traefik/traefik/pull/12973) @kevinpollet)
- **[middleware, authentication]** Cleanup and make ForwardAuth logs consistent ([#13013](https://github.com/traefik/traefik/pull/13013) @kevinpollet)
- **[middleware, authentication]** Fix trustForwardHeader on forward auth middleware ([#12994](https://github.com/traefik/traefik/pull/12994) @juliens)
- **[middleware, authentication]** Remove map lookup making the basic auth notFoundSecret empty ([#12960](https://github.com/traefik/traefik/pull/12960) @rtribotte)
- **[middleware, k8s/ingress-nginx]** Fix app-root with query params redirect ([#12986](https://github.com/traefik/traefik/pull/12986) @LBF38)
- **[middleware, k8s/ingress-nginx]** Fix rewrite target with full URL and no regex in ingress path ([#12992](https://github.com/traefik/traefik/pull/12992) @LBF38)
- **[middleware, k8s/ingress-nginx]** Preserve request query on absolute-URL redirect ([#13020](https://github.com/traefik/traefik/pull/13020) @SAY-5)
- **[middleware, k8s/ingress-nginx]** Resolve NGINX variables in ingress-nginx upstream-vhost annotation ([#12978](https://github.com/traefik/traefik/pull/12978) @mmatur)
- **[middleware]** Deprecate ForwardAuth.TrustForwardHeader option ([#13012](https://github.com/traefik/traefik/pull/13012) @kevinpollet)
- **[middleware]** Remove untrusted X headers with underscores ([#12961](https://github.com/traefik/traefik/pull/12961) @rtribotte)
- **[middleware]** Sanitize the request URL after stripping the prefix ([#12990](https://github.com/traefik/traefik/pull/12990) @kevinpollet)
- **[sticky-session, k8s/crd]** Make SameSite cookie value case-insensitive ([#12922](https://github.com/traefik/traefik/pull/12922) @murataslan1)
- **[tls]** Restore default cipher suites when serversTransport has no explicit cipherSuites ([#12974](https://github.com/traefik/traefik/pull/12974) @mmatur)
- **[webui]** Bump lodash version ([#12954](https://github.com/traefik/traefik/pull/12954) @gndz07)
- **[webui]** Upgrade form-data to 2.5.4, 3.0.4, 4.0.4 ([#12958](https://github.com/traefik/traefik/pull/12958) @orbisai0security)

**Documentation:**
- **[k8s]** Fix yaml indentation ([#12957](https://github.com/traefik/traefik/pull/12957) @isayme)
- **[k8s]** Clarify install config watchNamespace watches only one namespace ([#12962](https://github.com/traefik/traefik/pull/12962) @parkerfath)
- **[k8s/crd]** Update ingressroute.md ([#12916](https://github.com/traefik/traefik/pull/12916) @Rajakavitha1)
- **[k8s/ingress-nginx]** Document the rd parameter behavior for the auth-signin annotation ([#13017](https://github.com/traefik/traefik/pull/13017) @kevinpollet)
- Reverse versions order in migration guide ([#12959](https://github.com/traefik/traefik/pull/12959) @nmengin)
- Update vulnerability submission guidelines ([#12968](https://github.com/traefik/traefik/pull/12968) @emilevauge)

## [v3.6.14](https://github.com/traefik/traefik/tree/v3.6.14) (2026-04-22)
[All Commits](https://github.com/traefik/traefik/compare/v3.6.13...v3.6.14)

**Bug fixes:**
- **[acme]** Bump github.com/go-acme/lego/v4 to v4.34.0 ([#12993](https://github.com/traefik/traefik/pull/12993) @ldez)
- **[docker]** Downgrade log level for missing container on inspect ([#12900](https://github.com/traefik/traefik/pull/12900) @Otoru)
- **[sticky-session, k8s/crd]** Make SameSite cookie value case-insensitive ([#12922](https://github.com/traefik/traefik/pull/12922) @murataslan1)
- **[k8s/crd, k8s]** Honor allowCrossNamespace with chain middleware CRD ([#12976](https://github.com/traefik/traefik/pull/12976) @rtribotte)
- **[middleware]** Remove untrusted X headers with underscores ([#12961](https://github.com/traefik/traefik/pull/12961) @rtribotte)
- **[middleware]** Sanitize the request URL after stripping the prefix ([#12990](https://github.com/traefik/traefik/pull/12990) @kevinpollet)
- **[middleware]** Deprecate ForwardAuth.TrustForwardHeader option ([#13012](https://github.com/traefik/traefik/pull/13012) @kevinpollet)
- **[middleware, authentication]** Remove map lookup making the basic auth notFoundSecret empty ([#12960](https://github.com/traefik/traefik/pull/12960) @rtribotte)
- **[middleware, authentication]** Fix trustForwardHeader on forward auth middleware ([#12994](https://github.com/traefik/traefik/pull/12994) @juliens)
- **[middleware, authentication]** Cleanup and make ForwardAuth logs consistent ([#13013](https://github.com/traefik/traefik/pull/13013) @kevinpollet)
- **[webui]** Upgrade form-data to 2.5.4, 3.0.4, 4.0.4 ([#12958](https://github.com/traefik/traefik/pull/12958) @orbisai0security)

**Documentation:**
- **[k8s]** Fix yaml indentation ([#12957](https://github.com/traefik/traefik/pull/12957) @isayme)
- **[k8s]** Clarify install config watchNamespace watches only one namespace ([#12962](https://github.com/traefik/traefik/pull/12962) @parkerfath)
- **[k8s/crd]** Update ingressroute.md ([#12916](https://github.com/traefik/traefik/pull/12916) @Rajakavitha1)
- Reverse versions order in migration guide ([#12959](https://github.com/traefik/traefik/pull/12959) @nmengin)
- Update vulnerability submission guidelines ([#12968](https://github.com/traefik/traefik/pull/12968) @emilevauge)

## [v2.11.43](https://github.com/traefik/traefik/tree/v2.11.43) (2026-04-22)
[All Commits](https://github.com/traefik/traefik/compare/v2.11.42...v2.11.43)

**Bug fixes:**
- **[middleware, authentication]** Remove map lookup making the basic auth notFoundSecret empty ([#12960](https://github.com/traefik/traefik/pull/12960) @rtribotte)
- **[middleware, authentication]** Fix trustForwardHeader on forward auth middleware ([#12994](https://github.com/traefik/traefik/pull/12994) @juliens)
- **[middleware, authentication]** Cleanup and make ForwardAuth logs consistent ([#13013](https://github.com/traefik/traefik/pull/13013) @kevinpollet)
- **[middleware]** Remove untrusted X headers with underscores ([#12961](https://github.com/traefik/traefik/pull/12961) @rtribotte)
- **[middleware]** Sanitize the request URL after stripping the prefix ([#12990](https://github.com/traefik/traefik/pull/12990) @kevinpollet)
- **[k8s/crd, k8s]** Honor allowCrossNamespace with chain middleware CRD ([#12976](https://github.com/traefik/traefik/pull/12976) @rtribotte)

## [v3.7.0-rc.1](https://github.com/traefik/traefik/tree/v3.7.0-rc.1) (2026-04-07)
[All Commits](https://github.com/traefik/traefik/compare/v3.7.0-ea.3...v3.7.0-rc.1)

**Bug fixes:**
- **[k8s/ingress-nginx]** Fix rewrite-target annotation handling with empty path and non-regex path ([#12905](https://github.com/traefik/traefik/pull/12905) @LBF38)
- **[middleware]** Bump github.com/klauspost/compress v1.18.4 ([#12937](https://github.com/traefik/traefik/pull/12937) @thaJeztah)

**Enhancement:**
- **[webui]** Display server weight in service detail view ([#12325](https://github.com/traefik/traefik/pull/12325) @murataslan1)
- **[webui, tls]** Add certificates menu and overview ([#12628](https://github.com/traefik/traefik/pull/12628) @holomekc)
- **[provider]** Add providers routing precedence configuration ([#12895](https://github.com/traefik/traefik/pull/12895) @juliens)
- **[k8s/ingress-nginx]** Support NGINX global auth annotation ([#12893](https://github.com/traefik/traefik/pull/12893) @foxcool)
- **[k8s/ingress-nginx]** Add limit-burst-multiplier annotation support ([#12899](https://github.com/traefik/traefik/pull/12899) @amazon7737)
- **[k8s/ingress-nginx, k8s/ingress, rules]** Add wildcard host in Host and HostSNI matchers ([#12884](https://github.com/traefik/traefik/pull/12884) @juliens)
- **[k8s/gatewayapi]** Support multiple certificateRefs on gateway listeners ([#12590](https://github.com/traefik/traefik/pull/12590) @mortennordbye)
- **[k8s/gatewayapi]** Add secret support for BackendTLSPolicy caCertificateRefs ([#12927](https://github.com/traefik/traefik/pull/12927) @kevinpollet)
- **[accesslogs, k8s/ingress-nginx]** Support nginx.ingress.kubernetes.io/enable-access-log annotation ([#12908](https://github.com/traefik/traefik/pull/12908) @ris-tlp)
- **[accesslogs, k8s/ingress-nginx, k8s/ingress]** Add Kubernetes Ingress logs fields ([#12913](https://github.com/traefik/traefik/pull/12913) @rtribotte)

**Documentation:**
- **[docker]** Fix docker-compose.yaml location in Docker setup page ([#12860](https://github.com/traefik/traefik/pull/12860) @ScottA38)
- **[docker, consul, ecs, k8s]** Fix documentation on how to restrict the scope of service discovery ([#12645](https://github.com/traefik/traefik/pull/12645) @mloiseleur)
- **[k8s/gatewayapi]** Update gateway-api link in getting-started to v1.5.1 ([#12930](https://github.com/traefik/traefik/pull/12930) @isayme)
- **[k8s/ingress-nginx]** Add OVHcloud (OpenStack Octavia) to Cloud-Specific IP Management ([#12759](https://github.com/traefik/traefik/pull/12759) @antonin-a)
- **[k8s/ingress-nginx]** Clarify IngressClass selection logic ([#12926](https://github.com/traefik/traefik/pull/12926) @kevinpollet)
- Add redirects for deleted pages ([#12889](https://github.com/traefik/traefik/pull/12889) @sheddy-traefik)
- Fix default value of http.sanitizePath ([#12904](https://github.com/traefik/traefik/pull/12904) @iTob191)

## [v3.6.13](https://github.com/traefik/traefik/tree/v3.6.13) (2026-04-07)
[All Commits](https://github.com/traefik/traefik/compare/v3.6.12...v3.6.13)

**Bug fixes:**
- **[middleware]** Bump github.com/klauspost/compress v1.18.4 and fix TestNegotiation ([#12937](https://github.com/traefik/traefik/pull/12937) @thaJeztah)

**Documentation:**
- **[docker]** Fix docker-compose.yaml location in Docker setup page ([#12860](https://github.com/traefik/traefik/pull/12860) @ScottA38)
- **[docker, consul, ecs, k8s]** Fix documentation on how to restrict the scope of service discovery ([#12645](https://github.com/traefik/traefik/pull/12645) @mloiseleur)
- **[k8s/ingress-nginx]** Add OVHcloud (OpenStack Octavia) to Cloud-Specific IP Management ([#12759](https://github.com/traefik/traefik/pull/12759) @antonin-a)
- **[k8s/ingress-nginx]** Clarify IngressClass selection logic ([#12926](https://github.com/traefik/traefik/pull/12926) @kevinpollet)
- Add missing redirects for Getting started ([#12886](https://github.com/traefik/traefik/pull/12886) @nmengin)
- Add redirects for deleted pages ([#12889](https://github.com/traefik/traefik/pull/12889) @sheddy-traefik)
- Fix default value of http.sanitizePath ([#12904](https://github.com/traefik/traefik/pull/12904) @iTob191)

## [v3.7.0-ea.3](https://github.com/traefik/traefik/tree/v3.7.0-ea.3) (2026-03-26)
[All Commits](https://github.com/traefik/traefik/compare/v3.7.0-ea.2...v3.7.0-ea.3)

**Bug fixes:**
- **[k8s/crd]** Fix panic with Failover services in Kubernetes ([#12853](https://github.com/traefik/traefik/pull/12853) @juliens)
- **[k8s/ingress-nginx]** Fix rewrite directive in configuration-snippet to trim quotes ([#12855](https://github.com/traefik/traefik/pull/12855) @gndz07)
- **[k8s/ingress-nginx]** Fix rewrite-target to handle full URL ([#12854](https://github.com/traefik/traefik/pull/12854) @gndz07)
- **[k8s/ingress-nginx]** Handle empty rewrite-target like unset rewrite-target ([#12832](https://github.com/traefik/traefik/pull/12832) @sathieu)
- **[k8s/ingress-nginx]** Fix TLS behavior in ingress-nginx provider ([#12831](https://github.com/traefik/traefik/pull/12831) @LBF38)
- **[k8s/ingress-nginx]** Fix auth-response-headers whitespace trimming in ingress-nginx provider ([#12856](https://github.com/traefik/traefik/pull/12856) @mmatur)
- **[acme]** Bump github.com/go-acme/lego/v4 to v4.33.0 ([#12840](https://github.com/traefik/traefik/pull/12840) @ldez)
- **[server, tcp]** Fix postgres STARTTLS with TLS termination ([#12847](https://github.com/traefik/traefik/pull/12847) @mmatur)
- **[api]** Fix allow colons and tildes in api.basePath validation ([#12857](https://github.com/traefik/traefik/pull/12857) @mmatur)
- **[server]** Fix comment and unnecessary allocation in withRoutingPath ([#12880](https://github.com/traefik/traefik/pull/12880) @boinger)
- **[grpc]** Bump google.golang.org/grpc to v1.79.3 ([#12845](https://github.com/traefik/traefik/pull/12845) @mmatur)
- **[middleware, authentication]** Prevent duplicate user headers in basic and digest auth middleware ([#12851](https://github.com/traefik/traefik/pull/12851) @juliens)
- **[middleware]** Fix StripPrefix and StripPrefixRegex to slice the prefix using encoded prefix length ([#12863](https://github.com/traefik/traefik/pull/12863) @gndz07)

**Documentation:**
- **[acme]** Clarify CNAME explanation in ACME Documentation ([#12818](https://github.com/traefik/traefik/pull/12818) @sheddy-traefik)
- **[k8s/ingress-nginx]** Add ingress-nginx migration banner on documentation pages ([#12872](https://github.com/traefik/traefik/pull/12872) @gndz07)
- **[k8s/ingress]** Improve Kubernetes Ingress Routing Documentation ([#12876](https://github.com/traefik/traefik/pull/12876) @sheddy-traefik)
- **[k8s/ingress-nginx]** Clarify that NGINX Ingress watchNamespace watches only one namespace ([#12873](https://github.com/traefik/traefik/pull/12873) @parkerfath)

## [v3.6.12](https://github.com/traefik/traefik/tree/v3.6.12) (2026-03-26)
[All Commits](https://github.com/traefik/traefik/compare/v3.6.11...v3.6.12)

**Bug fixes:**
- **[k8s/ingress-nginx]** Fix auth-response-headers whitespace trimming in ingress-nginx provider ([#12856](https://github.com/traefik/traefik/pull/12856) @mmatur)
- **[acme]** Bump github.com/go-acme/lego/v4 to v4.33.0 ([#12840](https://github.com/traefik/traefik/pull/12840) @ldez)
- **[server]** Fix comment and unnecessary allocation in withRoutingPath ([#12880](https://github.com/traefik/traefik/pull/12880) @boinger)
- **[server, tcp]** Fix postgres STARTTLS with TLS termination ([#12847](https://github.com/traefik/traefik/pull/12847) @mmatur)
- **[api]** Fix allow colons and tildes in api.basePath validation ([#12857](https://github.com/traefik/traefik/pull/12857) @mmatur)
- **[grpc]** Bump google.golang.org/grpc to v1.79.3 ([#12845](https://github.com/traefik/traefik/pull/12845) @mmatur)
- **[middleware, authentication]** Prevent duplicate user headers in basic and digest auth middleware ([#12851](https://github.com/traefik/traefik/pull/12851) @juliens)
- **[middleware]** Fix StripPrefix and StripPrefixRegex to slice the prefix using encoded prefix length ([#12863](https://github.com/traefik/traefik/pull/12863) @gndz07)

**Documentation:**
- **[acme]** Clarify CNAME explanation in ACME Documentation ([#12818](https://github.com/traefik/traefik/pull/12818) @sheddy-traefik)
- **[k8s/ingress-nginx]** Add ingress-nginx migration banner on documentation pages ([#12872](https://github.com/traefik/traefik/pull/12872) @gndz07)
- **[k8s/ingress-nginx]** Clarify that NGINX Ingress watchNamespace watches only one namespace ([#12873](https://github.com/traefik/traefik/pull/12873) @parkerfath)
- **[k8s/ingress]** Improve Kubernetes Ingress Routing Documentation ([#12876](https://github.com/traefik/traefik/pull/12876) @sheddy-traefik)

## [v3.7.0-ea.2](https://github.com/traefik/traefik/tree/v3.7.0-ea.2) (2026-03-19)
[All Commits](https://github.com/traefik/traefik/compare/v3.7.0-ea.1...v3.7.0-ea.2)

**Enhancement:**
- **[k8s/knative]** Support knative v1.20.0 ([#12441](https://github.com/traefik/traefik/pull/12441) @idurgakalyan)
- **[k8s/gatewayapi]** Bump sigs.k8s.io/gateway-api to v1.5.1 ([#12768](https://github.com/traefik/traefik/pull/12768) @mmatur)
- **[k8s/ingress-nginx, middleware, authentication]** Add support for auth-snippet ([#12778](https://github.com/traefik/traefik/pull/12778) @juliens)

**Bug fixes:**
- **[k8s/ingress-nginx]** Fix use-regex annotation behavior and add strictValidatePathType config for ingress-nginx provider ([#12773](https://github.com/traefik/traefik/pull/12773) @gndz07)
- **[logs, otel]** Add OTel-conformant trace context attributes to access logs ([#12801](https://github.com/traefik/traefik/pull/12801) @mmatur)
- **[k8s/gatewayapi]** Fix incorrect hostname matching between listener and route ([#12599](https://github.com/traefik/traefik/pull/12599) @TheColorman)
- **[k8s/ingress]** Fix ingress router's rule ([#12808](https://github.com/traefik/traefik/pull/12808) @gndz07)
- **[webui]** Remove AGPL license in code ([#12799](https://github.com/traefik/traefik/pull/12799) @Desel72)
- **[k8s/ingress-nginx]** Fix proxy-ssl-verify annotation ([#12825](https://github.com/traefik/traefik/pull/12825) @LBF38)
- **[http]** Add maxResponseBodySize configuration on HTTP provider ([#12788](https://github.com/traefik/traefik/pull/12788) @gndz07)
- **[tls]** Support fragmented TLS client hello ([#12787](https://github.com/traefik/traefik/pull/12787) @rtribotte)
- **[middleware, authentication]** Make basic auth check timing constant ([#12803](https://github.com/traefik/traefik/pull/12803) @rtribotte)

  **Documentation:**
- **[k8s]** Improve the multi tenant security note ([#12822](https://github.com/traefik/traefik/pull/12822) @nmengin)
- Fix unnecessary escaping of pipe in regexp examples ([#12784](https://github.com/traefik/traefik/pull/12784) @diegmonti)
- Add vulnerability submission quality guidelines ([#12807](https://github.com/traefik/traefik/pull/12807) @emilevauge)
- Fix start up message format ([#12806](https://github.com/traefik/traefik/pull/12806) @mloiseleur)
- Remove unsupported servers[n].address from TCP label examples ([#12817](https://github.com/traefik/traefik/pull/12817) @sheddy-traefik)
- Bump mkdocs-traefiklabs to use consent mode ([#12804](https://github.com/traefik/traefik/pull/12804) @darkweaver87)

## [v3.6.11](https://github.com/traefik/traefik/tree/v3.6.11) (2026-03-19)
[All Commits](https://github.com/traefik/traefik/compare/v3.6.10...v3.6.11)

**Bug fixes:**
- **[logs, otel]** Add OTel-conformant trace context attributes to access logs ([#12801](https://github.com/traefik/traefik/pull/12801) @mmatur)
- **[k8s/gatewayapi]** Fix incorrect hostname matching between listener and route ([#12599](https://github.com/traefik/traefik/pull/12599) @TheColorman)
- **[k8s/ingress]** Fix ingress router's rule ([#12808](https://github.com/traefik/traefik/pull/12808) @gndz07)
- **[webui]** Remove AGPL license in code ([#12799](https://github.com/traefik/traefik/pull/12799) @Desel72)
- **[k8s/ingress-nginx]** Fix proxy-ssl-verify annotation ([#12825](https://github.com/traefik/traefik/pull/12825) @LBF38)
- **[http]** Add maxResponseBodySize configuration on HTTP provider ([#12788](https://github.com/traefik/traefik/pull/12788) @gndz07)
- **[tls]** Support fragmented TLS client hello ([#12787](https://github.com/traefik/traefik/pull/12787) @rtribotte)
- **[middleware, authentication]** Make basic auth check timing constant ([#12803](https://github.com/traefik/traefik/pull/12803) @rtribotte)

**Documentation:**
- **[k8s]** Improve the multi tenant security note ([#12822](https://github.com/traefik/traefik/pull/12822) @nmengin)
- Fix unnecessary escaping of pipe in regexp examples ([#12784](https://github.com/traefik/traefik/pull/12784) @diegmonti)
- Add vulnerability submission quality guidelines ([#12807](https://github.com/traefik/traefik/pull/12807) @emilevauge)
- Fix start up message format ([#12806](https://github.com/traefik/traefik/pull/12806) @mloiseleur)
- Remove unsupported servers[n].address from TCP label examples ([#12817](https://github.com/traefik/traefik/pull/12817) @sheddy-traefik)
- Bump mkdocs-traefiklabs to use consent mode ([#12804](https://github.com/traefik/traefik/pull/12804) @darkweaver87)

## [v2.11.42](https://github.com/traefik/traefik/tree/v2.11.42) (2026-03-26)
[All Commits](https://github.com/traefik/traefik/compare/v2.11.41...v2.11.42)

**Bug fixes:**
- **[grpc]** Bump google.golang.org/grpc to v1.79.3 ([#12845](https://github.com/traefik/traefik/pull/12845) @mmatur)
- **[middleware, authentication]** Prevent duplicate user headers in basic and digest auth middleware ([#12851](https://github.com/traefik/traefik/pull/12851) @juliens)
- **[middleware]** Fix StripPrefix and StripPrefixRegex to slice the prefix using encoded prefix length ([#12863](https://github.com/traefik/traefik/pull/12863) @gndz07)

## [v2.11.41](https://github.com/traefik/traefik/tree/v2.11.41) (2026-03-18)
[All Commits](https://github.com/traefik/traefik/compare/v2.11.40...v2.11.41)

**Bug fixes:**
- **[http]** Add maxResponseBodySize configuration on HTTP provider ([#12788](https://github.com/traefik/traefik/pull/12788) @gndz07)
- **[tls]** Support fragmented TLS client hello ([#12787](https://github.com/traefik/traefik/pull/12787) @rtribotte)
- **[middleware, authentication]** Make basic auth check timing constant ([#12803](https://github.com/traefik/traefik/pull/12803) @rtribotte)

**Documentation:**
- Bump mkdocs-traefiklabs to use consent mode ([#12804](https://github.com/traefik/traefik/pull/12804) @darkweaver87)

## [v3.7.0-ea.1](https://github.com/traefik/traefik/tree/v3.7.0-ea.1) (2026-03-11)
[All Commits](https://github.com/traefik/traefik/compare/v3.6.0-rc1...v3.7.0-ea.1)

**Enhancements:**
- **[accesslogs, otel]** Allow Stdio access logs alongsige OTLP logging ([#12307](https://github.com/traefik/traefik/pull/12307) by [Mulgish](https://github.com/Mulgish))
- **[acme]** Add CertificateTimeout ACME configuration option ([#12278](https://github.com/traefik/traefik/pull/12278) by [ceko](https://github.com/ceko))
- **[k8s/ingress-nginx]** Support nginx.ingress.kubernetes.io/allowlist-source-range ([#12659](https://github.com/traefik/traefik/pull/12659) by [ris-tlp](https://github.com/ris-tlp))
- **[k8s/crd]** Add ingressClassName field to the CRDs spec ([#12313](https://github.com/traefik/traefik/pull/12313) by [kkrypt0nn](https://github.com/kkrypt0nn))
- **[k8s/crd]** Service failover support in TraefikService CRD ([#12733](https://github.com/traefik/traefik/pull/12733) by [jspdown](https://github.com/jspdown))
- **[k8s/crd, service]** Support cipher suites configuration with ServersTransport ([#11965](https://github.com/traefik/traefik/pull/11965) by [NEwa-05](https://github.com/NEwa-05))
- **[k8s/ingress, middleware, k8s/crd, service, k8s/gatewayapi]** Services middleware and Gateway API filters on HTTP backends ([#12544](https://github.com/traefik/traefik/pull/12544) by [juliens](https://github.com/juliens))
- **[k8s/ingress-nginx]** Add nginx.ingress.kubernetes.io/proxy-connect-timeout annotation ([#12572](https://github.com/traefik/traefik/pull/12572) by [gndz07](https://github.com/gndz07))
- **[k8s/ingress-nginx]** Add rewrite-target nginx annotations support ([#12534](https://github.com/traefik/traefik/pull/12534) by [LBF38](https://github.com/LBF38))
- **[k8s/ingress-nginx]** Add support for app-root nginx annotation ([#12576](https://github.com/traefik/traefik/pull/12576) by [LBF38](https://github.com/LBF38))
- **[k8s/ingress-nginx]** Add support for auth-signin annotation ([#12502](https://github.com/traefik/traefik/pull/12502) by [DesalLama](https://github.com/DesalLama))
- **[k8s/ingress-nginx]** Add support for from-to-www-redirect NGINX annotation ([#12610](https://github.com/traefik/traefik/pull/12610) by [LBF38](https://github.com/LBF38))
- **[k8s/ingress-nginx]** Add support for proxy-read-timeout and proxy-send-timeout NGINX annotations ([#12630](https://github.com/traefik/traefik/pull/12630) by [LBF38](https://github.com/LBF38))
- **[k8s/ingress-nginx]** Add support for session-cookie-expires nginx annotation ([#12558](https://github.com/traefik/traefik/pull/12558) by [LBF38](https://github.com/LBF38))
- **[k8s/ingress-nginx]** Add support for upstream-hash-by NGINX annotation ([#12749](https://github.com/traefik/traefik/pull/12749) by [LBF38](https://github.com/LBF38))
- **[k8s/ingress-nginx]** Allow entry points to be specified on Nginx Ingresses ([#12727](https://github.com/traefik/traefik/pull/12727) by [ajacques](https://github.com/ajacques))
- **[k8s/ingress-nginx]** Implement proxy-http-version annotation ([#12743](https://github.com/traefik/traefik/pull/12743) by [KshitijBharde](https://github.com/KshitijBharde))
- **[k8s/ingress-nginx]** Nginx x-forwarded-prefix annotation ([#12697](https://github.com/traefik/traefik/pull/12697) by [nandorKollar](https://github.com/nandorKollar))
- **[k8s/ingress-nginx]** Support auth-tls-secret and auth-tls-verify-client annotations ([#12595](https://github.com/traefik/traefik/pull/12595) by [gndz07](https://github.com/gndz07))
- **[k8s/ingress-nginx]** Support limit-rpm annotation for ingress-nginx ([#12703](https://github.com/traefik/traefik/pull/12703) by [Ph4rell](https://github.com/Ph4rell))
- **[k8s/ingress-nginx]** Support limit-rps annotation for Ingress NGINX ([#12709](https://github.com/traefik/traefik/pull/12709) by [amazon7737](https://github.com/amazon7737))
- **[k8s/ingress-nginx]** Support NGINX buffering annotations ([#12459](https://github.com/traefik/traefik/pull/12459) by [blasko03](https://github.com/blasko03))
- **[k8s/ingress-nginx]** Support NGINX canary annotations ([#12739](https://github.com/traefik/traefik/pull/12739) by [kevinpollet](https://github.com/kevinpollet))
- **[k8s/ingress-nginx]** Support NGINX custom-headers annotation ([#12414](https://github.com/traefik/traefik/pull/12414) by [nandorKollar](https://github.com/nandorKollar))
- **[k8s/ingress-nginx]** Support NGINX upstream-vhost annotation ([#12412](https://github.com/traefik/traefik/pull/12412) by [nandorKollar](https://github.com/nandorKollar))
- **[k8s/ingress-nginx]** Support NGINX whitelist-source-range annotation ([#12423](https://github.com/traefik/traefik/pull/12423) by [blasko03](https://github.com/blasko03))
- **[k8s/ingress-nginx]** Support permanent-redirect and temporal-redirect annotations ([#12561](https://github.com/traefik/traefik/pull/12561) by [LBF38](https://github.com/LBF38))
- **[k8s/ingress-nginx]** Support proxy-next-upstream* annotations ([#12710](https://github.com/traefik/traefik/pull/12710) by [gndz07](https://github.com/gndz07))
- **[k8s/ingress-nginx]** Support server-alias annotation for Ingress NGINX ([#12707](https://github.com/traefik/traefik/pull/12707) by [amazon7737](https://github.com/amazon7737))
- **[k8s/ingress-nginx]** Support upstream-keepalive-timeout ([#12708](https://github.com/traefik/traefik/pull/12708) by [jcob-sikorski](https://github.com/jcob-sikorski))
- **[k8s/ingress-nginx]** Add support for variable interpolation in auth-signin NGINX annotation ([#12640](https://github.com/traefik/traefik/pull/12640) by [LBF38](https://github.com/LBF38))
- **[k8s/ingress-nginx]** Implement server-snippet and configuration-snippet annotations ([#12715](https://github.com/traefik/traefik/pull/12715) by [juliens](https://github.com/juliens))
- **[k8s/ingress-nginx]** Add custom-http-errors and default-backend annotations ([#12637](https://github.com/traefik/traefik/pull/12637) by [juliens](https://github.com/juliens))
- **[k8s/ingress-nginx]** Support auth-tls-pass-certificate-to-upstream annotation ([#12629](https://github.com/traefik/traefik/pull/12629) by [gndz07](https://github.com/gndz07))
- **[metrics]** Support file path for metrics.influxdb2.token option ([#12458](https://github.com/traefik/traefik/pull/12458) by [barhun](https://github.com/barhun))
- **[middleware]** Add encodedCharacters middleware ([#12555](https://github.com/traefik/traefik/pull/12555) by [gndz07](https://github.com/gndz07))
- **[middleware]** Enable retries based on HTTP response status codes, timeout, and non-idempotent methods ([#12667](https://github.com/traefik/traefik/pull/12667) by [LBF38](https://github.com/LBF38))
- **[middleware, authentication]** Add authSignInURL in forward auth middleware ([#12293](https://github.com/traefik/traefik/pull/12293) by [kyounghunJang](https://github.com/kyounghunJang))
- **[server]** Add global option to disable X-Forwarded-For appending ([#12374](https://github.com/traefik/traefik/pull/12374) by [lbenguigui](https://github.com/lbenguigui))
- **[server]** Replace Split in loops with more efficient SplitSeq ([#12316](https://github.com/traefik/traefik/pull/12316) by [boqishan](https://github.com/boqishan))
- **[service]** Failover according to response status code ([#12596](https://github.com/traefik/traefik/pull/12596) by [lbenguigui](https://github.com/lbenguigui))
- **[tls]** Make TLSStore gracefully handle missing secrets ([#12522](https://github.com/traefik/traefik/pull/12522) by [david-garcia-garcia](https://github.com/david-garcia-garcia))
- **[webui]** Add dashboard name configuration ([#12410](https://github.com/traefik/traefik/pull/12410) by [gndz07](https://github.com/gndz07))
- **[webui]** Web UI dashboard improvements ([#12236](https://github.com/traefik/traefik/pull/12236) by [gndz07](https://github.com/gndz07))
- **[webui]** Details pages UI improvement ([#12377](https://github.com/traefik/traefik/pull/12377) by [gndz07](https://github.com/gndz07))
- Use unicode.MaxASCII for clearer ASCII check ([#12741](https://github.com/traefik/traefik/pull/12741) by [1911860538](https://github.com/1911860538))

**Bug fixes:**
- **[acme]** Add missing renew options ([#12467](https://github.com/traefik/traefik/pull/12467) by [ldez](https://github.com/ldez))
- **[acme]** Add timeout to ACME-TLS/1 challenge handshake ([#12516](https://github.com/traefik/traefik/pull/12516) by [LBF38](https://github.com/LBF38))
- **[acme]** Alter TLS renewal period ([#12479](https://github.com/traefik/traefik/pull/12479) by [LtHummus](https://github.com/LtHummus))
- **[acme]** Bump github.com/go-acme/lego/v4 to v4.28.0 ([#12218](https://github.com/traefik/traefik/pull/12218) by [ldez](https://github.com/ldez))
- **[acme]** Bump github.com/go-acme/lego/v4 to v4.29.0 ([#12333](https://github.com/traefik/traefik/pull/12333) by [ldez](https://github.com/ldez))
- **[acme]** Bump github.com/go-acme/lego/v4 to v4.30.1 ([#12432](https://github.com/traefik/traefik/pull/12432) by [ldez](https://github.com/ldez))
- **[acme]** Bump github.com/go-acme/lego/v4 to v4.31.0 ([#12529](https://github.com/traefik/traefik/pull/12529) by [ldez](https://github.com/ldez))
- **[acme]** Bump github.com/go-acme/lego/v4 to v4.32.0 ([#12702](https://github.com/traefik/traefik/pull/12702) by [ldez](https://github.com/ldez))
- **[acme]** Remove invalid private key in log ([#12574](https://github.com/traefik/traefik/pull/12574) by [juliens](https://github.com/juliens))
- **[acme]** Replace hardcoded references to LetsEncrypt in log messages ([#12464](https://github.com/traefik/traefik/pull/12464) by [schildbach](https://github.com/schildbach))
- **[cli]** Fix health check ping ([#12512](https://github.com/traefik/traefik/pull/12512) by [olamilekan000](https://github.com/olamilekan000))
- **[docker]** Auto-negotiate Docker API Version ([#12256](https://github.com/traefik/traefik/pull/12256) by [felixbuenemann](https://github.com/felixbuenemann))
- **[docker]** Bump Docker and OpenTelemetry dependencies ([#12761](https://github.com/traefik/traefik/pull/12761) by [mmatur](https://github.com/mmatur))
- **[docker, docker/swarm]** Auto-negotiate Docker API version ([#12262](https://github.com/traefik/traefik/pull/12262) by [kevinpollet](https://github.com/kevinpollet))
- **[fastproxy]** Bump github.com/valyala/fasthttp to v1.69.0 ([#12763](https://github.com/traefik/traefik/pull/12763) by [kevinpollet](https://github.com/kevinpollet))
- **[healthcheck]** Reject absolute URL in healthcheck path configuration ([#12653](https://github.com/traefik/traefik/pull/12653) by [rtribotte](https://github.com/rtribotte))
- **[healthcheck]** Validate healthcheck path configuration ([#12642](https://github.com/traefik/traefik/pull/12642) by [rtribotte](https://github.com/rtribotte))
- **[healthcheck, grpc]** Remove path parsing with grpc healthcheck ([#12760](https://github.com/traefik/traefik/pull/12760) by [rtribotte](https://github.com/rtribotte))
- **[http3]** Bump github.com/quic-go/quic-go to v0.57.0 ([#12308](https://github.com/traefik/traefik/pull/12308) by [GreyXor](https://github.com/GreyXor))
- **[http3]** Bump github.com/quic-go/quic-go to v0.57.1 ([#12319](https://github.com/traefik/traefik/pull/12319) by [GreyXor](https://github.com/GreyXor))
- **[http3]** Bump github.com/quic-go/quic-go to v0.58.0 ([#12448](https://github.com/traefik/traefik/pull/12448) by [GreyXor](https://github.com/GreyXor))
- **[http3]** Bump github.com/quic-go/quic-go to v0.59.0 ([#12553](https://github.com/traefik/traefik/pull/12553) by [jnoordsij](https://github.com/jnoordsij))
- **[k8s]** Fix condition used for serving and fenced endpoints ([#12521](https://github.com/traefik/traefik/pull/12521) by [LBF38](https://github.com/LBF38))
- **[k8s/gatewayapi]** Fix Gateway API router's rules ([#12753](https://github.com/traefik/traefik/pull/12753) by [rtribotte](https://github.com/rtribotte))
- **[k8s/ingress]** Fix panic for empty defaultBackend and defaultBackend without resources ([#12509](https://github.com/traefik/traefik/pull/12509) by [gndz07](https://github.com/gndz07))
- **[k8s/ingress-nginx]** Add AllowCrossNamespaceResources and GlobalAllowedResponseHeader options to control custom headers annotations ([#12680](https://github.com/traefik/traefik/pull/12680) by [rtribotte](https://github.com/rtribotte))
- **[k8s/ingress-nginx]** Deprecate Kubernetes Ingress NGINX provider experimental flag ([#12286](https://github.com/traefik/traefik/pull/12286) by [rtribotte](https://github.com/rtribotte))
- **[k8s/ingress-nginx]** Fix nginx rewrite target ([#12730](https://github.com/traefik/traefik/pull/12730) by [mmatur](https://github.com/mmatur))
- **[k8s/ingress-nginx]** Fix NGINX sslredirect annotation support ([#12387](https://github.com/traefik/traefik/pull/12387) by [rtribotte](https://github.com/rtribotte))
- **[k8s/ingress-nginx]** Fix nginx.ingress.kubernetes.io/proxy-ssl-verify annotation support ([#12351](https://github.com/traefik/traefik/pull/12351) by [rtribotte](https://github.com/rtribotte))
- **[k8s/ingress-nginx]** Fix SSL redirect to match NGINX behavior ([#12361](https://github.com/traefik/traefik/pull/12361) by [mmatur](https://github.com/mmatur))
- **[k8s/ingress-nginx]** Fix the service name for ingress-nginx provider ([#12352](https://github.com/traefik/traefik/pull/12352) by [mmatur](https://github.com/mmatur))
- **[k8s/ingress-nginx]** Fix use-regex nginx annotation ([#12531](https://github.com/traefik/traefik/pull/12531) by [LBF38](https://github.com/LBF38))
- **[k8s/ingress-nginx]** Prevent Ingress Nginx provider http router to attach to an entrypoint with TLS ([#12528](https://github.com/traefik/traefik/pull/12528) by [rtribotte](https://github.com/rtribotte))
- **[metrics, tracing, accesslogs]** Fix ObservabilityConfig SetDefaults  ([#12636](https://github.com/traefik/traefik/pull/12636) by [mmatur](https://github.com/mmatur))
- **[middleware]** Fix case sensitivity on x-forwarded headers for Connection ([#12690](https://github.com/traefik/traefik/pull/12690) by [LBF38](https://github.com/LBF38))
- **[middleware]** Fix HasSecureHeadersDefined returning false when stsSeconds is 0 ([#12684](https://github.com/traefik/traefik/pull/12684) by [veeceey](https://github.com/veeceey))
- **[middleware, authentication]** Add maxResponseBodySize configuration to forwardAuth middleware ([#12694](https://github.com/traefik/traefik/pull/12694) by [gndz07](https://github.com/gndz07))
- **[middleware, authentication]** Change ForwardAuth error log level from DEBUG to ERROR ([#12324](https://github.com/traefik/traefik/pull/12324) by [murataslan1](https://github.com/murataslan1))
- **[middleware, authentication]** Handle empty/missing User-Agent header ([#12545](https://github.com/traefik/traefik/pull/12545) by [a-stangl](https://github.com/a-stangl))
- **[middleware, k8s, k8s/ingress-nginx]** Fix from to www nginx annotation ([#12736](https://github.com/traefik/traefik/pull/12736) by [mmatur](https://github.com/mmatur))
- **[middleware, k8s/ingress-nginx]** Fix custom error pages behavior for ingress-nginx provider ([#12738](https://github.com/traefik/traefik/pull/12738) by [mmatur](https://github.com/mmatur))
- **[otel]** Bump go.opentelemetry.io/otel dependencies ([#12754](https://github.com/traefik/traefik/pull/12754) by [rtribotte](https://github.com/rtribotte))
- **[plugins]** Validate plugin module name ([#12291](https://github.com/traefik/traefik/pull/12291) by [kevinpollet](https://github.com/kevinpollet))
- **[redis]** Fix mutually exclusive verification for Redis ([#12442](https://github.com/traefik/traefik/pull/12442) by [juliens](https://github.com/juliens))
- **[server]** Bump golang.org/x/crypto to v0.45.0 ([#12296](https://github.com/traefik/traefik/pull/12296) by [kevinpollet](https://github.com/kevinpollet))
- **[server]** Bump golang.org/x/net to v0.51.0 ([#12756](https://github.com/traefik/traefik/pull/12756) by [kevinpollet](https://github.com/kevinpollet))
- **[server]** Filter unknown nodes with file and env for the deprecation loader ([#12227](https://github.com/traefik/traefik/pull/12227) by [rtribotte](https://github.com/rtribotte))
- **[server]** Fix deny encoded characters ([#12454](https://github.com/traefik/traefik/pull/12454) by [rtribotte](https://github.com/rtribotte))
- **[server]** Fix deny encoded characters ([#12457](https://github.com/traefik/traefik/pull/12457) by [rtribotte](https://github.com/rtribotte))
- **[server]** Fix multi-layer routing with models ([#12258](https://github.com/traefik/traefik/pull/12258) by [juliens](https://github.com/juliens))
- **[server]** Fix TLS handshake error handling ([#12692](https://github.com/traefik/traefik/pull/12692) by [juliens](https://github.com/juliens))
- **[server]** Make encoded character options opt-in ([#12540](https://github.com/traefik/traefik/pull/12540) by [gndz07](https://github.com/gndz07))
- **[server]** Make the aggregator compute provider namespace for router's parentRefs ([#12235](https://github.com/traefik/traefik/pull/12235) by [rtribotte](https://github.com/rtribotte))
- **[server]** Print access logs for rejected requests and warn about new behavior ([#12424](https://github.com/traefik/traefik/pull/12424) by [kevinpollet](https://github.com/kevinpollet))
- **[server]** Print access logs for rejected requests and warn about new behavior ([#12426](https://github.com/traefik/traefik/pull/12426) by [rtribotte](https://github.com/rtribotte))
- **[server]** Reject suspicious encoded characters ([#12360](https://github.com/traefik/traefik/pull/12360) by [rtribotte](https://github.com/rtribotte))
- **[server]** Remove conn deadline after STARTTLS negociation ([#12639](https://github.com/traefik/traefik/pull/12639) by [rtribotte](https://github.com/rtribotte))
- **[service]** Avoid recursion with services ([#12591](https://github.com/traefik/traefik/pull/12591) by [juliens](https://github.com/juliens))
- **[tls]** Fix verifyServerCertMatchesURI function behavior ([#12575](https://github.com/traefik/traefik/pull/12575) by [kevinpollet](https://github.com/kevinpollet))
- **[tls, server]** Cap TLS record length to RFC 8446 limit in ClientHello peeking ([#12638](https://github.com/traefik/traefik/pull/12638) by [mmatur](https://github.com/mmatur))
- **[tracing, otel]** Use ParentBased sampler to respect parent span sampling decision ([#12403](https://github.com/traefik/traefik/pull/12403) by [xe-leon](https://github.com/xe-leon))
- **[udp]** Revert "Avoid allocations in readLoop by using sync.Pool" ([#12267](https://github.com/traefik/traefik/pull/12267) by [kevinpollet](https://github.com/kevinpollet))
- **[webui]** Bump dependencies of documentation and webui ([#12581](https://github.com/traefik/traefik/pull/12581) by [gndz07](https://github.com/gndz07))
- **[webui]** Fix basePath validation for dashboard template ([#12729](https://github.com/traefik/traefik/pull/12729) by [gndz07](https://github.com/gndz07))
- **[webui]** Fix blocked navigation on Safari ([#12231](https://github.com/traefik/traefik/pull/12231) by [gndz07](https://github.com/gndz07))
- **[webui]** Fix missing type definition ([#12780](https://github.com/traefik/traefik/pull/12780) by [gndz07](https://github.com/gndz07))
- **[webui]** Fix priority display in dashboard and ACME bypass redirect ([#12740](https://github.com/traefik/traefik/pull/12740) by [mmatur](https://github.com/mmatur))
- **[webui]** Restore remote Upgrade to Hub button web component ([#12219](https://github.com/traefik/traefik/pull/12219) by [gndz07](https://github.com/gndz07))
- **[webui]** Use url.Parse to validate X-Forwarded-Prefix value ([#12643](https://github.com/traefik/traefik/pull/12643) by [kevinpollet](https://github.com/kevinpollet))
- **[webui]** Validate X-Forwarded-Prefix value for dashboard redirect ([#12514](https://github.com/traefik/traefik/pull/12514) by [LBF38](https://github.com/LBF38))

**Documentation:**
- **[acme]** Add missing ACME options and clean up table for more visibility ([#12208](https://github.com/traefik/traefik/pull/12208) by [sheddy-traefik](https://github.com/sheddy-traefik))
- **[api]** Fix typo in API dashboard configuration instructions ([#12335](https://github.com/traefik/traefik/pull/12335) by [NAICOLAS](https://github.com/NAICOLAS))
- **[docker]** Add documentation for loadbalancer.server.url in Docker and Swarm providers ([#12289](https://github.com/traefik/traefik/pull/12289) by [webash](https://github.com/webash))
- **[docker]** Update docker in-depth setup guide ([#12682](https://github.com/traefik/traefik/pull/12682) by [mdevino](https://github.com/mdevino))
- **[docker/swarm]** Update swarm.md traefik version ([#12508](https://github.com/traefik/traefik/pull/12508) by [DBouraoui](https://github.com/DBouraoui))
- **[k8s]** Fix Gateway API version and the list of features supported ([#12254](https://github.com/traefik/traefik/pull/12254) by [nmengin](https://github.com/nmengin))
- **[k8s]** Fix Kubernetes reference yml file ([#12406](https://github.com/traefik/traefik/pull/12406) by [mmatur](https://github.com/mmatur))
- **[k8s]** Fix kubernetes.md with correct http redirections ([#12603](https://github.com/traefik/traefik/pull/12603) by [MartenM](https://github.com/MartenM))
- **[k8s]** Fix Nginx provider documentation ([#12266](https://github.com/traefik/traefik/pull/12266) by [nmengin](https://github.com/nmengin))
- **[k8s]** Improve the K8S multi-tenancy security note ([#12444](https://github.com/traefik/traefik/pull/12444) by [nmengin](https://github.com/nmengin))
- **[k8s]** Make labelSelector option casing more consistent ([#12658](https://github.com/traefik/traefik/pull/12658) by [holysoles](https://github.com/holysoles))
- **[k8s, k8s/ingress-nginx]** Add configmaps right to Ingress NGINX RBAC ([#12557](https://github.com/traefik/traefik/pull/12557) by [kevinpollet](https://github.com/kevinpollet))
- **[k8s/gatewayapi]** Fix links of Helm chart values reference to providers.kubernetesGateway.enabled ([#12315](https://github.com/traefik/traefik/pull/12315) by [shouhei](https://github.com/shouhei))
- **[k8s/ingress, k8s]** Fix Kubernetes Ingress provider documentation ([#12443](https://github.com/traefik/traefik/pull/12443) by [nmengin](https://github.com/nmengin))
- **[k8s/ingress-nginx]** Add auth-signin to unsupported nginx annotations list ([#12370](https://github.com/traefik/traefik/pull/12370) by [fibsifan](https://github.com/fibsifan))
- **[k8s/ingress-nginx]** Add RBAC documentation for Ingress NGINX provider ([#12445](https://github.com/traefik/traefik/pull/12445) by [nmn3m](https://github.com/nmn3m))
- **[k8s/ingress-nginx]** Add temporary note to advertise the incoming NGINX annotations ([#12699](https://github.com/traefik/traefik/pull/12699) by [nmengin](https://github.com/nmengin))
- **[k8s/ingress-nginx]** Fix default value of ingress-nginx provider in documentation ([#12328](https://github.com/traefik/traefik/pull/12328) by [mloiseleur](https://github.com/mloiseleur))
- **[k8s/ingress-nginx]** Fix ingress-nginx annotations documentation ([#12510](https://github.com/traefik/traefik/pull/12510) by [nmengin](https://github.com/nmengin))
- **[k8s/ingress-nginx]** Improve ingress-nginx provider documentation ([#12288](https://github.com/traefik/traefik/pull/12288) by [sheddy-traefik](https://github.com/sheddy-traefik))
- **[k8s/ingress-nginx]** Improve the configuration options display of the Kubernetes ingress-nginx provider ([#12297](https://github.com/traefik/traefik/pull/12297) by [mloiseleur](https://github.com/mloiseleur))
- **[k8s/ingress-nginx]** NGINX Ingress Controller to Traefik Migration Guide ([#12318](https://github.com/traefik/traefik/pull/12318) by [sheddy-traefik](https://github.com/sheddy-traefik))
- **[middleware]** Correct documentation for Digest auth ([#12651](https://github.com/traefik/traefik/pull/12651) by [Zash](https://github.com/Zash))
- **[middleware]** Fix default encodings in compress middleware ([#12216](https://github.com/traefik/traefik/pull/12216) by [Belphemur](https://github.com/Belphemur))
- **[middleware, k8s/crd]** Fix the errors middleware's document for Kubernetes CRD ([#12600](https://github.com/traefik/traefik/pull/12600) by [yuito-it](https://github.com/yuito-it))
- **[service]** Fix loadbalancer doc for highest random weight ([#12283](https://github.com/traefik/traefik/pull/12283) by [ozon2](https://github.com/ozon2))
- **[tls]** Clarify SNI selection ([#12482](https://github.com/traefik/traefik/pull/12482) by [AnuragEkkati](https://github.com/AnuragEkkati))
- Add @gndz07 as a current maintainer ([#12594](https://github.com/traefik/traefik/pull/12594) by [emilevauge](https://github.com/emilevauge))
- Add a Breaking change note to the changelog ([#12398](https://github.com/traefik/traefik/pull/12398) by [nmengin](https://github.com/nmengin))
- Add documentation about checkNewVersion ([#12298](https://github.com/traefik/traefik/pull/12298) by [darkweaver87](https://github.com/darkweaver87))
- Add missing `.http` to TOML table names ([#12713](https://github.com/traefik/traefik/pull/12713) by [Darsstar](https://github.com/Darsstar))
- Add product comparison matrix and features page ([#12037](https://github.com/traefik/traefik/pull/12037) by [sheddy-traefik](https://github.com/sheddy-traefik))
- Bring back security section on API & Dashboard documentation page ([#12507](https://github.com/traefik/traefik/pull/12507) by [gndz07](https://github.com/gndz07))
- Clarify doc about encoded characters rejection ([#12391](https://github.com/traefik/traefik/pull/12391) by [rtribotte](https://github.com/rtribotte))
- Clean Up Menu Entries & Update Expose Overview ([#12405](https://github.com/traefik/traefik/pull/12405) by [sheddy-traefik](https://github.com/sheddy-traefik))
- Correct encoded characters allowance in entrypoints.md ([#12679](https://github.com/traefik/traefik/pull/12679) by [Apflkuacha](https://github.com/Apflkuacha))
- Correctly Format the HTTP Service Documentation ([#12311](https://github.com/traefik/traefik/pull/12311) by [sheddy-traefik](https://github.com/sheddy-traefik))
- Document negative priority support for routers ([#12505](https://github.com/traefik/traefik/pull/12505) by [understood-the-assignment](https://github.com/understood-the-assignment))
- Document Path matcher placeholder removal in v3 migration guide ([#12570](https://github.com/traefik/traefik/pull/12570) by [sheddy-traefik](https://github.com/sheddy-traefik))
- Fix API basepath option documentation ([#12744](https://github.com/traefik/traefik/pull/12744) by [nmengin](https://github.com/nmengin))
- Fix broken links in TCP Service and HTTP Router documentation ([#12215](https://github.com/traefik/traefik/pull/12215) by [sheddy-traefik](https://github.com/sheddy-traefik))
- Fix code copy button positioning ([#12520](https://github.com/traefik/traefik/pull/12520) by [AnuragEkkati](https://github.com/AnuragEkkati))
- Fix encoded characters entryPoint option documentation ([#12384](https://github.com/traefik/traefik/pull/12384) by [rtribotte](https://github.com/rtribotte))
- Fix encoded characters option documentation ([#12373](https://github.com/traefik/traefik/pull/12373) by [kevinpollet](https://github.com/kevinpollet))
- Fix encodedCharacters entryPoint option documentation ([#12385](https://github.com/traefik/traefik/pull/12385) by [rtribotte](https://github.com/rtribotte))
- Fix incorrect TOML example in entrypoints docs ([#12711](https://github.com/traefik/traefik/pull/12711) by [mfmfuyu](https://github.com/mfmfuyu))
- Fix link description in Traefik Proxy documentation ([#12488](https://github.com/traefik/traefik/pull/12488) by [schaerfo](https://github.com/schaerfo))
- Fix Menu Item Naming ([#12431](https://github.com/traefik/traefik/pull/12431) by [sheddy-traefik](https://github.com/sheddy-traefik))
- Fix migration guide indentation ([#12365](https://github.com/traefik/traefik/pull/12365) by [kevinpollet](https://github.com/kevinpollet))
- Fix migration guide URLs in deprecation notice ([#12430](https://github.com/traefik/traefik/pull/12430) by [alexmar07](https://github.com/alexmar07))
- Fix typo in kubernetes.md ([#12515](https://github.com/traefik/traefik/pull/12515) by [EdwardSalkeld](https://github.com/EdwardSalkeld))
- Fix typo in v3.6 migration guide ([#12212](https://github.com/traefik/traefik/pull/12212) by [jnoordsij](https://github.com/jnoordsij))
- Fix typo on JWT documentation ([#12616](https://github.com/traefik/traefik/pull/12616) by [mdevino](https://github.com/mdevino))
- Improve Service Reference page ([#12541](https://github.com/traefik/traefik/pull/12541) by [sheddy-traefik](https://github.com/sheddy-traefik))
- Improve the structure of the routing reference pages ([#12429](https://github.com/traefik/traefik/pull/12429) by [sheddy-traefik](https://github.com/sheddy-traefik))
- Increased content width in documentation ([#12632](https://github.com/traefik/traefik/pull/12632) by [tobiasge](https://github.com/tobiasge))
- Remove extra dots in migration guide ([#12573](https://github.com/traefik/traefik/pull/12573) by [rtribotte](https://github.com/rtribotte))
- Remove extraneous dots in migration guide ([#12571](https://github.com/traefik/traefik/pull/12571) by [dathbe](https://github.com/dathbe))
- Restore documentation on http.maxHeaderBytes ([#12440](https://github.com/traefik/traefik/pull/12440) by [mloiseleur](https://github.com/mloiseleur))
- Split Expose User Guides & Add Multi-Layer Routing Section ([#12238](https://github.com/traefik/traefik/pull/12238) by [sheddy-traefik](https://github.com/sheddy-traefik))
- Update Configuration Overview Page ([#12202](https://github.com/traefik/traefik/pull/12202) by [sheddy-traefik](https://github.com/sheddy-traefik))
- Update SECURITY.md ([#12304](https://github.com/traefik/traefik/pull/12304) by [cwayne18](https://github.com/cwayne18))
- Update SECURITY.md to streamline information ([#12310](https://github.com/traefik/traefik/pull/12310) by [emilevauge](https://github.com/emilevauge))

## [v3.6.10](https://github.com/traefik/traefik/tree/v3.6.10) (2026-03-06)
[All Commits](https://github.com/traefik/traefik/compare/v3.6.9...v3.6.10)

**Bug fixes:**
- **[docker]** Bump Docker and OpenTelemetry dependencies ([#12761](https://github.com/traefik/traefik/pull/12761) by [mmatur](https://github.com/mmatur))
- **[fastproxy]** Bump github.com/valyala/fasthttp to v1.69.0 ([#12763](https://github.com/traefik/traefik/pull/12763) by [kevinpollet](https://github.com/kevinpollet))
- **[healthcheck, grpc]** Remove path parsing with grpc healthcheck ([#12760](https://github.com/traefik/traefik/pull/12760) by [rtribotte](https://github.com/rtribotte))
- **[k8s/gatewayapi]** Fix Gateway API router's rules ([#12753](https://github.com/traefik/traefik/pull/12753) by [rtribotte](https://github.com/rtribotte))
- **[middleware]** Fix HasSecureHeadersDefined returning false when stsSeconds is 0 ([#12684](https://github.com/traefik/traefik/pull/12684) by [veeceey](https://github.com/veeceey))
- **[otel]** Bump go.opentelemetry.io/otel dependencies ([#12754](https://github.com/traefik/traefik/pull/12754) by [rtribotte](https://github.com/rtribotte))
- **[server]** Bump golang.org/x/net to v0.51.0 ([#12756](https://github.com/traefik/traefik/pull/12756) by [kevinpollet](https://github.com/kevinpollet))
- **[webui]** Fix priority display in dashboard and ACME bypass redirect ([#12740](https://github.com/traefik/traefik/pull/12740) by [mmatur](https://github.com/mmatur))
- **[webui]** Fix basePath validation for dashboard template ([#12729](https://github.com/traefik/traefik/pull/12729) by [gndz07](https://github.com/gndz07))

**Documentation:**
- **[middleware]** Correct documentation for Digest auth ([#12651](https://github.com/traefik/traefik/pull/12651) by [Zash](https://github.com/Zash))
- Add missing `.http` to TOML table names ([#12713](https://github.com/traefik/traefik/pull/12713) by [Darsstar](https://github.com/Darsstar))
- Fix incorrect TOML example in entrypoints docs ([#12711](https://github.com/traefik/traefik/pull/12711) by [mfmfuyu](https://github.com/mfmfuyu))
- Fix API basepath option documentation ([#12744](https://github.com/traefik/traefik/pull/12744) by [nmengin](https://github.com/nmengin))

## [v2.11.40](https://github.com/traefik/traefik/tree/v2.11.40) (2026-03-06)
[All Commits](https://github.com/traefik/traefik/compare/v2.11.38...v2.11.40)

**Bug fixes:**
- **[docker]** Bump Docker and OpenTelemetry dependencies ([#12761](https://github.com/traefik/traefik/pull/12761) by [mmatur](https://github.com/mmatur))
- **[server]** Bump golang.org/x/net to v0.51.0 ([#12756](https://github.com/traefik/traefik/pull/12756) by [kevinpollet](https://github.com/kevinpollet))

## [v2.11.39](https://github.com/traefik/traefik/tree/v2.11.39) (2026-03-06)
[All Commits](https://github.com/traefik/traefik/compare/v2.11.38...v2.11.39)

Release canceled.

## [v3.6.9](https://github.com/traefik/traefik/tree/v3.6.9) (2026-02-23)
[All Commits](https://github.com/traefik/traefik/compare/v3.6.8...v3.6.9)

**Bug fixes:**
- **[acme]** Bump github.com/go-acme/lego/v4 to v4.32.0 ([#12702](https://github.com/traefik/traefik/pull/12702) by [ldez](https://github.com/ldez))
- **[middleware]** Fix case sensitivity on x-forwarded headers for Connection ([#12690](https://github.com/traefik/traefik/pull/12690) by [LBF38](https://github.com/LBF38))
- **[middleware, authentication]** Handle empty/missing User-Agent header ([#12545](https://github.com/traefik/traefik/pull/12545) by [a-stangl](https://github.com/a-stangl))
- **[middleware, authentication]** Add maxResponseBodySize configuration to forwardAuth middleware ([#12694](https://github.com/traefik/traefik/pull/12694) by [gndz07](https://github.com/gndz07))
- **[server]** Fix TLS handshake error handling ([#12692](https://github.com/traefik/traefik/pull/12692) by [juliens](https://github.com/juliens))

**Documentation:**
- **[docker]** Update docker in-depth setup guide ([#12682](https://github.com/traefik/traefik/pull/12682) by [mdevino](https://github.com/mdevino))
- **[k8s]** Make labelSelector option casing more consistent ([#12658](https://github.com/traefik/traefik/pull/12658) by [holysoles](https://github.com/holysoles))
- **[k8s/ingress-nginx]** Add temporary note to advertise the incoming NGINX annotations ([#12699](https://github.com/traefik/traefik/pull/12699) by [nmengin](https://github.com/nmengin))
- Increased content width in documentation ([#12632](https://github.com/traefik/traefik/pull/12632) by [tobiasge](https://github.com/tobiasge))
- Correct encoded characters allowance in entrypoints.md ([#12679](https://github.com/traefik/traefik/pull/12679) by [Apflkuacha](https://github.com/Apflkuacha))

## [v2.11.38](https://github.com/traefik/traefik/tree/v2.11.38) (2026-02-23)
[All Commits](https://github.com/traefik/traefik/compare/v2.11.37...v2.11.38)

**Bug fixes:**
- **[middleware]** Fix case sensitivity on x-forwarded headers for Connection ([#12690](https://github.com/traefik/traefik/pull/12690) by [LBF38](https://github.com/LBF38))
- **[middleware, authentication]** Add maxResponseBodySize configuration to forwardAuth middleware ([#12694](https://github.com/traefik/traefik/pull/12694) by [gndz07](https://github.com/gndz07))
- **[server]** Fix TLS handshake error handling ([#12692](https://github.com/traefik/traefik/pull/12692) by [juliens](https://github.com/juliens))

## [v3.6.8](https://github.com/traefik/traefik/tree/v3.6.8) (2026-02-11)
[All Commits](https://github.com/traefik/traefik/compare/v3.6.7...v3.6.8)

**Bug fixes:**
- **[acme]** Remove invalid private key in log ([#12574](https://github.com/traefik/traefik/pull/12574) by [juliens](https://github.com/juliens))
- **[acme]** Alter TLS renewal period ([#12479](https://github.com/traefik/traefik/pull/12479) by [LtHummus](https://github.com/LtHummus))
- **[healthcheck]** Reject absolute URL in healthcheck path configuration ([#12653](https://github.com/traefik/traefik/pull/12653) by [rtribotte](https://github.com/rtribotte))
- **[http3]** Bump github.com/quic-go/quic-go to v0.59.0 ([#12553](https://github.com/traefik/traefik/pull/12553) by [jnoordsij](https://github.com/jnoordsij))
- **[metrics,tracing,accesslogs]** Fix ObservabilityConfig SetDefaults  ([#12636](https://github.com/traefik/traefik/pull/12636) by [mmatur](https://github.com/mmatur))
- **[server]** Remove conn deadline after STARTTLS negociation ([#12639](https://github.com/traefik/traefik/pull/12639) by [rtribotte](https://github.com/rtribotte))
- **[tls]** Fix verifyServerCertMatchesURI function behavior ([#12575](https://github.com/traefik/traefik/pull/12575) by [kevinpollet](https://github.com/kevinpollet))
- **[tracing,otel]** Use ParentBased sampler to respect parent span sampling decision ([#12403](https://github.com/traefik/traefik/pull/12403) by [xe-leon](https://github.com/xe-leon))
- **[webui]** Use url.Parse to validate X-Forwarded-Prefix value ([#12643](https://github.com/traefik/traefik/pull/12643) by [kevinpollet](https://github.com/kevinpollet))
- **[healthcheck]** Validate healthcheck path configuration (#12642 by @rtribotte)
- **[tls, server]** Cap TLS record length to RFC 8446 limit in ClientHello peeking (#12638 by @mmatur)
- **[service]** Avoid recursion with services ([#12591](https://github.com/traefik/traefik/pull/12591) by [juliens](https://github.com/juliens))
- **[webui]** Bump dependencies of documentation and webui ([#12581](https://github.com/traefik/traefik/pull/12581) by [gndz07](https://github.com/gndz07))

**Documentation:**
- **[k8s]** Fix kubernetes.md with correct http redirections ([#12603](https://github.com/traefik/traefik/pull/12603) by [MartenM](https://github.com/MartenM))
- **[middleware,k8s/crd]** Fix the errors middleware&#39;s document for Kubernetes CRD ([#12600](https://github.com/traefik/traefik/pull/12600) by [yuito-it](https://github.com/yuito-it))
- **[tls]** Clarify SNI selection ([#12482](https://github.com/traefik/traefik/pull/12482) by [AnuragEkkati](https://github.com/AnuragEkkati))
- Fix typo on JWT documentation ([#12616](https://github.com/traefik/traefik/pull/12616) by [mdevino](https://github.com/mdevino))
- Add @gndz07 as a current maintainer ([#12594](https://github.com/traefik/traefik/pull/12594) by [emilevauge](https://github.com/emilevauge))
- Remove extraneous dots in migration guide ([#12571](https://github.com/traefik/traefik/pull/12571) by [dathbe](https://github.com/dathbe))
- Document Path matcher placeholder removal in v3 migration guide ([#12570](https://github.com/traefik/traefik/pull/12570) by [sheddy-traefik](https://github.com/sheddy-traefik))
- Improve Service Reference page ([#12541](https://github.com/traefik/traefik/pull/12541) by [sheddy-traefik](https://github.com/sheddy-traefik))
- Document negative priority support for routers ([#12505](https://github.com/traefik/traefik/pull/12505) by [understood-the-assignment](https://github.com/understood-the-assignment))
- Improve the structure of the routing reference pages ([#12429](https://github.com/traefik/traefik/pull/12429) by [sheddy-traefik](https://github.com/sheddy-traefik))
- Clean Up Menu Entries &amp; Update Expose Overview ([#12405](https://github.com/traefik/traefik/pull/12405) by [sheddy-traefik](https://github.com/sheddy-traefik))
- Split Expose User Guides &amp; Add Multi-Layer Routing Section ([#12238](https://github.com/traefik/traefik/pull/12238) by [sheddy-traefik](https://github.com/sheddy-traefik))
- Remove extra dots in migration guide ([#12573](https://github.com/traefik/traefik/pull/12573) by [rtribotte](https://github.com/rtribotte))

**Misc:**
- Merge v2.11 into v3.6 ([#12652](https://github.com/traefik/traefik/pull/12652) by [mmatur](https://github.com/mmatur))
- Merge v2.11 into v3.6 ([#12644](https://github.com/traefik/traefik/pull/12644) by [mmatur](https://github.com/mmatur))
- Merge branch v2.11 into v3.6 ([#12617](https://github.com/traefik/traefik/pull/12617) by [mmatur](https://github.com/mmatur))
- Merge v2.11 into v3.6 ([#12605](https://github.com/traefik/traefik/pull/12605) by [mmatur](https://github.com/mmatur))
- Merge v2.11 into v3.6 ([#12601](https://github.com/traefik/traefik/pull/12601) by [mmatur](https://github.com/mmatur))
- Merge branch v2.11 into v3.6 ([#12556](https://github.com/traefik/traefik/pull/12556) by [mmatur](https://github.com/mmatur))

## [v2.11.37](https://github.com/traefik/traefik/tree/v2.11.37) (2026-02-11)
[All Commits](https://github.com/traefik/traefik/compare/v2.11.36...v2.11.37)

**Bug fixes:**
- **[healthcheck]** Validate healthcheck path configuration (#12642 by @rtribotte)
- **[tls, server]** Cap TLS record length to RFC 8446 limit in ClientHello peeking (#12638 by @mmatur)

## [v2.11.36](https://github.com/traefik/traefik/tree/v2.11.36) (2026-02-02)
[All Commits](https://github.com/traefik/traefik/compare/v2.11.35...v2.11.36)

**Bug fixes:**
- **[service]** Avoid recursion with services ([#12591](https://github.com/traefik/traefik/pull/12591) by [juliens](https://github.com/juliens))
- **[webui]** Bump dependencies of documentation and webui ([#12581](https://github.com/traefik/traefik/pull/12581) by [gndz07](https://github.com/gndz07))

**Documentation:**
- Remove extra dots in migration guide ([#12573](https://github.com/traefik/traefik/pull/12573) by [rtribotte](https://github.com/rtribotte))

## [v3.6.7](https://github.com/traefik/traefik/tree/v3.6.7) (2026-01-14)
[All Commits](https://github.com/traefik/traefik/compare/v3.6.6...v3.6.7)

**Bug fixes:**
- **[acme]** Bump github.com/go-acme/lego/v4 to v4.31.0 ([#12529](https://github.com/traefik/traefik/pull/12529) by [ldez](https://github.com/ldez))
- **[acme]** Add missing renew options ([#12467](https://github.com/traefik/traefik/pull/12467) by [ldez](https://github.com/ldez))
- **[acme]** Replace hardcoded references to LetsEncrypt in log messages ([#12464](https://github.com/traefik/traefik/pull/12464) by [schildbach](https://github.com/schildbach))
- **[k8s/ingress-nginx]** Fix use-regex nginx annotation ([#12531](https://github.com/traefik/traefik/pull/12531) by [LBF38](https://github.com/LBF38))
- **[k8s/ingress-nginx]** Prevent Ingress Nginx provider http router to attach to an entrypoint with TLS ([#12528](https://github.com/traefik/traefik/pull/12528) by [rtribotte](https://github.com/rtribotte))
- **[k8s/ingress]** Fix panic for empty defaultBackend and defaultBackend without resources ([#12509](https://github.com/traefik/traefik/pull/12509) by [gndz07](https://github.com/gndz07))
- **[k8s]** Fix condition used for serving and fenced endpoints ([#12521](https://github.com/traefik/traefik/pull/12521) by [LBF38](https://github.com/LBF38))
- **[webui]** Validate X-Forwarded-Prefix value for dashboard redirect ([#12514](https://github.com/traefik/traefik/pull/12514) by [LBF38](https://github.com/LBF38))
- **[acme]** Add timeout to ACME-TLS/1 challenge handshake ([#12516](https://github.com/traefik/traefik/pull/12516) by [LBF38](https://github.com/LBF38))
- **[server]** Make encoded character options opt-in ([#12540](https://github.com/traefik/traefik/pull/12540) by [gndz07](https://github.com/gndz07))

**Documentation:**
- **[docker/swarm]** Update swarm.md traefik version ([#12508](https://github.com/traefik/traefik/pull/12508) by [DBouraoui](https://github.com/DBouraoui))
- **[k8s/ingress-nginx]** Fix ingress-nginx annotations documentation ([#12510](https://github.com/traefik/traefik/pull/12510) by [nmengin](https://github.com/nmengin))
- **[k8s]** Fix Kubernetes reference yml file ([#12406](https://github.com/traefik/traefik/pull/12406) by [mmatur](https://github.com/mmatur))
- Fix code copy button positioning ([#12520](https://github.com/traefik/traefik/pull/12520) by [AnuragEkkati](https://github.com/AnuragEkkati))
- Fix typo in kubernetes.md ([#12515](https://github.com/traefik/traefik/pull/12515) by [EdwardSalkeld](https://github.com/EdwardSalkeld))
- Bring back security section on API &amp; Dashboard documentation page ([#12507](https://github.com/traefik/traefik/pull/12507) by [gndz07](https://github.com/gndz07))
- Fix link description in Traefik Proxy documentation ([#12488](https://github.com/traefik/traefik/pull/12488) by [schaerfo](https://github.com/schaerfo))
- Add product comparison matrix and features page ([#12037](https://github.com/traefik/traefik/pull/12037) by [sheddy-traefik](https://github.com/sheddy-traefik))

**Misc:**
- Merge branch v2.11 into v3.6 ([#12552](https://github.com/traefik/traefik/pull/12552) by [rtribotte](https://github.com/rtribotte))
- Merge branch v2.11 into v3.6 ([#12533](https://github.com/traefik/traefik/pull/12533) by [mmatur](https://github.com/mmatur))
- Merge branch v2.11 into v3.6 ([#12497](https://github.com/traefik/traefik/pull/12497) by [mmatur](https://github.com/mmatur))

## [v2.11.35](https://github.com/traefik/traefik/tree/v2.11.35) (2026-01-14)
[All Commits](https://github.com/traefik/traefik/compare/v2.11.34...v2.11.35)

**Bug fixes:**
- **[acme]** Add timeout to ACME-TLS/1 challenge handshake ([#12516](https://github.com/traefik/traefik/pull/12516) by [LBF38](https://github.com/LBF38))
- **[server]** Make encoded character options opt-in ([#12540](https://github.com/traefik/traefik/pull/12540) by [gndz07](https://github.com/gndz07))

## [v3.6.6](https://github.com/traefik/traefik/tree/v3.6.6) (2025-12-29)
[All Commits](https://github.com/traefik/traefik/compare/v3.6.5...v3.6.6)

**Bug fixes:**
- **[acme]** Bump github.com/go-acme/lego/v4 to v4.30.1 ([#12432](https://github.com/traefik/traefik/pull/12432) by [ldez](https://github.com/ldez))
- **[http3]** Bump github.com/quic-go/quic-go to v0.58.0 ([#12448](https://github.com/traefik/traefik/pull/12448) by [GreyXor](https://github.com/GreyXor))
- **[redis]** Fix mutually exclusive verification for Redis ([#12442](https://github.com/traefik/traefik/pull/12442) by [juliens](https://github.com/juliens))
- **[server]** Fix deny encoded characters ([#12454](https://github.com/traefik/traefik/pull/12454) by [rtribotte](https://github.com/rtribotte))

**Documentation:**
- **[k8s/ingress,k8s]** Fix Kubernetes Ingress provider documentation ([#12443](https://github.com/traefik/traefik/pull/12443) by [nmengin](https://github.com/nmengin))
- **[k8s/ingress-nginx]** Add RBAC documentation for Ingress NGINX provider ([#12445](https://github.com/traefik/traefik/pull/12445) by [nmn3m](https://github.com/nmn3m))
- **[k8s]** Improve the K8S multi-tenancy security note ([#12444](https://github.com/traefik/traefik/pull/12444) by [nmengin](https://github.com/nmengin))
- Restore documentation on http.maxHeaderBytes ([#12440](https://github.com/traefik/traefik/pull/12440) by [mloiseleur](https://github.com/mloiseleur))
- Fix Menu Item Naming ([#12431](https://github.com/traefik/traefik/pull/12431) by [sheddy-traefik](https://github.com/sheddy-traefik))

**Misc:**
- Merge branch v2.11 into v3.6 ([#12475](https://github.com/traefik/traefik/pull/12475) by [mmatur](https://github.com/mmatur))
- Merge branch v2.11 into v3.6 ([#12438](https://github.com/traefik/traefik/pull/12438) by [kevinpollet](https://github.com/kevinpollet))

## [v2.11.34](https://github.com/traefik/traefik/tree/v2.11.34) (2025-12-23)
[All Commits](https://github.com/traefik/traefik/compare/v2.11.33...v2.11.34)

**Bug fixes:**
- **[server]** Fix deny encoded characters ([#12457](https://github.com/traefik/traefik/pull/12457) by [rtribotte](https://github.com/rtribotte))

## [v2.11.33](https://github.com/traefik/traefik/tree/v2.11.33) (2025-12-17)
[All Commits](https://github.com/traefik/traefik/compare/v2.11.32...v2.11.33)

**Bug fixes:**
- **[server]** Print access logs for rejected requests and warn about new behavior ([#12426](https://github.com/traefik/traefik/pull/12426) by [rtribotte](https://github.com/rtribotte))

**Documentation:**
- Clarify doc about encoded characters rejection ([#12391](https://github.com/traefik/traefik/pull/12391) by [rtribotte](https://github.com/rtribotte))
- Fix encoded characters entryPoint option documentation ([#12384](https://github.com/traefik/traefik/pull/12384) by [rtribotte](https://github.com/rtribotte))
- Fix encoded characters option documentation ([#12373](https://github.com/traefik/traefik/pull/12373) by [kevinpollet](https://github.com/kevinpollet))

## [v3.6.5](https://github.com/traefik/traefik/tree/v3.6.5) (2025-12-16)
[All Commits](https://github.com/traefik/traefik/compare/v3.6.4...v3.6.5)

**Bug fixes:**
- **[k8s/ingress-nginx]** Fix NGINX sslredirect annotation support ([#12387](https://github.com/traefik/traefik/pull/12387) by [rtribotte](https://github.com/rtribotte))
- **[server]** Print access logs for rejected requests and warn about new behavior ([#12424](https://github.com/traefik/traefik/pull/12424) by [kevinpollet](https://github.com/kevinpollet))

**Documentation:**
- **[k8s/ingress-nginx]** Add auth-signin to unsupported nginx annotations list ([#12370](https://github.com/traefik/traefik/pull/12370) by [fibsifan](https://github.com/fibsifan))
- Add a Breaking change note to the changelog ([#12398](https://github.com/traefik/traefik/pull/12398) by [nmengin](https://github.com/nmengin))
- Fix encodedCharacters entryPoint option documentation ([#12385](https://github.com/traefik/traefik/pull/12385) by [rtribotte](https://github.com/rtribotte))

## [v3.6.4](https://github.com/traefik/traefik/tree/v3.6.4) (2025-12-05)
[All Commits](https://github.com/traefik/traefik/compare/v3.6.2...v3.6.4)

**CVE's fixed:**
- [CVE-2025-66490](https://nvd.nist.gov/vuln/detail/CVE-2025-66490) (Advisory [GHSA-gm3x-23wp-hc2c](https://github.com/traefik/traefik/security/advisories/GHSA-gm3x-23wp-hc2c)): **Breaking Change** please read the [migration guide](https://doc.traefik.io/traefik/v3.6/migrate/v3/#v364).
- [CVE-2025-66491](https://nvd.nist.gov/vuln/detail/CVE-2025-66491) (Advisory [GHSA-7vww-mvcr-x6vj](https://github.com/traefik/traefik/security/advisories/GHSA-7vww-mvcr-x6vj))

**Important:** Please read the [migration guide](https://doc.traefik.io/traefik/v3.6/migrate/v3/#v364).

**Bug fixes:**
- **[server]** Reject suspicious encoded characters ([#12360](https://github.com/traefik/traefik/pull/12360) by [rtribotte](https://github.com/rtribotte))
- **[plugins]** Validate plugin module name ([#12291](https://github.com/traefik/traefik/pull/12291) by [kevinpollet](https://github.com/kevinpollet))
- **[http3]** Bump github.com/quic-go/quic-go to v0.57.1 ([#12319](https://github.com/traefik/traefik/pull/12319) by [GreyXor](https://github.com/GreyXor))
- **[http3]** Bump github.com/quic-go/quic-go to v0.57.0 ([#12308](https://github.com/traefik/traefik/pull/12308) by [GreyXor](https://github.com/GreyXor))
- **[server]** Bump golang.org/x/crypto to v0.45.0 ([#12296](https://github.com/traefik/traefik/pull/12296) by [kevinpollet](https://github.com/kevinpollet))
- **[acme]** Bump github.com/go-acme/lego/v4 to v4.29.0 ([#12333](https://github.com/traefik/traefik/pull/12333) by [ldez](https://github.com/ldez))
- **[k8s/ingress-nginx]** Fix SSL redirect to match NGINX behavior ([#12361](https://github.com/traefik/traefik/pull/12361) by [mmatur](https://github.com/mmatur))
- **[k8s/ingress-nginx]** Fix the service name for ingress-nginx provider ([#12352](https://github.com/traefik/traefik/pull/12352) by [mmatur](https://github.com/mmatur))
- **[k8s/ingress-nginx]** Fix nginx.ingress.kubernetes.io/proxy-ssl-verify annotation support ([#12351](https://github.com/traefik/traefik/pull/12351) by [rtribotte](https://github.com/rtribotte))
- **[middleware,authentication]** Change ForwardAuth error log level from DEBUG to ERROR ([#12324](https://github.com/traefik/traefik/pull/12324) by [murataslan1](https://github.com/murataslan1))

**Documentation:**
- **[api]** Fix typo in API dashboard configuration instructions ([#12335](https://github.com/traefik/traefik/pull/12335) by [NAICOLAS](https://github.com/NAICOLAS))
- **[docker]** Add documentation for loadbalancer.server.url in Docker and Swarm providers ([#12289](https://github.com/traefik/traefik/pull/12289) by [webash](https://github.com/webash))
- **[k8s/gatewayapi]** Fix links of Helm chart values reference to providers.kubernetesGateway.enabled ([#12315](https://github.com/traefik/traefik/pull/12315) by [shouhei](https://github.com/shouhei))
- **[k8s/ingress-nginx]** Fix default value of ingress-nginx provider in documentation ([#12328](https://github.com/traefik/traefik/pull/12328) by [mloiseleur](https://github.com/mloiseleur))
- **[k8s/ingress-nginx]** NGINX Ingress Controller to Traefik Migration Guide ([#12318](https://github.com/traefik/traefik/pull/12318) by [sheddy-traefik](https://github.com/sheddy-traefik))
- **[k8s/ingress-nginx]** Improve the configuration options display of the Kubernetes ingress-nginx provider ([#12297](https://github.com/traefik/traefik/pull/12297) by [mloiseleur](https://github.com/mloiseleur))
- **[k8s/ingress-nginx]** Improve ingress-nginx provider documentation ([#12288](https://github.com/traefik/traefik/pull/12288) by [sheddy-traefik](https://github.com/sheddy-traefik))
- **[service]** Fix loadbalancer doc for highest random weight ([#12283](https://github.com/traefik/traefik/pull/12283) by [ozon2](https://github.com/ozon2))
- Correctly Format the HTTP Service Documentation ([#12311](https://github.com/traefik/traefik/pull/12311) by [sheddy-traefik](https://github.com/sheddy-traefik))
- Add documentation about checkNewVersion ([#12298](https://github.com/traefik/traefik/pull/12298) by [darkweaver87](https://github.com/darkweaver87))

**Misc:**
- Merge branch v2.11 into v3.6 ([#12364](https://github.com/traefik/traefik/pull/12364) by [kevinpollet](https://github.com/kevinpollet))
- Merge branch v2.11 into v3.6 ([#12341](https://github.com/traefik/traefik/pull/12341) by [mmatur](https://github.com/mmatur))
- Merge branch v2.11 into v3.6 ([#12368](https://github.com/traefik/traefik/pull/12368) by [mmatur](https://github.com/mmatur))

## [v3.6.3](https://github.com/traefik/traefik/tree/v3.6.3) (2025-12-04)
[All Commits](https://github.com/traefik/traefik/compare/v3.6.2...v3.6.3)

Release canceled.

## [v2.11.32](https://github.com/traefik/traefik/tree/v2.11.32) (2025-12-04)
[All Commits](https://github.com/traefik/traefik/compare/v2.11.31...v2.11.32)

**Bug fixes:**
- **[server]** Reject suspicious encoded characters ([#12360](https://github.com/traefik/traefik/pull/12360) by [rtribotte](https://github.com/rtribotte))
- **[plugins]** Validate plugin module name ([#12291](https://github.com/traefik/traefik/pull/12291) by [kevinpollet](https://github.com/kevinpollet))
- **[http3]** Bump github.com/quic-go/quic-go to v0.57.1 ([#12319](https://github.com/traefik/traefik/pull/12319) by [GreyXor](https://github.com/GreyXor))
- **[http3]** Bump github.com/quic-go/quic-go to v0.57.0 ([#12308](https://github.com/traefik/traefik/pull/12308) by [GreyXor](https://github.com/GreyXor))
- **[server]** Bump golang.org/x/crypto to v0.45.0 ([#12296](https://github.com/traefik/traefik/pull/12296) by [kevinpollet](https://github.com/kevinpollet))

**Documentation:**
- Update SECURITY.md to streamline information ([#12310](https://github.com/traefik/traefik/pull/12310) by [emilevauge](https://github.com/emilevauge))
- Update SECURITY.md ([#12304](https://github.com/traefik/traefik/pull/12304) by [cwayne18](https://github.com/cwayne18))

## [v3.6.2](https://github.com/traefik/traefik/tree/v3.6.2) (2025-11-18)
[All Commits](https://github.com/traefik/traefik/compare/v3.6.1...v3.6.2)

**Bug fixes:**
- **[k8s/ingress-nginx]** Deprecate Kubernetes Ingress NGINX provider experimental flag ([#12286](https://github.com/traefik/traefik/pull/12286) by [rtribotte](https://github.com/rtribotte))

## [v3.6.1](https://github.com/traefik/traefik/tree/v3.6.1) (2025-11-13)
[All Commits](https://github.com/traefik/traefik/compare/v3.6.0...v3.6.1)

**Bug fixes:**
- **[docker]** Auto-negotiate Docker API Version ([#12256](https://github.com/traefik/traefik/pull/12256) by [felixbuenemann](https://github.com/felixbuenemann))
- **[server]** Fix multi-layer routing with models ([#12258](https://github.com/traefik/traefik/pull/12258) by [juliens](https://github.com/juliens))
- **[udp]** Revert &#34;Avoid allocations in readLoop by using sync.Pool&#34; ([#12267](https://github.com/traefik/traefik/pull/12267) by [kevinpollet](https://github.com/kevinpollet))
- **[webui]** Fix blocked navigation on Safari ([#12231](https://github.com/traefik/traefik/pull/12231) by [gndz07](https://github.com/gndz07))
- **[webui]** Restore remote Upgrade to Hub button web component ([#12219](https://github.com/traefik/traefik/pull/12219) by [gndz07](https://github.com/gndz07))

**Documentation:**
- **[k8s]** Fix Nginx provider documentation ([#12266](https://github.com/traefik/traefik/pull/12266) by [nmengin](https://github.com/nmengin))
- **[k8s]** Fix Gateway API version and the list of features supported ([#12254](https://github.com/traefik/traefik/pull/12254) by [nmengin](https://github.com/nmengin))

## [v2.11.31](https://github.com/traefik/traefik/tree/v2.11.31) (2025-11-13)
[All Commits](https://github.com/traefik/traefik/compare/v2.11.30...v2.11.31)

**Bug fixes:**
- **[docker,docker/swarm]** Auto-negotiate Docker API version ([#12262](https://github.com/traefik/traefik/pull/12262) by [kevinpollet](https://github.com/kevinpollet))

## [v3.6.0](https://github.com/traefik/traefik/tree/v3.6.0) (2025-11-07)
[All Commits](https://github.com/traefik/traefik/compare/v3.5.0-rc1...v3.6.0)

**Enhancements:**
- **[acme]** Add new certificatesresolvers options ([#11977](https://github.com/traefik/traefik/pull/11977) by [ldez](https://github.com/ldez))
- **[consul,consulcatalog,nomad]** Log provider namespace during startup ([#12002](https://github.com/traefik/traefik/pull/12002) by [shreealt](https://github.com/shreealt))
- **[docker]** Allow discovering non-running Docker containers  ([#10645](https://github.com/traefik/traefik/pull/10645) by [acouvreur](https://github.com/acouvreur))
- **[ecs]** AWS ECS IPv6 Support ([#12179](https://github.com/traefik/traefik/pull/12179) by [wizbit](https://github.com/wizbit))
- **[file,k8s/crd,service]** Add least time load balancing strategy ([#12167](https://github.com/traefik/traefik/pull/12167) by [sdelicata](https://github.com/sdelicata))
- **[healthcheck,tcp]** Add TCP Healthcheck ([#11238](https://github.com/traefik/traefik/pull/11238) by [ddtmachado](https://github.com/ddtmachado))
- **[healthcheck]** Add passive health checks ([#11351](https://github.com/traefik/traefik/pull/11351) by [Nelwhix](https://github.com/Nelwhix))
- **[k8s/crd]** Add highest random weight in Kubernetes CRD ([#12061](https://github.com/traefik/traefik/pull/12061) by [lbenguigui](https://github.com/lbenguigui))
- **[k8s/gatewayapi]** Bump sigs.k8s.io/gateway-api to v1.4.0 ([#12140](https://github.com/traefik/traefik/pull/12140) by [kevinpollet](https://github.com/kevinpollet))
- **[k8s/ingress]** Allow publishing services with type ExternalName ([#12065](https://github.com/traefik/traefik/pull/12065) by [james-callahan](https://github.com/james-callahan))
- **[k8s]** Add Knative provider ([#11448](https://github.com/traefik/traefik/pull/11448) by [idurgakalyan](https://github.com/idurgakalyan))
- **[middleware,authentication]** Add warning when maxBodySize is not set ([#12085](https://github.com/traefik/traefik/pull/12085) by [kianelbo](https://github.com/kianelbo))
- **[middleware,server]** Multi-layer routing ([#12130](https://github.com/traefik/traefik/pull/12130) by [sdelicata](https://github.com/sdelicata))
- **[plugins]** Support syscall ([#11939](https://github.com/traefik/traefik/pull/11939) by [david-garcia-garcia](https://github.com/david-garcia-garcia))
- **[server]** Implement HTTP2 HPACK table size options ([#12050](https://github.com/traefik/traefik/pull/12050) by [GCHQDeveloper548](https://github.com/GCHQDeveloper548))
- **[service,udp]** Avoid allocations in readLoop by using sync.Pool ([#12029](https://github.com/traefik/traefik/pull/12029) by [arturmelanchyk](https://github.com/arturmelanchyk))
- **[service]** Add HighestRandomWeight load balancing algorithm ([#9946](https://github.com/traefik/traefik/pull/9946) by [mathieuHa](https://github.com/mathieuHa))
- **[webui]** Add Traefik Hub demo in dashboard ([#12193](https://github.com/traefik/traefik/pull/12193) by [gndz07](https://github.com/gndz07))
- **[webui]** Reduce vertical padding in dashboard table rows for more compact layout ([#12145](https://github.com/traefik/traefik/pull/12145) by [leccelecce](https://github.com/leccelecce))

**Bug fixes:**
- **[server]** Make the aggregator compute provider namespace for router&#39;s parentRefs ([#12235](https://github.com/traefik/traefik/pull/12235) by [rtribotte](https://github.com/rtribotte))

**Documentation:**
- Prepare release v3.6.0-rc1 ([#12211](https://github.com/traefik/traefik/pull/12211) by [kevinpollet](https://github.com/kevinpollet))
- Fix broken link to migration guide on readme ([#12021](https://github.com/traefik/traefik/pull/12021) by [0slb](https://github.com/0slb))
- Fix broken links in TCP Service and HTTP Router documentation ([#12215](https://github.com/traefik/traefik/pull/12215) by [sheddy-traefik](https://github.com/sheddy-traefik))
- Fix typo in v3.6 migration guide ([#12212](https://github.com/traefik/traefik/pull/12212) by [jnoordsij](https://github.com/jnoordsij))

**Misc:**
- Merge branch v3.5 into master ([#12210](https://github.com/traefik/traefik/pull/12210) by [rtribotte](https://github.com/rtribotte))
- Merge branch v3.5 into master ([#12191](https://github.com/traefik/traefik/pull/12191) by [rtribotte](https://github.com/rtribotte))
- Merge branch v3.5 into master ([#12188](https://github.com/traefik/traefik/pull/12188) by [rtribotte](https://github.com/rtribotte))
- Merge branch v3.5 into master ([#12160](https://github.com/traefik/traefik/pull/12160) by [rtribotte](https://github.com/rtribotte))
- Merge branch v3.5 into master ([#12136](https://github.com/traefik/traefik/pull/12136) by [kevinpollet](https://github.com/kevinpollet))
- Merge branch v3.5 into master ([#12120](https://github.com/traefik/traefik/pull/12120) by [rtribotte](https://github.com/rtribotte))
- Merge branch v3.5 into master ([#12095](https://github.com/traefik/traefik/pull/12095) by [kevinpollet](https://github.com/kevinpollet))
- Merge branch v3.5 into master ([#12051](https://github.com/traefik/traefik/pull/12051) by [rtribotte](https://github.com/rtribotte))
- Merge branch v3.5 into master ([#11976](https://github.com/traefik/traefik/pull/11976) by [kevinpollet](https://github.com/kevinpollet))
- Merge branch v3.5 into master ([#11940](https://github.com/traefik/traefik/pull/11940) by [kevinpollet](https://github.com/kevinpollet))
- Merge branch v3.5 into master ([#11900](https://github.com/traefik/traefik/pull/11900) by [kevinpollet](https://github.com/kevinpollet))
- Merge branch v3.5 into v3.6 ([#12242](https://github.com/traefik/traefik/pull/12242) by [kevinpollet](https://github.com/kevinpollet))

## [v3.5.6](https://github.com/traefik/traefik/tree/v3.5.6) (2025-11-07)
[All Commits](https://github.com/traefik/traefik/compare/v3.5.4...v3.5.6)

**Bug fixes:**
- **[acme]** Bump github.com/go-acme/lego/v4 to v4.28.0 ([#12218](https://github.com/traefik/traefik/pull/12218) by [ldez](https://github.com/ldez))
- **[server]** Filter unknown nodes with file and env for the deprecation loader ([#12227](https://github.com/traefik/traefik/pull/12227) by [rtribotte](https://github.com/rtribotte))

**Documentation:**
- **[acme]** Add missing ACME options and clean up table for more visibility ([#12208](https://github.com/traefik/traefik/pull/12208) by [sheddy-traefik](https://github.com/sheddy-traefik))
- **[middleware]** Fix default encodings in compress middleware ([#12216](https://github.com/traefik/traefik/pull/12216) by [Belphemur](https://github.com/Belphemur))
- Update Configuration Overview Page ([#12202](https://github.com/traefik/traefik/pull/12202) by [sheddy-traefik](https://github.com/sheddy-traefik))

## [v3.5.5](https://github.com/traefik/traefik/tree/v3.5.5) (2025-11-07)
[All Commits](https://github.com/traefik/traefik/compare/v3.5.4...v3.5.5)

Release canceled.

## [v3.6.0-rc1](https://github.com/traefik/traefik/tree/v3.6.0-rc1) (2025-10-28)
[All Commits](https://github.com/traefik/traefik/compare/v3.5.0-rc1...v3.6.0-rc1)

**Enhancements:**
- **[acme]** Add new certificatesresolvers options ([#11977](https://github.com/traefik/traefik/pull/11977) by [ldez](https://github.com/ldez))
- **[consul,consulcatalog,nomad]** Log provider namespace during startup ([#12002](https://github.com/traefik/traefik/pull/12002) by [shreealt](https://github.com/shreealt))
- **[docker]** Allow discovering non-running Docker containers  ([#10645](https://github.com/traefik/traefik/pull/10645) by [acouvreur](https://github.com/acouvreur))
- **[ecs]** AWS ECS IPv6 Support ([#12179](https://github.com/traefik/traefik/pull/12179) by [wizbit](https://github.com/wizbit))
- **[file,k8s/crd,service]** Add least time load balancing strategy ([#12167](https://github.com/traefik/traefik/pull/12167) by [sdelicata](https://github.com/sdelicata))
- **[healthcheck,tcp]** Add TCP Healthcheck ([#11238](https://github.com/traefik/traefik/pull/11238) by [ddtmachado](https://github.com/ddtmachado))
- **[healthcheck]** Add passive health checks ([#11351](https://github.com/traefik/traefik/pull/11351) by [Nelwhix](https://github.com/Nelwhix))
- **[k8s/crd]** Add highest random weight in Kubernetes CRD ([#12061](https://github.com/traefik/traefik/pull/12061) by [lbenguigui](https://github.com/lbenguigui))
- **[k8s/gatewayapi]** Bump sigs.k8s.io/gateway-api to v1.4.0 ([#12140](https://github.com/traefik/traefik/pull/12140) by [kevinpollet](https://github.com/kevinpollet))
- **[k8s/ingress]** Allow publishing services with type ExternalName ([#12065](https://github.com/traefik/traefik/pull/12065) by [james-callahan](https://github.com/james-callahan))
- **[k8s]** Add Knative provider ([#11448](https://github.com/traefik/traefik/pull/11448) by [idurgakalyan](https://github.com/idurgakalyan))
- **[middleware,authentication]** Add warning when maxBodySize is not set ([#12085](https://github.com/traefik/traefik/pull/12085) by [kianelbo](https://github.com/kianelbo))
- **[middleware,server]** Multi-layer routing ([#12130](https://github.com/traefik/traefik/pull/12130) by [sdelicata](https://github.com/sdelicata))
- **[plugins]** Support syscall ([#11939](https://github.com/traefik/traefik/pull/11939) by [david-garcia-garcia](https://github.com/david-garcia-garcia))
- **[server]** Implement HTTP2 HPACK table size options ([#12050](https://github.com/traefik/traefik/pull/12050) by [GCHQDeveloper548](https://github.com/GCHQDeveloper548))
- **[service,udp]** Avoid allocations in readLoop by using sync.Pool ([#12029](https://github.com/traefik/traefik/pull/12029) by [arturmelanchyk](https://github.com/arturmelanchyk))
- **[service]** Add HighestRandomWeight load balancing algorithm ([#9946](https://github.com/traefik/traefik/pull/9946) by [mathieuHa](https://github.com/mathieuHa))
- **[webui]** Add Traefik Hub demo in dashboard ([#12193](https://github.com/traefik/traefik/pull/12193) by [gndz07](https://github.com/gndz07))
- **[webui]** Reduce vertical padding in dashboard table rows for more compact layout ([#12145](https://github.com/traefik/traefik/pull/12145) by [leccelecce](https://github.com/leccelecce))

**Documentation:**
- Fix broken link to migration guide on readme ([#12021](https://github.com/traefik/traefik/pull/12021) by [0slb](https://github.com/0slb))

**Misc:**
- Merge branch v3.5 into master ([#12210](https://github.com/traefik/traefik/pull/12210) by [rtribotte](https://github.com/rtribotte))
- Merge branch v3.5 into master ([#12191](https://github.com/traefik/traefik/pull/12191) by [rtribotte](https://github.com/rtribotte))
- Merge branch v3.5 into master ([#12188](https://github.com/traefik/traefik/pull/12188) by [rtribotte](https://github.com/rtribotte))
- Merge branch v3.5 into master ([#12160](https://github.com/traefik/traefik/pull/12160) by [rtribotte](https://github.com/rtribotte))
- Merge branch v3.5 into master ([#12136](https://github.com/traefik/traefik/pull/12136) by [kevinpollet](https://github.com/kevinpollet))
- Merge branch v3.5 into master ([#12120](https://github.com/traefik/traefik/pull/12120) by [rtribotte](https://github.com/rtribotte))
- Merge branch v3.5 into master ([#12095](https://github.com/traefik/traefik/pull/12095) by [kevinpollet](https://github.com/kevinpollet))
- Merge branch v3.5 into master ([#12051](https://github.com/traefik/traefik/pull/12051) by [rtribotte](https://github.com/rtribotte))
- Merge branch v3.5 into master ([#11976](https://github.com/traefik/traefik/pull/11976) by [kevinpollet](https://github.com/kevinpollet))
- Merge branch v3.5 into master ([#11940](https://github.com/traefik/traefik/pull/11940) by [kevinpollet](https://github.com/kevinpollet))
- Merge branch v3.5 into master ([#11900](https://github.com/traefik/traefik/pull/11900) by [kevinpollet](https://github.com/kevinpollet))

## [v3.5.4](https://github.com/traefik/traefik/tree/v3.5.4) (2025-10-28)
[All Commits](https://github.com/traefik/traefik/compare/v3.5.3...v3.5.4)

**Bug fixes:**
- **[acme]** Bump github.com/go-acme/lego/v4 to v4.27.0 ([#12166](https://github.com/traefik/traefik/pull/12166) by [ldez](https://github.com/ldez))
- **[acme]** Bump github.com/go-acme/lego/v4 to v4.26.0 ([#12063](https://github.com/traefik/traefik/pull/12063) by [ldez](https://github.com/ldez))
- **[http3]** Bump github.com/quic-go/quic-go to v0.55.0 ([#12121](https://github.com/traefik/traefik/pull/12121) by [GreyXor](https://github.com/GreyXor))
- **[kv]** Bump github.com/kvtools/etcdv3 to v1.0.3 ([#12163](https://github.com/traefik/traefik/pull/12163) by [kevinpollet](https://github.com/kevinpollet))
- **[logs,metrics,tracing,accesslogs,otel]** Fix otel not working without USER ([#12103](https://github.com/traefik/traefik/pull/12103) by [mmatur](https://github.com/mmatur))
- **[logs,otel]** Enable stdout logging when OTLP is enabled ([#12124](https://github.com/traefik/traefik/pull/12124) by [lbenguigui](https://github.com/lbenguigui))
- **[metrics,otel]** Rename traefik_tls_certs_not_after_milliseconds to traefik_tls_certs_not_after_seconds ([#12141](https://github.com/traefik/traefik/pull/12141) by [shreealt](https://github.com/shreealt))
- **[otel]** Update OpenTelemetry to v1.38.0 and semantic conventions to v1.37.0 ([#12099](https://github.com/traefik/traefik/pull/12099) by [rtribotte](https://github.com/rtribotte))
- **[otel]** Do not fail when pod is not found in K8sAttributesDetector ([#12096](https://github.com/traefik/traefik/pull/12096) by [xe-leon](https://github.com/xe-leon))
- **[tls]** Make the staple updates continuous ([#12142](https://github.com/traefik/traefik/pull/12142) by [rtribotte](https://github.com/rtribotte))
- **[webui]** Fix version display regression ([#12111](https://github.com/traefik/traefik/pull/12111) by [mdeliatf](https://github.com/mdeliatf))

**Documentation:**
- **[accesslogs]** Fix link for accesslog.fields.names in documentation ([#12094](https://github.com/traefik/traefik/pull/12094) by [rmbruntz](https://github.com/rmbruntz))
- **[acme]** Fix Hetzner env var name inside documentation ([#12187](https://github.com/traefik/traefik/pull/12187) by [ldez](https://github.com/ldez))
- **[acme]** Replace internal dead links ([#12152](https://github.com/traefik/traefik/pull/12152) by [rtribotte](https://github.com/rtribotte))
- **[acme]** Clean and avoid collisions of anchors in option tables ([#12149](https://github.com/traefik/traefik/pull/12149) by [rtribotte](https://github.com/rtribotte))
- **[docker/swarm]** Fix swarm code example ([#12115](https://github.com/traefik/traefik/pull/12115) by [Dr4K4n](https://github.com/Dr4K4n))
- **[healthcheck]** Clarify health check requirement for server status metric ([#12201](https://github.com/traefik/traefik/pull/12201) by [asafm](https://github.com/asafm))
- **[k8s/crd]** Fix typo in ingressroute.md from pirority to priority ([#12112](https://github.com/traefik/traefik/pull/12112) by [miromichalicka](https://github.com/miromichalicka))
- **[k8s]** Fix incorrect option and lint page ([#12108](https://github.com/traefik/traefik/pull/12108) by [sheddy-traefik](https://github.com/sheddy-traefik))
- **[k8s]** Add API basePath documentation and fix broken links ([#12177](https://github.com/traefik/traefik/pull/12177) by [mloiseleur](https://github.com/mloiseleur))
- **[k8s]** Merge TLSOption/TLSStore CRD documentation page ([#12164](https://github.com/traefik/traefik/pull/12164) by [nmengin](https://github.com/nmengin))
- **[logs]** Clarify log.filePath behavior in documentation ([#12153](https://github.com/traefik/traefik/pull/12153) by [Alanxtl](https://github.com/Alanxtl))
- **[metrics]** Fix incorrect addInternals configuration option ([#12118](https://github.com/traefik/traefik/pull/12118) by [shreealt](https://github.com/shreealt))
- **[middleware]** Fix anchors in basic auth configuration options ([#12168](https://github.com/traefik/traefik/pull/12168) by [homersimpsons](https://github.com/homersimpsons))
- **[middleware]** Fix PreserveRequestMethod casing ([#12122](https://github.com/traefik/traefik/pull/12122) by [LeTamanoir](https://github.com/LeTamanoir))
- **[middleware]** Add missing reference docs for statusRewrites in errors middleware ([#12198](https://github.com/traefik/traefik/pull/12198) by [sevensolutions](https://github.com/sevensolutions))
- **[middleware]** Document rejectStatusCode ([#12062](https://github.com/traefik/traefik/pull/12062) by [czocher](https://github.com/czocher))
- **[otel]** Align documentation on default otlp endpoint ([#12151](https://github.com/traefik/traefik/pull/12151) by [mloiseleur](https://github.com/mloiseleur))
- **[otel]** Fix metric name to metrics.otlp.grpc.insecure ([#12200](https://github.com/traefik/traefik/pull/12200) by [germainlefebvre4](https://github.com/germainlefebvre4))
- **[server,k8s/crd,k8s]** Add dedicated pages for routers and fix doc links in CRDs ([#12119](https://github.com/traefik/traefik/pull/12119) by [rtribotte](https://github.com/rtribotte))
- **[tls]** Fix typo in TLS certificate generation description ([#12185](https://github.com/traefik/traefik/pull/12185) by [iraj-jelo](https://github.com/iraj-jelo))
- Fix wrong references to router&#39;s pages ([#12131](https://github.com/traefik/traefik/pull/12131) by [rtribotte](https://github.com/rtribotte))
- Fix markdown rendering for table anchors ([#12129](https://github.com/traefik/traefik/pull/12129) by [MaBauMeBad](https://github.com/MaBauMeBad))
- Fix provider option descriptions ([#12135](https://github.com/traefik/traefik/pull/12135) by [kevinpollet](https://github.com/kevinpollet))
- Format HTTP headers as code ([#12105](https://github.com/traefik/traefik/pull/12105) by [tyilo](https://github.com/tyilo))
- Fix heading levels and add links ([#12084](https://github.com/traefik/traefik/pull/12084) by [Granjow](https://github.com/Granjow))

**Misc:**
- Merge branch v2.11 into v3.5 ([#12206](https://github.com/traefik/traefik/pull/12206) by [kevinpollet](https://github.com/kevinpollet))
- Merge branch v2.11 into v3.5 ([#12158](https://github.com/traefik/traefik/pull/12158) by [rtribotte](https://github.com/rtribotte))

## [v2.11.30](https://github.com/traefik/traefik/tree/v2.11.30) (2025-10-28)
[All Commits](https://github.com/traefik/traefik/compare/v2.11.29...v2.11.30)

**Bug fixes:**
- **[http3]** Bump github.com/quic-go/quic-go to v0.55.0 ([#12156](https://github.com/traefik/traefik/pull/12156) by [kevinpollet](https://github.com/kevinpollet))
- **[kv]** Fix KV key name used to check if connection is alive ([#12162](https://github.com/traefik/traefik/pull/12162) by [kevinpollet](https://github.com/kevinpollet))
- **[server]** Bump golang.org/x/net to v0.46.0 ([#12143](https://github.com/traefik/traefik/pull/12143) by [kevinpollet](https://github.com/kevinpollet))
- **[tracing]** Bump gopkg.in/DataDog/dd-trace-go.v1 to v1.74.6 ([#12083](https://github.com/traefik/traefik/pull/12083) by [hannahkm](https://github.com/hannahkm))

## [v3.5.3](https://github.com/traefik/traefik/tree/v3.5.3) (2025-09-26)
[All Commits](https://github.com/traefik/traefik/compare/v3.5.2...v3.5.3)

**Bug fixes:**
- **[k8s/crd]** ServersTransport: set minimum MaxIdleConnsPerHost=-1 ([#12077](https://github.com/traefik/traefik/pull/12077) by [xe-leon](https://github.com/xe-leon))
- **[plugins]** Refactor plugins system ([#12035](https://github.com/traefik/traefik/pull/12035) by [jspdown](https://github.com/jspdown))
- **[server]** Use client conn to build the proxy protocol header ([#12069](https://github.com/traefik/traefik/pull/12069) by [rtribotte](https://github.com/rtribotte))
- **[webui]** Update hub-button-app to use a local script ([#12060](https://github.com/traefik/traefik/pull/12060) by [mdeliatf](https://github.com/mdeliatf))

**Documentation:**
- **[acme,middleware]** Fix broken links in documentation ([#12057](https://github.com/traefik/traefik/pull/12057) by [mloiseleur](https://github.com/mloiseleur))
- **[k8s]** Create Traefik Service CRD sub-resource documentation page ([#12080](https://github.com/traefik/traefik/pull/12080) by [nmengin](https://github.com/nmengin))
- **[k8s]** Fix conflict in IngressRouteTCP documentation ([#12064](https://github.com/traefik/traefik/pull/12064) by [MatBon01](https://github.com/MatBon01))
- Fix typo in rules and priority documentation ([#12089](https://github.com/traefik/traefik/pull/12089) by [Darkangeel-hd](https://github.com/Darkangeel-hd))
- Add govern section ([#12067](https://github.com/traefik/traefik/pull/12067) by [sheddy-traefik](https://github.com/sheddy-traefik))
- Fix entrypoint config examples ([#12056](https://github.com/traefik/traefik/pull/12056) by [markormesher](https://github.com/markormesher))
- Reorganize the menu entries ([#12044](https://github.com/traefik/traefik/pull/12044) by [nmengin](https://github.com/nmengin))
- Add New Secure Section to the Documentation ([#11978](https://github.com/traefik/traefik/pull/11978) by [sheddy-traefik](https://github.com/sheddy-traefik))

## [v3.5.2](https://github.com/traefik/traefik/tree/v3.5.2) (2025-09-09)
[All Commits](https://github.com/traefik/traefik/compare/v3.5.1...v3.5.2)

**Bug fixes:**
- **[middleware,accesslogs]** Add GenericCLF log format for access logs ([#12033](https://github.com/traefik/traefik/pull/12033) by [sdelicata](https://github.com/sdelicata))
- **[middleware]** Fix customerrors query url replacement ([#11876](https://github.com/traefik/traefik/pull/11876) by [DorianBlues](https://github.com/DorianBlues))
- **[tls,service]** Send proxy protocol header before TLS handshake ([#11956](https://github.com/traefik/traefik/pull/11956) by [rtribotte](https://github.com/rtribotte))
- **[webui]** Restore empty webui/static to use traefik as library ([#12025](https://github.com/traefik/traefik/pull/12025) by [youkoulayley](https://github.com/youkoulayley))

**Documentation:**
- **[accesslogs]** Fix path for access-logs header config ([#12030](https://github.com/traefik/traefik/pull/12030) by [cgatt](https://github.com/cgatt))
- **[acme]** Fixes typo for OCSP in CLI example ([#12039](https://github.com/traefik/traefik/pull/12039) by [mloiseleur](https://github.com/mloiseleur))
- **[docker/swarm]** Fixes typo for Swarm mode in CLI example ([#12038](https://github.com/traefik/traefik/pull/12038) by [BilalBudhani](https://github.com/BilalBudhani))
- **[kv]** Fix broken links in KV store documentation ([#12040](https://github.com/traefik/traefik/pull/12040) by [sheddy-traefik](https://github.com/sheddy-traefik))
- **[middleware]** Add redis options to ratelimit middleware &amp; Include distributed rate limit middleware ([#12041](https://github.com/traefik/traefik/pull/12041) by [sheddy-traefik](https://github.com/sheddy-traefik))
- **[server]** Fix link to HTTP3 section in documentation ([#12028](https://github.com/traefik/traefik/pull/12028) by [vincentbernat](https://github.com/vincentbernat))
- Fix migration path in documentation ([#12032](https://github.com/traefik/traefik/pull/12032) by [nmengin](https://github.com/nmengin))

## [v3.5.1](https://github.com/traefik/traefik/tree/v3.5.1) (2025-08-27)
[All Commits](https://github.com/traefik/traefik/compare/v3.5.0...v3.5.1)

**Bug fixes:**
- **[accesslogs,otel]** Provide Log Body in OTEL access Log ([#11867](https://github.com/traefik/traefik/pull/11867) by [tomMoulard](https://github.com/tomMoulard))
- **[acme]** Bump github.com/go-acme/lego/v4 to v4.25.1 ([#11882](https://github.com/traefik/traefik/pull/11882) by [ldez](https://github.com/ldez))
- **[k8s/gatewayapi]** Make app protocol case insensitive ([#11989](https://github.com/traefik/traefik/pull/11989) by [shreealt](https://github.com/shreealt))
- **[otel]** Fix misspelling in docs ([#11952](https://github.com/traefik/traefik/pull/11952) by [mmanciop](https://github.com/mmanciop))
- **[server]** Bump to github.com/pires/go-proxyproto v0.8.1 ([#11991](https://github.com/traefik/traefik/pull/11991) by [rtribotte](https://github.com/rtribotte))
- **[server]** Silent expected errors on receiving sigterm signal ([#11838](https://github.com/traefik/traefik/pull/11838) by [Kwuray](https://github.com/Kwuray))
- **[tracing]** Fix capturedRequestHeaders and capturedResponseHeaders headers options not being canonicalized in tracing ([#12005](https://github.com/traefik/traefik/pull/12005) by [mcuelenaere](https://github.com/mcuelenaere))
- **[tracing]** Follow OTel semantic conventions for root span naming ([#11673](https://github.com/traefik/traefik/pull/11673) by [Alex-Waring](https://github.com/Alex-Waring))
- **[webui]** Update Traefik Proxy dashboard UI development deps ([#11958](https://github.com/traefik/traefik/pull/11958) by [mdeliatf](https://github.com/mdeliatf))
- Refactor to use reflect.TypeFor ([#12010](https://github.com/traefik/traefik/pull/12010) by [cuiweixie](https://github.com/cuiweixie))

**Documentation:**
- **[docker]** Fix missing middleware application for whoami service in docker guide ([#12012](https://github.com/traefik/traefik/pull/12012) by [Copilot](https://github.com/apps/copilot-swe-agent))
- **[k8s/gatewayapi]** Fix documentation to match new gateway-api selector syntax ([#12006](https://github.com/traefik/traefik/pull/12006) by [Firespray-31](https://github.com/Firespray-31))
- **[middleware,hub]** Add Traefik Hub Middlewares To Reference Section ([#11937](https://github.com/traefik/traefik/pull/11937) by [sheddy-traefik](https://github.com/sheddy-traefik))
- **[plugins]** Add extend documentation ([#11904](https://github.com/traefik/traefik/pull/11904) by [sheddy-traefik](https://github.com/sheddy-traefik))
- Update Broken Links in the Migration Docs ([#12016](https://github.com/traefik/traefik/pull/12016) by [sheddy-traefik](https://github.com/sheddy-traefik))
- Fix Documentation menu ([#12013](https://github.com/traefik/traefik/pull/12013) by [nmengin](https://github.com/nmengin))
- Fix invalid links in documentation ([#11995](https://github.com/traefik/traefik/pull/11995) by [mloiseleur](https://github.com/mloiseleur))
- Fix typo in index ([#11994](https://github.com/traefik/traefik/pull/11994) by [ignyx](https://github.com/ignyx))
- Restore missing migration section ([#11973](https://github.com/traefik/traefik/pull/11973) by [rtribotte](https://github.com/rtribotte))
- Clean Documentation ([#11945](https://github.com/traefik/traefik/pull/11945) by [nmengin](https://github.com/nmengin))
- Add back the link to Peka&#39;s page ([#11942](https://github.com/traefik/traefik/pull/11942) by [kevinpollet](https://github.com/kevinpollet))

**Misc:**
- Merge branch v2.11 into v3.5 ([#12019](https://github.com/traefik/traefik/pull/12019) by [rtribotte](https://github.com/rtribotte))
- Merge branch v2.11 into v3.5 ([#12017](https://github.com/traefik/traefik/pull/12017) by [rtribotte](https://github.com/rtribotte))
- Merge branch v2.11 into v3.5 ([#11966](https://github.com/traefik/traefik/pull/11966) by [kevinpollet](https://github.com/kevinpollet))
- Merge branch v3.4 into v3.5 ([#11953](https://github.com/traefik/traefik/pull/11953) by [rtribotte](https://github.com/rtribotte))

## [v2.11.29](https://github.com/traefik/traefik/tree/v2.11.29) (2025-08-26)
[All Commits](https://github.com/traefik/traefik/compare/v2.11.28...v2.11.29)

**Bug fixes:**
- **[acme]** Bump github.com/go-acme/lego/v4 to v4.25.2 ([#11983](https://github.com/traefik/traefik/pull/11983) by [ldez](https://github.com/ldez))
- **[docker]** Bump github.com/docker/docker to v28.3.3 ([#12007](https://github.com/traefik/traefik/pull/12007) by [kevinpollet](https://github.com/kevinpollet))

**Documentation:**
- Fix invalid links in documentation ([#11960](https://github.com/traefik/traefik/pull/11960) by [mloiseleur](https://github.com/mloiseleur))
- Update releases docs for v3.5 ([#11949](https://github.com/traefik/traefik/pull/11949) by [jnoordsij](https://github.com/jnoordsij))

## [v3.5.0](https://github.com/traefik/traefik/tree/v3.5.0) (2025-07-23)
[All Commits](https://github.com/traefik/traefik/compare/v3.5.0-rc1...v3.5.0)

**Enhancements:**
- **[acme]** OCSP stapling ([#8393](https://github.com/traefik/traefik/pull/8393) by [alekitto](https://github.com/alekitto))
- **[acme]** Add acme.httpChallenge.delay option ([#11643](https://github.com/traefik/traefik/pull/11643) by [ldez](https://github.com/ldez))
- **[acme]** Allow configuration of ACME provider http timeout ([#11637](https://github.com/traefik/traefik/pull/11637) by [tkw1536](https://github.com/tkw1536))
- **[healthcheck]** Add url option to healthcheck command ([#11711](https://github.com/traefik/traefik/pull/11711) by [Nelwhix](https://github.com/Nelwhix))
- **[healthcheck]** Add unhealthy Interval to the health check configuration ([#10610](https://github.com/traefik/traefik/pull/10610) by [sswastik02](https://github.com/sswastik02))
- **[k8s/gatewayapi]** Bump sigs.k8s.io/gateway-api to v1.3.0 ([#11719](https://github.com/traefik/traefik/pull/11719) by [rtribotte](https://github.com/rtribotte))
- **[k8s/ingress]** Make the behavior of prefix matching in Ingress consistent with Kubernetes doc ([#11203](https://github.com/traefik/traefik/pull/11203) by [charlie0129](https://github.com/charlie0129))
- **[k8s]** NGINX Ingress Provider ([#11844](https://github.com/traefik/traefik/pull/11844) by [rtribotte](https://github.com/rtribotte))
- **[middleware,authentication]** Handle context canceled in ForwardAuth middleware ([#11817](https://github.com/traefik/traefik/pull/11817) by [bengentree](https://github.com/bengentree))
- **[plugins]** Ability to enable unsafe in yaegi through plugin manifest ([#11589](https://github.com/traefik/traefik/pull/11589) by [Rydez](https://github.com/Rydez))
- **[tls]** Introduce X25519MLKEM768 for Post-Quantum-Secure TLS ([#11731](https://github.com/traefik/traefik/pull/11731) by [fzoli](https://github.com/fzoli))
- **[webui]** Migrate Traefik Proxy dashboard UI to React ([#11674](https://github.com/traefik/traefik/pull/11674) by [gndz07](https://github.com/gndz07))
- **[webui]** Improve visualization for StatusRewrites option of errors middleware ([#11806](https://github.com/traefik/traefik/pull/11806) by [sevensolutions](https://github.com/sevensolutions))

**Bug fixes:**
- **[healthcheck]** Revert 11711 adding url param to healthcheck command ([#11927](https://github.com/traefik/traefik/pull/11927) by [lbenguigui](https://github.com/lbenguigui))
- **[logs,metrics,tracing,accesslogs,otel]** Add missing resource attributes detectors ([#11874](https://github.com/traefik/traefik/pull/11874) by [rtribotte](https://github.com/rtribotte))
- **[logs,tracing,k8s,otel]** Add k8s resource attributes automatically ([#11906](https://github.com/traefik/traefik/pull/11906) by [kevinpollet](https://github.com/kevinpollet))
- **[metrics,otel]** Add resourceAttributes option to OTel metrics ([#11908](https://github.com/traefik/traefik/pull/11908) by [kevinpollet](https://github.com/kevinpollet))
- **[middleware,tracing]** Introduce trace verbosity config and produce less spans by default ([#11870](https://github.com/traefik/traefik/pull/11870) by [rtribotte](https://github.com/rtribotte))

**Documentation:**
- **[docker,ecs,docker/swarm,consulcatalog,nomad]** Add constraints key limitations for label providers ([#11893](https://github.com/traefik/traefik/pull/11893) by [bluepuma77](https://github.com/bluepuma77))
- **[k8s]** Add extended NGinX annotation support documentation ([#11920](https://github.com/traefik/traefik/pull/11920) by [nmengin](https://github.com/nmengin))
- Remove dead link to Peka blog ([#11934](https://github.com/traefik/traefik/pull/11934) by [kevinpollet](https://github.com/kevinpollet))
- Prepare release v3.5.0-rc2 ([#11899](https://github.com/traefik/traefik/pull/11899) by [kevinpollet](https://github.com/kevinpollet))
- Prepare release v3.5.0-rc1 ([#11865](https://github.com/traefik/traefik/pull/11865) by [rtribotte](https://github.com/rtribotte))

**Misc:**
- Merge branch v3.4 into v3.5 ([#11933](https://github.com/traefik/traefik/pull/11933) by [rtribotte](https://github.com/rtribotte))
- Merge branch v3.4 into v3.5 ([#11898](https://github.com/traefik/traefik/pull/11898) by [kevinpollet](https://github.com/kevinpollet))
- Merge branch v3.4 into master ([#11863](https://github.com/traefik/traefik/pull/11863) by [rtribotte](https://github.com/rtribotte))
- Merge branch v3.4 into master ([#11861](https://github.com/traefik/traefik/pull/11861) by [rtribotte](https://github.com/rtribotte))
- Merge branch v3.4 into master ([#11857](https://github.com/traefik/traefik/pull/11857) by [rtribotte](https://github.com/rtribotte))
- Merge branch v3.4 into master ([#11855](https://github.com/traefik/traefik/pull/11855) by [rtribotte](https://github.com/rtribotte))
- Merge branch v3.4 into master ([#11813](https://github.com/traefik/traefik/pull/11813) by [kevinpollet](https://github.com/kevinpollet))
- Merge branch v3.4 into master ([#11758](https://github.com/traefik/traefik/pull/11758) by [mmatur](https://github.com/mmatur))
- Merge v3.4 into master ([#11752](https://github.com/traefik/traefik/pull/11752) by [mmatur](https://github.com/mmatur))
- Merge branch v3.4 into master ([#11708](https://github.com/traefik/traefik/pull/11708) by [kevinpollet](https://github.com/kevinpollet))

## [v3.4.5](https://github.com/traefik/traefik/tree/v3.4.5) (2025-07-23)
[All Commits](https://github.com/traefik/traefik/compare/v3.4.4...v3.4.5)

**Bug fixes:**
- **[http3]** Bump github.com/quic-go/quic-go to v0.54.0 ([#11919](https://github.com/traefik/traefik/pull/11919) by [GreyXor](https://github.com/GreyXor))

**Documentation:**
- Fix typo in entrypoints page ([#11914](https://github.com/traefik/traefik/pull/11914) by [adk-swisstopo](https://github.com/adk-swisstopo))

**Misc:**
- Merge branch v2.11 into v3.4 ([#11930](https://github.com/traefik/traefik/pull/11930) by [kevinpollet](https://github.com/kevinpollet))
- Merge branch v2.11 into v3.4 ([#11926](https://github.com/traefik/traefik/pull/11926) by [rtribotte](https://github.com/rtribotte))

## [v2.11.28](https://github.com/traefik/traefik/tree/v2.11.28) (2025-07-23)
[All Commits](https://github.com/traefik/traefik/compare/v2.11.27...v2.11.28)

**Bug fixes:**
- **[logs]** Redact logged install configuration ([#11907](https://github.com/traefik/traefik/pull/11907) by [jspdown](https://github.com/jspdown))
- **[plugins]** Fix client arbitrary file access during archive extraction zipslip ([#11911](https://github.com/traefik/traefik/pull/11911) by [odaysec](https://github.com/odaysec))
- **[server]** Disable MPTCP by default ([#11918](https://github.com/traefik/traefik/pull/11918) by [rtribotte](https://github.com/rtribotte))

**Documentation:**
- **[k8s/crd,k8s]** Remove all mentions of ordering for TLSOption CurvePreferences field ([#11924](https://github.com/traefik/traefik/pull/11924) by [jnoordsij](https://github.com/jnoordsij))

## [v3.5.0-rc2](https://github.com/traefik/traefik/tree/v3.5.0-rc2) (2025-07-11)
[All Commits](https://github.com/traefik/traefik/compare/v3.5.0-rc1...v3.5.0-rc2)

**Bug fixes:**
- **[logs,metrics,tracing,accesslogs,otel]** Add missing resource attributes detectors ([#11874](https://github.com/traefik/traefik/pull/11874) by [rtribotte](https://github.com/rtribotte))

**Misc:**
- Merge branch v3.4 into v3.5 ([#11898](https://github.com/traefik/traefik/pull/11898) by [kevinpollet](https://github.com/kevinpollet))

## [v3.4.4](https://github.com/traefik/traefik/tree/v3.4.4) (2025-07-11)
[All Commits](https://github.com/traefik/traefik/compare/v3.4.3...v3.4.4)

**Bug fixes:**
- **[k8s/gatewayapi]** Respect service.nativelb=false annotation when nativeLBByDefault is enabled ([#11847](https://github.com/traefik/traefik/pull/11847) by [sdelicata](https://github.com/sdelicata))
- **[service]** Fix concurrent access to balancer status map in WRR and P2C strategies ([#11887](https://github.com/traefik/traefik/pull/11887) by [kevinpollet](https://github.com/kevinpollet))

**Documentation:**
- **[docker,k8s]** Add New Expose Guides ([#11760](https://github.com/traefik/traefik/pull/11760) by [sheddy-traefik](https://github.com/sheddy-traefik))
- **[docker,k8s]** Add New Setup Guides ([#11741](https://github.com/traefik/traefik/pull/11741) by [sheddy-traefik](https://github.com/sheddy-traefik))
- **[docker/swarm]** Fix label for overriding swarm network on container ([#11881](https://github.com/traefik/traefik/pull/11881) by [kevinpollet](https://github.com/kevinpollet))
- **[logs,accesslogs]** Update Logs and Accesslogs Reference documentation with OTLP Options ([#11845](https://github.com/traefik/traefik/pull/11845) by [sheddy-traefik](https://github.com/sheddy-traefik))
- Update what is Traefik page to include full Traefik Platform context ([#11885](https://github.com/traefik/traefik/pull/11885) by [tomatokoolaid](https://github.com/tomatokoolaid))

**Misc:**
- Merge branch v2.11 into v3.4 ([#11896](https://github.com/traefik/traefik/pull/11896) by [kevinpollet](https://github.com/kevinpollet))

## [v2.11.27](https://github.com/traefik/traefik/tree/v2.11.27) (2025-07-11)
[All Commits](https://github.com/traefik/traefik/compare/v2.11.26...v2.11.27)

**Bug fixes:**
- Bump github.com/go-viper/mapstructure/v2 to v2.3.0 ([#11880](https://github.com/traefik/traefik/pull/11880) by [kevinpollet](https://github.com/kevinpollet))

## [v3.5.0-rc1](https://github.com/traefik/traefik/tree/v3.5.0-rc1) (2025-06-26)
[All Commits](https://github.com/traefik/traefik/compare/v3.4.0-rc1...v3.5.0-rc1)

**Enhancements:**
- **[acme]** OCSP stapling ([#8393](https://github.com/traefik/traefik/pull/8393) by [alekitto](https://github.com/alekitto))
- **[acme]** Add acme.httpChallenge.delay option ([#11643](https://github.com/traefik/traefik/pull/11643) by [ldez](https://github.com/ldez))
- **[acme]** Allow configuration of ACME provider http timeout ([#11637](https://github.com/traefik/traefik/pull/11637) by [tkw1536](https://github.com/tkw1536))
- **[healthcheck]** Add url option to healthcheck command ([#11711](https://github.com/traefik/traefik/pull/11711) by [Nelwhix](https://github.com/Nelwhix))
- **[healthcheck]** Add unhealthy Interval to the health check configuration ([#10610](https://github.com/traefik/traefik/pull/10610) by [sswastik02](https://github.com/sswastik02))
- **[k8s/gatewayapi]** Bump sigs.k8s.io/gateway-api to v1.3.0 ([#11719](https://github.com/traefik/traefik/pull/11719) by [rtribotte](https://github.com/rtribotte))
- **[k8s/ingress]** Make the behavior of prefix matching in Ingress consistent with Kubernetes doc ([#11203](https://github.com/traefik/traefik/pull/11203) by [charlie0129](https://github.com/charlie0129))
- **[k8s]** NGINX Ingress Provider ([#11844](https://github.com/traefik/traefik/pull/11844) by [rtribotte](https://github.com/rtribotte))
- **[middleware,authentication]** Handle context canceled in ForwardAuth middleware ([#11817](https://github.com/traefik/traefik/pull/11817) by [bengentree](https://github.com/bengentree))
- **[plugins]** Ability to enable unsafe in yaegi through plugin manifest ([#11589](https://github.com/traefik/traefik/pull/11589) by [Rydez](https://github.com/Rydez))
- **[tls]** Introduce X25519MLKEM768 for Post-Quantum-Secure TLS ([#11731](https://github.com/traefik/traefik/pull/11731) by [fzoli](https://github.com/fzoli))
- **[webui]** Migrate Traefik Proxy dashboard UI to React ([#11674](https://github.com/traefik/traefik/pull/11674) by [gndz07](https://github.com/gndz07))
- **[webui]** Improve visualization for StatusRewrites option of errors middleware ([#11806](https://github.com/traefik/traefik/pull/11806) by [sevensolutions](https://github.com/sevensolutions))

**Misc:**
- Merge branch v3.4 into master ([#11863](https://github.com/traefik/traefik/pull/11863) by [rtribotte](https://github.com/rtribotte))
- Merge branch v3.4 into master ([#11861](https://github.com/traefik/traefik/pull/11861) by [rtribotte](https://github.com/rtribotte))
- Merge branch v3.4 into master ([#11857](https://github.com/traefik/traefik/pull/11857) by [rtribotte](https://github.com/rtribotte))
- Merge branch v3.4 into master ([#11855](https://github.com/traefik/traefik/pull/11855) by [rtribotte](https://github.com/rtribotte))
- Merge branch v3.4 into master ([#11813](https://github.com/traefik/traefik/pull/11813) by [kevinpollet](https://github.com/kevinpollet))
- Merge branch v3.4 into master ([#11758](https://github.com/traefik/traefik/pull/11758) by [mmatur](https://github.com/mmatur))
- Merge v3.4 into master ([#11752](https://github.com/traefik/traefik/pull/11752) by [mmatur](https://github.com/mmatur))
- Merge branch v3.4 into master ([#11708](https://github.com/traefik/traefik/pull/11708) by [kevinpollet](https://github.com/kevinpollet))

## [v3.4.3](https://github.com/traefik/traefik/tree/v3.4.3) (2025-06-26)
[All Commits](https://github.com/traefik/traefik/compare/v3.4.2...v3.4.3)

**Bug fixes:**
- **[http3]** Bump quic-go to v.0.49.0 ([#11848](https://github.com/traefik/traefik/pull/11848) by [joshua-siw](https://github.com/joshua-siw))

## [v3.4.2](https://github.com/traefik/traefik/tree/v3.4.2) (2025-06-26)
[All Commits](https://github.com/traefik/traefik/compare/v3.4.1...v3.4.2)

**Documentation:**
- **[acme]** Add a note to certificatesDuration ([#11808](https://github.com/traefik/traefik/pull/11808) by [sMteX](https://github.com/sMteX))
- **[docker,k8s]** Update Getting started Section with New Docker and Kubernetes Tutorial ([#11714](https://github.com/traefik/traefik/pull/11714) by [sheddy-traefik](https://github.com/sheddy-traefik))
- **[docker]** Remove obsolete version field in compose files ([#11798](https://github.com/traefik/traefik/pull/11798) by [thomas-mauran](https://github.com/thomas-mauran))
- **[k8s]** Add a note about Ingress Backend Resource support ([#11785](https://github.com/traefik/traefik/pull/11785) by [edysli](https://github.com/edysli))
- **[logs,metrics,tracing,accesslogs]** Update the EntryPoints Documentation ([#11856](https://github.com/traefik/traefik/pull/11856) by [sheddy-traefik](https://github.com/sheddy-traefik))
- **[logs,metrics,tracing,accesslogs]** Add New Observe Guides to the Documentation ([#11828](https://github.com/traefik/traefik/pull/11828) by [sheddy-traefik](https://github.com/sheddy-traefik))
- **[middleware]** Remove conflicting information from the CircuitBreaker documentation. ([#11835](https://github.com/traefik/traefik/pull/11835) by [adk-swisstopo](https://github.com/adk-swisstopo))
- **[service]** Clarify mirroring service default percent value ([#11804](https://github.com/traefik/traefik/pull/11804) by [Alexy-vda](https://github.com/Alexy-vda))
- **[websocket]** Add WebSocket guide ([#11623](https://github.com/traefik/traefik/pull/11623) by [NX211](https://github.com/NX211))

**Misc:**
- Merge branch v2.11 into v3.4 ([#11859](https://github.com/traefik/traefik/pull/11859) by [rtribotte](https://github.com/rtribotte))
- Merge branch v2.11 into v3.4 ([#11831](https://github.com/traefik/traefik/pull/11831) by [rtribotte](https://github.com/rtribotte))
- Merge branch v2.11 into v3.4 ([#11810](https://github.com/traefik/traefik/pull/11810) by [rtribotte](https://github.com/rtribotte))

## [v2.11.26](https://github.com/traefik/traefik/tree/v2.11.26) (2025-06-26)
[All Commits](https://github.com/traefik/traefik/compare/v2.11.25...v2.11.26)

**Bug fixes:**
- **[middleware]** Do not log redis sentinel username and password ([#11819](https://github.com/traefik/traefik/pull/11819) by [kevinpollet](https://github.com/kevinpollet))

**Documentation:**
- **[kv]** Fix KV reference rendering ([#11815](https://github.com/traefik/traefik/pull/11815) by [rtribotte](https://github.com/rtribotte))
- **[middleware,k8s/crd]** Fix typo in redirect middleware documentation ([#11830](https://github.com/traefik/traefik/pull/11830) by [rtribotte](https://github.com/rtribotte))
- Update supported versions ([#11811](https://github.com/traefik/traefik/pull/11811) by [jnoordsij](https://github.com/jnoordsij))

## [v3.4.1](https://github.com/traefik/traefik/tree/v3.4.1) (2025-05-27)
[All Commits](https://github.com/traefik/traefik/compare/v3.4.0...v3.4.1)

**Bug fixes:**
- **[docker]** Do not warn network missing if connected to a container network ([#11698](https://github.com/traefik/traefik/pull/11698) by [holysoles](https://github.com/holysoles))
- **[k8s/crd]** Fix CEL validation for RootCA in ServersTransport ([#11775](https://github.com/traefik/traefik/pull/11775) by [rtribotte](https://github.com/rtribotte))
- **[middleware]** Scope the rate limit counter key by source and by middleware ([#11753](https://github.com/traefik/traefik/pull/11753) by [aromeyer](https://github.com/aromeyer))
- **[server]** Use routing path in v3 matchers ([#11790](https://github.com/traefik/traefik/pull/11790) by [kevinpollet](https://github.com/kevinpollet))
- **[service]** Make P2C strategy thread-safe ([#11762](https://github.com/traefik/traefik/pull/11762) by [lbenguigui](https://github.com/lbenguigui))
- **[webui]** Do not display RemoveHeader option when not defined ([#11782](https://github.com/traefik/traefik/pull/11782) by [kevinpollet](https://github.com/kevinpollet))

**Documentation:**
- **[acme]** Fix ambiguous wording in ACME page ([#11789](https://github.com/traefik/traefik/pull/11789) by [joshka](https://github.com/joshka))
- **[k8s]** Fix incorrect case and missing rbac in documentation ([#11742](https://github.com/traefik/traefik/pull/11742) by [mmatur](https://github.com/mmatur))
- **[middleware]** Match encoded certificate to example data for TLS passthrough ([#11759](https://github.com/traefik/traefik/pull/11759) by [holysoles](https://github.com/holysoles))

**Misc:**
- Merge branch v2.11 into v3.4 ([#11799](https://github.com/traefik/traefik/pull/11799) by [kevinpollet](https://github.com/kevinpollet))
- Merge branch v2.11 into v3.4 ([#11796](https://github.com/traefik/traefik/pull/11796) by [kevinpollet](https://github.com/kevinpollet))
- Merge branch v2.11 into v3.4 ([#11783](https://github.com/traefik/traefik/pull/11783) by [kevinpollet](https://github.com/kevinpollet))
- Merge branch v2.11 into v3.4 ([#11757](https://github.com/traefik/traefik/pull/11757) by [mmatur](https://github.com/mmatur))
- Merge v2.11 into v3.4 ([#11751](https://github.com/traefik/traefik/pull/11751) by [mmatur](https://github.com/mmatur))

## [v2.11.25](https://github.com/traefik/traefik/tree/v2.11.25) (2025-05-27)
[All Commits](https://github.com/traefik/traefik/compare/v2.11.24...v2.11.25)

**Bug fixes:**
- **[k8s/ingress]** Fix panic for ingress with backend resource ([#11777](https://github.com/traefik/traefik/pull/11777) by [rtribotte](https://github.com/rtribotte))
- **[server]** Normalize request path ([#11768](https://github.com/traefik/traefik/pull/11768) by [kevinpollet](https://github.com/kevinpollet))

**Documentation:**
- **[middleware,k8s]** Add multi-tenant TLS guidance to the docs ([#11724](https://github.com/traefik/traefik/pull/11724) by [sheddy-traefik](https://github.com/sheddy-traefik))
- **[service]** Add a note about how to disable connection reuse with backends ([#11716](https://github.com/traefik/traefik/pull/11716) by [rtribotte](https://github.com/rtribotte))
- Fix broken link in documentation ([#11761](https://github.com/traefik/traefik/pull/11761) by [sheddy-traefik](https://github.com/sheddy-traefik))
- Change version for path sanitization migration guide ([#11702](https://github.com/traefik/traefik/pull/11702) by [rtribotte](https://github.com/rtribotte))

## [v3.4.0](https://github.com/traefik/traefik/tree/v3.4.0) (2025-05-05)
[All Commits](https://github.com/traefik/traefik/compare/v3.3.0-rc1...v3.4.0)

**Enhancements:**
- **[acme]** Add acme.profile and acme.emailAddresses options ([#11597](https://github.com/traefik/traefik/pull/11597) by [ldez](https://github.com/ldez))
- **[docker,ecs,docker/swarm,consulcatalog,nomad]** Allow configuring server URLs with label providers ([#11374](https://github.com/traefik/traefik/pull/11374) by [yelvert](https://github.com/yelvert))
- **[k8s/crd]** Improve CEL validation on Ingress CRD resources ([#11311](https://github.com/traefik/traefik/pull/11311) by [mloiseleur](https://github.com/mloiseleur))
- **[k8s/crd]** Remove default load-balancing strategy from CRD ([#11701](https://github.com/traefik/traefik/pull/11701) by [kevinpollet](https://github.com/kevinpollet))
- **[k8s/crd]** Restrict regex validation of HTTP status codes for Ingress CRD resources ([#11670](https://github.com/traefik/traefik/pull/11670) by [jnoordsij](https://github.com/jnoordsij))
- **[k8s/gatewayapi]** Set rule priority in Gateway API TLSRoute ([#11443](https://github.com/traefik/traefik/pull/11443) by [augustozanellato](https://github.com/augustozanellato))
- **[k8s/ingress]** Add ingress status for ClusterIP and NodePort Service Type ([#11100](https://github.com/traefik/traefik/pull/11100) by [mlec1](https://github.com/mlec1))
- **[middleware,authentication]** Add option to preserve request method in forwardAuth ([#11473](https://github.com/traefik/traefik/pull/11473) by [an09mous](https://github.com/an09mous))
- **[middleware]** Support rewriting status codes in error page middleware ([#11520](https://github.com/traefik/traefik/pull/11520) by [sevensolutions](https://github.com/sevensolutions))
- **[middleware]** Add Redis rate limiter ([#10211](https://github.com/traefik/traefik/pull/10211) by [longquan0104](https://github.com/longquan0104))
- **[service]** Add p2c load-balancing strategy for servers load-balancer ([#11547](https://github.com/traefik/traefik/pull/11547) by [rtribotte](https://github.com/rtribotte))
- **[sticky-session]** Support domain configuration for sticky cookies ([#11556](https://github.com/traefik/traefik/pull/11556) by [jleal52](https://github.com/jleal52))
- **[tls,k8s/crd,service]** Allow root CA to be added through config maps ([#11475](https://github.com/traefik/traefik/pull/11475) by [Nelwhix](https://github.com/Nelwhix))
- **[tls]** Add support to disable session ticket ([#11609](https://github.com/traefik/traefik/pull/11609) by [avdhoot](https://github.com/avdhoot))
- **[udp]** Add support for UDP routing in systemd socket activation ([#11022](https://github.com/traefik/traefik/pull/11022) by [tsiid](https://github.com/tsiid))
- **[webui]** Add auto webui theme option and default to it ([#11455](https://github.com/traefik/traefik/pull/11455) by [zizzfizzix](https://github.com/zizzfizzix))
- Replace experimental maps and slices with stdlib ([#11350](https://github.com/traefik/traefik/pull/11350) by [Juneezee](https://github.com/Juneezee))
- Bump github.com/redis/go-redis/v9 to v9.7.3 ([#11687](https://github.com/traefik/traefik/pull/11687) by [kevinpollet](https://github.com/kevinpollet))

**Documentation:**
- Prepare release v3.4.0-rc1 ([#11654](https://github.com/traefik/traefik/pull/11654) by [kevinpollet](https://github.com/kevinpollet))
- Prepare release v3.4.0-rc2 ([#11707](https://github.com/traefik/traefik/pull/11707) by [rtribotte](https://github.com/rtribotte))
- Deprecate defaultRuleSyntax and ruleSyntax options ([#11619](https://github.com/traefik/traefik/pull/11619) by [rtribotte](https://github.com/rtribotte))

**Misc:**
- Merge branch v3.3 into master ([#11653](https://github.com/traefik/traefik/pull/11653) by [kevinpollet](https://github.com/kevinpollet))
- Merge branch v3.3 into master ([#11595](https://github.com/traefik/traefik/pull/11595) by [kevinpollet](https://github.com/kevinpollet))
- Merge branch v3.3 into master ([#11541](https://github.com/traefik/traefik/pull/11541) by [kevinpollet](https://github.com/kevinpollet))
- Merge branch v3.3 into master ([#11504](https://github.com/traefik/traefik/pull/11504) by [kevinpollet](https://github.com/kevinpollet))
- Merge branch v3.3 into master ([#11420](https://github.com/traefik/traefik/pull/11420) by [kevinpollet](https://github.com/kevinpollet))
- Merge branch v3.3 into master ([#11394](https://github.com/traefik/traefik/pull/11394) by [mmatur](https://github.com/mmatur))
- Merge branch v3.3 into v3.4 ([#11736](https://github.com/traefik/traefik/pull/11736) by [kevinpollet](https://github.com/kevinpollet))
- Merge branch v3.3 into v3.4 ([#11705](https://github.com/traefik/traefik/pull/11705) by [kevinpollet](https://github.com/kevinpollet))

## [v3.3.7](https://github.com/traefik/traefik/tree/v3.3.7) (2025-05-05)
[All Commits](https://github.com/traefik/traefik/compare/v3.3.6...v3.3.7)

**Bug fixes:**
- **[logs,middleware,accesslogs]** Add SpanID and TraceID accessLogs fields only when tracing is enabled ([#11715](https://github.com/traefik/traefik/pull/11715) by [rtribotte](https://github.com/rtribotte))

## [v3.4.0-rc2](https://github.com/traefik/traefik/tree/v3.4.0-rc2) (2025-04-18)
[All Commits](https://github.com/traefik/traefik/compare/v3.4.0-rc1...v3.4.0-rc2)

**Bug fixes:**
- **[k8s/crd]** Remove default load-balancing strategy from CRD ([#11701](https://github.com/traefik/traefik/pull/11701) by [kevinpollet](https://github.com/kevinpollet))
- **[k8s/crd]** Restrict regex validation of HTTP status codes for Ingress CRD resources ([#11670](https://github.com/traefik/traefik/pull/11670) by [jnoordsij](https://github.com/jnoordsij))
- Bump github.com/redis/go-redis/v9 to v9.7.3 ([#11687](https://github.com/traefik/traefik/pull/11687) by [kevinpollet](https://github.com/kevinpollet))

## [v3.3.6](https://github.com/traefik/traefik/tree/v3.3.6) (2025-04-18)
[All Commits](https://github.com/traefik/traefik/compare/v3.3.5...v3.3.6)

**Documentation:**
- **[k8s/gatewayapi]** Fix Kubernetes Gateway statusAddress documentation ([#11663](https://github.com/traefik/traefik/pull/11663) by [kevinpollet](https://github.com/kevinpollet))
- **[tracing]** Document how to pass multiple Headers on tracing with CLI ([#11665](https://github.com/traefik/traefik/pull/11665) by [mloiseleur](https://github.com/mloiseleur))
- Fix typos on what is Traefik docs page ([#11685](https://github.com/traefik/traefik/pull/11685) by [matthewCmatt](https://github.com/matthewCmatt))
- Update Welcome Page ([#11615](https://github.com/traefik/traefik/pull/11615) by [sheddy-traefik](https://github.com/sheddy-traefik))

**Misc:**
- Merge branch v2.11 into v3.3 ([#11703](https://github.com/traefik/traefik/pull/11703) by [kevinpollet](https://github.com/kevinpollet))
- Merge branch v2.11 into v3.3 ([#11696](https://github.com/traefik/traefik/pull/11696) by [rtribotte](https://github.com/rtribotte))
- Merge branch v2.11 into v3.3 ([#11694](https://github.com/traefik/traefik/pull/11694) by [rtribotte](https://github.com/rtribotte))

## [v2.11.24](https://github.com/traefik/traefik/tree/v2.11.24) (2025-04-18)
[All Commits](https://github.com/traefik/traefik/compare/v2.11.22...v2.11.24)

**Bug fixes:**
- **[acme]** Bump github.com/go-acme/lego/v4 to v4.23.1 ([#11690](https://github.com/traefik/traefik/pull/11690) by [ldez](https://github.com/ldez))
- **[metrics]** Bump gopkg.in/DataDog/dd-trace-go.v1 to v1.72.2 ([#11693](https://github.com/traefik/traefik/pull/11693) by [kevinpollet](https://github.com/kevinpollet))
- **[middleware]** Add Content-Length header to preflight response ([#11682](https://github.com/traefik/traefik/pull/11682) by [lbenguigui](https://github.com/lbenguigui))
- **[server]** Sanitize request path ([#11684](https://github.com/traefik/traefik/pull/11684) by [rtribotte](https://github.com/rtribotte))
- Bump github.com/redis/go-redis/v9 to v9.7.3 ([#11695](https://github.com/traefik/traefik/pull/11695) by [kevinpollet](https://github.com/kevinpollet))
- Bump golang.org/x/net to v0.38.0 ([#11691](https://github.com/traefik/traefik/pull/11691) by [kevinpollet](https://github.com/kevinpollet))
- Bump golang.org/x/oauth2 to v0.28.0 ([#11689](https://github.com/traefik/traefik/pull/11689) by [rtribotte](https://github.com/rtribotte))

**Documentation:**
- **[middleware]** Add content-length best practice documentation ([#11697](https://github.com/traefik/traefik/pull/11697) by [sheddy-traefik](https://github.com/sheddy-traefik))
- Typo fix on the Explanation Section for User Guide HTTP Challenge. ([#11676](https://github.com/traefik/traefik/pull/11676) by [YapWC](https://github.com/YapWC))

## [v2.11.23](https://github.com/traefik/traefik/tree/v2.11.23) (2025-04-17)
[All Commits](https://github.com/traefik/traefik/compare/v2.11.22...v2.11.23)

Release canceled.

## [v3.4.0-rc1](https://github.com/traefik/traefik/tree/v3.4.0-rc1) (2025-03-31)
[All Commits](https://github.com/traefik/traefik/compare/v3.3.0-rc1...v3.4.0-rc1)

**Enhancements:**
- **[acme]** Add acme.profile and acme.emailAddresses options ([#11597](https://github.com/traefik/traefik/pull/11597) by [ldez](https://github.com/ldez))
- **[docker,ecs,docker/swarm,consulcatalog,nomad]** Allow configuring server URLs with label providers ([#11374](https://github.com/traefik/traefik/pull/11374) by [yelvert](https://github.com/yelvert))
- **[k8s/crd,k8s]** Improve CEL validation on Ingress CRD resources ([#11311](https://github.com/traefik/traefik/pull/11311) by [mloiseleur](https://github.com/mloiseleur))
- **[k8s/gatewayapi]** Set rule priority in Gateway API TLSRoute ([#11443](https://github.com/traefik/traefik/pull/11443) by [augustozanellato](https://github.com/augustozanellato))
- **[k8s/ingress]** Add ingress status for ClusterIP and NodePort Service Type ([#11100](https://github.com/traefik/traefik/pull/11100) by [mlec1](https://github.com/mlec1))
- **[middleware,authentication]** Add option to preserve request method in forwardAuth ([#11473](https://github.com/traefik/traefik/pull/11473) by [an09mous](https://github.com/an09mous))
- **[middleware]** Support rewriting status codes in error page middleware ([#11520](https://github.com/traefik/traefik/pull/11520) by [sevensolutions](https://github.com/sevensolutions))
- **[middleware]** Add Redis rate limiter ([#10211](https://github.com/traefik/traefik/pull/10211) by [longquan0104](https://github.com/longquan0104))
- **[service]** Add p2c load-balancing strategy for servers load-balancer ([#11547](https://github.com/traefik/traefik/pull/11547) by [rtribotte](https://github.com/rtribotte))
- **[sticky-session]** Support domain configuration for sticky cookies ([#11556](https://github.com/traefik/traefik/pull/11556) by [jleal52](https://github.com/jleal52))
- **[tls,k8s/crd,service]** Allow root CA to be added through config maps ([#11475](https://github.com/traefik/traefik/pull/11475) by [Nelwhix](https://github.com/Nelwhix))
- **[tls]** Add support to disable session ticket ([#11609](https://github.com/traefik/traefik/pull/11609) by [avdhoot](https://github.com/avdhoot))
- **[udp]** Add support for UDP routing in systemd socket activation ([#11022](https://github.com/traefik/traefik/pull/11022) by [tsiid](https://github.com/tsiid))
- **[webui]** Add auto webui theme option and default to it ([#11455](https://github.com/traefik/traefik/pull/11455) by [zizzfizzix](https://github.com/zizzfizzix))
- Replace experimental maps and slices with stdlib ([#11350](https://github.com/traefik/traefik/pull/11350) by [Juneezee](https://github.com/Juneezee))

**Documentation:**
- Deprecate defaultRuleSyntax and ruleSyntax options ([#11619](https://github.com/traefik/traefik/pull/11619) by [rtribotte](https://github.com/rtribotte))

**Misc:**
- Merge branch v3.3 into master ([#11653](https://github.com/traefik/traefik/pull/11653) by [kevinpollet](https://github.com/kevinpollet))
- Merge branch v3.3 into master ([#11595](https://github.com/traefik/traefik/pull/11595) by [kevinpollet](https://github.com/kevinpollet))
- Merge branch v3.3 into master ([#11541](https://github.com/traefik/traefik/pull/11541) by [kevinpollet](https://github.com/kevinpollet))
- Merge branch v3.3 into master ([#11504](https://github.com/traefik/traefik/pull/11504) by [kevinpollet](https://github.com/kevinpollet))
- Merge branch v3.3 into master ([#11420](https://github.com/traefik/traefik/pull/11420) by [kevinpollet](https://github.com/kevinpollet))
- Merge branch v3.3 into master ([#11394](https://github.com/traefik/traefik/pull/11394) by [mmatur](https://github.com/mmatur))

## [v3.3.5](https://github.com/traefik/traefik/tree/v3.3.5) (2025-03-31)
[All Commits](https://github.com/traefik/traefik/compare/v3.3.4...v3.3.5)

**Bug fixes:**
- **[k8s/gatewayapi]** Set scheme to https with BackendTLSPolicy ([#11586](https://github.com/traefik/traefik/pull/11586) by [rtribotte](https://github.com/rtribotte))
- **[middleware]** Revert compress middleware algorithms priority to v2 behavior ([#11641](https://github.com/traefik/traefik/pull/11641) by [rtribotte](https://github.com/rtribotte))
- **[middleware]** Do not abort request when response content-type is malformed ([#11628](https://github.com/traefik/traefik/pull/11628) by [kevinpollet](https://github.com/kevinpollet))
- **[middleware]** Compress data on flush when compression is not started ([#11583](https://github.com/traefik/traefik/pull/11583) by [kevinpollet](https://github.com/kevinpollet))

**Documentation:**
- **[middleware]** Add back forwarded headers section in FAQ ([#11606](https://github.com/traefik/traefik/pull/11606) by [kevinpollet](https://github.com/kevinpollet))
- New Routing Reference Documentation ([#11330](https://github.com/traefik/traefik/pull/11330) by [sheddy-traefik](https://github.com/sheddy-traefik))

**Misc:**
- Merge branch v2.11 into v3.3 ([#11644](https://github.com/traefik/traefik/pull/11644) by [kevinpollet](https://github.com/kevinpollet))
- Merge branch v2.11 into v3.3 ([#11594](https://github.com/traefik/traefik/pull/11594) by [rtribotte](https://github.com/rtribotte))

## [v2.11.22](https://github.com/traefik/traefik/tree/v2.11.22) (2025-03-31)
[All Commits](https://github.com/traefik/traefik/compare/v2.11.21...v2.11.22)

**Bug fixes:**
- **[ecs,logs]** Bump AWS SDK to v2 ([#11359](https://github.com/traefik/traefik/pull/11359) by [Juneezee](https://github.com/Juneezee))
- **[logs,tls]** Error level log for configuration-related TLS errors with backends ([#11611](https://github.com/traefik/traefik/pull/11611) by [rtribotte](https://github.com/rtribotte))
- **[rules]** Allow underscore character in HostSNI matcher ([#11557](https://github.com/traefik/traefik/pull/11557) by [rohitlohar45](https://github.com/rohitlohar45))
- **[server]** Bump github.com/vulcand/oxy/v2 to v2.0.3 ([#11649](https://github.com/traefik/traefik/pull/11649) by [adamvduke](https://github.com/adamvduke))
- **[server]** Bump golang.org/x/net to v0.37.0 ([#11632](https://github.com/traefik/traefik/pull/11632) by [kevinpollet](https://github.com/kevinpollet))
- **[webui]** Change boolean module properties default value to undefined ([#11639](https://github.com/traefik/traefik/pull/11639) by [rtribotte](https://github.com/rtribotte))
- Bump github.com/golang-jwt/jwt to v4.5.2 and v5.2.2 ([#11634](https://github.com/traefik/traefik/pull/11634) by [kevinpollet](https://github.com/kevinpollet))
- Bump github.com/redis/go-redis/v9 to v9.6.3 ([#11633](https://github.com/traefik/traefik/pull/11633) by [kevinpollet](https://github.com/kevinpollet))
- Bump golang.org/x/net to v0.36.0 ([#11608](https://github.com/traefik/traefik/pull/11608) by [kevinpollet](https://github.com/kevinpollet))
- Bump github.com/go-jose/go-jose/v4 to v4.0.5 ([#11571](https://github.com/traefik/traefik/pull/11571) by [kevinpollet](https://github.com/kevinpollet))

**Documentation:**
- **[accesslogs]** Remove documentation for OriginStatusLine and DownstreamStatusLine accessLogs fields ([#11599](https://github.com/traefik/traefik/pull/11599) by [rtribotte](https://github.com/rtribotte))
- **[middleware]** Clarifies that retry middleware uses TCP, not HTTP status codes ([#11603](https://github.com/traefik/traefik/pull/11603) by [geraldcroes](https://github.com/geraldcroes))
- **[redis]** Add tip for dynamic configuration updates of Redis ([#11577](https://github.com/traefik/traefik/pull/11577) by [Alanxtl](https://github.com/Alanxtl))
- Add Security Support ([#11610](https://github.com/traefik/traefik/pull/11610) by [nmengin](https://github.com/nmengin))

## [v3.3.4](https://github.com/traefik/traefik/tree/v3.3.4) (2025-02-25)
[All Commits](https://github.com/traefik/traefik/compare/v3.3.3...v3.3.4)

**Bug fixes:**
- **[fastproxy]** Bump github.com/valyala/fasthttp to v1.58.0 ([#11526](https://github.com/traefik/traefik/pull/11526) by [kevinpollet](https://github.com/kevinpollet))
- **[fastproxy]** Add WebSocket headers if they are present in the request ([#11522](https://github.com/traefik/traefik/pull/11522) by [kevinpollet](https://github.com/kevinpollet))
- **[fastproxy]** Chunked responses does not have a Content-Length header ([#11514](https://github.com/traefik/traefik/pull/11514) by [kevinpollet](https://github.com/kevinpollet))
- **[metrics,otel]** Change request duration metric unit from millisecond to second ([#11523](https://github.com/traefik/traefik/pull/11523) by [rtribotte](https://github.com/rtribotte))
- **[sticky-session]** Fix double hash in sticky cookie ([#11518](https://github.com/traefik/traefik/pull/11518) by [juliens](https://github.com/juliens))
- **[tracing]** Use ResourceAttributes instead of GlobalAttributes ([#11515](https://github.com/traefik/traefik/pull/11515) by [bruno-de-queiroz](https://github.com/bruno-de-queiroz))
- **[tracing]** Fix panic when calling Tracer ([#11479](https://github.com/traefik/traefik/pull/11479) by [basgys](https://github.com/basgys))

**Documentation:**
- **[acme]** Update ACME provider configuration options ([#11564](https://github.com/traefik/traefik/pull/11564) by [sheddy-traefik](https://github.com/sheddy-traefik))
- **[acme]** Fix incorrect grammar in ACME documentation ([#11553](https://github.com/traefik/traefik/pull/11553) by [Peter-Maguire](https://github.com/Peter-Maguire))
- **[metrics,tracing,accesslogs]** Add missing options in entrypoints page ([#11524](https://github.com/traefik/traefik/pull/11524) by [sheddy-traefik](https://github.com/sheddy-traefik))
- **[tracing]** Replace globalAttributes with resourceAttributes in tracing reference ([#11531](https://github.com/traefik/traefik/pull/11531) by [rtribotte](https://github.com/rtribotte))

**Misc:**
- Merge branch v2.11 into v3.3 ([#11567](https://github.com/traefik/traefik/pull/11567) by [kevinpollet](https://github.com/kevinpollet))

# [v2.11.21](https://github.com/traefik/traefik/tree/v2.11.21) (2025-02-24)
[All Commits](https://github.com/traefik/traefik/compare/v2.11.20...v2.11.21)

**Bug fixes:**
- **[acme]** Bump github.com/go-acme/lego/v4 to v4.22.2 ([#11537](https://github.com/traefik/traefik/pull/11537) by [ldez](https://github.com/ldez))
- **[cli]** Bump github.com/traefik/paerser to v0.2.2 ([#11530](https://github.com/traefik/traefik/pull/11530) by [kevinpollet](https://github.com/kevinpollet))
- **[middleware]** Enable the retry middleware in the proxy ([#11536](https://github.com/traefik/traefik/pull/11536) by [kevinpollet](https://github.com/kevinpollet))
- **[middleware]** Retry should send headers on Write ([#11534](https://github.com/traefik/traefik/pull/11534) by [kevinpollet](https://github.com/kevinpollet))

## [v3.3.3](https://github.com/traefik/traefik/tree/v3.3.3) (2025-01-31)
[All Commits](https://github.com/traefik/traefik/compare/v3.3.2...v3.3.3)

**Bug fixes:**
- **[api]** Do not create observability model by default ([#11476](https://github.com/traefik/traefik/pull/11476) by [rtribotte](https://github.com/rtribotte))
- **[fastproxy]** Fix content-length header assertion ([#11498](https://github.com/traefik/traefik/pull/11498) by [kevinpollet](https://github.com/kevinpollet))
- **[fastproxy]** Handle responses without content length header ([#11458](https://github.com/traefik/traefik/pull/11458) by [rtribotte](https://github.com/rtribotte))
- **[k8s/crd,k8s]** Add missing headerField in Middleware CRD ([#11499](https://github.com/traefik/traefik/pull/11499) by [jspdown](https://github.com/jspdown))
- **[tracing,accesslogs]** Bring back TraceID and SpanID fields in access logs ([#11450](https://github.com/traefik/traefik/pull/11450) by [rtribotte](https://github.com/rtribotte))

**Misc:**
- Merge branch v2.11 into v3.3 ([#11502](https://github.com/traefik/traefik/pull/11502) by [rtribotte](https://github.com/rtribotte))
- Merge branch v2.11 into v3.3 ([#11491](https://github.com/traefik/traefik/pull/11491) by [rtribotte](https://github.com/rtribotte))

## [v2.11.20](https://github.com/traefik/traefik/tree/v2.11.20) (2025-01-31)
[All Commits](https://github.com/traefik/traefik/compare/v2.11.19...v2.11.20)

**Bug fixes:**
- **[acme]** Graceful shutdown for ACME JSON write operation ([#11497](https://github.com/traefik/traefik/pull/11497) by [juliens](https://github.com/juliens))

**Documentation:**
- Change docker-compose to docker compose ([#11496](https://github.com/traefik/traefik/pull/11496) by [khai-pi](https://github.com/khai-pi))

## [v2.11.19](https://github.com/traefik/traefik/tree/v2.11.19) (2025-01-29)
[All Commits](https://github.com/traefik/traefik/compare/v2.11.18...v2.11.19)

**Bug fixes:**
- **[middleware]** Changing log message when client cert is not available to debug ([#11453](https://github.com/traefik/traefik/pull/11453) by [Nelwhix](https://github.com/Nelwhix))
- **[service]** Do not create a logger instance for each proxy ([#11487](https://github.com/traefik/traefik/pull/11487) by [kevinpollet](https://github.com/kevinpollet))
- **[webui]** Fix auto refresh not clearing on component unmount ([#11477](https://github.com/traefik/traefik/pull/11477) by [DoubleREW](https://github.com/DoubleREW))

**Documentation:**
- Remove awesome.traefik.io reference in documentation section ([#11435](https://github.com/traefik/traefik/pull/11435) by [kevinpollet](https://github.com/kevinpollet))

## [v3.3.2](https://github.com/traefik/traefik/tree/v3.3.2) (2025-01-14)
[All Commits](https://github.com/traefik/traefik/compare/v3.3.1...v3.3.2)

**Bug fixes:**
- **[fastproxy]** Do not read response body for HEAD requests ([#11442](https://github.com/traefik/traefik/pull/11442) by [kevinpollet](https://github.com/kevinpollet))
- **[metrics,tracing,accesslogs]** Fix observability configuration on EntryPoints ([#11446](https://github.com/traefik/traefik/pull/11446) by [rtribotte](https://github.com/rtribotte))
- **[webui]** Set content-type when serving webui index ([#11428](https://github.com/traefik/traefik/pull/11428) by [kevinpollet](https://github.com/kevinpollet))

**Documentation:**
- **[acme]** Fix deprecated dnsChallenge propagation logging and documentation ([#11433](https://github.com/traefik/traefik/pull/11433) by [thomscode](https://github.com/thomscode))
- **[acme]** Add missing trailing s to propagation.delayBeforeCheck option ([#11417](https://github.com/traefik/traefik/pull/11417) by [jspiers](https://github.com/jspiers))

**Misc:**
- Merge branch v2.11 into v3.3 ([#11419](https://github.com/traefik/traefik/pull/11419) by [kevinpollet](https://github.com/kevinpollet))

## [v3.3.1](https://github.com/traefik/traefik/tree/v3.3.1) (2025-01-07)
[All Commits](https://github.com/traefik/traefik/compare/v3.3.0...v3.3.1)

**Bug fixes:**
- **[websocket,server]** Disable http2 connect setting for websocket by default ([#11408](https://github.com/traefik/traefik/pull/11408) by [rtribotte](https://github.com/rtribotte))

## [v3.2.5](https://github.com/traefik/traefik/tree/v3.2.5) (2025-01-07)
[All Commits](https://github.com/traefik/traefik/compare/v3.2.4...v3.2.5)

**Bug fixes:**
- **[websocket,server]** Disable http2 connect setting for websocket by default ([#11408](https://github.com/traefik/traefik/pull/11408) by [rtribotte](https://github.com/rtribotte))

## [v2.11.18](https://github.com/traefik/traefik/tree/v2.11.18) (2025-01-07)
[All Commits](https://github.com/traefik/traefik/compare/v2.11.17...v2.11.18)

**Bug fixes:**
- **[websocket,server]** Disable http2 connect setting for websocket by default ([#11412](https://github.com/traefik/traefik/pull/11412) by [rtribotte](https://github.com/rtribotte))

## [v3.3.0](https://github.com/traefik/traefik/tree/v3.3.0) (2025-01-06)
[All Commits](https://github.com/traefik/traefik/compare/v3.2.0-rc1...v3.3.0)

**Enhancements:**
- **[acme]** Add options to control ACME propagation checks ([#11241](https://github.com/traefik/traefik/pull/11241) by [ldez](https://github.com/ldez))
- **[api]** Add support dump API endpoint ([#11328](https://github.com/traefik/traefik/pull/11328) by [mmatur](https://github.com/mmatur))
- **[http]** Set Host header in HTTP provider request ([#11237](https://github.com/traefik/traefik/pull/11237) by [nikonhub](https://github.com/nikonhub))
- **[k8s/crd,k8s]** Make the IngressRoute kind optional ([#11177](https://github.com/traefik/traefik/pull/11177) by [skirtan1](https://github.com/skirtan1))
- **[k8s/ingress,sticky-session,k8s/crd,k8s]** Support serving endpoints ([#11121](https://github.com/traefik/traefik/pull/11121) by [BZValoche](https://github.com/BZValoche))
- **[logs,accesslogs]** OpenTelemetry Logs and Access Logs ([#11319](https://github.com/traefik/traefik/pull/11319) by [rtribotte](https://github.com/rtribotte))
- **[logs,accesslogs]** Add experimental flag for OTLP logs integration ([#11335](https://github.com/traefik/traefik/pull/11335) by [kevinpollet](https://github.com/kevinpollet))
- **[metrics,tracing,accesslogs]** Manage observability at entrypoint and router level ([#11308](https://github.com/traefik/traefik/pull/11308) by [rtribotte](https://github.com/rtribotte))
- **[middleware,authentication]** Add an option to preserve the ForwardAuth Server Location header ([#11318](https://github.com/traefik/traefik/pull/11318) by [Nelwhix](https://github.com/Nelwhix))
- **[middleware,authentication]** Only calculate basic auth hashes once for concurrent requests ([#11143](https://github.com/traefik/traefik/pull/11143) by [michelheusschen](https://github.com/michelheusschen))
- **[middleware,authentication]** Send request body to authorization server for forward auth ([#11097](https://github.com/traefik/traefik/pull/11097) by [kyo-ke](https://github.com/kyo-ke))
- **[plugins]** Add AbortOnPluginFailure option to abort startup on plugin load failure ([#11228](https://github.com/traefik/traefik/pull/11228) by [bmagic](https://github.com/bmagic))
- **[sticky-session]** Configurable path for sticky cookies ([#11166](https://github.com/traefik/traefik/pull/11166) by [IIpragmaII](https://github.com/IIpragmaII))
- **[webui,api]** Configurable API &amp; Dashboard base path ([#11250](https://github.com/traefik/traefik/pull/11250) by [rtribotte](https://github.com/rtribotte))

**Bug fixes:**
- **[k8s/ingress,k8s/crd]** Fix fenced server status computation ([#11361](https://github.com/traefik/traefik/pull/11361) by [kevinpollet](https://github.com/kevinpollet))

**Documentation:**
- Prepare release v3.3.0-rc2 ([#11362](https://github.com/traefik/traefik/pull/11362) by [rtribotte](https://github.com/rtribotte))
- Prepare Release v3.3.0-rc1 ([#11349](https://github.com/traefik/traefik/pull/11349) by [rtribotte](https://github.com/rtribotte))

**Misc:**
- Merge branch v3.2 into v3.3 ([#11402](https://github.com/traefik/traefik/pull/11402) by [kevinpollet](https://github.com/kevinpollet))
- Merge branch v3.2 into v3.3 ([#11393](https://github.com/traefik/traefik/pull/11393) by [mmatur](https://github.com/mmatur))
- Merge branch v3.2 into v3.3 ([#11389](https://github.com/traefik/traefik/pull/11389) by [mmatur](https://github.com/mmatur))
- Merge branch v3.2 into v3.3 ([#11367](https://github.com/traefik/traefik/pull/11367) by [kevinpollet](https://github.com/kevinpollet))
- Merge branch v3.2 into master ([#11340](https://github.com/traefik/traefik/pull/11340) by [kevinpollet](https://github.com/kevinpollet))
- Merge branch v3.2 into master ([#11293](https://github.com/traefik/traefik/pull/11293) by [kevinpollet](https://github.com/kevinpollet))
- Merge branch v3.2 into master ([#11239](https://github.com/traefik/traefik/pull/11239) by [kevinpollet](https://github.com/kevinpollet))
- Merge branch v3.2 into master ([#11187](https://github.com/traefik/traefik/pull/11187) by [kevinpollet](https://github.com/kevinpollet))

## [v3.2.4](https://github.com/traefik/traefik/tree/v3.2.4) (2025-01-06)
[All Commits](https://github.com/traefik/traefik/compare/v3.2.3...v3.2.4)

**Bug fixes:**
- **[k8s/gatewayapi]** Support empty value for core Kubernetes API group ([#11386](https://github.com/traefik/traefik/pull/11386) by [rtribotte](https://github.com/rtribotte))
- **[tcp,k8s/crd]** Pass TLS bool from IngressRouteTCP to TCPService ([#11343](https://github.com/traefik/traefik/pull/11343) by [lipmem](https://github.com/lipmem))
- **[tls]** Upgrade github.com/spiffe/go-spiffe/v2 to v2.4.0 ([#11385](https://github.com/traefik/traefik/pull/11385) by [mmatur](https://github.com/mmatur))
- Remove duplicate github.com/coreos/go-systemd dependency ([#11354](https://github.com/traefik/traefik/pull/11354) by [Juneezee](https://github.com/Juneezee))

**Documentation:**
- **[k8s/gatewayapi]** Update Gateway API version support to v1.2.1 ([#11357](https://github.com/traefik/traefik/pull/11357) by [kevinpollet](https://github.com/kevinpollet))
- Add @jnoordsij to maintainers ([#11352](https://github.com/traefik/traefik/pull/11352) by [emilevauge](https://github.com/emilevauge))

**Misc:**
- Merge branch v2.11 into v3.2 ([#11400](https://github.com/traefik/traefik/pull/11400) by [kevinpollet](https://github.com/kevinpollet))
- Merge branch v2.11 into v3.2 ([#11392](https://github.com/traefik/traefik/pull/11392) by [rtribotte](https://github.com/rtribotte))
- Merge branch v2.11 into v3.2 ([#11388](https://github.com/traefik/traefik/pull/11388) by [mmatur](https://github.com/mmatur))
- Merge branch v2.11 into v3.2 ([#11366](https://github.com/traefik/traefik/pull/11366) by [kevinpollet](https://github.com/kevinpollet))

## [v2.11.17](https://github.com/traefik/traefik/tree/v2.11.17) (2025-01-06)
[All Commits](https://github.com/traefik/traefik/compare/v2.11.16...v2.11.17)

**Bug fixes:**
- **[acme]** Update go-acme/lego to v4.21.0 ([#11368](https://github.com/traefik/traefik/pull/11368) by [ldez](https://github.com/ldez))
- **[middleware]** Fix typo in basicauth note ([#11397](https://github.com/traefik/traefik/pull/11397) by [tieje](https://github.com/tieje))
- **[service]** Configure ErrorLog in httputil.ReverseProxy ([#11344](https://github.com/traefik/traefik/pull/11344) by [peacewalker122](https://github.com/peacewalker122))
- Bump golang.org/x/net to v0.33.0 ([#11365](https://github.com/traefik/traefik/pull/11365) by [kevinpollet](https://github.com/kevinpollet))

**Documentation:**
- **[acme]** Fix allowACMEByPass TOML example ([#11370](https://github.com/traefik/traefik/pull/11370) by [hannesbraun](https://github.com/hannesbraun))
- **[k8s/crd]** Update copyright for 2025 ([#11383](https://github.com/traefik/traefik/pull/11383) by [kevinpollet](https://github.com/kevinpollet))

## [v3.3.0-rc2](https://github.com/traefik/traefik/tree/v3.3.0-rc2) (2024-12-20)
[All Commits](https://github.com/traefik/traefik/compare/v3.3.0-rc1...v3.3.0-rc2)

**Bug fixes:**
- **[k8s/ingress,k8s/crd]** Fix fenced server status computation ([#11361](https://github.com/traefik/traefik/pull/11361) by [kevinpollet](https://github.com/kevinpollet))

## [v3.3.0-rc1](https://github.com/traefik/traefik/tree/v3.3.0-rc1) (2024-12-16)
[All Commits](https://github.com/traefik/traefik/compare/v3.2.0-rc1...v3.3.0-rc1)

**Enhancements:**
- **[acme]** Add options to control ACME propagation checks ([#11241](https://github.com/traefik/traefik/pull/11241) by [ldez](https://github.com/ldez))
- **[api]** Add support dump API endpoint ([#11328](https://github.com/traefik/traefik/pull/11328) by [mmatur](https://github.com/mmatur))
- **[http]** Set Host header in HTTP provider request ([#11237](https://github.com/traefik/traefik/pull/11237) by [nikonhub](https://github.com/nikonhub))
- **[k8s/crd,k8s]** Make the IngressRoute kind optional ([#11177](https://github.com/traefik/traefik/pull/11177) by [skirtan1](https://github.com/skirtan1))
- **[logs,accesslogs]** OpenTelemetry Logs and Access Logs ([#11319](https://github.com/traefik/traefik/pull/11319) by [rtribotte](https://github.com/rtribotte))
- **[logs,accesslogs]** Add experimental flag for OTLP logs integration ([#11335](https://github.com/traefik/traefik/pull/11335) by [kevinpollet](https://github.com/kevinpollet))
- **[metrics,tracing,accesslogs]** Manage observability at entrypoint and router level ([#11308](https://github.com/traefik/traefik/pull/11308) by [rtribotte](https://github.com/rtribotte))
- **[middleware,authentication]** Add an option to preserve the ForwardAuth Server Location header ([#11318](https://github.com/traefik/traefik/pull/11318) by [Nelwhix](https://github.com/Nelwhix))
- **[middleware,authentication]** Only calculate basic auth hashes once for concurrent requests ([#11143](https://github.com/traefik/traefik/pull/11143) by [michelheusschen](https://github.com/michelheusschen))
- **[middleware,authentication]** Send request body to authorization server for forward auth ([#11097](https://github.com/traefik/traefik/pull/11097) by [kyo-ke](https://github.com/kyo-ke))
- **[plugins]** Add AbortOnPluginFailure option to abort startup on plugin load failure ([#11228](https://github.com/traefik/traefik/pull/11228) by [bmagic](https://github.com/bmagic))
- **[sticky-session]** Configurable path for sticky cookies ([#11166](https://github.com/traefik/traefik/pull/11166) by [IIpragmaII](https://github.com/IIpragmaII))
- **[sticky-session,k8s/ingress,k8s/crd,k8s]** Support serving endpoints ([#11121](https://github.com/traefik/traefik/pull/11121) by [BZValoche](https://github.com/BZValoche))
- **[webui,api]** Configurable API &amp; Dashboard base path ([#11250](https://github.com/traefik/traefik/pull/11250) by [rtribotte](https://github.com/rtribotte))

**Misc:**
- Merge branch v3.2 into master ([#11340](https://github.com/traefik/traefik/pull/11340) by [kevinpollet](https://github.com/kevinpollet))
- Merge branch v3.2 into master ([#11293](https://github.com/traefik/traefik/pull/11293) by [kevinpollet](https://github.com/kevinpollet))
- Merge branch v3.2 into master ([#11239](https://github.com/traefik/traefik/pull/11239) by [kevinpollet](https://github.com/kevinpollet))
- Merge branch v3.2 into master ([#11187](https://github.com/traefik/traefik/pull/11187) by [kevinpollet](https://github.com/kevinpollet))

## [v3.2.3](https://github.com/traefik/traefik/tree/v3.2.3) (2024-12-16)
[All Commits](https://github.com/traefik/traefik/compare/v3.2.2...v3.2.3)

**Documentation:**
- Update reference install documentation with current chart default ([#11332](https://github.com/traefik/traefik/pull/11332) by [mloiseleur](https://github.com/mloiseleur))

**Misc:**
- Merge branch v2.11 into v3.2 ([#11346](https://github.com/traefik/traefik/pull/11346) by [kevinpollet](https://github.com/kevinpollet))
- Merge branch v2.11 into v3.2 ([#11337](https://github.com/traefik/traefik/pull/11337) by [kevinpollet](https://github.com/kevinpollet))

## [v2.11.16](https://github.com/traefik/traefik/tree/v2.11.16) (2024-12-16)
[All Commits](https://github.com/traefik/traefik/compare/v2.11.15...v2.11.16)

**Bug fixes:**
- **[server]** Update golang.org/x dependencies ([#11336](https://github.com/traefik/traefik/pull/11336) by [rtribotte](https://github.com/rtribotte))

## [v3.2.2](https://github.com/traefik/traefik/tree/v3.2.2) (2024-12-10)
[All Commits](https://github.com/traefik/traefik/compare/v3.2.1...v3.2.2)

**Bug fixes:**
- **[docker,docker/swarm]** Rename traefik.docker.* labels for Docker Swarm to traefik.swarm.* ([#11247](https://github.com/traefik/traefik/pull/11247) by [anchal00](https://github.com/anchal00))
- **[k8s/gatewayapi]** Update sigs.k8s.io/gateway-api to v1.2.1 ([#11314](https://github.com/traefik/traefik/pull/11314) by [kevinpollet](https://github.com/kevinpollet))
- **[plugins]** Fix WASM settings ([#11321](https://github.com/traefik/traefik/pull/11321) by [juliens](https://github.com/juliens))
- **[rules]** Fix models mechanism for default rule syntax ([#11300](https://github.com/traefik/traefik/pull/11300) by [rtribotte](https://github.com/rtribotte))

**Documentation:**
- Move callout to the entrypoint page footer ([#11305](https://github.com/traefik/traefik/pull/11305) by [kevinpollet](https://github.com/kevinpollet))
- Fix incorrect links in v3 migration sections ([#11297](https://github.com/traefik/traefik/pull/11297) by [kevinpollet](https://github.com/kevinpollet))
- New Install Reference Documentation ([#11213](https://github.com/traefik/traefik/pull/11213) by [sheddy-traefik](https://github.com/sheddy-traefik))

## [v2.11.15](https://github.com/traefik/traefik/tree/v2.11.15) (2024-12-06)
[All Commits](https://github.com/traefik/traefik/compare/v2.11.14...v2.11.15)

**Bug fixes:**
- **[acme]** Update go-acme/lego to v4.20.4 ([#11295](https://github.com/traefik/traefik/pull/11295) by [ldez](https://github.com/ldez))
- **[http3]** Update github.com/quic-go/quic-go to v0.48.2 ([#11320](https://github.com/traefik/traefik/pull/11320) by [kevinpollet](https://github.com/kevinpollet))

## [v3.2.1](https://github.com/traefik/traefik/tree/v3.2.1) (2024-11-20)
[All Commits](https://github.com/traefik/traefik/compare/v3.2.0...v3.2.1)

**Bug fixes:**
- **[k8s/ingress,k8s]** Fix HostRegexp config for rule syntax v2 ([#11288](https://github.com/traefik/traefik/pull/11288) by [kevinpollet](https://github.com/kevinpollet))
- **[logs]** Change level of peeking first byte error log to DEBUG for Postgres ([#11270](https://github.com/traefik/traefik/pull/11270) by [rtribotte](https://github.com/rtribotte))
- **[service,fastproxy]** Fix case problem for websocket upgrade ([#11246](https://github.com/traefik/traefik/pull/11246) by [juliens](https://github.com/juliens))

**Documentation:**
- **[acme,tls]** Document how to use Certificates of cert-manager ([#11053](https://github.com/traefik/traefik/pull/11053) by [mloiseleur](https://github.com/mloiseleur))
- **[docker/swarm]** Add tips about the use of docker in dynamic configuration for swarm provider ([#11207](https://github.com/traefik/traefik/pull/11207) by [webash](https://github.com/webash))
- **[middleware]** Add Compress middleware to migration guide ([#11229](https://github.com/traefik/traefik/pull/11229) by [logica0419](https://github.com/logica0419))

**Misc:**
- Merge branch v2.11 into v3.2 ([#11290](https://github.com/traefik/traefik/pull/11290) by [kevinpollet](https://github.com/kevinpollet))
- Merge branch v2.11 into v3.2 ([#11287](https://github.com/traefik/traefik/pull/11287) by [rtribotte](https://github.com/rtribotte))
- Merge branch v2.11 into v3.2 ([#11285](https://github.com/traefik/traefik/pull/11285) by [juliens](https://github.com/juliens))
- Merge branch v2.11 into v3.2 ([#11268](https://github.com/traefik/traefik/pull/11268) by [kevinpollet](https://github.com/kevinpollet))

## [v2.11.14](https://github.com/traefik/traefik/tree/v2.11.14) (2024-11-20)
[All Commits](https://github.com/traefik/traefik/compare/v2.11.13...v2.11.14)

**Bug fixes:**
- **[acme]** Update go-acme/lego to v4.20.2 ([#11263](https://github.com/traefik/traefik/pull/11263) by [ldez](https://github.com/ldez))
- **[logs,server]** Change level of peeking first byte error log to DEBUG ([#11254](https://github.com/traefik/traefik/pull/11254) by [rtribotte](https://github.com/rtribotte))
- **[middleware,server]** Drop untrusted X-Forwarded-Prefix header ([#11253](https://github.com/traefik/traefik/pull/11253) by [rtribotte](https://github.com/rtribotte))
- **[server]** Apply keepalive config to h2c entrypoints ([#11276](https://github.com/traefik/traefik/pull/11276) by [davefu113](https://github.com/davefu113))
- **[service]** Fix internal handlers ServiceBuilder composition ([#11281](https://github.com/traefik/traefik/pull/11281) by [juliens](https://github.com/juliens))

**Documentation:**
- **[accesslogs]** Update access-logs.md, add examples for accesslog.format ([#11275](https://github.com/traefik/traefik/pull/11275) by [bluepuma77](https://github.com/bluepuma77))
- Fix the defaultRule CLI examples ([#11282](https://github.com/traefik/traefik/pull/11282) by [kevinpollet](https://github.com/kevinpollet))
- Fix spelling, grammar, and rephrase sections for clarity in some documentation pages ([#11280](https://github.com/traefik/traefik/pull/11280) by [AntoineDeveloper](https://github.com/AntoineDeveloper))
- Fix absolute link in the migration guide ([#11269](https://github.com/traefik/traefik/pull/11269) by [kevinpollet](https://github.com/kevinpollet))
- Add X-Forwarded-Prefix to the migration guide ([#11267](https://github.com/traefik/traefik/pull/11267) by [kevinpollet](https://github.com/kevinpollet))
- Fix a small typo in entrypoints documentation ([#11261](https://github.com/traefik/traefik/pull/11261) by [quiode](https://github.com/quiode))
- Add a warning about environment variables casing for static configuration ([#11226](https://github.com/traefik/traefik/pull/11226) by [anchal00](https://github.com/anchal00))
- Improve documentation on dashboard ([#11220](https://github.com/traefik/traefik/pull/11220) by [mloiseleur](https://github.com/mloiseleur))

## [v3.2.0](https://github.com/traefik/traefik/tree/v3.2.0) (2024-10-28)
[All Commits](https://github.com/traefik/traefik/compare/v3.2.0-rc1...v3.2.0)

**Enhancements:**
- **[acme]** Remove same email requirement for certresolvers ([#11019](https://github.com/traefik/traefik/pull/11019) by [Emrio](https://github.com/Emrio))
- **[acme]** Add support for custom CA certificates by certificate resolver ([#10816](https://github.com/traefik/traefik/pull/10816) by [ldez](https://github.com/ldez))
- **[acme]** Add 30 day certificatesDuration step ([#10970](https://github.com/traefik/traefik/pull/10970) by [luker983](https://github.com/luker983))
- **[docker]** Support HTTP BasicAuth for docker and swarm endpoint ([#10776](https://github.com/traefik/traefik/pull/10776) by [985492783](https://github.com/985492783))
- **[k8s,k8s/gatewayapi]** Add supported features to the Gateway API GatewayClass status ([#11056](https://github.com/traefik/traefik/pull/11056) by [rtribotte](https://github.com/rtribotte))
- **[k8s,k8s/gatewayapi]** Update sigs.k8s.io/gateway-api to v1.2.0-rc1 ([#11124](https://github.com/traefik/traefik/pull/11124) by [rtribotte](https://github.com/rtribotte))
- **[k8s,k8s/gatewayapi]** Add support for backend protocol selection in HTTP and GRPC routes ([#11051](https://github.com/traefik/traefik/pull/11051) by [rtribotte](https://github.com/rtribotte))
- **[k8s,k8s/gatewayapi]** Improve Kubernetes GatewayAPI TCPRoute and TLSRoute support ([#11042](https://github.com/traefik/traefik/pull/11042) by [rtribotte](https://github.com/rtribotte))
- **[k8s,k8s/gatewayapi]** Support HTTPRoute destination port matching ([#11134](https://github.com/traefik/traefik/pull/11134) by [kevinpollet](https://github.com/kevinpollet))
- **[k8s,k8s/gatewayapi]** Bump sigs.k8s.io/gateway-api to v1.2.0-rc2 ([#11131](https://github.com/traefik/traefik/pull/11131) by [kevinpollet](https://github.com/kevinpollet))
- **[k8s,k8s/gatewayapi]** Add support for Gateway API BackendTLSPolicies ([#11009](https://github.com/traefik/traefik/pull/11009) by [rtribotte](https://github.com/rtribotte))
- **[k8s,k8s/gatewayapi]** Support NativeLB option in GatewayAPI provider ([#11147](https://github.com/traefik/traefik/pull/11147) by [rtribotte](https://github.com/rtribotte))
- **[k8s,k8s/gatewayapi]** Support ResponseHeaderModifier filter ([#10987](https://github.com/traefik/traefik/pull/10987) by [kevinpollet](https://github.com/kevinpollet))
- **[k8s,k8s/gatewayapi]** Support GRPC routes ([#10975](https://github.com/traefik/traefik/pull/10975) by [kevinpollet](https://github.com/kevinpollet))
- **[k8s,k8s/gatewayapi]** Bump sigs.k8s.io/gateway-api to v1.2.0 ([#11167](https://github.com/traefik/traefik/pull/11167) by [rtribotte](https://github.com/rtribotte))
- **[metrics,otel]** Allow setting service.name for OTLP metrics ([#10917](https://github.com/traefik/traefik/pull/10917) by [cmartell-at-ocp](https://github.com/cmartell-at-ocp))
- **[middleware,accesslogs]** Record trace id and EntryPoint span id into access log ([#10921](https://github.com/traefik/traefik/pull/10921) by [weijiany](https://github.com/weijiany))
- **[middleware,authentication]** Support LogUserHeader with forwardAuth middleware ([#10833](https://github.com/traefik/traefik/pull/10833) by [GaleHuang](https://github.com/GaleHuang))
- **[middleware]** Add encodings option to the compression middleware ([#10943](https://github.com/traefik/traefik/pull/10943) by [wollomatic](https://github.com/wollomatic))
- **[middleware]** Add support for ipv6 subnet in ipStrategy ([#9747](https://github.com/traefik/traefik/pull/9747) by [michal-kralik](https://github.com/michal-kralik))
- **[nomad]** Support for watching instead of polling Nomad ([#10997](https://github.com/traefik/traefik/pull/10997) by [deverton-godaddy](https://github.com/deverton-godaddy))
- **[server,performance]** Introduce a fast proxy mode to improve HTTP/1.1 performances with backends ([#11122](https://github.com/traefik/traefik/pull/11122) by [kevinpollet](https://github.com/kevinpollet))
- **[server]** Configurable max request header size ([#10995](https://github.com/traefik/traefik/pull/10995) by [lucasrod16](https://github.com/lucasrod16))
- **[service]** Add mirrorBody option to HTTP mirroring ([#11032](https://github.com/traefik/traefik/pull/11032) by [MatteoPaier](https://github.com/MatteoPaier))
- **[service]** Add an option to preserve server path ([#11193](https://github.com/traefik/traefik/pull/11193) by [mmatur](https://github.com/mmatur))

**Bug fixes:**
- **[k8s,k8s/gatewayapi]** Ensuring Gateway API reflected Traefik resource name unicity ([#11222](https://github.com/traefik/traefik/pull/11222) by [rtribotte](https://github.com/rtribotte))
- **[k8s,k8s/gatewayapi]** Preserve GRPCRoute filters order ([#11199](https://github.com/traefik/traefik/pull/11199) by [kevinpollet](https://github.com/kevinpollet))
- **[k8s,k8s/gatewayapi]** Support http and https appProtocol for Kubernetes Service ([#11176](https://github.com/traefik/traefik/pull/11176) by [WillDaSilva](https://github.com/WillDaSilva))
- **[k8s,k8s/gatewayapi]** Avoid updating Accepted status for routes matching no Gateways ([#11170](https://github.com/traefik/traefik/pull/11170) by [rtribotte](https://github.com/rtribotte))
- **[k8s,k8s/gatewayapi]** Do not update gateway status when not selected by a gateway class ([#11169](https://github.com/traefik/traefik/pull/11169) by [kevinpollet](https://github.com/kevinpollet))
- **[service]** Detect and drop broken conns in the fastproxy pool ([#11212](https://github.com/traefik/traefik/pull/11212) by [kevinpollet](https://github.com/kevinpollet))

**Documentation:**
- **[k8s,k8s/gatewayapi]** Document nativeLBByDefault annotation on Kubernetes Gateway provider ([#11209](https://github.com/traefik/traefik/pull/11209) by [mloiseleur](https://github.com/mloiseleur))
- **[k8s/crd,k8s]** Detail CRD update with v3.2 in the migration guide ([#11164](https://github.com/traefik/traefik/pull/11164) by [mloiseleur](https://github.com/mloiseleur))
- **[k8s/gatewayapi]** Add missing RBAC in the migration guide ([#11189](https://github.com/traefik/traefik/pull/11189) by [mloiseleur](https://github.com/mloiseleur))
- **[k8s]** Fix instructions for downloading CRDs of Gateway API v1.2 ([#11191](https://github.com/traefik/traefik/pull/11191) by [mloiseleur](https://github.com/mloiseleur))
- Prepare release v3.2.0-rc2 ([#11182](https://github.com/traefik/traefik/pull/11182) by [kevinpollet](https://github.com/kevinpollet))
- Prepare Release v3.2.0-rc1 ([#11154](https://github.com/traefik/traefik/pull/11154) by [rtribotte](https://github.com/rtribotte))

**Misc:**
- Merge branch v3.1 into v3.2 ([#11219](https://github.com/traefik/traefik/pull/11219) by [kevinpollet](https://github.com/kevinpollet))
- Merge branch v3.1 into v3.2 ([#11181](https://github.com/traefik/traefik/pull/11181) by [kevinpollet](https://github.com/kevinpollet))
- Merge branch v3.1 into master ([#11153](https://github.com/traefik/traefik/pull/11153) by [kevinpollet](https://github.com/kevinpollet))
- Merge branch v3.1 into master ([#11110](https://github.com/traefik/traefik/pull/11110) by [kevinpollet](https://github.com/kevinpollet))
- Merge branch v3.1 into master ([#11066](https://github.com/traefik/traefik/pull/11066) by [mmatur](https://github.com/mmatur))
- Merge branch v3.1 into master ([#11047](https://github.com/traefik/traefik/pull/11047) by [mmatur](https://github.com/mmatur))
- Merge branch v3.1 into master ([#10980](https://github.com/traefik/traefik/pull/10980) by [kevinpollet](https://github.com/kevinpollet))
- Merge branch v3.1 into master ([#10952](https://github.com/traefik/traefik/pull/10952) by [mmatur](https://github.com/mmatur))
- Merge branch v3.1 into master ([#10906](https://github.com/traefik/traefik/pull/10906) by [rtribotte](https://github.com/rtribotte))

## [v3.1.7](https://github.com/traefik/traefik/tree/v3.1.7) (2024-10-28)
[All Commits](https://github.com/traefik/traefik/compare/v3.1.6...v3.1.7)

**Bug fixes:**
- **[k8s,k8s/gatewayapi]** Preserve HTTPRoute filters order ([#11198](https://github.com/traefik/traefik/pull/11198) by [kevinpollet](https://github.com/kevinpollet))

**Documentation:**
- **[k8s,k8s/gatewayapi]** Fix broken links in Kubernetes Gateway provider page ([#11188](https://github.com/traefik/traefik/pull/11188) by [mloiseleur](https://github.com/mloiseleur))

**Misc:**
- Merge branch v2.11 into v3.1 ([#11232](https://github.com/traefik/traefik/pull/11232) by [kevinpollet](https://github.com/kevinpollet))
- Merge branch v2.11 into v3.1 ([#11218](https://github.com/traefik/traefik/pull/11218) by [kevinpollet](https://github.com/kevinpollet))

## [v2.11.13](https://github.com/traefik/traefik/tree/v2.11.13) (2024-10-28)
[All Commits](https://github.com/traefik/traefik/compare/v2.11.12...v2.11.13)

**Bug fixes:**
- **[middleware,service]** Panic on aborted requests to properly close the connection ([#11129](https://github.com/traefik/traefik/pull/11129) by [tonybart1337](https://github.com/tonybart1337))

**Documentation:**
- Update business callouts ([#11217](https://github.com/traefik/traefik/pull/11217) by [tomatokoolaid](https://github.com/tomatokoolaid))

## [v3.2.0-rc2](https://github.com/traefik/traefik/tree/v3.2.0-rc2) (2024-10-09)
[All Commits](https://github.com/traefik/traefik/compare/v3.2.0-rc1...v3.2.0-rc2)

**Enhancements:**
- **[k8s,k8s/gatewayapi]** Bump sigs.k8s.io/gateway-api to v1.2.0 ([#11167](https://github.com/traefik/traefik/pull/11167) by [rtribotte](https://github.com/rtribotte))

**Bug fixes:**
- **[k8s,k8s/gatewayapi]** Support http and https appProtocol for Kubernetes Service ([#11176](https://github.com/traefik/traefik/pull/11176) by [WillDaSilva](https://github.com/WillDaSilva))
- **[k8s,k8s/gatewayapi]** Avoid updating Accepted status for routes matching no Gateways ([#11170](https://github.com/traefik/traefik/pull/11170) by [rtribotte](https://github.com/rtribotte))
- **[k8s,k8s/gatewayapi]** Do not update gateway status when not selected by a gateway class ([#11169](https://github.com/traefik/traefik/pull/11169) by [kevinpollet](https://github.com/kevinpollet))

**Documentation:**
- Detail CRD update with v3.2 in the migration guide ([#11164](https://github.com/traefik/traefik/pull/11164) by [mloiseleur](https://github.com/mloiseleur))

**Misc:**
- Merge branch v3.1 into v3.2 ([#11181](https://github.com/traefik/traefik/pull/11181) by [kevinpollet](https://github.com/kevinpollet))

## [v3.1.6](https://github.com/traefik/traefik/tree/v3.1.6) (2024-10-09)
[All Commits](https://github.com/traefik/traefik/compare/v3.1.5...v3.1.6)

**Bug fixes:**
- **[middleware]** Reuse compression writers ([#11168](https://github.com/traefik/traefik/pull/11168) by [michelheusschen](https://github.com/michelheusschen))
- **[middleware]** Use correct default weight in Accept-Encoding ([#11084](https://github.com/traefik/traefik/pull/11084) by [michelheusschen](https://github.com/michelheusschen))
- **[plugins]** Close wasm middleware to prevent memory leak ([#11151](https://github.com/traefik/traefik/pull/11151) by [ttys3](https://github.com/ttys3))

**Misc:**
- Merge branch v2.11 into v3.1 ([#11179](https://github.com/traefik/traefik/pull/11179) by [kevinpollet](https://github.com/kevinpollet))
- Merge branch v2.11 into v3.1 ([#11174](https://github.com/traefik/traefik/pull/11174) by [mmatur](https://github.com/mmatur))

## [v2.11.12](https://github.com/traefik/traefik/tree/v2.11.12) (2024-10-09)
[All Commits](https://github.com/traefik/traefik/compare/v2.11.11...v2.11.12)

**Bug fixes:**
- **[middleware]** Bump github.com/klauspost/compress to dbd6c381492a ([#11162](https://github.com/traefik/traefik/pull/11162) by [kevinpollet](https://github.com/kevinpollet))
- **[webui]** Upgrade to node 22.9 and yarn lock to fix vulnerabilities ([#11173](https://github.com/traefik/traefik/pull/11173) by [kevinpollet](https://github.com/kevinpollet))
- **[webui]** Adopt a layout for the large amount of entrypoint port numbers ([#11157](https://github.com/traefik/traefik/pull/11157) by [framebassman](https://github.com/framebassman))

**Documentation:**
- **[accesslogs]** Clarify that only header fields may be redacted in access-logs ([#11139](https://github.com/traefik/traefik/pull/11139) by [mattbnz](https://github.com/mattbnz))
- Update business callout ([#11172](https://github.com/traefik/traefik/pull/11172) by [tomatokoolaid](https://github.com/tomatokoolaid))

## [v3.2.0-rc1](https://github.com/traefik/traefik/tree/v3.2.0-rc1) (2024-10-02)
[All Commits](https://github.com/traefik/traefik/compare/v3.1.0-rc1...v3.2.0-rc1)

**Enhancements:**
- **[acme]** Remove same email requirement for certresolvers ([#11019](https://github.com/traefik/traefik/pull/11019) by [Emrio](https://github.com/Emrio))
- **[acme]** Add support for custom CA certificates by certificate resolver ([#10816](https://github.com/traefik/traefik/pull/10816) by [ldez](https://github.com/ldez))
- **[acme]** Add 30 day certificatesDuration step ([#10970](https://github.com/traefik/traefik/pull/10970) by [luker983](https://github.com/luker983))
- **[docker]** Support HTTP BasicAuth for docker and swarm endpoint ([#10776](https://github.com/traefik/traefik/pull/10776) by [985492783](https://github.com/985492783))
- **[k8s,k8s/gatewayapi]** Add supported features to the Gateway API GatewayClass status ([#11056](https://github.com/traefik/traefik/pull/11056) by [rtribotte](https://github.com/rtribotte))
- **[k8s,k8s/gatewayapi]** Update sigs.k8s.io/gateway-api to v1.2.0-rc1 ([#11124](https://github.com/traefik/traefik/pull/11124) by [rtribotte](https://github.com/rtribotte))
- **[k8s,k8s/gatewayapi]** Add support for backend protocol selection in HTTP and GRPC routes ([#11051](https://github.com/traefik/traefik/pull/11051) by [rtribotte](https://github.com/rtribotte))
- **[k8s,k8s/gatewayapi]** Improve Kubernetes GatewayAPI TCPRoute and TLSRoute support ([#11042](https://github.com/traefik/traefik/pull/11042) by [rtribotte](https://github.com/rtribotte))
- **[k8s,k8s/gatewayapi]** Support HTTPRoute destination port matching ([#11134](https://github.com/traefik/traefik/pull/11134) by [kevinpollet](https://github.com/kevinpollet))
- **[k8s,k8s/gatewayapi]** Bump sigs.k8s.io/gateway-api to v1.2.0-rc2 ([#11131](https://github.com/traefik/traefik/pull/11131) by [kevinpollet](https://github.com/kevinpollet))
- **[k8s,k8s/gatewayapi]** Add support for Gateway API BackendTLSPolicies ([#11009](https://github.com/traefik/traefik/pull/11009) by [rtribotte](https://github.com/rtribotte))
- **[k8s,k8s/gatewayapi]** Support NativeLB option in GatewayAPI provider ([#11147](https://github.com/traefik/traefik/pull/11147) by [rtribotte](https://github.com/rtribotte))
- **[k8s,k8s/gatewayapi]** Support ResponseHeaderModifier filter ([#10987](https://github.com/traefik/traefik/pull/10987) by [kevinpollet](https://github.com/kevinpollet))
- **[k8s,k8s/gatewayapi]** Support GRPC routes ([#10975](https://github.com/traefik/traefik/pull/10975) by [kevinpollet](https://github.com/kevinpollet))
- **[metrics,otel]** Allow setting service.name for OTLP metrics ([#10917](https://github.com/traefik/traefik/pull/10917) by [cmartell-at-ocp](https://github.com/cmartell-at-ocp))
- **[middleware,accesslogs]** Record trace id and EntryPoint span id into access log ([#10921](https://github.com/traefik/traefik/pull/10921) by [weijiany](https://github.com/weijiany))
- **[middleware,authentication]** Support LogUserHeader with forwardAuth middleware ([#10833](https://github.com/traefik/traefik/pull/10833) by [GaleHuang](https://github.com/GaleHuang))
- **[middleware]** Add encodings option to the compression middleware ([#10943](https://github.com/traefik/traefik/pull/10943) by [wollomatic](https://github.com/wollomatic))
- **[middleware]** Add support for ipv6 subnet in ipStrategy ([#9747](https://github.com/traefik/traefik/pull/9747) by [michal-kralik](https://github.com/michal-kralik))
- **[nomad]** Support for watching instead of polling Nomad ([#10997](https://github.com/traefik/traefik/pull/10997) by [deverton-godaddy](https://github.com/deverton-godaddy))
- **[server,performance]** Introduce a fast proxy mode to improve HTTP/1.1 performances with backends ([#11122](https://github.com/traefik/traefik/pull/11122) by [kevinpollet](https://github.com/kevinpollet))
- **[server]** Configurable max request header size ([#10995](https://github.com/traefik/traefik/pull/10995) by [lucasrod16](https://github.com/lucasrod16))
- **[service]** Add mirrorBody option to HTTP mirroring ([#11032](https://github.com/traefik/traefik/pull/11032) by [MatteoPaier](https://github.com/MatteoPaier))

## [v3.1.5](https://github.com/traefik/traefik/tree/v3.1.5) (2024-10-02)
[All Commits](https://github.com/traefik/traefik/compare/v3.1.4...v3.1.5)

**Bug fixes:**
- **[k8s/ingress,k8s]** Disable IngressClass lookup when disableClusterScopeResources is enabled ([#11111](https://github.com/traefik/traefik/pull/11111) by [jnoordsij](https://github.com/jnoordsij))
- **[server]** Rework condition to not log on timeout ([#11132](https://github.com/traefik/traefik/pull/11132) by [rtribotte](https://github.com/rtribotte))

**Misc:**
- Merge branch v2.11 into v3.1 ([#11149](https://github.com/traefik/traefik/pull/11149) by [kevinpollet](https://github.com/kevinpollet))
- Merge branch v2.11 into v3.1 ([#11142](https://github.com/traefik/traefik/pull/11142) by [rtribotte](https://github.com/rtribotte))

## [v2.11.11](https://github.com/traefik/traefik/tree/v2.11.11) (2024-10-02)
[All Commits](https://github.com/traefik/traefik/compare/v2.11.10...v2.11.11)

**Bug fixes:**
- **[acme]** Ensure defaultGeneratedCert.main as Subject&#39;s CN ([#10581](https://github.com/traefik/traefik/pull/10581) by [Lamatte](https://github.com/Lamatte))
- **[middleware,authentication]** Clean connection headers for forward auth request only ([#11095](https://github.com/traefik/traefik/pull/11095) by [rtribotte](https://github.com/rtribotte))
- **[middleware]** Bump github.com/klauspost/compress to 8e14b1b5a913 ([#11141](https://github.com/traefik/traefik/pull/11141) by [kevinpollet](https://github.com/kevinpollet))
- **[server]** Rework condition to not log on timeout ([#11133](https://github.com/traefik/traefik/pull/11133) by [rtribotte](https://github.com/rtribotte))
- **[webui]** Remove unused boot files from webui ([#11109](https://github.com/traefik/traefik/pull/11109) by [michelheusschen](https://github.com/michelheusschen))

**Documentation:**
- **[accesslogs]** Specify default format value for access log ([#11130](https://github.com/traefik/traefik/pull/11130) by [darkweaver87](https://github.com/darkweaver87))
- **[api]** Update API documentation to mention pagination ([#11115](https://github.com/traefik/traefik/pull/11115) by [lyrandy](https://github.com/lyrandy))

## [v3.1.4](https://github.com/traefik/traefik/tree/v3.1.4) (2024-09-19)
[All Commits](https://github.com/traefik/traefik/compare/v3.1.3...v3.1.4)

**Bug fixes:**
- **[metrics]** Guess Datadog socket type when prefix is unix ([#11102](https://github.com/traefik/traefik/pull/11102) by [kevinpollet](https://github.com/kevinpollet))

**Documentation:**
- Mention v3 in readme ([#11082](https://github.com/traefik/traefik/pull/11082) by [kabaluyot](https://github.com/kabaluyot))

**Misc:**
- Merge branch v2.11 into v3.1 ([#11107](https://github.com/traefik/traefik/pull/11107) by [rtribotte](https://github.com/rtribotte))

## [v2.11.10](https://github.com/traefik/traefik/tree/v2.11.10) (2024-09-19)
[All Commits](https://github.com/traefik/traefik/compare/v2.11.9...v2.11.10)

**Bug fixes:**
- **[http3]** Bump github.com/quic-go/quic-go to v0.47.0 ([#11104](https://github.com/traefik/traefik/pull/11104) by [rtribotte](https://github.com/rtribotte))
- **[server]** Check if ACME certificate resolver is not nil ([#11103](https://github.com/traefik/traefik/pull/11103) by [kevinpollet](https://github.com/kevinpollet))

## [v3.1.3](https://github.com/traefik/traefik/tree/v3.1.3) (2024-09-16)
[All Commits](https://github.com/traefik/traefik/compare/v3.1.2...v3.1.3)

**Bug fixes:**
- **[k8s/ingress,rules,k8s]** Allow configuring rule syntax with Kubernetes Ingress annotation ([#10985](https://github.com/traefik/traefik/pull/10985) by [rtribotte](https://github.com/rtribotte))
- **[k8s/ingress]** Re-allow empty configuration for Kubernetes Ingress provider ([#11008](https://github.com/traefik/traefik/pull/11008) by [rtribotte](https://github.com/rtribotte))
- **[middleware,metrics]** Wrap capture for services used by pieces of middleware ([#11058](https://github.com/traefik/traefik/pull/11058) by [rtribotte](https://github.com/rtribotte))
- **[plugins]** Removes goexport dependency and adds _initialize ([#11088](https://github.com/traefik/traefik/pull/11088) by [juliens](https://github.com/juliens))

**Documentation:**
- **[k8s/crd,k8s]** Remove mentions about APIVersion traefik.io/v1 ([#11020](https://github.com/traefik/traefik/pull/11020) by [rtribotte](https://github.com/rtribotte))
- **[k8s]** Update quick-start-with-kubernetes.md to include required permissions ([#11010](https://github.com/traefik/traefik/pull/11010) by [eastmane](https://github.com/eastmane))
- **[metrics]** Mention missing metrics removal in the migration guide ([#10982](https://github.com/traefik/traefik/pull/10982) by [rtribotte](https://github.com/rtribotte))
- **[tracing]** Fix tracing documentation ([#11067](https://github.com/traefik/traefik/pull/11067) by [mmatur](https://github.com/mmatur))
- **[tracing]** OTLP doc + potential panic ([#11052](https://github.com/traefik/traefik/pull/11052) by [mmatur](https://github.com/mmatur))

**Misc:**
- Merge v2.11 into v3.1 ([#11092](https://github.com/traefik/traefik/pull/11092) by [kevinpollet](https://github.com/kevinpollet))
- Merge v2.11 into v3.1 ([#11065](https://github.com/traefik/traefik/pull/11065) by [mmatur](https://github.com/mmatur))
- Merge v2.11 into v3.1 ([#11044](https://github.com/traefik/traefik/pull/11044) by [rtribotte](https://github.com/rtribotte))

## [v2.11.9](https://github.com/traefik/traefik/tree/v2.11.9) (2024-09-16)
[All Commits](https://github.com/traefik/traefik/compare/v2.11.8...v2.11.9)

**Bug fixes:**
- **[acme]** Update go-acme/lego to v4.18.0 ([#11060](https://github.com/traefik/traefik/pull/11060) by [ldez](https://github.com/ldez))
- **[acme]** Allow handling ACME challenges with custom routers ([#10981](https://github.com/traefik/traefik/pull/10981) by [rtribotte](https://github.com/rtribotte))
- **[logs,middleware]** Make the keys of the accessLog.fields.names map case-insensitive ([#11040](https://github.com/traefik/traefik/pull/11040) by [SpecLad](https://github.com/SpecLad))
- **[logs,middleware]** Ensure proper logs for aborted streaming responses ([#10819](https://github.com/traefik/traefik/pull/10819) by [hood](https://github.com/hood))
- **[middleware,server]** Cleanup Connection headers before passing the middleware chain ([#11077](https://github.com/traefik/traefik/pull/11077) by [kevinpollet](https://github.com/kevinpollet))
- **[plugins]** Upgrade paerser to v0.2.1 ([#11048](https://github.com/traefik/traefik/pull/11048) by [mmatur](https://github.com/mmatur))
- **[server,tcp]** Prevent error logging when TCP WRR pool is empty ([#10989](https://github.com/traefik/traefik/pull/10989) by [kevinpollet](https://github.com/kevinpollet))
- **[webui]** Upgrade webui dependencies ([#11031](https://github.com/traefik/traefik/pull/11031) by [mloiseleur](https://github.com/mloiseleur))

**Documentation:**
- **[acme]** Fix typo in multiple DNS challenge provider warning ([#11001](https://github.com/traefik/traefik/pull/11001) by [tired-engineer](https://github.com/tired-engineer))
- **[k8s]** Update k8s quickstart permissions ([#11049](https://github.com/traefik/traefik/pull/11049) by [mmatur](https://github.com/mmatur))
- **[metrics]** Remove documentation for unimplemented service retries metric  ([#10983](https://github.com/traefik/traefik/pull/10983) by [rtribotte](https://github.com/rtribotte))
- **[middleware]** Unify tab titles ([#11072](https://github.com/traefik/traefik/pull/11072) by [jsoref](https://github.com/jsoref))
- Give valid examples for exposing dashboard with default Helm values ([#11015](https://github.com/traefik/traefik/pull/11015) by [holysoles](https://github.com/holysoles))

## [v3.1.2](https://github.com/traefik/traefik/tree/v3.1.2) (2024-08-06)
[All Commits](https://github.com/traefik/traefik/compare/v3.1.1...v3.1.2)

**Bug fixes:**
- **[k8s,k8s/gatewayapi]** Include status addresses when comparing Gateway statuses ([#10972](https://github.com/traefik/traefik/pull/10972) by [kevinpollet](https://github.com/kevinpollet))
- **[k8s/ingress,k8s/crd,k8s]** Allow to disable Kubernetes cluster scope resources discovery ([#10946](https://github.com/traefik/traefik/pull/10946) by [rtribotte](https://github.com/rtribotte))
- **[logs]** Change logs output from stderr to stdout ([#10973](https://github.com/traefik/traefik/pull/10973) by [rtribotte](https://github.com/rtribotte))
- Fix grafana dashboard to work with scrape interval greater than 15s ([#10954](https://github.com/traefik/traefik/pull/10954) by [swiffer](https://github.com/swiffer))

**Documentation:**
- **[accesslogs]** Add Access logs section to the migration guide ([#10947](https://github.com/traefik/traefik/pull/10947) by [lbenguigui](https://github.com/lbenguigui))
- **[http]** Fix missing codeblock ending in HTTP discover documentation ([#10967](https://github.com/traefik/traefik/pull/10967) by [djcode](https://github.com/djcode))
- **[http]** Fix yaml config example for HTTP provider headers ([#10966](https://github.com/traefik/traefik/pull/10966) by [djcode](https://github.com/djcode))
- **[k8s,k8s/gatewayapi]** Use Standard channel by default with Gateway API ([#10974](https://github.com/traefik/traefik/pull/10974) by [mloiseleur](https://github.com/mloiseleur))

**Misc:**
- Merge branch v2.11 into v3.1 ([#10978](https://github.com/traefik/traefik/pull/10978) by [rtribotte](https://github.com/rtribotte))
- Merge v2.11 into v3.1 ([#10956](https://github.com/traefik/traefik/pull/10956) by [mmatur](https://github.com/mmatur))

## [v2.11.8](https://github.com/traefik/traefik/tree/v2.11.8) (2024-08-06)
[All Commits](https://github.com/traefik/traefik/compare/v2.11.7...v2.11.8)

**Bug fixes:**
- **[docker]** Update to github.com/docker/docker v27.1.1 ([#10955](https://github.com/traefik/traefik/pull/10955) by [rtribotte](https://github.com/rtribotte))
- **[webui]** Upgrade webui dependencies ([#10961](https://github.com/traefik/traefik/pull/10961) by [mmatur](https://github.com/mmatur))

**Documentation:**
- Fix embedded youtube video ([#10958](https://github.com/traefik/traefik/pull/10958) by [mmatur](https://github.com/mmatur))
- Updated index.md to include video ([#10944](https://github.com/traefik/traefik/pull/10944) by [tomatokoolaid](https://github.com/tomatokoolaid))

## [v3.1.1](https://github.com/traefik/traefik/tree/v3.1.1) (2024-07-30)
[All Commits](https://github.com/traefik/traefik/compare/v3.1.0...v3.1.1)

**Bug fixes:**
- **[grpc]** Bump google.golang.org/grpc to v1.64.1 ([#10938](https://github.com/traefik/traefik/pull/10938) by [kevinpollet](https://github.com/kevinpollet))
- **[k8s/gatewayapi]** Do not update route status when nothing changed ([#10940](https://github.com/traefik/traefik/pull/10940) by [kevinpollet](https://github.com/kevinpollet))
- **[metrics]** Fix grafana dashboard to work with scrape interval greater than 15s ([#10936](https://github.com/traefik/traefik/pull/10936) by [davhdavh](https://github.com/davhdavh))
- **[metrics]** Update open connections gauge with connections count ([#10905](https://github.com/traefik/traefik/pull/10905) by [rtribotte](https://github.com/rtribotte))
- **[metrics]** Use ServiceName in traefik_service_server_up metric ([#10838](https://github.com/traefik/traefik/pull/10838) by [KrishnaSindhur](https://github.com/KrishnaSindhur))

**Documentation:**
- **[k8s]** Remove duplicated kubectl apply in Kubernetes Gateway documentation ([#10931](https://github.com/traefik/traefik/pull/10931) by [battery-staple](https://github.com/battery-staple))

**Misc:**
- Merge v2.11 into v3.1 ([#10925](https://github.com/traefik/traefik/pull/10925) by [mmatur](https://github.com/mmatur))

## [v2.11.7](https://github.com/traefik/traefik/tree/v2.11.7) (2024-07-30)
[All Commits](https://github.com/traefik/traefik/compare/v2.11.6...v2.11.7)

**Bug fixes:**
- **[logs]** Make the log about new version more accurate ([#10903](https://github.com/traefik/traefik/pull/10903) by [jmcbri](https://github.com/jmcbri))
- **[tls,k8s/crd,k8s]** Enforce default cipher suites list ([#10907](https://github.com/traefik/traefik/pull/10907) by [rtribotte](https://github.com/rtribotte))

**Documentation:**
- **[acme]** Modify certificatesDuration documentation ([#10920](https://github.com/traefik/traefik/pull/10920) by [peacewalker122](https://github.com/peacewalker122))
- **[api]** Improve explanation on API exposition ([#10926](https://github.com/traefik/traefik/pull/10926) by [mloiseleur](https://github.com/mloiseleur))
- **[docker,consul,rancher,ecs]** Improve doc on sensitive data stored into labels/tags ([#10873](https://github.com/traefik/traefik/pull/10873) by [emilevauge](https://github.com/emilevauge))
- **[docker,logs]** Improve error and documentation on the needed link between router and service ([#10262](https://github.com/traefik/traefik/pull/10262) by [mloiseleur](https://github.com/mloiseleur))
- **[docker]** Document Docker port selection on multiple exposed ports ([#10935](https://github.com/traefik/traefik/pull/10935) by [mbrodala](https://github.com/mbrodala))
- Update the supported versions table for v3.1 release ([#10933](https://github.com/traefik/traefik/pull/10933) by [jnoordsij](https://github.com/jnoordsij))
- Update PR approval process ([#10887](https://github.com/traefik/traefik/pull/10887) by [emilevauge](https://github.com/emilevauge))

## [v3.1.0](https://github.com/traefik/traefik/tree/v3.1.0) (2024-07-15)
[All Commits](https://github.com/traefik/traefik/compare/v3.1.0-rc1...v3.1.0)

**Enhancements:**
- **[k8s,k8s/gatewayapi]** Support invalid HTTPRoute status ([#10714](https://github.com/traefik/traefik/pull/10714) by [kevinpollet](https://github.com/kevinpollet))
- **[k8s,k8s/gatewayapi]** KubernetesGateway provider is no longer experimental ([#10840](https://github.com/traefik/traefik/pull/10840) by [rtribotte](https://github.com/rtribotte))
- **[k8s,k8s/gatewayapi]** Bump Gateway API to v1.1.0 ([#10835](https://github.com/traefik/traefik/pull/10835) by [kevinpollet](https://github.com/kevinpollet))
- **[k8s,k8s/gatewayapi]** Fix route attachments to gateways ([#10761](https://github.com/traefik/traefik/pull/10761) by [kevinpollet](https://github.com/kevinpollet))
- **[k8s,k8s/gatewayapi]** Support HTTPRoute method and query param matching ([#10815](https://github.com/traefik/traefik/pull/10815) by [kevinpollet](https://github.com/kevinpollet))
- **[k8s,k8s/gatewayapi]** Support HTTPURLRewrite filter ([#10571](https://github.com/traefik/traefik/pull/10571) by [SantoDE](https://github.com/SantoDE))
- **[k8s,k8s/gatewayapi]** Set Gateway HTTPRoute status ([#10667](https://github.com/traefik/traefik/pull/10667) by [kevinpollet](https://github.com/kevinpollet))
- **[k8s,k8s/gatewayapi]** Support ReferenceGrant for HTTPRoute backends ([#10771](https://github.com/traefik/traefik/pull/10771) by [rtribotte](https://github.com/rtribotte))
- **[k8s,k8s/gatewayapi]** Compute HTTPRoute priorities ([#10766](https://github.com/traefik/traefik/pull/10766) by [kevinpollet](https://github.com/kevinpollet))
- **[k8s,k8s/gatewayapi]** Support RegularExpression for path matching ([#10717](https://github.com/traefik/traefik/pull/10717) by [dmavrommatis](https://github.com/dmavrommatis))
- **[k8s/crd,k8s]** Support HealthCheck for ExternalName services ([#10467](https://github.com/traefik/traefik/pull/10467) by [marcmognol](https://github.com/marcmognol))
- **[k8s/ingress,k8s/crd,k8s,k8s/gatewayapi]** Migrate to EndpointSlices API  ([#10664](https://github.com/traefik/traefik/pull/10664) by [jnoordsij](https://github.com/jnoordsij))
- **[k8s/ingress,k8s/crd,k8s]** Change log level from Warning to Info when ExternalName services is enabled ([#10682](https://github.com/traefik/traefik/pull/10682) by [marcmognol](https://github.com/marcmognol))
- **[k8s/ingress,k8s/crd,k8s]** Allow to use internal Node IPs for NodePort services ([#10278](https://github.com/traefik/traefik/pull/10278) by [jorisvergeer](https://github.com/jorisvergeer))
- **[middleware,k8s,k8s/gatewayapi]** Improve HTTPRoute Redirect Filter with port and scheme ([#10784](https://github.com/traefik/traefik/pull/10784) by [rtribotte](https://github.com/rtribotte))
- **[middleware,k8s,k8s/gatewayapi]** Support HTTPRoute redirect port and scheme ([#10802](https://github.com/traefik/traefik/pull/10802) by [rtribotte](https://github.com/rtribotte))
- **[middleware]** Support Content-Security-Policy-Report-Only in the headers middleware ([#10709](https://github.com/traefik/traefik/pull/10709) by [SpecLad](https://github.com/SpecLad))
- **[middleware]** Add support for Zstandard to the compression middleware ([#10660](https://github.com/traefik/traefik/pull/10660) by [Belphemur](https://github.com/Belphemur))
- **[plugins]** Enhance wasm plugins ([#10829](https://github.com/traefik/traefik/pull/10829) by [juliens](https://github.com/juliens))
- **[plugins]** Add logs for plugins load ([#10848](https://github.com/traefik/traefik/pull/10848) by [mmatur](https://github.com/mmatur))
- **[server]** Support systemd socket-activation ([#10399](https://github.com/traefik/traefik/pull/10399) by [juliens](https://github.com/juliens))

**Bug fixes:**
- **[k8s,k8s/gatewayapi]** Retry on Gateway API resource status update ([#10881](https://github.com/traefik/traefik/pull/10881) by [rtribotte](https://github.com/rtribotte))
- **[k8s,k8s/gatewayapi]** Do not disable Gateway API provider if not enabled in experimental ([#10862](https://github.com/traefik/traefik/pull/10862) by [kevinpollet](https://github.com/kevinpollet))
- **[otel]** Bump opentelemetry-go to v1.28 ([#10876](https://github.com/traefik/traefik/pull/10876) by [arukiidou](https://github.com/arukiidou))
- **[plugins]** Fix build only linux and darwin support wazergo ([#10857](https://github.com/traefik/traefik/pull/10857) by [juliens](https://github.com/juliens))
- **[healthcheck,k8s/crd,k8s]** Fix Healthcheck default value for ExternalName services ([#10778](https://github.com/traefik/traefik/pull/10778) by [kevinpollet](https://github.com/kevinpollet))
- **[middleware,metrics,tracing]** Upgrade to OpenTelemetry Semantic Conventions v1.26.0 ([#10850](https://github.com/traefik/traefik/pull/10850) by [mmatur](https://github.com/mmatur))

**Documentation:**
- **[k8s,k8s/gatewayapi]** Fix the Kubernetes Gateway API documentation ([#10844](https://github.com/traefik/traefik/pull/10844) by [nmengin](https://github.com/nmengin))
- **[k8s,k8s/gatewayapi]** Rework Kubernetes Gateway API documentation ([#10897](https://github.com/traefik/traefik/pull/10897) by [kevinpollet](https://github.com/kevinpollet))
- Prepare release v3.1.0-rc3 ([#10872](https://github.com/traefik/traefik/pull/10872) by [rtribotte](https://github.com/rtribotte))
- Prepare release v3.1.0-rc2 ([#10860](https://github.com/traefik/traefik/pull/10860) by [kevinpollet](https://github.com/kevinpollet))
- Prepare release v3.1.0-rc1 ([#10856](https://github.com/traefik/traefik/pull/10856) by [rtribotte](https://github.com/rtribotte))

**Misc:**
- Merge current v3.0 into v3.1 ([#10902](https://github.com/traefik/traefik/pull/10902) by [rtribotte](https://github.com/rtribotte))
- Merge current v3.0 into v3.1 ([#10871](https://github.com/traefik/traefik/pull/10871) by [rtribotte](https://github.com/rtribotte))
- Merge current v3.0 into master ([#10853](https://github.com/traefik/traefik/pull/10853) by [mmatur](https://github.com/mmatur))
- Merge current v3.0 into master ([#10811](https://github.com/traefik/traefik/pull/10811) by [mmatur](https://github.com/mmatur))
- Merge current v3.0 into master ([#10789](https://github.com/traefik/traefik/pull/10789) by [ldez](https://github.com/ldez))
- Merge current v3.0 into master ([#10750](https://github.com/traefik/traefik/pull/10750) by [kevinpollet](https://github.com/kevinpollet))
- Merge current v3.0 into master ([#10655](https://github.com/traefik/traefik/pull/10655) by [ldez](https://github.com/ldez))
- Merge current v3.0 into master  ([#10567](https://github.com/traefik/traefik/pull/10567) by [ldez](https://github.com/ldez))
- Merge current v3.0 into master ([#10418](https://github.com/traefik/traefik/pull/10418) by [mmatur](https://github.com/mmatur))
- Merge current v3.0 into master ([#10040](https://github.com/traefik/traefik/pull/10040) by [mmatur](https://github.com/mmatur))
- Merge current v3.0 into master ([#9933](https://github.com/traefik/traefik/pull/9933) by [ldez](https://github.com/ldez))
- Merge current v3.0 into master ([#9897](https://github.com/traefik/traefik/pull/9897) by [ldez](https://github.com/ldez))
- Merge current v3.0 into master ([#9871](https://github.com/traefik/traefik/pull/9871) by [ldez](https://github.com/ldez))
- Merge current v3.0 into master ([#9807](https://github.com/traefik/traefik/pull/9807) by [ldez](https://github.com/ldez))

## [v3.1.0-rc3](https://github.com/traefik/traefik/tree/v3.1.0-rc3) (2024-07-02)
[All Commits](https://github.com/traefik/traefik/compare/v3.1.0-rc2...v3.1.0-rc3)

**Bug fixes:**
- **[k8s,k8s/gatewayapi]** Do not disable Gateway API provider if not enabled in experimental ([#10862](https://github.com/traefik/traefik/pull/10862) by [kevinpollet](https://github.com/kevinpollet))

**Misc:**
- Merge current v3.0 into v3.1 ([#10871](https://github.com/traefik/traefik/pull/10871) by [rtribotte](https://github.com/rtribotte))

## [v3.0.4](https://github.com/traefik/traefik/tree/v3.0.4) (2024-07-02)
[All Commits](https://github.com/traefik/traefik/compare/v3.0.3...v3.0.4)

**Documentation:**
- **[k8s]** Fix some documentation links ([#10841](https://github.com/traefik/traefik/pull/10841) by [rtribotte](https://github.com/rtribotte))
- Update maintainers ([#10827](https://github.com/traefik/traefik/pull/10827) by [emilevauge](https://github.com/emilevauge))

**Misc:**
- Merge current v2.11 into v3.0 ([#10869](https://github.com/traefik/traefik/pull/10869) by [kevinpollet](https://github.com/kevinpollet))
- Merge current v2.11 into v3.0 ([#10851](https://github.com/traefik/traefik/pull/10851) by [mmatur](https://github.com/mmatur))
- Merge current v2.11 into v3.0 ([#10831](https://github.com/traefik/traefik/pull/10831) by [mmatur](https://github.com/mmatur))

## [v2.11.6](https://github.com/traefik/traefik/tree/v2.11.6) (2024-07-02)
[All Commits](https://github.com/traefik/traefik/compare/v2.11.5...v2.11.6)

**Bug fixes:**
- **[ecs]** Fix ECS config for OIDC + IRSA ([#10814](https://github.com/traefik/traefik/pull/10814) by [mmatur](https://github.com/mmatur))
- **[http3]** Disable QUIC 0-RTT ([#10867](https://github.com/traefik/traefik/pull/10867) by [mmatur](https://github.com/mmatur))
- **[middleware,server]** Remove interface names from IPv6 ([#10813](https://github.com/traefik/traefik/pull/10813) by [JeroenED](https://github.com/JeroenED))

**Documentation:**
- **[docker,acme]** Fix a typo in the ACME docker-compose docs ([#10866](https://github.com/traefik/traefik/pull/10866) by [ciacon](https://github.com/ciacon))
- Update Advanced Capabilities Callout ([#10846](https://github.com/traefik/traefik/pull/10846) by [tomatokoolaid](https://github.com/tomatokoolaid))
- Update maintainers ([#10834](https://github.com/traefik/traefik/pull/10834) by [emilevauge](https://github.com/emilevauge))
- Fix readme badge for Semaphore CI ([#10830](https://github.com/traefik/traefik/pull/10830) by [mmatur](https://github.com/mmatur))
- Fix typo in keepAliveMaxTime docs ([#10825](https://github.com/traefik/traefik/pull/10825) by [shochdoerfer](https://github.com/shochdoerfer))

## [v3.1.0-rc2](https://github.com/traefik/traefik/tree/v3.1.0-rc2) (2024-06-28)
[All Commits](https://github.com/traefik/traefik/compare/v3.0.0-beta3...v3.1.0-rc2)

**Enhancements:**
- **[k8s,k8s/gatewayapi]** Support invalid HTTPRoute status ([#10714](https://github.com/traefik/traefik/pull/10714) by [kevinpollet](https://github.com/kevinpollet))
- **[k8s,k8s/gatewayapi]** KubernetesGateway provider is no longer experimental ([#10840](https://github.com/traefik/traefik/pull/10840) by [rtribotte](https://github.com/rtribotte))
- **[k8s,k8s/gatewayapi]** Bump Gateway API to v1.1.0 ([#10835](https://github.com/traefik/traefik/pull/10835) by [kevinpollet](https://github.com/kevinpollet))
- **[k8s,k8s/gatewayapi]** Fix route attachments to gateways ([#10761](https://github.com/traefik/traefik/pull/10761) by [kevinpollet](https://github.com/kevinpollet))
- **[k8s,k8s/gatewayapi]** Support HTTPRoute method and query param matching ([#10815](https://github.com/traefik/traefik/pull/10815) by [kevinpollet](https://github.com/kevinpollet))
- **[k8s,k8s/gatewayapi]** Support HTTPURLRewrite filter ([#10571](https://github.com/traefik/traefik/pull/10571) by [SantoDE](https://github.com/SantoDE))
- **[k8s,k8s/gatewayapi]** Set Gateway HTTPRoute status ([#10667](https://github.com/traefik/traefik/pull/10667) by [kevinpollet](https://github.com/kevinpollet))
- **[k8s,k8s/gatewayapi]** Support ReferenceGrant for HTTPRoute backends ([#10771](https://github.com/traefik/traefik/pull/10771) by [rtribotte](https://github.com/rtribotte))
- **[k8s,k8s/gatewayapi]** Compute HTTPRoute priorities ([#10766](https://github.com/traefik/traefik/pull/10766) by [kevinpollet](https://github.com/kevinpollet))
- **[k8s,k8s/gatewayapi]** Support RegularExpression for path matching ([#10717](https://github.com/traefik/traefik/pull/10717) by [dmavrommatis](https://github.com/dmavrommatis))
- **[k8s/crd,k8s]** Support HealthCheck for ExternalName services ([#10467](https://github.com/traefik/traefik/pull/10467) by [marcmognol](https://github.com/marcmognol))
- **[k8s/ingress,k8s/crd,k8s,k8s/gatewayapi]** Migrate to EndpointSlices API  ([#10664](https://github.com/traefik/traefik/pull/10664) by [jnoordsij](https://github.com/jnoordsij))
- **[k8s/ingress,k8s/crd,k8s]** Change log level from Warning to Info when ExternalName services is enabled ([#10682](https://github.com/traefik/traefik/pull/10682) by [marcmognol](https://github.com/marcmognol))
- **[k8s/ingress,k8s/crd,k8s]** Allow to use internal Node IPs for NodePort services ([#10278](https://github.com/traefik/traefik/pull/10278) by [jorisvergeer](https://github.com/jorisvergeer))
- **[middleware,k8s,k8s/gatewayapi]** Improve HTTPRoute Redirect Filter with port and scheme ([#10784](https://github.com/traefik/traefik/pull/10784) by [rtribotte](https://github.com/rtribotte))
- **[middleware,k8s,k8s/gatewayapi]** Support HTTPRoute redirect port and scheme ([#10802](https://github.com/traefik/traefik/pull/10802) by [rtribotte](https://github.com/rtribotte))
- **[middleware]** Support Content-Security-Policy-Report-Only in the headers middleware ([#10709](https://github.com/traefik/traefik/pull/10709) by [SpecLad](https://github.com/SpecLad))
- **[middleware]** Add support for Zstandard to the compression middleware ([#10660](https://github.com/traefik/traefik/pull/10660) by [Belphemur](https://github.com/Belphemur))
- **[plugins]** Enhance wasm plugins ([#10829](https://github.com/traefik/traefik/pull/10829) by [juliens](https://github.com/juliens))
- **[plugins]** Add logs for plugins load ([#10848](https://github.com/traefik/traefik/pull/10848) by [mmatur](https://github.com/mmatur))
- **[server]** Support systemd socket-activation ([#10399](https://github.com/traefik/traefik/pull/10399) by [juliens](https://github.com/juliens))

**Bug fixes:**
- **[healthcheck,k8s/crd,k8s]** Fix Healthcheck default value for ExternalName services ([#10778](https://github.com/traefik/traefik/pull/10778) by [kevinpollet](https://github.com/kevinpollet))
- **[middleware,metrics,tracing]** Upgrade to OpenTelemetry Semantic Conventions v1.26.0 ([#10850](https://github.com/traefik/traefik/pull/10850) by [mmatur](https://github.com/mmatur))
- **[plugins]** Fix build only linux and darwin support wazergo ([#10857](https://github.com/traefik/traefik/pull/10857) by [juliens](https://github.com/juliens))

**Documentation:**
- **[k8s,k8s/gatewayapi]** Fix the Kubernetes GatewayAPI documentation ([#10844](https://github.com/traefik/traefik/pull/10844) by [nmengin](https://github.com/nmengin))

**Misc:**
- Merge current v3.0 into master ([#10853](https://github.com/traefik/traefik/pull/10853) by [mmatur](https://github.com/mmatur))
- Merge current v3.0 into master ([#10811](https://github.com/traefik/traefik/pull/10811) by [mmatur](https://github.com/mmatur))
- Merge current v3.0 into master ([#10789](https://github.com/traefik/traefik/pull/10789) by [ldez](https://github.com/ldez))
- Merge current v3.0 into master ([#10750](https://github.com/traefik/traefik/pull/10750) by [kevinpollet](https://github.com/kevinpollet))
- Merge current v3.0 into master ([#10655](https://github.com/traefik/traefik/pull/10655) by [ldez](https://github.com/ldez))
- Merge current v3.0 into master  ([#10567](https://github.com/traefik/traefik/pull/10567) by [ldez](https://github.com/ldez))
- Merge current v3.0 into master ([#10418](https://github.com/traefik/traefik/pull/10418) by [mmatur](https://github.com/mmatur))
- Merge current v3.0 into master ([#10040](https://github.com/traefik/traefik/pull/10040) by [mmatur](https://github.com/mmatur))

## [v3.1.0-rc1](https://github.com/traefik/traefik/tree/v3.1.0-rc1) (2024-06-27)

Release canceled.

## [v3.0.3](https://github.com/traefik/traefik/tree/v3.0.3) (2024-06-18)
[All Commits](https://github.com/traefik/traefik/compare/v3.0.2...v3.0.3)

**Misc:**
- Merge v2.11 into v3.0 ([#10823](https://github.com/traefik/traefik/pull/10823) by [kevinpollet](https://github.com/kevinpollet))
- Merge v2.11 into v3.0 ([#10810](https://github.com/traefik/traefik/pull/10810) by [mmatur](https://github.com/mmatur))

## [v2.11.5](https://github.com/traefik/traefik/tree/v2.11.5) (2024-06-18)
[All Commits](https://github.com/traefik/traefik/compare/v2.11.4...v2.11.5)

**Bug fixes:**
- **[acme]** Update go-acme/lego to v4.17.4 ([#10803](https://github.com/traefik/traefik/pull/10803) by [ldez](https://github.com/ldez))

**Documentation:**
- Update the supported versions table ([#10798](https://github.com/traefik/traefik/pull/10798) by [nmengin](https://github.com/nmengin))

## [v3.0.2](https://github.com/traefik/traefik/tree/v3.0.2) (2024-06-10)
[All Commits](https://github.com/traefik/traefik/compare/v3.0.1...v3.0.2)

**Bug fixes:**
- **[logs]** Bump OTel dependencies ([#10763](https://github.com/traefik/traefik/pull/10763) by [DrFaust92](https://github.com/DrFaust92))
- **[logs]** Append to log file if it exists ([#10756](https://github.com/traefik/traefik/pull/10756) by [lbenguigui](https://github.com/lbenguigui))
- **[metrics]** Fix service name label_replace in Grafana ([#10758](https://github.com/traefik/traefik/pull/10758) by [xdavidwu](https://github.com/xdavidwu))
- **[middleware]** Forward the correct status code when compression is disabled within the Brotli handler ([#10780](https://github.com/traefik/traefik/pull/10780) by [rtribotte](https://github.com/rtribotte))
- **[middleware]** Support Accept-Encoding header weights with Compress middleware ([#10777](https://github.com/traefik/traefik/pull/10777) by [ldez](https://github.com/ldez))

**Documentation:**
- Update v2 &gt; v3 migration guide ([#10728](https://github.com/traefik/traefik/pull/10728) by [0anas01](https://github.com/0anas01))

**Misc:**
- Merge current v2.11 into v3.0 ([#10796](https://github.com/traefik/traefik/pull/10796) by [kevinpollet](https://github.com/kevinpollet))
- Merge current v2.11 into v3.0 ([#10781](https://github.com/traefik/traefik/pull/10781) by [ldez](https://github.com/ldez))

## [v2.11.4](https://github.com/traefik/traefik/tree/v2.11.4) (2024-06-10)
[All Commits](https://github.com/traefik/traefik/compare/v2.11.3...v2.11.4)

**Bug fixes:**
- **[acme]** Update go-acme/lego to v4.17.3 ([#10768](https://github.com/traefik/traefik/pull/10768) by [ldez](https://github.com/ldez))

**Documentation:**
- **[acme]** Fix .com and .org domain examples  ([#10635](https://github.com/traefik/traefik/pull/10635) by [rptaylor](https://github.com/rptaylor))
- **[middleware]** Add a note about the Ratelimit middleware&#39;s behavior when the sourceCriterion header is missing ([#10752](https://github.com/traefik/traefik/pull/10752) by [dgutzmann](https://github.com/dgutzmann))
- Add user guides link to getting started ([#10785](https://github.com/traefik/traefik/pull/10785) by [norlinhenrik](https://github.com/norlinhenrik))
- Remove helm default repo warning as repo has been long deprecated ([#10772](https://github.com/traefik/traefik/pull/10772) by [corneliusroemer](https://github.com/corneliusroemer))

## [v3.0.1](https://github.com/traefik/traefik/tree/v3.0.1) (2024-05-22)
[All Commits](https://github.com/traefik/traefik/compare/v3.0.0...v3.0.1)

**Bug fixes:**
- **[k8s/ingress]** Fix rule syntax version for all internal routers ([#10689](https://github.com/traefik/traefik/pull/10689) by [HalloTschuess](https://github.com/HalloTschuess))
- **[metrics,tracing]** Allow empty configuration for OpenTelemetry metrics and tracing ([#10729](https://github.com/traefik/traefik/pull/10729) by [rtribotte](https://github.com/rtribotte))
- **[provider,tls]** Bump tscert dependency to 28a91b69a046 ([#10668](https://github.com/traefik/traefik/pull/10668) by [kevinpollet](https://github.com/kevinpollet))
- **[rules,tcp]** Fix the rule syntax mechanism for TCP ([#10680](https://github.com/traefik/traefik/pull/10680) by [lbenguigui](https://github.com/lbenguigui))
- **[tls,server]** Remove deadlines when handling PostgreSQL connections ([#10675](https://github.com/traefik/traefik/pull/10675) by [rtribotte](https://github.com/rtribotte))
- **[webui]** Add support for IP White list ([#10740](https://github.com/traefik/traefik/pull/10740) by [davidbaptista](https://github.com/davidbaptista))

**Documentation:**
- **[http3]** Add link to the new http3 config in migration ([#10673](https://github.com/traefik/traefik/pull/10673) by [yyewolf](https://github.com/yyewolf))
- **[logs]** Fix log.compress value ([#10716](https://github.com/traefik/traefik/pull/10716) by [mmatur](https://github.com/mmatur))
- **[metrics]** Fix OTel documentation ([#10723](https://github.com/traefik/traefik/pull/10723) by [nmengin](https://github.com/nmengin))
- **[middleware]** Fix doc consistency forwardauth ([#10724](https://github.com/traefik/traefik/pull/10724) by [mmatur](https://github.com/mmatur))
- **[middleware]** Remove providers not supported in documentation ([#10725](https://github.com/traefik/traefik/pull/10725) by [mmatur](https://github.com/mmatur))
- **[rules]** Fix typo in PathRegexp explanation ([#10719](https://github.com/traefik/traefik/pull/10719) by [BreadInvasion](https://github.com/BreadInvasion))
- **[rules]** Fix router documentation example ([#10704](https://github.com/traefik/traefik/pull/10704) by [ldez](https://github.com/ldez))

## [v2.11.3](https://github.com/traefik/traefik/tree/v2.11.3) (2024-05-17)
[All Commits](https://github.com/traefik/traefik/compare/v2.11.2...v2.11.3)

**Bug fixes:**
- **[server]** Remove deadlines for non-TLS connections ([#10615](https://github.com/traefik/traefik/pull/10615) by [rtribotte](https://github.com/rtribotte))
- **[webui]** Display of Content Security Policy values getting out of screen ([#10710](https://github.com/traefik/traefik/pull/10710) by [brandonfl](https://github.com/brandonfl))
- **[webui]** Fix provider icon size ([#10621](https://github.com/traefik/traefik/pull/10621) by [framebassman](https://github.com/framebassman))

**Documentation:**
- **[k8s/crd]** Fix migration/v2.md ([#10658](https://github.com/traefik/traefik/pull/10658) by [stemar94](https://github.com/stemar94))
- **[k8s/gatewayapi]** Fix HTTPRoute use of backendRefs ([#10630](https://github.com/traefik/traefik/pull/10630) by [sakaru](https://github.com/sakaru))
- **[k8s/gatewayapi]** Fix HTTPRoute path type ([#10629](https://github.com/traefik/traefik/pull/10629) by [sakaru](https://github.com/sakaru))
- **[k8s]** Improve mirroring example on Kubernetes ([#10701](https://github.com/traefik/traefik/pull/10701) by [mloiseleur](https://github.com/mloiseleur))
- Consistent entryPoints capitalization in CLI flag usage ([#10650](https://github.com/traefik/traefik/pull/10650) by [jnoordsij](https://github.com/jnoordsij))
- Fix unfinished migration sentence for v2.11.2 ([#10633](https://github.com/traefik/traefik/pull/10633) by [kevinpollet](https://github.com/kevinpollet))

## [v3.0.0](https://github.com/traefik/traefik/tree/v3.0.0) (2024-04-29)
[All Commits](https://github.com/traefik/traefik/compare/v3.0.0-beta1...v3.0.0)

**Enhancements:**
- **[consul]** ConsulCatalog StrictChecks ([#10388](https://github.com/traefik/traefik/pull/10388) by [djenriquez](https://github.com/djenriquez))
- **[docker,docker/swarm]** Split Docker provider ([#9652](https://github.com/traefik/traefik/pull/9652) by [ldez](https://github.com/ldez))
- **[docker,service]** Adds weight on ServersLoadBalancer ([#10372](https://github.com/traefik/traefik/pull/10372) by [juliens](https://github.com/juliens))
- **[ecs]** Add option to keep only healthy ECS tasks ([#8027](https://github.com/traefik/traefik/pull/8027) by [Michampt](https://github.com/Michampt))
- **[file]** Reload provider file configuration on SIGHUP ([#9993](https://github.com/traefik/traefik/pull/9993) by [sokoide](https://github.com/sokoide))
- **[healthcheck]** Support gRPC healthcheck ([#8583](https://github.com/traefik/traefik/pull/8583) by [jjacque](https://github.com/jjacque))
- **[healthcheck]** Add a status option to the service health check ([#9463](https://github.com/traefik/traefik/pull/9463) by [guoard](https://github.com/guoard))
- **[http]** Support custom headers when fetching configuration through HTTP ([#9421](https://github.com/traefik/traefik/pull/9421) by [kevinpollet](https://github.com/kevinpollet))
- **[http3]** Moves HTTP/3 outside the experimental section ([#9570](https://github.com/traefik/traefik/pull/9570) by [sdelicata](https://github.com/sdelicata))
- **[k8s,hub]** Remove deprecated code ([#9804](https://github.com/traefik/traefik/pull/9804) by [ldez](https://github.com/ldez))
- **[k8s,k8s/gatewayapi]** Support for cross-namespace references / GatewayAPI ReferenceGrants ([#10346](https://github.com/traefik/traefik/pull/10346) by [pascal-hofmann](https://github.com/pascal-hofmann))
- **[k8s,k8s/gatewayapi]** Support HostSNIRegexp in GatewayAPI TLS routes ([#9486](https://github.com/traefik/traefik/pull/9486) by [ddtmachado](https://github.com/ddtmachado))
- **[k8s,k8s/gatewayapi]** Upgrade gateway api to v1.0.0 ([#10205](https://github.com/traefik/traefik/pull/10205) by [mmatur](https://github.com/mmatur))
- **[k8s/crd,k8s]** Support file path as input param for Kubernetes token value ([#10232](https://github.com/traefik/traefik/pull/10232) by [sssash18](https://github.com/sssash18))
- **[k8s/gatewayapi]** Add option to set Gateway status address ([#10582](https://github.com/traefik/traefik/pull/10582) by [kevinpollet](https://github.com/kevinpollet))
- **[k8s/gatewayapi]** Toggle support for experimental channel ([#10435](https://github.com/traefik/traefik/pull/10435) by [SantoDE](https://github.com/SantoDE))
- **[k8s/gatewayapi]** Add option to set Gateway status address ([#10582](https://github.com/traefik/traefik/pull/10582) by [kevinpollet](https://github.com/kevinpollet))
- **[k8s/gatewayapi]** Add support for HTTPRequestRedirectFilter in k8s Gateway API ([#9408](https://github.com/traefik/traefik/pull/9408) by [romantomjak](https://github.com/romantomjak))
- **[k8s/gatewayapi]** Handle middlewares in filters extension reference ([#10511](https://github.com/traefik/traefik/pull/10511) by [youkoulayley](https://github.com/youkoulayley))
- **[k8s/ingress,k8s/crd,k8s,k8s/gatewayapi]** Use runtime.Object in routerTransform ([#10523](https://github.com/traefik/traefik/pull/10523) by [juliens](https://github.com/juliens))
- **[k8s/ingress,k8s]** Add option to the Ingress provider to disable IngressClass lookup ([#9281](https://github.com/traefik/traefik/pull/9281) by [jandillenkofer](https://github.com/jandillenkofer))
- **[k8s/ingress,k8s]** Remove support of the networking.k8s.io/v1beta1 APIVersion ([#9949](https://github.com/traefik/traefik/pull/9949) by [rtribotte](https://github.com/rtribotte))
- **[logs]** Introduce static config hints ([#10351](https://github.com/traefik/traefik/pull/10351) by [rtribotte](https://github.com/rtribotte))
- **[logs,performance]** New logger for the Traefik logs ([#9515](https://github.com/traefik/traefik/pull/9515) by [ldez](https://github.com/ldez))
- **[logs,plugins]** Retry on plugin API calls ([#9530](https://github.com/traefik/traefik/pull/9530) by [ldez](https://github.com/ldez))
- **[logs,provider]** Improve provider logs ([#9562](https://github.com/traefik/traefik/pull/9562) by [ldez](https://github.com/ldez))
- **[logs]** Improve test logger assertions ([#9533](https://github.com/traefik/traefik/pull/9533) by [ldez](https://github.com/ldez))
- **[marathon]** Remove Marathon provider ([#9614](https://github.com/traefik/traefik/pull/9614) by [rtribotte](https://github.com/rtribotte))
- **[metrics,tracing,accesslogs]** Remove observability for internal resources ([#9633](https://github.com/traefik/traefik/pull/9633) by [rtribotte](https://github.com/rtribotte))
- **[metrics,tracing]** Upgrade opentelemetry dependencies ([#10472](https://github.com/traefik/traefik/pull/10472) by [mmatur](https://github.com/mmatur))
- **[metrics]** Add support for sending DogStatsD metrics over Unix Socket ([#10199](https://github.com/traefik/traefik/pull/10199) by [liamvdv](https://github.com/liamvdv))
- **[metrics]** Remove InfluxDB v1 metrics middleware ([#9612](https://github.com/traefik/traefik/pull/9612) by [tomMoulard](https://github.com/tomMoulard))
- **[metrics]** Upgrade OpenTelemetry dependencies ([#10181](https://github.com/traefik/traefik/pull/10181) by [mmatur](https://github.com/mmatur))
- **[metrics]** Support gRPC and gRPC-Web protocol in metrics ([#9483](https://github.com/traefik/traefik/pull/9483) by [longit644](https://github.com/longit644))
- **[middleware,accesslogs]** Log TLS client subject ([#9285](https://github.com/traefik/traefik/pull/9285) by [xmessi](https://github.com/xmessi))
- **[middleware,metrics,tracing,otel]** Add OpenTelemetry tracing and metrics support ([#8999](https://github.com/traefik/traefik/pull/8999) by [tomMoulard](https://github.com/tomMoulard))
- **[middleware]** Disable Content-Type auto-detection by default ([#9546](https://github.com/traefik/traefik/pull/9546) by [sdelicata](https://github.com/sdelicata))
- **[middleware]** Add gRPC-Web middleware ([#9451](https://github.com/traefik/traefik/pull/9451) by [juliens](https://github.com/juliens))
- **[middleware]** Add support for Brotli ([#9387](https://github.com/traefik/traefik/pull/9387) by [glinton](https://github.com/glinton))
- **[middleware]** Renaming IPWhiteList to IPAllowList  ([#9457](https://github.com/traefik/traefik/pull/9457) by [wxmbugu](https://github.com/wxmbugu))
- **[middleware,authentication,tracing]** Add captured headers options for tracing ([#10457](https://github.com/traefik/traefik/pull/10457) by [rtribotte](https://github.com/rtribotte))
- **[middleware,authentication]** Add forwardAuth.addAuthCookiesToResponse ([#8924](https://github.com/traefik/traefik/pull/8924) by [tgunsch](https://github.com/tgunsch))
- **[middleware,metrics]** Semconv OTLP stable HTTP metrics ([#10421](https://github.com/traefik/traefik/pull/10421) by [mmatur](https://github.com/mmatur))
- **[middleware]** Feat re introduce IpWhitelist middleware as deprecated ([#10341](https://github.com/traefik/traefik/pull/10341) by [mmatur](https://github.com/mmatur))
- **[middleware]** Disable br compression when no Accept-Encoding header is present ([#10178](https://github.com/traefik/traefik/pull/10178) by [robin-moser](https://github.com/robin-moser))
- **[middleware]** Implements the includedContentTypes option for the compress middleware ([#10207](https://github.com/traefik/traefik/pull/10207) by [rjsocha](https://github.com/rjsocha))
- **[middleware]** Add `rejectStatusCode` option to `IPAllowList` middleware ([#10130](https://github.com/traefik/traefik/pull/10130) by [jfly](https://github.com/jfly))
- **[middleware]** Merge v2.11 into v3.0 ([#10426](https://github.com/traefik/traefik/pull/10426) by [mmatur](https://github.com/mmatur))
- **[middleware]** Add ResponseCode to CircuitBreaker ([#10147](https://github.com/traefik/traefik/pull/10147) by [fahhem](https://github.com/fahhem))
- **[nomad]** Allow empty services ([#10375](https://github.com/traefik/traefik/pull/10375) by [chrispruitt](https://github.com/chrispruitt))
- **[nomad]** Support multiple namespaces in the Nomad Provider ([#9332](https://github.com/traefik/traefik/pull/9332) by [0teh](https://github.com/0teh))
- **[plugins]** Add http-wasm plugin support to Traefik ([#10189](https://github.com/traefik/traefik/pull/10189) by [zetaab](https://github.com/zetaab))
- **[plugins]** Upgrade http-wasm host to v0.6.0 to support clients using v0.4.0 ([#10475](https://github.com/traefik/traefik/pull/10475) by [jcchavezs](https://github.com/jcchavezs))
- **[rancher]** Remove Rancher v1 provider ([#9613](https://github.com/traefik/traefik/pull/9613) by [tomMoulard](https://github.com/tomMoulard))
- **[rules]** Bring back v2 rule matchers ([#10339](https://github.com/traefik/traefik/pull/10339) by [rtribotte](https://github.com/rtribotte))
- **[rules]** Remove containous/mux from HTTP muxer ([#9558](https://github.com/traefik/traefik/pull/9558) by [tomMoulard](https://github.com/tomMoulard))
- **[rules]** Update routing syntax ([#9531](https://github.com/traefik/traefik/pull/9531) by [skwair](https://github.com/skwair))
- **[server]** Add SO_REUSEPORT support for EntryPoints ([#9834](https://github.com/traefik/traefik/pull/9834) by [aofei](https://github.com/aofei))
- **[server]** Rework servers load-balancer to use the WRR ([#9431](https://github.com/traefik/traefik/pull/9431) by [juliens](https://github.com/juliens))
- **[server]** Allow default entrypoints definition ([#9100](https://github.com/traefik/traefik/pull/9100) by [applejag](https://github.com/applejag))
- **[sticky-session]** Support setting sticky cookie max age  ([#10176](https://github.com/traefik/traefik/pull/10176) by [Patrick0308](https://github.com/Patrick0308))
- **[tls,tcp,service]** Add TCP Servers Transports support ([#9465](https://github.com/traefik/traefik/pull/9465) by [sdelicata](https://github.com/sdelicata))
- **[tls,service]** Support SPIFFE mTLS between Traefik and Backend servers ([#9394](https://github.com/traefik/traefik/pull/9394) by [jlevesy](https://github.com/jlevesy))
- **[tls]** Add Tailscale certificate resolver ([#9237](https://github.com/traefik/traefik/pull/9237) by [kevinpollet](https://github.com/kevinpollet))
- **[tls]** Support SNI routing with Postgres STARTTLS connections ([#9377](https://github.com/traefik/traefik/pull/9377) by [rtribotte](https://github.com/rtribotte))
- **[tracing,otel]** Migrate to opentelemetry ([#10223](https://github.com/traefik/traefik/pull/10223) by [zetaab](https://github.com/zetaab))
- **[tracing]** Support OTEL_PROPAGATORS to configure tracing propagation ([#10465](https://github.com/traefik/traefik/pull/10465) by [youkoulayley](https://github.com/youkoulayley))
- **[webui,middleware,k8s/gatewayapi]** Support RequestHeaderModifier filter ([#10521](https://github.com/traefik/traefik/pull/10521) by [rtribotte](https://github.com/rtribotte))
- **[webui]** Added router priority to webui&#39;s list and detail page ([#9004](https://github.com/traefik/traefik/pull/9004) by [bendre90](https://github.com/bendre90))
- Reintroduce dropped v2 dynamic config ([#10355](https://github.com/traefik/traefik/pull/10355) by [rtribotte](https://github.com/rtribotte))
- Remove deprecated options ([#9527](https://github.com/traefik/traefik/pull/9527) by [sdelicata](https://github.com/sdelicata))

**Bug fixes:**
- **[consul,tls]** Enable TLS for Consul Connect TCP services ([#10140](https://github.com/traefik/traefik/pull/10140) by [rtribotte](https://github.com/rtribotte))
- **[docker]** Fix struct names in comment ([#10503](https://github.com/traefik/traefik/pull/10503) by [hishope](https://github.com/hishope))
- **[k8s/crd,k8s]** Adds the missing circuit-breaker response code for CRD ([#10625](https://github.com/traefik/traefik/pull/10625) by [ldez](https://github.com/ldez))
- **[k8s/crd,k8s]** Delete warning in Kubernetes CRD provider about the supported version ([#10414](https://github.com/traefik/traefik/pull/10414) by [nmengin](https://github.com/nmengin))
- **[logs]** Avoid cumulative send anonymous usage log ([#10579](https://github.com/traefik/traefik/pull/10579) by [mmatur](https://github.com/mmatur))
- **[logs]** Change traefik cmd error log to error level ([#9569](https://github.com/traefik/traefik/pull/9569) by [tomMoulard](https://github.com/tomMoulard))
- **[logs]** Fix log level ([#9545](https://github.com/traefik/traefik/pull/9545) by [ldez](https://github.com/ldez))
- **[metrics]** Fix OpenTelemetry metrics ([#9962](https://github.com/traefik/traefik/pull/9962) by [rtribotte](https://github.com/rtribotte))
- **[metrics]** Fix OpenTelemetry service name ([#9619](https://github.com/traefik/traefik/pull/9619) by [tomMoulard](https://github.com/tomMoulard))
- **[metrics]** Fix open connections metric ([#9656](https://github.com/traefik/traefik/pull/9656) by [mpl](https://github.com/mpl))
- **[metrics]** Remove config reload failure metrics ([#9660](https://github.com/traefik/traefik/pull/9660) by [rtribotte](https://github.com/rtribotte))
- **[metrics]** Fix OpenTelemetry unit tests ([#10380](https://github.com/traefik/traefik/pull/10380) by [mmatur](https://github.com/mmatur))
- **[metrics]** Fix ServerUp metric ([#9534](https://github.com/traefik/traefik/pull/9534) by [kevinpollet](https://github.com/kevinpollet))
- **[middleware,authentication,metrics,tracing]** Align OpenTelemetry tracing and metrics configurations ([#10404](https://github.com/traefik/traefik/pull/10404) by [rtribotte](https://github.com/rtribotte))
- **[middleware]** Fix brotli response status code when compression is disabled ([#10396](https://github.com/traefik/traefik/pull/10396) by [rtribotte](https://github.com/rtribotte))
- **[middleware]** Allow short healthcheck interval with long timeout ([#9832](https://github.com/traefik/traefik/pull/9832) by [kevinmcconnell](https://github.com/kevinmcconnell))
- **[middleware]** Fix GrpcWeb middleware to clear ContentLength after translating to normal gRPC message ([#9782](https://github.com/traefik/traefik/pull/9782) by [CleverUnderDog](https://github.com/CleverUnderDog))
- **[provider,tls]** Bump tscert dependency to 28a91b69a046 ([#10668](https://github.com/traefik/traefik/pull/10668) by [kevinpollet](https://github.com/kevinpollet))
- **[rules]** Rework Host and HostRegexp matchers ([#9559](https://github.com/traefik/traefik/pull/9559) by [tomMoulard](https://github.com/tomMoulard))
- **[rules]** Support regexp in path/pathprefix in matcher v2 ([#10546](https://github.com/traefik/traefik/pull/10546) by [youkoulayley](https://github.com/youkoulayley))
- **[sticky-session,server]** Set sameSite field for wrr load balancer sticky cookie ([#10066](https://github.com/traefik/traefik/pull/10066) by [sunyakun](https://github.com/sunyakun))
- **[tcp]** Don&#39;t log EOF or timeout errors while peeking first bytes in Postgres StartTLS hook ([#9663](https://github.com/traefik/traefik/pull/9663) by [rtribotte](https://github.com/rtribotte))
- **[tls,server]** Compute priority for https forwarder TLS routes ([#10288](https://github.com/traefik/traefik/pull/10288) by [rtribotte](https://github.com/rtribotte))
- **[tls,service]** Enforce default servers transport SPIFFE config ([#9444](https://github.com/traefik/traefik/pull/9444) by [jlevesy](https://github.com/jlevesy))
- **[webui]** Detect dashboard assets content types ([#9622](https://github.com/traefik/traefik/pull/9622) by [tomMoulard](https://github.com/tomMoulard))
- **[webui]** Add missing Docker Swarm logo ([#10529](https://github.com/traefik/traefik/pull/10529) by [ldez](https://github.com/ldez))
- **[webui]** fix: detect dashboard content types ([#9594](https://github.com/traefik/traefik/pull/9594) by [ldez](https://github.com/ldez))
- Fix a regression on flags using spaces between key and value ([#10445](https://github.com/traefik/traefik/pull/10445) by [ldez](https://github.com/ldez))

**Documentation:**
- **[docker/swarm]** Remove documentation of old swarm options ([#10001](https://github.com/traefik/traefik/pull/10001) by [ldez](https://github.com/ldez))
- **[docker/swarm]** Fix minor typo in swarm example ([#10071](https://github.com/traefik/traefik/pull/10071) by [kaznovac](https://github.com/kaznovac))
- **[k8s,k8s/gatewayapi]** Add ReferenceGrants to Gateway API Traefik controller RBAC ([#10462](https://github.com/traefik/traefik/pull/10462) by [rtribotte](https://github.com/rtribotte))
- **[k8s]** Update Kubernetes version for v3 Helm chart ([#10637](https://github.com/traefik/traefik/pull/10637) by [jnoordsij](https://github.com/jnoordsij))
- **[k8s]** Improve Kubernetes support documentation ([#9974](https://github.com/traefik/traefik/pull/9974) by [rtribotte](https://github.com/rtribotte))
- **[k8s]** Fix invalid version in docs about Gateway API on Traefik v3 ([#10474](https://github.com/traefik/traefik/pull/10474) by [mloiseleur](https://github.com/mloiseleur))
- **[rules]** Improve ruleSyntax option documentation ([#10441](https://github.com/traefik/traefik/pull/10441) by [rtribotte](https://github.com/rtribotte))
- Prepare release v3.0.0 ([#10666](https://github.com/traefik/traefik/pull/10666) by [rtribotte](https://github.com/rtribotte))
- Prepare release v3.0.0-rc2 ([#10514](https://github.com/traefik/traefik/pull/10514) by [rtribotte](https://github.com/rtribotte))
- Fix typo in migration docs ([#10478](https://github.com/traefik/traefik/pull/10478) by [Eisberge](https://github.com/Eisberge))
- Prepare release v3.0.0 rc3 ([#10520](https://github.com/traefik/traefik/pull/10520) by [rtribotte](https://github.com/rtribotte))
- Fix typo in dialer_test.go ([#10552](https://github.com/traefik/traefik/pull/10552) by [eltociear](https://github.com/eltociear))
- Fix typo and improve explanation on internal resources ([#10563](https://github.com/traefik/traefik/pull/10563) by [mloiseleur](https://github.com/mloiseleur))
- Prepare release v3.0.0-rc1 ([#10429](https://github.com/traefik/traefik/pull/10429) by [mmatur](https://github.com/mmatur))
- Update version comment in quick-start.md ([#10383](https://github.com/traefik/traefik/pull/10383) by [matthieuwerner](https://github.com/matthieuwerner))
- Improve migration guide ([#10319](https://github.com/traefik/traefik/pull/10319) by [rtribotte](https://github.com/rtribotte))
- Prepare release v3.0.0 beta5 ([#10273](https://github.com/traefik/traefik/pull/10273) by [rtribotte](https://github.com/rtribotte))
- Prepare release v3.0.0-beta4 ([#10165](https://github.com/traefik/traefik/pull/10165) by [mmatur](https://github.com/mmatur))
- Prepare release v3.0.0-rc4 ([#10588](https://github.com/traefik/traefik/pull/10588) by [kevinpollet](https://github.com/kevinpollet))
- Fix bad anchor on documentation ([#10041](https://github.com/traefik/traefik/pull/10041) by [mmatur](https://github.com/mmatur))
- Prepare release v3.0.0-rc5 ([#10605](https://github.com/traefik/traefik/pull/10605) by [ldez](https://github.com/ldez))
- Fix migration guide heading ([#9989](https://github.com/traefik/traefik/pull/9989) by [ldez](https://github.com/ldez))
- Prepare release v3.0.0-beta3 ([#9978](https://github.com/traefik/traefik/pull/9978) by [ldez](https://github.com/ldez))
- Fix some typos in comments ([#10626](https://github.com/traefik/traefik/pull/10626) by [hidewrong](https://github.com/hidewrong))
- Adjust quick start ([#9790](https://github.com/traefik/traefik/pull/9790) by [svx](https://github.com/svx))
- Mention PathPrefix matcher changes in V3 Migration Guide ([#9727](https://github.com/traefik/traefik/pull/9727) by [aofei](https://github.com/aofei))
- Fix yaml indentation in the HTTP3 example ([#9724](https://github.com/traefik/traefik/pull/9724) by [benwaffle](https://github.com/benwaffle))
- Add OpenTelemetry in observability overview ([#9654](https://github.com/traefik/traefik/pull/9654) by [tomMoulard](https://github.com/tomMoulard))
- Prepare release v3.0.0-beta2 ([#9587](https://github.com/traefik/traefik/pull/9587) by [tomMoulard](https://github.com/tomMoulard))
- Prepare release v3.0.0-beta1 ([#9577](https://github.com/traefik/traefik/pull/9577) by [rtribotte](https://github.com/rtribotte))

**Misc:**
- Merge current v2.11 into v3.0 ([#10651](https://github.com/traefik/traefik/pull/10651) by [ldez](https://github.com/ldez))
- Merge current v2.11 into v3.0 ([#10632](https://github.com/traefik/traefik/pull/10632) by [kevinpollet](https://github.com/kevinpollet))
- Merge current v2.11 into v3.0 ([#10604](https://github.com/traefik/traefik/pull/10604) by [ldez](https://github.com/ldez))
- Merge branch v2.11 into v3.0 ([#10587](https://github.com/traefik/traefik/pull/10587) by [kevinpollet](https://github.com/kevinpollet))
- Merge current v2.11 into v3.0 ([#10566](https://github.com/traefik/traefik/pull/10566) by [mmatur](https://github.com/mmatur))
- Merge current v2.11 into v3.0 ([#10564](https://github.com/traefik/traefik/pull/10564) by [ldez](https://github.com/ldez))
- Merge branch v2.11 into v3.0 ([#10519](https://github.com/traefik/traefik/pull/10519) by [rtribotte](https://github.com/rtribotte))
- Merge v2.11 into v3.0 ([#10513](https://github.com/traefik/traefik/pull/10513) by [mmatur](https://github.com/mmatur))
- Merge v2.11 into v3.0 ([#10417](https://github.com/traefik/traefik/pull/10417) by [mmatur](https://github.com/mmatur))
- Merge current v2.11 into v3.0 ([#10382](https://github.com/traefik/traefik/pull/10382) by [mmatur](https://github.com/mmatur))
- Merge back v2.11 into v3.0 ([#10377](https://github.com/traefik/traefik/pull/10377) by [mmatur](https://github.com/mmatur))
- Merge back v2.11 into v3.0 ([#10353](https://github.com/traefik/traefik/pull/10353) by [youkoulayley](https://github.com/youkoulayley))
- Merge current v2.11 into v3.0 ([#10328](https://github.com/traefik/traefik/pull/10328) by [mmatur](https://github.com/mmatur))
- Merge current v2.10 into v3.0 ([#10272](https://github.com/traefik/traefik/pull/10272) by [rtribotte](https://github.com/rtribotte))
- Merge current v2.10 into v3.0 ([#10164](https://github.com/traefik/traefik/pull/10164) by [mmatur](https://github.com/mmatur))
- Merge current v2.10 into v3.0 ([#10038](https://github.com/traefik/traefik/pull/10038) by [mmatur](https://github.com/mmatur))
- Merge branch v2.10 into v3.0 ([#9977](https://github.com/traefik/traefik/pull/9977) by [ldez](https://github.com/ldez))
- Merge branch v2.10 into v3.0 ([#9931](https://github.com/traefik/traefik/pull/9931) by [ldez](https://github.com/ldez))
- Merge branch v2.10 into v3.0 ([#9896](https://github.com/traefik/traefik/pull/9896) by [ldez](https://github.com/ldez))
- Merge branch v2.10 into v3.0 ([#9867](https://github.com/traefik/traefik/pull/9867) by [ldez](https://github.com/ldez))
- Merge branch v2.10 into v3.0 ([#9850](https://github.com/traefik/traefik/pull/9850) by [ldez](https://github.com/ldez))
- Merge branch v2.10 into v3.0 ([#9845](https://github.com/traefik/traefik/pull/9845) by [ldez](https://github.com/ldez))
- Merge branch v2.10 into v3.0 ([#9803](https://github.com/traefik/traefik/pull/9803) by [ldez](https://github.com/ldez))
- Merge branch v2.10 into v3.0 ([#9793](https://github.com/traefik/traefik/pull/9793) by [ldez](https://github.com/ldez))
- Merge branch v2.9 into v3.0 ([#9722](https://github.com/traefik/traefik/pull/9722) by [rtribotte](https://github.com/rtribotte))
- Merge branch v2.9 into v3.0 ([#9650](https://github.com/traefik/traefik/pull/9650) by [tomMoulard](https://github.com/tomMoulard))
- Merge branch v2.9 into v3.0 ([#9632](https://github.com/traefik/traefik/pull/9632) by [kevinpollet](https://github.com/kevinpollet))
- Merge current v2.9 into master ([#9576](https://github.com/traefik/traefik/pull/9576) by [rtribotte](https://github.com/rtribotte))
- Merge branch v2.9 into master ([#9554](https://github.com/traefik/traefik/pull/9554) by [ldez](https://github.com/ldez))
- Merge branch v2.9 into master ([#9536](https://github.com/traefik/traefik/pull/9536) by [ldez](https://github.com/ldez))
- Merge branch v2.9 into master ([#9532](https://github.com/traefik/traefik/pull/9532) by [ldez](https://github.com/ldez))
- Merge branch v2.9 into master ([#9482](https://github.com/traefik/traefik/pull/9482) by [kevinpollet](https://github.com/kevinpollet))
- Merge branch v2.9 into master ([#9464](https://github.com/traefik/traefik/pull/9464) by [ldez](https://github.com/ldez))
- Merge branch v2.9 into master ([#9449](https://github.com/traefik/traefik/pull/9449) by [kevinpollet](https://github.com/kevinpollet))
- Merge branch v2.9 into master ([#9419](https://github.com/traefik/traefik/pull/9419) by [kevinpollet](https://github.com/kevinpollet))
- Merge branch v2.9 into master ([#9351](https://github.com/traefik/traefik/pull/9351) by [rtribotte](https://github.com/rtribotte))

## [v3.0.0-rc5](https://github.com/traefik/traefik/tree/v3.0.0-rc4) (2024-04-11)
[All Commits](https://github.com/traefik/traefik/compare/v3.0.0-rc4...v3.0.0-rc5)

**Misc:**
- Merge current v2.11 into v3.0 ([#10604](https://github.com/traefik/traefik/pull/10604) by [ldez](https://github.com/ldez))

## [v2.11.2](https://github.com/traefik/traefik/tree/v2.11.2) (2024-04-11)
[All Commits](https://github.com/traefik/traefik/compare/v2.11.1...v2.11.2)

**Bug fixes:**
- **[server]** Revert LingeringTimeout and change default value for ReadTimeout ([#10599](https://github.com/traefik/traefik/pull/10599) by [kevinpollet](https://github.com/kevinpollet))
- **[server]** Set default ReadTimeout value to 60s ([#10602](https://github.com/traefik/traefik/pull/10602) by [rtribotte](https://github.com/rtribotte))

## [v3.0.0-rc4](https://github.com/traefik/traefik/tree/v3.0.0-rc4) (2024-04-10)
[All Commits](https://github.com/traefik/traefik/compare/v3.0.0-rc3...v3.0.0-rc4)

**Enhancements:**
- **[k8s/gatewayapi]** Add option to set Gateway status address ([#10582](https://github.com/traefik/traefik/pull/10582) by [kevinpollet](https://github.com/kevinpollet))
- **[k8s/gatewayapi]** Handle middlewares in filters extension reference ([#10511](https://github.com/traefik/traefik/pull/10511) by [youkoulayley](https://github.com/youkoulayley))
- **[k8s/gatewayapi]** Toggle support for experimental channel ([#10435](https://github.com/traefik/traefik/pull/10435) by [SantoDE](https://github.com/SantoDE))
- **[k8s/ingress,k8s/crd,k8s,k8s/gatewayapi]** Use runtime.Object in routerTransform ([#10523](https://github.com/traefik/traefik/pull/10523) by [juliens](https://github.com/juliens))
- **[nomad]** Allow empty services ([#10375](https://github.com/traefik/traefik/pull/10375) by [chrispruitt](https://github.com/chrispruitt))
- **[webui,middleware,k8s/gatewayapi]** Support RequestHeaderModifier filter ([#10521](https://github.com/traefik/traefik/pull/10521) by [rtribotte](https://github.com/rtribotte))

**Bug fixes:**
- **[docker]** Fix struct names in comment ([#10503](https://github.com/traefik/traefik/pull/10503) by [hishope](https://github.com/hishope))
- **[logs]** Avoid cumulative send anonymous usage log ([#10579](https://github.com/traefik/traefik/pull/10579) by [mmatur](https://github.com/mmatur))
- **[rules]** Support regexp in path/pathprefix in matcher v2 ([#10546](https://github.com/traefik/traefik/pull/10546) by [youkoulayley](https://github.com/youkoulayley))
- **[webui]** Add missing Docker Swarm logo ([#10529](https://github.com/traefik/traefik/pull/10529) by [ldez](https://github.com/ldez))

**Documentation:**
- Fix typo and improve explanation on internal resources ([#10563](https://github.com/traefik/traefik/pull/10563) by [mloiseleur](https://github.com/mloiseleur))
- Fix typo in dialer_test.go ([#10552](https://github.com/traefik/traefik/pull/10552) by [eltociear](https://github.com/eltociear))

**Misc:**
- Merge branch v2.11 into v3.0 ([#10587](https://github.com/traefik/traefik/pull/10587) by [kevinpollet](https://github.com/kevinpollet))
- Merge current v2.11 into v3.0 ([#10566](https://github.com/traefik/traefik/pull/10566) by [mmatur](https://github.com/mmatur))
- Merge current v2.11 into v3.0 ([#10564](https://github.com/traefik/traefik/pull/10564) by [ldez](https://github.com/ldez))

## [v2.11.1](https://github.com/traefik/traefik/tree/v2.11.1) (2024-04-10)
[All Commits](https://github.com/traefik/traefik/compare/v2.11.0...v2.11.1)

**Bug fixes:**
- **[acme,tls]** Enforce handling of ACME-TLS/1 challenges ([#10536](https://github.com/traefik/traefik/pull/10536) by [rtribotte](https://github.com/rtribotte))
- **[acme]** Update go-acme/lego to v4.16.1 ([#10508](https://github.com/traefik/traefik/pull/10508) by [ldez](https://github.com/ldez))
- **[acme]** Close created file in ACME local store CheckFile func ([#10574](https://github.com/traefik/traefik/pull/10574) by [testwill](https://github.com/testwill))
- **[docker,http3]** Update to quic-go v0.42.0 and docker/cli v24.0.9 ([#10572](https://github.com/traefik/traefik/pull/10572) by [mloiseleur](https://github.com/mloiseleur))
- **[docker,marathon,rancher,ecs,tls,nomad]** Allow to configure TLSStore default generated certificate with labels ([#10439](https://github.com/traefik/traefik/pull/10439) by [kevinpollet](https://github.com/kevinpollet))
- **[ecs]** Adjust ECS network interface detection logic ([#10550](https://github.com/traefik/traefik/pull/10550) by [amaxine](https://github.com/amaxine))
- **[logs,tls]** Fix log when default TLSStore and TLSOptions are defined multiple times ([#10499](https://github.com/traefik/traefik/pull/10499) by [rtribotte](https://github.com/rtribotte))
- **[middleware]** Allow empty replacement with ReplacePathRegex middleware ([#10538](https://github.com/traefik/traefik/pull/10538) by [rtribotte](https://github.com/rtribotte))
- **[plugins]** Update Yaegi to v0.16.1 ([#10565](https://github.com/traefik/traefik/pull/10565) by [ldez](https://github.com/ldez))
- **[provider,rules]** Don&#39;t allow routers higher than internal ones ([#10428](https://github.com/traefik/traefik/pull/10428) by [ldez](https://github.com/ldez))
- **[rules]** Reserve priority range for internal routers ([#10541](https://github.com/traefik/traefik/pull/10541) by [youkoulayley](https://github.com/youkoulayley))
- **[server,tcp]** Introduce Lingering Timeout ([#10569](https://github.com/traefik/traefik/pull/10569) by [rtribotte](https://github.com/rtribotte))
- **[tcp]** Enforce failure for TCP HostSNI with hostname ([#10540](https://github.com/traefik/traefik/pull/10540) by [youkoulayley](https://github.com/youkoulayley))
- **[tracing]** Bump Elastic APM to v2.4.8 ([#10512](https://github.com/traefik/traefik/pull/10512) by [rtribotte](https://github.com/rtribotte))
- **[webui]** Fix dashboard exposition through a router ([#10518](https://github.com/traefik/traefik/pull/10518) by [mmatur](https://github.com/mmatur))
- **[webui]** Display IPAllowlist middleware configuration in dashboard ([#10459](https://github.com/traefik/traefik/pull/10459) by [youkoulayley](https://github.com/youkoulayley))
- **[webui]** Make text more readable in dark mode ([#10473](https://github.com/traefik/traefik/pull/10473) by [hood](https://github.com/hood))
- **[webui]** Migrate to Quasar 2.x and Vue.js 3.x ([#10416](https://github.com/traefik/traefik/pull/10416) by [andsarr](https://github.com/andsarr))
- **[webui]** Add a horizontal scroll for the mobile view ([#10480](https://github.com/traefik/traefik/pull/10480) by [framebassman](https://github.com/framebassman))

**Documentation:**
- **[acme]** Update gandiv5 env variable in providers table ([#10506](https://github.com/traefik/traefik/pull/10506) by [dominiwe](https://github.com/dominiwe))
- **[acme]** Fix multiple dns provider documentation ([#10496](https://github.com/traefik/traefik/pull/10496) by [mmatur](https://github.com/mmatur))
- **[docker]** Fix paragraph in entrypoints and Docker docs ([#10491](https://github.com/traefik/traefik/pull/10491) by [luigir-it](https://github.com/luigir-it))
- **[k8s]** Improve middleware example ([#10532](https://github.com/traefik/traefik/pull/10532) by [mloiseleur](https://github.com/mloiseleur))
- **[metrics]** Fix host header mention in prometheus metrics doc ([#10502](https://github.com/traefik/traefik/pull/10502) by [MorphBonehunter](https://github.com/MorphBonehunter))
- **[metrics]** Fix typo in statsd metrics docs ([#10437](https://github.com/traefik/traefik/pull/10437) by [xpac1985](https://github.com/xpac1985))
- **[middleware]** Improve excludedIPs example with IPWhiteList and IPAllowList middleware ([#10554](https://github.com/traefik/traefik/pull/10554) by [mloiseleur](https://github.com/mloiseleur))
- **[nomad]** Improve documentation about Nomad ACL minimum rights ([#10482](https://github.com/traefik/traefik/pull/10482) by [Thadir](https://github.com/Thadir))
- **[server]** Add specification for TCP TLS routers in documentation ([#10510](https://github.com/traefik/traefik/pull/10510) by [shivanipawar00](https://github.com/shivanipawar00))
- **[tls]** Fix default value for peerCertURI option ([#10470](https://github.com/traefik/traefik/pull/10470) by [marcmognol](https://github.com/marcmognol))
- Update releases page ([#10449](https://github.com/traefik/traefik/pull/10449) by [ldez](https://github.com/ldez))
- Update releases page ([#10443](https://github.com/traefik/traefik/pull/10443) by [ldez](https://github.com/ldez))
- Add youkoulayley to maintainers ([#10517](https://github.com/traefik/traefik/pull/10517) by [emilevauge](https://github.com/emilevauge))
- Add sdelicata to maintainers ([#10515](https://github.com/traefik/traefik/pull/10515) by [emilevauge](https://github.com/emilevauge))

**Misc:**
- **[webui]** Modify the Hub Button ([#10583](https://github.com/traefik/traefik/pull/10583) by [mdeliatf](https://github.com/mdeliatf))

## [v3.0.0-rc3](https://github.com/traefik/traefik/tree/v3.0.0-rc3) (2024-03-13)
[All Commits](https://github.com/traefik/traefik/compare/v3.0.0-rc2...v3.0.0-rc3)

**Misc:**
- Merge branch v2.11 into v3.0 ([#10519](https://github.com/traefik/traefik/pull/10519) by [rtribotte](https://github.com/rtribotte))

## [v3.0.0-rc2](https://github.com/traefik/traefik/tree/v3.0.0-rc2) (2024-03-12)
[All Commits](https://github.com/traefik/traefik/compare/v3.0.0-rc1...v3.0.0-rc2)

**Enhancements:**
- **[consul]** ConsulCatalog StrictChecks ([#10388](https://github.com/traefik/traefik/pull/10388) by [djenriquez](https://github.com/djenriquez))
- **[metrics,tracing]** Upgrade opentelemetry dependencies ([#10472](https://github.com/traefik/traefik/pull/10472) by [mmatur](https://github.com/mmatur))
- **[middleware,authentication,tracing]** Add captured headers options for tracing ([#10457](https://github.com/traefik/traefik/pull/10457) by [rtribotte](https://github.com/rtribotte))
- **[middleware,metrics]** Semconv OTLP stable HTTP metrics ([#10421](https://github.com/traefik/traefik/pull/10421) by [mmatur](https://github.com/mmatur))
- **[plugins]** Upgrade http-wasm host to v0.6.0 to support clients using v0.4.0 ([#10475](https://github.com/traefik/traefik/pull/10475) by [jcchavezs](https://github.com/jcchavezs))
- **[tracing]** Support OTEL_PROPAGATORS to configure tracing propagation ([#10465](https://github.com/traefik/traefik/pull/10465) by [youkoulayley](https://github.com/youkoulayley))

**Bug fixes:**
- Fix a regression on flags using spaces between key and value ([#10445](https://github.com/traefik/traefik/pull/10445) by [ldez](https://github.com/ldez))

**Documentation:**
- **[k8s,k8s/gatewayapi]** Add ReferenceGrants to Gateway API Traefik controller RBAC ([#10462](https://github.com/traefik/traefik/pull/10462) by [rtribotte](https://github.com/rtribotte))
- **[k8s]** Fix invalid version in docs about Gateway API on Traefik v3 ([#10474](https://github.com/traefik/traefik/pull/10474) by [mloiseleur](https://github.com/mloiseleur))
- **[rules]** Improve ruleSyntax option documentation ([#10441](https://github.com/traefik/traefik/pull/10441) by [rtribotte](https://github.com/rtribotte))
- Fix typo in migration docs ([#10478](https://github.com/traefik/traefik/pull/10478) by [Eisberge](https://github.com/Eisberge))

**Misc:**
- Merge v2.11 into v3.0 ([#10513](https://github.com/traefik/traefik/pull/10513) by [mmatur](https://github.com/mmatur))

## [v3.0.0-rc1](https://github.com/traefik/traefik/tree/v3.0.0-rc1) (2024-02-13)
[All Commits](https://github.com/traefik/traefik/compare/v3.0.0-beta5...v3.0.0-rc1)

**Enhancements:**
- **[docker,service]** Adds weight on ServersLoadBalancer ([#10372](https://github.com/traefik/traefik/pull/10372) by [juliens](https://github.com/juliens))
- **[file]** Reload provider file configuration on SIGHUP ([#9993](https://github.com/traefik/traefik/pull/9993) by [sokoide](https://github.com/sokoide))
- **[k8s,k8s/gatewayapi]** Upgrade gateway api to v1.0.0 ([#10205](https://github.com/traefik/traefik/pull/10205) by [mmatur](https://github.com/mmatur))
- **[k8s,k8s/gatewayapi]** Support for cross-namespace references / GatewayAPI ReferenceGrants ([#10346](https://github.com/traefik/traefik/pull/10346) by [pascal-hofmann](https://github.com/pascal-hofmann))
- **[logs]** Introduce static config hints ([#10351](https://github.com/traefik/traefik/pull/10351) by [rtribotte](https://github.com/rtribotte))
- **[metrics,tracing,accesslogs]** Remove observability for internal resources ([#9633](https://github.com/traefik/traefik/pull/9633) by [rtribotte](https://github.com/rtribotte))
- **[metrics]** Add support for sending DogStatsD metrics over Unix Socket ([#10199](https://github.com/traefik/traefik/pull/10199) by [liamvdv](https://github.com/liamvdv))
- **[middleware,authentication]** Add forwardAuth.addAuthCookiesToResponse ([#8924](https://github.com/traefik/traefik/pull/8924) by [tgunsch](https://github.com/tgunsch))
- **[middleware]** Implements the includedContentTypes option for the compress middleware ([#10207](https://github.com/traefik/traefik/pull/10207) by [rjsocha](https://github.com/rjsocha))
- **[middleware]** Feat re introduce IpWhitelist middleware as deprecated ([#10341](https://github.com/traefik/traefik/pull/10341) by [mmatur](https://github.com/mmatur))
- **[middleware]** Add ResponseCode to CircuitBreaker ([#10147](https://github.com/traefik/traefik/pull/10147) by [fahhem](https://github.com/fahhem))
- **[middleware]** Add `rejectStatusCode` option to `IPAllowList` middleware ([#10130](https://github.com/traefik/traefik/pull/10130) by [jfly](https://github.com/jfly))
- **[plugins]** Add http-wasm plugin support to Traefik ([#10189](https://github.com/traefik/traefik/pull/10189) by [zetaab](https://github.com/zetaab))
- **[rules]** Bring back v2 rule matchers ([#10339](https://github.com/traefik/traefik/pull/10339) by [rtribotte](https://github.com/rtribotte))
- **[server]** Add SO_REUSEPORT support for EntryPoints ([#9834](https://github.com/traefik/traefik/pull/9834) by [aofei](https://github.com/aofei))
- **[sticky-session]** Support setting sticky cookie max age  ([#10176](https://github.com/traefik/traefik/pull/10176) by [Patrick0308](https://github.com/Patrick0308))
- **[tracing,otel]** Migrate to opentelemetry ([#10223](https://github.com/traefik/traefik/pull/10223) by [zetaab](https://github.com/zetaab))
- Reintroduce dropped v2 dynamic config ([#10355](https://github.com/traefik/traefik/pull/10355) by [rtribotte](https://github.com/rtribotte))

**Bug fixes:**
- **[k8s/crd,k8s]** Delete warning in Kubernetes CRD provider about the supported version ([#10414](https://github.com/traefik/traefik/pull/10414) by [nmengin](https://github.com/nmengin))
- **[metrics]** Fix OpenTelemetry unit tests ([#10380](https://github.com/traefik/traefik/pull/10380) by [mmatur](https://github.com/mmatur))
- **[middleware,authentication,metrics,tracing]** Align OpenTelemetry tracing and metrics configurations ([#10404](https://github.com/traefik/traefik/pull/10404) by [rtribotte](https://github.com/rtribotte))
- **[middleware]** Fix brotli response status code when compression is disabled ([#10396](https://github.com/traefik/traefik/pull/10396) by [rtribotte](https://github.com/rtribotte))
- **[tls,server]** Compute priority for https forwarder TLS routes ([#10288](https://github.com/traefik/traefik/pull/10288) by [rtribotte](https://github.com/rtribotte))

**Documentation:**
- Update version comment in quick-start.md ([#10383](https://github.com/traefik/traefik/pull/10383) by [matthieuwerner](https://github.com/matthieuwerner))
- Improve migration guide ([#10319](https://github.com/traefik/traefik/pull/10319) by [rtribotte](https://github.com/rtribotte))

**Misc:**
- **[k8s/crd,k8s]** Support file path as input param for Kubernetes token value ([#10232](https://github.com/traefik/traefik/pull/10232) by [sssash18](https://github.com/sssash18))
- **[middleware]** Disable br compression when no Accept-Encoding header is present ([#10178](https://github.com/traefik/traefik/pull/10178) by [robin-moser](https://github.com/robin-moser))
- Merge current v2.11 into v3.0 ([#10382](https://github.com/traefik/traefik/pull/10382) by [mmatur](https://github.com/mmatur))
- Merge back v2.11 into v3.0 ([#10377](https://github.com/traefik/traefik/pull/10377) by [mmatur](https://github.com/mmatur))
- Merge back v2.11 into v3.0 ([#10353](https://github.com/traefik/traefik/pull/10353) by [youkoulayley](https://github.com/youkoulayley))
- Merge current v2.11 into v3.0 ([#10328](https://github.com/traefik/traefik/pull/10328) by [mmatur](https://github.com/mmatur))
- Merge v2.11 into v3.0 ([#10417](https://github.com/traefik/traefik/pull/10417) by [mmatur](https://github.com/mmatur))

## [v2.11.0](https://github.com/traefik/traefik/tree/v2.11.0) (2024-02-12)
[All Commits](https://github.com/traefik/traefik/compare/v2.11.0-rc1...v2.11.0)

**Enhancements:**
- **[middleware]** Deprecate IPWhiteList middleware in favor of IPAllowList ([#10249](https://github.com/traefik/traefik/pull/10249) by [lbenguigui](https://github.com/lbenguigui))
- **[redis]** Add Redis Sentinel support ([#10245](https://github.com/traefik/traefik/pull/10245) by [youkoulayley](https://github.com/youkoulayley))
- **[server]** Add KeepAliveMaxTime and KeepAliveMaxRequests features to entrypoints ([#10247](https://github.com/traefik/traefik/pull/10247) by [juliens](https://github.com/juliens))
- **[sticky-session]** Hash WRR sticky cookies ([#10243](https://github.com/traefik/traefik/pull/10243) by [youkoulayley](https://github.com/youkoulayley))

**Bug fixes:**
- **[acme]** Update go-acme/lego to v4.15.0 ([#10392](https://github.com/traefik/traefik/pull/10392) by [ldez](https://github.com/ldez))
- **[authentication]** Fix NTLM and Kerberos ([#10405](https://github.com/traefik/traefik/pull/10405) by [juliens](https://github.com/juliens))
- **[file]** Fix file watcher ([#10420](https://github.com/traefik/traefik/pull/10420) by [juliens](https://github.com/juliens))
- **[file]** Update github.com/fsnotify/fsnotify to v1.7.0 ([#10313](https://github.com/traefik/traefik/pull/10313) by [ldez](https://github.com/ldez))
- **[http3]** Update quic-go to v0.40.1 ([#10296](https://github.com/traefik/traefik/pull/10296) by [ldez](https://github.com/ldez))
- **[middleware,tcp]** Add missing TCP IPAllowList middleware constructor ([#10331](https://github.com/traefik/traefik/pull/10331) by [youkoulayley](https://github.com/youkoulayley))
- **[nomad]** Update the Nomad API dependency to v1.7.2 ([#10327](https://github.com/traefik/traefik/pull/10327) by [jrasell](https://github.com/jrasell))
- **[server]** Fix ReadHeaderTimeout for PROXY protocol ([#10320](https://github.com/traefik/traefik/pull/10320) by [juliens](https://github.com/juliens))
- **[webui]** Fixes the Header Button ([#10395](https://github.com/traefik/traefik/pull/10395) by [mdeliatf](https://github.com/mdeliatf))
- **[webui]** Fix URL encode resource&#39;s id before calling API endpoints ([#10292](https://github.com/traefik/traefik/pull/10292) by [andsarr](https://github.com/andsarr))

**Documentation:**
- **[acme]** Fix TLS challenge explanation ([#10293](https://github.com/traefik/traefik/pull/10293) by [cavokz](https://github.com/cavokz))
- **[docker]** Update wording of compose example ([#10276](https://github.com/traefik/traefik/pull/10276) by [svx](https://github.com/svx))
- **[docker,acme]** Fix typo ([#10294](https://github.com/traefik/traefik/pull/10294) by [youpsla](https://github.com/youpsla))
- **[ecs]** Mention ECS as supported backend ([#10393](https://github.com/traefik/traefik/pull/10393) by [aleyrizvi](https://github.com/aleyrizvi))
- **[k8s/crd]** Adjust deprecation notice for Kubernetes CRD provider ([#10317](https://github.com/traefik/traefik/pull/10317) by [rtribotte](https://github.com/rtribotte))
- **[middleware]** Update the documentation for RateLimit to provide a better example ([#10298](https://github.com/traefik/traefik/pull/10298) by [rmburton](https://github.com/rmburton))
- **[server]** Fix the keepAlive options for the CLI examples ([#10398](https://github.com/traefik/traefik/pull/10398) by [immanuelfodor](https://github.com/immanuelfodor))
- Prepare release v2.11.0-rc2 ([#10384](https://github.com/traefik/traefik/pull/10384) by [rtribotte](https://github.com/rtribotte))
- Improve Concepts documentation page ([#10315](https://github.com/traefik/traefik/pull/10315) by [oliver-dvorski](https://github.com/oliver-dvorski))
- Prepare release v2.11.0-rc1 ([#10326](https://github.com/traefik/traefik/pull/10326) by [mmatur](https://github.com/mmatur))
- Fix description for anonymous usage statistics references ([#10287](https://github.com/traefik/traefik/pull/10287) by [ariyonaty](https://github.com/ariyonaty))
- Documentation enhancements ([#10261](https://github.com/traefik/traefik/pull/10261) by [svx](https://github.com/svx))

## [v2.11.0-rc2](https://github.com/traefik/traefik/tree/v2.11.0-rc2) (2024-01-24)
[All Commits](https://github.com/traefik/traefik/compare/v2.11.0-rc1...v2.11.0-rc2)

**Bug fixes:**
- **[middleware,tcp]** Add missing TCP IPAllowList middleware constructor ([#10331](https://github.com/traefik/traefik/pull/10331) by [youkoulayley](https://github.com/youkoulayley))
- **[nomad]** Update the Nomad API dependency to v1.7.2 ([#10327](https://github.com/traefik/traefik/pull/10327) by [jrasell](https://github.com/jrasell))

**Documentation:**
- Improve Concepts documentation page ([#10315](https://github.com/traefik/traefik/pull/10315) by [oliver-dvorski](https://github.com/oliver-dvorski))

## [v2.11.0-rc1](https://github.com/traefik/traefik/tree/v2.11.0-rc1) (2024-01-02)
[All Commits](https://github.com/traefik/traefik/compare/0a7964300166d167f68d5502bc245b3b9c8842b4...v2.11.0-rc1)

**Enhancements:**
- **[middleware]** Deprecate IPWhiteList middleware in favor of IPAllowList ([#10249](https://github.com/traefik/traefik/pull/10249) by [lbenguigui](https://github.com/lbenguigui))
- **[redis]** Add Redis Sentinel support ([#10245](https://github.com/traefik/traefik/pull/10245) by [youkoulayley](https://github.com/youkoulayley))
- **[server]** Add KeepAliveMaxTime and KeepAliveMaxRequests features to entrypoints ([#10247](https://github.com/traefik/traefik/pull/10247) by [juliens](https://github.com/juliens))
- **[sticky-session]** Hash WRR sticky cookies ([#10243](https://github.com/traefik/traefik/pull/10243) by [youkoulayley](https://github.com/youkoulayley))

**Bug fixes:**
- **[file]** Update github.com/fsnotify/fsnotify to v1.7.0 ([#10313](https://github.com/traefik/traefik/pull/10313) by [ldez](https://github.com/ldez))
- **[http3]** Update quic-go to v0.40.1 ([#10296](https://github.com/traefik/traefik/pull/10296) by [ldez](https://github.com/ldez))
- **[server]** Fix ReadHeaderTimeout for PROXY protocol ([#10320](https://github.com/traefik/traefik/pull/10320) by [juliens](https://github.com/juliens))

**Documentation:**
- **[acme]** Fix TLS challenge explanation ([#10293](https://github.com/traefik/traefik/pull/10293) by [cavokz](https://github.com/cavokz))
- **[docker,acme]** Fix typo ([#10294](https://github.com/traefik/traefik/pull/10294) by [youpsla](https://github.com/youpsla))
- **[docker]** Update wording of compose example ([#10276](https://github.com/traefik/traefik/pull/10276) by [svx](https://github.com/svx))
- **[k8s/crd]** Adjust deprecation notice for Kubernetes CRD provider ([#10317](https://github.com/traefik/traefik/pull/10317) by [rtribotte](https://github.com/rtribotte))
- Fix description for anonymous usage statistics references ([#10287](https://github.com/traefik/traefik/pull/10287) by [ariyonaty](https://github.com/ariyonaty))
- Documentation enhancements ([#10261](https://github.com/traefik/traefik/pull/10261) by [svx](https://github.com/svx))

## [v2.10.7](https://github.com/traefik/traefik/tree/v2.10.7) (2023-12-06)
[All Commits](https://github.com/traefik/traefik/compare/v2.10.6...v2.10.7)

**Bug fixes:**
- **[logs]** Fixed datadog logs json format issue ([#10233](https://github.com/traefik/traefik/pull/10233) by [sssash18](https://github.com/sssash18))

## [v3.0.0-beta5](https://github.com/traefik/traefik/tree/v3.0.0-beta5) (2023-11-29)
[All Commits](https://github.com/traefik/traefik/compare/v3.0.0-beta4...v3.0.0-beta5)

**Enhancements:**
- **[metrics]** Upgrade OpenTelemetry dependencies ([#10181](https://github.com/traefik/traefik/pull/10181) by [mmatur](https://github.com/mmatur))

**Misc:**
- Merge current v2.10 into v3.0 ([#10272](https://github.com/traefik/traefik/pull/10272) by [rtribotte](https://github.com/rtribotte))

## [v2.10.6](https://github.com/traefik/traefik/tree/v2.10.6) (2023-11-28)
[All Commits](https://github.com/traefik/traefik/compare/v2.10.5...v2.10.6)

**Bug fixes:**
- **[acme]** Remove backoff for http challenge ([#10224](https://github.com/traefik/traefik/pull/10224) by [youkoulayley](https://github.com/youkoulayley))
- **[consul,consulcatalog]** Update github.com/hashicorp/consul/api ([#10220](https://github.com/traefik/traefik/pull/10220) by [kevinpollet](https://github.com/kevinpollet))
- **[http3]** Update quic-go to v0.39.1 ([#10171](https://github.com/traefik/traefik/pull/10171) by [tomMoulard](https://github.com/tomMoulard))
- **[middleware]** Fix stripPrefix middleware is not applied to retried attempts ([#10255](https://github.com/traefik/traefik/pull/10255) by [niki-timofe](https://github.com/niki-timofe))
- **[provider]** Refuse recursive requests ([#10242](https://github.com/traefik/traefik/pull/10242) by [rtribotte](https://github.com/rtribotte))
- **[server]** Deny request with fragment in URL path ([#10229](https://github.com/traefik/traefik/pull/10229) by [lbenguigui](https://github.com/lbenguigui))
- **[tracing]** Remove deprecated code usage for datadog tracer ([#10196](https://github.com/traefik/traefik/pull/10196) by [mmatur](https://github.com/mmatur))

**Documentation:**
- **[governance]** Update the review process and maintainers team documentation ([#10230](https://github.com/traefik/traefik/pull/10230) by [geraldcroes](https://github.com/geraldcroes))
- **[governance]** Guidelines Update ([#10197](https://github.com/traefik/traefik/pull/10197) by [geraldcroes](https://github.com/geraldcroes))
- **[metrics]** Add a mention for the host header in metrics headers labels doc ([#10172](https://github.com/traefik/traefik/pull/10172) by [rtribotte](https://github.com/rtribotte))
- **[middleware]** Rephrase BasicAuth and DigestAuth docs ([#10226](https://github.com/traefik/traefik/pull/10226) by [sssash18](https://github.com/sssash18))
- **[middleware]** Improve ErrorPages examples ([#10209](https://github.com/traefik/traefik/pull/10209) by [arendhummeling](https://github.com/arendhummeling))
- Add @lbenguigui to maintainers ([#10222](https://github.com/traefik/traefik/pull/10222) by [kevinpollet](https://github.com/kevinpollet))

## [v3.0.0-beta4](https://github.com/traefik/traefik/tree/v3.0.0-beta4) (2023-10-11)
[All Commits](https://github.com/traefik/traefik/compare/v3.0.0-beta3...v3.0.0-beta4)

**Bug fixes:**
- **[consul,tls]** Enable TLS for Consul Connect TCP services ([#10140](https://github.com/traefik/traefik/pull/10140) by [rtribotte](https://github.com/rtribotte))
- **[middleware]** Allow short healthcheck interval with long timeout ([#9832](https://github.com/traefik/traefik/pull/9832) by [kevinmcconnell](https://github.com/kevinmcconnell))
- **[middleware]** Fix GrpcWeb middleware to clear ContentLength after translating to normal gRPC message ([#9782](https://github.com/traefik/traefik/pull/9782) by [CleverUnderDog](https://github.com/CleverUnderDog))
- **[sticky-session,server]** Set sameSite field for wrr load balancer sticky cookie ([#10066](https://github.com/traefik/traefik/pull/10066) by [sunyakun](https://github.com/sunyakun))

**Documentation:**
- **[docker/swarm]** Fix minor typo in swarm example ([#10071](https://github.com/traefik/traefik/pull/10071) by [kaznovac](https://github.com/kaznovac))
- **[docker/swarm]** Remove documentation of old swarm options ([#10001](https://github.com/traefik/traefik/pull/10001) by [ldez](https://github.com/ldez))
- Fix bad anchor on documentation ([#10041](https://github.com/traefik/traefik/pull/10041) by [mmatur](https://github.com/mmatur))
- Fix migration guide heading ([#9989](https://github.com/traefik/traefik/pull/9989) by [ldez](https://github.com/ldez))

**Misc:**
- Merge current v2.10 into v3.0 ([#10038](https://github.com/traefik/traefik/pull/10038) by [mmatur](https://github.com/mmatur))

## [v2.10.5](https://github.com/traefik/traefik/tree/v2.10.5) (2023-10-11)
[All Commits](https://github.com/traefik/traefik/compare/v2.10.4...v2.10.5)

**Bug fixes:**
- **[accesslogs]** Move origin fields capture to service level ([#10126](https://github.com/traefik/traefik/pull/10126) by [rtribotte](https://github.com/rtribotte))
- **[accesslogs]** Fix preflight response status in access logs ([#10142](https://github.com/traefik/traefik/pull/10142) by [rtribotte](https://github.com/rtribotte))
- **[acme]** Update go-acme/lego to v4.14.0 ([#10087](https://github.com/traefik/traefik/pull/10087) by [ldez](https://github.com/ldez))
- **[acme]** Update go-acme/lego to v4.13.3 ([#10077](https://github.com/traefik/traefik/pull/10077) by [ldez](https://github.com/ldez))
- **[http3]** Update quic-go to v0.37.5 ([#10083](https://github.com/traefik/traefik/pull/10083) by [ldez](https://github.com/ldez))
- **[http3]** Update quic-go to v0.39.0 ([#10137](https://github.com/traefik/traefik/pull/10137) by [ldez](https://github.com/ldez))
- **[http3]** Update quic-go to v0.37.6 ([#10085](https://github.com/traefik/traefik/pull/10085) by [ldez](https://github.com/ldez))
- **[http3]** Update quic-go to v0.38.0 ([#10086](https://github.com/traefik/traefik/pull/10086) by [ldez](https://github.com/ldez))
- **[http3]** Update quic-go to v0.38.1 ([#10090](https://github.com/traefik/traefik/pull/10090) by [ldez](https://github.com/ldez))
- **[kv]** Ignore ErrKeyNotFound error for the KV provider ([#10082](https://github.com/traefik/traefik/pull/10082) by [sunyakun](https://github.com/sunyakun))
- **[middleware,authentication]** Adjust forward auth to avoid connection leak ([#10096](https://github.com/traefik/traefik/pull/10096) by [wdhongtw](https://github.com/wdhongtw))
- **[middleware,server]** Improve CNAME flattening to avoid unnecessary error logging ([#10128](https://github.com/traefik/traefik/pull/10128) by [niallnsec](https://github.com/niallnsec))
- **[middleware]** Allow X-Forwarded-For delete operation ([#10132](https://github.com/traefik/traefik/pull/10132) by [rtribotte](https://github.com/rtribotte))
- **[server]** Update x/net and grpc/grpc-go ([#10161](https://github.com/traefik/traefik/pull/10161) by [rtribotte](https://github.com/rtribotte))
- **[webui]** Add missing accessControlAllowOriginListRegex to middleware view ([#10157](https://github.com/traefik/traefik/pull/10157) by [DBendit](https://github.com/DBendit))
- Fix false positive in url anonymization ([#10138](https://github.com/traefik/traefik/pull/10138) by [jspdown](https://github.com/jspdown))

**Documentation:**
- **[acme]** Change Arvancloud URL ([#10115](https://github.com/traefik/traefik/pull/10115) by [sajjadjafaribojd](https://github.com/sajjadjafaribojd))
- **[acme]** Correct minor typo in crd-acme docs ([#10067](https://github.com/traefik/traefik/pull/10067) by [ayyron-lmao](https://github.com/ayyron-lmao))
- **[healthcheck]** Remove healthcheck interval configuration warning ([#10068](https://github.com/traefik/traefik/pull/10068) by [rtribotte](https://github.com/rtribotte))
- **[kv,redis]** Docs describe the missing db parameter in redis provider ([#10052](https://github.com/traefik/traefik/pull/10052) by [tokers](https://github.com/tokers))
- **[middleware]** Doc fix accessControlAllowHeaders examples ([#10121](https://github.com/traefik/traefik/pull/10121) by [ebuildy](https://github.com/ebuildy))
- Updates business callout in the documentation ([#10122](https://github.com/traefik/traefik/pull/10122) by [tomatokoolaid](https://github.com/tomatokoolaid))

## [v2.10.4](https://github.com/traefik/traefik/tree/v2.10.4) (2023-07-24)
[All Commits](https://github.com/traefik/traefik/compare/v2.10.3...v2.10.4)

**Bug fixes:**
- **[acme]** Update go-acme/lego to v4.13.2 ([#10036](https://github.com/traefik/traefik/pull/10036) by [ldez](https://github.com/ldez))
- **[acme]** Update go-acme/lego to v4.13.0 ([#10029](https://github.com/traefik/traefik/pull/10029) by [ldez](https://github.com/ldez))
- **[k8s/ingress,k8s]** fix: avoid panic on resource backends ([#10023](https://github.com/traefik/traefik/pull/10023) by [ldez](https://github.com/ldez))
- **[middleware,tracing,plugins]** fix: traceability of the middleware plugins ([#10028](https://github.com/traefik/traefik/pull/10028) by [ldez](https://github.com/ldez))

**Documentation:**
- Update maintainers guidelines ([#9981](https://github.com/traefik/traefik/pull/9981) by [geraldcroes](https://github.com/geraldcroes))
- Update release documentation ([#9975](https://github.com/traefik/traefik/pull/9975) by [rtribotte](https://github.com/rtribotte))

**Misc:**
- **[webui]** Updates the Hub tooltip content using a web component and adds an option to disable Hub button ([#10008](https://github.com/traefik/traefik/pull/10008) by [mdeliatf](https://github.com/mdeliatf))

## [v3.0.0-beta3](https://github.com/traefik/traefik/tree/v3.0.0-beta3) (2023-06-21)
[All Commits](https://github.com/traefik/traefik/compare/v3.0.0-beta2...v3.0.0-beta3)

**Enhancements:**
- **[docker,docker/swarm]** Split Docker provider ([#9652](https://github.com/traefik/traefik/pull/9652) by [ldez](https://github.com/ldez))
- **[k8s,hub]** Remove deprecated code ([#9804](https://github.com/traefik/traefik/pull/9804) by [ldez](https://github.com/ldez))
- **[k8s,k8s/gatewayapi]** Support HostSNIRegexp in GatewayAPI TLS routes ([#9486](https://github.com/traefik/traefik/pull/9486) by [ddtmachado](https://github.com/ddtmachado))
- **[k8s/gatewayapi]** Add support for HTTPRequestRedirectFilter in k8s Gateway API ([#9408](https://github.com/traefik/traefik/pull/9408) by [romantomjak](https://github.com/romantomjak))
- **[k8s/ingress,k8s]** Remove support of the networking.k8s.io/v1beta1 APIVersion ([#9949](https://github.com/traefik/traefik/pull/9949) by [rtribotte](https://github.com/rtribotte))
- **[k8s/ingress,k8s]** Add option to the Ingress provider to disable IngressClass lookup ([#9281](https://github.com/traefik/traefik/pull/9281) by [jandillenkofer](https://github.com/jandillenkofer))
- **[marathon]** Remove Marathon provider ([#9614](https://github.com/traefik/traefik/pull/9614) by [rtribotte](https://github.com/rtribotte))
- **[metrics]** Remove InfluxDB v1 metrics middleware ([#9612](https://github.com/traefik/traefik/pull/9612) by [tomMoulard](https://github.com/tomMoulard))
- **[rancher]** Remove Rancher v1 provider ([#9613](https://github.com/traefik/traefik/pull/9613) by [tomMoulard](https://github.com/tomMoulard))
- **[rules]** Remove containous/mux from HTTP muxer ([#9558](https://github.com/traefik/traefik/pull/9558) by [tomMoulard](https://github.com/tomMoulard))
- **[tls,tcp,service]** Add TCP Servers Transports support ([#9465](https://github.com/traefik/traefik/pull/9465) by [sdelicata](https://github.com/sdelicata))
- **[webui]** Added router priority to webui&#39;s list and detail page ([#9004](https://github.com/traefik/traefik/pull/9004) by [bendre90](https://github.com/bendre90))

**Bug fixes:**
- **[metrics]** Fix OpenTelemetry metrics ([#9962](https://github.com/traefik/traefik/pull/9962) by [rtribotte](https://github.com/rtribotte))
- **[metrics]** Remove config reload failure metrics ([#9660](https://github.com/traefik/traefik/pull/9660) by [rtribotte](https://github.com/rtribotte))
- **[metrics]** Fix open connections metric ([#9656](https://github.com/traefik/traefik/pull/9656) by [mpl](https://github.com/mpl))
- **[metrics]** Fix OpenTelemetry service name ([#9619](https://github.com/traefik/traefik/pull/9619) by [tomMoulard](https://github.com/tomMoulard))
- **[tcp]** Don&#39;t log EOF or timeout errors while peeking first bytes in Postgres StartTLS hook ([#9663](https://github.com/traefik/traefik/pull/9663) by [rtribotte](https://github.com/rtribotte))
- **[webui]** Detect dashboard assets content types ([#9622](https://github.com/traefik/traefik/pull/9622) by [tomMoulard](https://github.com/tomMoulard))
- **[webui]** fix: detect dashboard content types ([#9594](https://github.com/traefik/traefik/pull/9594) by [ldez](https://github.com/ldez))

**Documentation:**
- **[k8s]** Improve Kubernetes support documentation ([#9974](https://github.com/traefik/traefik/pull/9974) by [rtribotte](https://github.com/rtribotte))
- Adjust quick start ([#9790](https://github.com/traefik/traefik/pull/9790) by [svx](https://github.com/svx))
- Mention PathPrefix matcher changes in V3 Migration Guide ([#9727](https://github.com/traefik/traefik/pull/9727) by [aofei](https://github.com/aofei))
- Fix yaml indentation in the HTTP3 example ([#9724](https://github.com/traefik/traefik/pull/9724) by [benwaffle](https://github.com/benwaffle))
- Add OpenTelemetry in observability overview ([#9654](https://github.com/traefik/traefik/pull/9654) by [tomMoulard](https://github.com/tomMoulard))

**Misc:**
- Merge branch v2.10 into v3.0 ([#9977](https://github.com/traefik/traefik/pull/9977) by [ldez](https://github.com/ldez))
- Merge branch v2.10 into v3.0 ([#9931](https://github.com/traefik/traefik/pull/9931) by [ldez](https://github.com/ldez))
- Merge branch v2.10 into v3.0 ([#9896](https://github.com/traefik/traefik/pull/9896) by [ldez](https://github.com/ldez))
- Merge branch v2.10 into v3.0 ([#9867](https://github.com/traefik/traefik/pull/9867) by [ldez](https://github.com/ldez))
- Merge branch v2.10 into v3.0 ([#9850](https://github.com/traefik/traefik/pull/9850) by [ldez](https://github.com/ldez))
- Merge branch v2.10 into v3.0 ([#9845](https://github.com/traefik/traefik/pull/9845) by [ldez](https://github.com/ldez))
- Merge branch v2.10 into v3.0 ([#9803](https://github.com/traefik/traefik/pull/9803) by [ldez](https://github.com/ldez))
- Merge branch v2.10 into v3.0 ([#9793](https://github.com/traefik/traefik/pull/9793) by [ldez](https://github.com/ldez))
- Merge branch v2.9 into v3.0 ([#9722](https://github.com/traefik/traefik/pull/9722) by [rtribotte](https://github.com/rtribotte))
- Merge branch v2.9 into v3.0 ([#9650](https://github.com/traefik/traefik/pull/9650) by [tomMoulard](https://github.com/tomMoulard))
- Merge branch v2.9 into v3.0 ([#9632](https://github.com/traefik/traefik/pull/9632) by [kevinpollet](https://github.com/kevinpollet))

## [v2.10.3](https://github.com/traefik/traefik/tree/v2.10.3) (2023-06-17)
[All Commits](https://github.com/traefik/traefik/compare/v2.10.2...v2.10.3)

**Bug fixes:**
- **[acme]** Update go-acme/lego to v4.12.2 ([#9935](https://github.com/traefik/traefik/pull/9971) by [ldez](https://github.com/ldez))

## [v2.10.2](https://github.com/traefik/traefik/tree/v2.10.2) (2023-06-17)
[All Commits](https://github.com/traefik/traefik/compare/v2.10.1...v2.10.2)

**Bug fixes:**
- **[acme]** Update go-acme/lego to v4.12.1 ([#9935](https://github.com/traefik/traefik/pull/9935) by [ldez](https://github.com/ldez))
- **[acme]** Update go-acme/lego to v4.12.0 ([#9918](https://github.com/traefik/traefik/pull/9918) by [ldez](https://github.com/ldez))
- **[acme]** Update go-acme/lego to v4.11.0 ([#9883](https://github.com/traefik/traefik/pull/9883) by [ldez](https://github.com/ldez))
- **[acme]** Do not check for wildcard domains for non DNS challenge ([#9881](https://github.com/traefik/traefik/pull/9881) by [erkexzcx](https://github.com/erkexzcx))
- **[k8s/crd]** Fix multiple subsets endpoint ([#9914](https://github.com/traefik/traefik/pull/9914) by [joaosilva15](https://github.com/joaosilva15))
- **[k8s/ingress,k8s/crd,k8s,hub]** Clean code related to Hub ([#9894](https://github.com/traefik/traefik/pull/9894) by [ldez](https://github.com/ldez))
- **[metrics]** Enable Prometheus provider cleanup when only the router&#39;s metrics level is activated ([#9887](https://github.com/traefik/traefik/pull/9887) by [rtribotte](https://github.com/rtribotte))
- **[middleware]** Encode query semicolons ([#9943](https://github.com/traefik/traefik/pull/9943) by [LandryBe](https://github.com/LandryBe))
- **[middleware]** Missing trailer with custom errors middleware ([#9942](https://github.com/traefik/traefik/pull/9942) by [rtribotte](https://github.com/rtribotte))
- **[middleware]** Support informational headers in middlewares redefining the response writer. ([#9938](https://github.com/traefik/traefik/pull/9938) by [rtribotte](https://github.com/rtribotte))
- **[plugins]** Improve error messages related to plugins ([#9924](https://github.com/traefik/traefik/pull/9924) by [ldez](https://github.com/ldez))
- **[tracing]** Update DataDog tracing dependency to v1.50.1 ([#9953](https://github.com/traefik/traefik/pull/9953) by [der-eismann](https://github.com/der-eismann))

**Documentation:**
- **[accesslogs]** Fix over-indented yaml configuration of access logs ([#9930](https://github.com/traefik/traefik/pull/9930) by [ufUNnxagpM](https://github.com/ufUNnxagpM))
- **[tls]** Add FAQ documentation about TLS certificates ([#9868](https://github.com/traefik/traefik/pull/9868) by [rtribotte](https://github.com/rtribotte))
- Fix typo ([#9966](https://github.com/traefik/traefik/pull/9966) by [green1052](https://github.com/green1052))
- Add business callouts ([#9940](https://github.com/traefik/traefik/pull/9940) by [tomatokoolaid](https://github.com/tomatokoolaid))
- Add logo for GitHub dark mode ([#9890](https://github.com/traefik/traefik/pull/9890) by [ldez](https://github.com/ldez))

## [v2.10.1](https://github.com/traefik/traefik/tree/v2.10.1) (2023-04-27)
[All Commits](https://github.com/traefik/traefik/compare/v2.10.0...v2.10.1)

**Bug fixes:**
- **[middleware,oxy]** Update vulcand/oxy to be5cf38 ([#9874](https://github.com/traefik/traefik/pull/9874) by [rtribotte](https://github.com/rtribotte))

**Documentation:**
- Fix v2.10 migration guide ([#9863](https://github.com/traefik/traefik/pull/9863) by [rtribotte](https://github.com/rtribotte))

## [v2.10.0](https://github.com/traefik/traefik/tree/v2.10.0) (2023-04-24)
[All Commits](https://github.com/traefik/traefik/compare/v2.9.0-rc1...v2.10.0)

**Enhancements:**
- **[docker]** Expose ContainerName in Docker provider ([#9770](https://github.com/traefik/traefik/pull/9770) by [quinot](https://github.com/quinot))
- **[hub]** Remove hub configuration out of experimental ([#9792](https://github.com/traefik/traefik/pull/9792) by [mpl](https://github.com/mpl))
- **[k8s/crd]** Introduce traefik.io API Group CRDs ([#9765](https://github.com/traefik/traefik/pull/9765) by [rtribotte](https://github.com/rtribotte))
- **[k8s/ingress,k8s/crd,k8s]** Native Kubernetes service load-balancing ([#9740](https://github.com/traefik/traefik/pull/9740) by [rtribotte](https://github.com/rtribotte))
- **[middleware,metrics]** Add prometheus metric requests_total with headers ([#9783](https://github.com/traefik/traefik/pull/9783) by [rtribotte](https://github.com/rtribotte))
- **[nomad]** Support multiple namespaces in the Nomad Provider ([#9794](https://github.com/traefik/traefik/pull/9794) by [rtribotte](https://github.com/rtribotte))
- **[tracing]** Add support to send DataDog traces via Unix Socket ([#9714](https://github.com/traefik/traefik/pull/9714) by [der-eismann](https://github.com/der-eismann))
- **[webui]** Modify the Hub Button ([#9851](https://github.com/traefik/traefik/pull/9851) by [mdeliatf](https://github.com/mdeliatf))
- **[webui]** Display period setting of the RateLimit middleware in the webui ([#9822](https://github.com/traefik/traefik/pull/9822) by [smatyas](https://github.com/smatyas))

**Bug fixes:**
- **[docker]** Only warn about missing docker network when network_mode is not host or container ([#9799](https://github.com/traefik/traefik/pull/9799) by [sentriz](https://github.com/sentriz))
- **[k8s/ingress,k8s]** Bump k8s.io/client-go from v0.22.1 to v0.26.3 ([#9808](https://github.com/traefik/traefik/pull/9808) by [ldez](https://github.com/ldez))
- **[plugins]** Improve DeepCopy of PluginConf ([#9846](https://github.com/traefik/traefik/pull/9846) by [ldez](https://github.com/ldez))
- **[plugins]** Update Yaegi to v0.15.1 ([#9815](https://github.com/traefik/traefik/pull/9815) by [ldez](https://github.com/ldez))
- **[server]** Update vulcand/oxy to 03de175b3822 ([#9849](https://github.com/traefik/traefik/pull/9849) by [longit644](https://github.com/longit644))

**Documentation:**
- Prepare release v2.10.0-rc1 ([#9802](https://github.com/traefik/traefik/pull/9802) by [ldez](https://github.com/ldez))
- Fix order of log levels ([#9791](https://github.com/traefik/traefik/pull/9791) by [svx](https://github.com/svx))
- **[docker]** Update wording - add link descriptions ([#9816](https://github.com/traefik/traefik/pull/9816) by [svx](https://github.com/svx))
- **[middleware]** Add accessControlAllowHeaders example ([#9810](https://github.com/traefik/traefik/pull/9810) by [yingshaoxo](https://github.com/yingshaoxo))
- **[tls]** More details on Kubernetes options for mTLS ([#9835](https://github.com/traefik/traefik/pull/9835) by [mloiseleur](https://github.com/mloiseleur))
- Prepare release v2.10.0-rc2 ([#9830](https://github.com/traefik/traefik/pull/9830) by [mpl](https://github.com/mpl))
- Update Call To Actions ([#9824](https://github.com/traefik/traefik/pull/9824) by [svx](https://github.com/svx))
- Improve concepts page ([#9813](https://github.com/traefik/traefik/pull/9813) by [svx](https://github.com/svx))
- Update wording ([#9811](https://github.com/traefik/traefik/pull/9811) by [svx](https://github.com/svx))

**Misc:**
- Merge branch v2.9 into v2.10 ([#9798](https://github.com/traefik/traefik/pull/9798) by [ldez](https://github.com/ldez))
- Merge branch v2.9 into v2.10 ([#9829](https://github.com/traefik/traefik/pull/9829) by [mpl](https://github.com/mpl))

## [v2.10.0-rc2](https://github.com/traefik/traefik/tree/v2.10.0-rc2) (2023-04-07)
[All Commits](https://github.com/traefik/traefik/compare/v2.10.0-rc1...v2.10.0-rc2)

**Enhancements:**
- **[webui]** Display period setting of the RateLimit middleware in the webui ([#9822](https://github.com/traefik/traefik/pull/9822) by [smatyas](https://github.com/smatyas))

**Bug fixes:**
- **[docker]** Only warn about missing docker network when network_mode is not host or container ([#9799](https://github.com/traefik/traefik/pull/9799) by [sentriz](https://github.com/sentriz))
- **[k8s/ingress,k8s]** chore: bump k8s.io/client-go from v0.22.1 to v0.26.3 ([#9808](https://github.com/traefik/traefik/pull/9808) by [ldez](https://github.com/ldez))
- **[plugins]** Update Yaegi to v0.15.1 ([#9815](https://github.com/traefik/traefik/pull/9815) by [ldez](https://github.com/ldez))

**Documentation:**
- **[docker]** Update wording - add link descriptions ([#9816](https://github.com/traefik/traefik/pull/9816) by [svx](https://github.com/svx))
- **[middleware]** Add accessControlAllowHeaders example ([#9810](https://github.com/traefik/traefik/pull/9810) by [yingshaoxo](https://github.com/yingshaoxo))
- Update Call To Actions ([#9824](https://github.com/traefik/traefik/pull/9824) by [svx](https://github.com/svx))
- Improve concepts page ([#9813](https://github.com/traefik/traefik/pull/9813) by [svx](https://github.com/svx))
- Update wording ([#9811](https://github.com/traefik/traefik/pull/9811) by [svx](https://github.com/svx))

## [v2.9.10](https://github.com/traefik/traefik/tree/v2.9.10) (2023-04-06)
[All Commits](https://github.com/traefik/traefik/compare/v2.9.9...v2.9.10)

## [v2.10.0-rc1](https://github.com/traefik/traefik/tree/v2.10.0-rc1) (2023-03-22)
[All Commits](https://github.com/traefik/traefik/compare/b3f162a8a61d89beaa9edc8adc12cc4cb3e1de0f...v2.10.0-rc1)

**Enhancements:**
- **[docker]** Expose ContainerName in Docker provider ([#9770](https://github.com/traefik/traefik/pull/9770) by [quinot](https://github.com/quinot))
- **[hub]** hub: get out of experimental. ([#9792](https://github.com/traefik/traefik/pull/9792) by [mpl](https://github.com/mpl))
- **[k8s/crd]** Introduce traefik.io API Group CRDs ([#9765](https://github.com/traefik/traefik/pull/9765) by [rtribotte](https://github.com/rtribotte))
- **[k8s/ingress,k8s/crd,k8s]** Native Kubernetes service load-balancing ([#9740](https://github.com/traefik/traefik/pull/9740) by [rtribotte](https://github.com/rtribotte))
- **[middleware,metrics]** Add prometheus metric requests_total with headers ([#9783](https://github.com/traefik/traefik/pull/9783) by [rtribotte](https://github.com/rtribotte))
- **[nomad]** Support multiple namespaces in the Nomad Provider ([#9794](https://github.com/traefik/traefik/pull/9794) by [rtribotte](https://github.com/rtribotte))
- **[tracing]** Add support to send DataDog traces via Unix Socket ([#9714](https://github.com/traefik/traefik/pull/9714) by [der-eismann](https://github.com/der-eismann))

**Documentation:**
- docs: update order of log levels ([#9791](https://github.com/traefik/traefik/pull/9791) by [svx](https://github.com/svx))

**Misc:**
- Merge current v2.9 into v2.10 ([#9798](https://github.com/traefik/traefik/pull/9798) by [ldez](https://github.com/ldez))

## [v2.9.9](https://github.com/traefik/traefik/tree/v2.9.9) (2023-03-21)
[All Commits](https://github.com/traefik/traefik/compare/v2.9.8...v2.9.9)

**Bug fixes:**
- **[acme]** Update go-acme/lego to v4.10.2 ([#9749](https://github.com/traefik/traefik/pull/9749) by [ldez](https://github.com/ldez))
- **[http3]** Update quic-go to v0.33.0 ([#9737](https://github.com/traefik/traefik/pull/9737) by [ldez](https://github.com/ldez))
- **[metrics]** Include user-defined default cert for traefik_tls_certs_not_after metric ([#9742](https://github.com/traefik/traefik/pull/9742) by [rtribotte](https://github.com/rtribotte))
- **[middleware]** Update vulcand/oxy to a0e9f7ff1040 ([#9750](https://github.com/traefik/traefik/pull/9750) by [ldez](https://github.com/ldez))
- **[nomad]** Fix default configuration settings for Nomad Provider ([#9758](https://github.com/traefik/traefik/pull/9758) by [aofei](https://github.com/aofei))
- **[nomad]** Fix Nomad client TLS defaults ([#9795](https://github.com/traefik/traefik/pull/9795) by [rtribotte](https://github.com/rtribotte))
- **[server]** Remove User-Agent header removal from ReverseProxy director func ([#9752](https://github.com/traefik/traefik/pull/9752) by [rtribotte](https://github.com/rtribotte))

**Documentation:**
- **[middleware]** Clarify ratelimit middleware ([#9777](https://github.com/traefik/traefik/pull/9777) by [mpl](https://github.com/mpl))
- **[tcp]** Correcting variable name &#39;server address&#39; in TCP Router ([#9743](https://github.com/traefik/traefik/pull/9743) by [ralphg6](https://github.com/ralphg6))

## [v2.9.8](https://github.com/traefik/traefik/tree/v2.9.8) (2023-02-15)
[All Commits](https://github.com/traefik/traefik/compare/v2.9.7...v2.9.8)

**Bug fixes:**
- **[server]** Update golang.org/x/net to v0.7.0 ([#9716](https://github.com/traefik/traefik/pull/9716) by [ldez](https://github.com/ldez))

## [v2.9.7](https://github.com/traefik/traefik/tree/v2.9.7) (2023-02-14)
[All Commits](https://github.com/traefik/traefik/compare/v2.9.6...v2.9.7)

**Bug fixes:**
- **[acme]** Update go-acme/lego to v4.10.0 ([#9705](https://github.com/traefik/traefik/pull/9705) by [ldez](https://github.com/ldez))
- **[ecs]** Prevent panicking when a container has no network interfaces ([#9661](https://github.com/traefik/traefik/pull/9661) by [rtribotte](https://github.com/rtribotte))
- **[file]** Make file provider more resilient wrt first configuration ([#9595](https://github.com/traefik/traefik/pull/9595) by [mpl](https://github.com/mpl))
- **[logs]** Differentiate UDP stream and TCP connection in logs ([#9687](https://github.com/traefik/traefik/pull/9687) by [rtribotte](https://github.com/rtribotte))
- **[middleware]** Prevent from no rate limiting when average is zero ([#9621](https://github.com/traefik/traefik/pull/9621) by [witalisoft](https://github.com/witalisoft))
- **[middleware]** Prevents superfluous WriteHeader call in the error middleware ([#9620](https://github.com/traefik/traefik/pull/9620) by [tomMoulard](https://github.com/tomMoulard))
- **[middleware]** Sanitize X-Forwarded-Proto header in RedirectScheme middleware ([#9598](https://github.com/traefik/traefik/pull/9598) by [ldez](https://github.com/ldez))
- **[plugins]** Update paerser to v0.2.0 ([#9671](https://github.com/traefik/traefik/pull/9671) by [ldez](https://github.com/ldez))
- **[plugins]** Update Yaegi to v0.15.0 ([#9700](https://github.com/traefik/traefik/pull/9700) by [ldez](https://github.com/ldez))
- **[tls,http3]** Bump quic-go to 89769f409f ([#9685](https://github.com/traefik/traefik/pull/9685) by [mpl](https://github.com/mpl))
- **[tls,tcp]** Adds the support for IPv6 in the TCP HostSNI matcher ([#9692](https://github.com/traefik/traefik/pull/9692) by [rtribotte](https://github.com/rtribotte))

**Documentation:**
- **[acme]** Add CNAME support and gotchas ([#9698](https://github.com/traefik/traefik/pull/9698) by [mpl](https://github.com/mpl))
- **[acme]** Further Let&#39;s Encrypt ratelimit warnings ([#9627](https://github.com/traefik/traefik/pull/9627) by [hcooper](https://github.com/hcooper))
- **[k8s]** Add info admonition about routing to k8 services ([#9645](https://github.com/traefik/traefik/pull/9645) by [svx](https://github.com/svx))
- **[k8s]** Improve TLSStore CRD documentation ([#9579](https://github.com/traefik/traefik/pull/9579) by [mloiseleur](https://github.com/mloiseleur))
- **[middleware]** doc: add note about remoteaddr strategy ([#9701](https://github.com/traefik/traefik/pull/9701) by [mpl](https://github.com/mpl))
- Update copyright to match new standard ([#9651](https://github.com/traefik/traefik/pull/9651) by [paulocfjunior](https://github.com/paulocfjunior))
- Update copyright for 2023 ([#9631](https://github.com/traefik/traefik/pull/9631) by [kevinpollet](https://github.com/kevinpollet))
- Update submitting pull requests to include language about drafts ([#9609](https://github.com/traefik/traefik/pull/9609) by [tfny](https://github.com/tfny))

## [v3.0.0-beta2](https://github.com/traefik/traefik/tree/v3.0.0-beta2) (2022-12-07)
[All Commits](https://github.com/traefik/traefik/compare/v3.0.0-beta1...v3.0.0-beta2)

**Enhancements:**
- **[http3]** Moves HTTP/3 outside the experimental section ([#9570](https://github.com/traefik/traefik/pull/9570) by [sdelicata](https://github.com/sdelicata))

**Bug fixes:**
- **[logs]** Change traefik cmd error log to error level ([#9569](https://github.com/traefik/traefik/pull/9569) by [tomMoulard](https://github.com/tomMoulard))
- **[rules]** Rework Host and HostRegexp matchers ([#9559](https://github.com/traefik/traefik/pull/9559) by [tomMoulard](https://github.com/tomMoulard))

**Misc:**
- Merge current v2.9 into master ([#9586](https://github.com/traefik/traefik/pull/9586) by [tomMoulard](https://github.com/tomMoulard))

## [v2.9.6](https://github.com/traefik/traefik/tree/v2.9.6) (2022-12-07)
[All Commits](https://github.com/traefik/traefik/compare/v2.9.5...v2.9.6)

**Bug fixes:**
- **[acme]** Update go-acme/lego to v4.9.1 ([#9550](https://github.com/traefik/traefik/pull/9550) by [ldez](https://github.com/ldez))
- **[k8s/crd]** Support of allowEmptyServices in TraefikService ([#9424](https://github.com/traefik/traefik/pull/9424) by [jeromeguiard](https://github.com/jeromeguiard))
- **[logs]** Remove logs of the request ([#9574](https://github.com/traefik/traefik/pull/9574) by [ldez](https://github.com/ldez))
- **[plugins]** Increase the timeout on plugin download ([#9529](https://github.com/traefik/traefik/pull/9529) by [ldez](https://github.com/ldez))
- **[server]** Update golang.org/x/net ([#9582](https://github.com/traefik/traefik/pull/9582) by [ldez](https://github.com/ldez))
- **[tls]** Handle broken TLS conf better ([#9572](https://github.com/traefik/traefik/pull/9572) by [mpl](https://github.com/mpl))
- **[tracing]** Update DataDog tracing dependency to v1.43.1 ([#9526](https://github.com/traefik/traefik/pull/9526) by [rtribotte](https://github.com/rtribotte))
- **[webui]** Add missing serialNumber passTLSClientCert option to middleware panel ([#9539](https://github.com/traefik/traefik/pull/9539) by [rtribotte](https://github.com/rtribotte))

**Documentation:**
- **[docker]** Add networking example ([#9542](https://github.com/traefik/traefik/pull/9542) by [Janik-Haag](https://github.com/Janik-Haag))
- **[hub]** Add information about the Hub Agent ([#9560](https://github.com/traefik/traefik/pull/9560) by [nmengin](https://github.com/nmengin))
- **[k8s/helm]** Update Helm installation section ([#9564](https://github.com/traefik/traefik/pull/9564) by [mloiseleur](https://github.com/mloiseleur))
- **[middleware]** Clarify PathPrefix matcher greediness ([#9519](https://github.com/traefik/traefik/pull/9519) by [mpl](https://github.com/mpl))

## [v3.0.0-beta1](https://github.com/traefik/traefik/tree/v3.0.0-beta1) (2022-12-05)
[All Commits](https://github.com/traefik/traefik/compare/v2.9.0-rc1...v3.0.0-beta1)

**Enhancements:**
- **[ecs]** Add option to keep only healthy ECS tasks ([#8027](https://github.com/traefik/traefik/pull/8027) by [Michampt](https://github.com/Michampt))
- **[healthcheck]** Support gRPC healthcheck ([#8583](https://github.com/traefik/traefik/pull/8583) by [jjacque](https://github.com/jjacque))
- **[healthcheck]** Add a status option to the service health check ([#9463](https://github.com/traefik/traefik/pull/9463) by [guoard](https://github.com/guoard))
- **[http]** Support custom headers when fetching configuration through HTTP ([#9421](https://github.com/traefik/traefik/pull/9421) by [kevinpollet](https://github.com/kevinpollet))
- **[logs,performance]** New logger for the Traefik logs ([#9515](https://github.com/traefik/traefik/pull/9515) by [ldez](https://github.com/ldez))
- **[logs,plugins]** Retry on plugin API calls ([#9530](https://github.com/traefik/traefik/pull/9530) by [ldez](https://github.com/ldez))
- **[logs,provider]** Improve provider logs ([#9562](https://github.com/traefik/traefik/pull/9562) by [ldez](https://github.com/ldez))
- **[logs]** Improve test logger assertions ([#9533](https://github.com/traefik/traefik/pull/9533) by [ldez](https://github.com/ldez))
- **[metrics]** Support gRPC and gRPC-Web protocol in metrics ([#9483](https://github.com/traefik/traefik/pull/9483) by [longit644](https://github.com/longit644))
- **[middleware,accesslogs]** Log TLS client subject ([#9285](https://github.com/traefik/traefik/pull/9285) by [xmessi](https://github.com/xmessi))
- **[middleware,metrics,tracing]** Add OpenTelemetry tracing and metrics support ([#8999](https://github.com/traefik/traefik/pull/8999) by [tomMoulard](https://github.com/tomMoulard))
- **[middleware]** Disable Content-Type auto-detection by default ([#9546](https://github.com/traefik/traefik/pull/9546) by [sdelicata](https://github.com/sdelicata))
- **[middleware]** Add gRPC-Web middleware ([#9451](https://github.com/traefik/traefik/pull/9451) by [juliens](https://github.com/juliens))
- **[middleware]** Add support for Brotli ([#9387](https://github.com/traefik/traefik/pull/9387) by [glinton](https://github.com/glinton))
- **[middleware]** Renaming IPWhiteList to IPAllowList  ([#9457](https://github.com/traefik/traefik/pull/9457) by [wxmbugu](https://github.com/wxmbugu))
- **[nomad]** Support multiple namespaces in the Nomad Provider ([#9332](https://github.com/traefik/traefik/pull/9332) by [0teh](https://github.com/0teh))
- **[rules]** Update routing syntax ([#9531](https://github.com/traefik/traefik/pull/9531) by [skwair](https://github.com/skwair))
- **[server]** Rework servers load-balancer to use the WRR ([#9431](https://github.com/traefik/traefik/pull/9431) by [juliens](https://github.com/juliens))
- **[server]** Allow default entrypoints definition ([#9100](https://github.com/traefik/traefik/pull/9100) by [jilleJr](https://github.com/jilleJr))
- **[tls,service]** Support SPIFFE mTLS between Traefik and Backend servers ([#9394](https://github.com/traefik/traefik/pull/9394) by [jlevesy](https://github.com/jlevesy))
- **[tls]** Add Tailscale certificate resolver ([#9237](https://github.com/traefik/traefik/pull/9237) by [kevinpollet](https://github.com/kevinpollet))
- **[tls]** Support SNI routing with Postgres STARTTLS connections ([#9377](https://github.com/traefik/traefik/pull/9377) by [rtribotte](https://github.com/rtribotte))
- Remove deprecated options ([#9527](https://github.com/traefik/traefik/pull/9527) by [sdelicata](https://github.com/sdelicata))

**Bug fixes:**
- **[logs]** Fix log level ([#9545](https://github.com/traefik/traefik/pull/9545) by [ldez](https://github.com/ldez))
- **[metrics]** Fix ServerUp metric ([#9534](https://github.com/traefik/traefik/pull/9534) by [kevinpollet](https://github.com/kevinpollet))
- **[tls,service]** Enforce default servers transport SPIFFE config ([#9444](https://github.com/traefik/traefik/pull/9444) by [jlevesy](https://github.com/jlevesy))

**Documentation:**
- **[metrics]** Update and publish official Grafana Dashboard ([#9493](https://github.com/traefik/traefik/pull/9493) by [mloiseleur](https://github.com/mloiseleur))

**Misc:**
- Merge branch v2.9 into master ([#9554](https://github.com/traefik/traefik/pull/9554) by [ldez](https://github.com/ldez))
- Merge branch v2.9 into master ([#9536](https://github.com/traefik/traefik/pull/9536) by [ldez](https://github.com/ldez))
- Merge branch v2.9 into master ([#9532](https://github.com/traefik/traefik/pull/9532) by [ldez](https://github.com/ldez))
- Merge branch v2.9 into master ([#9482](https://github.com/traefik/traefik/pull/9482) by [kevinpollet](https://github.com/kevinpollet))
- Merge branch v2.9 into master ([#9464](https://github.com/traefik/traefik/pull/9464) by [ldez](https://github.com/ldez))
- Merge branch v2.9 into master ([#9449](https://github.com/traefik/traefik/pull/9449) by [kevinpollet](https://github.com/kevinpollet))
- Merge branch v2.9 into master ([#9419](https://github.com/traefik/traefik/pull/9419) by [kevinpollet](https://github.com/kevinpollet))
- Merge branch v2.9 into master ([#9351](https://github.com/traefik/traefik/pull/9351) by [rtribotte](https://github.com/rtribotte))

## [v2.9.5](https://github.com/traefik/traefik/tree/v2.9.5) (2022-11-17)
[All Commits](https://github.com/traefik/traefik/compare/v2.9.4...v2.9.5)

**Bug fixes:**
- **[logs,middleware]** Create a new capture instance for each incoming request ([#9510](https://github.com/traefik/traefik/pull/9510) by [sdelicata](https://github.com/sdelicata))

**Documentation:**
- **[k8s/helm]** Update helm repository ([#9506](https://github.com/traefik/traefik/pull/9506) by [charlie-haley](https://github.com/charlie-haley))
- Enhance wording of building-testing page ([#9509](https://github.com/traefik/traefik/pull/9509) by [svx](https://github.com/svx))
- Add link descriptions and update wording ([#9507](https://github.com/traefik/traefik/pull/9507) by [svx](https://github.com/svx))
- Removes the experimental tag on the Traefik Hub header ([#9498](https://github.com/traefik/traefik/pull/9498) by [tfny](https://github.com/tfny))

## [v2.9.4](https://github.com/traefik/traefik/tree/v2.9.4) (2022-10-27)
[All Commits](https://github.com/traefik/traefik/compare/v2.9.1...v2.9.4)

**Bug fixes:**
- **[acme]** Update go-acme/lego to v4.9.0 ([#9413](https://github.com/traefik/traefik/pull/9413) by [tony-defa](https://github.com/tony-defa))
- **[kv,redis]** Fix Redis configuration type ([#9435](https://github.com/traefik/traefik/pull/9435) by [ldez](https://github.com/ldez))
- **[logs,middleware,metrics]** Handle capture on redefined http.responseWriters ([#9440](https://github.com/traefik/traefik/pull/9440) by [rtribotte](https://github.com/rtribotte))
- **[middleware,k8s]** Remove raw cert escape in PassTLSClientCert middleware ([#9412](https://github.com/traefik/traefik/pull/9412) by [rtribotte](https://github.com/rtribotte))
- **[plugins]** Update Yaegi to v0.14.3 ([#9468](https://github.