import Head from "next/head";
import { Box, useColorModeValue, VStack } from "@chakra-ui/react";
import Footer from "../Footer";
import Navblur from "../navblur";

const Main = ({ children }) => {
  const color = useColorModeValue("#202023", "#f0e7db");
  return (
    <>
      <Box as="main" pb={3}>
        <Head>
          <title>Facundo Perez Montalvo Portfolio</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Welcome to my website!" />
          <meta name="author" content="Facundo Perez Montalvo" />
          <meta name="author" content="Facundo" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@facuperezm" />
          <meta name="twitter:creator" content="@facuperezm" />
          <meta
            name="twitter:image"
            content="https://i.imgur.com/fjL49nC.jpg"
          />
          <meta property="og:site_name" content="Facundo Perez Montalvo" />
          <meta property="og:type" content="personal website" />
          <meta property="og:image" content="https://i.imgur.com/fjL49nC.jpg" />
        </Head>
        {/* <Navblur /> */}
        {/* <Box
          bgGradient="linear(180deg, bg, rgba(32, 32, 35, 0.01) 81.43%)"
          invert="90%"
          position="fixed"
          width="100%"
          height="10%"
          pointerEvents="none"
          top={0}
          left={0}
          zIndex={5}
        ></Box> */}
        <VStack mt={4}>{children}</VStack>
        <Footer />
      </Box>
    </>
  );
};

export default Main;
