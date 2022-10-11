import { ChakraProvider } from "@chakra-ui/react";
import theme from "../lib/theme";
import Layout from "../components/layouts/main";
import { AnimatePresence } from "framer-motion";
import Fonts from "../components/Fonts";

const MyApp = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  );
};
export default MyApp;
