# Dailytech
### Server: Java 17 Spring Boot  
```shell
Spring Boot
Spring JPA
Spring Security
Security JWToken
C-R-U-D Functionality
```
### BACKEND



```sh
curl -X POST http://localhost:8082/api/news/bulk/csv \
  -H "Authorization: Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJ0aG9tYXMxQGdtYWlsLmNvbSIsImlhdCI6MTc3OTc1ODM5OCwiZXhwIjoxNzgwMzYzMTk4fQ.G7rzqmOye1Yl4zmkikF0Sn7pjezpPDsw6s-OmP0S2FUFkVX0OcPxMkzLkHRUxriS" \
  -F "file=@src/main/resources/data/newslink-webdev-developer-uiux-seed.csv"
```
### Frontend UI with Angular 15
```

Angular Router Navigation
Formatting Angular Material, Bootstrap 5
CR-U-D Functionality
Firebase Integration
AG Charts 
```
https://github.com/angular/angularfire

https://material.angular.io/
https://github.com/angular/flex-layout


https://material.io/resources/icons/?style=baseline

https://ohmycheatsheet.com/material_icons/

https://jossef.github.io/material-design-icons-iconfont/

https://www.ag-grid.com/charts/angular/quick-start/


## Visualization organization

The visualization gallery remains at `/visuals`. Files under `src/app/components/visuals/` are organized like CryptoMaven, using `demos/`:

- `demos/svg/`: Angular-rendered SVG charts 1-3 and their existing tests.
- `demos/ag-charts/`: AG Charts 4-6 and 13-15.
- `demos/d3/`: D3 charts 7-12 and 16, including the interactive geographic map and existing chart tests.
- `demos/demo-data.service.ts`: gallery data loading (formerly ApiService), with its colocated test.
- `shared/`: chart interfaces, dimensions service/test, pie/stack/map transformations, SVG grid helpers, map tooltip actions, and the playback slider.

Application domain models remain in `model/`; ObjectHelper lives in `components/visuals/shared/` because all current consumers are charts. Existing selectors, chart IDs, routes, map timeline/tooltip behavior, asset URLs, and rendering are preserved. Existing working-tree edits to the map helper and gallery tests were preserved while moving/updating their imports.

The additional blog statistics grid/chart (`blogs-public/blogs-grid/`) and writing-history table (`writing/grid-writings/`) remain with their owning features: they coordinate feature data, filtering, navigation, and state rather than serving as generic visualization demos. No AG Grid component is currently used in this Angular application, so no empty ag-grid directory was introduced.

October 3, 2026 refactor validation: baseline Angular AOT compilation passed using `node node_modules/@angular/compiler-cli/bundles/src/bin/ngc.js -p tsconfig.app.json`. Final `npm run build` passed (exit 0), including templates/Sass and the configured prebuild/postbuild public configuration checks. All six existing visualization tests passed (exit 0) with `node node_modules/@angular/cli/bin/ng.js test --watch=false --browsers=ChromeHeadless --progress=false --include=src/app/components/visuals/**/*.spec.ts`, using a fresh process-local TEMP/TMP directory. This covers the gallery's empty-map rendering and clearing previously populated map/slider data, plus existing chart/service tests. The full application test suite and manual visual smoke checks were not run. The existing moment CommonJS and AG Charts option warnings remain.

All visualization relative imports resolve, no moved chart/helper paths remain in active source/configuration, and scoped `git diff --check` passed. The broader src import audit also found pre-existing unresolved imports in unused copied crypto asset TypeScript files and utility/store.service.ts; these are outside this refactor and were preserved. No staging, commit, deployment, feature behavior change, or unrelated source edit was performed.

October 3 follow-up: moved ObjectHelper unchanged into visuals/shared/object.helper.ts and updated its three chart consumers. Matched the gallery imports, standalone registrations and template tags to the current Chart16MapComponent/chart16map and Chart15ScatterOmniComponent/chart15scatter-omni renames. Angular AOT compilation passed (exit 0); scoped diff whitespace check passed. The preceding build/tests were not rerun for this import-only follow-up.


### Chart demo names (October 3, 2026)

Both Angular applications use the same one-word suffixes in filenames, exported component classes, selectors, template tags and chart CSS/DOM references. Chart numbers remain stable; rendering and data logic remain unchanged. Chart 8 currently renders bars, despite its historical Bar/Line title. Chart 11 supports pie/donut configuration and retains pie as its family name. DailyTech chart15scatter-omni is now chart15scatter; CryptoMaven chart16 is aligned with chart16map. Charts 1-3 and wallet-specific component names are outside this rename.

| Chart | Filename | Class / selector |
| --- | --- | --- |
| 4 | chart4bar.component.ts | Chart4BarComponent / chart4bar |
| 5 | chart5line.component.ts | Chart5LineComponent / chart5line |
| 6 | chart6timeline.component.ts | Chart6TimelineComponent / chart6timeline |
| 7 | chart7bar.component.ts | Chart7BarComponent / chart7bar |
| 8 | chart8bar.component.ts | Chart8BarComponent / chart8bar |
| 9 | chart9line.component.ts | Chart9LineComponent / chart9line |
| 10 | chart10stack.component.ts | Chart10StackComponent / chart10stack |
| 11 | chart11pie.component.ts | Chart11PieComponent / chart11pie |
| 12 | chart12scatter.component.ts | Chart12ScatterComponent / chart12scatter |
| 13 | chart13stack.component.ts | Chart13StackComponent / chart13stack |
| 14 | chart14donut.component.ts | Chart14DonutComponent / chart14donut |
| 15 | chart15scatter.component.ts | Chart15ScatterComponent / chart15scatter |
| 16 | chart16map.component.ts | Chart16MapComponent / chart16map |

Chart naming validation: Angular AOT compilation passed in both apps (exit 0); DailyTech visualization tests passed 6/6 (exit 0) on isolated Karma port 19876, superseding an initial default-port run shared with another test session. Temporary Karma configuration removed. Visualization import/old-name audits and scoped diff whitespace checks passed. Full builds/application test suites were not rerun for this naming change; no staging, commit or deployment.


## Account alignment (October 3)

DailyTech Profile/account summary use the authenticated private-image API and revoke blob previews on logout/account changes. Profile displays effective plan and server status; server-owned identity/roles/plan cannot be edited. Firebase roles come from the local account response; Firebase registration does not request email verification, and REST provisioning/linking does not require it. Stale account/mutation responses are discarded. Billing commercial terms remain pending; CryptoMaven is a read-only reference. See [account policy and checks](../dailytech-rest/README_PROVIDER_SECURITY.md#dailytech-account-alignment-2026-10-03) and [CryptoMaven findings](../dailytech-rest/CRYPTOMAVEN_USER_GAPS.md).
