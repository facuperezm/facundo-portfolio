import Section from "../components/Section";
import Paragraph from "../components/Paragraph";
import Layout from "../components/layouts/articles";
import {
  Box,
  Container,
  Heading,
  Image,
  Button,
  Flex,
  Icon,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { countryCodeEmoji } from "country-code-emoji";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import Span from "../components/Span";
import Link from "next/link";
import { ProjectGridItem } from "../components/grid-item";
import bloggy from "../public/images/bloggy.jpeg";
import advicegen from "../public/images/advicegen.jpeg";
import landing from "../public/images/landing.jpeg";
import ContactForm from "../components/Contact";

export default function Home() {
  return (
    <Container maxW="container.md" justify="center">
      <Section delay={0.1}>
        <Box
          mt={20}
          display="flex"
          flexDirection={{ md: "row", base: "column-reverse" }}
          justify={{ md: "center", base: "right" }}
        >
          <Box flexGrow={6} alignSelf={{ md: "center" }} mb={{ base: 8 }}>
            <Heading
              as="h2"
              fontSize={{ md: 38, base: 24 }}
              variant="page-title"
              fontWeight="black"
            >
              Facundo Perez Montalvo
            </Heading>
            <Span>
              <i>Frontend developer based in Argentina</i>
              {"  "}
              {countryCodeEmoji("AR")}
            </Span>
          </Box>
          <Box
            flexShrink={1}
            mt={{ base: 4, md: 0 }}
            // ml={{ md: 6 }}
            mb={{ base: 2 }}
            textAlign={{ md: "left", base: "left" }}
            // paddingRight={3}
          >
            <Image
              borderStyle="solid"
              boxShadow="2xl"
              maxWidth={{ md: 250, base: 110 }}
              display="inline-block"
              borderRadius="full"
              src="/images/facundo.jpg"
              alt="profile picture"
            />
          </Box>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" fontSize={22} variant="section-title" mb={4}>
          About me
        </Heading>
        <Paragraph>
          Hello! I&apos;m a self-taught software developer with a passion for{" "}
          <i>front-end web development</i>, and I love to work on projects that
          make the world a better place. My favorite part of being a frontend
          developer is designing and building beautiful UI&apos;s that are
          simple and user-friendly.
          {/* I&apos;m a developer from Argentina looking for new opportunities.
          Passionate about new technologies and building amazing products,
          always taking care of details and constantly learning. I love building
          things that are simple and user-friendly. */}
        </Paragraph>
        <Paragraph>
          I am mainly focused on doing front-end development with the React
          stack. I love to learn new things, and I&apos;m always looking to
          expand my skillset.
          {/* I am currently doing
          freelance projects for local businesses providing tech solutions. */}
        </Paragraph>
        <Paragraph>
          I&apos;m currently looking for a new role as a developer.{" "}
          <strong>Hire me?</strong>
        </Paragraph>

        <Box align="center" mb={14}>
          <Flex gap={2} justify="left">
            <Link
              href="https://www.linkedin.com/in/facundoperezm/"
              target="_blank"
            >
              <Button
                variant="solid"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoLinkedin} />}
                fontSize={15}
              >
                View Linkedin
              </Button>
            </Link>
            <Link href="https://github.com/facuperezm" target="_blank">
              <Button
                variant="outline"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
                fontSize={15}
                size="md"
              >
                View GitHub
              </Button>
            </Link>
          </Flex>
        </Box>
      </Section>
      <Section delay={0.3}>
        <Layout>
          <Heading as="h3" fontSize={22} variant="section-title">
            Projects
          </Heading>
          <Text mb={4}>
            Some of the projects that I am currently working on:
          </Text>
          <SimpleGrid columns={[1, 2, 3]} gap={4}>
            <Section>
              <ProjectGridItem
                title="Bloggy"
                thumbnail={bloggy}
                link="https://bloggy-facundo.vercel.app/"
              >
                📖 Blog app made with Next.js, TailwindCSS and Firebase
              </ProjectGridItem>
            </Section>
            <Section>
              <ProjectGridItem
                title="Advice App"
                thumbnail={advicegen}
                link="https://advice-generator-facundo.vercel.app/"
              >
                🏃‍♂️ Advice Generator made with React, Next.js and TailwindCSS
              </ProjectGridItem>
            </Section>
            <Section>
              <ProjectGridItem
                title="Blogr Landing Page"
                thumbnail={landing}
                link="https://blogr-facundo.netlify.app/"
              >
                🖥 Landing Page made with React and TailwindCSS
              </ProjectGridItem>
            </Section>
          </SimpleGrid>
        </Layout>
      </Section>
      <Section delay={0.4}>
        <Heading as="h3" fontSize={22} variant="section-title">
          Contact me
        </Heading>
        <Text mb={4}>
          Do you have a job opportunity or idea you&apos;d like to discuss? Feel
          free to send me an email:
        </Text>
        <ContactForm />
      </Section>
    </Container>
  );
}
