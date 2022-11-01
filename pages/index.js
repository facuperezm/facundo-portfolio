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
  Icon,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { IoLogoTwitter, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import Span from "../components/Span";
import Link from "next/link";

export default function Home() {
  return (
    <Container maxW="container.sm" justify="center">
      <Box
        display="flex"
        flexDirection={{ md: "row", base: "column-reverse" }}
        justify={{ md: "center", base: "right" }}
      >
        <Box flexGrow={6} alignSelf={{ md: "center" }} mb={{ base: 6 }}>
          <Heading as="h2" variant="page-title">
            Facundo Perez Montalvo
          </Heading>
          <Span>Frontend developer</Span>{" "}
        </Box>
        <Box
          flexShrink={1}
          mt={{ base: 4, md: 0 }}
          // ml={{ md: 6 }}
          mb={{ base: 2 }}
          textAlign={{ md: "right", base: "left" }}
        >
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
      <Box>
        {/* <Box
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
          backgroundColor="#333333"
          borderRadius="full"
        >
          Hello world! Welcome to my website
        </Box> */}
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About me
        </Heading>
        <Paragraph>
          Hi, my name is Facundo, I&apos;m a Frontend developer from Argentina
          looking for new opportunities.
        </Paragraph>
        <Paragraph>
          Passionate about new technologies and building amazing products,
          taking care of details and constantly learning.
        </Paragraph>
        <Paragraph>
          Mainly focused on working with the React stack. Currently doing
          freelance works for local bussineses providing tech solutions.
        </Paragraph>

        <Box align="center" my={6}>
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
        <Flex gap={1} justify="center" mb={3}>
          <Link href="https://github.com/facuperezm" target="_blank">
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<Icon as={IoLogoGithub} />}
            >
              GitHub
            </Button>
          </Link>

          <Link href="https://twitter.com/FacuPerezM" target="_blank">
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<Icon as={IoLogoTwitter} />}
            >
              Twitter
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
              Linkedin
            </Button>
          </Link>
          {/* <Link href="mailto:facundoperezmontalvo@gmail.com" target="_blank">
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<Icon as={MdEmail} />}
            >
              fpm@gmail.com
            </Button>
          </Link> */}
        </Flex>
      </Section>
    </Container>
  );
}
