import { Badge, Container, Link, List, ListItem } from "@chakra-ui/react";
import Layout from "../../components/layouts/Article";
import { Meta, ProjectImage, Title } from "../../components/Project";
import P from "../../components/Paragraph";
import { ExternalLinkIcon } from "@chakra-ui/icons";
export default function BlockchainCenterPage() {
  return (
    <Layout title="Blockchain Center NYC">
      <Container>
        <Title>
          Blockchain Center NYC <Badge>2023</Badge>
        </Title>
        <P>
          Blockchain Center NYC is a leading hub for blockchain technology,
          providing education, resources, and networking opportunities for
          blockchain professionls and ethuists alike.
        </P>
        <P>
          I was contracted and worked as a full stack developer. My team and I
          worked on a variety of web applications, with a specilization in
          consensus algorithms for blockchain networks.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.bitcoincenternyc.com" target="_blank">
              https://bitcoincenternyc.com
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Technologies</Meta>
            <span>Bitcoin, EVM Chains, Rust, Go, Nextjs, Docker, Express</span>
          </ListItem>
        </List>
        <ProjectImage
          src="/images/projects/blockchain-center/eyecatch.png"
          alt="Blockchain Center NYC"
        />
      </Container>
    </Layout>
  );
}

export { getServerSideProps } from "../../components/Chakra";
