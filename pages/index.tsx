import type { NextPage } from "next";
import NextLink from "next/link";
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
  Text,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Paragraph from "../components/Paragraph";
import { BioSection, BioYear } from "../components/Bio";
import Layout from "../components/layouts/Article";
import Section from "../components/Section";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

import Image from "next/image";

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});

const Home: NextPage = () => {
  return (
    <Layout>
      <Container maxW="2xl">
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          css={{ backdropFilter: "blur(10px)" }}
        >
          Hello, I&apos;m a Software Engineer based in New York!
        </Box>

        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Shariq Ali
            </Heading>
            <p>Software Engineer (Web • Embedded • Blockchain)</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <ProfileImage
                src="/images/shariq.jpg"
                alt="Profile image"
                borderRadius="full"
                width="100%"
                height="100%"
              />
            </Box>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            I&apos;m a software engineer based in New York with a passion for
            building software and hardware. I have a knack for all things from
            launching products, planning, designing, and solving real-life
            problems with code.
          </Paragraph>
          <Box display="flex" justifyContent="center" my={4}>
            <NextLink href="/projects" passHref scroll={false}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Projects
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2021</BioYear>- Intern at{" "}
            <NextLink href={"/projects/loop-media"} passHref scroll={false}>
              <Link>Loop Media</Link>
            </NextLink>
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>- Completed the Full Stack Web Program from
            the Graduate School{" "}
            <Link
              href="https://www.credly.com/badges/000873bb-2322-4557-86da-892870fbb18c"
              target="_blank"
            >
              Bloom Institute of Technology
            </Link>
            <br />- Developer & TPM at{" "}
            <NextLink href={"/projects/family-promise"} passHref scroll={false}>
              <Link>Family Promise Spokane</Link>
            </NextLink>
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>- Software Engineer at{" "}
            <NextLink
              href="/projects/blockchain-center"
              passHref
              scroll={false}
            >
              <Link>Blockchain Center NYC</Link>
            </NextLink>
            <br />- Lead Developer at{" "}
            <NextLink
              href="/projects/the-medici-project"
              passHref
              scroll={false}
            >
              <Link>The Medici Project</Link>
            </NextLink>
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>Music, History, Calisthenics, Reading</Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/shariqali-dev" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  @shariqali-dev
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/shariqali-dev/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoLinkedin />}
                >
                  @shariqali-dev
                </Button>
              </Link>
            </ListItem>
          </List>
          <Box display="flex" justifyContent="center" my={4}>
            <NextLink href="/contact" passHref scroll={false}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Contact Me
              </Button>
            </NextLink>
          </Box>
        </Section>
      </Container>
    </Layout>
  );
};

export default Home;
export { getServerSideProps } from "../components/Chakra";
