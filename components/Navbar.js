import { Box, Container, Flex, Heading } from "@chakra-ui/react";

const Navbar = (props) => {
  const { path } = props;
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg="#20202380"
      style={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.sm"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            Facundo Perez Montalvo
          </Heading>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
