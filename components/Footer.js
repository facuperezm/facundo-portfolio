import { Box, Divider } from "@chakra-ui/react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <Divider />
      <Box align="center" opacity={0.7} fontSize="sm" pt={3}>
        &copy; {new Date().getFullYear()} | Made with{" "}
        <Link href="https://nextjs.org/">Next.js</Link> ♥
      </Box>
    </>
  );
};
export default Footer;
