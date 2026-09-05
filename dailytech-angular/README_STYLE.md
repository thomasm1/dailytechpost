# Styling architecture

This Angular app combines global styles with component-scoped styles. The global entry point is **`src/styles.scss`** (plural), not `style.scss`.

## Global import path

```text
angular.json → projects.dailytech.architect.build.options.styles
├── node_modules/bootstrap/dist/css/bootstrap.min.css
└── src/styles.scss
    ├── Angular Material prebuilt deeppurple-amber theme
    ├── src/app/sass/main.scss
    │   └── Sass imports listed below, in order
    └── rules written directly after the imports in styles.scss
                          ↓
                  compiled global CSS
                          ↓
            matching elements throughout the app
```

Follow the source: [angular.json](angular.json) → [styles.scss](src/styles.scss) → [main.scss](src/app/sass/main.scss).

`styles.scss` also uses `@use '@angular/material' as mat` to make the Material Sass API available. This is distinct from importing the prebuilt theme CSS.

Importing Sass does not create a styling boundary. A file under `sass/components/` is not an Angular component stylesheet, and a file under `sass/pages/` is not restricted to a route. The leading underscore denotes a Sass partial, not private CSS.

## Files included through main.scss

Each CSS-producing file follows this path:

```text
src/app/sass/<file> → main.scss → src/styles.scss → global CSS → matching elements
```

The table follows the import order in `main.scss`. Related selectors include nested states and variants, not just the representative selectors shown.

| File | Scope or effect |
| --- | --- |
| [abstracts/_functions.scss](src/app/sass/abstracts/_functions.scss) | Sass functions; no CSS by themselves. |
| [abstracts/_mixins.scss](src/app/sass/abstracts/_mixins.scss) | Reusable declarations; emit CSS where included. |
| [abstracts/_variables.scss](src/app/sass/abstracts/_variables.scss) | Sass values, including the green theme colors; no CSS by themselves. |
| [base/_animations.scss](src/app/sass/base/_animations.scss) | Global keyframe names: `moveInLeft`, `moveInRight`, `moveInBottom`. |
| [base/_typography.scss](src/app/sass/base/_typography.scss) | `body`, `.heading-primary`, `.heading-secondary`, `.heading-tertiary`, `.paragraph`. |
| [base/_utilities.scss](src/app/sass/base/_utilities.scss) | `.u-center-text` and `.u-margin-*`; declarations use `!important`. |
| [components/_bg-video.scss](src/app/sass/components/_bg-video.scss) | `.bg-video` and related classes. |
| [components/_button.scss](src/app/sass/components/_button.scss) | `.btn`, its states and variants, and `.btn-text`; overlaps Bootstrap naming. |
| [components/_card.scss](src/app/sass/components/_card.scss) | `.card`, including `height: 52rem`, and `.card__*`; overlaps Bootstrap naming. |
| [components/_composition.scss](src/app/sass/components/_composition.scss) | `.composition` and related photo classes. |
| [components/_feature-box.scss](src/app/sass/components/_feature-box.scss) | `.feature-box` and related classes. |
| [components/_form.scss](src/app/sass/components/_form.scss) | `.form` and `.form__*`; not every HTML `<form>`. |
| [components/_popup.scss](src/app/sass/components/_popup.scss) | `.popup` and related classes and states. |
| [components/_story.scss](src/app/sass/components/_story.scss) | `.story` and related classes. |
| [layout/_footer.scss](src/app/sass/layout/_footer.scss) | `.footer` and related classes, including the visuals page footer. |
| [layout/_grid.scss](src/app/sass/layout/_grid.scss) | `.row` and descendants whose class attribute starts with `col-`; overlaps Bootstrap layout. |
| [layout/_header.scss](src/app/sass/layout/_header.scss) | `.header`, including the visuals page header: green background image, `95vh` height, and clipping. |
| [layout/_navigation.scss](src/app/sass/layout/_navigation.scss) | `.navigation` and `.navigation__*`. |
| [pages/_home.scss](src/app/sass/pages/_home.scss) | `.section-about`, `.section-features`, `.section-tours`, `.section-stories`, `.section-book`, `.book`, and related selectors on any route. |
| [base/_base.scss](src/app/sass/base/_base.scss) | Universal resets, pseudo-elements, `html`, `body`, and `:root` custom properties. Imported last. |

Sass variables such as `$color-primary-light` are resolved during compilation. CSS custom properties such as `--color-primary-light` remain in the browser and participate in inheritance. These similarly named variables are separate; changing one does not automatically change the other.

## Files outside the active import chain

These files exist under `src/app/sass/` but are not imported by `main.scss`. No active reference from the configured Angular stylesheet entry point was found during this review:

```text
abstracts/_customVariables.scss
components/cursor.scss
components/d3-style.scss
components/modal.scss
components/multi_drop_menu.scss
pages/application.scss
pages/calc.scss
pages/dag.scss
pages/force.scss
pages/mainblog.scss
pages/marsreader.scss
pages/planets.scss
vendors/_application-toolkit.scss
```

[src/style-old.scss](src/style-old.scss) contains legacy imports but is not listed in the build's `styles` configuration. Some legacy blog rules are copied directly into `styles.scss`, so similar styling remains active without importing `pages/mainblog.scss` itself.

## Component styles

Component styles enter through their component metadata rather than `main.scss`:

```text
src/app/components/visuals/visuals.component.ts
└── styleUrls: ["./visuals.component.scss"]
    └── Angular scopes the compiled selectors to that component's template
```

Under Angular's default `ViewEncapsulation.Emulated`, generated attributes restrict component selectors to that template. They do **not** block global selectors from matching elements inside it. Component selectors often gain specificity from these attributes, but there is no unconditional rule that component CSS wins.

`ViewEncapsulation.None` makes component styles global. `::ng-deep` can remove selector scoping after that point. Native Shadow DOM uses a different boundary. See [Angular's styling documentation](https://angular.dev/guide/components/styling).

## Precedence

CSS resolves competing declarations **per property**, not per file. For the ordinary, unlayered author stylesheet rules used here:

1. `!important` declarations beat normal declarations.
2. Among declarations with equal importance, more specific selectors win.
3. If specificity also ties, the declaration appearing later wins.

Inline styles normally outrank normal stylesheet declarations. Cascade layers, animations, transitions, and browser/user styles introduce additional rules; the list above describes the usual conflicts in these files.

Practical consequences:

- Bootstrap is configured before `styles.scss`; later equal-specificity rules can override it.
- Within `main.scss`, a later import wins an otherwise tied conflict.
- Rules written after the `main` import in `styles.scss` win otherwise tied conflicts with that imported CSS.
- A later, less specific selector does not beat an earlier, more specific selector just because its file loaded later.
- Declaring one property does not erase other properties from another matching rule.

For example, `_base.scss` declares `html { font-size: 62.5%; }` and responsive variations. Later, `styles.scss` declares:

```scss
html,
body {
  font-size: 16px;
}
```

The later `html` declaration has equal specificity and wins, including over the earlier responsive font sizes when their media queries match. This also affects all `rem` measurements.

## Example: the visuals page's green header

The inline template in [visuals.component.ts](src/app/components/visuals/visuals.component.ts) contains:

```html
<div class="visuals">
  <div class="header"></div>
```

That generic class matches the global header rule through:

```text
abstracts/_variables.scss supplies green Sass values
                         ↓
layout/_header.scss → main.scss → styles.scss
                         ↓
visuals.component.ts: <div class="header">
```

The global rule supplies a green gradient over a banner image, `height: 95vh`, and a diagonal clip path. The visuals stylesheet supplies a blue `background-color` and places the header in a 150px grid row.

These declarations coexist: a background image paints over a background color, and a grid row's size does not override an item's explicit height. The header can therefore extend beyond its intended row into the chart area.

## Tracing an unexpected style

1. Inspect the affected element in browser developer tools.
2. Check the computed property and the winning selector in the Styles panel.
3. Follow its source to a component stylesheet or the global Sass import chain.
4. Compare importance, specificity, and declaration order for that property.
5. Check separate properties too: `background-image` versus `background-color`, or element `height` versus grid track size.

For future page-specific styles, use distinctive class names and component stylesheets. Keep intentional global rules in `styles.scss` or clearly scoped global imports. Generic names such as `.header`, `.footer`, `.row`, `.card`, and `.btn` are the main collision points in the current Sass chain.
