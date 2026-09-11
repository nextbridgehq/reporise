<a name="22.2.0-next.5"></a>
# 22.2.0-next.5 (2026-09-02)
### compiler-cli
| Commit | Type | Description |
| -- | -- | -- |
| [faafd18a4c](https://github.com/angular/angular/commit/faafd18a4c0c5db161e5d7056e9abfb8675904cb) | fix | check uninvoked signal aliases in extended diagnostic |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [05c4d5a835](https://github.com/angular/angular/commit/05c4d5a8354228100b51176f295ed5dee4f3febc) | feat | add utility for testing directives |
| [91a2bf8425](https://github.com/angular/angular/commit/91a2bf84250f9b0a28a8a68e1eded6e9506bc5e9) | feat | support annotations in WebMCP tool declarations |
| [0904f90b13](https://github.com/angular/angular/commit/0904f90b13ac2a1bad22a2b43fb232957dba44c3) | fix | cancel stale debounce timers to prevent timer leaks |
| [58d536bc83](https://github.com/angular/angular/commit/58d536bc8362f3942c929e58be551d871b00cea7) | fix | don&apos;t fail NgModule checks for a pipe that extends a base class |
| [7168bed663](https://github.com/angular/angular/commit/7168bed663ba2a53f087a68a251e8ccfd938eb97) | fix | validate SVG animation attributes outside the SVG namespace |
### forms
| Commit | Type | Description |
| -- | -- | -- |
| [6e299da8cf](https://github.com/angular/angular/commit/6e299da8cfc7df49029d5d8bb7d5739560e1aaa4) | feat | hard-code `readOnlyHint` and `untrustedContentHint` for WebMCP implicit signal forms |
| [38861ac41b](https://github.com/angular/angular/commit/38861ac41bb373870e961f41626de6b6b31120f1) | fix | avoid writing to `name` input on ControlValueAccessor |
### migrations
| Commit | Type | Description |
| -- | -- | -- |
| [f72600eadd](https://github.com/angular/angular/commit/f72600eaddfa6a299526e922eb9ad5356be821a6) | fix | skip tsconfig files of non-Angular projects |
### platform-server
| Commit | Type | Description |
| -- | -- | -- |
| [b3bb36ad87](https://github.com/angular/angular/commit/b3bb36ad87334f7a86908c1b2b4353c1cc514c2e) | fix | resolve HTTP(S) URLs without authority as relative during SSR |
### router
| Commit | Type | Description |
| -- | -- | -- |
| [7137a41223](https://github.com/angular/angular/commit/7137a41223079b4b172aeccb5031347fcc947b79) | feat | stabilize auto cleanup injectors feature |
| [af26a8c521](https://github.com/angular/angular/commit/af26a8c52178a0e972c2841051db44f9d04ac371) | fix | avoid view transitions when the user agent provides one |

<!-- CHANGELOG SPLIT MARKER -->

<a name="22.1.5"></a>
# 22.1.5 (2026-09-02)
### compiler-cli
| Commit | Type | Description |
| -- | -- | -- |
| [d90698dae7](https://github.com/angular/angular/commit/d90698dae759f21f29052e521ffaec6c3a79f6d1) | fix | check uninvoked signal aliases in extended diagnostic |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [2ceeb27078](https://github.com/angular/angular/commit/2ceeb27078d890514a1e87b0d99f366d9a4a796f) | fix | cancel stale debounce timers to prevent timer leaks |
| [ed2e401d2d](https://github.com/angular/angular/commit/ed2e401d2da9a6dd5c87006573a8e42934f58f62) | fix | don&apos;t fail NgModule checks for a pipe that extends a base class |
| [c65d378bb4](https://github.com/angular/angular/commit/c65d378bb4fded436f197aa7bc52c03f507b8bd4) | fix | validate SVG animation attributes outside the SVG namespace |
### forms
| Commit | Type | Description |
| -- | -- | -- |
| [43aaeaec29](https://github.com/angular/angular/commit/43aaeaec29e15d7b2504e8930c92c94b898ca200) | fix | avoid writing to `name` input on ControlValueAccessor |
### migrations
| Commit | Type | Description |
| -- | -- | -- |
| [d85288d75f](https://github.com/angular/angular/commit/d85288d75f3f85dc6b10bf813c805b1b7fed7329) | fix | skip tsconfig files of non-Angular projects |
### platform-server
| Commit | Type | Description |
| -- | -- | -- |
| [3b8723ce3d](https://github.com/angular/angular/commit/3b8723ce3d88b2bf871185736bc33e3cf9a189f4) | fix | resolve HTTP(S) URLs without authority as relative during SSR |
### router
| Commit | Type | Description |
| -- | -- | -- |
| [4340a63c52](https://github.com/angular/angular/commit/4340a63c52fca4d08ef258a3c053f50932eab27e) | fix | avoid view transitions when the user agent provides one |

<!-- CHANGELOG SPLIT MARKER -->

<a name="22.2.0-next.4"></a>
# 22.2.0-next.4 (2026-08-26)
### common
| Commit | Type | Description |
| -- | -- | -- |
| [862a0c8ab3](https://github.com/angular/angular/commit/862a0c8ab3403242eeac3b2fb80f7cf63cf0c892) | fix | avoid prototype member collisions |
| [7596548e9b](https://github.com/angular/angular/commit/7596548e9b836a5d12e966bf296a4dbba044b78f) | fix | use locale NaN symbol in number formatting |
### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [58b0cb4735](https://github.com/angular/angular/commit/58b0cb47358861de0a512711addb8e29f984a57e) | fix | scope animations declared in minified nested rules |
### compiler-cli
| Commit | Type | Description |
| -- | -- | -- |
| [7d9f55da11](https://github.com/angular/angular/commit/7d9f55da11319da8f273d9edcd38ff2983bdbb0c) | feat | scope type-checking of keyed defer blocks |
| [2e2c426e76](https://github.com/angular/angular/commit/2e2c426e7609de551dafb6360e6373333a278c4e) | fix | deduplicate deferred imports across multiple blocks |
| [a46292af26](https://github.com/angular/angular/commit/a46292af260f241da2f9f4e4cbb7d40b14a678f1) | fix | default template diagnostic related message source file to template |
| [e9ba39d671](https://github.com/angular/angular/commit/e9ba39d671a3645ef5ca8233c96bacc94f02d155) | fix | Produce correct tcb expression for optional chaining |
| [74b294cd51](https://github.com/angular/angular/commit/74b294cd51b0f73e3a71e0cd13a176b1d0f3a89f) | fix | retain metadata for strict standalone errors |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [7ba082e08e](https://github.com/angular/angular/commit/7ba082e08e59eadec4594ad80661d5c1ec08cb2a) | fix | avoid prototype member collisions |
| [915a03ae85](https://github.com/angular/angular/commit/915a03ae856a595bd5fa0f364928869db8daec19) | fix | explicitly reject foreign components in JIT mode |
| [2ab5ff56de](https://github.com/angular/angular/commit/2ab5ff56ded8c6246c0035d9df62a0c7fc9e1308) | fix | preserve namespace for dynamic component hosts |
| [168a324cce](https://github.com/angular/angular/commit/168a324cce0f133ed92953374c2510a75868b790) | fix | prevent TransferState prototype pollution |
| [83f7695b2e](https://github.com/angular/angular/commit/83f7695b2e4e1cab347f7817da4ae4262dade415) | fix | throw coded RuntimeErrors instead of crashing when hydration/rendering can&apos;t find an expected DOM node |
### forms
| Commit | Type | Description |
| -- | -- | -- |
| [1e35de536d](https://github.com/angular/angular/commit/1e35de536d8332dfcbb3d89d01ca84b50aa56bd2) | fix | use dot-access for readonly rule configuration |
### language-service
| Commit | Type | Description |
| -- | -- | -- |
| [0f0d52e9c1](https://github.com/angular/angular/commit/0f0d52e9c1154f8db9a4a8d9d0ff73f0afdc7031) | fix | honor quote style preference when generating imports |
### migrations
| Commit | Type | Description |
| -- | -- | -- |
| [bdc09e8183](https://github.com/angular/angular/commit/bdc09e8183a3280d25bfc93b4d5ae4452cc551ec) | fix | preserve registerLocaleData calls in standalone bootstrap migration |
### platform-server
| Commit | Type | Description |
| -- | -- | -- |
| [3e924cc8db](https://github.com/angular/angular/commit/3e924cc8dbbb57f23b262cb8f0d7e2bd0673034c) | fix | avoid stripping unicode whitespace during url resolution |

<!-- CHANGELOG SPLIT MARKER -->

<a name="22.1.4"></a>
# 22.1.4 (2026-08-26)
### common
| Commit | Type | Description |
| -- | -- | -- |
| [60a874c3fb](https://github.com/angular/angular/commit/60a874c3fbedc2ce216bcf783325f4e1291edcb0) | fix | avoid prototype member collisions |
| [e8378dfeab](https://github.com/angular/angular/commit/e8378dfeab39fca5bcdc47126b7859c8fdab7a28) | fix | use locale NaN symbol in number formatting |
### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [05c7c725a5](https://github.com/angular/angular/commit/05c7c725a534f4ea14c718503966423133474bbf) | fix | scope animations declared in minified nested rules |
### compiler-cli
| Commit | Type | Description |
| -- | -- | -- |
| [afe8499a14](https://github.com/angular/angular/commit/afe8499a14c1bf8ab42e6e30b35917a873745540) | fix | default template diagnostic related message source file to template |
| [079a846263](https://github.com/angular/angular/commit/079a846263599daf38cc1903c46ccea99c5758f8) | fix | Produce correct tcb expression for optional chaining |
| [55eeb46418](https://github.com/angular/angular/commit/55eeb46418080e2faf64c84eac389c21abea6df8) | fix | retain metadata for strict standalone errors |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [3da35cbab9](https://github.com/angular/angular/commit/3da35cbab94777230871a3e9289455089b80fe7f) | fix | avoid prototype member collisions |
| [b199bdfa2a](https://github.com/angular/angular/commit/b199bdfa2ad8b3fe189e7b4cef9dbea600cd4732) | fix | explicitly reject foreign components in JIT mode |
| [9a8e4826b9](https://github.com/angular/angular/commit/9a8e4826b9db4359c3f0e7185e9582b7bd08a3ef) | fix | preserve namespace for dynamic component hosts |
| [7c752d4815](https://github.com/angular/angular/commit/7c752d4815db41ee04e43d38cc826dd63214432b) | fix | prevent TransferState prototype pollution |
| [7546b7a805](https://github.com/angular/angular/commit/7546b7a80549c9620d52692cb0f5cab4c69b546c) | fix | throw coded RuntimeErrors instead of crashing when hydration/rendering can&apos;t find an expected DOM node |
### forms
| Commit | Type | Description |
| -- | -- | -- |
| [c8eb7f0056](https://github.com/angular/angular/commit/c8eb7f00564beceb21445b1f0374c93854b513d1) | fix | use dot-access for readonly rule configuration |
### language-service
| Commit | Type | Description |
| -- | -- | -- |
| [93d7f718d2](https://github.com/angular/angular/commit/93d7f718d2e057e37deda42d197e46672fe7f7f5) | fix | honor quote style preference when generating imports |
### migrations
| Commit | Type | Description |
| -- | -- | -- |
| [85c8829ac1](https://github.com/angular/angular/commit/85c8829ac189b0f47b865b036dad98905e576dc9) | fix | preserve registerLocaleData calls in standalone bootstrap migration |
### platform-server
| Commit | Type | Description |
| -- | -- | -- |
| [71e52d1396](https://github.com/angular/angular/commit/71e52d1396b9cef98652929b73e08c4cde645970) | fix | avoid stripping unicode whitespace during url resolution |

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.2.22"></a>
# 21.2.22 (2026-08-26)
### platform-server
| Commit | Type | Description |
| -- | -- | -- |
| [5aa6d97deb](https://github.com/angular/angular/commit/5aa6d97deb9ef1de14e23748b7fa74f97d183132) | fix | avoid stripping unicode whitespace during url resolution |
| [73d8bbd27c](https://github.com/angular/angular/commit/73d8bbd27cb46495426d4132975a1355b47ad915) | fix | update domino to latest version |

<!-- CHANGELOG SPLIT MARKER -->

<a name="20.3.30"></a>
# 20.3.30 (2026-08-26)
### platform-server
| Commit | Type | Description |
| -- | -- | -- |
| [9339a7a2de](https://github.com/angular/angular/commit/9339a7a2de437ed93f9cc3da7f32d0100412d599) | fix | avoid stripping unicode whitespace during url resolution |
| [89b20568df](https://github.com/angular/angular/commit/89b20568dfaee1ec8e0b3bcf1872acdddd2f4fef) | fix | update domino to latest version |

<!-- CHANGELOG SPLIT MARKER -->

<a name="22.2.0-next.3"></a>
# 22.2.0-next.3 (2026-08-19)
### animations
| Commit | Type | Description |
| -- | -- | -- |
| [c73a001fbf](https://github.com/angular/angular/commit/c73a001fbf766b350fab4e64244cfaee23fdc8bc) | fix | detect object trigger values with Object.hasOwn |
### common
| Commit | Type | Description |
| -- | -- | -- |
| [46d2cb7ff0](https://github.com/angular/angular/commit/46d2cb7ff049dc4549080f64dceb1541b3a87cee) | fix | preserve literal key union in KeyValuePipe.transform() |
### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [48a0fd6e8a](https://github.com/angular/angular/commit/48a0fd6e8a8d14bdc1d901ee5615f4b0ab698fe8) | feat | allow template to access private props |

### core
| Commit | Type | Description |
| -- | -- | -- |
| [dc65e3656f](https://github.com/angular/angular/commit/dc65e3656ff56fc6c5c03cf59991a6e8760b5279) | fix | accept readonly arrays for setClassMetadata decorators |
| [eee9ef4d09](https://github.com/angular/angular/commit/eee9ef4d09c091e9066ed6074a19c0eee0e84da2) | fix | allow readonly arrays in RawScopeInfoFromDecorator |
| [0ddbc47e7f](https://github.com/angular/angular/commit/0ddbc47e7f6a4eced3a1a986b260747dc37ee9c9) | fix | expose debuggableFn for non-computed signal graph nodes |
| [c2b14b7ab4](https://github.com/angular/angular/commit/c2b14b7ab44003d6fd1154300c5cc483644d80e6) | fix | prevent orphaned requestIdleCallback handle from re-entrant scheduling |
| [732e505018](https://github.com/angular/angular/commit/732e5050180190df24768ace7aa3e785ca0dcc0a) | fix | replace all hasOwnProperty usages with Object.hasOwn |
| [c658d73210](https://github.com/angular/angular/commit/c658d73210d1a2e808cfe659dddd48e8389086c7) | fix | stop running further effects once one destroys the view mid-flush |
| [c6e4a36be1](https://github.com/angular/angular/commit/c6e4a36be1246e0fbe06d591a69ac79cd74348d2) | fix | throw a descriptive error instead of crashing when a hydration node is missing |
| [4560f4fdcd](https://github.com/angular/angular/commit/4560f4fdcda4d55c9234f71fda2e73938cb55ed6) | fix | throw NG0500 instead of a raw TypeError on element hydration mismatch |
### forms
| Commit | Type | Description |
| -- | -- | -- |
| [c819880b91](https://github.com/angular/angular/commit/c819880b91bf5ff1c5aa71afd314ae7cae241065) | fix | report forbidden 2way bindings on when `FormField` is applied |
| [38d093232c](https://github.com/angular/angular/commit/38d093232c6d2fad99f2e361e9f6e31923507658) | fix | warn in dev mode when ngModel cannot reach parent NgForm across component boundary |
### http
| Commit | Type | Description |
| -- | -- | -- |
| [1a006a8f97](https://github.com/angular/angular/commit/1a006a8f9794240a950c388387bd8b9a671801da) | fix | cancel oversized fetch response bodies |
### language-server
| Commit | Type | Description |
| -- | -- | -- |
| [3f8d9d6ea6](https://github.com/angular/angular/commit/3f8d9d6ea6a0a0e7edbc12baf08b1f6db8c0f6b8) | fix | recover project for external templates in solution-style workspaces |
### platform-browser
| Commit | Type | Description |
| -- | -- | -- |
| [6f9a6bea50](https://github.com/angular/angular/commit/6f9a6bea50944fff894eb5629075b13f8c3090d7) | fix | disallow event handler attributes in Meta |
| [1cb3d606bf](https://github.com/angular/angular/commit/1cb3d606bf5bb01ec9c9e9289703a79f64c76e89) | fix | throw a descriptive error when insertBefore reference node is missing |
### router
| Commit | Type | Description |
| -- | -- | -- |
| [2720362818](https://github.com/angular/angular/commit/2720362818cdeb2a940171e4ab6f21cf78c6a302) | feat | add containsTree as public API |
| [f1a4c85212](https://github.com/angular/angular/commit/f1a4c8521296d7414a1eab84352ca7db966f35e2) | fix | pass correct component to canDeactivate for named outlets in componentless parent routes |

<!-- CHANGELOG SPLIT MARKER -->

<a name="22.1.3"></a>
# 22.1.3 (2026-08-19)
### animations
| Commit | Type | Description |
| -- | -- | -- |
| [d9620e0f1b](https://github.com/angular/angular/commit/d9620e0f1b85ff5896e4d725c52c5ad6c30e1af9) | fix | detect object trigger values with Object.hasOwn |
### common
| Commit | Type | Description |
| -- | -- | -- |
| [b3c78a5081](https://github.com/angular/angular/commit/b3c78a50816af5685b2a6ed51166d08941c09946) | fix | preserve literal key union in KeyValuePipe.transform() |
### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [94f0b9a371](https://github.com/angular/angular/commit/94f0b9a3710ad000cf927caf5333db3582db1126) | fix | preserve &amp;ngsp; between sibling control flow blocks |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [afe529cb2d](https://github.com/angular/angular/commit/afe529cb2d97e766b4f9014c3b6864420b7c8deb) | fix | accept readonly arrays for setClassMetadata decorators |
| [2c72fe3797](https://github.com/angular/angular/commit/2c72fe3797ff92ead7a2531d32665fac370b4688) | fix | allow readonly arrays in RawScopeInfoFromDecorator |
| [ef2ce9a098](https://github.com/angular/angular/commit/ef2ce9a09802faa5ffff0860f473c4018f25f2ac) | fix | expose debuggableFn for non-computed signal graph nodes |
| [7bcce260f5](https://github.com/angular/angular/commit/7bcce260f51dc8a099c8e63f1e1e3ff8f580dcf1) | fix | prevent orphaned requestIdleCallback handle from re-entrant scheduling |
| [44137117b3](https://github.com/angular/angular/commit/44137117b361f5bbad64e3d488e9aefd2f9ec5cb) | fix | replace all hasOwnProperty usages with Object.hasOwn |
| [85f12a5a13](https://github.com/angular/angular/commit/85f12a5a130aa7fd5cd21fce3eb786a2262480e1) | fix | stop running further effects once one destroys the view mid-flush |
| [c04931c88b](https://github.com/angular/angular/commit/c04931c88b1c7959cb95abd28cf5b3614d97e168) | fix | throw a descriptive error instead of crashing when a hydration node is missing |
| [601d1f6576](https://github.com/angular/angular/commit/601d1f6576b296748f56ffb50646bb1808a7c0fc) | fix | throw NG0500 instead of a raw TypeError on element hydration mismatch |
### forms
| Commit | Type | Description |
| -- | -- | -- |
| [83450d2924](https://github.com/angular/angular/commit/83450d292443cae811e87ab61020f3ed72d27d77) | fix | report forbidden 2way bindings on when `FormField` is applied |
| [5cb4ea7e35](https://github.com/angular/angular/commit/5cb4ea7e355bb9ea43efa15a03dc38c53d2e4faf) | fix | warn in dev mode when ngModel cannot reach parent NgForm across component boundary |
### http
| Commit | Type | Description |
| -- | -- | -- |
| [0cd635e9e2](https://github.com/angular/angular/commit/0cd635e9e2c409a045eaeaf920a226ef54aecc48) | fix | cancel oversized fetch response bodies |
### language-server
| Commit | Type | Description |
| -- | -- | -- |
| [14fbe04612](https://github.com/angular/angular/commit/14fbe04612d29460c5d01d6c65cde579f0a42e95) | fix | recover project for external templates in solution-style workspaces |
### platform-browser
| Commit | Type | Description |
| -- | -- | -- |
| [3ddcb1a101](https://github.com/angular/angular/commit/3ddcb1a10168ead616e523bbe044f4c39ada4cca) | fix | disallow event handler attributes in Meta |
| [640460d606](https://github.com/angular/angular/commit/640460d6065cdcd8fe407c7b35883f81f5045473) | fix | throw a descriptive error when insertBefore reference node is missing |
### router
| Commit | Type | Description |
| -- | -- | -- |
| [abe019d505](https://github.com/angular/angular/commit/abe019d5050532c87179cf46e840965e70a78b1b) | fix | pass correct component to canDeactivate for named outlets in componentless parent routes |

<!-- CHANGELOG SPLIT MARKER -->

<a name="20.3.29"></a>
# 20.3.29 (2026-08-19)
### platform-browser
| Commit | Type | Description |
| -- | -- | -- |
| [7538744c10](https://github.com/angular/angular/commit/7538744c1048701d12e86e992704ea5fa13df4f4) | fix | disallow event handler attributes in Meta |

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.2.21"></a>
# 21.2.21 (2026-08-19)
### platform-browser
| Commit | Type | Description |
| -- | -- | -- |
| [c19a36c2fb](https://github.com/angular/angular/commit/c19a36c2fbc51f41ce974ea1fd87f9f56b3e2444) | fix | disallow event handler attributes in Meta |

<!-- CHANGELOG SPLIT MARKER -->

<a name="22.1.2"></a>
# 22.1.2 (2026-08-13)
### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [76dff307b4](https://github.com/angular/angular/commit/76dff307b4c34bc4ceefcb1c7aa86c39daa5ea45) | fix | Generate correct expression for optional chaning. |
| [6f9a64e6f5](https://github.com/angular/angular/commit/6f9a64e6f5b1e3faada6514e8b090f9d61aa8e54) | fix | remove namespaced MathML script elements |
### compiler-cli
| Commit | Type | Description |
| -- | -- | -- |
| [e9660b1801](https://github.com/angular/angular/commit/e9660b1801a0280fa5ba41e7c330cb6d597199ec) | fix | correctly resolve symbol for SafePropertyRead in chained optional navigation |
| [ec6deea513](https://github.com/angular/angular/commit/ec6deea51329b0c8410c75943d90ce823081e216) | fix | record class extends clause references in DeferredSymbolTracker |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [0df9d5eb65](https://github.com/angular/angular/commit/0df9d5eb6516106188b879536f7f813a9ca8811c) | fix | ensure i18n_util hasOwnProperty checks are safe for property renaming |
| [4d985a179e](https://github.com/angular/angular/commit/4d985a179e66428d46e60b4622435f88c39e1d2b) | fix | incorrect loop in defer blocks |
| [7b40456792](https://github.com/angular/angular/commit/7b404567924840aabdb955704a9bc04778b14f73) | fix | reject prefixed SVG script hosts |
### forms
| Commit | Type | Description |
| -- | -- | -- |
| [3b5c798072](https://github.com/angular/angular/commit/3b5c798072a3cf43b5e0ec0b3f4abc18bc6196a5) | fix | keep radio inputs in sync when values change |
### http
| Commit | Type | Description |
| -- | -- | -- |
| [4f7e9987fa](https://github.com/angular/angular/commit/4f7e9987fa35888de43895bfd859382dfa436e51) | fix | always decode JSON responses as UTF-8 |
### router
| Commit | Type | Description |
| -- | -- | -- |
| [2f82601662](https://github.com/angular/angular/commit/2f82601662a958b3accd4d22dff7ad4ec7c56d77) | fix | limit protocol-relative URL handling to serialization |

<!-- CHANGELOG SPLIT MARKER -->

<a name="22.2.0-next.2"></a>
# 22.2.0-next.2 (2026-08-13)
### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [a4f1a94948](https://github.com/angular/angular/commit/a4f1a949486d20ce2bf9add427eea6629228b28b) | fix | do not encapsulate nested selectors if parent contains ::ng-deep |
| [d7b03f5523](https://github.com/angular/angular/commit/d7b03f5523d220c7935426d23ff5f103c96b00d9) | fix | Generate correct expression for optional chaning. |
| [107f6fa49d](https://github.com/angular/angular/commit/107f6fa49d00ec250b94a8d5f484bae2fc3d71c9) | fix | remove namespaced MathML script elements |
| [d0d7f57e08](https://github.com/angular/angular/commit/d0d7f57e0810a24ba16dbb1f2ab9f079a096fa3d) | fix | scope nested CSS rules |
### compiler-cli
| Commit | Type | Description |
| -- | -- | -- |
| [e8aa222e7d](https://github.com/angular/angular/commit/e8aa222e7d98d2e54c5604107a929a11cb1ef62d) | fix | correctly resolve symbol for SafePropertyRead in chained optional navigation |
| [8d6c925392](https://github.com/angular/angular/commit/8d6c925392c7230fbe6b39abdad05381672631b1) | fix | record class extends clause references in DeferredSymbolTracker |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [8925a4ee49](https://github.com/angular/angular/commit/8925a4ee491aebaf6a1a74880c73dfb20e0a4ba1) | fix | ensure i18n_util hasOwnProperty checks are safe for property renaming |
| [565dbb2fe5](https://github.com/angular/angular/commit/565dbb2fe5406f2a86d43a5b3c6993434b7124a7) | fix | incorrect loop in defer blocks |
| [9f8e32616b](https://github.com/angular/angular/commit/9f8e32616b79892785051fab1c3120a770f5f682) | fix | reject prefixed SVG script hosts |
### forms
| Commit | Type | Description |
| -- | -- | -- |
| [9e37a58e14](https://github.com/angular/angular/commit/9e37a58e14bd7955d40255e42e20aa84fcde02f4) | fix | keep radio inputs in sync when values change |
### http
| Commit | Type | Description |
| -- | -- | -- |
| [09bc90003e](https://github.com/angular/angular/commit/09bc90003ed6e9f6c166e885503728af49d1af67) | fix | always decode JSON responses as UTF-8 |
### router
| Commit | Type | Description |
| -- | -- | -- |
| [b65dea4f03](https://github.com/angular/angular/commit/b65dea4f03e5fc01093a718c990c72ae9165c43f) | feat | allow throwing RedirectCommand to trigger redirects |
| [435f8b2b8b](https://github.com/angular/angular/commit/435f8b2b8b67277fc69888911251d14b32705828) | fix | limit protocol-relative URL handling to serialization |

<!-- CHANGELOG SPLIT MARKER -->

<a name="20.3.28"></a>
# 20.3.28 (2026-08-13)
### core
| Commit | Type | Description |
| -- | -- | -- |
| [2f96c8020f](https://github.com/angular/angular/commit/2f96c8020f85ccb715a76de4b79a0c680c2c7264) | fix | sanitize host bindings on concrete hosts |
### http
| Commit | Type | Description |
| -- | -- | -- |
| [969133d426](https://github.com/angular/angular/commit/969133d426723336eb04ab839ff30d884ce54dd9) | fix | match header values exactly when deleting |
| [29dd26bd71](https://github.com/angular/angular/commit/29dd26bd7115f90ea059a1a5d174203255033e36) | fix | preserve immutability of materialized clones |
| [e4c416c20a](https://github.com/angular/angular/commit/e4c416c20a1cb222ce73d29c035452b257380c56) | fix | run root interceptors in the terminal request chain |

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.2.20"></a>
# 21.2.20 (2026-08-12)
### core
| Commit | Type | Description |
| -- | -- | -- |
| [6afe6fa781](https://github.com/angular/angular/commit/6afe6fa781c2f0931f0aedd729b9884a8fe212ee) | fix | sanitize host bindings on concrete hosts |
### http
| Commit | Type | Description |
| -- | -- | -- |
| [fec5977df4](https://github.com/angular/angular/commit/fec5977df4dda3a10d5ce2923e3e06d86ba11ee7) | fix | match header values exactly when deleting |
| [e33d69a71c](https://github.com/angular/angular/commit/e33d69a71c5beb8fe5785b53fd6b37658334e8e0) | fix | preserve immutability of materialized clones |
| [caf616670f](https://github.com/angular/angular/commit/caf616670fd20d528aa69e0131cc17d60f0cc27d) | fix | run root interceptors in the terminal request chain |

<!-- CHANGELOG SPLIT MARKER -->

<a name="22.2.0-next.1"></a>
# 22.2.0-next.1 (2026-08-07)
### core
| Commit | Type | Description |
| -- | -- | -- |
| [cfe2cda110](https://github.com/angular/angular/commit/cfe2cda1100bb84e2ecf954687126c4d30212d07) | fix | initialize hydration triggers after late runtime activation |
| [e43eb96341](https://github.com/angular/angular/commit/e43eb96341b692525743a1f3aa1380ce21a9dd02) | fix | warn when style property bindings receive invalid values |
### http
| Commit | Type | Description |
| -- | -- | -- |
| [ef4dfead83](https://github.com/angular/angular/commit/ef4dfead83ea8b3843b98a17ac572f2a380b1c46) | fix | avoid aborting completed requests in FetchBackend |
| [6a0789dc7f](https://github.com/angular/angular/commit/6a0789dc7f0ac9d1249c4d9f315e83424867169b) | fix | respect content-type charset in fetch backend text decoder |
| [bb78286e5e](https://github.com/angular/angular/commit/bb78286e5e729d1e1fcfd2733d88351a38083ef5) | fix | run root interceptors in the terminal request chain |
| [280d09b160](https://github.com/angular/angular/commit/280d09b16011e4f53f9e696fd95964943c6dcbfa) | fix | strip RFC 6265 DQUOTE characters and handle URIError in parseCookieValue |

<!-- CHANGELOG SPLIT MARKER -->

<a name="22.1.1"></a>
# 22.1.1 (2026-08-06)
### core
| Commit | Type | Description |
| -- | -- | -- |
| [aa6d3189c1](https://github.com/angular/angular/commit/aa6d3189c141a9247615ed14d856813ea1b95c8d) | fix | initialize hydration triggers after late runtime activation |
| [deecb301c8](https://github.com/angular/angular/commit/deecb301c8aab4c22b80eaa505042311ee938b67) | fix | warn when style property bindings receive invalid values |
### http
| Commit | Type | Description |
| -- | -- | -- |
| [ac3728e79f](https://github.com/angular/angular/commit/ac3728e79fd8fae7a4b38e20d152c5a734a6e3fc) | fix | avoid aborting completed requests in FetchBackend |
| [688a0a7118](https://github.com/angular/angular/commit/688a0a7118215bcab10004a3bf2667773fefdf74) | fix | respect content-type charset in fetch backend text decoder |
| [a13b968451](https://github.com/angular/angular/commit/a13b9684510dfd04e18f3e1d6686d556c051f34e) | fix | run root interceptors in the terminal request chain |
| [32af9b525e](https://github.com/angular/angular/commit/32af9b525efe005998a9cd02aebfcc08e6793cf2) | fix | strip RFC 6265 DQUOTE characters and handle URIError in parseCookieValue |

<!-- CHANGELOG SPLIT MARKER -->

<a name="22.2.0-next.0"></a>
# 22.2.0-next.0 (2026-07-29)
### forms
| Commit | Type | Description |
| -- | -- | -- |
| [d5e8b1ef7a](https://github.com/angular/angular/commit/d5e8b1ef7a02c84d4fd70a6b4d748ead9ff815bf) | feat | allow permanent hidden fields in signal forms |

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.2.19"></a>
# 21.2.19 (2026-07-29)
### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [e2660c3dee](https://github.com/angular/angular/commit/e2660c3deeccb86471f9c11b7e65ebcc89d84e9e) | fix | disallow i18n event attributes |
| [7b884f585a](https://github.com/angular/angular/commit/7b884f585abf50480c271d234c892c141eb61e2c) | fix | restrict possible event handler check to property names longer than 2 characters |
### http
| Commit | Type | Description |
| -- | -- | -- |
| [948a8d6831](https://github.com/angular/angular/commit/948a8d6831e8920b54663ec79421da95210e0e35) | fix | distinguish repeated transfer cache params |
| [9949dccce1](https://github.com/angular/angular/commit/9949dccce164638597496a6b3881043117dfd1df) | fix | enable xsrf for root-provided HttpClient |
### platform-server
| Commit | Type | Description |
| -- | -- | -- |
| [f34a93c946](https://github.com/angular/angular/commit/f34a93c946c017eff526cfb0c8d17f51e97f01e4) | fix | update domino to latest version |

<!-- CHANGELOG SPLIT MARKER -->

<a name="22.1.0"></a>
# 22.1.0 (2026-07-29)
## Deprecations
### http
- `HttpClient.jsonp`, `HttpClientJsonpModule`, and related JSONP classes/functions are deprecated. Use standard HTTP requests instead.
### common
| Commit | Type | Description |
| -- | -- | -- |
| [1ad6824d0d](https://github.com/angular/angular/commit/1ad6824d0dd17a0515ad0544cf435d1e3af6982e) | fix | skip transfer cache for uncacheable HTTP traffic ([#69017](https://github.com/angular/angular/pull/69017)) |
### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [af5e4e1131](https://github.com/angular/angular/commit/af5e4e113130427ba8152166b4d904dd177c982e) | feat | Add an error for --global-foo cases ([#68846](https://github.com/angular/angular/pull/68846)) |
| [d579ecaf73](https://github.com/angular/angular/commit/d579ecaf733db325f628cc11a28688fa0dad85ee) | feat | Disable &apos;--global-&apos; error outside of g3 ([#68846](https://github.com/angular/angular/pull/68846)) |
| [f98547675c](https://github.com/angular/angular/commit/f98547675cd2026bb755671b28dea4e6d48eb7bb) | feat | Namespace CSS variables to the app ([#68846](https://github.com/angular/angular/pull/68846)) |
| [8c8b2f7783](https://github.com/angular/angular/commit/8c8b2f77831236b23ca99ccb62e6197ff43b400d) | feat | Support css var namespacing in properties ([#68846](https://github.com/angular/angular/pull/68846)) |
| [292199aa4d](https://github.com/angular/angular/commit/292199aa4dd4cbf09f14c20bd7049d6ab55d83f4) | fix | permissive whitespace parsing in default never blocks |
| [25c744c4d0](https://github.com/angular/angular/commit/25c744c4d0abd3bfe863ed2d528fea756ec5801b) | fix | support foreign components defined outside top-level scope |
| [5bd00add07](https://github.com/angular/angular/commit/5bd00add071e404ddab318eea82db81b5715a194) | fix | support foreign components inside control flow blocks ([#69674](https://github.com/angular/angular/pull/69674)) |
| [2e442f7876](https://github.com/angular/angular/commit/2e442f787627a1f44d8b6463a1cb979ef6f7e049) | perf | do not emit tag name when control flow root is foreign component ([#69674](https://github.com/angular/angular/pull/69674)) |
### compiler-cli
| Commit | Type | Description |
| -- | -- | -- |
| [aeb55c8bc1](https://github.com/angular/angular/commit/aeb55c8bc101dc313dc64f83f4428ddfad28d54e) | fix | allow passing uninvoked signals as foreign component props |
| [7c60a98b3c](https://github.com/angular/angular/commit/7c60a98b3ccc2090f3bfb3c76d6207f37a5df0ff) | fix | support import aliases in foreignImports ([#68674](https://github.com/angular/angular/pull/68674)) |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [124ba10ead](https://github.com/angular/angular/commit/124ba10ead58c9f93b0b74c4102022c4674db1f5) | feat | add custom set option to linkedSignal |
| [eab4847a8b](https://github.com/angular/angular/commit/eab4847a8bd1b47ba630ca9b20c85770f990c717) | feat | Adds deep linking from Performance panel to DevTools |
| [091456a214](https://github.com/angular/angular/commit/091456a2146d81b225fa9322a9ebde24695aaad0) | fix | account for namespaces in host binding sanitization ([#69558](https://github.com/angular/angular/pull/69558)) |
| [b3748e9fe4](https://github.com/angular/angular/commit/b3748e9fe4a4f9f56f9843b448db59674ad01452) | fix | correct container anchor collection order to match DOM layout |
| [11b206b919](https://github.com/angular/angular/commit/11b206b919074149f2db6e3640a55284aecfe48a) | fix | introduce disposal mechanism for Angular views in foreign `@content` |
| [56607967db](https://github.com/angular/angular/commit/56607967dbba25e63f86fd128ec0c1c4ce3e5232) | fix | introduce logical-only containers for foreign content |
| [23cf1a828b](https://github.com/angular/angular/commit/23cf1a828be0d5bd29ce84cb904b5df9ed67f544) | fix | sanitize host bindings on concrete hosts ([#69558](https://github.com/angular/angular/pull/69558)) |
| [0c07356c5c](https://github.com/angular/angular/commit/0c07356c5c9dc76a532d7d4ecf43d8fce81b405b) | fix | set current tnode in foreign component instruction on reuse |
### forms
| Commit | Type | Description |
| -- | -- | -- |
| [bbbd357bd2](https://github.com/angular/angular/commit/bbbd357bd2b29f0b04578e3fa651418df4aefc67) | fix | add utility to assert that value is a field tree |
### http
| Commit | Type | Description |
| -- | -- | -- |
| [e3630c23c5](https://github.com/angular/angular/commit/e3630c23c59445fc8bace5117283f20d6379dded) | feat | add options to allow caching of credentialed and non-cacheable HTTP requests |
| [ec16a3d6c6](https://github.com/angular/angular/commit/ec16a3d6c6785992197bc0ae81afb1e699232f64) | fix | enable xsrf for root-provided HttpClient |
| [39e362eea5](https://github.com/angular/angular/commit/39e362eea5603fa36bda436c9f03d9304960c1ea) | fix | match header values exactly when deleting |
| [be46ca8696](https://github.com/angular/angular/commit/be46ca869642aefebb0236fd87843c9e2367ea81) | fix | preserve immutability of materialized clones |
| [c0cbd46bd7](https://github.com/angular/angular/commit/c0cbd46bd77443749444f816de1e0df4ede28c96) | fix | skip transfer cache for fetch credentialed requests ([#69017](https://github.com/angular/angular/pull/69017)) |
| [af04e266cc](https://github.com/angular/angular/commit/af04e266cc9df4502802b565ccbb9928f10f51f5) | refactor | deprecate jsonp support |
### language-service
| Commit | Type | Description |
| -- | -- | -- |
| [7f0265e43a](https://github.com/angular/angular/commit/7f0265e43ab9f6b1ab9ad0ae84e70a40db417417) | feat | compile non-exported classes if standalone ([#68454](https://github.com/angular/angular/pull/68454)) |
| [4f9c824dd9](https://github.com/angular/angular/commit/4f9c824dd9ec4462d29ed07b5e7916be86c19e84) | feat | Typecheck templates which would require inline typecheck blocks ([#68454](https://github.com/angular/angular/pull/68454)) |
| [a99fb915c0](https://github.com/angular/angular/commit/a99fb915c09b352ac67f24e71af84cda30bcbf3e) | fix | account for strictTemplates being enabled by default |
### migrations
| Commit | Type | Description |
| -- | -- | -- |
| [c75ff0255c](https://github.com/angular/angular/commit/c75ff0255c3d5ee16f94a9969cd611ab2e02d4a2) | feat | add migration from injectable to service |
| [5d5b2ea72d](https://github.com/angular/angular/commit/5d5b2ea72d03ffc2350e66e202cbca0bf491a5f2) | fix | correctly detect `then`/`else` keywords in control flow migration |
### platform-server
| Commit | Type | Description |
| -- | -- | -- |
| [cf9d7fa0f8](https://github.com/angular/angular/commit/cf9d7fa0f8090bae61bb4fa2f50d6f0570412e6e) | fix | harden platform location origin validation during SSR ([#69184](https://github.com/angular/angular/pull/69184)) |
### router
| Commit | Type | Description |
| -- | -- | -- |
| [97a3fd6a55](https://github.com/angular/angular/commit/97a3fd6a55eccabf7c9adfb33f745c8d1da6d3e9) | feat | handle null and undefined inputs in RouterLinkActive |

<!-- CHANGELOG SPLIT MARKER -->

<a name="20.3.27"></a>
# 20.3.27 (2026-07-29)
### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [5dbcd0ee16](https://github.com/angular/angular/commit/5dbcd0ee16011369bec00e10e22cbcae6ebabd7a) | fix | disallow i18n event attributes |
| [db0d4a1a39](https://github.com/angular/angular/commit/db0d4a1a39db2dc0773f3bc9d7a0e1cfc59fa251) | fix | restrict possible event handler check to property names longer than 2 characters |
### http
| Commit | Type | Description |
| -- | -- | -- |
| [a64e2883e9](https://github.com/angular/angular/commit/a64e2883e9dc4abdac70209129be303de79e5b2b) | fix | distinguish repeated transfer cache params |
### platform-server
| Commit | Type | Description |
| -- | -- | -- |
| [6f80cca0b8](https://github.com/angular/angular/commit/6f80cca0b8af23b37f24fb8ee0229b6901d01df2) | fix | update domino to latest version |

<!-- CHANGELOG SPLIT MARKER -->

<a name="22.0.8"></a>
# 22.0.8 (2026-07-22)
### common
| Commit | Type | Description |
| -- | -- | -- |
| [c0368f2278](https://github.com/angular/angular/commit/c0368f227846024bb26d3628c59541e870bb36e4) | fix | preserve crossorigin on image preloads |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [8616ba9db6](https://github.com/angular/angular/commit/8616ba9db6240f3fbf8b905342d07326e096302b) | fix | ensure SVG animation attributeName is checked case-insensitively |
### forms
| Commit | Type | Description |
| -- | -- | -- |
| [d302c7ab83](https://github.com/angular/angular/commit/d302c7ab833c0bd3bba951135e76e0c48273b3d7) | fix |  ensure `pending` status propagates to the root form in signal forms |
### http
| Commit | Type | Description |
| -- | -- | -- |
| [9d40f8aefe](https://github.com/angular/angular/commit/9d40f8aefef9dcd893db5d01bc58d3e65e1cb4c2) | fix | prevent transfer cache key collisions |
### migrations
| Commit | Type | Description |
| -- | -- | -- |
| [388daea2fc](https://github.com/angular/angular/commit/388daea2fc188aad3ab69fb81bd3f893ac3cd846) | fix | correctly migrate ngClass with mixed space-separated keys |
| [bb39cda648](https://github.com/angular/angular/commit/bb39cda6483de2edab2f8221459b0ed5b73ef221) | fix | preserve NgClass import on partial migration |

<!-- CHANGELOG SPLIT MARKER -->

<a name="22.0.7"></a>
# 22.0.7 (2026-07-15)
### common
| Commit | Type | Description |
| -- | -- | -- |
| [91e33aa1de](https://github.com/angular/angular/commit/91e33aa1de47d250d8cde21047597e8df771f07d) | fix | avoid prototype lookups in date format caches |
### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [5b516e3a58](https://github.com/angular/angular/commit/5b516e3a58e1233f2e01cbb53267b9563a72d5f1) | fix | parsing of an empty template literal interpolation |
### compiler-cli
| Commit | Type | Description |
| -- | -- | -- |
| [c88ddde1c9](https://github.com/angular/angular/commit/c88ddde1c9f56e3b5c5cf264e87217b86a036a58) | fix | re-tag SourceFiles after TsCreateProgramDriver.updateFiles() |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [94d9591b51](https://github.com/angular/angular/commit/94d9591b512c94577080c77911dbd1c3516a8a81) | fix | allow static attributes for explicit input transforms |
| [c89f71a74c](https://github.com/angular/angular/commit/c89f71a74ce312f9f6522796a106eac48bd33ebb) | fix | ignore processing instruction syntax in templates |
| [70500e4067](https://github.com/angular/angular/commit/70500e4067e74e5b5f79a15774b5d2f01524f397) | fix | preserve explicit input transform write type |
### forms
| Commit | Type | Description |
| -- | -- | -- |
| [1b9964675f](https://github.com/angular/angular/commit/1b9964675f0cfee30a0e8f6df664d1961a3dc3ae) | fix | allow multiple async validators |
| [64d6d47a0c](https://github.com/angular/angular/commit/64d6d47a0c67709ce887a90666fc214c40a283c4) | fix | preserve intermediate number values in signal forms |
| [6cf7446afa](https://github.com/angular/angular/commit/6cf7446afaedd461b9e28291e326f6f2372fa157) | fix | prevent stale CVA writeback during debounce |
### http
| Commit | Type | Description |
| -- | -- | -- |
| [20b7dc3023](https://github.com/angular/angular/commit/20b7dc3023df9ccde232cf9fef1d2b1d3ae68b23) | fix | prevent interceptor signal reads from leaking into calling reactive contexts |
### localize
| Commit | Type | Description |
| -- | -- | -- |
| [22d5a091d1](https://github.com/angular/angular/commit/22d5a091d10ac70ece469a4bf69b03c51805614b) | fix | build runtime translations map with a null prototype |
| [8ce1fcf7fa](https://github.com/angular/angular/commit/8ce1fcf7faef3ef4b3612e0faeac2701a82c5434) | fix | use Object.hasOwn for placeholder lookup in translate |
### platform-browser
| Commit | Type | Description |
| -- | -- | -- |
| [b34bf0dce8](https://github.com/angular/angular/commit/b34bf0dce855bca3c6dfcf7e19d38b3b39288a16) | fix | prevent ReDoS in SOURCEMAP_URL_REGEXP |

<!-- CHANGELOG SPLIT MARKER -->

<a name="20.3.26"></a>
# 20.3.26 (2026-07-08)
### compiler-cli
| Commit | Type | Description |
| -- | -- | -- |
| [406aaa31e6](https://github.com/angular/angular/commit/406aaa31e6ac4d3c155f5ab76e315ccd8d0387fe) | fix | update babel dependencies to latest v7 |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [26831d0cbd](https://github.com/angular/angular/commit/26831d0cbd7e692210ca0799a203a7a5a0e741cd) | fix | avoid caching missing locale data |
| [8eb7aea08b](https://github.com/angular/angular/commit/8eb7aea08b27c0f1bcdeec3171880a6fcf28aa9a) | fix | reject dynamic script host elements |
### http
| Commit | Type | Description |
| -- | -- | -- |
| [b963f61028](https://github.com/angular/angular/commit/b963f61028c747843db48c6fb82965123365fd4a) | fix | prevent caching of responses with Set-Cookie headers |
### service-worker
| Commit | Type | Description |
| -- | -- | -- |
| [1fdf234168](https://github.com/angular/angular/commit/1fdf2341684a0f528d1d31005bd48d882c0a47d1) | fix | preserve referrer in asset requests |
| [baa093ba68](https://github.com/angular/angular/commit/baa093ba68c1d5ca7c35c562568c6021eb409b4c) | fix | preserve referrer policy in asset requests |

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.2.18"></a>
# 21.2.18 (2026-07-08)
### compiler-cli
| Commit | Type | Description |
| -- | -- | -- |
| [8d22cc953b](https://github.com/angular/angular/commit/8d22cc953bb9f970c6f86fb0f6e4d0665b874bfa) | fix | update babel dependencies to latest v7 |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [6bcce117fb](https://github.com/angular/angular/commit/6bcce117fbc616e4e721f351e9e038202e916522) | fix | avoid caching missing locale data |
| [5a693bafcd](https://github.com/angular/angular/commit/5a693bafcd49ef11ce687bd91a209e1a46652f42) | fix | reject dynamic script host elements |
### http
| Commit | Type | Description |
| -- | -- | -- |
| [91df739b80](https://github.com/angular/angular/commit/91df739b8022e2177bcc7214ed9a4e94098a4831) | fix | prevent caching of responses with Set-Cookie headers |
### service-worker
| Commit | Type | Description |
| -- | -- | -- |
| [1804f73bec](https://github.com/angular/angular/commit/1804f73becf425b5b1ccee9751d6e3fbd10e1f0b) | fix | preserve referrer in asset requests |
| [e86c31bf26](https://github.com/angular/angular/commit/e86c31bf26359aacce814167506dbdae585a7eb8) | fix | preserve referrer policy in asset requests |

<!-- CHANGELOG SPLIT MARKER -->

<a name="22.0.6"></a>
# 22.0.6 (2026-07-08)
### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [fd4ddcafed](https://github.com/angular/angular/commit/fd4ddcafed340dbc116df9718f03ee9e16c41c18) | fix | use regular optional chaining expression for safe function calls in TCBs |
### compiler-cli
| Commit | Type | Description |
| -- | -- | -- |
| [534fe81a89](https://github.com/angular/angular/commit/534fe81a8904408f252cbbbd90ca3e46bf5df3c9) | fix | apply debugName transform to required signal queries |
| [3b08201bfb](https://github.com/angular/angular/commit/3b08201bfb63227b9a30e7c40b966412496f115d) | fix | detect uninvoked signals in bound expressions using ternary |
### forms/signals
| Commit | Type | Description |
| -- | -- | -- |
| [171669f7b2](https://github.com/angular/angular/commit/171669f7b25343b10143cff04f69e2f46c6bf43f) | fix | make extractValue reactive for compat AbstractControl values |
### migrations
| Commit | Type | Description |
| -- | -- | -- |
| [0a6af1496b](https://github.com/angular/angular/commit/0a6af1496b0bc2e3685018124eba6128875a2102) | fix | preserve transitive NgModule references when pruning |
| [d4a926a762](https://github.com/angular/angular/commit/d4a926a7621e9c421e537377fffc78e553bb69a8) | fix | remove stale model import in model-output migration |
### router
| Commit | Type | Description |
| -- | -- | -- |
| [c238bd2ad7](https://github.com/angular/angular/commit/c238bd2ad7adf9cd5d74adda5a665b6481661a62) | fix | handle outlet named __proto__ in segment group maps |
| [8e6d7f7190](https://github.com/angular/angular/commit/8e6d7f71906e35181577b9e66474695ba3077599) | fix | use safe hasOwnProperty when parsing query params |

<!-- CHANGELOG SPLIT MARKER -->

<a name="22.0.5"></a>
# 22.0.5 (2026-07-01)
### common
| Commit | Type | Description |
| -- | -- | -- |
| [eb8fb9fe58](https://github.com/angular/angular/commit/eb8fb9fe58687fe0f341dc3beb5d0fb469605179) | fix | use Object.hasOwn in I18nSelectPipe to handle null-prototype and shadowed mappings |
### compiler-cli
| Commit | Type | Description |
| -- | -- | -- |
| [baf09a9939](https://github.com/angular/angular/commit/baf09a993945d3209f32cbe7b163a451409d31bb) | fix | include toSignal in debugName transform |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [e598dc843f](https://github.com/angular/angular/commit/e598dc843fb6d1f5a70f59448478c9d04bb28845) | fix | improve input writes migration in best effort mode |
| [ced0180b06](https://github.com/angular/angular/commit/ced0180b0641597c1af78471e82cc30d42117c88) | fix | reject dynamic script host elements |
### router
| Commit | Type | Description |
| -- | -- | -- |
| [ca13b42e7c](https://github.com/angular/angular/commit/ca13b42e7c459de8419d35b5c1bf6da4b0512476) | fix | fix malformed jsdoc comment for RouterLinkWithHref export |

<!-- CHANGELOG SPLIT MARKER -->

<a name="22.0.4"></a>
# 22.0.4 (2026-06-26)
### migrations
| Commit | Type | Description |
| -- | -- | -- |
| [fd37f09f37](https://github.com/angular/angular/commit/fd37f09f371184f6160ec7eb7fdf560eb9d77034) | fix | resolve migration failure when tsconfig specifies rootDir |

<!-- CHANGELOG SPLIT MARKER -->

<a name="22.0.3"></a>
# 22.0.3 (2026-06-25)
### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [f90c20df40](https://github.com/angular/angular/commit/f90c20df4064dcdc4fe63d3148e0d696a61f562c) | fix | account for NgModule dependencies in JIT-compiled partial declarations |
| [f4f7f3755c](https://github.com/angular/angular/commit/f4f7f3755cc74c7ee73da32a14d99cdb9265177c) | fix | remove unused import breaking CI in 22.0.x |
### compiler-cli
| Commit | Type | Description |
| -- | -- | -- |
| [06d854929c](https://github.com/angular/angular/commit/06d854929c31213df363274f80a64b9049f0310c) | fix | report diagnostic instead of crashing on malformed host binding |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [2799304259](https://github.com/angular/angular/commit/279930425910c804e369a04f8df3a259f16b8daf) | fix | avoid uncaught promise errors in injectAsync prefetching |
### http
| Commit | Type | Description |
| -- | -- | -- |
| [8cdc202dfc](https://github.com/angular/angular/commit/8cdc202dfcd45b95fdcabb2af3493571f57a4762) | fix | prevent caching of responses with Set-Cookie headers |
### service-worker
| Commit | Type | Description |
| -- | -- | -- |
| [b4a5a2fb4e](https://github.com/angular/angular/commit/b4a5a2fb4eb2b2ffb6e79170d453d55af2c72e73) | fix | preserve referrer in asset requests |
| [a16f9b2263](https://github.com/angular/angular/commit/a16f9b22633ef88f64517e18b29923c74da6bff6) | fix | preserve referrer policy in asset requests |
### upgrade
| Commit | Type | Description |
| -- | -- | -- |
| [bcc648f4b6](https://github.com/angular/angular/commit/bcc648f4b6dae63d600a9f1c40854940bf8442c7) | fix | support model() signals in downgradeComponent |

<!-- CHANGELOG SPLIT MARKER -->

<a name="22.0.2"></a>
# 22.0.2 (2026-06-17)
### common
| Commit | Type | Description |
| -- | -- | -- |
| [94ea403563](https://github.com/angular/angular/commit/94ea4035638db37e938831e3cb0e9562ca399475) | fix | escape anchor fragment in shadow DOM name selector |
| [6c1f3e9d49](https://github.com/angular/angular/commit/6c1f3e9d49907ef643f1bc5297ff404768017acf) | fix | skip transfer cache for uncacheable HTTP traffic ([#69316](https://github.com/angular/angular/pull/69316)) |
### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [6f1171991a](https://github.com/angular/angular/commit/6f1171991a1262b5384470f34029f7312dc4fc53) | fix | restrict possible event handler check to property names longer than 2 characters |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [528a34f766](https://github.com/angular/angular/commit/528a34f766191da3fc684c6fac988b1bd2028f49) | fix | avoid caching missing locale data |
| [e17e8d5422](https://github.com/angular/angular/commit/e17e8d542242333359946863d0272680c966325b) | fix | escape overlapping comment delimiters in escapeCommentText |
| [59dea13f80](https://github.com/angular/angular/commit/59dea13f802f0bf43c4ee2b65c2a1aa0e59a2a15) | fix | guard against DOM clobbering in declareExperimentalWebMcpTool |
| [3a48abc15c](https://github.com/angular/angular/commit/3a48abc15c038692a856c588c3037cd51e035f0b) | fix | preserve leave animation for sibling instances sharing a TNode |
| [93d0a5f95c](https://github.com/angular/angular/commit/93d0a5f95c9376272b5ebf71e94ff3ddb25a294d) | fix | prevent unsubscribe during emit from throwing off other listeners |
| [b32ee7ceb3](https://github.com/angular/angular/commit/b32ee7ceb3878d25ed58b7bbad58aaf3a01d9966) | fix | treat iframe credentialless as security-sensitive |
| [f902d1d35e](https://github.com/angular/angular/commit/f902d1d35e90e9220e40581fa2d7c4463b2d1190) | perf | detect existing signal dependency without checking all producer links |
### http
| Commit | Type | Description |
| -- | -- | -- |
| [6867f77ec7](https://github.com/angular/angular/commit/6867f77ec779a0a24f6339ad6c775f444202103c) | fix | distinguish repeated transfer cache params |
| [7ef1399068](https://github.com/angular/angular/commit/7ef139906802ddd98ce12ce99fdd8c11a684d87d) | fix | skip transfer cache for fetch credentialed requests ([#69316](https://github.com/angular/angular/pull/69316)) |
### migrations
| Commit | Type | Description |
| -- | -- | -- |
| [15314c1736](https://github.com/angular/angular/commit/15314c1736afd9cafb24518cd458768973169d24) | fix | migration skip any target are not build or test |

<!-- CHANGELOG SPLIT MARKER -->

<a name="22.0.1"></a>
# 22.0.1 (2026-06-10)
## Deprecations
### platform-server
- XHR support in `@angular/platform-server` is deprecated. Use standard `fetch` APIs instead.
  (cherry picked from commit 8446e46f8bc33bd4419fa7f6106b8d117ca2e099)
### common
| Commit | Type | Description |
| -- | -- | -- |
| [c4b5fa3c92](https://github.com/angular/angular/commit/c4b5fa3c9263ac127f5053c5a03dd4b6313659b8) | fix | escape CSS string-terminating characters in escapeCssUrl |
| [dfff57ede9](https://github.com/angular/angular/commit/dfff57ede93dbc51a7eeac3311ff2b1279595ee5) | fix | Limits date format string length |
| [3c2892c8df](https://github.com/angular/angular/commit/3c2892c8dffbbbe32940306b53779cc0c4e3f73c) | fix | prevent prototype pollution in formatDateTime |
| [1d87c49f6e](https://github.com/angular/angular/commit/1d87c49f6ee4aac27146f39ef370a87ba707a2c1) | fix | use cryptographically secure SHA-256 for transfer cache key generation |
### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [1ee224ca30](https://github.com/angular/angular/commit/1ee224ca30b9b5a7906b4f481135f1fb900fb3ce) | fix | disallow i18n event attributes |
| [a56f1cdf8f](https://github.com/angular/angular/commit/a56f1cdf8fa24e335409250798ee804d95eae136) | fix | more robust logic to check if regex can be optimized |
| [5946c18275](https://github.com/angular/angular/commit/5946c18275800539b2f47f80a573ee9312a45e8b) | fix | sanitize `href`/`xlink:href` attributes of any element of the MathML namespace |
| [393b84caf8](https://github.com/angular/angular/commit/393b84caf8bda05b31cfac014751deed142eb918) | fix | sanitize two-way properties |
### compiler-cli
| Commit | Type | Description |
| -- | -- | -- |
| [3d9ca2f173](https://github.com/angular/angular/commit/3d9ca2f1730689232f0ba1d6eddbd7dcedd1da39) | fix | bind switch exhaustive check expressions |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [669146b0e7](https://github.com/angular/angular/commit/669146b0e74ab1bed4196ccebe1c3608f52fd4f8) | fix | disable WebMCP during SSR |
| [562a566ead](https://github.com/angular/angular/commit/562a566eadfdec3d9708f1a5e03e7dd2821d3432) | fix | Handle synchronous errors in PendingTasks.run function |
| [fa546f382d](https://github.com/angular/angular/commit/fa546f382de10af46d0508733c6630ffe4bef328) | fix | harden TransferState restoration against DOM clobbering |
| [29fdb98684](https://github.com/angular/angular/commit/29fdb98684a57c99417efb5aac5a3b7f205e2c8f) | fix | prevent dangling prevConsumer reference from leaking destroyed views ([#68681](https://github.com/angular/angular/pull/68681)) |
| [cdcea80327](https://github.com/angular/angular/commit/cdcea80327e8984981144d99194d7b194da4889f) | fix | require WebMCP tool descriptions |
| [4289c4c840](https://github.com/angular/angular/commit/4289c4c8408056eb90cd25cdb76475d00de129d6) | fix | update comment for Default change detection |
| [3dd433b39a](https://github.com/angular/angular/commit/3dd433b39a66609412427f06162fb4ebc2b3e4aa) | fix | use Object.hasOwn to handle null-prototype objects in toStylingKeyValueArray |
| [045bb736b3](https://github.com/angular/angular/commit/045bb736b373a5a0301cde3a4469194404b289c5) | fix | validate lowercase SVG animation attribute names |
### forms
| Commit | Type | Description |
| -- | -- | -- |
| [11836a670a](https://github.com/angular/angular/commit/11836a670af5c64153d57a2d47b4688605379014) | fix | delay mcp reading the form model by a `tick` |
| [85d2d100e3](https://github.com/angular/angular/commit/85d2d100e38999f1342742573166c7af0f29b4bd) | fix | harden FormGroup control lookups against prototype shadowing |
| [e51ad374ea](https://github.com/angular/angular/commit/e51ad374ea628de33843332f6798635dc8af02ae) | fix | remove animationstart listener on component destroy to prevent memory leak |
| [55b7b5a6b6](https://github.com/angular/angular/commit/55b7b5a6b6324c1886eca8dbc492e6af5fc4cd7a) | fix | set `additionalProperties: false` on generated WebMCP form |
### http
| Commit | Type | Description |
| -- | -- | -- |
| [ffb06c0514](https://github.com/angular/angular/commit/ffb06c0514ace66e83160e544dec63f36340c297) | fix | ensure query parameters are inserted before URL fragments |
| [2dd65d21e6](https://github.com/angular/angular/commit/2dd65d21e656186cd2598a11dd51a34fcab2ecfe) | fix | pass down the `reportUploadProgress` and `reportDownloadProgress` on post/patch requests |
| [4254eb416c](https://github.com/angular/angular/commit/4254eb416c81570a6d3313711aaeba7817305320) | fix | preserve empty referrer option in HttpRequest |
| [167bd4c162](https://github.com/angular/angular/commit/167bd4c162d6af87cd207650bbc41d6c7a073c22) | fix | Rejects non-HTTP(S) URLs in JSONP requests |
### language-service
| Commit | Type | Description |
| -- | -- | -- |
| [43a0e28729](https://github.com/angular/angular/commit/43a0e2872908d1a614139317e8dfeb52d9f69f75) | fix | prevent external template inlay hints from appearing in TS files |
### platform-server
| Commit | Type | Description |
| -- | -- | -- |
| [ed48ca7f51](https://github.com/angular/angular/commit/ed48ca7f5108768c326ddc7ce51199dd575ced7a) | fix | harden platform location origin validation during SSR |
| [1881ede3a7](https://github.com/angular/angular/commit/1881ede3a791fca97350ffb3beadbe4e9fae8e73) | refactor | deprecate ServerXhr |
### router
| Commit | Type | Description |
| -- | -- | -- |
| [43edc8410f](https://github.com/angular/angular/commit/43edc8410f2ef9feed8efe1b52c509c167f72946) | fix | use native URL object for navigation boundary and comparison |
### service-worker
| Commit | Type | Description |
| -- | -- | -- |
| [cf97b1f828](https://github.com/angular/angular/commit/cf97b1f828e41df71c49fc19ed2e16d1cb4c3f34) | fix | Strips sensitive headers on cross-origin redirects |

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.2.17"></a>
# 21.2.17 (2026-06-10)
## Deprecations
### platform-server
- XHR support in `@angular/platform-server` is deprecated. Use standard `fetch` APIs instead.
### common
| Commit | Type | Description |
| -- | -- | -- |
| [86a56dc279](https://github.com/angular/angular/commit/86a56dc279e71159d09a073a3cb138f49131995b) | fix | Limits date format string length |
| [d846326b07](https://github.com/angular/angular/commit/d846326b071e0a4ab090e068d934b182926c6b15) | fix | skip transfer cache for uncacheable HTTP traffic |
| [bc55749698](https://github.com/angular/angular/commit/bc55749698ce3917160cd8e9f7108f3c5d1c0b32) | fix | use cryptographically secure SHA-256 for transfer cache key generation |
### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [dc9c99636d](https://github.com/angular/angular/commit/dc9c99636d3471ed5a3c5cda54b95f604cd2b9a4) | fix | sanitize two-way properties |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [1523061137](https://github.com/angular/angular/commit/152306113760e13196653699b42046d9f4129a37) | fix | harden TransferState restoration against DOM clobbering |
| [88832c84f8](https://github.com/angular/angular/commit/88832c84f8a3cd88d80adcde539a6f91a1f30b74) | fix | validate lowercase SVG animation attribute names ([#69269](https://github.com/angular/angular/pull/69269)) |
### http
| Commit | Type | Description |
| -- | -- | -- |
| [bcb1b7ea25](https://github.com/angular/angular/commit/bcb1b7ea2575b140f7bf202ad4f779e402cd6094) | fix | preserve empty referrer option in HttpRequest |
| [a810a319d1](https://github.com/angular/angular/commit/a810a319d10a8254307eb8f0598e7a888ce09ec0) | fix | Rejects non-HTTP(S) URLs in JSONP requests |
| [e245d40c4d](https://github.com/angular/angular/commit/e245d40c4d05665ab4814c594b8e0849b6e88a2d) | fix | skip transfer cache for fetch credentialed requests |
### platform-server
| Commit | Type | Description |
| -- | -- | -- |
| [35510746b7](https://github.com/angular/angular/commit/35510746b7d6b5c3de41de04c0586fc286c9e748) | fix | harden platform location origin validation during SSR |
| [13fb0afe93](https://github.com/angular/angular/commit/13fb0afe93b45e3c2383969f70d3ee1f0146ecfb) | refactor | deprecate ServerXhr ([#69255](https://github.com/angular/angular/pull/69255)) |
### service-worker
| Commit | Type | Description |
| -- | -- | -- |
| [b9d29381bb](https://github.com/angular/angular/commit/b9d29381bb4442164b19d9b7e0baa147a7b25629) | fix | Strips sensitive headers on cross-origin redirects |

<!-- CHANGELOG SPLIT MARKER -->

<a name="20.3.25"></a>
# 20.3.25 (2026-06-10)
## Deprecations
### platform-server
- XHR support in `@angular/platform-server` is deprecated. Use standard `fetch` APIs instead.
### common
| Commit | Type | Description |
| -- | -- | -- |
| [9f443bc24c](https://github.com/angular/angular/commit/9f443bc24c79dca998c9434d1e235dc19dc29bba) | fix | Limits date format string length |
| [566ad05f20](https://github.com/angular/angular/commit/566ad05f20732c38855353c3e73771ef9a34dadc) | fix | skip transfer cache for uncacheable HTTP traffic |
| [1a62130a6b](https://github.com/angular/angular/commit/1a62130a6bb313e4441f005e480768a360c71be5) | fix | use cryptographically secure SHA-256 for transfer cache key generation |
### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [a68ec702a0](https://github.com/angular/angular/commit/a68ec702a056a2706a152fce29081241fd276f12) | fix | sanitize two-way properties |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [768a349e6e](https://github.com/angular/angular/commit/768a349e6e54ff16deba4c1bfe12be9d0f55f443) | fix | harden TransferState restoration against DOM clobbering |
| [ca48b4728d](https://github.com/angular/angular/commit/ca48b4728d5f6770be63a08f64a6432207ad54c0) | fix | validate lowercase SVG animation attribute names ([#69270](https://github.com/angular/angular/pull/69270)) |
### http
| Commit | Type | Description |
| -- | -- | -- |
| [06be298267](https://github.com/angular/angular/commit/06be29826741212ca00e21efb6abff653e4541b5) | fix | preserve empty referrer option in HttpRequest |
| [fa940e1f4d](https://github.com/angular/angular/commit/fa940e1f4de75c33ccca50357d941be53a5a0950) | fix | Rejects non-HTTP(S) URLs in JSONP requests |
| [e2ef1ce72a](https://github.com/angular/angular/commit/e2ef1ce72ae084e01a76950c731052f4fa97fcdd) | fix | skip transfer cache for fetch credentialed requests |
### platform-server
| Commit | Type | Description |
| -- | -- | -- |
| [49368c1859](https://github.com/angular/angular/commit/49368c185907edb48467074c56e305abbfa3544a) | fix | harden platform location origin validation during SSR |
| [d55c94ad81](https://github.com/angular/angular/commit/d55c94ad811a15c9c255164a0d66892c645f602e) | refactor | deprecate ServerXhr ([#69256](https://github.com/angular/angular/pull/69256)) |
### service-worker
| Commit | Type | Description |
| -- | -- | -- |
| [d65a5f457b](https://github.com/angular/angular/commit/d65a5f457b1afd6bdd4d952d3f213c6aa1aabcbc) | fix | Strips sensitive headers on cross-origin redirects |

<!-- CHANGELOG SPLIT MARKER -->

<a name="22.0.0"></a>
# 22.0.0 (2026-06-03)

[Blog post "Announcing Angular v22"](https://goo.gle/angular-v22-blog).

## Breaking Changes
### compiler
- This change will trigger the `nullishCoalescingNotNullable` and `optionalChainNotNullable` diagnostics on exisiting projects.
  You might want to disable those 2 diagnotiscs in your `tsconfig` temporarily.
- data prefixed attribute no-longer bind inputs nor outputs.
- The compiler will throw when there a when inputs, outputs or model are binding to the same input/outputs.
- `in` variables will throw in template expressions.
### compiler-cli
- Elements with multiple matching selectors will now throw at compile time.
### core
- The second arguement of appRef.bootstrap does not accept `any` anymore. Make sure the element you pass is not nullable.
- * TypeScript versions older than 6.0 are no longer supported.
- Leave animations are no longer limited to the element being removed.
- Component with undefined `changeDetection` property are now `OnPush` by default. Specify `changeDetection: ChangeDetectionStrategy.Eager` to keep the previous behavior.
- change AnimationCallbackEvent.animationComplete signature
- `ChangeDetectorRef.checkNoChanges` was removed. In tests use `fixture.detectChanges()` instead.
- `createNgModuleRef` was removed, use `createNgModule` instead
- `ComponentFactoryResolver` and `ComponentFactory` are no longer available. Pass the component class directly to APIs that previously required a factory, such as `ViewContainerRef.createComponent` or use the standalone `createComponentFunction`.
- `ComponentFactoryResolver` and `ComponentFactory` are no longer available. Pass the component class directly to APIs that previously required a factory, such as `ViewContainerRef.createComponent` or use the standalone `createComponent` function.
### forms
- `min` and `max` validation rules no longer support
  string values. Bound values must be numbers or null.
### http
- Use the `HttpXhrBackend` with `provideHttpClient(withXhr)` if you want to keep supporting upload progress reports.
### platform-browser
- This removes styles when they appear to no longer be used by an associated `host`. However other DOM on the page may still be affected by those styles if not leveraging `ViewEncapsulation.Emulated` or if those styles are used by elements outside of Angular, potentially causing other DOM to appear unstyled.
- Hammer.js integration has been removed. Use your own implementation.
### router
- The return type for `TitleStrategy.getResolvedTitleForRoute`
  was previously 'any' while the actual return type could only be either `string`
  or `undefined`. The return type now reflects the possible values correctly.
  Code that reads the value may need to be adjusted.
  
  (cherry picked from commit ad37f52c1212164c51ffcc533067af05c2c33c89)
- The `currentSnapshot` parameter in `CanMatchFn` and the `canMatch` method of the `CanMatch` interface is now required. While this was already the behavior of the Router at runtime, existing class implementations of `CanMatch` must now include the third argument to satisfy the interface.
- paramsInheritanceStrategy now defaults to 'always'
  
  The default value of paramsInheritanceStrategy has been changed from 'emptyOnly' to 'always'. This means that route parameters are inherited from all parent routes by default. To restore the previous behavior, set paramsInheritanceStrategy to 'emptyOnly' in your router configuration.
- `provideRoutes()` has been removed. Use `provideRouter()` or `ROUTES` as multi token if necessary.
### upgrade
- Deprecated `getAngularLib`/`setAngularLib` have been removed use `getAngularJSGlobal`/`setAngularJSGlobal` instead.
## Deprecations
### http
- `withFetch` is now deprecated, it can be safely removed.
- The `reportProgress` option is deprecated please use `reportUploadProgress` &  `reportDownloadProgress` instead.
### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [47fcbc4704](https://github.com/angular/angular/commit/47fcbc470462192c4f9e273d8dce8b353d5baaa2) | feat | allow safe navigation to correctly narrow down nullables |
| [2896c93cc1](https://github.com/angular/angular/commit/2896c93cc1077e1306acd91f4ed62fed4204a26b) | feat | Angular expressions with optional chaining returns `undefined` |
| [e850643b1b](https://github.com/angular/angular/commit/e850643b1b8dca8cfdc12705be51441197cd987a) | feat | Support comments in html element. |
| [96be4f429b](https://github.com/angular/angular/commit/96be4f429ba316c75d2d4a39ececcc529ec10943) | fix | abstract emitter producing incorrect code for dynamic imports |
| [488d962bc7](https://github.com/angular/angular/commit/488d962bc700fb7189749c63ba63eac50a54e363) | fix | Don't bind inputs/outputs for `data-` attributes |
| [2c5aabb9da](https://github.com/angular/angular/commit/2c5aabb9daf5da3ad539381ef1e430c77583e3bf) | fix | don't escape dollar sign in literal expression |
| [c7aef8ec5d](https://github.com/angular/angular/commit/c7aef8ec5dd12b5b1d4c703a61bd1dd43f998e18) | fix | enforce parentheses containing arguments for :host-context |
| [b225a5d902](https://github.com/angular/angular/commit/b225a5d902f0ee1f6f68cde42266748cb1f2b1f8) | fix | invalid type checking code if field name needs to be quoted |
| [ab9154ab75](https://github.com/angular/angular/commit/ab9154ab75bdd36759c77917216b57285b243ea4) | fix | normalize tag names with custom namespaces in DomElementSchemaRegistry ([#68868](https://github.com/angular/angular/pull/68868)) |
| [8a1533c9ad](https://github.com/angular/angular/commit/8a1533c9ad7c306e03d7c50676f87b56bade5bf6) | fix | preserve leading commas in animation definitions |
| [194f723f66](https://github.com/angular/angular/commit/194f723f6620ea3cdf490b762ecbef8df6bb2c8a) | fix | remove dedicated support for legacy shadow DOM selectors |
| [4c25a42e98](https://github.com/angular/angular/commit/4c25a42e988e7a59d4d4dc3121cd77f7b344c048) | fix | remove deprecated shadow CSS encapsulation polyfills |
| [6ff620a033](https://github.com/angular/angular/commit/6ff620a03364d6ab60cea47de942a04ec5a26c50) | fix | sanitize dynamic href and xlink:href bindings on SVG a elements ([#68868](https://github.com/angular/angular/pull/68868)) |
| [7dc1017e51](https://github.com/angular/angular/commit/7dc1017e517c077a6aa8fd749392a2af1277e1b7) | fix | simplify handling of colon host with a selector list |
| [d99ab0e040](https://github.com/angular/angular/commit/d99ab0e0400d256021d6cc601e2a6e16f784a406) | fix | stop generating unused field |
| [03db2aefaa](https://github.com/angular/angular/commit/03db2aefaa88bc73b6af6ed1c9c722b65079ab3b) | fix | throw on duplicate input/outputs |
| [786ef8261f](https://github.com/angular/angular/commit/786ef8261f4faca0693ef73938d3a6275b5baf7f) | fix | throw on invalid in expressions |
| [ccb7d427e4](https://github.com/angular/angular/commit/ccb7d427e4f07506c14c50ce0cbe87c57930ebb5) | fix | type check invalid for loops |
### compiler-cli
| Commit | Type | Description |
| -- | -- | -- |
| [b8d3f36ed9](https://github.com/angular/angular/commit/b8d3f36ed962bd4f5abd6bf6e55078b56ce9fffa) | feat | add support for Node.js 26.0.0 |
| [7f9450219f](https://github.com/angular/angular/commit/7f9450219f5c30d1ce0a90061864e8c844c8807c) | feat | Adds warning for prefetch without main defer trigger |
| [2eae497a04](https://github.com/angular/angular/commit/2eae497a04a6a9b34397181dcd64dbd103f76c47) | feat | support external TCBs with copied content in specific mode |
| [e5f96c2d88](https://github.com/angular/angular/commit/e5f96c2d8813f95c91761ae3080065575ca3b536) | fix | animation events not type checked properly when bound through HostListener decorator |
| [9218140348](https://github.com/angular/angular/commit/9218140348cb2e3ad301c1e7f37db4b0cdad4f9d) | fix | resolve TCB mapping failure for safe property reads with as any |
| [7a0d6b8df2](https://github.com/angular/angular/commit/7a0d6b8df21ca6a407e5c63dc0af753bc39c90c5) | fix | transform dropping exclamationToken from properties |
| [ca67828ee2](https://github.com/angular/angular/commit/ca67828ee247bdff46736661e51f43f2ca736a24) | refactor | introduce NG8023 compile-time diagnostic for duplicate selectors |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [17d3ea44e2](https://github.com/angular/angular/commit/17d3ea44e25e077b18178aa8108828f36eb821f4) | feat | add `IdleRequestOptions` support to `IdleService` |
| [3b0ae5fef0](https://github.com/angular/angular/commit/3b0ae5fef0328477ee0f5d51980217e7c583a606) | feat | add `provideWebMcpTools` |
| [444b024d49](https://github.com/angular/angular/commit/444b024d49725afc8b40aec67cfdb63a1f7f23ea) | feat | Add a `injectAsync` helper function |
| [3bc095d508](https://github.com/angular/angular/commit/3bc095d508653982a48b337afd51bfedbbde1f87) | feat | Add a schematics to migrate `provideHttpClient` to keep using the `HttpXhrBackend` implementation. |
| [5a7c1e62dc](https://github.com/angular/angular/commit/5a7c1e62dc2a4fa199b85150eca66914c107a6f4) | feat | add ability to cache resources for SSR |
| [cb4cb77053](https://github.com/angular/angular/commit/cb4cb77053a817fe800af6395783720761e29ada) | feat | Add migration to add `ChangeDetectionStrategy.Eager` where applicable |
| [2206efa55f](https://github.com/angular/angular/commit/2206efa55fc1de160333d62680f8893c47525335) | feat | add special return statuses for resource params |
| [246a984a5d](https://github.com/angular/angular/commit/246a984a5df0006bc5f4025baf918345aa38499c) | feat | add TestBed.getFixture |
| [b918beda32](https://github.com/angular/angular/commit/b918beda323eefef17bf1de03fde3d402a3d4af0) | feat | allow debouncing signals |
| [8bc31a515f](https://github.com/angular/angular/commit/8bc31a515ff6e8edda6ea5786a47ae5a788acd36) | feat | Allow other expression for exhaustive typechecking |
| [4e331062e8](https://github.com/angular/angular/commit/4e331062e8385e066102c3bbb8be439eabfdf8c9) | feat | allow synchronous values for stream Resources |
| [a0aa8304cd](https://github.com/angular/angular/commit/a0aa8304cd78a58a990c3b648e41f6888b50b1b3) | feat | bootstrap via `ApplicationRef` with config |
| [9c55fcb3e6](https://github.com/angular/angular/commit/9c55fcb3e65ffcde32d7ac438ea40a69ffc2b3b6) | feat | de-duplicate host directives |
| [8fe025f514](https://github.com/angular/angular/commit/8fe025f5149d7eb460e784a5a17bb467f85b9080) | feat | drop support for TypeScript 5.9 |
| [2f5ab541ea](https://github.com/angular/angular/commit/2f5ab541eafba72bc0079a8650d0b96b0ddfde2f) | feat | enhance profiling with documentation URLs |
| [ef1810197b](https://github.com/angular/angular/commit/ef1810197b679bfcbf21a139b930984302cbe77f) | feat | export experimental `declareWebMcpTool` support |
| [75f2cb8f56](https://github.com/angular/angular/commit/75f2cb8f566de43a5f2fd27bb2982c796b93490d) | feat | implement Angular DI graph in-page AI tool |
| [8f3d0b9d97](https://github.com/angular/angular/commit/8f3d0b9d97424e058eb7bce57d80833fb68dec4a) | feat | introduce `@Service` decorator |
| [df659b8d0c](https://github.com/angular/angular/commit/df659b8d0cf64eeed418c60bc16cae5630086401) | feat | re-introduce nested leave animations scoped to component boundaries |
| [8ce9cc4f6b](https://github.com/angular/angular/commit/8ce9cc4f6b10d60300dedb6571822ce77a96f2ce) | feat | register AI runtime debugging tools |
| [eae8f7e30b](https://github.com/angular/angular/commit/eae8f7e30b9f8bebdcdb535bd86260199c34274b) | feat | Set default Component changeDetection strategy to OnPush |
| [cdda51a3b2](https://github.com/angular/angular/commit/cdda51a3b2f48d5623acef0c6f54afb7af921b58) | feat | support bootstrapping Angular applications underneath shadow roots |
| [a5981b83a6](https://github.com/angular/angular/commit/a5981b83a60577d9068d2429bcbed969edca581b) | feat | support customization of @defer's on idle behavior |
| [98eb24cea0](https://github.com/angular/angular/commit/98eb24cea0498382cc7cf7d7b85cd9ead5ad99ad) | feat | Support optional timeout for idle deferred triggers |
| [dc3131c639](https://github.com/angular/angular/commit/dc3131c639542ad6a463bff3da5ca84c6f8ecb6f) | feat | TestBed.getFixture -> TestBed.getLastFixture and update implementation |
| [9f479ae964](https://github.com/angular/angular/commit/9f479ae9641a5c928f8eeab9c7846245002b3eff) | feat | Update Testability to use PendingTasks for stability indicator |
| [8ebae1de33](https://github.com/angular/angular/commit/8ebae1de330729f945391283e25661aada11b4ed) | fix | allow service with factory on abstract classes |
| [f9d8da6924](https://github.com/angular/angular/commit/f9d8da69243ae1cd0eb1ab197fdd80e9a34107c1) | fix | bind global context to idle callback shims in @defer's idle service |
| [61a48e99aa](https://github.com/angular/angular/commit/61a48e99aad1152e9ffb2fd0b4e1b472f06649e8) | fix | do not register dom triggers when defer blocks are in manual mode |
| [49748b5c79](https://github.com/angular/angular/commit/49748b5c7989b4e27686798ea7935e87d804eece) | fix | enforce return type for service factory |
| [16adbbf423](https://github.com/angular/angular/commit/16adbbf4234cc67507f578e588a8500fc5d31013) | fix | ensure custom controls resolve transitive host directives |
| [50e599e73e](https://github.com/angular/angular/commit/50e599e73ec5bb8f483e749d76fff579e33b1670) | fix | lazy-initialize debounced state to prevent computation cycle |
| [7aad302c3e](https://github.com/angular/angular/commit/7aad302c3ee6e9c711ab10ae0a9e8bc66d35291c) | fix | mark service decorator as stable |
| [a08e4fb93c](https://github.com/angular/angular/commit/a08e4fb93c371252da16b3b22cbf78f4ac180fa2) | fix | normalize tag names in runtime i18n attribute security context lookup ([#68868](https://github.com/angular/angular/pull/68868)) |
| [b20f0fe078](https://github.com/angular/angular/commit/b20f0fe07820362f7e3bddb892a2a229a820a028) | fix | prevent rxResource from leaking a subscription |
| [22f8b0a500](https://github.com/angular/angular/commit/22f8b0a500807e69b323378b843465a949e08abf) | fix | resolver function not matching expected type |
| [88d138ccc8](https://github.com/angular/angular/commit/88d138ccc84b839784f59575fddcda3fcaf18d35) | fix | support prefix-insensitive DOM schema lookups and compile-time i18n attribute validation |
| [bfe6f6c2a5](https://github.com/angular/angular/commit/bfe6f6c2a5570cd669afa3dd8b1cd9e2d91e393a) | fix | synchronize core sanitization schema with compiler |
| [5e99ae9f00](https://github.com/angular/angular/commit/5e99ae9f00fb119cac93a19bbf36aee71299cae1) | fix | widen type for directive inputs/outputs |
| [b9b5c279b4](https://github.com/angular/angular/commit/b9b5c279b444ab2684fe911982930dc7c31ed43c) | refactor | enhance AnimationCallbackEvent.animationComplete signature |
| [69fb1614ef](https://github.com/angular/angular/commit/69fb1614eff6e40bb7dcca81f275ac32b9cbd28a) | refactor | remove `checkNoChanges` from the public API. |
| [36936872c9](https://github.com/angular/angular/commit/36936872c962b2073c8f44080684701068866691) | refactor | remove `createNgModuleRef` |
| [9d76ac8229](https://github.com/angular/angular/commit/9d76ac82290e047f1481fb38bd95233e951a77de) | refactor | remove ComponentFactoryResolver & ComponentFactory from the api surface |
| [b1f5181ffd](https://github.com/angular/angular/commit/b1f5181ffd8e9906affd486d9e2f655eb144f175) | refactor | remove ComponentFactoryResolver & ComponentFactory from the api surface"" |
### forms
| Commit | Type | Description |
| -- | -- | -- |
| [74f76d8075](https://github.com/angular/angular/commit/74f76d8075d03b1271aef37b974c9e15f9c7d3af) | feat | add `reloadValidation` to Signal Forms to manually trigger async validation |
| [24e52d450d](https://github.com/angular/angular/commit/24e52d450d201e3da90bb64f84358f9eccd7877d) | feat | add debounce option to validateAsync and validateHttp |
| [709f5a390c](https://github.com/angular/angular/commit/709f5a390ca0de04f8066012a5cb36999f2fd4a6) | feat | add FieldState.getError() |
| [7745365910](https://github.com/angular/angular/commit/7745365910771d97c91e9b640c2c26a99bfa5a6d) | feat | graduate signal forms APIs to public API |
| [f9f24fc669](https://github.com/angular/angular/commit/f9f24fc6699b762d17127d0412343041ecdea70e) | feat | shim legacy NG_VALIDATORS into parseErrors for CVA mode ([#67943](https://github.com/angular/angular/pull/67943)) |
| [41b1410cb8](https://github.com/angular/angular/commit/41b1410cb8a333a2ce6569483cd10866effc154d) | feat | support binding `number|null` to `<input type="text">` |
| [3983080236](https://github.com/angular/angular/commit/3983080236e348ecc17ab4e65a6a5cc0a16aa315) | feat | support ngNoCva as an opt-out for ControlValueAccessors |
| [c4ce3f345f](https://github.com/angular/angular/commit/c4ce3f345fdb14595f0991dff488c4043a0fc71c) | feat | template & reactive support for FVC |
| [3524de29f3](https://github.com/angular/angular/commit/3524de29f34bef5df941e08e88920dffe4f880c8) | fix | Add support for range type with outside of native bounds |
| [de56d74da3](https://github.com/angular/angular/commit/de56d74da39178308b81a2d94c8eb4488cb0cbab) | fix | align FormField CVA selection priority with standard forms |
| [0eeb1b5f03](https://github.com/angular/angular/commit/0eeb1b5f03395ea0ddb047790af4cf1440655a07) | fix | allow `FormRoot` to be used without submission options ([#67727](https://github.com/angular/angular/pull/67727)) |
| [394ad0c2a2](https://github.com/angular/angular/commit/394ad0c2a26eec8a8f7136b1b7971420b30a117e) | fix | allow late-bound input types for signals forms |
| [ee8d2098cb](https://github.com/angular/angular/commit/ee8d2098cb3cdce1589c462cd9a66eae490477f9) | fix | change FieldState optional properties to non-optional | undefined |
| [df8b020299](https://github.com/angular/angular/commit/df8b020299b5e579956578d9137cab93a8065045) | fix | clear native date inputs correctly in signal forms when changed via native UI |
| [2e9aeea0fe](https://github.com/angular/angular/commit/2e9aeea0fed1a2eae261b95cb1479519d0428b83) | fix | deduplicate writeValue calls in CVA interop |
| [0ea50ffe5a](https://github.com/angular/angular/commit/0ea50ffe5adb07515867e8bf30d1abee49413003) | fix | ensure debounced async validators produce pending status during debounce |
| [3c44d7c90b](https://github.com/angular/angular/commit/3c44d7c90b2392f7307d1b1dd0734db10ede63f5) | fix | fix orphan field error on blur during array removal |
| [849dba6c65](https://github.com/angular/angular/commit/849dba6c6506c2696a43a3fad6ee459e17b4b6c8) | fix | implement custom control reset propagation |
| [5835a5e3a7](https://github.com/angular/angular/commit/5835a5e3a73686473ad064f53f93d9d9acb541a6) | fix | prevent orphan field crashes in debounceSync and async validation |
| [3e7ce0dafc](https://github.com/angular/angular/commit/3e7ce0dafcf1c0b9ed7a8c528f7120f5c796a668) | fix | restrict `SignalFormsConfig` to a readonly API |
| [fb166772d2](https://github.com/angular/angular/commit/fb166772d2e987c0145bdd5bbe83b2a29d74f31c) | fix | split the `touched` model into an input and `touch` output |
| [83032e3605](https://github.com/angular/angular/commit/83032e36059ad0fc61cde2ac26c1eb0cede14e8c) | fix | support generic unions in signal form schemas |
| [68c3abbe09](https://github.com/angular/angular/commit/68c3abbe09f1937081b83af3c7d82ed1a044974f) | fix | synchronize controls with the model on reset |
| [2061fd8253](https://github.com/angular/angular/commit/2061fd8253882a46336aae8d73a79a1b176449e0) | fix | Untrack `setValue` in reactive forms |
| [72d3ace03c](https://github.com/angular/angular/commit/72d3ace03c1292ba9d6fdf7b418ba3287bf54316) | fix | use controlValue in NgControl for CVA interop ([#67943](https://github.com/angular/angular/pull/67943)) |
| [3b4ef1e2ff](https://github.com/angular/angular/commit/3b4ef1e2ffa7f33583b9d6c5d927e2148a507921) | perf | avoid redundant invalidations in parser errors signal |
| [07a9358157](https://github.com/angular/angular/commit/07a935815782eb58a2109bcaacde33896e8d5d76) | perf | avoid spurious recomputation in FormField.parseErrors |
| [98c5afdb02](https://github.com/angular/angular/commit/98c5afdb02192f99c886fc3fda13ec6f39018f23) | perf | lazily instantiate signal form fields |
| [e0536091f5](https://github.com/angular/angular/commit/e0536091f5f6c2033e377998eea3bf65b14f5ac6) | perf | optimize reactivity by using shallow array equality |
| [9b9769479b](https://github.com/angular/angular/commit/9b9769479b295bf34bae9a938ee758a256bd4b32) | perf | shortcut deepSignal writes if value is unchanged |
| [592a12d6c9](https://github.com/angular/angular/commit/592a12d6c947a0210020b00fd98ffa9fdaca2c20) | refactor | remove string support from min and max validation rules ([#68001](https://github.com/angular/angular/pull/68001)) |
### http
| Commit | Type | Description |
| -- | -- | -- |
| [5c432fb8bb](https://github.com/angular/angular/commit/5c432fb8bb69343ef2633811c37c0c6c0fd65126) | feat | Use `FetchBackend` as default for the `HttpBackend` implementation |
| [f7b3ed8db2](https://github.com/angular/angular/commit/f7b3ed8db28c69ee0de9144465da351bda7e85e4) | fix | Introduce a max buffer size for fetch requests on SSR |
| [e6cfaf5672](https://github.com/angular/angular/commit/e6cfaf567256f5e89903f6b5625540e5a4a3bde3) | fix | prevent `httpResource` from leaking a subscription |
| [7c8c3347ef](https://github.com/angular/angular/commit/7c8c3347efc1be2b5967b9481e3a2a3a23c24977) | refactor | Add `reportUploadProgress` &  `reportDownloadProgress` options |
### language-service
| Commit | Type | Description |
| -- | -- | -- |
| [5a6d88626b](https://github.com/angular/angular/commit/5a6d88626b604db937287a501cb723c088412a7e) | feat | add angular template inlay hints support |
| [cfd0f9950c](https://github.com/angular/angular/commit/cfd0f9950c08324e1c56f16d98a2e3081feeda58) | feat | add Document Symbols support for Angular templates |
| [c6f98c723c](https://github.com/angular/angular/commit/c6f98c723cdd2c209092927855f8cbaf63ecce30) | feat | Add support for idle timeout in defer blocks |
| [dc9c72da9b](https://github.com/angular/angular/commit/dc9c72da9b4ca499eebf6e78d7ccc31ea6f63580) | fix | Add support for `@Input` with transforms |
### migrations
| Commit | Type | Description |
| -- | -- | -- |
| [8216d34976](https://github.com/angular/angular/commit/8216d349768687ed0cf9ef6e1d737e7db9c9e28b) | feat | Add migration for CanMatchFn snapshot parameter ([#67452](https://github.com/angular/angular/pull/67452)) |
| [682aaf943f](https://github.com/angular/angular/commit/682aaf943fea3d99f9f834b0bad4d165b4b28071) | feat | add strictTemplates to tsconfig during ng update |
| [6a435658e2](https://github.com/angular/angular/commit/6a435658e25f9c81ddeaaa72d9c9694fc02bbef1) | feat | Disabling nullishCoalescingNotNullable & optionalChainNotNullable on ng update |
| [8f8972b0fd](https://github.com/angular/angular/commit/8f8972b0fdea2020800e7df5c6d85938602cb7e7) | feat | model + output migrations |
| [f01901d766](https://github.com/angular/angular/commit/f01901d7668ab926bd7a786f43dbb18f2bb8a5b7) | fix | avoid generating invalid code in ChangeDetectionStrategy.Eager migration |
| [1415d86980](https://github.com/angular/angular/commit/1415d869804729e50ed4bcdc829da870b4a70206) | fix | Fix typo for strict-template migration |
| [9d9855a415](https://github.com/angular/angular/commit/9d9855a41597c116ca102e672867047ddf7b4545) | fix | Make the safe optional chaining idempotent |
| [0f2160c410](https://github.com/angular/angular/commit/0f2160c4105a53ef6488d2c799dda9c0959ce7dc) | fix | remove compiler import from safe optional chaining migration |
### platform-browser
| Commit | Type | Description |
| -- | -- | -- |
| [68628dd45b](https://github.com/angular/angular/commit/68628dd45bfcf4ea33bc00798bab1e4ab9da804c) | feat | make incremental hydration default behavior |
| [d45b7a91f9](https://github.com/angular/angular/commit/d45b7a91f961ee40e3ea0f0ae837bf543bddb520) | fix | remove unused styles when associated `host` is dropped |
| [f99e7ed20f](https://github.com/angular/angular/commit/f99e7ed20f0b1a26fd275fcf5befd589bb4e5d31) | refactor | remove Hammer integration |
### router
| Commit | Type | Description |
| -- | -- | -- |
| [89c9a4de30](https://github.com/angular/angular/commit/89c9a4de308a087ce95246ee259f32c8a927e39e) | feat | Add `options` optional parameter for `withComponentInputBinding` |
| [c84642ac16](https://github.com/angular/angular/commit/c84642ac16bf3588c071bbdcc684daa8d4e494b3) | feat | add unmatchedInputBehavior option to componentInputBinding |
| [3683902234](https://github.com/angular/angular/commit/3683902234acf74c7047337bda4db937e93f93d7) | feat | adds browserUrl input support to router links |
| [3e7117d690](https://github.com/angular/angular/commit/3e7117d690386b079c18b435545dab96fc183305) | fix | Add strict typing on 'getResolvedTitleForRoute' |
| [579440170b](https://github.com/angular/angular/commit/579440170b372f8348cf3e5b5ce9f9f430093947) | fix | make currentSnapshot required in CanMatchFn ([#67452](https://github.com/angular/angular/pull/67452)) |
| [17d10f7a99](https://github.com/angular/angular/commit/17d10f7a9921429d0192df6925d20d7236425c9a) | fix | set default paramsInheritanceStrategy to 'always' |
| [bdb6ae9dbc](https://github.com/angular/angular/commit/bdb6ae9dbc080cd6ce4f5058c65f6b2bd853beda) | refactor | remove deprecated `provideRoutes` function. |
### service-worker
| Commit | Type | Description |
| -- | -- | -- |
| [836094c072](https://github.com/angular/angular/commit/836094c072cb0f6cdbd35469ee02158667a9ba51) | fix | resolve TS 6.0 compatibility for messageerror listener |
### upgrade
| Commit | Type | Description |
| -- | -- | -- |
| [01a179577b](https://github.com/angular/angular/commit/01a179577b5a250f5801f6d9a04378aea73c4251) | refactor | remove `getAngularLib`/`setAngularLib` |

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.2.16"></a>
# 21.2.16 (2026-06-03)
### common
| Commit | Type | Description |
| -- | -- | -- |
| [f6d8e642b0](https://github.com/angular/angular/commit/f6d8e642b0b215d2f9dbf1060abd24348c6cbf66) | fix | only strip a literal /index.html suffix from URLs |
### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [ae1c8a1f7a](https://github.com/angular/angular/commit/ae1c8a1f7a7f1d4832da3b22e3763864fa5ff098) | fix | move projection attributes into constants |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [3fd6897a67](https://github.com/angular/angular/commit/3fd6897a67fd6acdc01fcde0452a98c3e0f81e21) | fix | harden inherit definition feature against polluted prototypes |
| [7e38336dc7](https://github.com/angular/angular/commit/7e38336dc73e14d98cc6465f54e1b7d6271facb2) | fix | use Object.create(null) for LOCALE_DATA as a hardening measure |
### platform-server
| Commit | Type | Description |
| -- | -- | -- |
| [66821c4ed5](https://github.com/angular/angular/commit/66821c4ed5f580912a1609fc1e06a86f8793c2cf) | fix | throw on suspicious URLs and restrict protocol-relative URLs |
| [d3170031b6](https://github.com/angular/angular/commit/d3170031b6f35508f960cba18586843925bb61ec) | fix | update domino to latest version |

<!-- CHANGELOG SPLIT MARKER -->

<a name="19.2.25"></a>
# 19.2.25 (2026-06-02)
### platform-server
| Commit | Type | Description |
| -- | -- | -- |
| [e2fb854d55](https://github.com/angular/angular/commit/e2fb854d55484c87ec6b3d5e9e2e512325b389dc) | fix | throw on suspicious URLs and restrict protocol-relative URLs |
| [0a8befb493](https://github.com/angular/angular/commit/0a8befb493e6defe033e7dabfd6462d6378c1f81) | fix | update domino to latest version |

<!-- CHANGELOG SPLIT MARKER -->

<a name="20.3.24"></a>
# 20.3.24 (2026-06-02)
### platform-server
| Commit | Type | Description |
| -- | -- | -- |
| [6ca433e56b](https://github.com/angular/angular/commit/6ca433e56bcf74fdb6ad01d3afdf59628fba69b6) | fix | throw on suspicious URLs and restrict protocol-relative URLs |
| [8680b5152f](https://github.com/angular/angular/commit/8680b5152fe58ebde81e331b74ba806fc86514cc) | fix | update domino to latest version |

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.2.15"></a>
# 21.2.15 (2026-05-28)
### common
| Commit | Type | Description |
| -- | -- | -- |
| [7f4ac78994](https://github.com/angular/angular/commit/7f4ac78994bff1576ab33f3ce48f95c17f40b4d8) | fix | add upper bounds for digitsInfo |
| [300f61feb3](https://github.com/angular/angular/commit/300f61feb3a534bfddf16fcbd240f97b32249699) | fix | sanitize placeholder |
### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [0b07f47bd6](https://github.com/angular/angular/commit/0b07f47bd6598ae6bd5b75a375e2c817a3c0f243) | fix | normalize tag names with custom namespaces in DomElementSchemaRegistry ([#68925](https://github.com/angular/angular/pull/68925)) |
| [eb1cbbf2eb](https://github.com/angular/angular/commit/eb1cbbf2eb5833219a367a61c04eb07aaa36cc29) | fix | prevent namespaced SVG <style> elements from being stripped |
| [cc1378d54b](https://github.com/angular/angular/commit/cc1378d54bd93f3882d732261be8e66720eb71b2) | fix | sanitize dynamic href and xlink:href bindings on SVG a elements ([#68925](https://github.com/angular/angular/pull/68925)) |
| [782e01594e](https://github.com/angular/angular/commit/782e01594e2ad9134c7385dcf3b518101b23ccab) | fix | strip namespaced SVG script elements during template compilation ([#68925](https://github.com/angular/angular/pull/68925)) |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [ff12fe55ac](https://github.com/angular/angular/commit/ff12fe55ace5e861ba261afb4c0480ff3c40a192) | fix | normalize tag names in runtime i18n attribute security context lookup ([#68925](https://github.com/angular/angular/pull/68925)) |
| [e6fe77cc97](https://github.com/angular/angular/commit/e6fe77cc97fd10351687416f938bf754aff4eb9f) | fix | sanitize meta selectors |
| [daaf32937f](https://github.com/angular/angular/commit/daaf32937fd5c46e411b26f7c082613716fe9550) | fix | support prefix-insensitive DOM schema lookups and compile-time i18n attribute validation ([#68925](https://github.com/angular/angular/pull/68925)) |
| [dada86e43d](https://github.com/angular/angular/commit/dada86e43d847204f714d1a933084617ab941c0a) | fix | synchronize core sanitization schema with compiler ([#68925](https://github.com/angular/angular/pull/68925)) |
### http
| Commit | Type | Description |
| -- | -- | -- |
| [582a417bd2](https://github.com/angular/angular/commit/582a417bd27fdaf989e5065dbcdf1ad752faf70c) | fix | exclude withCredentials requests from transfer cache |
| [5c6d6df34b](https://github.com/angular/angular/commit/5c6d6df34bbeff3ce98f3b35875444f925cc8f51) | fix | skip TransferCache for cookie-bearing requests by default |
### platform-server
| Commit | Type | Description |
| -- | -- | -- |
| [37e8aadf87](https://github.com/angular/angular/commit/37e8aadf87b4facfcaf002a1557f8c393a362d97) | fix | prevent SSRF bypasses via backslash URLs in HttpClient |
| [72696e244e](https://github.com/angular/angular/commit/72696e244ed7646cca9ab9afc7769a2163943bda) | fix | secure location and document initialization against SSRF and path hijack |
### service-worker
| Commit | Type | Description |
| -- | -- | -- |
| [b8bd49341d](https://github.com/angular/angular/commit/b8bd49341ddcee10d119a9d4aa8e5736e4e5da53) | fix | Preserves explicit 'credentials: omit' in asset requests |
| [ca32fc1000](https://github.com/angular/angular/commit/ca32fc10001301e6174804f9abcfba62252334f4) | fix | Preserves HTTP cache mode in asset group requests |

<!-- CHANGELOG SPLIT MARKER -->

<a name="19.2.24"></a>
# 19.2.24 (2026-05-28)
### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [6ea6379123](https://github.com/angular/angular/commit/6ea6379123a7b0e191f8b9f66dfb74ca29659a6c) | fix | prevent namespaced SVG <style> elements from being stripped |

<!-- CHANGELOG SPLIT MARKER -->

<a name="20.3.23"></a>
# 20.3.23 (2026-05-28)
### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [d40acc6431](https://github.com/angular/angular/commit/d40acc6431997b304ec54c951e55d2e52ed6f6dc) | fix | prevent namespaced SVG <style> elements from being stripped |

<!-- CHANGELOG SPLIT MARKER -->

<a name="20.3.22"></a>
# 20.3.22 (2026-05-27)
### common
| Commit | Type | Description |
| -- | -- | -- |
| [3d135ce59b](https://github.com/angular/angular/commit/3d135ce59bbf7426825bc493bc681f266846ac79) | fix | add upper bounds for digitsInfo |
| [39a4b4cc8e](https://github.com/angular/angular/commit/39a4b4cc8e8d101a566a70658707bc9f53dd5883) | fix | sanitize placeholder |
### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [8f35b182b1](https://github.com/angular/angular/commit/8f35b182b1479ed80d652f185c2c3ee5a82ea34c) | fix | normalize tag names with custom namespaces in DomElementSchemaRegistry ([#68926](https://github.com/angular/angular/pull/68926)) |
| [64a89e917a](https://github.com/angular/angular/commit/64a89e917a0794a3d74713bdb4c9c63d703b317b) | fix | sanitize dynamic href and xlink:href bindings on SVG a elements ([#68926](https://github.com/angular/angular/pull/68926)) |
| [6404edfe0a](https://github.com/angular/angular/commit/6404edfe0af3f27cb96737e72907553fb924d88a) | fix | strip namespaced SVG script elements during template compilation ([#68926](https://github.com/angular/angular/pull/68926)) |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [e345a58069](https://github.com/angular/angular/commit/e345a58069ede97250af449f5b7e9b94f828d30c) | fix | normalize tag names in runtime i18n attribute security context lookup ([#68926](https://github.com/angular/angular/pull/68926)) |
| [d86e4e7b2a](https://github.com/angular/angular/commit/d86e4e7b2ad0e667aeb0f8ed053e2cb2bd154b81) | fix | reject script element as a dynamic component host ([#68926](https://github.com/angular/angular/pull/68926)) |
| [af04936045](https://github.com/angular/angular/commit/af04936045707dc871e135ebb7b8cd357ac154df) | fix | sanitize meta selectors |
| [dc631efa96](https://github.com/angular/angular/commit/dc631efa96e787bee1277f324208f21c36c1fa71) | fix | support prefix-insensitive DOM schema lookups and compile-time i18n attribute validation ([#68926](https://github.com/angular/angular/pull/68926)) |
| [909ef047b3](https://github.com/angular/angular/commit/909ef047b3f93b44a7ba390332707239af2f73fe) | fix | synchronize core sanitization schema with compiler ([#68926](https://github.com/angular/angular/pull/68926)) |
### http
| Commit | Type | Description |
| -- | -- | -- |
| [de7b2a62e7](https://github.com/angular/angular/commit/de7b2a62e7eded747c2a520c177cd41f60a96dcd) | fix | exclude withCredentials requests from transfer cache |
| [4233188d8e](https://github.com/angular/angular/commit/4233188d8e70283190ea87dbaa5a872269291b4a) | fix | skip TransferCache for cookie-bearing requests by default |
### platform-server
| Commit | Type | Description |
| -- | -- | -- |
| [49a60f6045](https://github.com/angular/angular/commit/49a60f60451a0772fb5de9e231a1872081b0467f) | fix | secure location and document initialization against SSRF and path hijack |
### service-worker
| Commit | Type | Description |
| -- | -- | -- |
| [5fdfd8a998](https://github.com/angular/angular/commit/5fdfd8a9983c2a19415afe26c03ffd544278a28f) | fix | preserve redirect policy on reconstructed asset requests |
| [83b022f2d0](https://github.com/angular/angular/commit/83b022f2d063b6b3171c2621f3d52c11971aacff) | fix | Preserves explicit 'credentials: omit' in asset requests |
| [e617fa06eb](https://github.com/angular/angular/commit/e617fa06ebad6e8495ff8f662805a24df73a78d4) | fix | Preserves HTTP cache mode in asset group requests |

<!-- CHANGELOG SPLIT MARKER -->

<a name="19.2.23"></a>
# 19.2.23 (2026-05-27)
### common
| Commit | Type | Description |
| -- | -- | -- |
| [62dd27d6af](https://github.com/angular/angular/commit/62dd27d6afe4bfd9d4fa8956c1fa191c9db61dfa) | fix | add upper bounds for digitsInfo |
| [17326725ba](https://github.com/angular/angular/commit/17326725baae510a420b9a22b4c2d25927dd91b4) | fix | sanitize placeholder |
### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [932e0728db](https://github.com/angular/angular/commit/932e0728dba97d7a2dbe36e7d6429fa2087a20a9) | fix | normalize tag names with custom namespaces in DomElementSchemaRegistry |
| [2e3d0371ab](https://github.com/angular/angular/commit/2e3d0371ab7726cec2979d8b8dc8f2a8393f9591) | fix | sanitize dynamic href and xlink:href bindings on SVG a elements |
| [fe1207e8c5](https://github.com/angular/angular/commit/fe1207e8c5d2e55dd7a3a77a3caeb12f91a409bf) | fix | strip namespaced SVG script elements during template compilation |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [c6bb0692e2](https://github.com/angular/angular/commit/c6bb0692e2f6fd8f7e59e60fa964d173c60e3a74) | fix | reject script element as a dynamic component host |
| [3960b21558](https://github.com/angular/angular/commit/3960b2155847c52e4f56d4b3c6532be700155891) | fix | sanitize meta selectors |
| [3632fa4b69](https://github.com/angular/angular/commit/3632fa4b6953555dfff654f25463c5179547546b) | fix | support prefix-insensitive DOM schema lookups and compile-time i18n attribute validation |
| [620230dac4](https://github.com/angular/angular/commit/620230dac4e6141f00b528c4d20e9bbb99e6e20d) | fix | synchronize core sanitization schema with compiler |
| [d31f84116c](https://github.com/angular/angular/commit/d31f84116cafcf48462c2b230fa9c4469761292a) | fix | wrap i18n dynamic element property updates in active index states |
### http
| Commit | Type | Description |
| -- | -- | -- |
| [9940ffd781](https://github.com/angular/angular/commit/9940ffd781de4da118848eabeeedb765f4747416) | fix | exclude withCredentials requests from transfer cache |
| [0f67f0b962](https://github.com/angular/angular/commit/0f67f0b9627f67d55b857f17d6796bea89d88765) | fix | skip TransferCache for cookie-bearing requests by default |
### platform-server
| Commit | Type | Description |
| -- | -- | -- |
| [d187e8aeda](https://github.com/angular/angular/commit/d187e8aedaf7c79c9837849ab5f0b775344b14b5) | fix | normalize path parsing in ServerPlatformLocation |
| [c75f60ef8a](https://github.com/angular/angular/commit/c75f60ef8a7a690c47dc7c473ee214c5f166d281) | fix | secure location and document initialization against SSRF and path hijack |
### service-worker
| Commit | Type | Description |
| -- | -- | -- |
| [37ee9ffd9e](https://github.com/angular/angular/commit/37ee9ffd9eb7c51913dba80e37b2f55950d8436b) | fix | preserve redirect policy on reconstructed asset requests |
| [97f796203f](https://github.com/angular/angular/commit/97f796203f0605f9a168b76e7ac2f1e6b8d3ddc4) | fix | Preserves explicit 'credentials: omit' in asset requests |
| [5619120931](https://github.com/angular/angular/commit/561912093104f1a3f07eedae83edaf63650beb84) | fix | Preserves HTTP cache mode in asset group requests |

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.2.14"></a>
# 21.2.14 (2026-05-20)
### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [68282dff9f](https://github.com/angular/angular/commit/68282dff9f9ef46540cca4bd38fc1ab739c8a783) | fix | strip namespaced SVG script elements during template compilation |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [c0f52272ed](https://github.com/angular/angular/commit/c0f52272ed337d4776bd4178cbbdc7f32037500f) | fix | do not insert todo when migrating void @Output |
| [938a7f3edd](https://github.com/angular/angular/commit/938a7f3eddda97a39edb9edcc8b4dd970858b3a2) | fix | makes resource URL sanitizer lookup case-insensitive |
| [0fb2724194](https://github.com/angular/angular/commit/0fb272419407a64a0a47096b03a911f4e7e83d79) | fix | reject script element as a dynamic component host |
| [49113ac0ef](https://github.com/angular/angular/commit/49113ac0eff852d987b5acb28a9bbda0242842cd) | fix | visit ICU expressions in signal migration schematics |
### router
| Commit | Type | Description |
| -- | -- | -- |
| [099bf577ee](https://github.com/angular/angular/commit/099bf577ee8f0bab60593a8fd2a1de7d298e3cd6) | fix | skip scroll-to-top on initial navigation when hydrating |

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.2.13"></a>
# 21.2.13 (2026-05-13)
### core
| Commit | Type | Description |
| -- | -- | -- |
| [1c6553e97d](https://github.com/angular/angular/commit/1c6553e97d9655d8c48fbf625987fae86f9cd947) | fix | disallow event attribute bindings in host bindings unconditionally |
### platform-server
| Commit | Type | Description |
| -- | -- | -- |
| [629905d537](https://github.com/angular/angular/commit/629905d537f59dc3c264c49f6347e3599dea0215) | fix | add `allowedHosts` option to `renderModule` and `renderApplication` |
| [0b7192f441](https://github.com/angular/angular/commit/0b7192f4410d055191ac9b15bff57d1d0b9a644f) | fix | forward BEFORE_APP_SERIALIZED errors to ErrorHandler |

<!-- CHANGELOG SPLIT MARKER -->

<a name="19.2.22"></a>
# 19.2.22 (2026-05-12)
### core
| Commit | Type | Description |
| -- | -- | -- |
| [83a640516f](https://github.com/angular/angular/commit/83a640516f7b1fff4dfb0fd0ed8b19876bdb00c4) | fix | disallow event attribute bindings in host bindings unconditionally ([#68469](https://github.com/angular/angular/pull/68469)) |
| [24a0103a98](https://github.com/angular/angular/commit/24a0103a9898b1547f5d1f57314e2bb6545a2c7a) | fix | validate security-sensitive attributes in i18n bindings ([#68469](https://github.com/angular/angular/pull/68469)) |
### platform-server
| Commit | Type | Description |
| -- | -- | -- |
| [8569db8875](https://github.com/angular/angular/commit/8569db88758d189544b03ec4474fd5334ff29346) | fix | add `allowedHosts` option to `renderModule` and `renderApplication` |
| [837a710217](https://github.com/angular/angular/commit/837a7102172502dd3d92793ec15b2d4e533a573d) | fix | ensure origin has a trailing slash when parsing url ([#68469](https://github.com/angular/angular/pull/68469)) |

<!-- CHANGELOG SPLIT MARKER -->

<a name="20.3.21"></a>
# 20.3.21 (2026-05-12)
### platform-server
| Commit | Type | Description |
| -- | -- | -- |
| [f584840e2e](https://github.com/angular/angular/commit/f584840e2e50f751397cf3fad5258e18e857427e) | fix | add `allowedHosts` option to `renderModule` and `renderApplication` |

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.2.12"></a>
# 21.2.12 (2026-05-06)
### core
| Commit | Type | Description |
| -- | -- | -- |
| [fe13bb669d](https://github.com/angular/angular/commit/fe13bb669d2bfab4713623d17b41c430aa0a61d8) | fix | allow explicit read generic with signal input transforms |
| [3430251fef](https://github.com/angular/angular/commit/3430251fef93f6aec1fa9c7867e85df23f67c9a0) | fix | i18n flags leaking on errors |
| [1aeebbe304](https://github.com/angular/angular/commit/1aeebbe3048b5aa612dd0a5448de9883ed51e7e8) | fix | respect ngSkipHydration on components with projectable nodes in LContainers |
| [9e38ed7d57](https://github.com/angular/angular/commit/9e38ed7d5773a9193ba07afdba3f7a9f2fe02d18) | fix | sanitizer typings |
| [7a05a9a71a](https://github.com/angular/angular/commit/7a05a9a71a5ab75042ec5560c01526de6e61e062) | fix | validate security-sensitive attributes in i18n bindings |
| [c37f6ca42f](https://github.com/angular/angular/commit/c37f6ca42f263353cb9563fa90d7b31d3c7837ca) | fix | visit ng-let expression value in signal migration schematics |
### forms
| Commit | Type | Description |
| -- | -- | -- |
| [03ad53863b](https://github.com/angular/angular/commit/03ad53863bf3c368f0f02a4322d4141e8f70f674) | fix | prohibit concurrent submits in signal forms |

<!-- CHANGELOG SPLIT MARKER -->

<a name="20.3.20"></a>
# 20.3.20 (2026-05-06)
### core
| Commit | Type | Description |
| -- | -- | -- |
| [a9bcffdbc7](https://github.com/angular/angular/commit/a9bcffdbc7697715f3d4fa91d924a5b905d637b0) | fix | disallow event attribute bindings in host bindings unconditionally ([#68468](https://github.com/angular/angular/pull/68468)) |
| [97eeb45cfa](https://github.com/angular/angular/commit/97eeb45cfa5fbd89013d75b5d862095d34b8ba58) | fix | validate security-sensitive attributes in i18n bindings ([#68468](https://github.com/angular/angular/pull/68468)) |
### platform-server
| Commit | Type | Description |
| -- | -- | -- |
| [25e4e07238](https://github.com/angular/angular/commit/25e4e07238021a3641f96bb5f5648d74a83f1712) | fix | ensure origin has a trailing slash when parsing url ([#68468](https://github.com/angular/angular/pull/68468)) |

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.2.11"></a>
# 21.2.11 (2026-04-29)
### common
| Commit | Type | Description |
| -- | -- | -- |
| [10ad3c0692](https://github.com/angular/angular/commit/10ad3c06923453ae0ec06b06e664ce05900a4ff6) | fix | prevent focus from scrollToAnchor |
### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [4f5d8a2c0b](https://github.com/angular/angular/commit/4f5d8a2c0b5e38d4debc4293945270cea4a9590d) | fix | let declaration span not including end character |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [a40e2cebc8](https://github.com/angular/angular/commit/a40e2cebc878965c3e21bfb61658f3f80cbd2ebf) | fix | fix ordering of view queries metadata in JIT mode |
| [885a1a1d97](https://github.com/angular/angular/commit/885a1a1d9757adfa8766d9b369c848a277438c31) | fix | guard against non-object events and avoid listener wrapper identity mismatch |
| [7a64aff9b5](https://github.com/angular/angular/commit/7a64aff9b59999077ea915486a7fa0b97a286659) | fix | prevent event replay double-invocation when element hydrates before app stability |
### platform-server
| Commit | Type | Description |
| -- | -- | -- |
| [be1f80a253](https://github.com/angular/angular/commit/be1f80a253b8ee27ed7d8de2287d6895c4821909) | fix | ensure origin has a trailing slash when parsing url |

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.2.10"></a>
# 21.2.10 (2026-04-22)
### docs
| Commit | Type | Description |
| -- | -- | -- |
| [0d5ee9ae1b](https://github.com/angular/angular/commit/0d5ee9ae1ba4b7acd8f27a059a778f0b4bd8a5bd) | fix | link formatting in "Animating your Application with CSS" |
### migrations
| Commit | Type | Description |
| -- | -- | -- |
| [5533ab4f56](https://github.com/angular/angular/commit/5533ab4f56f574bc9365cf0573c4a34a3ab5aaf1) | fix | fix NgClass leaving trailing comma after removal |
### router
| Commit | Type | Description |
| -- | -- | -- |
| [580212c995](https://github.com/angular/angular/commit/580212c995751c4bf4ce8a49df4167498743e0ea) | fix | restore internal URL on popstate when `browserUrl` is used |

<!-- CHANGELOG SPLIT MARKER -->

<a name="19.2.21"></a>
# 19.2.21 (2026-04-15)
### platform-server
| Commit | Type | Description |
| -- | -- | -- |
| [f3a5bfb949](https://github.com/angular/angular/commit/f3a5bfb949cb4d2de960b962a53aa16d8435b8e4) | fix | prevent SSRF bypasses via protocol-relative and backslash URLs |

<!-- CHANGELOG SPLIT MARKER -->

<a name="20.3.19"></a>
# 20.3.19 (2026-04-15)
### platform-server
| Commit | Type | Description |
| -- | -- | -- |
| [303d4cd580](https://github.com/angular/angular/commit/303d4cd580dec38bfaa71a0a34965f151bab3ba8) | fix | prevent SSRF bypasses via protocol-relative and backslash URLs |

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.2.9"></a>
# 21.2.9 (2026-04-15)
### core
| Commit | Type | Description |
| -- | -- | -- |
| [f603d4714f](https://github.com/angular/angular/commit/f603d4714fa184aad34a6f7f9ea4e79c8af3afac) | fix | escape forward slashes in transfer state to prevent crawler indexing |
### http
| Commit | Type | Description |
| -- | -- | -- |
| [540536c386](https://github.com/angular/angular/commit/540536c386f2c735a700c2c9e2697a88dcb3d4ec) | fix | add CSP nonce support to JsonpClientBackend |
| [63a857b874](https://github.com/angular/angular/commit/63a857b874172766451aa75ed3347ba50f0ee229) | fix | Don't on Passthru outside of reactive context |
### platform-server
| Commit | Type | Description |
| -- | -- | -- |
| [e0b5078cf2](https://github.com/angular/angular/commit/e0b5078cf2ebe79a6de85e9123148ae948b3d81d) | fix | prevent SSRF bypasses via protocol-relative and backslash URLs |
### router
| Commit | Type | Description |
| -- | -- | -- |
| [684e9fd53d](https://github.com/angular/angular/commit/684e9fd53daacb9e910f42d98c6017f9e5cb4180) | fix | normalize multiple leading slashes in URL parser |

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.2.8"></a>
# 21.2.8 (2026-04-08)
### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [e40d378f3e](https://github.com/angular/angular/commit/e40d378f3e3e7e57a45c8fbd9565ee06a3a6a13f) | fix | handle nested brackets in host object bindings |
### compiler-cli
| Commit | Type | Description |
| -- | -- | -- |
| [2c6781071f](https://github.com/angular/angular/commit/2c6781071f52d6378a002fba6611bb283fbb2fde) | fix | error for type parameter declarations |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [82192deda9](https://github.com/angular/angular/commit/82192deda9c07113835e6c85af3f2c8c8218cda0) | fix | handle missing serialized container hydration data |
| [057cc6d09d](https://github.com/angular/angular/commit/057cc6d09d234f401a810cfdd3ad14127652b88b) | fix | remove obsolete iOS cursor pointer hack in event delegation |
### language-service
| Commit | Type | Description |
| -- | -- | -- |
| [7797671257](https://github.com/angular/angular/commit/7797671257350665e8b3ceb2bc6a0201829dd338) | fix | get quick info at local var location to align with TS semantics and support type narrowing |

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.2.7"></a>
# 21.2.7 (2026-04-01)
### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [fea25d1a60](https://github.com/angular/angular/commit/fea25d1a60ecaba1599d9cd9b8df27109ed195c5) | fix | register SVG animation attributes in URL security context ([#67797](https://github.com/angular/angular/pull/67797)) |
### compiler-cli
| Commit | Type | Description |
| -- | -- | -- |
| [bba5ed8e64](https://github.com/angular/angular/commit/bba5ed8e643b9c3f680e7e539c3d744ad6905e59) | fix | prevent recursive scope checks for invalid NgModule imports |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [d04ddd73df](https://github.com/angular/angular/commit/d04ddd73dfc03f420afbdde964c5119f338af135) | fix | prevent binding unsafe attributes on SVG animation elements ([#67797](https://github.com/angular/angular/pull/67797)) |
| [8fd896e99a](https://github.com/angular/angular/commit/8fd896e99a13855c6569f29efe7e578c301e13ee) | fix | resolve component import by exact specifier in route lazy-loading schematic |
| [b682c62873](https://github.com/angular/angular/commit/b682c628731b86a4884e50abb2f5fa73ac0ad057) | fix | treat `object[data]` as resource URL context ([#67797](https://github.com/angular/angular/pull/67797)) |
### localize
| Commit | Type | Description |
| -- | -- | -- |
| [3c41e74fdd](https://github.com/angular/angular/commit/3c41e74fdd279f683156b654699a9312a850add0) | fix | validate locale in getOutputPathFn to prevent path traversal |
### router
| Commit | Type | Description |
| -- | -- | -- |
| [0960592d3d](https://github.com/angular/angular/commit/0960592d3d4fad110d5598144fda9f2488520826) | fix | pass outlet context to split to fix empty path named outlets |

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.2.6"></a>
# 21.2.6 (2026-03-25)
### common
| Commit | Type | Description |
| -- | -- | -- |
| [b4ab6ba2e8](https://github.com/angular/angular/commit/b4ab6ba2e84a18309b0bb5dd68311ff1776b1cb4) | fix | avoid redundant image fetch on destroy with auto sizes |
### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [880a57d4b3](https://github.com/angular/angular/commit/880a57d4b34af5aa27cd5bee11fa218ade6444bb) | fix | prevent shimCssText from adding extra blank lines per CSS comment |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [ad0156e056](https://github.com/angular/angular/commit/ad0156e056e60ffebfeb804fda70dce88d9475a8) | fix | fixes a regression with animate.leave and reordering |
### migrations
| Commit | Type | Description |
| -- | -- | -- |
| [73d6b01b47](https://github.com/angular/angular/commit/73d6b01b47bb6762d182f1cd891f8ad4d7f688e1) | fix | inject migration not work in multi-project workspace with option path |

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.2.5"></a>
# 21.2.5 (2026-03-18)
### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [334ae10168](https://github.com/angular/angular/commit/334ae10168fdad15cd1390180e2994b4eb65349b) | fix | ensure generated code compiles |
| [23ea431c4e](https://github.com/angular/angular/commit/23ea431c4ec45cbb4a7db9839969e7cb23b07f58) | fix | parse named HTML entities containing digits |
### compiler-cli
| Commit | Type | Description |
| -- | -- | -- |
| [26c43d14ba](https://github.com/angular/angular/commit/26c43d14baad1a6b3629a77825e702a97a4f8482) | fix | escape template literal in TCB |
| [67e0ba7e03](https://github.com/angular/angular/commit/67e0ba7e03bb940639f0eafb3af45015e9727eac) | fix | generic types not filled out correctly in type check block |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [1890c3008b](https://github.com/angular/angular/commit/1890c3008bbb41b7143b7ede09bed1f7704744fb) | fix | clean up dehydrated views during HMR component replacement |
| [bf948be4c2](https://github.com/angular/angular/commit/bf948be4c2c88c604e428cba35e3b9e532bfe5b0) | fix | run linked signal equality check without reactive consumer |
### migrations
| Commit | Type | Description |
| -- | -- | -- |
| [076d41c3f6](https://github.com/angular/angular/commit/076d41c3f6496eb6c6f84b54e2d2ca85c1b35e64) | fix | prevent trailing comma syntax errors after removing NgStyle |
### service-worker
| Commit | Type | Description |
| -- | -- | -- |
| [e19150d2b5](https://github.com/angular/angular/commit/e19150d2b596e87c69bee61f478c3e9c7cbc8f67) | fix | preserve redirect policy on reconstructed asset requests |

<!-- CHANGELOG SPLIT MARKER -->

<a name="19.2.20"></a>
# 19.2.20 (2026-03-12)
### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [5be912eb55](https://github.com/angular/angular/commit/5be912eb55fe88e8621e2ce82470d51b7d950ceb) | fix | disallow translations of iframe src |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [b89b0a83a4](https://github.com/angular/angular/commit/b89b0a83a4d21bbb6f8534bbf56aece12af24595) | fix | sanitize translated attribute bindings with interpolations |
| [621c7071ad](https://github.com/angular/angular/commit/621c7071adffbe5dd45a5c954b6b6138e0870844) | fix | sanitize translated form attributes |

<!-- CHANGELOG SPLIT MARKER -->

<a name="20.3.18"></a>
# 20.3.18 (2026-03-12)
### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [02fbf08890](https://github.com/angular/angular/commit/02fbf08890ec6ac2efb6c2ec4f17e56497cb81d2) | fix | disallow translations of iframe src |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [72126f9a08](https://github.com/angular/angular/commit/72126f9a08c185a9b93461bab67841c4e84c9b17) | fix | sanitize translated attribute bindings with interpolations |
| [626bc8bc20](https://github.com/angular/angular/commit/626bc8bc20e485cad2094c4a5d9417fb9a71dda8) | fix | sanitize translated form attributes |

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.2.4"></a>
# 21.2.4 (2026-03-12)
### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [ed2d324f9c](https://github.com/angular/angular/commit/ed2d324f9cc12aab6cfa0569ef10b73243a62c65) | fix | disallow translations of iframe src |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [abbd8797bb](https://github.com/angular/angular/commit/abbd8797bbd3ae53a10033c39bd895b5b85a4fae) | fix | reverts "feat(core): add support for nested animations" |
| [d1dcd16c5b](https://github.com/angular/angular/commit/d1dcd16c5b40291aa3fa2dc84d22842cd657b201) | fix | sanitize translated form attributes |

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.2.3"></a>
# 21.2.3 (2026-03-11)
### core
| Commit | Type | Description |
| -- | -- | -- |
| [62a97f7e4b](https://github.com/angular/angular/commit/62a97f7e4b896b4b03a1ef25764db387ffecebe1) | fix | ensure definitions compile |
| [21b1c3b2ee](https://github.com/angular/angular/commit/21b1c3b2ee2c8423782b111b93bd60eb6b453259) | fix | include signal debug names in their `toString()` representation |
| [224e60ecb1](https://github.com/angular/angular/commit/224e60ecb1b90115baa702f1c06edc1d64d86187) | fix | sanitize translated attribute bindings with interpolations |

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.2.2"></a>
# 21.2.2 (2026-03-09)
### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [1df1697c6e](https://github.com/angular/angular/commit/1df1697c6e3a6b1d302f7692b495146943faa12f) | fix | prevent mutation of children array in RecursiveVisitor |
### compiler-cli
| Commit | Type | Description |
| -- | -- | -- |
| [c822bf8e76](https://github.com/angular/angular/commit/c822bf8e76611afde332b6625f5e7bae2fe9c3f3) | fix | always parenthesize object literals in TCB |
| [05d022d5e6](https://github.com/angular/angular/commit/05d022d5e61cca7ac90d5b2b2ba3fc738b364ad9) | fix | ignore generated ngDevMode signal branch for code coverage |
### forms
| Commit | Type | Description |
| -- | -- | -- |
| [670d1660c4](https://github.com/angular/angular/commit/670d1660c40504e3f55e094c3ebbcccad14163f3) | feat | add 'blur' option to debounce rule |

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.2.1"></a>
# 21.2.1 (2026-03-04)
### core
| Commit | Type | Description |
| -- | -- | -- |
| [e2e9a9a531](https://github.com/angular/angular/commit/e2e9a9a531c9e9a69701e549f28354cc5d5edd77) | fix | adds transfer cache to httpResource to fix hydration |
| [b4ec3cc4e4](https://github.com/angular/angular/commit/b4ec3cc4e41f2948ad0830eb14aa05d14fa3a9ed) | fix | prevent child animation elements from being orphaned |
| [e923d88398](https://github.com/angular/angular/commit/e923d8839868c79989502ab3503e13d93c78516a) | fix | Prevent removal of elements during drag and drop |
### http
| Commit | Type | Description |
| -- | -- | -- |
| [277ade97ac](https://github.com/angular/angular/commit/277ade97ac2a3a7f2a5b513acaa93e7663cdc55f) | fix | correctly cache blob responses in transfer cache ([#67002](https://github.com/angular/angular/pull/67002)) |

<!-- CHANGELOG SPLIT MARKER -->

<a name="19.2.19"></a>
# 19.2.19 (2026-02-25)
## Breaking Changes
### core
- Angular now only applies known attributes from HTML in translated ICU content. Unknown attributes are dropped and not rendered.
  
  (cherry picked from commit 03da204b6daa5e4583e0d0968c2107390bbd8235)
### core
| Commit | Type | Description |
| -- | -- | -- |
| [747548721d](https://github.com/angular/angular/commit/747548721d051c21e388a302d20d53fb3ab16367) | fix | block creation of sensitive URI attributes from ICU messages |

<!-- CHANGELOG SPLIT MARKER -->

<a name="20.3.17"></a>
# 20.3.17 (2026-02-25)
## Breaking Changes
### core
- Angular now only applies known attributes from HTML in translated ICU content. Unknown attributes are dropped and not rendered.
  
  (cherry picked from commit 03da204b6daa5e4583e0d0968c2107390bbd8235)
### core
| Commit | Type | Description |
| -- | -- | -- |
| [7f9de3c118](https://github.com/angular/angular/commit/7f9de3c118383c09fa8851708c66ec94453a9680) | fix | block creation of sensitive URI attributes from ICU messages |

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.2.0"></a>
# 21.2.0 (2026-02-25)
### common
| Commit | Type | Description |
| -- | -- | -- |
| [18003a33bb](https://github.com/angular/angular/commit/18003a33bb0d6bb09def8a0e5939fa24069696eb) | feat | add an 'outlet' injector option for ngTemplateOutlet |
| [8bbe6dc46c](https://github.com/angular/angular/commit/8bbe6dc46c9dc13bafa81a60c7613b84b5ca3761) | feat | Add Location strategies to manage trailing slash on write |
| [51cc914807](https://github.com/angular/angular/commit/51cc91480761b7275c15b5600381207f8ca00ee5) | feat | support height in ImageLoaderConfig and built-in loaders |
### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [72534e2a34](https://github.com/angular/angular/commit/72534e2a3458df4e1bb097973872f00bbb92be42) | feat | Add support for the `instanceof` binary operator |
| [95b3f37d4a](https://github.com/angular/angular/commit/95b3f37d4a7d9a38f616d56df746dfcda3c2139b) | feat | Exhaustive checks for switch blocks |
| [04ba09a8d9](https://github.com/angular/angular/commit/04ba09a8d9454013bebdd643eacb737642161952) | feat | support `AstVisitor.visitEmptyExpr()` |
| [ce80136e7b](https://github.com/angular/angular/commit/ce80136e7b9f0024d49fce835cffa024c4505855) | fix | optimize away unnecessary restore/reset view calls |
| [3242a61bae](https://github.com/angular/angular/commit/3242a61bae02253d13abb510b666376c665e61ac) | fix | variable counter visiting some expressions twice |
### compiler-cli
| Commit | Type | Description |
| -- | -- | -- |
| [473dd3e1cb](https://github.com/angular/angular/commit/473dd3e1cbd4fe3fa88ae4d5358eee35c11acb1b) | fix | attach source spans to object literal keys in TCB |
| [a904d9f77b](https://github.com/angular/angular/commit/a904d9f77b56feab407f75f8d0527fa512d5dafb) | fix | support nested component declaration |
| [2ea6dfc6c9](https://github.com/angular/angular/commit/2ea6dfc6c9ca11e96a2654510c980419899f8d04) | fix | update diagnostic to flag no-op arrow functions in listeners |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [8d5210c9fe](https://github.com/angular/angular/commit/8d5210c9fedd8abdd810d7a89ec7ee9a1234f5c1) | feat | add ChangeDetectionStrategy.Eager alias for Default |
| [92d2498910](https://github.com/angular/angular/commit/92d2498910caed06c182b67e39726e1441418698) | feat | add host node to DeferBlockData ([#66546](https://github.com/angular/angular/pull/66546)) |
| [ea2016a6dc](https://github.com/angular/angular/commit/ea2016a6dce58f95ecab7c773d5dcde274354e1a) | feat | add support for nested animations |
| [81cabc1477](https://github.com/angular/angular/commit/81cabc14777a3b4966c29d60e1505aca8c29b71c) | feat | add support for TypeScript 6 |
| [1ba9b7ac50](https://github.com/angular/angular/commit/1ba9b7ac5001b315cc9df78c518964dbf479d647) | feat | resource composition via snapshots |
| [d9923b72a2](https://github.com/angular/angular/commit/d9923b72a20972ba6bf728d78f1afac6936ade18) | feat | support arrow functions in expressions |
| [a7e8abbb7e](https://github.com/angular/angular/commit/a7e8abbb7e738ba338c3f50c76934c99925954e5) | fix | correctly handle SkipSelf when resolving from embedded view injector |
| [0806ee3826](https://github.com/angular/angular/commit/0806ee38269b664f535e10d4d501b88370d3b44c) | fix | prevent animated element duplication with dynamic components in zoneless mode |
| [ed78fa05c7](https://github.com/angular/angular/commit/ed78fa05c710ebafb355ae00a85b190a118b6cc4) | fix | Remove note to skip arrow functions in best practices |
### forms
| Commit | Type | Description |
| -- | -- | -- |
| [f56bb07d83](https://github.com/angular/angular/commit/f56bb07d83a015b0ac12e74fdb0cf1550ff36b97) | feat | add field param to submit action and onInvalid |
| [ba009b6031](https://github.com/angular/angular/commit/ba009b603119299a03f9d844f93882d42d47d150) | feat | add form directive |
| [22afbb2f36](https://github.com/angular/angular/commit/22afbb2f36be89c2ae575df343571a918dec5985) | feat | add parsing support to native inputs ([#66917](https://github.com/angular/angular/pull/66917)) |
| [95c386469c](https://github.com/angular/angular/commit/95c386469c7a2f09dd731601c2061bdb10d25717) | feat | Add passing focus options to form field |
| [95ecce8334](https://github.com/angular/angular/commit/95ecce8334299defe55fb2b74264e5258ffd137c) | feat | allow setting submit options at form-level |
| [ebae211add](https://github.com/angular/angular/commit/ebae211add37700858adeb8fc5d87bf503a59721) | feat | introduce parse errors in signal forms |
| [3937afc316](https://github.com/angular/angular/commit/3937afc3167ce409eebb06d91d5fb122eea4e33d) | feat | introduce SignalFormControl for Reactive Forms compatibility |
| [30f0914754](https://github.com/angular/angular/commit/30f09147545b67185f93efb9796e37c1db76733a) | feat | support binding null to number input ([#66917](https://github.com/angular/angular/pull/66917)) |
| [dd208ca259](https://github.com/angular/angular/commit/dd208ca2595258fcd1e289374f812ce0b56c7011) | feat | update submit function to accept options object |
| [27397b3f4f](https://github.com/angular/angular/commit/27397b3f4f3182ce00d6e2f8690285c316e2a274) | fix | clear parse errors when model updates ([#66917](https://github.com/angular/angular/pull/66917)) |
| [63d8005703](https://github.com/angular/angular/commit/63d80057039928b3e878b59c1fe6b93ef1c6b701) | fix | preserve custom-control focus context in signal forms |
| [631f60d1f9](https://github.com/angular/angular/commit/631f60d1f9be72cb68330308a6ff18cc195babb8) | fix | preserve parse errors when parse returns value |
| [adfb83146b](https://github.com/angular/angular/commit/adfb83146b0c149734f43961563b389e00cc1d85) | fix | simplify design of parse errors |
| [fb05fc86d0](https://github.com/angular/angular/commit/fb05fc86d0f12ffafd94c7c1420118d8a79f7e59) | fix | sort error summary by DOM order |
| [567f292e8e](https://github.com/angular/angular/commit/567f292e8e0f9d2b5ddebadfa1c6d6dd6c456f39) | fix | support custom controls as host directives |
| [bdfb60f3e3](https://github.com/angular/angular/commit/bdfb60f3e33065e047183dc1890c36e527e2b304) | fix | use consistent error format returned from parse |
| [d75046bc09](https://github.com/angular/angular/commit/d75046bc091699bbadcb5f2032be627e983ee6fa) | fix | warn when showing hidden field state |
### language-server
| Commit | Type | Description |
| -- | -- | -- |
| [ebc90c26f5](https://github.com/angular/angular/commit/ebc90c26f5ff1ba1e0ca9b775a44e301ebfb9473) | feat | Add completions and hover info for inline styles |
| [26fd0839c3](https://github.com/angular/angular/commit/26fd0839c32d2ebeaa5e3ecc10ed70ab9ca17749) | feat | Add folding range support for inline styles |
| [573aadef7e](https://github.com/angular/angular/commit/573aadef7eb8b6b5e83b82a16f95d2a556f27c01) | feat | Add quick info for inline styles |
| [6fb39d9b62](https://github.com/angular/angular/commit/6fb39d9b62cbb634e95ec00fe5ef85d84da3bdbd) | feat | Support client-side file watching via `onDidChangeWatchedFiles` |
### language-service
| Commit | Type | Description |
| -- | -- | -- |
| [496967e7b1](https://github.com/angular/angular/commit/496967e7b13dfe1ebdde69724cd62880914beb60) | feat | add JSON schema for angularCompilerOptions |
| [8c21866f49](https://github.com/angular/angular/commit/8c21866f49ff74344551395ae0a5df1841d54c0d) | feat | add linked editing ranges for HTML tag synchronization |
| [d2137928e8](https://github.com/angular/angular/commit/d2137928e8f075527016a3c011dd8efc4d4e1ebd) | perf | use lightweight project warmup for Angular analysis |
### router
| Commit | Type | Description |
| -- | -- | -- |
| [b51bab583d](https://github.com/angular/angular/commit/b51bab583d84e38f16dea489e4119edc34e2a491) | feat | Add partial ActivatedRouteSnapshot information to `canMatch` params |
| [cf9620f7d0](https://github.com/angular/angular/commit/cf9620f7d072897f13b7f281b7bca6f51f69cfd0) | feat | Make match options optional in isActive |
| [907a94dcec](https://github.com/angular/angular/commit/907a94dcec2926a5c7d0c4d36249bd62e31a2ae3) | feat | Update `IsActiveMatchOptions` APIs to accept a Partial |

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.1.6"></a>
# 21.1.6 (2026-02-25)
## Breaking Changes
### core
- Angular now only applies known attributes from HTML in translated ICU content. Unknown attributes are dropped and not rendered.
  
  (cherry picked from commit 306f367899dfc2e04238fecd3455547b5d54075d)
### common
| Commit | Type | Description |
| -- | -- | -- |
| [31d3d56496](https://github.com/angular/angular/commit/31d3d564961b701bda96d94731fbed72c01975fa) | fix | fix LCP image detection with duplicate URLs |
### compiler-cli
| Commit | Type | Description |
| -- | -- | -- |
| [24b578ce90](https://github.com/angular/angular/commit/24b578ce90ed50022f62584671aef01d4c5dd7b2) | fix | detect uninvoked functions in defer trigger expressions |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [b858309532](https://github.com/angular/angular/commit/b85830953281ff3a1a77bbfe69019d352d509c93) | fix | block creation of sensitive URI attributes from ICU messages |

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.1.5"></a>
# 21.1.5 (2026-02-18)
No user facing changes in this release

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.1.4"></a>
# 21.1.4 (2026-02-11)
### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [caab23dfe6](https://github.com/angular/angular/commit/caab23dfe6acf06c3b859af091f5e078b08f1c4c) | fix | add geolocation element to schema |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [2b99eaa019](https://github.com/angular/angular/commit/2b99eaa019b5551a2e2fcf9ff8cd0a796e1e857b) | fix | capture animation dependencies eagerly to avoid destroyed injector |
| [d6aeac504c](https://github.com/angular/angular/commit/d6aeac504c6181f15e5d8afdca3d9c3e3b32652c) | fix | Fix flakey test due to document injection |
### forms
| Commit | Type | Description |
| -- | -- | -- |
| [0d1acd0165](https://github.com/angular/angular/commit/0d1acd0165511b57ce853f29486d9b92d0215959) | feat | support signal-based schemas in validateStandardSchema |
### http
| Commit | Type | Description |
| -- | -- | -- |
| [3905015ccc](https://github.com/angular/angular/commit/3905015ccc53399a606dd8e4f3c4d0cce628a08e) | fix | correctly parse ArrayBuffer and Blob in transfer cache |

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.1.3"></a>
# 21.1.3 (2026-02-04)
### core
| Commit | Type | Description |
| -- | -- | -- |
| [2b254bc050](https://github.com/angular/angular/commit/2b254bc0508b73aab8991c3b1a9a703c339cb735) | fix | `linkedSignal.update` should propagate errors |
| [e5110b4fa1](https://github.com/angular/angular/commit/e5110b4fa155e4669ed507f3460d2d29026a28ab) | fix | export DirectiveWithBindings |
| [2cf4da0ea1](https://github.com/angular/angular/commit/2cf4da0ea11f5746eb7ae4dfd775f757576e4d98) | fix | hold constructors weakly in DepsTracker cache |
| [70a5b651be](https://github.com/angular/angular/commit/70a5b651be29f1421eb25150b560bfe154aad6bc) | fix | prevent element duplication with dynamic components |
### forms
| Commit | Type | Description |
| -- | -- | -- |
| [6f75b6e3f6](https://github.com/angular/angular/commit/6f75b6e3f60dc2a4f33e13562649931dc95eb52b) | fix | Resolves debounce promise on abort in debounceForDuration |
### localize
| Commit | Type | Description |
| -- | -- | -- |
| [4c7126d23b](https://github.com/angular/angular/commit/4c7126d23be3e43b1d5bd6f2fb13119d185c3682) | fix | add support for unit-test builder in ng-add schematic |
### router
| Commit | Type | Description |
| -- | -- | -- |
| [d6268c0bbb](https://github.com/angular/angular/commit/d6268c0bbbdc92abaaaeb8eebee3bc45decab9c9) | fix | limit UrlParser recursion depth to prevent stack overflow |
| [49a36f4cc7](https://github.com/angular/angular/commit/49a36f4cc7254420bc34fff4e0f0242e00970280) | perf | Use .bind to avoid holding other closures in memory |

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.1.2"></a>
# 21.1.2 (2026-01-28)
### forms
| Commit | Type | Description |
| -- | -- | -- |
| [9f99b14882](https://github.com/angular/angular/commit/9f99b14882bc4f883aa33295856010a8bca900fa) | fix | only touch visible, interactive fields on submit |
### language-service
| Commit | Type | Description |
| -- | -- | -- |
| [c57b0355b5](https://github.com/angular/angular/commit/c57b0355b51f5aee5abd822f203fc3bcc3e85acd) | fix | Detect local project version on creation |
### router
| Commit | Type | Description |
| -- | -- | -- |
| [21ecdc036a](https://github.com/angular/angular/commit/21ecdc036a46c487d6c5b6bd25c2bbc3e53a60f9) | fix | Do not intercept reload events with Navigation integration |

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.1.1"></a>
# 21.1.1 (2026-01-21)
### compiler-cli
| Commit | Type | Description |
| -- | -- | -- |
| [0e1f1ed573](https://github.com/angular/angular/commit/0e1f1ed5732f3bb4d5dfbd1f0ee5a5be840594e4) | fix | drop .tsx extension for generated relative imports |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [05adfcf8f2](https://github.com/angular/angular/commit/05adfcf8f26013ac20c38f2b08847b5142e4fd85) | fix | handle Set in class bindings |
### forms
| Commit | Type | Description |
| -- | -- | -- |
| [d89a80a970](https://github.com/angular/angular/commit/d89a80a970d9590df0509d8b94090904a99b7aca) | feat | Ability to manually register a form field binding in signal forms |
| [cb75f9ce85](https://github.com/angular/angular/commit/cb75f9ce85160b2e4359610c06294929ac1169c0) | fix | fix control value syncing on touch |

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.1.0"></a>
# 21.1.0 (2026-01-14)
## Deprecations
### upgrade
- `VERSION` from `@angular/upgrade` is deprecated. Please use the entry from `@angular/upgrade/static` instead.
### common
| Commit | Type | Description |
| -- | -- | -- |
| [d8790972be](https://github.com/angular/angular/commit/d8790972bea4c59a208219dd36d158b5d7e4fdde) | feat | Add custom transformations for Cloudflare and Cloudinary image loaders |
| [a6b8cb68af](https://github.com/angular/angular/commit/a6b8cb68afaded6999ee68f495512be1a9932ae4) | feat | support custom transformations in ImageKit and Imgix loaders |
### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [640693da8e](https://github.com/angular/angular/commit/640693da8e667c015662246152236585d9b24e7f) | feat | Add support for multiple swich cases matching |
| [0ad3adc7c6](https://github.com/angular/angular/commit/0ad3adc7c6d4094f1e3432a3f2e3bdc9862cb4fa) | fix | Support empty cases |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [99ad18a4ee](https://github.com/angular/angular/commit/99ad18a4ee82ecc5524106d1d403ccfa9bae2304) | feat | Add stability debugging utility |
| [a0dfa5fa86](https://github.com/angular/angular/commit/a0dfa5fa86f40520b0e368a021b3c72009a45e8e) | feat | support rest arguments in function calls |
| [6e18fa8bc9](https://github.com/angular/angular/commit/6e18fa8bc9d7e6801e2e89e635c2f759dc422317) | feat | support spread elements in array literals |
| [e407280ab5](https://github.com/angular/angular/commit/e407280ab53cde5f93c3a643457c848845c6ec8b) | feat | support spread expressions in object literals |
| [06be8034bb](https://github.com/angular/angular/commit/06be8034bb9b9adfc07ab0d40cd87c6ae5de02de) | fix | Microtask scheduling should be used after any application synchronization |
| [b4f584cf42](https://github.com/angular/angular/commit/b4f584cf42235c94bb8389fa55bc634e23d7b010) | fix | return `StaticProvider` for `providePlatformInitializer` |
### forms
| Commit | Type | Description |
| -- | -- | -- |
| [1ea5c97703](https://github.com/angular/angular/commit/1ea5c97703ad3c6d8e4cb1b4297eec57629ce117) | feat | allow focusing bound control from field state |
### platform-browser
| Commit | Type | Description |
| -- | -- | -- |
| [ec9dc94cee](https://github.com/angular/angular/commit/ec9dc94ceeb3c026c64e01c6889b7f5c6fd25a66) | feat | add `context` to `createApplication` |
| [ab67988d2e](https://github.com/angular/angular/commit/ab67988d2e5242eff0034483f984428d684acd02) | feat | resolve JIT resources in `createApplication` |
### router
| Commit | Type | Description |
| -- | -- | -- |
| [5edceffd04](https://github.com/angular/angular/commit/5edceffd0431f5a25e111a731db521e966b91f86) | feat | add controls for route cleanup |
| [a03c82564d](https://github.com/angular/angular/commit/a03c82564da6824e199ff48d5249ea8708040951) | feat | Add scroll behavior controls on router navigation |
| [e44839b016](https://github.com/angular/angular/commit/e44839b01640505e554fff16f24e08f282a557c0) | feat | Add standalone function to create a comptued for isActive |
| [c25d749d85](https://github.com/angular/angular/commit/c25d749d85374fff7745980cd9bb2673c661105a) | feat | Execute RunGuardsAndResolvers function in injection context |
| [1c00ab42f8](https://github.com/angular/angular/commit/1c00ab42f8714f2775ed75bbf3cdf0fd44ee32c3) | feat | extend paramters of RedirectFunction to include paramMap and queryParamMap |
| [7003e8d241](https://github.com/angular/angular/commit/7003e8d2417660f71b3a2a017aff3e650c8d9646) | feat | Publish Router's integration with platform Navigation API as experimental |
| [c84d372778](https://github.com/angular/angular/commit/c84d37277874cf7cbd7582a295d796ff113b9cc1) | feat | Support wildcard params with segments trailing ([#64737](https://github.com/angular/angular/pull/64737)) |
### upgrade
| Commit | Type | Description |
| -- | -- | -- |
| [75fe8f8af9](https://github.com/angular/angular/commit/75fe8f8af9488bae6f7068b64d44500643c5d63f) | refactor | deprecate `VERSION` export |

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.0.9"></a>
# 21.0.9 (2026-01-14)
### forms
| Commit | Type | Description |
| -- | -- | -- |
| [82d556a8fb](https://github.com/angular/angular/commit/82d556a8fb38cd2024e3d098c55254305ba12b6b) | fix | Ensure the control instruction comes after the other bindings |
| [0055f3cc79](https://github.com/angular/angular/commit/0055f3cc79f387b8dec6ce5e1a33fad5486f9341) | fix | Rename signal form [field] to [formField] |
### migrations
| Commit | Type | Description |
| -- | -- | -- |
| [e4bfa5c9e7](https://github.com/angular/angular/commit/e4bfa5c9e7feec48d3c4e9425a21a2ccf6532bdb) | fix | prevent duplicate imports in common-to-standalone migration |

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.0.8"></a>
# 21.0.8 (2026-01-08)
### core
| Commit | Type | Description |
| -- | -- | -- |
| [a6a2621bf9](https://github.com/angular/angular/commit/a6a2621bf9df02584e4079f4a804278fc2060a9c) | fix | fix memory leak with event replay |
| [5239e471a1](https://github.com/angular/angular/commit/5239e471a1f887574c6703c0497e5854304cce4e) | fix | handle cancelled traversals in fake navigation |

<!-- CHANGELOG SPLIT MARKER -->

<a name="20.3.16"></a>
# 20.3.16 (2026-01-07)
### core
| Commit | Type | Description |
| -- | -- | -- |
| [c2c2b4aaa8](https://github.com/angular/angular/commit/c2c2b4aaa84c67d2eccd4ef4f94b5ea444a7f73a) | fix | sanitize sensitive attributes on SVG script elements |

<!-- CHANGELOG SPLIT MARKER -->

<a name="19.2.18"></a>
# 19.2.18 (2026-01-07)
### core
| Commit | Type | Description |
| -- | -- | -- |
| [26cdc53d9c](https://github.com/angular/angular/commit/26cdc53d9cf99ec41ffc0c71f58f8a14efc828d9) | fix | sanitize sensitive attributes on SVG script elements |

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.0.7"></a>
# 21.0.7 (2026-01-07)
### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [8e808740c9](https://github.com/angular/angular/commit/8e808740c9311daa0f1c9bab8596ed5e54bdcc6a) | fix | better types for a few expression AST nodes |
| [63b1cdcf70](https://github.com/angular/angular/commit/63b1cdcf70e6de448e8fa4ba1732d7bd7b5400d1) | fix | produce accurate span for typeof and void expressions |
| [3c3ae0cb64](https://github.com/angular/angular/commit/3c3ae0cb64bb112d7167fd9b0bf7739f0c9e6a39) | fix | provide location information for literal map keys |
| [523dbaf1c3](https://github.com/angular/angular/commit/523dbaf1c3646ce27f1cf2e4cfc84c730fea8da9) | fix | stop ThisReceiver inheritance from ImplicitReceiver |
### compiler-cli
| Commit | Type | Description |
| -- | -- | -- |
| [4d9c4567ed](https://github.com/angular/angular/commit/4d9c4567edfb8dd424a3336ef54ffdfc6ca7c15f) | fix | ensure component import diagnostics are reported within the `imports` expression |
| [cd405685af](https://github.com/angular/angular/commit/cd405685afbfad530de7fb841ad352d2b702a9a4) | fix | fix up spelling of diagnostic |
| [778460fcca](https://github.com/angular/angular/commit/778460fccac13d8667bb53fa24ba977a930c0253) | fix | support qualified names in `typeof` type references |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [7c74674eb0](https://github.com/angular/angular/commit/7c74674eb07491f808f79976e3e21787a841aefb) | fix | avoid leaking view data in animations |
| [0edbee4550](https://github.com/angular/angular/commit/0edbee4550e85b933e9bd2ba3c5511ef6fbf7304) | fix | explicitly cast signal node value to String |
| [f9c29572d2](https://github.com/angular/angular/commit/f9c29572d28feef878c73edad562b3a6451825a6) | fix | sanitize sensitive attributes on SVG script elements |
### forms
| Commit | Type | Description |
| -- | -- | -- |
| [e3fba182f9](https://github.com/angular/angular/commit/e3fba182f90a2673040cf267a970c54c07d4840f) | feat | add `[formField]` directive |
| [561772b152](https://github.com/angular/angular/commit/561772b152458e1d91d4bf3ef45d9645a731f2b1) | fix | allow custom controls to require `dirty` input |
| [f0fb1d8581](https://github.com/angular/angular/commit/f0fb1d8581671ca499bcb4790b0549825eb36a91) | fix | allow custom controls to require `hidden` input |
| [ec110f170b](https://github.com/angular/angular/commit/ec110f170bbba95f023c8ae0e4429c35bfedc572) | fix | allow custom controls to require `pending` input |
| [ae1dc16bb0](https://github.com/angular/angular/commit/ae1dc16bb0d30b6e87b0f98b7989e6685d856e31) | fix | clean up abort listener after timeout |
| [9748b0d5da](https://github.com/angular/angular/commit/9748b0d5da6ffb1fd2498b23cc452240f46e0549) | fix | support custom controls with non signal-based models |
| [6bd22df987](https://github.com/angular/angular/commit/6bd22df987e433a9e3cb759e35eb6403991cf4b7) | fix | Support readonly arrays in signal forms |
### router
| Commit | Type | Description |
| -- | -- | -- |
| [41cd4a6af8](https://github.com/angular/angular/commit/41cd4a6af800cf7807c46862c99ae036457d8fa7) | fix | Fix RouterLink href not updating with `queryParamsHandling` |
| [5e9e09aee0](https://github.com/angular/angular/commit/5e9e09aee0c08901d2a4d48b60bd13692c73e76e) | fix | handle errors from view transition `updateCallbackDone` promise |

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.0.6"></a>
# 21.0.6 (2025-12-17)
## Breaking Changes (affecting only experimental features)
### forms
- The shape of `SignalFormsConfig.classes` has changed
  
  Previously each function in the `classes` map took a `FieldState`. Now
  it takes a `Field` directive.
  
  For example if you previously had:
  ```
  provideSignalFormsConfig({
    classes: {
      'my-valid': (state) => state.valid()
    }
  })
  ```
  
  You would need to update to:
  ```
  provideSignalFormsConfig({
    classes: {
      'my-valid': ({state}) => state().valid()
    }
  })
  ```
  
  (cherry picked from commit 348f149e8b06d6885f54bac4cf03a9481a8b19b7)
- (cherry picked from commit ae0c59028a2f393ea5716bf222db2c38e7a3989f)
### core
| Commit | Type | Description |
| -- | -- | -- |
| [4c8fb3631d](https://github.com/angular/angular/commit/4c8fb3631d58e22d693aba0b89243f2e9ecb0807) | fix | throw better errors for potential circular references |
| [48492524ea](https://github.com/angular/angular/commit/48492524ea4adfa232b0daee0d955924be31ebea) | fix | use mutable ResponseInit type for RESPONSE_INIT token |
### forms
| Commit | Type | Description |
| -- | -- | -- |
| [81772b420d](https://github.com/angular/angular/commit/81772b420dcda2cbe2a8cb75e50c6da2e1ecdc68) | feat | pass field directive to class config |
| [729b96476b](https://github.com/angular/angular/commit/729b96476b73f1670a0f7c6ab3f36be9d38ebcac) | refactor | rename field to fieldTree in FieldContext and ValidationError |
### language-service
| Commit | Type | Description |
| -- | -- | -- |
| [e0694df3ec](https://github.com/angular/angular/commit/e0694df3eccae3d31a4ea537dffe1db1368ef34a) | fix | avoid interpolation highlighting inside @let |
| [5047be4bc1](https://github.com/angular/angular/commit/5047be4bc1c6f6016263703c743f8033f669f0ee) | fix | Prevent language service from crashing on suggestion diagnostic errors |

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.0.5"></a>

# 21.0.5 (2025-12-11)

### core

| Commit                                                                                            | Type | Description                                                                    |
| ------------------------------------------------------------------------------------------------- | ---- | ------------------------------------------------------------------------------ |
| [69d243abb74](https://github.com/angular/angular/commit/69d243abb7438c37b9ef763755f8fb7fdee165be) | fix  | avoid false-positive deprecation when using `InjectionToken` with factory only |

### forms

| Commit                                                                                            | Type | Description                 |
| ------------------------------------------------------------------------------------------------- | ---- | --------------------------- |
| [4fd2b722b40](https://github.com/angular/angular/commit/4fd2b722b4054181a6e5f09a3cc657ae05541782) | fix  | fix signal forms type error |

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.0.4"></a>

# 21.0.4 (2025-12-10)

### compiler

| Commit                                                                                            | Type | Description                       |
| ------------------------------------------------------------------------------------------------- | ---- | --------------------------------- |
| [f901cc9eb32](https://github.com/angular/angular/commit/f901cc9eb328bed74fd7f09607e54154254d4a97) | perf | chain query creation instructions |

### compiler-cli

| Commit                                                                                            | Type | Description                                         |
| ------------------------------------------------------------------------------------------------- | ---- | --------------------------------------------------- |
| [65297c62011](https://github.com/angular/angular/commit/65297c62011ae353f8555738688a83a5fba5ea4e) | fix  | expand type for native controls with a dynamic type |

### forms

| Commit                                                                                            | Type | Description                                                                                             |
| ------------------------------------------------------------------------------------------------- | ---- | ------------------------------------------------------------------------------------------------------- |
| [f254ff4f2e0](https://github.com/angular/angular/commit/f254ff4f2e014064b4d6073341dec0c5a7a754bf) | feat | expose element on signal forms `Field` directive                                                        |
| [5880fbc73c6](https://github.com/angular/angular/commit/5880fbc73c6ac42976b3ada9803965bc20d047db) | feat | redo the signal forms metadata API                                                                      |
| [55fc677cef4](https://github.com/angular/angular/commit/55fc677cef4409302bc474ff316d392097a034e7) | fix  | add signals for dirty, hidden, and pending states in custom controls                                    |
| [cbb10179c80](https://github.com/angular/angular/commit/cbb10179c8098f6a20b0bc365a492f14e4d2a51a) | fix  | allow resetting with empty string                                                                       |
| [bf1c12cd932](https://github.com/angular/angular/commit/bf1c12cd932028dc4bb50914c64bbb6d882b6ec1) | fix  | memoize reads of child fields in signal forms ([#65802](https://github.com/angular/angular/pull/65802)) |
| [6d7475582f9](https://github.com/angular/angular/commit/6d7475582f95720b4487f663d339a18a25374481) | fix  | Reuse key in parent in compat structure                                                                 |

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.0.3"></a>

# 21.0.3 (2025-12-03)

### compiler-cli

| Commit                                                                                           | Type | Description                                               |
| ------------------------------------------------------------------------------------------------ | ---- | --------------------------------------------------------- |
| [5a80a48e96](https://github.com/angular/angular/commit/5a80a48e962f72825050202198b32abbfee66714) | fix  | avoid allocating an object for signals in production mode |
| [1f1856e897](https://github.com/angular/angular/commit/1f1856e897e0a10e2ca6d934c80fd69d1ac06210) | fix  | check that field radio button values are strings          |

### core

| Commit                                                                                           | Type | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------------------ |
| [8c3304c766](https://github.com/angular/angular/commit/8c3304c766131b031b736ee3fe2ec9c9a42fbe07) | fix  | run animation queue in environment injector context                                                                |
| [4bb085311e](https://github.com/angular/angular/commit/4bb085311e24966ef2dd673f23746988c449c7ff) | fix  | unable to inject viewProviders when host directive with providers is present                                       |
| [609699ae17](https://github.com/angular/angular/commit/609699ae1781a9160b0f474b7ebe0998221c0722) | perf | tree shake unused dynamic `[field]` binding instructions ([#65599](https://github.com/angular/angular/pull/65599)) |

### forms

| Commit                                                                                           | Type | Description                                                                                  |
| ------------------------------------------------------------------------------------------------ | ---- | -------------------------------------------------------------------------------------------- |
| [6b4ab876e8](https://github.com/angular/angular/commit/6b4ab876e811b4e3a6f9617a2b379f62cf187403) | feat | Allows transforms on `FormUiControl` signals                                                 |
| [a5dbd4b382](https://github.com/angular/angular/commit/a5dbd4b382417fc111d6a622862a015c47027a41) | fix  | support dynamic `[field]` bindings ([#65599](https://github.com/angular/angular/pull/65599)) |

### http

| Commit                                                                                           | Type | Description                                          |
| ------------------------------------------------------------------------------------------------ | ---- | ---------------------------------------------------- |
| [20474d3f0f](https://github.com/angular/angular/commit/20474d3f0fd7c64071add6e84acf720627e5c19b) | fix  | enable XSRF protection for same-origin absolute URLs |

### router

| Commit                                                                                           | Type | Description                                         |
| ------------------------------------------------------------------------------------------------ | ---- | --------------------------------------------------- |
| [48b89f9fbe](https://github.com/angular/angular/commit/48b89f9fbe16acff8b2f3f37853e745ed43d3a32) | fix  | handle errors from view transition finished promise |

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.0.2"></a>

# 21.0.2 (2025-12-01)

### compiler

| Commit                                                                                           | Type | Description                                                       |
| ------------------------------------------------------------------------------------------------ | ---- | ----------------------------------------------------------------- |
| [78fd159b78](https://github.com/angular/angular/commit/78fd159b78d32cb8b94891e3fc6013076d7838af) | fix  | prevent XSS via SVG animation `attributeName` and MathML/SVG URLs |

<!-- CHANGELOG SPLIT MARKER -->

<a name="20.3.15"></a>

# 20.3.15 (2025-12-01)

### compiler

| Commit                                                                                           | Type | Description                                                       |
| ------------------------------------------------------------------------------------------------ | ---- | ----------------------------------------------------------------- |
| [d1ca8ae043](https://github.com/angular/angular/commit/d1ca8ae04390f050039fdb653a6147d75d48f81e) | fix  | prevent XSS via SVG animation `attributeName` and MathML/SVG URLs |

<!-- CHANGELOG SPLIT MARKER -->

<a name="19.2.17"></a>

# 19.2.17 (2025-12-01)

### compiler

| Commit                                                                                           | Type | Description                                                       |
| ------------------------------------------------------------------------------------------------ | ---- | ----------------------------------------------------------------- |
| [7c42e2ebeb](https://github.com/angular/angular/commit/7c42e2ebebc135e9949a9e9a0295ef3ccf261b82) | fix  | prevent XSS via SVG animation `attributeName` and MathML/SVG URLs |

<!-- CHANGELOG SPLIT MARKER -->

<a name="19.2.16"></a>

# 19.2.16 (2025-11-26)

### http

| Commit                                                                                           | Type | Description                                          |
| ------------------------------------------------------------------------------------------------ | ---- | ---------------------------------------------------- |
| [05fe6686a9](https://github.com/angular/angular/commit/05fe6686a97fa0bcd3cf157805b3612033f975bc) | fix  | prevent XSRF token leakage to protocol-relative URLs |

<!-- CHANGELOG SPLIT MARKER -->

<a name="20.3.14"></a>

# 20.3.14 (2025-11-25)

### http

| Commit                                                                                           | Type | Description                                          |
| ------------------------------------------------------------------------------------------------ | ---- | ---------------------------------------------------- |
| [0276479e7d](https://github.com/angular/angular/commit/0276479e7d0e280e0f8d26fa567d3b7aa97a516f) | fix  | prevent XSRF token leakage to protocol-relative URLs |

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.0.1"></a>

# 21.0.1 (2025-11-25)

### compiler-cli

| Commit                                                                                           | Type | Description                                                 |
| ------------------------------------------------------------------------------------------------ | ---- | ----------------------------------------------------------- |
| [39c577bc36](https://github.com/angular/angular/commit/39c577bc362b263896b38c9486131d4342b8f1a8) | fix  | do not type check native controls with ControlValueAccessor |
| [8d3a89a477](https://github.com/angular/angular/commit/8d3a89a477e273b9b2223b6db775955e35105963) | fix  | escape angular control flow in jsdoc                        |
| [bc34083d34](https://github.com/angular/angular/commit/bc34083d349a7d30efb43df97de0509fd85a1996) | fix  | ignore non-existent files                                   |

### core

| Commit                                                                                           | Type | Description                                                   |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------- |
| [0ea1e07174](https://github.com/angular/angular/commit/0ea1e071742a031d9afb7a39f8e23082cd88ca2e) | fix  | apply bootstrap-options migration to `platformBrowserDynamic` |
| [70507b8c1c](https://github.com/angular/angular/commit/70507b8c1ce733b8232a12fa45037ee219b5b102) | fix  | debug data causing memory leak for root effects               |
| [a55482fca3](https://github.com/angular/angular/commit/a55482fca3b7e4f39d95f8ff236b6619e59b8190) | fix  | notify profiler events in case of errors                      |
| [49ad7c6508](https://github.com/angular/angular/commit/49ad7c650818ee7db321a24c89282dbf9bb250f3) | fix  | use injected `DOCUMENT` for `CSP_NONCE`                       |
| [cc1ec09931](https://github.com/angular/angular/commit/cc1ec099315b0f429d0b0f07c9b1bf686668db6b) | perf | avoid repeat searches for field directive                     |

### forms

| Commit                                                                                           | Type | Description                                           |
| ------------------------------------------------------------------------------------------------ | ---- | ----------------------------------------------------- |
| [7d5c7cf99a](https://github.com/angular/angular/commit/7d5c7cf99aa5c6490f8bea950b04bd56073582a1) | feat | add DI option for classes on `Field` directive        |
| [8acf5d2756](https://github.com/angular/angular/commit/8acf5d27563ec51cc76971732d50e1f4142a3fe3) | fix  | allow dynamic `type` bindings on signal form controls |
| [de5fca94c5](https://github.com/angular/angular/commit/de5fca94c5cfafa9098d9ee270f448b90d4ac06f) | fix  | run reset as untracked                                |

### http

| Commit                                                                                           | Type | Description                                          |
| ------------------------------------------------------------------------------------------------ | ---- | ---------------------------------------------------- |
| [3240d856d9](https://github.com/angular/angular/commit/3240d856d942727372a705252f7c8c115394a41e) | fix  | prevent XSRF token leakage to protocol-relative URLs |

### migrations

| Commit                                                                                           | Type | Description                                              |
| ------------------------------------------------------------------------------------------------ | ---- | -------------------------------------------------------- |
| [f394215b14](https://github.com/angular/angular/commit/f394215b14d59c49e1433472ecdd2fd5547cc769) | fix  | detect structural ngTemplateOutlet and ngComponentOutlet |

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.0.0"></a>

# 21.0.0 (2025-11-19)

[Blog post "Announcing Angular v21"](http://goo.gle/angular-v21-blog).

## Breaking Changes

### common

- (test only) - `TestBed` now provides a fake `PlatformLocation`
  implementation that supports the Navigation API. This may break some
  tests, though we have not observed any failures internally. You can revert to the
  old default for `TestBed` by providing the `MockPlatformLocation` from
  `@angular/common/testing` in your providers:
  `{provide: PlatformLocation, useClass: MockPlatformLocation}`
- `ngComponentOutletContent` is now of type `Node[][] | undefined` instead of `any[][] | undefined`.
- NgModuleFactory has been removed, use NgModule instead.

### compiler-cli

- - Previously hidden type issues in host bindings may show up in your builds. Either resolve the type issues or set `"typeCheckHostBindings": false` in the `angularCompilerOptions` section of your tsconfig.
- The Angular compiler now produces an error when the
  the `emitDeclarationOnly` TS compiler option is enabled as this mode is
  not supported.

### core

- The server-side bootstrapping process has been changed to eliminate the reliance on a global platform injector.

  Before:

  ```ts
  const bootstrap = () => bootstrapApplication(AppComponent, config);
  ```

  After:

  ```ts
  const bootstrap = (context: BootstrapContext) =>
    bootstrapApplication(AppComponent, config, context);
  ```

  A schematic is provided to automatically update `main.server.ts` files to pass the `BootstrapContext` to the `bootstrapApplication` call.

  In addition, `getPlatform()` and `destroyPlatform()` will now return `null` and be a no-op respectively when running in a server environment.

- Using a combination of `provideZoneChangeDetection`
  while also removing ZoneJS polyfills will no longer result in the
  internal scheduler being disabled. All Angular applications now
  consistently use the same scheduler, and those with the Zone change detection
  provider include additional automatic scheduling behaviors based on
  NgZone stabilization.
- - TypeScript versions less than 5.9 are no longer supported.
- (test only) - Using `provideZoneChangeDetection` in the
  TestBed providers would previously prevent `TestBed` from rethrowing
  errors as it should. Errors in the test will now be rethrown, regardless
  of the usage of `provideZoneChangeDetection`. Tests should be adjusted to
  prevent or account for these errors. As in previous major versions,
  this behavior can be disabled with `rethrowApplicationErrors: false` in
  `configureTestingModule` as a last resort.
- `ignoreChangesOutsideZone` is no longer available as an
  option for configuring ZoneJS change detection behavior.
- Angular no longer provides a change detection scheduler
  for ZoneJS-based change detection by default. Add
  `provideZoneChangeDetection` to the providers of your
  `bootstrapApplication` function or your `AppModule` (if using
  `bootstrapModule`). This provider addition will be covered by an
  automated migration.
- `moduleId` was removed from `Component` metadata.
- The `interpolation` option on Components has been removed. Only the default `{{ ... }}` is now supported.

### elements

- Fix signal input getter behavior in custom elements.

  Before this change, signal inputs in custom elements required function calls to access their values (`elementRef.newInput()`), while decorator inputs were accessed directly (`elementRef.oldInput`). This inconsistency caused confusion and typing difficulties.

  The getter behavior has been standardized so signal inputs can now be accessed directly, matching the behavior of decorator inputs:

  Before:
  - Decorator Input: `elementRef.oldInput`
  - Signal Input: `elementRef.newInput()`

  After:
  - Decorator Input: `elementRef.oldInput`
  - Signal Input: `elementRef.newInput`

### forms

- This new directive will conflict with existing FormArray directives or formArray inputs on the same element.

### platform-browser

- The deprecated `ApplicationConfig` export from `@angular/platform-browser` has been removed.
  Please import `ApplicationConfig` from `@angular/core` instead.

### router

- `lastSuccessfulNavigation` is now a signal and needs to be invoked
- Router navigations may take several additional
  microtasks to complete. Tests have been found to often be highly
  dependent on the exact timing of navigation completions with respect to
  the microtask queue. The most common fix for tests is to ensure all
  navigations have been completed before making assertions. On rare
  occasions, this can also affect production applications. This can be
  caused by multiple subscriptions to router state throughout the application,
  both of which trigger navigations that happened to not conflict with the
  previous timing.

### upgrade

- `UpgradeAdapter` is no longer available. Use
  `upgrade/static` instead

### zone.js

- IE/Non-Chromium Edge are not supported anymore.

## Deprecations

### http

- `HttpResponseBase.statusText` is deprecated

### common

| Commit                                                                                           | Type     | Description                                                                                                    |
| ------------------------------------------------------------------------------------------------ | -------- | -------------------------------------------------------------------------------------------------------------- |
| [c795960ada](https://github.com/angular/angular/commit/c795960ada1a7e21b8bee411e20a08c700b6e385) | feat     | Add experimental support for the Navigation API ([#63406](https://github.com/angular/angular/pull/63406))      |
| [9eac43cf46](https://github.com/angular/angular/commit/9eac43cf46993442e9de5764e2ccca98e3837939) | feat     | Support of optional keys for the KeyValue pipe ([#48814](https://github.com/angular/angular/pull/48814))       |
| [a1868c9d13](https://github.com/angular/angular/commit/a1868c9d13991d24f893499406b29a5f2e0a388b) | feat     | update to cldr 47 ([#64032](https://github.com/angular/angular/pull/64032))                                    |
| [196fa500a3](https://github.com/angular/angular/commit/196fa500a3c282af5158fa2873df8e2a73243493) | fix      | properly type ngComponentOutlet ([#64561](https://github.com/angular/angular/pull/64561))                      |
| [7a4b225c57](https://github.com/angular/angular/commit/7a4b225c57d8e390ec06731f5211d52d14da3a9c) | refactor | improve typing of `ngComponentOutletContent` ([#63674](https://github.com/angular/angular/pull/63674))         |
| [25f593ce2a](https://github.com/angular/angular/commit/25f593ce2a623add0cbd4ab3bb0d4987793e4f34) | refactor | remove`ngModuleFactory` input of `NgComponentOutlet` ([#62838](https://github.com/angular/angular/pull/62838)) |

### compiler

| Commit                                                                                           | Type | Description                                           |
| ------------------------------------------------------------------------------------------------ | ---- | ----------------------------------------------------- |
| [ecea909bcc](https://github.com/angular/angular/commit/ecea909bccc3d6a3c33e77e1feb4ad0926e72f9e) | fix  | don't choke on unbalanced parens in declaration block |
| [04dd75ba94](https://github.com/angular/angular/commit/04dd75ba948889601bf611254021577aba458d4c) | fix  | support arbitrary nesting in :host-context()          |
| [f54cc4f28a](https://github.com/angular/angular/commit/f54cc4f28abb9ded190ae33619e5ca7073df08a6) | fix  | support commas in :host() argument                    |
| [814b2713f5](https://github.com/angular/angular/commit/814b2713f56f94372db7e15e0a86f089a88f888d) | fix  | support complex selectors in :nth-child()             |
| [aad6ced0ef](https://github.com/angular/angular/commit/aad6ced0ef5e535d1a6eae7c79df4e03ea73b7f2) | fix  | support one additional level of nesting in :host()    |

### compiler-cli

| Commit                                                                                           | Type | Description                                                                                                                            |
| ------------------------------------------------------------------------------------------------ | ---- | -------------------------------------------------------------------------------------------------------------------------------------- |
| [563dbd998c](https://github.com/angular/angular/commit/563dbd998c86e850b3c4dde4c7cee00d7c9d7581) | feat | Adds diagnostic for misconfigured `@defer` triggers ([#64069](https://github.com/angular/angular/pull/64069))                          |
| [0571b335b9](https://github.com/angular/angular/commit/0571b335b9b11459b73a19679671eae97fbe1683) | feat | enable type checking of host bindings by default ([#63654](https://github.com/angular/angular/pull/63654))                             |
| [5b55200edf](https://github.com/angular/angular/commit/5b55200edfd12fa7dcdb6570885e0c52a9cc5ec0) | fix  | allow value to be set on radio fields                                                                                                  |
| [ab98b2425f](https://github.com/angular/angular/commit/ab98b2425f4c4cb59927aa686818ecee99e634c7) | fix  | capture metadata for undecorated fields ([#63957](https://github.com/angular/angular/pull/63957))                                      |
| [be7110342b](https://github.com/angular/angular/commit/be7110342b61d837822524d4f60f56a7f859f594) | fix  | disallow compiling with the `emitDeclarationOnly` TS compiler option enabled ([#61609](https://github.com/angular/angular/pull/61609)) |
| [bd322ca410](https://github.com/angular/angular/commit/bd322ca4100c8e51df7c71377161c2c9412d1b83) | fix  | do not flag custom control required inputs as missing when field is present                                                            |
| [471da8a311](https://github.com/angular/angular/commit/471da8a311fa7f77815bdf0199943cfa50d45181) | fix  | infer type of custom field controls                                                                                                    |
| [96cb0cffda](https://github.com/angular/angular/commit/96cb0cffda55516e01613958d1268872f1070722) | fix  | infer types of signal forms set on native inputs                                                                                       |
| [71ab11ccf0](https://github.com/angular/angular/commit/71ab11ccf0f0daaffb49779d5f90b9e2da76dbd5) | fix  | make field detection logic more robust                                                                                                 |
| [1f389b8b97](https://github.com/angular/angular/commit/1f389b8b97600ee382ff842e066abc2ca31c442f) | fix  | missingStructuralDirective diagnostic produces false negatives ([#64579](https://github.com/angular/angular/pull/64579))               |
| [7fd3db0423](https://github.com/angular/angular/commit/7fd3db04232d63f1b48ec389bbb62d9ca277fcf9) | fix  | remove internal syntax-related flags ([#63787](https://github.com/angular/angular/pull/63787))                                         |
| [c371251e4c](https://github.com/angular/angular/commit/c371251e4c2e7bc1ab6da7c51b05e047bdfe6068) | fix  | report invalid bindings on form controls                                                                                               |
| [01290ab275](https://github.com/angular/angular/commit/01290ab275599ee6887f9c2139a16f833eaa7071) | fix  | use any when checking field interface conformance                                                                                      |

### core

| Commit                                                                                           | Type     | Description                                                                                                                               |
| ------------------------------------------------------------------------------------------------ | -------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| [809a4ed8c1](https://github.com/angular/angular/commit/809a4ed8c110ca930cb1c6bad309f8bfcaf7ceb8) | feat     | Add migration for zoneless by default. ([#63042](https://github.com/angular/angular/pull/63042))                                          |
| [2a7a5de53f](https://github.com/angular/angular/commit/2a7a5de53fd6fb5714c06c63dd1dad5718086083) | feat     | Allow passing application providers in `bootstrapModule` options ([#64354](https://github.com/angular/angular/pull/64354))                |
| [28926ba92c](https://github.com/angular/angular/commit/28926ba92cf3da7e45a7b8938bba49febdf58eb7) | feat     | introduce `BootstrapContext` for improved server bootstrapping ([#63562](https://github.com/angular/angular/pull/63562))                  |
| [c2d376b85a](https://github.com/angular/angular/commit/c2d376b85aa6eea2c4d7ec3207df6767f5739945) | feat     | make SimpleChanges generic ([#64535](https://github.com/angular/angular/pull/64535))                                                      |
| [ad2376435b](https://github.com/angular/angular/commit/ad2376435b4bcfdb695d841272f8234ab2a7cca5) | feat     | support IntersectionObserver options in viewport triggers ([#64130](https://github.com/angular/angular/pull/64130))                       |
| [539717f58a](https://github.com/angular/angular/commit/539717f58a9bff1f8aacc857657b7df573d0bb70) | feat     | support regular expressions in templates ([#63887](https://github.com/angular/angular/pull/63887))                                        |
| [ab415f3d7f](https://github.com/angular/angular/commit/ab415f3d7f23cef8e00595e9cf6af2c8b764a8ae) | fix      | control not recognized when input has directive injecting ViewContainerRef ([#64368](https://github.com/angular/angular/pull/64368))      |
| [f008045ded](https://github.com/angular/angular/commit/f008045dedc773f70dd6f1ced73e689fb4436d6d) | fix      | do not rename ARIA property bindings to attributes ([#63925](https://github.com/angular/angular/pull/63925))                              |
| [1352fbdbf2](https://github.com/angular/angular/commit/1352fbdbf2542c39715045c7a6c0f6aa41516b02) | fix      | Drop special-case disables automatic change detection scheduling ([#63846](https://github.com/angular/angular/pull/63846))                |
| [c0791e1887](https://github.com/angular/angular/commit/c0791e1887590b862bfed9333c5c90be3ac487d0) | fix      | drop support for TypeScript 5.8 ([#63589](https://github.com/angular/angular/pull/63589))                                                 |
| [aa389a691b](https://github.com/angular/angular/commit/aa389a691bc2e5726a0ded73d30962c29faab680) | fix      | ensure `@for` iteration over field is reactive ([#64113](https://github.com/angular/angular/pull/64113))                                  |
| [fec7c288e9](https://github.com/angular/angular/commit/fec7c288e96dd32f5861124384dbef4d5350d437) | fix      | Error on invalid APP_ID ([#63252](https://github.com/angular/angular/pull/63252))                                                         |
| [d399d7d02b](https://github.com/angular/angular/commit/d399d7d02b66c485cc5479dabd349d017a002692) | fix      | Explicit Zone CD in TestBed providers should not override TestBed error handler ([#63404](https://github.com/angular/angular/pull/63404)) |
| [92e09adc0a](https://github.com/angular/angular/commit/92e09adc0a191ec599915e20b0835bf455bc572b) | fix      | Remove ignoreChangesOutsideZone option ([#62700](https://github.com/angular/angular/pull/62700))                                          |
| [45fed3d201](https://github.com/angular/angular/commit/45fed3d2011bf6feffa8ee1365a5c88d603f826c) | fix      | Remove Zone-based change provider from internals by default ([#63382](https://github.com/angular/angular/pull/63382))                     |
| [c9f977833e](https://github.com/angular/angular/commit/c9f977833ebed6f89afd38f65c03e9b3808f2b07) | fix      | skip Angular formatting when formatting signals recursively                                                                               |
| [67fbd5ff1e](https://github.com/angular/angular/commit/67fbd5ff1eef80d98e5e9c633a15bb1ae27134bb) | fix      | SSR error in signal forms                                                                                                                 |
| [c241038111](https://github.com/angular/angular/commit/c241038111cf602669dd68ef516f147889ab02e5) | fix      | update symbols ([#64481](https://github.com/angular/angular/pull/64481))                                                                  |
| [a5e5dbbc16](https://github.com/angular/angular/commit/a5e5dbbc16f605cce6dd72a82ddb9110e655a89b) | refactor | remove `moduleId` from Component metadata ([#63482](https://github.com/angular/angular/pull/63482))                                       |
| [9a16718b13](https://github.com/angular/angular/commit/9a16718b13a03df2941c31cb968dcbfa6904a481) | refactor | remove deprecated `interpolation` option on Components. ([#63474](https://github.com/angular/angular/pull/63474))                         |

### elements

| Commit                                                                                           | Type | Description                                                                                   |
| ------------------------------------------------------------------------------------------------ | ---- | --------------------------------------------------------------------------------------------- |
| [be0455adda](https://github.com/angular/angular/commit/be0455adda7d92f741105b3599e7922f099cc024) | fix  | return value on signal input getter ([#62113](https://github.com/angular/angular/pull/62113)) |

### forms

| Commit                                                                                           | Type | Description                                                                                                                               |
| ------------------------------------------------------------------------------------------------ | ---- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| [a278ee358c](https://github.com/angular/angular/commit/a278ee358c4d111cf29eb8d3d8eb1fe1799c8495) | feat | add `debounce()` rule for signal forms                                                                                                    |
| [b8314bd340](https://github.com/angular/angular/commit/b8314bd3409500b8540d1ce00a330fdb2f0fc83a) | feat | add experimental signal-based forms ([#63408](https://github.com/angular/angular/pull/63408))                                             |
| [0dd95c503f](https://github.com/angular/angular/commit/0dd95c503f4b07b478e505b99aaa63419a340095) | feat | Add FormArrayDirective ([#55880](https://github.com/angular/angular/pull/55880))                                                          |
| [d201cd2c2b](https://github.com/angular/angular/commit/d201cd2c2bdb418fd1b595320855c35eb91e1e5b) | feat | Prevents marking fields as touched/dirty when state is hidden/readonly/disabled ([#63633](https://github.com/angular/angular/pull/63633)) |
| [9c5e969f51](https://github.com/angular/angular/commit/9c5e969f51448aad05a7e0ac83143b4b5ae477b4) | fix  | bind invalid input in custom controls ([#64526](https://github.com/angular/angular/pull/64526))                                           |
| [10ef96adb3](https://github.com/angular/angular/commit/10ef96adb3d989781c7ec5116a70b6518866ee27) | fix  | consistent treatment of empty ([#63456](https://github.com/angular/angular/pull/63456))                                                   |
| [d89e522a1f](https://github.com/angular/angular/commit/d89e522a1f07c4b2ac7fd2b926ae44658f9394d4) | fix  | debounce updates from interop controls                                                                                                    |
| [c0d88c37c9](https://github.com/angular/angular/commit/c0d88c37c983991236177a0337f5cab75054abf7) | fix  | Emit `FormResetEvent` when resetting control ([#64024](https://github.com/angular/angular/pull/64024))                                    |
| [94b0afec00](https://github.com/angular/angular/commit/94b0afec0007f0f5142a39def2849a1ba9e5030d) | fix  | implement interoperability between signal forms and reactive forms ([#64471](https://github.com/angular/angular/pull/64471))              |
| [a1ac9a6415](https://github.com/angular/angular/commit/a1ac9a64154c0a9206e11343b195f287dba3425d) | fix  | interop supports CVAs with signals ([#64618](https://github.com/angular/angular/pull/64618))                                              |
| [505bde1fed](https://github.com/angular/angular/commit/505bde1fede95ec907c6b028db4b3c9237899f30) | fix  | mark field as dirty when value is changed by `ControlValueAccessor` ([#64471](https://github.com/angular/angular/pull/64471))             |
| [3529877772](https://github.com/angular/angular/commit/3529877772f7a777d467c99e3d95b465b1b1d82c) | fix  | mark field as dirty when value is changed by a bound control ([#64483](https://github.com/angular/angular/pull/64483))                    |
| [fd9af2afaf](https://github.com/angular/angular/commit/fd9af2afaf6c239bbbba50f2f016ecf9b83133c4) | fix  | only propagate schema defined properties from field to control ([#64446](https://github.com/angular/angular/pull/64446))                  |
| [91d8d55a80](https://github.com/angular/angular/commit/91d8d55a80a1d1894827ef06e38e56de6e661575) | fix  | Set error message of a schema error.                                                                                                      |
| [f4d1017c25](https://github.com/angular/angular/commit/f4d1017c25813b290697d8e1a829983a7b1bca27) | fix  | test that common field states are propagated to controls ([#63884](https://github.com/angular/angular/pull/63884))                        |
| [acd7c83597](https://github.com/angular/angular/commit/acd7c83597ad376ec9a48421b3b291951ca2d75e) | fix  | test that min/max properties are propagated to controls ([#63884](https://github.com/angular/angular/pull/63884))                         |
| [71e8672837](https://github.com/angular/angular/commit/71e8672837eb6c2da2570eb2341e896fbf7ca5a3) | fix  | test that minLength/maxLength properties are propagated to controls ([#63884](https://github.com/angular/angular/pull/63884))             |
| [507b3466ee](https://github.com/angular/angular/commit/507b3466eec648a706f10d2805e67e53522e9654) | perf | implement change detection for field control bindings                                                                                     |
| [781a3299f9](https://github.com/angular/angular/commit/781a3299f9e16e16902f12f7e7c80c10f15f788a) | perf | only update interop controls when bound field changes                                                                                     |
| [32f86d35f7](https://github.com/angular/angular/commit/32f86d35f7cd177b6e4525a7ae97909888d9fee4) | perf | optimize `[field]` binding instructions ([#64351](https://github.com/angular/angular/pull/64351))                                         |

### http

| Commit                                                                                           | Type     | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------ | -------- | ------------------------------------------------------------------------------------------------------------------------ |
| [2739b7975b](https://github.com/angular/angular/commit/2739b7975ba40a8cfc3b00f0c444a3a147f7f553) | feat     | add referrerPolicy option to HttpResource ([#64283](https://github.com/angular/angular/pull/64283))                      |
| [07e678872f](https://github.com/angular/angular/commit/07e678872f91236f5c258f98a7aea536b5a200ac) | feat     | Add reponseType property to HttpResponse and HttpErrorResponse ([#63043](https://github.com/angular/angular/pull/63043)) |
| [5cbdefcf11](https://github.com/angular/angular/commit/5cbdefcf118e9c228bc887be30114afc84a4db2a) | feat     | add support for fetch referrerPolicy option in HttpClient ([#64116](https://github.com/angular/angular/pull/64116))      |
| [4bed062bc9](https://github.com/angular/angular/commit/4bed062bc9f2a0a66c9af3cb8aeb42ee023c6393) | feat     | Provide http services in root ([#56212](https://github.com/angular/angular/pull/56212))                                  |
| [0e4e17cd97](https://github.com/angular/angular/commit/0e4e17cd97d7a5f7ccc40405ba2103a78e1e1298) | refactor | `HttpResponseBase.statusText` ([#64176](https://github.com/angular/angular/pull/64176))                                  |

### language-server

| Commit                                                                                           | Type | Description                       |
| ------------------------------------------------------------------------------------------------ | ---- | --------------------------------- |
| [3f7111a9c3](https://github.com/angular/angular/commit/3f7111a9c38c6fd00af705a3045f2909f47b505b) | fix  | fix directory renaming on Windows |

### language-service

| Commit                                                                                           | Type | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------------- |
| [89095946cf](https://github.com/angular/angular/commit/89095946cff051c5613b8f54ec722d08cd47c709) | fix  | address potential memory leak during project creation                                                         |
| [80e00ff4e5](https://github.com/angular/angular/commit/80e00ff4e5833c35e19cfca271dff51121108333) | fix  | prevent interpolation from superseding block braces ([#64392](https://github.com/angular/angular/pull/64392)) |

### migrations

| Commit                                                                                           | Type | Description                                                                                                            |
| ------------------------------------------------------------------------------------------------ | ---- | ---------------------------------------------------------------------------------------------------------------------- |
| [6ddb250391](https://github.com/angular/angular/commit/6ddb2503913fa8698a0e07e88ce49598cc7af481) | feat | add migration to convert ngClass to use class ([#62983](https://github.com/angular/angular/pull/62983))                |
| [8dc8914c8a](https://github.com/angular/angular/commit/8dc8914c8a2be44e30b512670628a558bdd7f1f4) | feat | add migration to convert ngStyle to use style ([#63517](https://github.com/angular/angular/pull/63517))                |
| [861cee34e0](https://github.com/angular/angular/commit/861cee34e0e9b5562cfe70d245f30b7ddea7d8fd) | feat | Adds migration for deprecated router testing module ([#64217](https://github.com/angular/angular/pull/64217))          |
| [75fc16b261](https://github.com/angular/angular/commit/75fc16b261de5312c60834330680052f07138480) | feat | Adds support for CommonModule to standalone migration ([#64138](https://github.com/angular/angular/pull/64138))        |
| [655a99d0c6](https://github.com/angular/angular/commit/655a99d0c60f70bbc14968133cfe6ab251cedc92) | fix  | fix bug in ngclass-to-class migration ([#63617](https://github.com/angular/angular/pull/63617))                        |
| [62bbce63b7](https://github.com/angular/angular/commit/62bbce63b7abcb22f1fd453c59e0063aae3b189c) | fix  | remove error for no matching files in control flow migration ([#64253](https://github.com/angular/angular/pull/64253)) |

### platform-browser

| Commit                                                                                           | Type     | Description                                                                                            |
| ------------------------------------------------------------------------------------------------ | -------- | ------------------------------------------------------------------------------------------------------ |
| [ce8db665f9](https://github.com/angular/angular/commit/ce8db665f984005264de0eb8b452370972823c17) | refactor | remove deprecated `ApplicationConfig` export ([#63529](https://github.com/angular/angular/pull/63529)) |

### router

| Commit                                                                                           | Type | Description                                                                                                                 |
| ------------------------------------------------------------------------------------------------ | ---- | --------------------------------------------------------------------------------------------------------------------------- |
| [4e0fc81491](https://github.com/angular/angular/commit/4e0fc81491bfe6e4eac5c59ef0bde908a3d58413) | feat | convert `lastSuccessfulNavigation` to signal ([#63057](https://github.com/angular/angular/pull/63057))                      |
| [5e61e8d3c3](https://github.com/angular/angular/commit/5e61e8d3c3a80b21116e3188805de556e4f0c496) | fix  | Fix memory leak through Navigation.abort and canDeactivate guards ([#64141](https://github.com/angular/angular/pull/64141)) |
| [f6a73f1913](https://github.com/angular/angular/commit/f6a73f19131b2befa74f4ea3f941038603958ac0) | fix  | Respect custom `UrlSerializer` handling of query parameters ([#64449](https://github.com/angular/angular/pull/64449))       |
| [5b53535dd1](https://github.com/angular/angular/commit/5b53535dd16af7d3ea7b0216984560fd2223d76c) | fix  | Update recognize stage to use internally async/await ([#62994](https://github.com/angular/angular/pull/62994))              |

### upgrade

| Commit                                                                                           | Type | Description                                                                                |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------ |
| [f86846555b](https://github.com/angular/angular/commit/f86846555bba44b2fb71d012fe4eebf82a0f5d00) | fix  | Remove deprecated UpgradeAdapter ([#61659](https://github.com/angular/angular/pull/61659)) |

<!-- CHANGELOG SPLIT MARKER -->

<a name="20.3.13"></a>

# 20.3.13 (2025-11-19)

<!-- CHANGELOG SPLIT MARKER -->

<a name="20.3.12"></a>

# 20.3.12 (2025-11-14)

<!-- CHANGELOG SPLIT MARKER -->

<a name="20.3.11"></a>

# 20.3.11 (2025-11-12)

### common

| Commit                                                                                           | Type | Description                                             |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------- |
| [5047849a4a](https://github.com/angular/angular/commit/5047849a4a1857471b78b7ba874f39ecd6175a6b) | fix  | remove placeholder image listeners once view is removed |

### compiler

| Commit                                                                                           | Type | Description                                        |
| ------------------------------------------------------------------------------------------------ | ---- | -------------------------------------------------- |
| [f9d0818087](https://github.com/angular/angular/commit/f9d08180876eb0aee5e5c489be734b07a7cc664e) | fix  | support arbitrary nesting in :host-context()       |
| [106b9040df](https://github.com/angular/angular/commit/106b9040dfe03bd8deb0eabccc29e07f734b6ab5) | fix  | support commas in :host() argument                 |
| [9419ea348a](https://github.com/angular/angular/commit/9419ea348a296b50f13ac2e23ea9a00b336989b8) | fix  | support complex selectors in :nth-child()          |
| [036c5d2a07](https://github.com/angular/angular/commit/036c5d2a073f8e48704ec0d405ca997eedb721e9) | fix  | support one additional level of nesting in :host() |

### core

| Commit                                                                                           | Type | Description                         |
| ------------------------------------------------------------------------------------------------ | ---- | ----------------------------------- |
| [dcdd1bcdbb](https://github.com/angular/angular/commit/dcdd1bcdbbd2a2fb4bd1fc4330259824d0bc8cb9) | fix  | skip leave animations on view swaps |

<!-- CHANGELOG SPLIT MARKER -->

<a name="20.3.10"></a>

# 20.3.10 (2025-11-05)

### compiler-cli

| Commit                                                                                           | Type | Description                                |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------ |
| [840db59dc1](https://github.com/angular/angular/commit/840db59dc1a9beb0b4e63799b5d56c2f096a1bab) | fix  | make required inputs diagnostic less noisy |

### migrations

| Commit                                                                                           | Type | Description                                                                  |
| ------------------------------------------------------------------------------------------------ | ---- | ---------------------------------------------------------------------------- |
| [a45e6b2b66](https://github.com/angular/angular/commit/a45e6b2b66f669c532d6bffbab65058edabcacd9) | fix  | Prevent removal of templates referenced with preceding whitespace characters |

<!-- CHANGELOG SPLIT MARKER -->

<a name="20.3.9"></a>

# 20.3.9 (2025-10-29)

<!-- CHANGELOG SPLIT MARKER -->

<a name="20.3.7"></a>

# 20.3.7 (2025-10-22)

### animations

| Commit                                                                                           | Type | Description                                                                                        |
| ------------------------------------------------------------------------------------------------ | ---- | -------------------------------------------------------------------------------------------------- |
| [bd38cd45a5](https://github.com/angular/angular/commit/bd38cd45a5fb81e92b91e582d7b13aa3b21f3839) | fix  | account for `Element.animate` exceptions ([#64506](https://github.com/angular/angular/pull/64506)) |

### compiler

| Commit                                                                                           | Type | Description                                                                                            |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------ |
| [891f180262](https://github.com/angular/angular/commit/891f18026243bcf8c8b82881a73dffa283d0dd11) | fix  | correctly compile long numeric HTML entities ([#64297](https://github.com/angular/angular/pull/64297)) |

### compiler-cli

| Commit                                                                                           | Type | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------------------------ |
| [371274bfc6](https://github.com/angular/angular/commit/371274bfc6d5690390f90161106b60d80939fe75) | fix  | missingStructuralDirective diagnostic produces false negatives ([#64470](https://github.com/angular/angular/pull/64470)) |

### core

| Commit                                                                                           | Type | Description                                                                                                                            |
| ------------------------------------------------------------------------------------------------ | ---- | -------------------------------------------------------------------------------------------------------------------------------------- |
| [4c89a267c3](https://github.com/angular/angular/commit/4c89a267c3b49e928332232ec2a3023f6fb4046d) | fix  | pass element removal property through in all locations ([#64565](https://github.com/angular/angular/pull/64565))                       |
| [2fad4d4ab6](https://github.com/angular/angular/commit/2fad4d4ab63a2a8326af02b0f2f7d285c7f42e0d) | fix  | prevent duplicate nodes from being retained with fast `animate.leave`` calls ([#64592](https://github.com/angular/angular/pull/64592)) |

### router

| Commit                                                                                           | Type | Description                                                                                                             |
| ------------------------------------------------------------------------------------------------ | ---- | ----------------------------------------------------------------------------------------------------------------------- |
| [cfd8ed3fff](https://github.com/angular/angular/commit/cfd8ed3fff02af93b3fbd2e3f3a47128bd3582bf) | fix  | Fix outlet serialization and parsing with no primary children ([#64505](https://github.com/angular/angular/pull/64505)) |
| [182fe78f91](https://github.com/angular/angular/commit/182fe78f91d04ac8d25a32bce0ea180a6fe557ce) | fix  | Surface parse errors in Router.parseUrl ([#64503](https://github.com/angular/angular/pull/64503))                       |

<!-- CHANGELOG SPLIT MARKER -->

<a name="20.3.6"></a>

# 20.3.6 (2025-10-16)

### core

| Commit                                                                                           | Type | Description                                                                           |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------- |
| [911d6822cb](https://github.com/angular/angular/commit/911d6822cb18dabf4f72312dfc2e2ef9904bf6c2) | fix  | update animation scheduling ([#64441](https://github.com/angular/angular/pull/64441)) |

### platform-browser

| Commit                                                                                           | Type | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| [2ece42866d](https://github.com/angular/angular/commit/2ece42866d0ee8240e73ebcef79ba47378777368) | fix  | `DomEventsPlugin` should always be the last plugin to be called for `supports()`. ([#50394](https://github.com/angular/angular/pull/50394)) |

<!-- CHANGELOG SPLIT MARKER -->

<a name="20.3.5"></a>

# 20.3.5 (2025-10-15)

### compiler-cli

| Commit                                                                                           | Type | Description                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------ | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [8dec92ff9f](https://github.com/angular/angular/commit/8dec92ff9f1055c6b4fc4e767d8b1b408ac28e67) | fix  | capture metadata for undecorated fields ([#63957](https://github.com/angular/angular/pull/63957)) ([#64317](https://github.com/angular/angular/pull/64317)) |
| [c2e817b0ef](https://github.com/angular/angular/commit/c2e817b0efb6f617312936b756ace2c85139d1fc) | perf | fix performance of "interpolated signal not invoked" check ([#64410](https://github.com/angular/angular/pull/64410))                                        |

### core

| Commit                                                                                           | Type | Description                                                                                                     |
| ------------------------------------------------------------------------------------------------ | ---- | --------------------------------------------------------------------------------------------------------------- |
| [f15cfa4cc4](https://github.com/angular/angular/commit/f15cfa4cc414f1d2f4b126bdfc26d74922732672) | fix  | fixes regression in `animate.leave` function bindings ([#64413](https://github.com/angular/angular/pull/64413)) |
| [d54dd674ca](https://github.com/angular/angular/commit/d54dd674ca9db874c95027161b8080bd37250af6) | fix  | Prevents early style pruning with leave animations ([#64335](https://github.com/angular/angular/pull/64335))    |

### migrations

| Commit                                                                                           | Type | Description                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------ | ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [554573e524](https://github.com/angular/angular/commit/554573e5248a72f73df1468e992da08ce5f6112d) | fix  | migrating input with more than 1 usage in a method ([#64367](https://github.com/angular/angular/pull/64367))                                                                     |
| [2c79ca0b57](https://github.com/angular/angular/commit/2c79ca0b579d99346c267e6b61789699e8656dc5) | fix  | remove error for no matching files in control flow migration ([#64253](https://github.com/angular/angular/pull/64253)) ([#64314](https://github.com/angular/angular/pull/64314)) |

### router

| Commit                                                                                           | Type | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------------------------------ |
| [6e4bcc7d22](https://github.com/angular/angular/commit/6e4bcc7d22d4699a33d6648e628fb65a38d0ad8f) | fix  | Scroll restoration should use instant scroll behavior for traversals ([#64299](https://github.com/angular/angular/pull/64299)) |

<!-- CHANGELOG SPLIT MARKER -->

<a name="20.3.4"></a>

# 20.3.4 (2025-10-08)

### core

| Commit                                                                                           | Type | Description                                                                                                                              |
| ------------------------------------------------------------------------------------------------ | ---- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| [853ed169a8](https://github.com/angular/angular/commit/853ed169a8a1392ef2da7790181fb8e100f59519) | fix  | ensure missing leave animations don't queue leave animations ([#64226](https://github.com/angular/angular/pull/64226))                   |
| [6fed986b7a](https://github.com/angular/angular/commit/6fed986b7a8f22dfe81d94b1e55490a278e6d82a) | fix  | Fixes animations in conjunction with content projection ([#63776](https://github.com/angular/angular/pull/63776))                        |
| [76fe5599fe](https://github.com/angular/angular/commit/76fe5599fe8e034c2a5a432608785a53018e23d2) | fix  | handle undefined CSS time values in parseCssTimeUnitsToMs function ([#64181](https://github.com/angular/angular/pull/64181))             |
| [3b959105be](https://github.com/angular/angular/commit/3b959105be04d7b11a1eb1035f1938bd0c43fe8b) | fix  | prevent early exit from leave animations when multiple transitions are present ([#64225](https://github.com/angular/angular/pull/64225)) |

### migrations

| Commit                                                                                           | Type | Description                                                                                                                         |
| ------------------------------------------------------------------------------------------------ | ---- | ----------------------------------------------------------------------------------------------------------------------------------- |
| [65884895ff](https://github.com/angular/angular/commit/65884895fff5bc499974849e9ec5a5792eb9e36c) | fix  | preserve component imports when pruning NgModules in standalone migration ([#64186](https://github.com/angular/angular/pull/64186)) |

<!-- CHANGELOG SPLIT MARKER -->

<a name="20.3.3"></a>

# 20.3.3 (2025-10-02)

### compiler

| Commit                                                                                           | Type | Description                                                                                                 |
| ------------------------------------------------------------------------------------------------ | ---- | ----------------------------------------------------------------------------------------------------------- |
| [f51ab32fb3](https://github.com/angular/angular/commit/f51ab32fb3000ae34c077b049ff2f7b8e3e22d14) | fix  | recover template literals with broken expressions ([#64150](https://github.com/angular/angular/pull/64150)) |

### core

| Commit                                                                                           | Type | Description                                                                                                                      |
| ------------------------------------------------------------------------------------------------ | ---- | -------------------------------------------------------------------------------------------------------------------------------- |
| [542cd0019a](https://github.com/angular/angular/commit/542cd0019aa509e399282ccf7cb5fa6208cef70e) | fix  | do not rename ARIA property bindings to attributes ([#64089](https://github.com/angular/angular/pull/64089))                     |
| [0e928fbc4a](https://github.com/angular/angular/commit/0e928fbc4a351303c4ce081a679f4a38c0acd5e6) | fix  | Fixes animations in conjunction with content projection ([#63776](https://github.com/angular/angular/pull/63776))                |
| [e5157bd933](https://github.com/angular/angular/commit/e5157bd933c41836fb431659f42dfb4cdbe0d2d1) | fix  | prevents unintended early termination of leave animations and hoisting ([#64088](https://github.com/angular/angular/pull/64088)) |

### migrations

| Commit                                                                                           | Type | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------------ |
| [1710cbd7d4](https://github.com/angular/angular/commit/1710cbd7d484ccd5e9ab39b95a44e2d222f4262d) | fix  | handle shorthand property declarations in NgModule ([#64160](https://github.com/angular/angular/pull/64160)) |
| [77b6305a4b](https://github.com/angular/angular/commit/77b6305a4b5db88f9c1130acf80095b502a0eca1) | fix  | skip migration for inputs with 'this' references ([#64142](https://github.com/angular/angular/pull/64142))   |

<!-- CHANGELOG SPLIT MARKER -->

<a name="20.3.2"></a>

# 20.3.2 (2025-09-24)

### compiler-cli

| Commit                                                                                           | Type | Description                                                                                       |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------- |
| [ba40153ac0](https://github.com/angular/angular/commit/ba40153ac07fc721585a1224fda09a654672cb74) | fix  | capture metadata for undecorated fields ([#63904](https://github.com/angular/angular/pull/63904)) |
| [1d4f81c8ee](https://github.com/angular/angular/commit/1d4f81c8eedf5ea69c51c720f8dc5c5d12a62ba2) | fix  | resolve import alias in defer blocks ([#63966](https://github.com/angular/angular/pull/63966))    |

### core

| Commit                                                                                           | Type | Description                                                                                                          |
| ------------------------------------------------------------------------------------------------ | ---- | -------------------------------------------------------------------------------------------------------------------- |
| [9515a70933](https://github.com/angular/angular/commit/9515a709331883f0ca9857ed46a5262b01979a26) | fix  | fix narrowing of `Resource.hasValue()` ([#63994](https://github.com/angular/angular/pull/63994))                     |
| [e78451cf8a](https://github.com/angular/angular/commit/e78451cf8a48322879e83b33fecc0b5854947afb) | fix  | prevent animations renderer from impacting `animate.leave` ([#63921](https://github.com/angular/angular/pull/63921)) |

### forms

| Commit                                                                                           | Type | Description                                                                                            |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------ |
| [1fd8d5d446](https://github.com/angular/angular/commit/1fd8d5d446f909a16a127ba117a0f423c7a5db0c) | fix  | Emit `FormResetEvent` when resetting control ([#64034](https://github.com/angular/angular/pull/64034)) |

### migrations

| Commit                                                                                           | Type | Description                                                                                                 |
| ------------------------------------------------------------------------------------------------ | ---- | ----------------------------------------------------------------------------------------------------------- |
| [16d0d43ad4](https://github.com/angular/angular/commit/16d0d43ad4903b69b8dcd9b76c48b5089e7f82ee) | fix  | handle import aliases to the same module name ([#63934](https://github.com/angular/angular/pull/63934))     |
| [3ebaeccb46](https://github.com/angular/angular/commit/3ebaeccb466119ee43eeaa486f5e132c85e9caa2) | fix  | handle reused templates in control flow migration ([#63996](https://github.com/angular/angular/pull/63996)) |

<!-- CHANGELOG SPLIT MARKER -->

<a name="20.3.1"></a>

# 20.3.1 (2025-09-17)

### compiler

| Commit                                                                                           | Type | Description                                                                              |
| ------------------------------------------------------------------------------------------------ | ---- | ---------------------------------------------------------------------------------------- |
| [7fb5a8087e](https://github.com/angular/angular/commit/7fb5a8087ee8fb0451cedbe6ac4ce972eca4b56e) | fix  | Add support for `aria-invalid` ([#63748](https://github.com/angular/angular/pull/63748)) |

### compiler-cli

| Commit                                                                                           | Type | Description                                                                                                                             |
| ------------------------------------------------------------------------------------------------ | ---- | --------------------------------------------------------------------------------------------------------------------------------------- |
| [8843707919](https://github.com/angular/angular/commit/88437079190cef9ee522a3e2defa6e2672c2d030) | fix  | only bind inputs that are part of microsyntax to a structural directive ([#52453](https://github.com/angular/angular/pull/52453))       |
| [38c9921ff3](https://github.com/angular/angular/commit/38c9921ff387d235981a79e26dc8bc7e60a2e10c) | fix  | signal not invoked diagnostic not raised when input has same name in template ([#63754](https://github.com/angular/angular/pull/63754)) |

### core

| Commit                                                                                           | Type | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------------------- |
| [802dbcc2a0](https://github.com/angular/angular/commit/802dbcc2a0c5d3784cb04b4c78ea71ed0925327c) | fix  | prevent animation events from being cleaned up on destroy ([#63414](https://github.com/angular/angular/pull/63414)) |
| [3ec8a5c753](https://github.com/angular/angular/commit/3ec8a5c7536cdd2c1db7db4bfbc2d4995156a833) | fix  | Prevent leave animations on a move operation ([#63745](https://github.com/angular/angular/pull/63745))              |

### migrations

| Commit                                                                                           | Type | Description                                                                                |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------ |
| [6e54bdfdcb](https://github.com/angular/angular/commit/6e54bdfdcb01522ee46865fadec911f960fff730) | fix  | fix route-lazy-loading migration ([#63818](https://github.com/angular/angular/pull/63818)) |

<!-- CHANGELOG SPLIT MARKER -->

<a name="18.2.14"></a>

# 18.2.14 (2025-09-10)

## Breaking Changes

### core

- The server-side bootstrapping process has been changed to eliminate the reliance on a global platform injector.

  Before:

  ```ts
  const bootstrap = () => bootstrapApplication(AppComponent, config);
  ```

  After:

  ```ts
  const bootstrap = (context: BootstrapContext) =>
    bootstrapApplication(AppComponent, config, context);
  ```

  A schematic is provided to automatically update `main.server.ts` files to pass the `BootstrapContext` to the `bootstrapApplication` call.

  In addition, `getPlatform()` and `destroyPlatform()` will now return `null` and be a no-op respectively when running in a server environment.

  (cherry picked from commit 8bf80c9d2314b4f2bcf3df83ae01552a6fc49834)

### core

| Commit                                                                                           | Type | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------------------------ |
| [9d1fb33f5e](https://github.com/angular/angular/commit/9d1fb33f5eeadd9da48d0306463235e6d33f82b1) | fix  | introduce `BootstrapContext` for improved server bootstrapping ([#63640](https://github.com/angular/angular/pull/63640)) |

<!-- CHANGELOG SPLIT MARKER -->

<a name="19.2.15"></a>

# 19.2.15 (2025-09-10)

## Breaking Changes

### core

- The server-side bootstrapping process has been changed to eliminate the reliance on a global platform injector.

  Before:

  ```ts
  const bootstrap = () => bootstrapApplication(AppComponent, config);
  ```

  After:

  ```ts
  const bootstrap = (context: BootstrapContext) =>
    bootstrapApplication(AppComponent, config, context);
  ```

  A schematic is provided to automatically update `main.server.ts` files to pass the `BootstrapContext` to the `bootstrapApplication` call.

  In addition, `getPlatform()` and `destroyPlatform()` will now return `null` and be a no-op respectively when running in a server environment.

### core

| Commit                                                                                           | Type | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------------------------ |
| [70d0639bc1](https://github.com/angular/angular/commit/70d0639bc19e376af1a0491898f54a026d3227e2) | fix  | introduce `BootstrapContext` for improved server bootstrapping ([#63639](https://github.com/angular/angular/pull/63639)) |

<!-- CHANGELOG SPLIT MARKER -->

<a name="20.3.0"></a>

# 20.3.0 (2025-09-10)

## Breaking Changes

### core

- The server-side bootstrapping process has been changed to eliminate the reliance on a global platform injector.

  Before:

  ```ts
  const bootstrap = () => bootstrapApplication(AppComponent, config);
  ```

  After:

  ```ts
  const bootstrap = (context: BootstrapContext) =>
    bootstrapApplication(AppComponent, config, context);
  ```

  A schematic is provided to automatically update `main.server.ts` files to pass the `BootstrapContext` to the `bootstrapApplication` call.

  In addition, `getPlatform()` and `destroyPlatform()` will now return `null` and be a no-op respectively when running in a server environment.

  (cherry picked from commit 8bf80c9d2314b4f2bcf3df83ae01552a6fc49834)

###

| Commit                                                                                           | Type | Description                                                                                             |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------- |
| [a3f808d7c8](https://github.com/angular/angular/commit/a3f808d7c8cc59a4fd69f2e4b8d21a6510efa046) | fix  | remove refresh button from transfer state tab ([#63592](https://github.com/angular/angular/pull/63592)) |

### core

| Commit                                                                                           | Type | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------------------------ |
| [6117ccee2e](https://github.com/angular/angular/commit/6117ccee2e1507fb00549cd70e064282645db803) | feat | introduce `BootstrapContext` for improved server bootstrapping ([#63636](https://github.com/angular/angular/pull/63636)) |

<!-- CHANGELOG SPLIT MARKER -->

<a name="20.2.4"></a>

# 20.2.4 (2025-09-03)

### core

| Commit                                                                                           | Type | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------------------------------- |
| [dc64f3e478](https://github.com/angular/angular/commit/dc64f3e478c5cc1e354a0ff7cf5965b817b345d6) | fix  | Fixed inject migration schematics for migrate destructured properties ([#62832](https://github.com/angular/angular/pull/62832)) |

### platform-server

| Commit                                                                                           | Type | Description                                                                                                       |
| ------------------------------------------------------------------------------------------------ | ---- | ----------------------------------------------------------------------------------------------------------------- |
| [d1d32db972](https://github.com/angular/angular/commit/d1d32db97260c1e57c2937588002feb4271c7774) | fix  | prevent false warning for duplicate state serialization ([#63525](https://github.com/angular/angular/pull/63525)) |

<!-- CHANGELOG SPLIT MARKER -->

<a name="20.2.3"></a>

# 20.2.3 (2025-08-29)

### compiler

| Commit                                                                                           | Type | Description                                                                                                      |
| ------------------------------------------------------------------------------------------------ | ---- | ---------------------------------------------------------------------------------------------------------------- |
| [479a919f42](https://github.com/angular/angular/commit/479a919f42517193653384220adab5b89dd74e3d) | fix  | fixes regression with event parsing and animate prefix ([#63470](https://github.com/angular/angular/pull/63470)) |

### core

| Commit                                                                                           | Type | Description                                                                                                                                                |
| ------------------------------------------------------------------------------------------------ | ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [f87fad3fff](https://github.com/angular/angular/commit/f87fad3fff62cebf2868e06cba48e0f27b719d24) | fix  | avoid injecting internal error handler from a destroyed injector ([#62275](https://github.com/angular/angular/pull/62275))                                 |
| [114906d2d6](https://github.com/angular/angular/commit/114906d2d68d98c98961d858abd3ae714d4809a3) | fix  | Fix cancellation of animation enter classes ([#63442](https://github.com/angular/angular/pull/63442))                                                      |
| [596b545130](https://github.com/angular/angular/commit/596b5451309b8ce4f08a1cd36e6b3610507d52f9) | fix  | Prevent an error on cleanup when an `rxResource` `stream` threw before returning an `Observable` ([#63342](https://github.com/angular/angular/pull/63342)) |

<!-- CHANGELOG SPLIT MARKER -->

<a name="20.2.2"></a>

# 20.2.2 (2025-08-27)

### compiler

| Commit                                                                                           | Type | Description                                                                                                       |
| ------------------------------------------------------------------------------------------------ | ---- | ----------------------------------------------------------------------------------------------------------------- |
| [d7b6045d61](https://github.com/angular/angular/commit/d7b6045d61582d20a17802e769dc1441984988f0) | fix  | fixes animations on elements with structural directives ([#63390](https://github.com/angular/angular/pull/63390)) |

### core

| Commit                                                                                           | Type | Description                                                                                                     |
| ------------------------------------------------------------------------------------------------ | ---- | --------------------------------------------------------------------------------------------------------------- |
| [6c421ed65d](https://github.com/angular/angular/commit/6c421ed65d050765a18eafc51fe7257abc5682ce) | fix  | Ensures `@for` loop animations never get cancelled ([#63328](https://github.com/angular/angular/pull/63328))    |
| [9093e0e132](https://github.com/angular/angular/commit/9093e0e132f99c2b590c31b299871bcd493b7de0) | fix  | fix memory leak with leaving nodes tracking ([#63328](https://github.com/angular/angular/pull/63328))           |
| [c8f07daf8f](https://github.com/angular/angular/commit/c8f07daf8f2c7e8c6641eb4368379a3f5f1d1f52) | fix  | Fixes `animate.leave` binding to a string with spaces ([#63366](https://github.com/angular/angular/pull/63366)) |

<!-- CHANGELOG SPLIT MARKER -->

<a name="20.2.1"></a>

# 20.2.1 (2025-08-21)

### compiler

| Commit                                                                                           | Type | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------------ |
| [a28672fb70](https://github.com/angular/angular/commit/a28672fb7017cc62e42829c5910c3b39373d7913) | fix  | Keep paraenthesis in Nullish + Boolean expression. ([#63292](https://github.com/angular/angular/pull/63292)) |

<!-- CHANGELOG SPLIT MARKER -->

<a name="20.2.0"></a>

# 20.2.0 (2025-08-20)

## Deprecations

### animations

- @angular/animations

### core

- @angular/animations

### router

- The Router.getCurrentNavigation method is deprecated. Use the Router.currentNavigation signal instead.
- The Router.getCurrentNavigation method is deprecated. Use the Router.currentNavigation signal instead.

### animations

| Commit                                                                                           | Type     | Description                                                                                |
| ------------------------------------------------------------------------------------------------ | -------- | ------------------------------------------------------------------------------------------ |
| [9766116cea](https://github.com/angular/angular/commit/9766116cea69607d80144251a599f1cc1b12e02c) | refactor | deprecate the animations package ([#62795](https://github.com/angular/angular/pull/62795)) |

### compiler

| Commit                                                                                           | Type | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------------------- |
| [7767aa640c](https://github.com/angular/angular/commit/7767aa640c542f5058df9322f2bbe974fa8d3c81) | fix  | allow more characters in square-bracketed attribute names ([#62742](https://github.com/angular/angular/pull/62742)) |
| [7b51728813](https://github.com/angular/angular/commit/7b517288139aec166e5e5b60e84b1e22e3d6b70f) | fix  | fixes animation event host bindings not firing ([#63217](https://github.com/angular/angular/pull/63217))            |

### compiler-cli

| Commit                                                                                           | Type | Description                                                                                                                       |
| ------------------------------------------------------------------------------------------------ | ---- | --------------------------------------------------------------------------------------------------------------------------------- |
| [5abfe4a899](https://github.com/angular/angular/commit/5abfe4a8999e42ad44e6f1d4414f241094bb8fdb) | feat | add diagnostic for uninvoked functions in text interpolation ([#59191](https://github.com/angular/angular/pull/59191))            |
| [c4917074f1](https://github.com/angular/angular/commit/c4917074f1e278ea24948a8810b3d4f306765174) | fix  | display proper function in NG8117 message ([#62842](https://github.com/angular/angular/pull/62842))                               |
| [812463c563](https://github.com/angular/angular/commit/812463c5636effe5bd5ba5c7c7fc65c3cc08d047) | fix  | Ignore diagnostics on ngTemplateContextGuard lines in TCB ([#63054](https://github.com/angular/angular/pull/63054))               |
| [45b030b5ce](https://github.com/angular/angular/commit/45b030b5ce1e116a88fe1c2fe133f654fb1f66c5) | fix  | prevent dom event assertion in TCB generation on older angular versions ([#63053](https://github.com/angular/angular/pull/63053)) |

### core

| Commit                                                                                           | Type     | Description                                                                                                                 |
| ------------------------------------------------------------------------------------------------ | -------- | --------------------------------------------------------------------------------------------------------------------------- |
| [6b1f4b9e8b](https://github.com/angular/angular/commit/6b1f4b9e8bb981377e271e6af0d9768ff7f765e9) | feat     | add enter and leave animation instructions ([#62682](https://github.com/angular/angular/pull/62682))                        |
| [cec91c0035](https://github.com/angular/angular/commit/cec91c00356ee3974c39c9471b243a2a16149f5b) | feat     | add option to infer the tag names of components in tests ([#62283](https://github.com/angular/angular/pull/62283))          |
| [141bb75ff2](https://github.com/angular/angular/commit/141bb75ff241425a93ce5b60b56a4247e67d7648) | feat     | Promote zoneless to stable ([#62699](https://github.com/angular/angular/pull/62699))                                        |
| [4138aca91f](https://github.com/angular/angular/commit/4138aca91fe828f0cfbd779d0c456cdea7703bdc) | feat     | render ARIA property bindings as attributes ([#62630](https://github.com/angular/angular/pull/62630))                       |
| [a409534d6c](https://github.com/angular/angular/commit/a409534d6c3d7cb4472afffd6b17df8c25e34106) | feat     | support `as` aliases on `else if` blocks ([#63047](https://github.com/angular/angular/pull/63047))                          |
| [745ea44394](https://github.com/angular/angular/commit/745ea4439465494ab5b7002dd1fa320cd32220fb) | feat     | support TypeScript 5.9 ([#62541](https://github.com/angular/angular/pull/62541))                                            |
| [593cc8a368](https://github.com/angular/angular/commit/593cc8a3684dfb163bfffa265c5efb3bc7efacd1) | fix      | checks if body exists before continuing ([#62768](https://github.com/angular/angular/pull/62768))                           |
| [bdc31675b7](https://github.com/angular/angular/commit/bdc31675b7e5f37d2b312c766fe4963305620bdf) | fix      | ensure animate events do not have duplicate elements ([#63216](https://github.com/angular/angular/pull/63216))              |
| [de3a0c5cf3](https://github.com/angular/angular/commit/de3a0c5cf3f87782fa63d30edf6ac05eb6be9fac) | fix      | Fix `animate.enter` class removal when composing classes ([#62981](https://github.com/angular/angular/pull/62981))          |
| [6597ac0af7](https://github.com/angular/angular/commit/6597ac0af78ac2224ec2f9a37283b53aee11abe1) | fix      | fix support for space separated strings in leave animations ([#62979](https://github.com/angular/angular/pull/62979))       |
| [ebd622b344](https://github.com/angular/angular/commit/ebd622b3449789b72efc8295244ca924a299e7c1) | fix      | fixes empty animations when recalculating styles ([#63007](https://github.com/angular/angular/pull/63007))                  |
| [455b147488](https://github.com/angular/angular/commit/455b147488dc0a064c0ca13a96a4df3c3ed01152) | fix      | fixes timing issues with enter animations ([#62925](https://github.com/angular/angular/pull/62925))                         |
| [f9d73cc687](https://github.com/angular/angular/commit/f9d73cc6877d516da4ab4704c21bb19164123fa1) | fix      | handle cases where classes added have no animations ([#63242](https://github.com/angular/angular/pull/63242))               |
| [6a1184600c](https://github.com/angular/angular/commit/6a1184600ce0fc7a3f338d6766612e9510ef5518) | fix      | prevents duplicate nodes when `@if` toggles with leave animations ([#63048](https://github.com/angular/angular/pull/63048)) |
| [063b5e166f](https://github.com/angular/angular/commit/063b5e166f66bce1abd06c258242212009e76cca) | fix      | switch check to documentElement with chaining ([#62773](https://github.com/angular/angular/pull/62773))                     |
| [320de4e96d](https://github.com/angular/angular/commit/320de4e96d250cad1ce2c9f8c0fa2022da53b734) | refactor | deprecate animations field on component interface ([#62895](https://github.com/angular/angular/pull/62895))                 |

### forms

| Commit                                                                                           | Type | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------------------- |
| [c353497a01](https://github.com/angular/angular/commit/c353497a01776cd702af6c5136fdae5fc6ce94d5) | feat | add support for pushing an array of controls to formarray ([#57102](https://github.com/angular/angular/pull/57102)) |

### http

| Commit                                                                                           | Type | Description                                                                                                                   |
| ------------------------------------------------------------------------------------------------ | ---- | ----------------------------------------------------------------------------------------------------------------------------- |
| [0984b30388](https://github.com/angular/angular/commit/0984b30388ef51dfad66f1228f665b89b73ef3fb) | feat | Add redirected property to HttpResponse and HttpErrorResponse ([#62675](https://github.com/angular/angular/pull/62675))       |
| [be811fee79](https://github.com/angular/angular/commit/be811fee7925fb482567fa7cd9d485ac28acdade) | feat | add referrer & integrity support for fetch requests in httpResource ([#62461](https://github.com/angular/angular/pull/62461)) |
| [1cf9d9064c](https://github.com/angular/angular/commit/1cf9d9064c15c00071ece3b78c8019035a6db6ce) | feat | Add support for fetch referrer & integrity options in HttpClient ([#62417](https://github.com/angular/angular/pull/62417))    |
| [1408baff45](https://github.com/angular/angular/commit/1408baff453e636da05838fa17c6e4abd86c4b72) | fix  | Add missing timeout and transferCache options to `HttpClient` ([#62586](https://github.com/angular/angular/pull/62586))       |

### language-service

| Commit                                                                                           | Type | Description                                                                                                    |
| ------------------------------------------------------------------------------------------------ | ---- | -------------------------------------------------------------------------------------------------------------- |
| [c81e345e72](https://github.com/angular/angular/commit/c81e345e726b5b281621159c789e6d80a9f328e2) | feat | support auto-import for attribute completions ([#62797](https://github.com/angular/angular/pull/62797))        |
| [d64dd27a02](https://github.com/angular/angular/commit/d64dd27a02630b631bc9890d7292d4683493cb65) | feat | support to report the deprecated API in the template ([#62054](https://github.com/angular/angular/pull/62054)) |
| [591c7e2ec8](https://github.com/angular/angular/commit/591c7e2ec82c6669ffa6e0011b8a0a4fc12e9c3a) | fix  | Support to resolve the re-export component. ([#62585](https://github.com/angular/angular/pull/62585))          |

### platform-browser

| Commit                                                                                           | Type | Description                                                                                                      |
| ------------------------------------------------------------------------------------------------ | ---- | ---------------------------------------------------------------------------------------------------------------- |
| [52b8e07d6e](https://github.com/angular/angular/commit/52b8e07d6e568a527fae18a8a867dacdf8053e20) | feat | Warns on conflicting hydration and blocking navigation ([#62963](https://github.com/angular/angular/pull/62963)) |

### router

| Commit                                                                                           | Type | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------------------- |
| [d00b3fed58](https://github.com/angular/angular/commit/d00b3fed58496369d9f3a1ac0d74416a586be78b) | feat | add a `currentNavigation` signal to the `Router` service. ([#62971](https://github.com/angular/angular/pull/62971)) |
| [687c374826](https://github.com/angular/angular/commit/687c374826c5e9ea91839c20f0df815ce085c583) | feat | add a currentNavigation signal to the Router service. ([#63011](https://github.com/angular/angular/pull/63011))     |
| [9c45c322d1](https://github.com/angular/angular/commit/9c45c322d1ac3b05c916b7c956263066fb9be47f) | fix  | ensure preloaded components are properly activated ([#62502](https://github.com/angular/angular/pull/62502))        |

### service-worker

| Commit                                                                                           | Type | Description                                                                                                       |
| ------------------------------------------------------------------------------------------------ | ---- | ----------------------------------------------------------------------------------------------------------------- |
| [8255e0cf15](https://github.com/angular/angular/commit/8255e0cf15353e9eee339ae01851e32c0e5e174d) | feat | add messageerror event handling and logging ([#62834](https://github.com/angular/angular/pull/62834))             |
| [5220b51e75](https://github.com/angular/angular/commit/5220b51e75e672ff41c90f4798289961973df8e0) | feat | Adds for type in provideServiceWorker ([#62831](https://github.com/angular/angular/pull/62831))                   |
| [4ac6171b09](https://github.com/angular/angular/commit/4ac6171b09e449c619e0588c366861f8f3bb59be) | feat | Adds support for updateViaCache in provideServiceWorker ([#62721](https://github.com/angular/angular/pull/62721)) |
| [b65c3d5e19](https://github.com/angular/angular/commit/b65c3d5e195267dd90b2826d4615ced1328b1709) | feat | Improves storage full detection in data caching ([#62737](https://github.com/angular/angular/pull/62737))         |
| [3b214d2040](https://github.com/angular/angular/commit/3b214d20403160ab73e65dca0352545efd577c31) | feat | Logs unhandled promise rejections in service worker ([#63059](https://github.com/angular/angular/pull/63059))     |
| [6d011687ec](https://github.com/angular/angular/commit/6d011687ec1fa2b8f0211379bb98adc8e02f4e9a) | feat | notify clients about version failures ([#62718](https://github.com/angular/angular/pull/62718))                   |

<!-- CHANGELOG SPLIT MARKER -->

<a name="20.1.8"></a>

# 20.1.8 (2025-08-20)

### compiler

| Commit                                                                                           | Type | Description                                                                                                                  |
| ------------------------------------------------------------------------------------------------ | ---- | ---------------------------------------------------------------------------------------------------------------------------- |
| [691f5ed033](https://github.com/angular/angular/commit/691f5ed0332d813801f599448577a2c1d450a5ad) | fix  | error when ng-content fallback has translated children ([#63156](https://github.com/angular/angular/pull/63156))             |
| [b1dec9bc50](https://github.com/angular/angular/commit/b1dec9bc50f5694cfa1e3629fd48543126debd10) | fix  | incorrect source span for expression AST inside template attribute ([#63175](https://github.com/angular/angular/pull/63175)) |

### compiler-cli

| Commit                                                                                           | Type | Description                                                                                                                |
| ------------------------------------------------------------------------------------------------ | ---- | -------------------------------------------------------------------------------------------------------------------------- |
| [cda402f1d8](https://github.com/angular/angular/commit/cda402f1d8bddeedc9aca1979a9bf01be32f81b2) | fix  | account for expression with type arguments during HMR extraction ([#63261](https://github.com/angular/angular/pull/63261)) |

<!-- CHANGELOG SPLIT MARKER -->

<a name="20.1.7"></a>

# 20.1.7 (2025-08-13)

### compiler

| Commit                                                                                           | Type | Description                                                                                                             |
| ------------------------------------------------------------------------------------------------ | ---- | ----------------------------------------------------------------------------------------------------------------------- |
| [d9e37908a5](https://github.com/angular/angular/commit/d9e37908a5f42a4226fd6e2d3493abf35ee5a99a) | fix  | incorrect spans for AST inside input value with leading space ([#63082](https://github.com/angular/angular/pull/63082)) |

### compiler-cli

| Commit                                                                                           | Type | Description                                                                                                           |
| ------------------------------------------------------------------------------------------------ | ---- | --------------------------------------------------------------------------------------------------------------------- |
| [4aa120ac00](https://github.com/angular/angular/commit/4aa120ac000a569a29e45e9c6db9e4f32c61d183) | fix  | error when type checking host bindings of generic directive ([#63061](https://github.com/angular/angular/pull/63061)) |

### core

| Commit                                                                                           | Type | Description                                                                                            |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------ |
| [322042c5b3](https://github.com/angular/angular/commit/322042c5b30e181019bfdaa6a57fc5abaea7adc1) | fix  | destroying the effect on `afterRenderEffect` ([#63001](https://github.com/angular/angular/pull/63001)) |

### router

| Commit                                                                                           | Type | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------------ |
| [5fd79424e3](https://github.com/angular/angular/commit/5fd79424e34ea4bbbfca68bf80ca5541aece829f) | fix  | attempt to resolve component resources in JIT mode ([#63062](https://github.com/angular/angular/pull/63062)) |

<!-- CHANGELOG SPLIT MARKER -->

<a name="20.1.6"></a>

# 20.1.6 (2025-08-06)

<!-- CHANGELOG SPLIT MARKER -->

<a name="20.1.5"></a>

# 20.1.5 (2025-08-06)

### compiler-cli

| Commit                                                                                           | Type | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------------ |
| [3b2e8efcac](https://github.com/angular/angular/commit/3b2e8efcacc5b413b03e4281fc8af297e5c81a9f) | fix  | correctly type check host listeners to own outputs ([#62965](https://github.com/angular/angular/pull/62965)) |

### core

| Commit                                                                                           | Type | Description                                                                                                                                  |
| ------------------------------------------------------------------------------------------------ | ---- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| [c9f3976eba](https://github.com/angular/angular/commit/c9f3976eba66d113f4a1919ee91b8833d679733a) | fix  | properly recognize failed `fetch` responses when loading external resources in JIT ([#62992](https://github.com/angular/angular/pull/62992)) |

### http

| Commit                                                                                           | Type | Description                                                                                                                            |
| ------------------------------------------------------------------------------------------------ | ---- | -------------------------------------------------------------------------------------------------------------------------------------- |
| [ae443f8eb0](https://github.com/angular/angular/commit/ae443f8eb00c047bb88527f2311e86df3bc6be35) | fix  | Reset headers, progress, and statusCode when using `set()` in `HttpResource` ([#62873](https://github.com/angular/angular/pull/62873)) |

### migrations

| Commit                                                                                           | Type | Description                                                                                       |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------- |
| [7a5851e4b0](https://github.com/angular/angular/commit/7a5851e4b0a17da35db7fb276a3dca4909f9137b) | fix  | incorrect filtering in inject migration ([#62913](https://github.com/angular/angular/pull/62913)) |

<!-- CHANGELOG SPLIT MARKER -->

<a name="20.1.4"></a>

# 20.1.4 (2025-07-31)

### compiler

| Commit                                                                                           | Type | Description                                                                                                    |
| ------------------------------------------------------------------------------------------------ | ---- | -------------------------------------------------------------------------------------------------------------- |
| [db3c5826ee](https://github.com/angular/angular/commit/db3c5826ee0b52e5b7886087b82990340a34c1ab) | fix  | exclude more safe reads expression from 2way-binding ([#62852](https://github.com/angular/angular/pull/62852)) |

### core

| Commit                                                                                           | Type | Description                                                                                  |
| ------------------------------------------------------------------------------------------------ | ---- | -------------------------------------------------------------------------------------------- |
| [c633b63e56](https://github.com/angular/angular/commit/c633b63e561d7142dd9a1f8631813cc47a169058) | fix  | update symbols for new signals api ([#62284](https://github.com/angular/angular/pull/62284)) |

### http

| Commit                                                                                           | Type | Description                                                                                             |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------- |
| [ab6033979a](https://github.com/angular/angular/commit/ab6033979a3b409738d55d0c01effb378473c05a) | fix  | add missing http options allowed in fetch API ([#62881](https://github.com/angular/angular/pull/62881)) |
| [15670d8417](https://github.com/angular/angular/commit/15670d8417449c5b5f2990209552a1fc61420acb) | fix  | propagate plain errors when parsing fails ([#62765](https://github.com/angular/angular/pull/62765))     |

<!-- CHANGELOG SPLIT MARKER -->

<a name="20.1.3"></a>

# 20.1.3 (2025-07-23)

### core

| Commit                                                                                           | Type | Description                                                                                         |
| ------------------------------------------------------------------------------------------------ | ---- | --------------------------------------------------------------------------------------------------- |
| [2c522efbe5](https://github.com/angular/angular/commit/2c522efbe500e7c6c9929ce76df435b3dae49c84) | fix  | fix change tracking for Resource#hasValue ([#62595](https://github.com/angular/angular/pull/62595)) |

### platform-browser

| Commit                                                                                           | Type | Description                                                                                                            |
| ------------------------------------------------------------------------------------------------ | ---- | ---------------------------------------------------------------------------------------------------------------------- |
| [2fd1f7beb5](https://github.com/angular/angular/commit/2fd1f7beb5e524aea8dcb24c5b87cb81689363ba) | fix  | resolve component resources before bootstrapping in JIT mode ([#62758](https://github.com/angular/angular/pull/62758)) |

<!-- CHANGELOG SPLIT MARKER -->

<a name="20.1.2"></a>

# 20.1.2 (2025-07-17)

### compiler

| Commit                                                                                           | Type | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------ |
| [8ad10fd63b](https://github.com/angular/angular/commit/8ad10fd63b01a906efbfa50ccccb7914610c61bd) | fix  | fix detection of directive deps in JIT ([#62666](https://github.com/angular/angular/pull/62666)) |

<!-- CHANGELOG SPLIT MARKER -->

<a name="20.1.1"></a>

# 20.1.1 (2025-07-16)

### compiler

| Commit                                                                                           | Type | Description                                                                                                 |
| ------------------------------------------------------------------------------------------------ | ---- | ----------------------------------------------------------------------------------------------------------- |
| [75d2a349b4](https://github.com/angular/angular/commit/75d2a349b4d0ee1ed0489f1804dc1938046eaace) | fix  | incorrect spans for left side of binary operation ([#62641](https://github.com/angular/angular/pull/62641)) |
| [70c8780c54](https://github.com/angular/angular/commit/70c8780c5443929539631a06c5e09c18d108e51b) | fix  | more permissive parsing of @ characters ([#62644](https://github.com/angular/angular/pull/62644))           |

### compiler-cli

| Commit                                                                                           | Type | Description                                                                                            |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------ |
| [9506cdfaad](https://github.com/angular/angular/commit/9506cdfaad2693a0350a74f4ee4bb7fa27fa3086) | fix  | infer type of event target for void elements ([#62648](https://github.com/angular/angular/pull/62648)) |

### core

| Commit                                                                                           | Type | Description                                                                                                    |
| ------------------------------------------------------------------------------------------------ | ---- | -------------------------------------------------------------------------------------------------------------- |
| [26ade4a337](https://github.com/angular/angular/commit/26ade4a3370911f6c8e9c0e6504d9335d637cfe1) | fix  | Ensure application remains unstable during bootstrap ([#62631](https://github.com/angular/angular/pull/62631)) |
| [a81f0faa1a](https://github.com/angular/angular/commit/a81f0faa1a72decf9bdd35b243486a510b9352ee) | fix  | InputBinding marks component a dirty. ([#62613](https://github.com/angular/angular/pull/62613))                |

### http

| Commit                                                                                           | Type | Description                                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------ | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [276836ee73](https://github.com/angular/angular/commit/276836ee7351c5d605fac5dc0abe0ae898dcfa5d) | fix  | do not display warnings `Angular detected that a `HttpClient`request with the`keepalive` option was sent using XHR` when option is not true ([#62536](https://github.com/angular/angular/pull/62536)) |

### router

| Commit                                                                                           | Type | Description                                                                                            |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------ |
| [5949373692](https://github.com/angular/angular/commit/59493736925d27ca26f0bb041978a51c4ced975b) | fix  | handle errors from view transition readiness ([#62535](https://github.com/angular/angular/pull/62535)) |

<!-- CHANGELOG SPLIT MARKER -->

<a name="20.1.0"></a>

# 20.1.0 (2025-07-09)

### common

| Commit                                                                                           | Type | Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------------------------------------- |
| [58aedc37d1](https://github.com/angular/angular/commit/58aedc37d10208ca40c1b1d4468261dd9aba5356) | feat | add support for a custom EnvironmentInjector to NgComponentOutlet directive ([#54764](https://github.com/angular/angular/pull/54764)) |
| [ef10aa4005](https://github.com/angular/angular/commit/ef10aa400585fb66e1afde08be0f9fd9a70ce7f2) | feat | support decoding in NgOptimizedImage ([#61905](https://github.com/angular/angular/pull/61905))                                        |

### compiler

| Commit                                                                                           | Type | Description                                                                                               |
| ------------------------------------------------------------------------------------------------ | ---- | --------------------------------------------------------------------------------------------------------- |
| [0dcf230d52](https://github.com/angular/angular/commit/0dcf230d52694e6d3d6e55d6e675d55f9cf236bc) | feat | add support for new binary assignment operators ([#62064](https://github.com/angular/angular/pull/62064)) |
| [5a76826d26](https://github.com/angular/angular/commit/5a76826d266b4ed0ef863221571e4b6b1b16182f) | fix  | only report parser errors on invalid expression ([#61793](https://github.com/angular/angular/pull/61793)) |
| [089ad0ee15](https://github.com/angular/angular/commit/089ad0ee15d6be9b2493bb67519cb59e0454a1ef) | fix  | produce more accurate errors for interpolations ([#62258](https://github.com/angular/angular/pull/62258)) |
| [e9fcbb8af1](https://github.com/angular/angular/commit/e9fcbb8af12e7b4370d2e03e6004f3f2fe02c981) | fix  | remove TypeScript from linker ([#61618](https://github.com/angular/angular/pull/61618))                   |

### compiler-cli

| Commit                                                                                           | Type | Description                                                                                                                                         |
| ------------------------------------------------------------------------------------------------ | ---- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| [e62fb359d6](https://github.com/angular/angular/commit/e62fb359d6da8e0458b18f24e6bff60602f93fc6) | feat | add experimental support for fast type declaration emission ([#61334](https://github.com/angular/angular/pull/61334))                               |
| [0cf1001715](https://github.com/angular/angular/commit/0cf1001715d2f528c61735108d12e29047907d98) | feat | support host directives with direct external references in fast type declaration emission ([#61469](https://github.com/angular/angular/pull/61469)) |
| [b7ab5fa256](https://github.com/angular/angular/commit/b7ab5fa2562524a0e8dfa4f3dff740ec2d31b4c7) | fix  | add signal checks to handle negated calls ([#59970](https://github.com/angular/angular/pull/59970))                                                 |
| [77fa204ad1](https://github.com/angular/angular/commit/77fa204ad16fef561c009fcef0ab1fb92a37f986) | fix  | rename flag for enabling fast type declaration emission ([#61353](https://github.com/angular/angular/pull/61353))                                   |
| [c439d6938d](https://github.com/angular/angular/commit/c439d6938de60cb132f7ae4d305efa5b3d853e36) | fix  | symbol builder duplicating host directives ([#61240](https://github.com/angular/angular/pull/61240))                                                |
| [3e1baa5a95](https://github.com/angular/angular/commit/3e1baa5a9565f4930507cdf338e6f9ea7e8702a3) | fix  | typo in NG2026 message ([#61325](https://github.com/angular/angular/pull/61325))                                                                    |

### core

| Commit                                                                                           | Type | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------------------- |
| [8163a8995e](https://github.com/angular/angular/commit/8163a8995e36bbce74e3d852613c19e56027cc24) | feat | Add `destroyed` property on `DestroyRef` ([#61849](https://github.com/angular/angular/pull/61849))                  |
| [737b35b684](https://github.com/angular/angular/commit/737b35b684663bb641939f05ae12fa11b3395159) | feat | Add `destroyed` property to `EnvironmentInjector` ([#61951](https://github.com/angular/angular/pull/61951))         |
| [2e0c98bd3f](https://github.com/angular/angular/commit/2e0c98bd3f2efd1181429b486dd1cebe14385c18) | feat | support bindings in TestBed ([#62040](https://github.com/angular/angular/pull/62040))                               |
| [4356e85456](https://github.com/angular/angular/commit/4356e8545666f13033bb2c4b7fa018d0b97e6f01) | fix  | fakeAsync should not depend on module import order ([#61375](https://github.com/angular/angular/pull/61375))        |
| [8424b3bcd5](https://github.com/angular/angular/commit/8424b3bcd5b9c78f37dc8ba636c87775937bcc03) | fix  | Fixes template outlet hydration ([#61989](https://github.com/angular/angular/pull/61989))                           |
| [583b9a7be5](https://github.com/angular/angular/commit/583b9a7be56310f247dcf83dd1ce297b9c6be682) | fix  | missing useExisting providers throwing for optional calls ([#61137](https://github.com/angular/angular/pull/61137)) |
| [8f65223bd8](https://github.com/angular/angular/commit/8f65223bd83ee5cdbff6a3c8e99f85d1c69f5375) | fix  | update min Node.js support to 20.19, 22.12, and 24.0 ([#61499](https://github.com/angular/angular/pull/61499))      |
| [b785256b9e](https://github.com/angular/angular/commit/b785256b9e7f83c9f05fb1afd561f0af49a42e9d) | perf | avoid intermediate arrays in definition ([#61445](https://github.com/angular/angular/pull/61445))                   |
| [56769de4d8](https://github.com/angular/angular/commit/56769de4d83a08b8044cd2463341cbd60d40191f) | perf | move property remapping for dom properties to compiler ([#62421](https://github.com/angular/angular/pull/62421))    |

### forms

| Commit                                                                                           | Type | Description                                                                                                                  |
| ------------------------------------------------------------------------------------------------ | ---- | ---------------------------------------------------------------------------------------------------------------------------- |
| [610bebfce9](https://github.com/angular/angular/commit/610bebfce98d879677244b2ef08b24886891ca76) | fix  | Allow ControlState as reset arguments for `FormGroup`/`FormRecord` ([#55860](https://github.com/angular/angular/pull/55860)) |
| [4f0221e193](https://github.com/angular/angular/commit/4f0221e1933675b24bdbf95be3825fdacee13c00) | fix  | improve select performance ([#61949](https://github.com/angular/angular/pull/61949))                                         |

### http

| Commit                                                                                           | Type | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------------------------- |
| [55fa38a1e5](https://github.com/angular/angular/commit/55fa38a1e53926d114b2290c084f3540f50b7266) | feat | add cache & priority support for fetch requests in httpResource ([#62301](https://github.com/angular/angular/pull/62301)) |
| [b6ef42843c](https://github.com/angular/angular/commit/b6ef42843c49e50239b678bb4d8f01ab30589dd3) | feat | add credentials support for fetch requests in httpResource ([#62390](https://github.com/angular/angular/pull/62390))      |
| [73269cf5ce](https://github.com/angular/angular/commit/73269cf5ceb4c32473a81a101a79decd06cfe274) | feat | add keepalive support for fetch requests in httpResource ([#61833](https://github.com/angular/angular/pull/61833))        |
| [27b7ec0a62](https://github.com/angular/angular/commit/27b7ec0a6219645a5af07c2d409c34311a458374) | feat | add mode & redirect for fetch request in httpResource ([#62337](https://github.com/angular/angular/pull/62337))           |
| [f0965c7acd](https://github.com/angular/angular/commit/f0965c7acd2fc2a4a4c18e5a47f3447c4fc7c668) | feat | Add support for fetch credentials options in HttpClient ([#62354](https://github.com/angular/angular/pull/62354))         |
| [87322449a3](https://github.com/angular/angular/commit/87322449a33fc727ad8c80b6cc6d0a87a900a6fa) | feat | add support for fetch mode and redirect options in HttpClient ([#62315](https://github.com/angular/angular/pull/62315))   |
| [9791ab1b6f](https://github.com/angular/angular/commit/9791ab1b6f8694ada6a0e359003243d89d6c7c97) | feat | Add support for fetch request cache and priority options ([#61766](https://github.com/angular/angular/pull/61766))        |
| [aa861c42ff](https://github.com/angular/angular/commit/aa861c42fface06563669c188327700085774e89) | feat | add timeout option on httpResource. ([#62326](https://github.com/angular/angular/pull/62326))                             |
| [c4cffe2063](https://github.com/angular/angular/commit/c4cffe2063e790d2f8e4dc8b9c9817f2c4fcc4e7) | feat | Add timeout option to HTTP requests ([#57194](https://github.com/angular/angular/pull/57194))                             |
| [cfbbb08437](https://github.com/angular/angular/commit/cfbbb0843727dd7959d73c496307153234ee20b9) | feat | add warning when withCredentials overrides explicit credentials ([#62383](https://github.com/angular/angular/pull/62383)) |

### language-service

| Commit                                                                                           | Type | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------------------------------------ |
| [20c1f991e6](https://github.com/angular/angular/commit/20c1f991e63b8fc3023a302964d0438bfbfba8f0) | feat | add semantic tokens for templates ([#60260](https://github.com/angular/angular/pull/60260))                                          |
| [cf55d1bdd4](https://github.com/angular/angular/commit/cf55d1bdd4201ed99dd876138c50a497b611acb7) | feat | Support importing the external module's export about the angular metadata. ([#61122](https://github.com/angular/angular/pull/61122)) |
| [5d2e85920e](https://github.com/angular/angular/commit/5d2e85920e714560e8d06bfb9c41d9312eeaae3b) | feat | support to fix missing required inputs diagnostic ([#50911](https://github.com/angular/angular/pull/50911))                          |

### router

| Commit                                                                                           | Type | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| [9833d9ea47](https://github.com/angular/angular/commit/9833d9ea47b717293c9df0d8a5c285a3c4ad35d0) | feat | Run `loadComponent` and `loadChildren` functions in the route's injection context ([#62133](https://github.com/angular/angular/pull/62133)) |

### service-worker

| Commit                                                                                           | Type | Description                                                                                 |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------- |
| [c67dbda8ff](https://github.com/angular/angular/commit/c67dbda8ff76410e0bb7e4b1719125f3197227dd) | feat | support notification closes ([#61442](https://github.com/angular/angular/pull/61442))       |
| [6e1df54799](https://github.com/angular/angular/commit/6e1df5479967c2c8b0fadf75e9a9f8c33a342245) | feat | support push subscription changes ([#61856](https://github.com/angular/angular/pull/61856)) |

<!-- CHANGELOG SPLIT MARKER -->

<a name="20.0.6"></a>

# 20.0.6 (2025-07-01)

<!-- CHANGELOG SPLIT MARKER -->

<a name="20.0.5"></a>

# 20.0.5 (2025-06-25)

### compiler-cli

| Commit                                                                                           | Type | Description                                                                                             |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------- |
| [de0d525ad7](https://github.com/angular/angular/commit/de0d525ad7a5a9bfcc78b66ac627a507c8709064) | fix  | add suggestion when pipe is missing ([#62146](https://github.com/angular/angular/pull/62146))           |
| [3eb5a79a83](https://github.com/angular/angular/commit/3eb5a79a8324c96d438f4ad004a098295efad769) | fix  | handle initializer APIs wrapped in type casts ([#62203](https://github.com/angular/angular/pull/62203)) |

### core

| Commit                                                                                           | Type | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| [a2e6f317a7](https://github.com/angular/angular/commit/a2e6f317a732495602caf2ab871d38981a742e05) | fix  | allow to set a resource in an error state ([#62253](https://github.com/angular/angular/pull/62253))                                        |
| [4c00238a69](https://github.com/angular/angular/commit/4c00238a69ab7f6c5b53d12d4030cb172454ab39) | fix  | avoid injecting `ErrorHandler` from a destroyed injector ([#61886](https://github.com/angular/angular/pull/61886))                         |
| [369f03ad7f](https://github.com/angular/angular/commit/369f03ad7f3132240db938ea2b4de2de2e38c867) | fix  | unable to retrieve defer blocks in tests when component injects ViewContainerRef ([#62156](https://github.com/angular/angular/pull/62156)) |

### router

| Commit                                                                                           | Type | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------------------- |
| [65c59dd796](https://github.com/angular/angular/commit/65c59dd7964cd9643244b46094031e7227252875) | fix  | handle scrollRestoration error in restricted environments ([#62186](https://github.com/angular/angular/pull/62186)) |

### upgrade

| Commit                                                                                           | Type | Description                                                                                   |
| ------------------------------------------------------------------------------------------------ | ---- | --------------------------------------------------------------------------------------------- |
| [144c429230](https://github.com/angular/angular/commit/144c429230c864ae7a94c6a40738a9cd1223581b) | fix  | Make zoneless work with hybrid apps ([#61660](https://github.com/angular/angular/pull/61660)) |

<!-- CHANGELOG SPLIT MARKER -->

<a name="20.0.4"></a>

# 20.0.4 (2025-06-18)

### core

| Commit                                                                                           | Type | Description                                                                                            |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------ |
| [e343cdfb86](https://github.com/angular/angular/commit/e343cdfb86043e10d08aa4031b7b8d59342b37e5) | fix  | Fixes template outlet hydration ([#62012](https://github.com/angular/angular/pull/62012))              |
| [67f657e4a3](https://github.com/angular/angular/commit/67f657e4a3b27b968277fa63c9455e44b3e2259f) | fix  | inject `APP_ID` before injector is destroyed ([#61885](https://github.com/angular/angular/pull/61885)) |
| [ae212b51ee](https://github.com/angular/angular/commit/ae212b51eef6779e70f076110085f35b684234c6) | fix  | Wrap ErrorEvent with no error property ([#62081](https://github.com/angular/angular/pull/62081))       |

### migrations

| Commit                                                                                           | Type | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------------------------ |
| [82bf9848a1](https://github.com/angular/angular/commit/82bf9848a154c14f7100a1b29c5ef6aabc0a6c57) | fix  | more robust trailing comma removal in unused imports migration ([#62118](https://github.com/angular/angular/pull/62118)) |

<!-- CHANGELOG SPLIT MARKER -->

<a name="20.0.3"></a>

# 20.0.3 (2025-06-11)

<!-- CHANGELOG SPLIT MARKER -->

<a name="20.0.2"></a>

# 20.0.2 (2025-06-06)

### core

| Commit                                                                                           | Type | Description                                                                                                       |
| ------------------------------------------------------------------------------------------------ | ---- | ----------------------------------------------------------------------------------------------------------------- |
| [1e8158baee](https://github.com/angular/angular/commit/1e8158baee1be48747180eead8d61de328041b2c) | fix  | components marked for traversal resets reactive context ([#61663](https://github.com/angular/angular/pull/61663)) |
| [1cd23be57e](https://github.com/angular/angular/commit/1cd23be57e68c50d6c1f3f19d53d83651fa73fd1) | fix  | unregister `onDestroy` in `outputToObservable` ([#61882](https://github.com/angular/angular/pull/61882))          |

<!-- CHANGELOG SPLIT MARKER -->

<a name="20.0.1"></a>

# 20.0.1 (2025-06-04)

### compiler

| Commit                                                                                           | Type | Description                                                                                           |
| ------------------------------------------------------------------------------------------------ | ---- | ----------------------------------------------------------------------------------------------------- |
| [66a0ec6510](https://github.com/angular/angular/commit/66a0ec6510aa7f2afc675440bd782750100f84d5) | fix  | move defer trigger assertions out of parser ([#61747](https://github.com/angular/angular/pull/61747)) |
| [8ecb1ba027](https://github.com/angular/angular/commit/8ecb1ba0275636d4ca697cd648d8c4c3a6eb27df) | fix  | recover invalid parenthesized expressions ([#61815](https://github.com/angular/angular/pull/61815))   |

### core

| Commit                                                                                           | Type | Description                                                                                                                                       |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| [8c60cbfd1c](https://github.com/angular/angular/commit/8c60cbfd1c4fe161936ea9f3b8c126083f2eae5e) | fix  | `takeUntilDestroyed` completes immediately if DestroyRef already destroyed ([#61847](https://github.com/angular/angular/pull/61847))              |
| [b1d960d082](https://github.com/angular/angular/commit/b1d960d082c6d0e52d45d0f1ef24102c16696fa5) | fix  | produce an error when incremental hydration is expected, but not configured ([#61741](https://github.com/angular/angular/pull/61741))             |
| [b4ed62ddf6](https://github.com/angular/angular/commit/b4ed62ddf60729fc4e6cfa529a9c7a455ff956d5) | fix  | properly handle the case where getSignalGraph is called on a componentless NodeInjector ([#60772](https://github.com/angular/angular/pull/60772)) |
| [ddd22bea48](https://github.com/angular/angular/commit/ddd22bea4813b572bfdff15d4bc9c24589bef1bb) | fix  | unregister `onDestroy` in `ResourceImpl` when `destroy()` is called ([#61870](https://github.com/angular/angular/pull/61870))                     |
| [5c31e7e28d](https://github.com/angular/angular/commit/5c31e7e28d519df35b52397161e9d0cedc570304) | fix  | unregister `onDestroy` when observable errors in `toSignal` ([#61596](https://github.com/angular/angular/pull/61596))                             |

### migrations

| Commit                                                                                           | Type | Description                                                                                                      |
| ------------------------------------------------------------------------------------------------ | ---- | ---------------------------------------------------------------------------------------------------------------- |
| [e9820a6d48](https://github.com/angular/angular/commit/e9820a6d48629df004043adc5fd6d29e37e43731) | fix  | avoid trailing whitespaces in unused imports migration ([#61698](https://github.com/angular/angular/pull/61698)) |

### service-worker

| Commit                                                                                           | Type | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------------------- |
| [b93fa22f25](https://github.com/angular/angular/commit/b93fa22f2509578342343cc0dcf8225863def793) | fix  | prevent duplicate fetches during concurrent update checks ([#61443](https://github.com/angular/angular/pull/61443)) |
| [9743bd1317](https://github.com/angular/angular/commit/9743bd1317b7fb397bc1e799a0f9a117ee5d6698) | fix  | update service worker to handle seeking better for videos ([#60029](https://github.com/angular/angular/pull/60029)) |

<!-- CHANGELOG SPLIT MARKER -->

<a name="20.0.0"></a>

# 20.0.0 (2025-05-28)

Blog post: https://blog.angular.dev/announcing-angular-v20-b5c9c06cf301

## Breaking Changes

### common

- Using the `Y` formatter (week-numbering year) without also including `w` (week number) is now detected as suspicious date pattern, as `y` is typically intended.
- `AsyncPipe` now directly catches unhandled errors in
  subscriptions and promises and reports them to the application's
  `ErrorHandler`. For Zone-based applications, these errors would have
  been caught by ZoneJS and reported to `ErrorHandler` so the result is
  generally the same. The change to the exact mechanism for reporting can
  result in differences in test environments that will require test
  updates.

### compiler

- 'in' in an expression now refers to the operator
- `void` in an expression now refers to the operator

  Previously an expression in the template like `{{void}}` referred to a
  property on the component class. After this change it now refers to the
  `void` operator, which would make the above example invalid. If you have
  existing expressions that need to refer to a property named `void`,
  change the expression to use `this.void` instead: `{{this.void}}`.

- Parenthesis are always respected.

  This can lead to runtime breakages when a nullish coalescing operator is nested within parentheses.
  eg. `{{ (foo?.bar).baz }}` will throw if `foo` is nullish. This is the same behavior as native JavaScript.

### core

- TypeScript versions less than 5.8 are no longer supported.
- the `TestBed.flushEffects()` was removed - use
  the `TestBed.tick()` instead.
- `provideExperimentalCheckNoChangesForDebug` has several
  breaking changes:
  - It is renamed to `provideCheckNoChangesConfig`
  - The behavior applies to _all_ checkNoChanges runs
  - The `useNgZoneOnStable` option is removed. This wasn't found to be generally
    more useful than `interval`
- `provideExperimentalZonelessChangeDetection` is
  renamed to `provideZonelessChangeDetection` as it is now "Developer
  Preview" rather than "Experimental".
- - `InjectFlags` has been removed.
  - `inject` no longer accepts `InjectFlags`.
  - `Injector.get` no longer accepts `InjectFlags`.
  - `EnvironmentInjector.get` no longer accepts `InjectFlags`.
  - `TestBed.get` no longer accepts `InjectFlags`.
  - `TestBed.inject` no longer accepts `InjectFlags`.
- - `TestBed.get` has been removed. Use `TestBed.inject` instead.
- afterRender was renamed to afterEveryRender.
- - Angular no longer supports Node.js v18.
  - Node.js versions 22.0 to 22.10 are also no longer supported.

  Before upgrading to Angular v20, ensure the Node.js version is at least 20.11.1.
  For the full list of supported versions, visit: https://angular.dev/reference/versions

- `PendingTasks.run` no longer returns the result of the
  async function. If this behavior is desired, it can be re-implemented
  manually with the `PendingTasks.add`. Be aware, however, that promise rejections
  will need to be handled or they can cause the node process to shut down
  when using SSR.
- Uncaught errors in listeners which were previously only reported to
  `ErrorHandler` are now also reported to Angular's internal error
  handling machinery. For tests, this means that the error will be
  rethrown by default rather than only logging the error. Developers
  should fix these errors, catch them in the test if the test is
  intentionally covering an error case, or use `rethrowApplicationErrors:
false` in `configureTestingModule` as a last resort.
- The `any` overload has been removed from
  `injector.get`. It now only supports `ProviderToken<T>` and (deprecated
  since v4) `string`.
- Animations are guaranteed to be flushed when Angular
  runs automatic change detection or manual calls to `ApplicationRef.tick`.
  Prior to this change, animations would not be flushed in some situations
  if change detection did not run on any views attached to the
  application. This change can affect tests which may rely on the old
  behavior, often by making assertions on DOM elements that should have
  been removed but weren't because DOM removal is delayed until animations
  are flushed.
- `ApplicationRef.tick` will no longer catch and report
  errors to the application `ErrorHandler`. Errors will instead be thrown out of
  the method and will allow callers to determine how to handle these
  errors, such as aborting follow-up work or reporting the error and
  continuing.
- This commit deprecates `ng-reflect-*` attributes and updates the runtime to stop producing them by default. Please refactor application and test code to avoid relying on `ng-reflect-*` attributes.

  To enable a more seamless upgrade to v20, we've added the `provideNgReflectAttributes()` function (can be imported from the `@angular/core` package), which enables the mode in which Angular would be producing those attribites (in dev mode only). You can add the `provideNgReflectAttributes()` function to the list of providers within the bootstrap call.

### router

- The `RedirectFn` can now return `Observable` or
  `Promise`. Any code that directly calls functions returning this type
  may need to be adjusted to account for this.
- Several methods in the public API of the Router which
  required writable arrays have now been updated to accept readonly
  arrays when no mutations are done.
- The guards arrays on `Route` no longer include `any` in
  the type union. The union includes functions for the functional guards
  as well as a type matching `Injector.get`: `ProviderToken<T>|string`.
  Note that string is still deprecated on both the route guards and
  `Injector.get`.

## Deprecations

### core

- `ngIf`/`ngFor`/`ngSwitch` are deprecated. Use the control flow blocks instead (`@for`/`@if`/`@switch`).

### platform-browser

- All entries of the `@angular/platform-browser-dynamic`
- HammerJS support is deprecated and will be removed in a future major version.

### platform-server

- `@angular/platform-server/testing`

  Use e2e tests to verify SSR behavior instead.

### common

| Commit                                                                                           | Type | Description                                                                                                                                     |
| ------------------------------------------------------------------------------------------------ | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| [2e5362a469](https://github.com/angular/angular/commit/2e5362a4695c6d0c5e130f286a52cc9d97d0f721) | feat | accept undefined inputs in NgTemplateOutlet ([#61404](https://github.com/angular/angular/pull/61404))                                           |
| [b7d3f3dbfc](https://github.com/angular/angular/commit/b7d3f3dbfcfc40000ca34087d3b8b42319468177) | feat | Allow passing ScrollOptions to ViewportScroller ([#61002](https://github.com/angular/angular/pull/61002))                                       |
| [74cceba587](https://github.com/angular/angular/commit/74cceba5871e83e77a23536d8b64ff8888862dd3) | feat | throw error for suspicious date patterns ([#59798](https://github.com/angular/angular/pull/59798))                                              |
| [255c79e048](https://github.com/angular/angular/commit/255c79e0480b0adc876b526e2a96d5005692e42f) | fix  | cleanup `updateLatestValue` if view is destroyed before promise resolves ([#58041](https://github.com/angular/angular/pull/58041))              |
| [739cadae62](https://github.com/angular/angular/commit/739cadae62fd7302ef5fffa7897c8c4f2701a556) | fix  | Handle errors in async pipe subscriptions ([#60057](https://github.com/angular/angular/pull/60057))                                             |
| [cbbea70fa3](https://github.com/angular/angular/commit/cbbea70fa37b14e89e4f3459ae880116c0e894b1) | fix  | issue a warning instead of an error when `NgOptimizedImage` exceeds the preload limit ([#60879](https://github.com/angular/angular/pull/60879)) |
| [fc4a56d5c5](https://github.com/angular/angular/commit/fc4a56d5c5fa270dbb1402c7cafe6d4f2af571eb) | fix  | rename httpResource function in factory ([#60022](https://github.com/angular/angular/pull/60022))                                               |
| [785a1110e6](https://github.com/angular/angular/commit/785a1110e603a3573261528f2fda28718f548b4a) | fix  | resolve host binding type issues ([#60481](https://github.com/angular/angular/pull/60481))                                                      |

### compiler

| Commit                                                                                           | Type | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------------------------------- |
| [7a971766dc](https://github.com/angular/angular/commit/7a971766dc59691dc68da9439e180a6c4d7b17d8) | feat | add extended diagnostic for uninvoked track function on `@for` blocks ([#60495](https://github.com/angular/angular/pull/60495)) |
| [f2d5cf7edd](https://github.com/angular/angular/commit/f2d5cf7eddb1ca2d946076d7622778fb12273d31) | feat | support exponentiation operator in templates ([#59894](https://github.com/angular/angular/pull/59894))                          |
| [51b8ff23ce](https://github.com/angular/angular/commit/51b8ff23cefb5112937dec9727a5b5d6e913aae6) | feat | support tagged template literals in expressions ([#59947](https://github.com/angular/angular/pull/59947))                       |
| [1b8e7ab9fe](https://github.com/angular/angular/commit/1b8e7ab9fe46901979389b377be4232e11092260) | feat | support the `in` keyword in Binary expression ([#58432](https://github.com/angular/angular/pull/58432))                         |
| [0361c2d81f](https://github.com/angular/angular/commit/0361c2d81f5d2c56597002f465c00e9b1c4003e4) | feat | support void operator in templates ([#59894](https://github.com/angular/angular/pull/59894))                                    |
| [8b990a31c3](https://github.com/angular/angular/commit/8b990a31c3f9b27e096c4ac63a7fa1873fadbe72) | fix  | error if rawText isn't estimated correctly ([#60529](https://github.com/angular/angular/pull/60529))                            |
| [4fe489f1b4](https://github.com/angular/angular/commit/4fe489f1b4f8d1c0840af1224ee09d44cbb9c583) | fix  | exponentiation should be right-to-left associative ([#60101](https://github.com/angular/angular/pull/60101))                    |
| [ef1fd137a9](https://github.com/angular/angular/commit/ef1fd137a9e180059963b1f3a025c3acc1610b8f) | fix  | incorrect spans for template literals ([#60323](https://github.com/angular/angular/pull/60323))                                 |
| [e0d378d20e](https://github.com/angular/angular/commit/e0d378d20e768d353b01bc28e10ad53c5485b426) | fix  | incorrectly handling let declarations inside i18n ([#60512](https://github.com/angular/angular/pull/60512))                     |
| [b70ad3c4e6](https://github.com/angular/angular/commit/b70ad3c4e63158a72b8aea173b1268ec8ab08e2b) | fix  | proper handling of typeof, void in RecursiveAstVisitor ([#60101](https://github.com/angular/angular/pull/60101))                |
| [e25e6c95a2](https://github.com/angular/angular/commit/e25e6c95a28e4b01a58b9988d404a4199b7d1d13) | fix  | remove TypeScript from linker ([#61635](https://github.com/angular/angular/pull/61635))                                         |
| [768239a89c](https://github.com/angular/angular/commit/768239a89cba7e7cf1f497e15589705b1446f8a6) | perf | reduce allocations for let declarations only used in the same view ([#60512](https://github.com/angular/angular/pull/60512))    |

### compiler-cli

| Commit                                                                                           | Type | Description                                                                                                      |
| ------------------------------------------------------------------------------------------------ | ---- | ---------------------------------------------------------------------------------------------------------------- |
| [bec1610da2](https://github.com/angular/angular/commit/bec1610da241f24bdb9120843a91973a3823a004) | feat | add extended diagnostic for invalid nullish coalescing ([#60279](https://github.com/angular/angular/pull/60279)) |
| [c889382a20](https://github.com/angular/angular/commit/c889382a2044f9a024f475680c8573d0f7112562) | feat | detect missing structural directive imports ([#59443](https://github.com/angular/angular/pull/59443))            |
| [1971e57a45](https://github.com/angular/angular/commit/1971e57a457ff9fd4dc8a353b59b51364e08b443) | feat | support type checking of host bindings ([#60267](https://github.com/angular/angular/pull/60267))                 |
| [9ec9c7e1b8](https://github.com/angular/angular/commit/9ec9c7e1b8473c76661ad09a3961016ccc4ddfc7) | fix  | avoid fatal diagnostics for invalid module schemas ([#61220](https://github.com/angular/angular/pull/61220))     |
| [a1cacc5b17](https://github.com/angular/angular/commit/a1cacc5b17d6f865bb260f475f1d2ef37dc845f1) | fix  | avoid fatal diagnostics for missing template files ([#58673](https://github.com/angular/angular/pull/58673))     |
| [1e6faad479](https://github.com/angular/angular/commit/1e6faad479e879083550424f92b6501fe09d48ba) | fix  | correctly parse event name in HostListener ([#60561](https://github.com/angular/angular/pull/60561))             |
| [ffb19e64f1](https://github.com/angular/angular/commit/ffb19e64f1ced7b5eb55e1c1b96b6f7c54835a1d) | fix  | preserve required parens for nullish coalescing ([#60060](https://github.com/angular/angular/pull/60060))        |
| [7c9b4892e9](https://github.com/angular/angular/commit/7c9b4892e9f6df164e4e289195bff27f2cc9a0ea) | fix  | preserve required parens in exponentiation expressions ([#60101](https://github.com/angular/angular/pull/60101)) |
| [7e03af898e](https://github.com/angular/angular/commit/7e03af898e5144eb3a64b17dd6470874467d9133) | fix  | set correct target when type checking events ([#60561](https://github.com/angular/angular/pull/60561))           |
| [2d51a203dc](https://github.com/angular/angular/commit/2d51a203dc87d6d880c3cf6d68bf8590f5dd689b) | fix  | wrong event name for host listener decorators ([#60460](https://github.com/angular/angular/pull/60460))          |

### core

| Commit                                                                                           | Type     | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------------------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| [22d3f0562c](https://github.com/angular/angular/commit/22d3f0562cc6c21ebf7c29ff0e01bce40dcd50a0) | feat     | add hook for producer creation side effects ([#60333](https://github.com/angular/angular/pull/60333))                                       |
| [fe57332fc5](https://github.com/angular/angular/commit/fe57332fc5c4e6b44f01b9b4343385e90b3edf77) | feat     | add input binding support to dynamically-created components ([#60137](https://github.com/angular/angular/pull/60137))                       |
| [65adb3024d](https://github.com/angular/angular/commit/65adb3024d6ae2af14952f4afdb2b92b600da074) | feat     | Add provider which reports unhandled errors on window to ErrorHandler ([#60704](https://github.com/angular/angular/pull/60704))             |
| [b154fb3911](https://github.com/angular/angular/commit/b154fb391142db6139cddad820a9a72838f0f16c) | feat     | add support for two-way bindings on dynamically-created components ([#60342](https://github.com/angular/angular/pull/60342))                |
| [82aa2c1a52](https://github.com/angular/angular/commit/82aa2c1a527be85e09f0f660ece56b594bff5a76) | feat     | add the ability to apply directives to dynamically-created components ([#60137](https://github.com/angular/angular/pull/60137))             |
| [326d48afb4](https://github.com/angular/angular/commit/326d48afb4266ef9b028860e2f845de005653d75) | feat     | drop support for TypeScript older than 5.8 ([#60197](https://github.com/angular/angular/pull/60197))                                        |
| [d260ca3091](https://github.com/angular/angular/commit/d260ca3091a6de215ba31f2516134d1aa11fe04c) | feat     | emit template function for template related profiler hooks ([#60174](https://github.com/angular/angular/pull/60174))                        |
| [a4bad8d361](https://github.com/angular/angular/commit/a4bad8d361e8a65b52df8c3d5436401343abace7) | feat     | export signalGetFn from signal primitives ([#60497](https://github.com/angular/angular/pull/60497))                                         |
| [4812215a7b](https://github.com/angular/angular/commit/4812215a7b3bcb54bce3f017d89246aa39af2cc5) | feat     | Expose `Injector.destroy` on `Injector` created with `Injector.create` ([#60054](https://github.com/angular/angular/pull/60054))            |
| [c1bcae91dd](https://github.com/angular/angular/commit/c1bcae91ddb03efb04451799fbf92e9fd1e82026) | feat     | expose performance data in Chrome DevTools ([#60789](https://github.com/angular/angular/pull/60789))                                        |
| [809b5b4596](https://github.com/angular/angular/commit/809b5b4596cafcdabdb1c5fa92fcab539c6f637f) | feat     | introduce new DI profiling event ([#60158](https://github.com/angular/angular/pull/60158))                                                  |
| [d5fd7349fb](https://github.com/angular/angular/commit/d5fd7349fb8b3942f0727cd7ee62e7a7b231e9e4) | feat     | introduce TestBed.tick() ([#60993](https://github.com/angular/angular/pull/60993))                                                          |
| [4e88e18a8e](https://github.com/angular/angular/commit/4e88e18a8ef0f19aed85316e80627ad6d2ec80a7) | feat     | mark `toObservable` as stable ([#60449](https://github.com/angular/angular/pull/60449))                                                     |
| [727cda3856](https://github.com/angular/angular/commit/727cda385690066c0bbc94734e344cf5ad741e9a) | feat     | mark linkedSignal API as public ([#60865](https://github.com/angular/angular/pull/60865))                                                   |
| [644d9f3bbd](https://github.com/angular/angular/commit/644d9f3bbdb5e77a78d95669cfd6b0f6d8cb09b9) | feat     | mark the toSignal API as stable ([#60442](https://github.com/angular/angular/pull/60442))                                                   |
| [e711f99d81](https://github.com/angular/angular/commit/e711f99d81ea7dbd4526f859c363244fccdf0626) | feat     | move `provideExperimentalCheckNoChangesForDebug` to `provideCheckNoChangesConfig` ([#60906](https://github.com/angular/angular/pull/60906)) |
| [7ccec1494f](https://github.com/angular/angular/commit/7ccec1494f864a485d2188da62d2006c31849f3f) | feat     | move DOCUMENT token into core ([#60663](https://github.com/angular/angular/pull/60663))                                                     |
| [953c4b2580](https://github.com/angular/angular/commit/953c4b25808b357e78bf1cf6b2ef8b4a84ffaf49) | feat     | Move zoneless change detection to dev preview ([#60748](https://github.com/angular/angular/pull/60748))                                     |
| [611baaf069](https://github.com/angular/angular/commit/611baaf0695882f1684baa1c007f7ae112afa5d4) | feat     | remove InjectFlags from public API ([#60318](https://github.com/angular/angular/pull/60318))                                                |
| [5e209cb560](https://github.com/angular/angular/commit/5e209cb560fdfb943169a09d35389c703fa71418) | feat     | remove TestBed.get ([#60414](https://github.com/angular/angular/pull/60414))                                                                |
| [d8fbb909ce](https://github.com/angular/angular/commit/d8fbb909ce4380c0ea48512cf5d364a2785fd428) | feat     | rename afterRender to afterEveryRender and stabilize ([#60999](https://github.com/angular/angular/pull/60999))                              |
| [567522398f](https://github.com/angular/angular/commit/567522398ffc4149e726ef30d87b0169ae6f3e21) | feat     | stabilize incremental hydration api ([#60888](https://github.com/angular/angular/pull/60888))                                               |
| [8d050b5bfc](https://github.com/angular/angular/commit/8d050b5bfc49878f01777f71a37e34d5c1733b1b) | feat     | stabilize linkedSignal API ([#60741](https://github.com/angular/angular/pull/60741))                                                        |
| [866cea9a05](https://github.com/angular/angular/commit/866cea9a057ac67fa3f679f1f3da18700926c15a) | feat     | Stabilize PendingTasks Injectable ([#60716](https://github.com/angular/angular/pull/60716))                                                 |
| [bf8492b871](https://github.com/angular/angular/commit/bf8492b8711dd25f5a1488a7338f435b59b9e91c) | feat     | stabilize withI18nSupport() api ([#60889](https://github.com/angular/angular/pull/60889))                                                   |
| [be44cc8f40](https://github.com/angular/angular/commit/be44cc8f40fb2364dbaf20ba24496e4355f84e78) | feat     | support listening to outputs on dynamically-created components ([#60137](https://github.com/angular/angular/pull/60137))                    |
| [fe9b79b615](https://github.com/angular/angular/commit/fe9b79b615bb72989498c2dc9e84a89e618ebeb4) | feat     | update Node.js version support ([#60545](https://github.com/angular/angular/pull/60545))                                                    |
| [e170d24240](https://github.com/angular/angular/commit/e170d242402f5ee4671dd425c24e5f31fbc67b21) | fix      | add migration away from InjectFlags ([#60318](https://github.com/angular/angular/pull/60318))                                               |
| [7eb59d3887](https://github.com/angular/angular/commit/7eb59d38872667c73e09a42e4260e8a58f102448) | fix      | added @angular/compiler as a peer dependency ([#55610](https://github.com/angular/angular/pull/55610))                                      |
| [7232ce5b17](https://github.com/angular/angular/commit/7232ce5b17c9cce87bebe41c81f55043f21e639b) | fix      | Catch and report rejections in async function of `PendingTasks.run` ([#60044](https://github.com/angular/angular/pull/60044))               |
| [fd12220a35](https://github.com/angular/angular/commit/fd12220a35665d2378b74905c998fcff6130eb91) | fix      | defer block render failures should report to application error handler ([#60149](https://github.com/angular/angular/pull/60149))            |
| [3459faadbf](https://github.com/angular/angular/commit/3459faadbfce9be7b1ca69f4d4db82a65b31de50) | fix      | do not allow setInput to be used with inputBinding ([#60137](https://github.com/angular/angular/pull/60137))                                |
| [0ac949c266](https://github.com/angular/angular/commit/0ac949c266637ab723430ff17adb1af58b14fa0d) | fix      | do not run change detection on global error events ([#60944](https://github.com/angular/angular/pull/60944))                                |
| [4fe34f4cfe](https://github.com/angular/angular/commit/4fe34f4cfea2aa0e355afa04c7183545637283c3) | fix      | enable stashing only when `withEventReplay()` is invoked ([#61077](https://github.com/angular/angular/pull/61077))                          |
| [962b59b14e](https://github.com/angular/angular/commit/962b59b14e9dad166973be72d74d1e04d25db5a4) | fix      | Ensure ComponentFixture does not duplicate error reporting from FakeAsync ([#60104](https://github.com/angular/angular/pull/60104))         |
| [7b819be83f](https://github.com/angular/angular/commit/7b819be83fc3c5ced7a7d14f777cad0691eef709) | fix      | Ensure errors in listeners report to the application error handler ([#60251](https://github.com/angular/angular/pull/60251))                |
| [ff772d7800](https://github.com/angular/angular/commit/ff772d780089b7b1fcaa14fbd9139d6eeca2f596) | fix      | fix typing on injector.get to omit 'any' ([#60202](https://github.com/angular/angular/pull/60202))                                          |
| [13d1c8ab38](https://github.com/angular/angular/commit/13d1c8ab38707b06dbed4941a556f982665b3304) | fix      | fixes timing of hydration cleanup on control flow ([#60425](https://github.com/angular/angular/pull/60425))                                 |
| [0b69b61929](https://github.com/angular/angular/commit/0b69b619296231edfab0561480296c477e2c72ca) | fix      | Flush animations when no component has been checked ([#58089](https://github.com/angular/angular/pull/58089))                               |
| [3ba39bc28f](https://github.com/angular/angular/commit/3ba39bc28f93c208f7b50fcb878fe1aa1bc0413d) | fix      | getting resource value throws an error instead of returning undefined ([#61441](https://github.com/angular/angular/pull/61441))             |
| [ca6295e90b](https://github.com/angular/angular/commit/ca6295e90b72b352319ebf77d969b33783b284ed) | fix      | handle different DI token types in Chrome DevTools integration ([#61333](https://github.com/angular/angular/pull/61333))                    |
| [0162ceb427](https://github.com/angular/angular/commit/0162ceb427243e065d2cd81042451d705838d090) | fix      | inject migration should treat `@Attribute` as optional ([#60916](https://github.com/angular/angular/pull/60916))                            |
| [ea5eb28865](https://github.com/angular/angular/commit/ea5eb288651a87923edd86b2445d6ed32e52ed85) | fix      | input targeting not checking if input exists on host ([#60137](https://github.com/angular/angular/pull/60137))                              |
| [c8951159ac](https://github.com/angular/angular/commit/c8951159ac1994ecd98798627333af958aeb56cf) | fix      | mark `zone.js` as an optional peer dependency ([#61616](https://github.com/angular/angular/pull/61616))                                     |
| [d62379bb13](https://github.com/angular/angular/commit/d62379bb13f08e9e0fe9c7b93fe7c6ef46f8f181) | fix      | move reload method from Resource to WritableResource ([#61441](https://github.com/angular/angular/pull/61441))                              |
| [a89f1cff24](https://github.com/angular/angular/commit/a89f1cff2465cca383765e9f9d7e719970a3a6e4) | fix      | narrow error type for resources API ([#61441](https://github.com/angular/angular/pull/61441))                                               |
| [624be2ef0c](https://github.com/angular/angular/commit/624be2ef0c7255e62082751cc339d2cd618bd633) | fix      | prevent stash listener conflicts ([#59635](https://github.com/angular/angular/pull/59635))                                                  |
| [017cc0a37c](https://github.com/angular/angular/commit/017cc0a37cf5b2534a07ebd207061a05d6ab89ec) | fix      | properly handle app stabilization with defer blocks ([#61040](https://github.com/angular/angular/pull/61040))                               |
| [6e79eaf739](https://github.com/angular/angular/commit/6e79eaf7399170611bcbefda0082947b629f2693) | fix      | reading resource value after reload in the error state ([#61441](https://github.com/angular/angular/pull/61441))                            |
| [3d85d9363c](https://github.com/angular/angular/commit/3d85d9363c6dd02d2f14181bdad1dc0b05fedc31) | fix      | reduce total memory usage of various migration schematics ([#60774](https://github.com/angular/angular/pull/60774))                         |
| [1c7b356625](https://github.com/angular/angular/commit/1c7b35662587de8c3245ca26ba7a04aba2c0a341) | fix      | release `hasPendingTasks` observers ([#59723](https://github.com/angular/angular/pull/59723))                                               |
| [43cbc58254](https://github.com/angular/angular/commit/43cbc58254ecb8a1a6a938479b6c388cc00143d7) | fix      | remove `forceRoot` flag for effects ([#60535](https://github.com/angular/angular/pull/60535))                                               |
| [48974c3cf8](https://github.com/angular/angular/commit/48974c3cf88ab1a70411bea4950823f975994087) | fix      | remove `rejectErrors` option encourages uncaught exceptions ([#60397](https://github.com/angular/angular/pull/60397))                       |
| [491b0a4ead](https://github.com/angular/angular/commit/491b0a4ead98822c767543e1f1c8046ed9d1be20) | fix      | Remove duplicate reporting of errors in `CDR.detectChanges` ([#60056](https://github.com/angular/angular/pull/60056))                       |
| [04d963c0a5](https://github.com/angular/angular/commit/04d963c0a5f68c93015c13973d29107fe35bb942) | fix      | remove unused parameter from listener instruction ([#60406](https://github.com/angular/angular/pull/60406))                                 |
| [0ae1889560](https://github.com/angular/angular/commit/0ae18895605eef6b4946898ff0752ae3917c0057) | fix      | run `ApplicationRef.prototype.bootstrap` in `NgZone` ([#60720](https://github.com/angular/angular/pull/60720))                              |
| [a611b234d7](https://github.com/angular/angular/commit/a611b234d7405f3a06389d66860a139cd9202c60) | fix      | run root effects in creation order ([#60534](https://github.com/angular/angular/pull/60534))                                                |
| [338818ce89](https://github.com/angular/angular/commit/338818ce8992294a6b3ab15947e65eb0c6d01391) | fix      | Surface errors from `ApplicationRef.tick` to callsite ([#60102](https://github.com/angular/angular/pull/60102))                             |
| [350776b412](https://github.com/angular/angular/commit/350776b4128271760008c4f1430c9a44c8b83234) | fix      | TestBed.tick should ensure test components are synchronized ([#61382](https://github.com/angular/angular/pull/61382))                       |
| [3d4ddd2247](https://github.com/angular/angular/commit/3d4ddd224766401982b6dd4b30d88eba3d99f029) | fix      | Testing should not throw when Zone does not patch test FW APIs ([#61628](https://github.com/angular/angular/pull/61628))                    |
| [30e081287d](https://github.com/angular/angular/commit/30e081287da68d6801f8ebd5a00d495b51d4c68d) | fix      | update min Node.js support to 20.19, 22.12, and 24.0 ([#61500](https://github.com/angular/angular/pull/61500))                              |
| [b407157ee8](https://github.com/angular/angular/commit/b407157ee848296cd264891b1d7cc9c57c719418) | refactor | Deprecate the structural directives `ngIf`/`ngFor`/`ngSwitch`. ([#60492](https://github.com/angular/angular/pull/60492))                    |
| [c2987d8402](https://github.com/angular/angular/commit/c2987d8402b7b03333b0081a7f97750cdf612e99) | refactor | stop producing `ng-reflect` attributes by default ([#60973](https://github.com/angular/angular/pull/60973))                                 |

### forms

| Commit                                                                                           | Type | Description                                                                                             |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------- |
| [a07ee60989](https://github.com/angular/angular/commit/a07ee60989441c38e6539fd25cad5166622e9f9e) | feat | add markAllAsDirty to AbstractControl ([#58663](https://github.com/angular/angular/pull/58663))         |
| [bdfbd54932](https://github.com/angular/angular/commit/bdfbd5493240869e9a25fa10a0f6c21510e12492) | feat | Allow to reset a form without emitting events ([#60354](https://github.com/angular/angular/pull/60354)) |
| [81fe0536fd](https://github.com/angular/angular/commit/81fe0536fdb86ba2428954ac5305c2424f369339) | fix  | Make sure statusChanges is emitted ([#57098](https://github.com/angular/angular/pull/57098))            |
| [bdd5e20423](https://github.com/angular/angular/commit/bdd5e204233eeb79e04a782a51c08429991eb03e) | fix  | resolve host binding type issues ([#60481](https://github.com/angular/angular/pull/60481))              |

### http

| Commit                                                                                           | Type | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------------ |
| [ccc5cc068f](https://github.com/angular/angular/commit/ccc5cc068f788013c19498c44d13530c1bc98912) | feat | add keepalive support for fetch requests ([#60621](https://github.com/angular/angular/pull/60621))           |
| [5795e03cdf](https://github.com/angular/angular/commit/5795e03cdf25f4a96b73a49be915efbeeb398d83) | fix  | Delay stabilization until next app synchronization ([#60656](https://github.com/angular/angular/pull/60656)) |

### platform-browser

| Commit                                                                                           | Type     | Description                                                                                                |
| ------------------------------------------------------------------------------------------------ | -------- | ---------------------------------------------------------------------------------------------------------- |
| [bc2cab747f](https://github.com/angular/angular/commit/bc2cab747f23e517128bdefedd7d5296a1c9ebbc) | refactor | Deprecate the `platform-browser-dynamic` package ([#61043](https://github.com/angular/angular/pull/61043)) |
| [a980ac9a6a](https://github.com/angular/angular/commit/a980ac9a6a9b47246db8690e7779e563bf231a90) | refactor | Deprecate the HammerJS integration ([#60257](https://github.com/angular/angular/pull/60257))               |

### platform-server

| Commit                                                                                           | Type     | Description                                                                                 |
| ------------------------------------------------------------------------------------------------ | -------- | ------------------------------------------------------------------------------------------- |
| [2240a21c97](https://github.com/angular/angular/commit/2240a21c9703f3b1945a37ebe86428a8daf40b36) | refactor | deprecate the testing entry point ([#60915](https://github.com/angular/angular/pull/60915)) |

### router

| Commit                                                                                           | Type | Description                                                                                                             |
| ------------------------------------------------------------------------------------------------ | ---- | ----------------------------------------------------------------------------------------------------------------------- |
| [0bb4bd661e](https://github.com/angular/angular/commit/0bb4bd661e8fafe3228692181397272898fb9e9a) | feat | Add ability to directly abort a navigation ([#60380](https://github.com/angular/angular/pull/60380))                    |
| [62de7d930a](https://github.com/angular/angular/commit/62de7d930a5d2f3cc39b6bf38dedbe3e9d938842) | feat | add asynchronous redirects ([#60863](https://github.com/angular/angular/pull/60863))                                    |
| [7c12cb1df9](https://github.com/angular/angular/commit/7c12cb1df980734c64a4d127c2b9a7094e0fe9fb) | feat | Allow resolvers to read resolved data from ancestors ([#59860](https://github.com/angular/angular/pull/59860))          |
| [ff98ccb193](https://github.com/angular/angular/commit/ff98ccb19391ed4e04528b82771c04ad67067d68) | feat | support custom elements for RouterLink ([#60290](https://github.com/angular/angular/pull/60290))                        |
| [219f41d049](https://github.com/angular/angular/commit/219f41d049cf6798f81fbb393b4e23b2a030ff48) | fix  | Prevent dangling promise rejections from internal navigations ([#60162](https://github.com/angular/angular/pull/60162)) |
| [2419060fef](https://github.com/angular/angular/commit/2419060fef4e59a5633c29bfd5d55e2d5a17dd00) | fix  | relax required types on router commands to readonly array ([#60345](https://github.com/angular/angular/pull/60345))     |
| [c57951d58f](https://github.com/angular/angular/commit/c57951d58f3c1c9287349d40687715b631a1b25e) | fix  | Remove 'any' type from route guards ([#60378](https://github.com/angular/angular/pull/60378))                           |
| [db2f2d99c8](https://github.com/angular/angular/commit/db2f2d99c82aae52d8a0ae46616c6411d070b35e) | fix  | Scroller should scroll as soon as change detection completes ([#60086](https://github.com/angular/angular/pull/60086))  |

<!-- CHANGELOG SPLIT MARKER -->

<a name="19.2.14"></a>

# 19.2.14 (2025-05-28)

### compiler

| Commit                                                                                           | Type | Description                                                                                                      |
| ------------------------------------------------------------------------------------------------ | ---- | ---------------------------------------------------------------------------------------------------------------- |
| [24bab55f0c](https://github.com/angular/angular/commit/24bab55f0c89c4fe6037780fd7b2e8c8aa5429b2) | fix  | lexer support for template literals in object literals ([#61601](https://github.com/angular/angular/pull/61601)) |

### migrations

| Commit                                                                                           | Type | Description                                                                                              |
| ------------------------------------------------------------------------------------------------ | ---- | -------------------------------------------------------------------------------------------------------- |
| [9e1cd49662](https://github.com/angular/angular/commit/9e1cd4966202d89c7310ab84c50b2c4231a0213e) | fix  | preserve comments when removing unused imports ([#61674](https://github.com/angular/angular/pull/61674)) |

<!-- CHANGELOG SPLIT MARKER -->

<a name="19.2.13"></a>

# 19.2.13 (2025-05-23)

### common

| Commit                                                                                           | Type | Description                                                                                              |
| ------------------------------------------------------------------------------------------------ | ---- | -------------------------------------------------------------------------------------------------------- |
| [2c876b4fc5](https://github.com/angular/angular/commit/2c876b4fc5d89ce925b1403e239c7d162e39346b) | fix  | avoid injecting ApplicationRef in FetchBackend ([#61649](https://github.com/angular/angular/pull/61649)) |

### service-worker

| Commit                                                                                           | Type | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| [b15bddfa04](https://github.com/angular/angular/commit/b15bddfa04e11827166b466c9acbb89c77499d5d) | fix  | do not register service worker if app is destroyed before it is ready to register ([#61101](https://github.com/angular/angular/pull/61101)) |

<!-- CHANGELOG SPLIT MARKER -->

<a name="19.2.12"></a>

# 19.2.12 (2025-05-21)

### common

| Commit                                                                                           | Type | Description                                                                                          |
| ------------------------------------------------------------------------------------------------ | ---- | ---------------------------------------------------------------------------------------------------- |
| [126efc9972](https://github.com/angular/angular/commit/126efc9972e18806e71977d51a55f8ec2f0514d6) | fix  | cancel reader when app is destroyed ([#61528](https://github.com/angular/angular/pull/61528))        |
| [efda872453](https://github.com/angular/angular/commit/efda8724535a8560a64b28cc2bf81df5931af686) | fix  | prevent reading chunks if app is destroyed ([#61354](https://github.com/angular/angular/pull/61354)) |

### compiler

| Commit                                                                                           | Type | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------------ |
| [44bb328eae](https://github.com/angular/angular/commit/44bb328eaea028524206d0d2b9f12702c9bf3861) | fix  | avoid conflicts between HMR code and local symbols ([#61550](https://github.com/angular/angular/pull/61550)) |

### compiler-cli

| Commit                                                                                           | Type | Description                                                                                            |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------ |
| [107180260f](https://github.com/angular/angular/commit/107180260f2ac4ca8e8995e123f36944c8bec2f3) | fix  | Always retain prior results for all files ([#61487](https://github.com/angular/angular/pull/61487))    |
| [1191e62d70](https://github.com/angular/angular/commit/1191e62d70ee16f3b083b635dd60a9f2e0c2d4c7) | fix  | avoid ECMAScript private field metadata emit ([#61227](https://github.com/angular/angular/pull/61227)) |

### core

| Commit                                                                                           | Type | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------------------------ |
| [2b1b14f4d3](https://github.com/angular/angular/commit/2b1b14f4d3751b9b3c351ddc412ecdcb2aea4781) | fix  | cleanup `rxResource` abort listener ([#58306](https://github.com/angular/angular/pull/58306))                            |
| [8f9b05eaaa](https://github.com/angular/angular/commit/8f9b05eaaabf14d7570fde16e26a73d69f78dc14) | fix  | cleanup testability subscriptions ([#61261](https://github.com/angular/angular/pull/61261))                              |
| [eb53bda470](https://github.com/angular/angular/commit/eb53bda470312d449039ef9b1494e3b6cc081e42) | fix  | enable stashing only when `withEventReplay()` is invoked ([#61352](https://github.com/angular/angular/pull/61352))       |
| [94f5a4b4d6](https://github.com/angular/angular/commit/94f5a4b4d6ee195e05e7d2683ab386ee02d60a06) | fix  | Testing should not throw when Zone does not patch test FW APIs ([#61376](https://github.com/angular/angular/pull/61376)) |
| [c0c69a5abc](https://github.com/angular/angular/commit/c0c69a5abc7262887eaa1f0b84a6ec22be225994) | fix  | unregister `onDestroy` in `toSignal`. ([#61514](https://github.com/angular/angular/pull/61514))                          |

### platform-server

| Commit                                                                                           | Type | Description                                                                           |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------- |
| [8edafd0559](https://github.com/angular/angular/commit/8edafd05599b402f383e36879f76f2d5507450e8) | perf | speed up resolution of base ([#61392](https://github.com/angular/angular/pull/61392)) |

<!-- CHANGELOG SPLIT MARKER -->

<a name="19.2.11"></a>

# 19.2.11 (2025-05-15)

<!-- CHANGELOG SPLIT MARKER -->

<a name="19.2.10"></a>

# 19.2.10 (2025-05-07)

### common

| Commit                                                                                           | Type | Description                                                                                                                        |
| ------------------------------------------------------------------------------------------------ | ---- | ---------------------------------------------------------------------------------------------------------------------------------- |
| [89056a0356](https://github.com/angular/angular/commit/89056a035648906d82ed2bbf523b793bce732474) | fix  | cleanup `updateLatestValue` if view is destroyed before promise resolves ([#61064](https://github.com/angular/angular/pull/61064)) |

### core

| Commit                                                                                           | Type | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------------------- |
| [4623b61448](https://github.com/angular/angular/commit/4623b6144897c6063139afa2d189be4e2e1d70ba) | fix  | missing useExisting providers throwing for optional calls ([#61152](https://github.com/angular/angular/pull/61152)) |
| [400dbc5b89](https://github.com/angular/angular/commit/400dbc5b89a2af0ae5fd7830f6ea47352c8556ef) | fix  | properly handle app stabilization with defer blocks ([#61056](https://github.com/angular/angular/pull/61056))       |

### platform-server

| Commit                                                                                           | Type | Description                                                                                    |
| ------------------------------------------------------------------------------------------------ | ---- | ---------------------------------------------------------------------------------------------- |
| [a6f0d5bc20](https://github.com/angular/angular/commit/a6f0d5bc20382689b7336a7e1c79c0685252cc21) | fix  | less aggressive ngServerMode cleanup ([#61106](https://github.com/angular/angular/pull/61106)) |

<!-- CHANGELOG SPLIT MARKER -->

<a name="19.2.9"></a>

# 19.2.9 (2025-04-30)

### core

| Commit                                                                                           | Type | Description                                                                                                                |
| ------------------------------------------------------------------------------------------------ | ---- | -------------------------------------------------------------------------------------------------------------------------- |
| [946b844e0d](https://github.com/angular/angular/commit/946b844e0db7e8f2cabcaf4cb63abced62c01fc7) | fix  | async EventEmitter error should not prevent stability ([#61028](https://github.com/angular/angular/pull/61028))            |
| [dbb87026ca](https://github.com/angular/angular/commit/dbb87026ca10c5fb04fc1a350da27ea42cea7dc5) | fix  | call DestroyRef on destroy callback if view is destroyed [patch] ([#61061](https://github.com/angular/angular/pull/61061)) |
| [2e140a136a](https://github.com/angular/angular/commit/2e140a136a044a965da7f55e0d83731860671a05) | fix  | prevent stash listener conflicts [patch] ([#61063](https://github.com/angular/angular/pull/61063))                         |

<!-- CHANGELOG SPLIT MARKER -->

<a name="19.2.8"></a>

# 19.2.8 (2025-04-23)

### forms

| Commit                                                                                           | Type | Description                                                                                                      |
| ------------------------------------------------------------------------------------------------ | ---- | ---------------------------------------------------------------------------------------------------------------- |
| [ea4a211216](https://github.com/angular/angular/commit/ea4a21121681c78652f314c78c58390dca25f266) | fix  | make NgForm emit FormSubmittedEvent and FormResetEvent ([#60887](https://github.com/angular/angular/pull/60887)) |

<!-- CHANGELOG SPLIT MARKER -->

<a name="19.2.7"></a>

# 19.2.7 (2025-04-16)

### common

| Commit                                                                                           | Type | Description                                                                                                                                     |
| ------------------------------------------------------------------------------------------------ | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| [37ab6814f5](https://github.com/angular/angular/commit/37ab6814f5485434d9642b9f9c28dd430864247b) | fix  | issue a warning instead of an error when `NgOptimizedImage` exceeds the preload limit ([#60883](https://github.com/angular/angular/pull/60883)) |

### core

| Commit                                                                                           | Type | Description                                                                                          |
| ------------------------------------------------------------------------------------------------ | ---- | ---------------------------------------------------------------------------------------------------- |
| [b144126612](https://github.com/angular/angular/commit/b144126612e2cd14cbccc8d3cf4e2136a2e540ff) | fix  | inject migration: replace param with this. ([#60713](https://github.com/angular/angular/pull/60713)) |

### http

| Commit                                                                                           | Type | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| [d39e09da41](https://github.com/angular/angular/commit/d39e09da413732385a12ed21eb468649233e26d0) | fix  | Include HTTP status code and headers when HTTP requests errored in `httpResource` ([#60802](https://github.com/angular/angular/pull/60802)) |

<!-- CHANGELOG SPLIT MARKER -->

<a name="19.2.6"></a>

# 19.2.6 (2025-04-09)

### compiler

| Commit                                                                                           | Type | Description                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------ | ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [3441f7b914](https://github.com/angular/angular/commit/3441f7b914c73ccdaacbcd935e945dc304c5962a) | fix  | error if rawText isn't estimated correctly ([#60529](https://github.com/angular/angular/pull/60529)) ([#60753](https://github.com/angular/angular/pull/60753)) |

### compiler-cli

| Commit                                                                                           | Type | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------------ |
| [fc946c5f72](https://github.com/angular/angular/commit/fc946c5f7261ee3e49fa037bc55703b9ffcfbff3) | fix  | ensure HMR works with different output module type ([#60797](https://github.com/angular/angular/pull/60797)) |

### core

| Commit                                                                                           | Type | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [00bbd9b382](https://github.com/angular/angular/commit/00bbd9b382cc0244aa54ee331a6f7f9d7781db72) | fix  | fix docs for output migration ([#60764](https://github.com/angular/angular/pull/60764))                                                                                        |
| [f2bfa3151e](https://github.com/angular/angular/commit/f2bfa3151ee7ecb335665d55741387bd67ebee9d) | fix  | fix ng generate @angular/core:output-migration. Fixes angular[#58650](https://github.com/angular/angular/pull/58650) ([#60763](https://github.com/angular/angular/pull/60763)) |
| [9241615ad0](https://github.com/angular/angular/commit/9241615ad0825156f4bf31bc4308372e4789e902) | fix  | reduce total memory usage of various migration schematics ([#60776](https://github.com/angular/angular/pull/60776))                                                            |

### language-service

| Commit                                                                                           | Type | Description                                                                                              |
| ------------------------------------------------------------------------------------------------ | ---- | -------------------------------------------------------------------------------------------------------- |
| [0e82d42774](https://github.com/angular/angular/commit/0e82d427743c1d22e1683da11f66e33846f38663) | fix  | Do not provide element completions in end tag ([#60616](https://github.com/angular/angular/pull/60616))  |
| [fcdef1019f](https://github.com/angular/angular/commit/fcdef1019fd28c7261590ba484a949c809b9ceaf) | fix  | Ensure dollar signs are escaped in completions ([#60597](https://github.com/angular/angular/pull/60597)) |

<!-- CHANGELOG SPLIT MARKER -->

<a name="19.2.5"></a>

# 19.2.5 (2025-04-02)

###

| Commit                                                                                           | Type | Description                                                                    |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------ |
| [e61d06afb5](https://github.com/angular/angular/commit/e61d06afb5f68268b204bb2630930bb213620811) | fix  | step 6 tutorial docs ([#60630](https://github.com/angular/angular/pull/60630)) |

### animations

| Commit                                                                                           | Type | Description                                                                                                |
| ------------------------------------------------------------------------------------------------ | ---- | ---------------------------------------------------------------------------------------------------------- |
| [fa48f98d9f](https://github.com/angular/angular/commit/fa48f98d9f7e7b74deba65bea9bc90843b1c283b) | fix  | add missing peer dependency on `@angular/common` ([#60660](https://github.com/angular/angular/pull/60660)) |

### compiler

| Commit                                                                                           | Type | Description                                                                                             |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------- |
| [ca5aa4d55b](https://github.com/angular/angular/commit/ca5aa4d55b352d1ead43d78b6a74d9e3b57f8777) | fix  | throw for invalid "as" expression in if block ([#60580](https://github.com/angular/angular/pull/60580)) |

### compiler-cli

| Commit                                                                                           | Type | Description                                                                                                          |
| ------------------------------------------------------------------------------------------------ | ---- | -------------------------------------------------------------------------------------------------------------------- |
| [f4c4b10ea8](https://github.com/angular/angular/commit/f4c4b10ea8dc263c30d1051a83a72486344d81e4) | fix  | Produce fatal diagnostic on duplicate decorated properties ([#60376](https://github.com/angular/angular/pull/60376)) |
| [22a0e54ac4](https://github.com/angular/angular/commit/22a0e54ac4ae7b943740dc314ff7f26ee7530ee5) | fix  | support relative imports to symbols outside `rootDir` ([#60555](https://github.com/angular/angular/pull/60555))      |

### core

| Commit                                                                                           | Type | Description                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------ | ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [64da69f7b6](https://github.com/angular/angular/commit/64da69f7b68c906544b3cb76b2fc7ec42cc434a8) | fix  | check ngDevMode for undefined ([#60565](https://github.com/angular/angular/pull/60565))                                                                                      |
| [8f68d1bec3](https://github.com/angular/angular/commit/8f68d1bec320c8af4c28ad6c8dbeda4581e8299b) | fix  | fix ng generate @angular/core:output-migration ([#60626](https://github.com/angular/angular/pull/60626))                                                                     |
| [bc79985c65](https://github.com/angular/angular/commit/bc79985c65c38dee17f5cb53f2a14768632f72dc) | fix  | fix regexp for event types ([#60592](https://github.com/angular/angular/pull/60592))                                                                                         |
| [006ac7f22f](https://github.com/angular/angular/commit/006ac7f22f47b110129ca603cfa34f5514d7b4dd) | fix  | fixes [#592882](https://github.com/angular/angular/pull/592882) ng generate @angular/core:signal-queries-migration ([#60688](https://github.com/angular/angular/pull/60688)) |
| [da6e93f434](https://github.com/angular/angular/commit/da6e93f4341804cd16327596c30d8f9258b40d7e) | fix  | preserve comments in internal inject migration ([#60588](https://github.com/angular/angular/pull/60588))                                                                     |
| [dbbddd1617](https://github.com/angular/angular/commit/dbbddd161721990f29a037f88f930b333712550e) | fix  | prevent omission of deferred pipes in full compilation ([#60571](https://github.com/angular/angular/pull/60571))                                                             |

### language-service

| Commit                                                                                           | Type | Description                                                                                             |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------- |
| [0e9e0348dd](https://github.com/angular/angular/commit/0e9e0348dd972c96ecee8bb990aba8c604dc704f) | fix  | Update adapter to log instead of throw errors ([#60651](https://github.com/angular/angular/pull/60651)) |

### migrations

| Commit                                                                                           | Type | Description                                                                                                                 |
| ------------------------------------------------------------------------------------------------ | ---- | --------------------------------------------------------------------------------------------------------------------------- |
| [15f53f035b](https://github.com/angular/angular/commit/15f53f035ba64fa761db64d48dd9daa1499370e3) | fix  | handle shorthand assignments in super call ([#60602](https://github.com/angular/angular/pull/60602))                        |
| [4b161e6234](https://github.com/angular/angular/commit/4b161e62344a51e87f1b5c5778fd72e56fc37922) | fix  | inject migration not handling super parameter referenced via this ([#60602](https://github.com/angular/angular/pull/60602)) |

### router

| Commit                                                                                           | Type | Description                                                                               |
| ------------------------------------------------------------------------------------------------ | ---- | ----------------------------------------------------------------------------------------- |
| [958e98e4f7](https://github.com/angular/angular/commit/958e98e4f7ab8e708440f03eb68612d1802b9a71) | fix  | Add missing types to transition ([#60307](https://github.com/angular/angular/pull/60307)) |

### service-worker

| Commit                                                                                           | Type | Description                                                                                                                             |
| ------------------------------------------------------------------------------------------------ | ---- | --------------------------------------------------------------------------------------------------------------------------------------- |
| [7cd89ad2c6](https://github.com/angular/angular/commit/7cd89ad2c66adeb625f75d23fea32e762162d3d5) | fix  | assign initializing client's app version, when a request is for worker script ([#58131](https://github.com/angular/angular/pull/58131)) |

<!-- CHANGELOG SPLIT MARKER -->

<a name="19.2.4"></a>

# 19.2.4 (2025-03-26)

### core

| Commit                                                                                            | Type | Description                                                                                  |
| ------------------------------------------------------------------------------------------------- | ---- | -------------------------------------------------------------------------------------------- |
| [081f5f5a83f](https://github.com/angular/angular/commit/081f5f5a83fef99718952519bed9fe39005d6d37) | fix  | fix used templates are not deleted ([#60459](https://github.com/angular/angular/pull/60459)) |

### localize

| Commit                                                                                            | Type | Description                                                                                     |
| ------------------------------------------------------------------------------------------------- | ---- | ----------------------------------------------------------------------------------------------- |
| [a2f622d82d6](https://github.com/angular/angular/commit/a2f622d82d6c0f93a5fdf34fc8e5829db04c7380) | fix  | handle @angular/build:karma in ng add ([#60513](https://github.com/angular/angular/pull/60513)) |

### platform-browser

| Commit                                                                                            | Type | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------ |
| [8e8ccc79279](https://github.com/angular/angular/commit/8e8ccc792790c876cf5831f3d7a504290c665a1b) | fix  | ensure `platformBrowserTesting` includes `platformBrowser` providers ([#60480](https://github.com/angular/angular/pull/60480)) |

<!-- CHANGELOG SPLIT MARKER -->

<a name="19.2.3"></a>

# 19.2.3 (2025-03-19)

### compiler-cli

| Commit                                                                                           | Type | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------------ |
| [aa8ea7a5b2](https://github.com/angular/angular/commit/aa8ea7a5b227913e3f15270dac48479481c47f9a) | fix  | report more accurate diagnostic for invalid import ([#60455](https://github.com/angular/angular/pull/60455)) |

### core

| Commit                                                                                           | Type | Description                                                                                             |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------- |
| [13a8709b2b](https://github.com/angular/angular/commit/13a8709b2ba29ef3ab7d38bfb41cdd3d44c24c51) | fix  | catch hydration marker with implicit body tag ([#60429](https://github.com/angular/angular/pull/60429)) |
| [296aded9da](https://github.com/angular/angular/commit/296aded9daaf04edd3cda623a220cbd2bf57e0f1) | fix  | execute timer trigger outside zone ([#60392](https://github.com/angular/angular/pull/60392))            |
| [0615ffb4f7](https://github.com/angular/angular/commit/0615ffb4f7a41cca2a408419830411897d1826e6) | fix  | include input name in error message ([#60404](https://github.com/angular/angular/pull/60404))           |

### platform-browser-dynamic

| Commit                                                                                           | Type | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------------ |
| [1e06c8e8b6](https://github.com/angular/angular/commit/1e06c8e8b6473a19584ceb66945fd435ea4e6af9) | fix  | ensure compiler is loaded before `@angular/common` ([#60458](https://github.com/angular/angular/pull/60458)) |

### upgrade

| Commit                                                                                           | Type | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------------- |
| [9e1a1030c8](https://github.com/angular/angular/commit/9e1a1030c818e9849c00ded5f79535ea56976ea8) | fix  | handle output emitters when downgrading a component ([#60369](https://github.com/angular/angular/pull/60369)) |

<!-- CHANGELOG SPLIT MARKER -->

<a name="19.2.2"></a>

# 19.2.2 (2025-03-12)

### common

| Commit                                                                                           | Type | Description                                                                                         |
| ------------------------------------------------------------------------------------------------ | ---- | --------------------------------------------------------------------------------------------------- |
| [90a16a1088](https://github.com/angular/angular/commit/90a16a10888eee37d8a61cdbfad070e002a3cfdf) | fix  | support equality function in httpResource ([#60026](https://github.com/angular/angular/pull/60026)) |

### compiler

| Commit                                                                                           | Type | Description                                                                                                                                               |
| ------------------------------------------------------------------------------------------------ | ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [56b551d273](https://github.com/angular/angular/commit/56b551d273a0978e1f2e2ef914c1d7ae942a28a8) | fix  | incorrect spans for template literals ([#60323](https://github.com/angular/angular/pull/60323)) ([#60331](https://github.com/angular/angular/pull/60331)) |

### compiler-cli

| Commit                                                                                           | Type | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------------- |
| [23ca88522b](https://github.com/angular/angular/commit/23ca88522bbc23e24a2b20e48e62edcce3a42eb6) | fix  | handle transformed classes when generating HMR code ([#60298](https://github.com/angular/angular/pull/60298)) |

### core

| Commit                                                                                           | Type | Description                                                                                                                       |
| ------------------------------------------------------------------------------------------------ | ---- | --------------------------------------------------------------------------------------------------------------------------------- |
| [6dc41265fd](https://github.com/angular/angular/commit/6dc41265fd47df3fd0462bcd8f451eb6aea972ef) | fix  | check whether application is destroyed before initializing event replay ([#59789](https://github.com/angular/angular/pull/59789)) |
| [bb12b30d52](https://github.com/angular/angular/commit/bb12b30d5213912f50f53aff60a11e6d47349c82) | fix  | ensures immediate trigger fires properly with lazy loaded routes ([#60203](https://github.com/angular/angular/pull/60203))        |
| [b144dd946e](https://github.com/angular/angular/commit/b144dd946e38e52ce716aca7c6ba7c1a1a02f13d) | fix  | fix removal of a container reference used in the component file ([#60210](https://github.com/angular/angular/pull/60210))         |

### platform-server

| Commit                                                                                           | Type | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------ |
| [15c42969fc](https://github.com/angular/angular/commit/15c42969fc42c76e3bd593201164183fb82d70f6) | fix  | add missing peer dependency for `rxjs` ([#60308](https://github.com/angular/angular/pull/60308)) |

### router

| Commit                                                                                           | Type | Description                                                              |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------ |
| [7bcdf7c143](https://github.com/angular/angular/commit/7bcdf7c1435f766b2b0bbd383358ef2ddabf217a) | fix  | update symbols ([#60233](https://github.com/angular/angular/pull/60233)) |

<!-- CHANGELOG SPLIT MARKER -->

<a name="19.2.1"></a>

# 19.2.1 (2025-03-05)

### common

| Commit                                                                                           | Type | Description                                                                                                            |
| ------------------------------------------------------------------------------------------------ | ---- | ---------------------------------------------------------------------------------------------------------------------- |
| [c2de5f68b3](https://github.com/angular/angular/commit/c2de5f68b3d3cd8a0c43b3c4325a1a1db874e132) | fix  | clean up `onUrlChange` listener when root scope is destroyed ([#60004](https://github.com/angular/angular/pull/60004)) |

### compiler-cli

| Commit                                                                                           | Type | Description                                                                                                           |
| ------------------------------------------------------------------------------------------------ | ---- | --------------------------------------------------------------------------------------------------------------------- |
| [1dd94476b3](https://github.com/angular/angular/commit/1dd94476b35d08e753766b1d0c5d8af5faa017a9) | fix  | ensure template IDs are not reused if a source file changes ([#60152](https://github.com/angular/angular/pull/60152)) |

### core

| Commit                                                                                           | Type | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------------------ |
| [1b3b05bf72](https://github.com/angular/angular/commit/1b3b05bf7294963aa50f83b726db620b250b1a5c) | fix  | cache ComponentRef inputs and outputs ([#60156](https://github.com/angular/angular/pull/60156))                    |
| [330c24aed9](https://github.com/angular/angular/commit/330c24aed92e4b916fb7ac6a91fb17c3ae728869) | fix  | prevent invoking replay listeners on disconnected nodes ([#60103](https://github.com/angular/angular/pull/60103))  |
| [cfad089cc3](https://github.com/angular/angular/commit/cfad089cc359cddf08d462662d2a6bf3acab9b22) | fix  | prevents event replay from being called on comment nodes ([#60130](https://github.com/angular/angular/pull/60130)) |

### language-service

| Commit                                                                                           | Type | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------------------ |
| [3f0116607d](https://github.com/angular/angular/commit/3f0116607dc3ad7e31cb4d895a56094f77c82f5d) | fix  | Forward the tags for quick info from the type definition ([#59524](https://github.com/angular/angular/pull/59524)) |

<!-- CHANGELOG SPLIT MARKER -->

<a name="19.2.0"></a>

# 19.2.0 (2025-02-26)

### common

| Commit                                                                                           | Type | Description                                                                                     |
| ------------------------------------------------------------------------------------------------ | ---- | ----------------------------------------------------------------------------------------------- |
| [3e39da593a](https://github.com/angular/angular/commit/3e39da593a0a0c047a2a03b8d5fcabf9dbace40f) | feat | introduce experimental `httpResource` ([#59876](https://github.com/angular/angular/pull/59876)) |

### compiler

| Commit                                                                                           | Type | Description                                                                                                 |
| ------------------------------------------------------------------------------------------------ | ---- | ----------------------------------------------------------------------------------------------------------- |
| [5b20bab96d](https://github.com/angular/angular/commit/5b20bab96d20fe89b5cc4b4af28edbaae2604da1) | feat | Add Skip Hydration diagnostic. ([#59576](https://github.com/angular/angular/pull/59576))                    |
| [fe8a68329b](https://github.com/angular/angular/commit/fe8a68329b50363f914a728579392f3fc68670a6) | feat | support untagged template literals in expressions ([#59230](https://github.com/angular/angular/pull/59230)) |

### core

| Commit                                                                                           | Type | Description                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------ | ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [2588985f43](https://github.com/angular/angular/commit/2588985f433b20a6a5a8d239347291f5d6fb2451) | feat | pass signal node to throwInvalidWriteToSignalErrorFn ([#59600](https://github.com/angular/angular/pull/59600))                                                 |
| [168516462a](https://github.com/angular/angular/commit/168516462a9673b158fcaa38b8ce17bf684a8ac9) | feat | support default value in `resource()` ([#59655](https://github.com/angular/angular/pull/59655))                                                                |
| [bc2ad7bfd3](https://github.com/angular/angular/commit/bc2ad7bfd37a61992b550943de5da0eab2eec98b) | feat | support streaming resources ([#59573](https://github.com/angular/angular/pull/59573))                                                                          |
| [146ab9a76e](https://github.com/angular/angular/commit/146ab9a76e6b4d8db7d08d34e2571ba5207f8756) | feat | support TypeScript 5.8 ([#59830](https://github.com/angular/angular/pull/59830))                                                                               |
| [6c92d65349](https://github.com/angular/angular/commit/6c92d653493404a5f13aa59cde390bcbed973fb6) | fix  | add `hasValue` narrowing to `ResourceRef` ([#59708](https://github.com/angular/angular/pull/59708))                                                            |
| [96e602ebe9](https://github.com/angular/angular/commit/96e602ebe9cdf7355befad22c11f9f91e0436e01) | fix  | cancel in-progress request when same value is assigned ([#59280](https://github.com/angular/angular/pull/59280))                                               |
| [6789c7ef94](https://github.com/angular/angular/commit/6789c7ef947952551d7598fe37a3d86093b75720) | fix  | Defer afterRender until after first CD ([#59455](https://github.com/angular/angular/pull/59455)) ([#59551](https://github.com/angular/angular/pull/59551))     |
| [c87e581dd9](https://github.com/angular/angular/commit/c87e581dd9e240c88cea50f222942873bdccd01d) | fix  | Don't run effects in check no changes pass ([#59455](https://github.com/angular/angular/pull/59455)) ([#59551](https://github.com/angular/angular/pull/59551)) |
| [127fc0dc84](https://github.com/angular/angular/commit/127fc0dc847a4e8b62be36cdd980a067c4da974f) | fix  | fix `resource()`'s `previous.state` ([#59708](https://github.com/angular/angular/pull/59708))                                                                  |
| [b592b1b051](https://github.com/angular/angular/commit/b592b1b0516786c52c7d0638c4e7545b0de8a545) | fix  | fix race condition in resource() ([#59851](https://github.com/angular/angular/pull/59851))                                                                     |
| [a299e02e91](https://github.com/angular/angular/commit/a299e02e9141cdc4d74185deb58308fa010bb36e) | fix  | preserve tracing snapshot until tick finishes ([#59796](https://github.com/angular/angular/pull/59796))                                                        |

### forms

| Commit                                                                                           | Type | Description                                                                                   |
| ------------------------------------------------------------------------------------------------ | ---- | --------------------------------------------------------------------------------------------- |
| [fa0c3e3210](https://github.com/angular/angular/commit/fa0c3e3210885a36e5c9e9eb76e821032f5cd215) | feat | support type set in form validators ([#45793](https://github.com/angular/angular/pull/45793)) |

### migrations

| Commit                                                                                           | Type | Description                                                                                                           |
| ------------------------------------------------------------------------------------------------ | ---- | --------------------------------------------------------------------------------------------------------------------- |
| [1cd3a7db83](https://github.com/angular/angular/commit/1cd3a7db83e1d05a31d23324676420b614cdabe2) | feat | add migration to convert templates to use self-closing tags ([#57342](https://github.com/angular/angular/pull/57342)) |

### platform-browser

| Commit                                                                                           | Type | Description                                                                                              |
| ------------------------------------------------------------------------------------------------ | ---- | -------------------------------------------------------------------------------------------------------- |
| [e6cb411e43](https://github.com/angular/angular/commit/e6cb411e4393a4b1f5852d3d7c5b9622504399b1) | fix  | automatically disable animations on the server ([#59762](https://github.com/angular/angular/pull/59762)) |

### platform-server

| Commit                                                                                           | Type | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------ |
| [fc5d187da5](https://github.com/angular/angular/commit/fc5d187da5e8895d60caa35b7b59e234998eddf0) | fix  | decouple server from animations module ([#59762](https://github.com/angular/angular/pull/59762)) |

<!-- CHANGELOG SPLIT MARKER -->

<a name="19.1.8"></a>

# 19.1.8 (2025-02-26)

### benchpress

| Commit                                                                                           | Type | Description                                                                                                |
| ------------------------------------------------------------------------------------------------ | ---- | ---------------------------------------------------------------------------------------------------------- |
| [f0990c67e6](https://github.com/angular/angular/commit/f0990c67e660c61109fa910885da6aa4beaf576a) | fix  | Ensure future-proof correct initialization order ([#60025](https://github.com/angular/angular/pull/60025)) |

### common

| Commit                                                                                           | Type | Description                                                                                       |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------- |
| [1fbaeab37d](https://github.com/angular/angular/commit/1fbaeab37d5c65436938b6e14e21bc4d57bb517b) | fix  | make types for HttpClient more readable ([#59901](https://github.com/angular/angular/pull/59901)) |

### core

| Commit                                                                                           | Type | Description                                                                            |
| ------------------------------------------------------------------------------------------------ | ---- | -------------------------------------------------------------------------------------- |
| [c611c8d212](https://github.com/angular/angular/commit/c611c8d212b0134365954726c2fd6c98c28e5424) | fix  | capture stack for HMR errors ([#60067](https://github.com/angular/angular/pull/60067)) |

### language-service

| Commit                                                                                           | Type | Description                                                                                        |
| ------------------------------------------------------------------------------------------------ | ---- | -------------------------------------------------------------------------------------------------- |
| [4c9d09c643](https://github.com/angular/angular/commit/4c9d09c643cf1232d1f502ff7d6bd25709ba1c6a) | fix  | provide correct rename info for elements ([#60088](https://github.com/angular/angular/pull/60088)) |

<!-- CHANGELOG SPLIT MARKER -->

<a name="19.1.7"></a>

# 19.1.7 (2025-02-19)

### common

| Commit                                                                                           | Type | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------------------------ |
| [e9f10eb4c9](https://github.com/angular/angular/commit/e9f10eb4c950692992098619b9628ecefd1b36ce) | fix  | clean up `urlChanges` subscribers when root scope is destroyed ([#59703](https://github.com/angular/angular/pull/59703)) |

### compiler-cli

| Commit                                                                                           | Type | Description                                                                                            |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------ |
| [16fc074689](https://github.com/angular/angular/commit/16fc074689d31ef6886c49525b020bc6c1529d0e) | fix  | avoid crash in isolated transform operations ([#59869](https://github.com/angular/angular/pull/59869)) |

### forms

| Commit                                                                                           | Type | Description                                                                           |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------- |
| [ec1e4c3d94](https://github.com/angular/angular/commit/ec1e4c3d9430f5ea4380252098d2b4b71d8a950f) | fix  | Fix typing on `FormRecord`. ([#59993](https://github.com/angular/angular/pull/59993)) |

<!-- CHANGELOG SPLIT MARKER -->

<a name="19.1.6"></a>

# 19.1.6 (2025-02-12)

### compiler

| Commit                                                                                           | Type | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------------------- |
| [01f669a274](https://github.com/angular/angular/commit/01f669a27425c5034a04274763cc60801f961aa2) | fix  | handle tracking expressions requiring temporary variables ([#58520](https://github.com/angular/angular/pull/58520)) |

### compiler-cli

| Commit                                                                                           | Type | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------------------- |
| [dcfb9f1959](https://github.com/angular/angular/commit/dcfb9f1959164baf45f5f954b4bf681d650d8a2d) | fix  | handle deferred blocks with shared dependencies correctly ([#59926](https://github.com/angular/angular/pull/59926)) |

### core

| Commit                                                                                           | Type | Description                                                                                                       |
| ------------------------------------------------------------------------------------------------ | ---- | ----------------------------------------------------------------------------------------------------------------- |
| [cab7a9b69c](https://github.com/angular/angular/commit/cab7a9b69c3a5d789432a87a554e8489c78a0f15) | fix  | invalidate HMR component if replacement throws an error ([#59854](https://github.com/angular/angular/pull/59854)) |

### migrations

| Commit                                                                                           | Type | Description                                                                                                      |
| ------------------------------------------------------------------------------------------------ | ---- | ---------------------------------------------------------------------------------------------------------------- |
| [710759ddcc](https://github.com/angular/angular/commit/710759ddcc0ecbad68deb20821b535fd5deb69c6) | fix  | account for let declarations in control flow migration ([#59861](https://github.com/angular/angular/pull/59861)) |
| [46f36a58bf](https://github.com/angular/angular/commit/46f36a58bf3a7b9131b6330e84d4adb3e73f3601) | fix  | count used dependencies inside existing control flow ([#59861](https://github.com/angular/angular/pull/59861))   |

<!-- CHANGELOG SPLIT MARKER -->

<a name="19.1.5"></a>

# 19.1.5 (2025-02-06)

### compiler-cli

| Commit                                                                                            | Type | Description                                                                                                             |
| ------------------------------------------------------------------------------------------------- | ---- | ----------------------------------------------------------------------------------------------------------------------- |
| [d7b5c597ffc](https://github.com/angular/angular/commit/d7b5c597ffcb6469ae3f08a97e7790599d569cc4) | fix  | gracefully fall back if const enum cannot be passed through ([#59815](https://github.com/angular/angular/pull/59815))   |
| [53a4668b58b](https://github.com/angular/angular/commit/53a4668b58b645e41baddc5b67d52ede21c8e945) | fix  | handle const enums used inside HMR data ([#59815](https://github.com/angular/angular/pull/59815))                       |
| [976125e0b4c](https://github.com/angular/angular/commit/976125e0b4cf4e7fb4621a7203e3f43b009885f0) | fix  | handle enum members without initializers in partial evaluator ([#59815](https://github.com/angular/angular/pull/59815)) |

<!-- CHANGELOG SPLIT MARKER -->

<a name="19.1.4"></a>

# 19.1.4 (2025-01-29)

### core

| Commit                                                                                            | Type | Description                                                                                                                      |
| ------------------------------------------------------------------------------------------------- | ---- | -------------------------------------------------------------------------------------------------------------------------------- |
| [544b9ee7ca0](https://github.com/angular/angular/commit/544b9ee7ca00925e62b7c74cf7930777a10aaf76) | fix  | check whether application is destroyed before printing hydration stats ([#59716](https://github.com/angular/angular/pull/59716)) |
| [d6e78c072dc](https://github.com/angular/angular/commit/d6e78c072dcb5b0b6efc2b098fdb911ccddf6e81) | fix  | ensure type is preserved during HMR ([#59700](https://github.com/angular/angular/pull/59700))                                    |
| [c2436702df9](https://github.com/angular/angular/commit/c2436702df980bbf2db0fe3bee4c72860edb4e63) | fix  | fixes test timer-based test flakiness in CI ([#59674](https://github.com/angular/angular/pull/59674))                            |

### elements

| Commit                                                                                            | Type | Description                                                                                               |
| ------------------------------------------------------------------------------------------------- | ---- | --------------------------------------------------------------------------------------------------------- |
| [44180645992](https://github.com/angular/angular/commit/44180645992f7d9018ccb2d7663530b3cffde36b) | fix  | not setting initial value on signal-based input ([#59773](https://github.com/angular/angular/pull/59773)) |

### platform-browser

| Commit                                                                                            | Type | Description                                                                                                                                           |
| ------------------------------------------------------------------------------------------------- | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| [1828a840620](https://github.com/angular/angular/commit/1828a8406201827e52549c8afa487bf6364a70c3) | fix  | prepend `baseHref` to `sourceMappingURL` in CSS content ([#59730](https://github.com/angular/angular/pull/59730))                                     |
| [1c84cbca30e](https://github.com/angular/angular/commit/1c84cbca30e6606e6df3f40346989d9434d89bc6) | fix  | Update pseudoevent created by createMouseSpecialEvent to populate `_originalEvent` property ([#59690](https://github.com/angular/angular/pull/59690)) |
| [12256574626](https://github.com/angular/angular/commit/12256574626f04f5fe2b41e805f7bdc93d62df0a) | fix  | Update pseudoevent created by createMouseSpecialEvent to populate `_originalEvent` property ([#59690](https://github.com/angular/angular/pull/59690)) |
| [3f4d5f636aa](https://github.com/angular/angular/commit/3f4d5f636aac90cabe32ff6c4d75180ced99eb97) | fix  | Update pseudoevent created by createMouseSpecialEvent to populate `_originalEvent` property ([#59690](https://github.com/angular/angular/pull/59690)) |

### router

| Commit                                                                                            | Type | Description                                                                                                 |
| ------------------------------------------------------------------------------------------------- | ---- | ----------------------------------------------------------------------------------------------------------- |
| [e3da35ec749](https://github.com/angular/angular/commit/e3da35ec749395239731158f89e29d47e7a9ef36) | fix  | prevent error handling when injector is destroyed ([#59457](https://github.com/angular/angular/pull/59457)) |

### service-worker

| Commit                                                                                            | Type | Description                                                                                  |
| ------------------------------------------------------------------------------------------------- | ---- | -------------------------------------------------------------------------------------------- |
| [522acbf3d7e](https://github.com/angular/angular/commit/522acbf3d7ed502e7802117776acda3529a9a2b4) | fix  | add missing `rxjs` peer dependency ([#59747](https://github.com/angular/angular/pull/59747)) |

<!-- CHANGELOG SPLIT MARKER -->

<a name="19.1.3"></a>

# 19.1.3 (2025-01-22)

### compiler

| Commit                                                                                           | Type | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------------------ |
| [ecfb74d287](https://github.com/angular/angular/commit/ecfb74d287bec7bec37d0b476b321b047bef2c43) | fix  | handle :host-context with comma-separated child selector ([#59276](https://github.com/angular/angular/pull/59276)) |

### compiler-cli

| Commit                                                                                           | Type | Description                                                                                                           |
| ------------------------------------------------------------------------------------------------ | ---- | --------------------------------------------------------------------------------------------------------------------- |
| [53160e504d](https://github.com/angular/angular/commit/53160e504df44b05f59cacd9afeb40a0e627b744) | fix  | extract parenthesized dependencies during HMR ([#59644](https://github.com/angular/angular/pull/59644))               |
| [39690969af](https://github.com/angular/angular/commit/39690969af14914df0c9b5a009b2df920f5c03e7) | fix  | handle conditional expressions when extracting dependencies ([#59637](https://github.com/angular/angular/pull/59637)) |
| [78af7a5059](https://github.com/angular/angular/commit/78af7a5059cc3e03704ba63f8512351a40470557) | fix  | handle new expressions when extracting dependencies ([#59637](https://github.com/angular/angular/pull/59637))         |

### core

| Commit                                                                                           | Type | Description                                                                                              |
| ------------------------------------------------------------------------------------------------ | ---- | -------------------------------------------------------------------------------------------------------- |
| [408af24ff3](https://github.com/angular/angular/commit/408af24ff3490926e9992cb4f1f71914d71ad6ad) | fix  | capture self-referencing component during HMR ([#59644](https://github.com/angular/angular/pull/59644))  |
| [d7575c201c](https://github.com/angular/angular/commit/d7575c201cfd61010952b3a633eec03e32f58220) | fix  | replace metadata in place during HMR ([#59644](https://github.com/angular/angular/pull/59644))           |
| [26f6d4c485](https://github.com/angular/angular/commit/26f6d4c485b566d7bc127c78cc163c376d0fe6b5) | fix  | skip component ID collision warning during SSR ([#59625](https://github.com/angular/angular/pull/59625)) |

### migrations

| Commit                                                                                           | Type | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------------------------------------ |
| [a62c84bc18](https://github.com/angular/angular/commit/a62c84bc188d41ea24cf0eca14ac18c4b917ccd0) | fix  | avoid applying the same replacements twice when cleaning up unused imports ([#59656](https://github.com/angular/angular/pull/59656)) |

### platform-browser

| Commit                                                                                           | Type | Description                                                                                                           |
| ------------------------------------------------------------------------------------------------ | ---- | --------------------------------------------------------------------------------------------------------------------- |
| [b2b3816cb1](https://github.com/angular/angular/commit/b2b3816cb1c5c573dc9368f05fd2971671d7159f) | fix  | clear renderer cache during HMR when using async animations ([#59644](https://github.com/angular/angular/pull/59644)) |

<!-- CHANGELOG SPLIT MARKER -->

<a name="19.1.2"></a>

# 19.1.2 (2025-01-20)

### compiler

| Commit                                                                                           | Type | Description                                                                                         |
| ------------------------------------------------------------------------------------------------ | ---- | --------------------------------------------------------------------------------------------------- |
| [8dcd889987](https://github.com/angular/angular/commit/8dcd88998700a94115a542462e6ae6beedbfbd9d) | fix  | update `@ng/component` URL to be relative ([#59620](https://github.com/angular/angular/pull/59620)) |

### compiler-cli

| Commit                                                                                           | Type | Description                                                                               |
| ------------------------------------------------------------------------------------------------ | ---- | ----------------------------------------------------------------------------------------- |
| [95a05bb202](https://github.com/angular/angular/commit/95a05bb2021acab02df3468212adf023d331a688) | fix  | disable tree shaking during HMR ([#59595](https://github.com/angular/angular/pull/59595)) |

### core

| Commit                                                                                           | Type | Description                                                                                                            |
| ------------------------------------------------------------------------------------------------ | ---- | ---------------------------------------------------------------------------------------------------------------------- |
| [a4eb74c79c](https://github.com/angular/angular/commit/a4eb74c79cca802d8179118cf4d53c73285baadb) | fix  | animation sometimes renderer not being destroyed during HMR ([#59574](https://github.com/angular/angular/pull/59574))  |
| [906413aba3](https://github.com/angular/angular/commit/906413aba31459e6499420ed14519d1280e182ad) | fix  | change `Resource` to use explicit `undefined` in its typings ([#59024](https://github.com/angular/angular/pull/59024)) |
| [4eb541837c](https://github.com/angular/angular/commit/4eb541837cf28ce1950d782213291165a2436410) | fix  | cleanup `_ejsa` when app is destroyed ([#59492](https://github.com/angular/angular/pull/59492))                        |
| [5497102769](https://github.com/angular/angular/commit/549710276969ec4cf8c1e3d2f19d1fe9f755976e) | fix  | cleanup stash listener when app is destroyed ([#59598](https://github.com/angular/angular/pull/59598))                 |
| [266a8f2f2e](https://github.com/angular/angular/commit/266a8f2f2ebf9f5e310ba5de695be5072790e1e5) | fix  | handle shadow DOM encapsulated component with HMR ([#59597](https://github.com/angular/angular/pull/59597))            |
| [6f7716268a](https://github.com/angular/angular/commit/6f7716268afa5146f2b2d0dbbea146defa9acfef) | fix  | HMR not matching component that injects ViewContainerRef ([#59596](https://github.com/angular/angular/pull/59596))     |
| [d12a186d53](https://github.com/angular/angular/commit/d12a186d531b41e6a16f84446a1d54eaed010fc4) | fix  | treat exceptions in `equal` as part of computation ([#55818](https://github.com/angular/angular/pull/55818))           |

<!-- CHANGELOG SPLIT MARKER -->

<a name="19.1.1"></a>

# 19.1.1 (2025-01-16)

### core

| Commit                                                                                           | Type | Description                                                                               |
| ------------------------------------------------------------------------------------------------ | ---- | ----------------------------------------------------------------------------------------- |
| [357795cb96](https://github.com/angular/angular/commit/357795cb96a1cd138ec263c468c9de8ca8b2af9c) | fix  | run HMR replacement in the zone ([#59562](https://github.com/angular/angular/pull/59562)) |

### platform-browser

| Commit                                                                                           | Type | Description                                                                 |
| ------------------------------------------------------------------------------------------------ | ---- | --------------------------------------------------------------------------- |
| [eb0b1851f4](https://github.com/angular/angular/commit/eb0b1851f494adfe72f583763a44bd2528a5956c) | fix  | roll back HMR fix ([#59557](https://github.com/angular/angular/pull/59557)) |

<!-- CHANGELOG SPLIT MARKER -->

<a name="19.1.0"></a>

# 19.1.0 (2025-01-15)

### common

| Commit                                                                                           | Type | Description                                                                                              |
| ------------------------------------------------------------------------------------------------ | ---- | -------------------------------------------------------------------------------------------------------- |
| [e4c50b3bea](https://github.com/angular/angular/commit/e4c50b3bea22ca2afba74465893c36730952f4b9) | feat | expose component instance in NgComponentOutlet ([#58698](https://github.com/angular/angular/pull/58698)) |

### compiler

| Commit                                                                                           | Type | Description                                                                                            |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------ |
| [ceadd28ea1](https://github.com/angular/angular/commit/ceadd28ea12140e8e78cdb706aff0487f5a87a3c) | fix  | allow $any in two-way bindings ([#59362](https://github.com/angular/angular/pull/59362))               |
| [aed49ddaaa](https://github.com/angular/angular/commit/aed49ddaaa40d6e6816198b47ceada4e98cd636c) | fix  | use chunk origin in template HMR request URL ([#59459](https://github.com/angular/angular/pull/59459)) |

### compiler-cli

| Commit                                                                                           | Type | Description                                                                                    |
| ------------------------------------------------------------------------------------------------ | ---- | ---------------------------------------------------------------------------------------------- |
| [c5c20e9d86](https://github.com/angular/angular/commit/c5c20e9d86d72b33840dcf0adea02876437a589f) | fix  | check event side of two-way bindings ([#59002](https://github.com/angular/angular/pull/59002)) |

### core

| Commit                                                                                           | Type | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------------------------ |
| [d010e11b73](https://github.com/angular/angular/commit/d010e11b735562ded439989ddb84cc83c6c00e81) | feat | add event listener options to renderer ([#59092](https://github.com/angular/angular/pull/59092))                         |
| [57f3550219](https://github.com/angular/angular/commit/57f3550219f2a57c7c26c9183e48ee66845e0439) | feat | add utility for resolving defer block information to ng global ([#59184](https://github.com/angular/angular/pull/59184)) |
| [22f191f763](https://github.com/angular/angular/commit/22f191f76339a08bb8f0f2dfbc60dde0f2e38e73) | feat | extend the set of profiler events ([#59183](https://github.com/angular/angular/pull/59183))                              |
| [e894a5daea](https://github.com/angular/angular/commit/e894a5daea401b4e1173b0e66557ae40140eb9a0) | feat | set kind field on template and effect nodes ([#58865](https://github.com/angular/angular/pull/58865))                    |
| [bd1f1294ae](https://github.com/angular/angular/commit/bd1f1294aeb0d47b24421b7b7a608988689a459f) | feat | support TypeScript 5.7 ([#58609](https://github.com/angular/angular/pull/58609))                                         |
| [9870b643bf](https://github.com/angular/angular/commit/9870b643bff46f089a3f0a30514fb7e062a66d56) | fix  | Defer afterRender until after first CD ([#58250](https://github.com/angular/angular/pull/58250))                         |
| [a5fc962094](https://github.com/angular/angular/commit/a5fc9620948c59da2146d46d27de388839b93254) | fix  | Don't run effects in check no changes pass ([#58250](https://github.com/angular/angular/pull/58250))                     |

### migrations

| Commit                                                                                           | Type | Description                                                                                        |
| ------------------------------------------------------------------------------------------------ | ---- | -------------------------------------------------------------------------------------------------- |
| [d298d25426](https://github.com/angular/angular/commit/d298d254269ff759111fbdef7736bc8b713638bc) | feat | add schematic to clean up unused imports ([#59353](https://github.com/angular/angular/pull/59353)) |
| [14fb8ce4c0](https://github.com/angular/angular/commit/14fb8ce4c00fc458cfbe1d7f2c85638c6165b636) | fix  | resolve text replacement issue ([#59452](https://github.com/angular/angular/pull/59452))           |

### platform-browser

| Commit                                                                                           | Type | Description                                                                                         |
| ------------------------------------------------------------------------------------------------ | ---- | --------------------------------------------------------------------------------------------------- |
| [8c5db3cfb7](https://github.com/angular/angular/commit/8c5db3cfb75700dd64f4c8c073554c7086835950) | fix  | avoid circular DI error in async renderer ([#59256](https://github.com/angular/angular/pull/59256)) |

### router

| Commit                                                                                           | Type | Description                                                                                   |
| ------------------------------------------------------------------------------------------------ | ---- | --------------------------------------------------------------------------------------------- |
| [52a6710f54](https://github.com/angular/angular/commit/52a6710f54bcec81f4cde23a78b9f78d038156c5) | fix  | complete router `events` on dispose ([#59327](https://github.com/angular/angular/pull/59327)) |

<!-- CHANGELOG SPLIT MARKER -->

<a name="19.0.7"></a>

# 19.0.7 (2025-01-15)

### compiler-cli

| Commit                                                                                           | Type | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------------- |
| [2b4b7c3ebf](https://github.com/angular/angular/commit/2b4b7c3ebfb2d4f4fd96fd2f1890b67c832505fd) | fix  | handle more node types when extracting dependencies ([#59445](https://github.com/angular/angular/pull/59445)) |

### core

| Commit                                                                                           | Type | Description                                                                                                 |
| ------------------------------------------------------------------------------------------------ | ---- | ----------------------------------------------------------------------------------------------------------- |
| [f893d07232](https://github.com/angular/angular/commit/f893d0723262d699979d55e43e4ddbcf64a3fc13) | fix  | destroy renderer when replacing styles during HMR ([#59514](https://github.com/angular/angular/pull/59514)) |

### migrations

| Commit                                                                                           | Type | Description                                                                                                            |
| ------------------------------------------------------------------------------------------------ | ---- | ---------------------------------------------------------------------------------------------------------------------- |
| [eb2fcd1896](https://github.com/angular/angular/commit/eb2fcd1896e0b834b86fe79e8d806bdab24aabcc) | fix  | incorrect stats when migrating queries with best effort mode ([#59463](https://github.com/angular/angular/pull/59463)) |

<!-- CHANGELOG SPLIT MARKER -->

<a name="19.0.6"></a>

# 19.0.6 (2025-01-08)

### compiler-cli

| Commit                                                                                           | Type | Description                                                                                                                            |
| ------------------------------------------------------------------------------------------------ | ---- | -------------------------------------------------------------------------------------------------------------------------------------- |
| [06a55e9817](https://github.com/angular/angular/commit/06a55e98173ff7bdd4e2ac1263309f9b935240f0) | fix  | account for more expression types when determining HMR dependencies ([#59323](https://github.com/angular/angular/pull/59323))          |
| [17fb20f85d](https://github.com/angular/angular/commit/17fb20f85db9f3c172c194c0436644f34b7176b1) | fix  | preserve defer block dependencies during HMR when class metadata is disabled ([#59313](https://github.com/angular/angular/pull/59313)) |

### core

| Commit                                                                                           | Type | Description                                                                                           |
| ------------------------------------------------------------------------------------------------ | ---- | ----------------------------------------------------------------------------------------------------- |
| [07afce81b8](https://github.com/angular/angular/commit/07afce81b8ce28d1b308ff25017a4d4993881f36) | fix  | Ensure that a destroyed `effect` never run. ([#59415](https://github.com/angular/angular/pull/59415)) |

### platform-browser

| Commit                                                                                           | Type | Description                                                                                                             |
| ------------------------------------------------------------------------------------------------ | ---- | ----------------------------------------------------------------------------------------------------------------------- |
| [dbb8980d03](https://github.com/angular/angular/commit/dbb8980d03485ad1cf0e19503c4e770b1ba0767e) | fix  | avoid circular DI error in async renderer ([#59271](https://github.com/angular/angular/pull/59271))                     |
| [6d00efde95](https://github.com/angular/angular/commit/6d00efde952971573359b32cab06d0a513600fe0) | fix  | styles not replaced during HMR when using animations renderer ([#59393](https://github.com/angular/angular/pull/59393)) |

### router

| Commit                                                                                           | Type | Description                                                                                            |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------ |
| [144bccb687](https://github.com/angular/angular/commit/144bccb6872ece8fa1cf4954b5839054ccf20aa1) | fix  | avoid component ID collisions with user code ([#59300](https://github.com/angular/angular/pull/59300)) |

<!-- CHANGELOG SPLIT MARKER -->

<a name="19.0.5"></a>

# 19.0.5 (2024-12-18)

### core

| Commit                                                                                           | Type | Description                                                                                                       |
| ------------------------------------------------------------------------------------------------ | ---- | ----------------------------------------------------------------------------------------------------------------- |
| [3793218e77](https://github.com/angular/angular/commit/3793218e77d699ddfae95a53ad048d4bfb9f042c) | fix  | avoid triggering `on timer` and `on idle` on the server ([#59177](https://github.com/angular/angular/pull/59177)) |
| [cfc96ed82c](https://github.com/angular/angular/commit/cfc96ed82cbe958ea7548718f76a2e7a3d6826a9) | fix  | Fix nested timer serialization ([#59173](https://github.com/angular/angular/pull/59173))                          |

### platform-server

| Commit                                                                                           | Type | Description                                                                                                    |
| ------------------------------------------------------------------------------------------------ | ---- | -------------------------------------------------------------------------------------------------------------- |
| [9085a8fbd8](https://github.com/angular/angular/commit/9085a8fbd8cb61e3ce45adfa9ca2e96ba0be6f62) | fix  | Warn user when transfer state happens more than once ([#58935](https://github.com/angular/angular/pull/58935)) |

<!-- CHANGELOG SPLIT MARKER -->

<a name="19.0.4"></a>

# 19.0.4 (2024-12-12)

### compiler-cli

| Commit                                                                                            | Type | Description                                                                                                            |
| ------------------------------------------------------------------------------------------------- | ---- | ---------------------------------------------------------------------------------------------------------------------- |
| [7e612171709](https://github.com/angular/angular/commit/7e6121717098462b4f53dc7212064243f2bcf024) | fix  | consider pre-release versions when detecting feature support ([#59061](https://github.com/angular/angular/pull/59061)) |
| [cd764a31152](https://github.com/angular/angular/commit/cd764a31152004d37aa621efc4990c090d86f1e0) | fix  | error in unused standalone imports diagnostic ([#59064](