import { extendTheme, theme as base } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#1c1c1c", "#1c1c1c")(props),
      color: mode("#ffffff", "#ffffff")(props),
    },
  }),
};

const components = {
  Heading: {
    variants: {
      "section-title": {
        fontSize: 18,
        marginTop: 6,
        marginBottom: 2,
      },
      "page-title": {
        fontSize: 24,
      },
    },
  },
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const fonts = {
  heading: `Inter Tight, ${base.fonts.heading}`,
  body: `Hind, ${base.fonts.heading}`,
  span: `Newsreader, ${base.fonts.heading}`,
};

const theme = extendTheme({
  styles,
  components,
  config,
  fonts,
});

export default theme;
