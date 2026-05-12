import { createSystem, defaultConfig } from "@chakra-ui/react";

const theme = createSystem(defaultConfig, {
  globalCss: {
    "html, body": {
      background: "black",
      color: "white",
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
          DEFAULT: { value: "{colors.black}" },
        },
        fg: {
          DEFAULT: { value: "{colors.white}" },
        },
      },
    },
  },
});

export default theme;

