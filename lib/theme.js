import { extendTheme, theme as base } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#DCD7C9", "#1c1c1c")(props),
      color: "#e5e5e5",
    },
  }),
};

const components = {
  Heading: {
    variants: {
      "section-title": {
        // textDecoration: "underline",
        fontSize: 18,
        textUnderLineOffset: 6,
        textDecorationColor: "#3F4E4F",
        textDecorationThickness: 2,
        marginTop: 6,
        marginBottom: 2,
      },
      "page-title": {
        fontSize: 24,
      },
    },
  },
};

const fonts = {
  heading: `Montserrat, ${base.fonts.heading}`,
  body: `Hind, ${base.fonts.heading}`,
};

const theme = extendTheme({
  styles,
  components,
  fonts,
});

export default theme;
