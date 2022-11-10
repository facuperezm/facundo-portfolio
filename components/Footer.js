import { Box, Divider } from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
      <Divider />
      <Box align="center" opacity={0.3} fontSize="sm" pt={3}>
        &copy; {new Date().getFullYear()} | Made with Next.js ♥
      </Box>
    </>
  );
};
export default Footer;
