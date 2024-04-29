import { Container, List, ListItem, Link, AspectRatio } from "@chakra-ui/react";
import Layout from "../../components/layouts/Article";
import { Meta, ProjectImage, Title } from "../../components/Project";
import P from "../../components/Paragraph";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function LearningJourney() {
  return (
    <Layout>
      <Container>
        <Title>Discovery Trail</Title>
        <P>
          Discovery Trail is an ai powered course generation platform. You can
          create multiple courses for yourself or choose to share them with
          friends.
        </P>
        <P>
          This project is less about the user facing application and more about
          the underlying go web server in control of everything. This is a well
          known paradigm that I wanted to improve upon with the use of HTMX,
          opposed to modern frameworks/libraries like Vite, Angular, & React.
        </P>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link
              href="https://discovery-trail.shariqapps.dev/"
              target="_blank"
            >
              https://discovery-trail.shariqapps.dev
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Golang, Sqlite, TailwindCSS, Templ, HTMX, Vite</span>
          </ListItem>
          <ListItem>
            <Meta>Repositories</Meta>
            <span>
              <Link
                target="_blank"
                href="https://github.com/ShariqAli-Dev/discovery-trail"
              >
                Main <ExternalLinkIcon mx="2px" />
              </Link>
            </span>
          </ListItem>
        </List>
        <ProjectImage
          src="/images/projects/discovery-trail/banner.png"
          alt="Discovery Trail"
        />
        <ProjectImage
          src="/images/projects/discovery-trail/dashboard.png"
          alt="Discovery Trail"
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
