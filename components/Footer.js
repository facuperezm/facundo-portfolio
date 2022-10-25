import { Box, Divider } from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
      <Divider />
      <Box align="center" opacity={0.4} fontSize="sm" pt={2}>
        &copy; {new Date().getFullYear()} | Made in Argentina with ♥ by Facundo
        Perez Montalvo.
      </Box>
    </>
  );
};
export default Footer;
