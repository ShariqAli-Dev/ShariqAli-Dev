import { Container, Divider, Heading, SimpleGrid } from "@chakra-ui/react";
import { ProjectGridItem } from "../components/GridItem";
import Layout from "../components/layouts/Article";
import Section from "../components/Section";

import thumbLoopMedia from "../public/images/projects/loop-media/eyecatch.jpg";
import thumbFamilyPromise from "../public/images/projects/family-promise/eyecatch.png";
import thumbBugTracker from "../public/images/projects/bug-tracker/eyecatch.png";
import thumbMedici from "../public/images/projects/the-medici-project/eyecatch.png";
import thumbLearningJourney from "../public/images/projects/learning-journey/eyecatch.png";
import thumbBlockchainCenter from "../public/images/projects/blockchain-center/eyecatch.png";

const Projects = () => {
  return (
    <Layout title="Projects">
      <Container>
        {/* Collaboorations */}
        <Heading as="h3" fontSize={20} mb={4}>
          Experience
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <ProjectGridItem
              id="the-medici-project"
              title="The Medici Project"
              thumbnail={thumbMedici}
            >
              Simple & Transparent Web3 Wealth Management
            </ProjectGridItem>
          </Section>
          <Section>
            <ProjectGridItem
              id="blockchain-center"
              title="Blockchain Center NYC"
              thumbnail={thumbBlockchainCenter}
            >
              Building the Decentralized Future
            </ProjectGridItem>
          </Section>
          <Section>
            <ProjectGridItem
              id="family-promise"
              title="Family Promise Case Management"
              thumbnail={thumbFamilyPromise}
            >
              Case Management Sofware for Homeless Services Non-Profit
            </ProjectGridItem>
          </Section>
          <Section>
            <ProjectGridItem
              id="loop-media"
              title="Loop Media"
              thumbnail={thumbLoopMedia}
            >
              International News From Independent Writers Around The Globe, In
              Any Language
            </ProjectGridItem>
          </Section>
        </SimpleGrid>

        {/* Seperating Section */}
        <Section delay={0.1}>
          <Divider my={6} />
          <Heading as="h3" fontSize={20} mb={4}>
            Projects (updating soon!)
          </Heading>
        </Section>
        {/* Projects */}
        {/* <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.2}>
            <ProjectGridItem
              id="learning-journey"
              title="Learning Journey"
              thumbnail={thumbLearningJourney}
            >
              An AI-powered course generation platform SaaS
            </ProjectGridItem>
          </Section>
          <Section delay={0.2}>
            <ProjectGridItem
              id="bug-tracker"
              title="Bug Tracker"
              thumbnail={thumbBugTracker}
            >
              A collaborative bug tracking app that monitors and eliminates bugs
              in software development projects
            </ProjectGridItem>
          </Section>
        </SimpleGrid> */}
      </Container>
    </Layout>
  );
};

export default Projects;
export { getServerSideProps } from "../components/Chakra";
