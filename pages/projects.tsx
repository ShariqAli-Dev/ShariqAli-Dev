import { Container, Divider, Heading, SimpleGrid } from '@chakra-ui/react';
import { ProjectGridItem } from '../components/GridItem';
import Layout from '../components/layouts/Article';
import Section from '../components/Section';
import thumbWOP from '../public/images/projects/work-in-progress.png';
import thumbLoop from '../public/images/projects/loop-eyecatch.jpg';

const Projects = () => {
  return (
    <Layout title='Projects'>
      <Container>
        {/* Collaboorations */}
        <Heading as='h3' fontSize={20} mb={4}>
          Collaborations
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <ProjectGridItem
              id='loop-media'
              title='Loop Media'
              thumbnail={thumbLoop}
            >
              The place to write, read and discuss current events without
              language barriers or filter bubbles
            </ProjectGridItem>
          </Section>
          <Section>
            <ProjectGridItem
              id='family-promise'
              title='Family Promise Case Management'
              thumbnail={thumbWOP}
            >
              Case Management Softaware for Homeless Services Non-Profit
            </ProjectGridItem>
          </Section>
          <Section delay={0.1}>
            <ProjectGridItem
              id='closet-app'
              title='Closet App'
              thumbnail={thumbWOP}
            >
              Platform for a community of users to lend & buy clothes from
              people in their local area
            </ProjectGridItem>
          </Section>
        </SimpleGrid>

        {/* Seperating Section */}
        <Section delay={0.1}>
          <Divider my={6} />
          <Heading as='h3' fontSize={20} mb={4}>
            Projects
          </Heading>
        </Section>
        {/* Projects */}
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <ProjectGridItem
              id='bug-tracker'
              title='Bug Tracker'
              thumbnail={thumbWOP}
            >
              A collaborative bug tracking app that monitors and eliminates bugs
              in software development projects.
            </ProjectGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Projects;
export { getServerSideProps } from '../components/Chakra';
