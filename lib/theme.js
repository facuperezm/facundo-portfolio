import { extendTheme, theme as base } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#DCD7C9", "#1c1c1c")(props),
    },
  }),
};

const components = {
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "underline",
        fontSize: 18,
        textUnderLineOffset: 6,
        textDecorationColor: "#3F4E4F",
        textDecorationThickness: 2,
        marginTop: 13,
        marginBottom: 4,
      },
      "page-title": {
        fontSize: 24,
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
  heading: `Source Sans Pro, ${base.fonts.heading}`,
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
