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
        <Fonts />
        <Layout router={router}>
          <AnimatePresence
            mode="wait"
            initial={true}
            onExitComplete={() => {
              if (typeof window !== "undefined") {
                window.scrollTo({ top: 0 });
              }
            }}
          >
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
      </ChakraProvider>
    </>
  );
};
export default MyApp;
