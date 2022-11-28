import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../lib/theme";
import Layout from "../components/layouts/main";
import { AnimatePresence } from "framer-motion";
import Fonts from "../components/Fonts";
import TopBlur from "../components/TopBlur";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <TopBlur />
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <ChakraProvider theme={theme}>
        <Fonts />
        <Layout>
          <AnimatePresence exitBeforeEnter initial={true}>
            <Component {...pageProps} />
          </AnimatePresence>
        </Layout>
      </ChakraProvider>
    </>
  );
};
export default MyApp;
