import Head from "next/head";
import { Box, VStack } from "@chakra-ui/react";
import Footer from "../Footer";

const Main = ({ children }) => {
  return (
    <Box as="main" pb={3}>
      <Head>
        <title>Facundo Perez Montalvo Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Facundo Perez Montalvo Portfolio" />
        <meta name="author" content="Facundo Perez Montalvo" />
        <meta name="author" content="Facundo" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@facuperezm" />
        <meta name="twitter:creator" content="@facuperezm" />
        <meta name="twitter:image" content="/facundo.jpg" />
        <meta property="og:site_name" content="Facundo Perez Montalvo" />
        <meta property="og:type" content="personal website" />
        <meta property="og:image" content="/facundo.jpg" />
      </Head>
      <VStack my={12}>{children}</VStack>
      <Footer />
    </Box>
  );
};

export default Main;
