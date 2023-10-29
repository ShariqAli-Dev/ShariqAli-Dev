import { Container, List, ListItem, Link, AspectRatio } from "@chakra-ui/react";
import Layout from "../../components/layouts/Article";
import { Meta, ProjectImage, Title } from "../../components/Project";
import P from "../../components/Paragraph";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function LearningJourney() {
  return (
    <Layout>
      <Container>
        <Title>Learning Journey</Title>
        <P>
          Learning Journey is an AI-powered course generation platform SaaS.
          Using the site&apos;s UI, you can select a topic and specify as many
          units as you&apos;d like. When you hit &apos;Generate&apos;, you are
          provided with helpful modules, links, and even a mini-quiz to test
          your understanding.
        </P>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link
              href="https://learning-journey.shariqapps.dev/"
              target="_blank"
            >
              https://learning-journey.shariqapps.dev
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>
              NextJS, OpenAI, Stripe, TailwindCSS, Prisma, Docker, PlanetScale
            </span>
          </ListItem>
          <ListItem>
            <Meta>Repositories</Meta>
            <span>
              <Link
                target="_blank"
                href="https://github.com/ShariqAli-Dev/learning-journey"
              >
                Main <ExternalLinkIcon mx="2px" />
              </Link>
            </span>
          </ListItem>
        </List>
        <ProjectImage
          src="/images/projects/learning-journey/banner.png"
          alt="Learning Journey"
        />

        {/* <AspectRatio>
          <iframe
            width="1280"
            height="720"
            src="https://www.youtube.com/embed/2Svh41Qrmgw"
            title="Learning Journey - Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </AspectRatio> */}
      </Container>
    </Layout>
  );
}
export { getServerSideProps } from "../../components/Chakra";
