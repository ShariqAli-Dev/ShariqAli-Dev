import {
  Container,
  Badge,
  List,
  ListItem,
  Link,
  AspectRatio,
} from "@chakra-ui/react";
import Layout from "../../components/layouts/Article";
import { Meta, ProjectImage, Title } from "../../components/Project";
import P from "../../components/Paragraph";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const NotFound = () => {
  return (
    <Layout title="Bug Tracker">
      <Container>
        <Title>
          Bug Tracker <Badge>2022</Badge>
        </Title>
        <P>
          Bug Tracker is a project management tool made for use as an internal
          tool within an organization. You can create multiple projects with
          their own individual tickets. With a tool such as this, a team of
          developers can efficiently plan and resolve issues arisen during the
          development lifecycle.
        </P>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.shariqapps.dev" target="blank">
              https://www.shariqapps.dev <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>
              React, Typescript, GraphQL, URQL/Apollo, Node.js, PostgreSQL,
              MikroORM/TypeORM, Redis, Next.js, TypeGraphQL, Chakra
            </span>
          </ListItem>
          <ListItem>
            <Meta>Repositories</Meta>
            <span>
              <Link
                target="_blank"

                href="https://github.com/ShariqAli-Dev/bug-tracker"
              >
                Main <ExternalLinkIcon mx="2px" />
              </Link>
            </span>
          </ListItem>
        </List>
        <ProjectImage
          src="/images/projects/bug-tracker/dashboard.png"
          alt="Bug Tracker"
        />
        <ProjectImage
          src="/images/projects/bug-tracker/project.png"
          alt="Bug Tracker"
        />

        <AspectRatio>
          <iframe width="1280" height="720" src="https://www.youtube.com/embed/2Svh41Qrmgw" title="Bug Tracker - Demo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </AspectRatio>
      </Container>
    </Layout>
  );
};

export default NotFound;
export { getServerSideProps } from "../../components/Chakra";
