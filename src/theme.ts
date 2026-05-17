import { createSystem, defaultConfig } from "@chakra-ui/react";

const theme = createSystem(defaultConfig, {
  globalCss: {
    "html, body": {
      background: "bg",
      color: "fg",
    },
  },
  theme: {
    tokens: {
      colors: {
        black: { value: "#000000" },
        white: { value: "#ffffff" },
      },
    },
    semanticTokens: {
      colors: {
        bg: {
          DEFAULT: {
            value: {
              base: "{colors.white}",
              _dark: "{colors.black}",
            },
          },
        },
        fg: {
          DEFAULT: {
            value: {
              base: "{colors.black}",
              _dark: "{colors.white}",
            },
          },
        },
        panel: {
          DEFAULT: {
            value: {
              base: "{colors.gray.50}",
              _dark: "{colors.gray.950}",
            },
          },
        },
        border: {
          DEFAULT: {
            value: {
              base: "{colors.gray.200}",
              _dark: "{colors.gray.700}",
            },
          },
        },
        searchInput: {
          DEFAULT: {
            value: {
              base: "{colors.white}",
              _dark: "{colors.gray.800}",
            },
          },
        },
        searchInputBorder: {
          DEFAULT: {
            value: {
              base: "{colors.gray.300}",
              _dark: "{colors.gray.600}",
            },
          },
        },
      },
    },
  },
});

export default theme;

