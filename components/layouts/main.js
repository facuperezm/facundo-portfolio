import Head from "next/head";
import { Box, Container, VStack } from "@chakra-ui/react";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={12}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Facundo Perez Montalvo Portfolio</title>
      </Head>
      {/* <Navbar path={router.asPath} /> */}
      <VStack>
        {children}
        <Footer />
      </VStack>
    </Box>
  );
};

export default Main;
