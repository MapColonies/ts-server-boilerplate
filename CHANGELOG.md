# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## 2.0.0 (2024-02-06)


### ⚠ BREAKING CHANGES

* upgraded logger packages (#283)

### Features

* add backstage docs ([3f4069a](https://github.com/MapColonies/ts-server-boilerplate/commit/3f4069aa74c9ab994fe620ade6a767b3cd633207))
* add node-prom for node metrics exporter ([5f05219](https://github.com/MapColonies/ts-server-boilerplate/commit/5f0521983a5ca68dc30c1f4d2d1bbae39d8ec834))
* add option for response gzip compression ([#62](https://github.com/MapColonies/ts-server-boilerplate/issues/62)) ([25b8d2c](https://github.com/MapColonies/ts-server-boilerplate/commit/25b8d2ce8f9928bec49ce3182f0ad02a8aafc078))
* add revision history limit configuration ([#287](https://github.com/MapColonies/ts-server-boilerplate/issues/287)) ([d6d086c](https://github.com/MapColonies/ts-server-boilerplate/commit/d6d086c340cce67569ae58fbc267641bb9c352b6))
* added @redocly/openapi-cli ([58c1111](https://github.com/MapColonies/ts-server-boilerplate/commit/58c11114120087b93bbb5bcfd43e02adb9eda7e1))
* added badges for README.md ([c3ec364](https://github.com/MapColonies/ts-server-boilerplate/commit/c3ec364dd7dc60b9af799bf88d800d6e24be8ada))
* added helm pull secret support ([#200](https://github.com/MapColonies/ts-server-boilerplate/issues/200)) ([10b43f2](https://github.com/MapColonies/ts-server-boilerplate/commit/10b43f2fad750682a76176bc77f4cd0aa773f855))
* added html reporters for jest ([cf8941c](https://github.com/MapColonies/ts-server-boilerplate/commit/cf8941ce429c1e8fb6753f05be24cfc114fbfe3a))
* added jest-openapi to tests ([#165](https://github.com/MapColonies/ts-server-boilerplate/issues/165)) ([e08a6c9](https://github.com/MapColonies/ts-server-boilerplate/commit/e08a6c975484975b755c7914996447960da4b61b))
* added safeguard for npm_cache on openshift ([9d7eafc](https://github.com/MapColonies/ts-server-boilerplate/commit/9d7eafc2230e0db67a135e73d6eaa58b53e9c9d7))
* **configurations:** add .editorconfig ([#57](https://github.com/MapColonies/ts-server-boilerplate/issues/57)) ([18d3412](https://github.com/MapColonies/ts-server-boilerplate/commit/18d3412d42840dec4e1370d4caaf01894e9e0e8d))
* **configurations:** add helm chart for repo ([#99](https://github.com/MapColonies/ts-server-boilerplate/issues/99)) ([9e61433](https://github.com/MapColonies/ts-server-boilerplate/commit/9e61433008666498396cf964ac78277ac603f566))
* **configurations:** added pretty-quick integration to pre-commit hook ([#27](https://github.com/MapColonies/ts-server-boilerplate/issues/27)) ([ca9b4e7](https://github.com/MapColonies/ts-server-boilerplate/commit/ca9b4e701adcdb200fff5238a39fe05019ddfd46))
* **configurations:** configurable route timeout duration in helm ([#181](https://github.com/MapColonies/ts-server-boilerplate/issues/181)) ([a5de7bc](https://github.com/MapColonies/ts-server-boilerplate/commit/a5de7bc5f357964ecb21f884246b7d0e350e5324))
* **configurations:** update openapi3 spec on release ([#79](https://github.com/MapColonies/ts-server-boilerplate/issues/79)) ([1106486](https://github.com/MapColonies/ts-server-boilerplate/commit/1106486ffd68ebec642b04492bd79bef2d2c89ee))
* **configurations:** used @map-colonies/standard-version-update-openapi3-version ([7272648](https://github.com/MapColonies/ts-server-boilerplate/commit/7272648265ed102ed1e11054e8aeaf4423c9bab1))
* **helm:** add helm chart modularity ([#289](https://github.com/MapColonies/ts-server-boilerplate/issues/289)) ([6178cc4](https://github.com/MapColonies/ts-server-boilerplate/commit/6178cc45fe56fb7b406806385b393bd3920e50a3))
* **helm:** add sidecars support ([#290](https://github.com/MapColonies/ts-server-boilerplate/issues/290)) ([7ee5ffd](https://github.com/MapColonies/ts-server-boilerplate/commit/7ee5ffde67db2a439327c5316abee87c5671a258))
* implemented new logger and liveness ([#67](https://github.com/MapColonies/ts-server-boilerplate/issues/67)) ([49d485a](https://github.com/MapColonies/ts-server-boilerplate/commit/49d485a601686654f26eba5c10f3f917bb7565c8))
* install git hooks after npm install command ([#168](https://github.com/MapColonies/ts-server-boilerplate/issues/168)) ([6a7cb5e](https://github.com/MapColonies/ts-server-boilerplate/commit/6a7cb5e012e0a23a90fb36169d498e1911f222e1))
* make payload size configurable ([#46](https://github.com/MapColonies/ts-server-boilerplate/issues/46)) ([eba2a01](https://github.com/MapColonies/ts-server-boilerplate/commit/eba2a017d49fc67f607f93dc367f4cb7b89a826d))
* more changes ([37f4b8a](https://github.com/MapColonies/ts-server-boilerplate/commit/37f4b8aa417216727620561777c692dbc5903dc5))
* pull image tag automatically from chart app version if tag not specified ([#187](https://github.com/MapColonies/ts-server-boilerplate/issues/187)) ([5c30ea3](https://github.com/MapColonies/ts-server-boilerplate/commit/5c30ea336635e096a00a3530a927ee3880696e8c))
* **server:** added @map-colonies/error-express-handler ([fa07606](https://github.com/MapColonies/ts-server-boilerplate/commit/fa0760688debe0e673be334d9e41271b5ac14c55))
* service name is now retrieved from package json ([#159](https://github.com/MapColonies/ts-server-boilerplate/issues/159)) ([3900b30](https://github.com/MapColonies/ts-server-boilerplate/commit/3900b30374e90fdf52b23c3f66db160648096034))
* support empty image registry ([#174](https://github.com/MapColonies/ts-server-boilerplate/issues/174)) ([7875105](https://github.com/MapColonies/ts-server-boilerplate/commit/78751054827a96eba111cf50d605bffbed92d5d8))
* telemetry integration ([#56](https://github.com/MapColonies/ts-server-boilerplate/issues/56)) ([50ec57c](https://github.com/MapColonies/ts-server-boilerplate/commit/50ec57cc37fe883da6e16f54c464b0a40554c969))
* upgraded logger packages ([#283](https://github.com/MapColonies/ts-server-boilerplate/issues/283)) ([b4085d1](https://github.com/MapColonies/ts-server-boilerplate/commit/b4085d105cf4c1c89f9c8a92d95d6033a6958e4d))
* yet another improvement ([d22eebf](https://github.com/MapColonies/ts-server-boilerplate/commit/d22eebf350690454b2e8b026cb9dfa431696d40d))
* yet another improvement ([52dd7a3](https://github.com/MapColonies/ts-server-boilerplate/commit/52dd7a3d9f80ac69e7d98b97251211a7da9dd6d8))


### Bug Fixes

* **configurations:** ignore no-empty-servers ([f7becfa](https://github.com/MapColonies/ts-server-boilerplate/commit/f7becfad8f3570fea8d32fa64e956b9e84483a17))
* **configurations:** removed servers list from openapi3.yml ([0a48b49](https://github.com/MapColonies/ts-server-boilerplate/commit/0a48b49ec054b71e5c16e836c182562345a4b860))
* **configurations:** removed unnecessary jest config ([#261](https://github.com/MapColonies/ts-server-boilerplate/issues/261)) ([3e27fb0](https://github.com/MapColonies/ts-server-boilerplate/commit/3e27fb068a0f4a4e09e4552724606b89079463df))
* **configurations:** updating both openapi3.yaml and package json ([01296c9](https://github.com/MapColonies/ts-server-boilerplate/commit/01296c9941c036499e31d95d19a8274c0bac3b3a))
* **deps:** wip ([a7597d9](https://github.com/MapColonies/ts-server-boilerplate/commit/a7597d91fc8459648866ccfcf75e6c8a39d4141c))
* fixed container registration bug ([#81](https://github.com/MapColonies/ts-server-boilerplate/issues/81)) ([09e896b](https://github.com/MapColonies/ts-server-boilerplate/commit/09e896bdd3833a97c0420ad36ae8e9bb9da1a643))
* fixed terminus not found liveness ([#82](https://github.com/MapColonies/ts-server-boilerplate/issues/82)) ([0a64c9f](https://github.com/MapColonies/ts-server-boilerplate/commit/0a64c9fb683c5bc34a625a4c2e518a1e336f1aea))
* global pull secret ([#204](https://github.com/MapColonies/ts-server-boilerplate/issues/204)) ([700c37d](https://github.com/MapColonies/ts-server-boilerplate/commit/700c37d4374efb2cb0838e13177d30bb1b180d9a))
* liveness port ([#203](https://github.com/MapColonies/ts-server-boilerplate/issues/203)) ([e11d133](https://github.com/MapColonies/ts-server-boilerplate/commit/e11d133081ce7add65a02cec3728a4ebd3ebaaef))
* openapi ui not working ([#282](https://github.com/MapColonies/ts-server-boilerplate/issues/282)) ([7e3e9c8](https://github.com/MapColonies/ts-server-boilerplate/commit/7e3e9c8a96a8da05fbed5325cca7eb57443d0830))
* overide decorator registered values in DI ([#207](https://github.com/MapColonies/ts-server-boilerplate/issues/207)) ([b1599e8](https://github.com/MapColonies/ts-server-boilerplate/commit/b1599e80794876b40650c1759461fa41862ccad2))
* server initialization config error ([#217](https://github.com/MapColonies/ts-server-boilerplate/issues/217)) ([9716b80](https://github.com/MapColonies/ts-server-boilerplate/commit/9716b800eb23173fa3f765b7f7d7f323a85e4d17))
* **server:** supports OpenApiMiddleware HttpError with status field ([f3516bf](https://github.com/MapColonies/ts-server-boilerplate/commit/f3516bf28de2b1d44de2d765bd7a52c4e95b6861))
* set readiness prob to ready ([#15](https://github.com/MapColonies/ts-server-boilerplate/issues/15)) ([5314c1c](https://github.com/MapColonies/ts-server-boilerplate/commit/5314c1cf9edaa446d6e07d98b0e01523defa93cb))
