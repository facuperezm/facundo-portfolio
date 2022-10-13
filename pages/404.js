import NextLink from "next/link";
import Image from "next/image";
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
} from "@chakra-ui/react";
import notFoundImg from "../public/images/notfound.jpg";
const NotFound = () => {
  return (
    <Container mt={16}>
      <Image src={notFoundImg} alt="not found image" />
      <Heading as="h1">404 - Not found</Heading>
      <Text>
        This page was not found, I'm still working on this section! My bad 😂
      </Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <NextLink href="/">
          <Button variant="outline" colorScheme="teal">
            Return to home
          </Button>
        </NextLink>
      </Box>
    </Container>
  );
};
export default NotFound;
