# Theme

## Approach

### theme.ts

- It's lightweight, contains only data.
- Beacuse it's shared accross components through a Context.

### /hooks

- `theme.ts` is accompanied by a series of hooks where theme logic resides.
- These hooks are coupled to the theme via `imports`.
- Decoupling is possible via `useTheme()` but that cannot be easily tested on Next.js (according to the current knowledge)
- These hooks can be reused in any other app / theme framework. The only thing to do is to replace the `imports` in the hook headers with something specific to the framework.

### Presets

- It would be nice to save hard work into presets.
- That way large chunks of code can be reused. Like a complete typographic settings from a project where weeks were spent on fine tunings.
- Presets enable experimenting. Color schemes saved into presets can drive later decisions.

### Default values

### Tests

- Typescript reduces the number of tests by warning early on incorect params.
