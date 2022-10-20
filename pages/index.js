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
        display={{ md: "flex" }}
        bg="#2e2e2e"
        p={6}
        mt={14}
        borderRadius="lg"
        align="center"
      >
        <Grid
          direction="column"
          templateColumns="repeat(4,1fr)"
          templateRows="repeat(1, 1fr)"
          justifyItems="stretch"
          alignItems="center"
          gap={1}
        >
          <GridItem colSpan={3}>
            <Heading as="h2" variant="page-title">
              Facundo Perez Montalvo
            </Heading>
            <p>
              <Span>Frontend developer</Span>
            </p>
          </GridItem>
          <GridItem colSpan={1}>
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
          </GridItem>
        </Grid>
      </Box>
      <Box>
        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center"></Box>
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
        <Flex gap={1} align="center">
          <Link href="https://github.com/facuperezm" target="_blank">
            <Button variant="ghost" colorScheme="teal">
              {<Icon as={IoLogoGithub} />}
            </Button>
          </Link>

          <Link href="https://twitter.com/FacuPerezM" target="_blank">
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<Icon as={IoLogoTwitter} />}
            ></Button>
          </Link>
          <Link
            href="https://www.linkedin.com/in/facundoperezm/"
            target="_blank"
          >
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<Icon as={IoLogoLinkedin} />}
            ></Button>
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
