import { extendTheme, theme as base } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#DCD7C9", "#1f2028")(props),
    },
  }),
};

const components = {
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "underline",
        fontSize: 20,
        textUnderLineOffset: 6,
        textDecorationColor: "#3F4E4F",
        textDecorationThickness: 3,
        marginTop: 3,
        marginBottom: 4,
      },
      "page-title": {
        fontSize: 28,
      },
    },
  },
  Link: {
    baseStyle: (props) => ({
      color: mode("#3E8BFF", "#FF5E84")(props),
      textUnderLineOffset: 3,
    }),
  },
};

const fonts = {
  heading: `Inter, ${base.fonts.heading}`,
};

const colors = {
  glassTeal: "#88ccca",
};

const config = {
  initialColorMode: "dark",
  userSystemColorMode: true,
};

const theme = extendTheme({
  config,
  styles,
  components,
  colors,
  fonts,
});

export default theme;
