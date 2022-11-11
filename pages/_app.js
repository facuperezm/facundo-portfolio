import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../lib/theme";
import Layout from "../components/layouts/main";
import { AnimatePresence } from "framer-motion";
import Fonts from "../components/Fonts";
import TopBlur from "../components/TopBlur";

const MyApp = ({ Component, pageProps, router }) => {
  return (
    <>
      <TopBlur />
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <ChakraProvider theme={theme}>
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
