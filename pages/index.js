import Section from "../components/Section";
import Layout from "../components/layouts/articles";
import { ProjectGridItem } from "../components/grid-item";
import Span from "../components/Span";
import ContactForm from "../components/Contact";
import {
  Box,
  Container,
  Heading,
  Button,
  Flex,
  Icon,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { countryCodeEmoji } from "country-code-emoji";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import bloggy from "../public/images/bloggy.jpeg";
import advicegen from "../public/images/advicegen.jpeg";
import landing from "../public/images/landing.jpeg";
import portfolio from "../public/images/portfolio.jpeg";
import estore from "../public/images/e-store.jpeg";
import personalImg from "../public/images/facundo.jpg";
import adviency from "../public/images/adviency.jpeg";

export default function Home() {
  return (
    <Container maxW="container.md" justify="center">
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
          mb={{ base: 2 }}
          textAlign={{ md: "left", base: "left" }}
          maxWidth={{ md: 250, base: 110 }}
        >
          <Image
            alt="profile picture"
            src={personalImg}
            width="250px"
            height="250px"
            style={{ borderRadius: "50%" }}
          />
        </Box>
      </Box>
      <Section delay={0.2}>
        <Heading as="h3" fontSize={22} variant="section-title" mb={4}>
          About me
        </Heading>
        <Text marginBottom={2}>
          Hi there! My name is Facundo, and I am a front-end developer. I have a
          self-taught background in the React stack and I specialize in creating
          user-friendly, visually appealing interfaces.
        </Text>
        <Text marginBottom={2}>
          As a developer, I am driven to make a positive impact on the world
          through my work. I am always seeking new ways to learn and improve my
          skills.
        </Text>
        <Text marginBottom={3}>
          If you&apos;re looking for a dedicated and driven front-end developer
          to join your team, I would love to hear from you. Let&apos;s work
          together to create something amazing!
        </Text>

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
          <SimpleGrid gap={4}>
            <Section>
              <ProjectGridItem
                title="Adviency 2022"
                thumbnail={adviency}
                link="https://adviency-facundo.vercel.app/"
                repo="https://github.com/facuperezm/adviency"
              >
                ???? Adviency is a gift list app made during december 2022. Made
                with React, Next.js and TailwindCSS
              </ProjectGridItem>
            </Section>
            <Section>
              <ProjectGridItem
                title="e-Store"
                thumbnail={estore}
                link="https://ecommerce-store-facundo.vercel.app/"
                repo="https://github.com/facuperezm/e-Store"
              >
                ???? E-commerce app made with React, TailwindCSS using Context and
                Reducer
              </ProjectGridItem>
            </Section>
            <Section>
              <ProjectGridItem
                title="Advice App"
                thumbnail={advicegen}
                link="https://advice-generator-facundo.vercel.app/"
                repo="https://github.com/facuperezm/advice-generator"
              >
                ????????????? Advice Generator made with React, Next.js and TailwindCSS
              </ProjectGridItem>
            </Section>
            <Section>
              <ProjectGridItem
                title="Blogr Landing Page"
                thumbnail={landing}
                link="https://blogr-facundo.netlify.app/"
                repo="https://github.com/facuperezm/Blogr-LandingPage"
              >
                ???? Landing Page made with React and TailwindCSS
              </ProjectGridItem>
            </Section>
            <Section>
              <ProjectGridItem
                title="Bloggy"
                thumbnail={bloggy}
                link="https://bloggy-facundo.vercel.app/"
                repo="https://github.com/facuperezm/Bloggy"
              >
                ???? Blog app made with Next.js, TailwindCSS and Firebase
              </ProjectGridItem>
            </Section>
            <Section>
              <ProjectGridItem
                title="Personal Website"
                thumbnail={portfolio}
                link="https://facuperezm.vercel.app/"
                repo="https://github.com/facuperezm/facundo-portfolio"
              >
                ????????????? Personal website made with Next.js and ChakraUI
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
