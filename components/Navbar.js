import { Box, Container, Flex, Heading } from "@chakra-ui/react";

const Navbar = (props) => {
  const { path } = props;
  return (
    <Box
      position="sticky"
      as="nav"
      w="100%"
      zIndex={1}
      height={63}
      opacity={0.95}
      top={0}
      background="linear-gradient(to bottom, black 1%, transparent 99%)"
      style={{ backdropFilter: "blur(1px)" }}
      {...props}
    ></Box>
  );
};

export default Navbar;
