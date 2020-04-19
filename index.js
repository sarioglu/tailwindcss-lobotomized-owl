const _ = require("lodash");
const plugin = require("tailwindcss/plugin");

const CONFIG_KEY = "owl";

module.exports = plugin(
  function ({ addUtilities, e, theme, variants }) {
    const generator = (size, modifier) => ({
      [`.${e(`ox-${modifier}`)} > * + *`]: {
        "margin-left": `${size}`,
      },
      [`.${e(`oy-${modifier}`)} > * + *`]: {
        "margin-top": `${size}`,
      },
    });

    const utilities = _.flatMap(theme(CONFIG_KEY), generator);

    addUtilities(utilities, variants(CONFIG_KEY));
  },
  {
    theme: {
      [CONFIG_KEY]: (theme) => ({
        auto: "auto",
        ...theme("spacing"),
      }),
    },
    variants: {
      [CONFIG_KEY]: ["responsive"],
    },
  }
);
