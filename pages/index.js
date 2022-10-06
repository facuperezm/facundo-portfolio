import NextLink from "next/link";
import Section from "../components/Section";
import Paragraph from "../components/Paragraph";
import {
  Box,
  Container,
  Heading,
  VStack,
  Image,
  HStack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

export default function Home() {
  return (
    <Container maxW="container.md" justify="center">
      <Box display={{ md: "flex" }}>
        <Heading as="h2" variant="page-title">
          Facundo Perez Montalvo
        </Heading>
        <p>
          Self-taught web developer currently focused on working with React.js
        </p>
      </Box>
      <Box>
        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={3}
            borderStyle="solid"
            maxWidth="130px"
            display="inline-block"
            borderRadius="full"
            src="/images/facundo.jpg"
            alt="profile picture"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About me
        </Heading>
        <Paragraph>
          I'm a freelance frontend developer looking forward to new
          opportunities in the software industry. I like building web
          applications and my goal is to make the world a better place with code
          one day. Currently I'm learning{" "}
          <NextLink href="https://reactjs.org/">ReactJS</NextLink>.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/projects">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="pink">
              My projects
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  );
}
