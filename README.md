# Tailwind CSS Lobotomized Owl plugin

This plugin provides lobotomized owl (`* + *`) selectors to arrange spacing between elements. It uses default spacing scale by default. Also it can be configured independently.

## Dependencies

This plugin requires Tailwind CSS v1.2 or later.

## Installation

```bash
npm install -D tailwindcss-lobotomized-owl
```

After installing the package, add it to your `tailwind.config.js` file:

```js
module.exports = {
  // ...
  plugins: [
    // ...
    require("tailwindcss-lobotomized-owl"),
  ],
};
```

## Usage

This plugin provides two main classes:

- `.ox-{size}` can be used to arrange vertical spacing.
- `.oy-{size}` can be used to arrange horizontal spacing.

## Customization

By default `tailwindcss-lobotomized-owl` uses `theme.spacing` scale of your config. If you want to customize only the owl values, use `theme.owl` or `extend.owl` sections.

You can also customize its variants. Default configuration only includes `['responsive']` variants.
