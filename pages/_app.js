import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../lib/theme";
import Layout from "../components/layouts/main";
import { AnimatePresence } from "framer-motion";
import Fonts from "../components/Fonts";

const MyApp = ({ Component, pageProps, router }) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <ChakraProvider theme={theme}>
        {/* <ColorModeProvider>
          <Box
            bgGradient="linear(180deg, background, rgba(32, 32, 35, 0.01) 81.43%)"
            // invert="90%"
            position="fixed"
            width="100%"
            height="10%"
            pointerEvents="none"
            top={0}
            left={0}
            zIndex={5}
          ></Box>
        </ColorModeProvider> */}
        <Fonts />
        <Layout router={router}>
          <AnimatePresence mode="wait" initial={true}>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
      </ChakraProvider>
    </>
  );
};
export default MyApp;
