import NextLink from "next/link";
import Image from "next/image";
import { Box, Text, LinkBox, LinkOverlay, Button } from "@chakra-ui/react";
import { Global } from "@emotion/react";

export const ProjectGridItem = ({ children, title, thumbnail, link, repo }) => (
  <Box w="100%" align="center">
    <LinkBox cursor="pointer">
      <LinkOverlay href={link}>
        <NextLink href={link}>
          <Image
            src={thumbnail}
            alt={title}
            className="grid-item-thumbnail"
            placeholder="blur"
            position="absolute"
            objectFit="cover"
          />
        </NextLink>
      </LinkOverlay>
    </LinkBox>
    <Text my={2} fontSize={19}>
      {title}
    </Text>
    <Text fontSize={14}>{children}</Text>
    <Box mt={3}>
      <NextLink href={link}>
        <Button size="sm" mx={1} variant="solid">
          Deploy
        </Button>
      </NextLink>
      <NextLink href={repo}>
        <Button size="sm" mx={1} variant="outline">
          Repo
        </Button>
      </NextLink>
    </Box>
  </Box>
);

export const GridItemStyle = () => (
  <Global
    styles={`
    .grid-item-thumbnail {
    border-radius: 6px;
    
    overflow: hidden;
    }
    `}
  />
);
