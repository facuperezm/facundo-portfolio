import Head from "next/head";
import { Box, VStack } from "@chakra-ui/react";
import Footer from "../Footer";

const Main = ({ children }) => {
  return (
    <Box as="main" pb={3}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Facundo Perez Montalvo Portfolio</title>
      </Head>
      <VStack my={12}>{children}</VStack>
      <Footer />
    </Box>
  );
};

export default Main;
