import { extendTheme, theme as base } from "@chakra-ui/react";

const styles = {
  global: {
    body: {
      bg: "#1c1c1c",
      color: "#fff",
    },
  },
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

const fonts = {
  heading: `Inter Tight, ${base.fonts.heading}`,
  body: `Hind, ${base.fonts.heading}`,
  span: `Newsreader, ${base.fonts.heading}`,
};

const theme = extendTheme({
  styles,
  components,
  fonts,
});

export default theme;
