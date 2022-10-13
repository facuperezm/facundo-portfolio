import Head from "next/head";
import { Box, Container, VStack } from "@chakra-ui/react";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={3}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Facundo Perez Montalvo Portfolio</title>
      </Head>
      {/* <Navbar path={router.asPath} /> */}
      <VStack my={10}>{children}</VStack>
      <Footer />
    </Box>
  );
};

export default Main;
