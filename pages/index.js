import NextLink from "next/link";
import Section from "../components/Section";
import Paragraph from "../components/Paragraph";
import {
  Box,
  Container,
  Heading,
  Image,
  Button,
  Flex,
  List,
  ListItem,
  Icon,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  IoLogoTwitter,
  IoLogoEmail,
  IoLogoGithub,
  IoLogoLinkedin,
} from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Span from "../components/Span";
import Link from "next/link";

export default function Home() {
  return (
    <Container maxW="container.sm" justify="center">
      <Box
        display={{ md: "flex" }}
        bg="#2e2e2e"
        p={6}
        mt={14}
        borderRadius="lg"
        align="center"
      >
        <Flex direction="column" align="center" p={5}>
          <Heading as="h2" variant="page-title">
            Facundo Perez Montalvo
          </Heading>
          <p>
            <Span>Self-taught</Span> web developer currently focused on working
            with React.js
          </p>
        </Flex>
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
      <Box>
        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center"></Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About me
        </Heading>
        <Paragraph>
          I'm a freelance frontend developer looking forward to new
          opportunities in the software industry. I like building web
          applications and my goal is to make the world a better place with code
          one day. Currently I'm learning
          <NextLink href="https://reactjs.org/">ReactJS</NextLink>.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/projects">
            <Button
              variant="outline"
              rightIcon={<ChevronRightIcon />}
              colorScheme="pink"
            >
              My projects
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Contact me
        </Heading>
        <Flex gap={1}>
          <Link href="https://github.com/facuperezm" target="_blank">
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<Icon as={IoLogoGithub} />}
            >
              @facuperezm
            </Button>
          </Link>

          <Link href="https://twitter.com/FacuPerezM" target="_blank">
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<Icon as={IoLogoTwitter} />}
            >
              @facuperezm
            </Button>
          </Link>
          <Link
            href="https://www.linkedin.com/in/facundoperezm/"
            target="_blank"
          >
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<Icon as={IoLogoLinkedin} />}
            >
              @facuPerezM
            </Button>
          </Link>
          <Link href="mailto:facundoperezmontalvo@gmail.com" target="_blank">
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<Icon as={MdEmail} />}
            >
              fpm@gmail.com
            </Button>
          </Link>
        </Flex>
      </Section>
    </Container>
  );
}
