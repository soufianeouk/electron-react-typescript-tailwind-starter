const plugin = require("tailwindcss/plugin");

// plugin for adding animation duration utility to tailwind
export function animationDuration() {
  return plugin(function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        "animate-duration": (value) => ({
          animationDuration: value,
        }),
      },
      { values: theme("transitionDuration") },
    );
  });
}

// plugin for adding animation delay utility to tailwind
export function animateDelay() {
  return plugin(function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        "animate-delay": (value) => ({
          animationDelay: value,
        }),
      },
      { values: theme("transitionDelay") },
    );
  });
}

// plugin for adding animation timing function utility to tailwind
export function animateTimingFunction() {
  return plugin(function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        "animate-ease": (value) => ({
          animationTimingFunction: value,
        }),
      },
      { values: theme("transitionTimingFunction") },
    );
  });
}
