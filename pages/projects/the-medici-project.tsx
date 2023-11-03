import { Badge, Container, Link, List, ListItem } from "@chakra-ui/react";
import Layout from "../../components/layouts/Article";
import { Meta, ProjectImage, Title } from "../../components/Project";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import P from "../../components/Paragraph";

export default function TheMediciProject() {
  return (
    <Layout title="The Medici Project">
      <Container>
        <Title>
          The Medici Project <Badge>2023</Badge>
        </Title>
        <P>
          The Medici Project offers a simplistic solution to digital asset
          investing with a new kind of transparency. As a result of being built
          on Web3, you can see every move, every decision, all clearly logged on
          the blockchain.
        </P>
        <P>
          As the lead developer of The Medici Project, I liaise closely with
          advisors and clients to ensure the project&apos;s success. I drive the
          development of key features, architect our software solutions, and
          oversee all aspects of the project, ensuring a seamless integration of
          ideas and execution. My role extends beyond coding, encompassing a
          comprehensive understanding of our clients&apos; needs and the
          strategic direction of our initiative.
        </P>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.medici.ai" target="_blank">
              https://www.medici.ai
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Remix, Supabase, Web3js, Magic, Ethereum</span>
          </ListItem>
        </List>
        <ProjectImage
          src="/images/projects/the-medici-project/banner.png"
          alt="The Medici Project"
        />
      </Container>
    </Layout>
  );
}
