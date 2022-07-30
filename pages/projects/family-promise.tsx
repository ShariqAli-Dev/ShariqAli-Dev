import {
  Container,
  Badge,
  List,
  ListItem,
  Link,
  AspectRatio,
} from '@chakra-ui/react';
import Layout from '../../components/layouts/Article';
import { Meta, ProjectImage, Title } from '../../components/Project';
import P from '../../components/Paragraph';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const NotFound = () => {
  return (
    <Layout title='Loop Media'>
      <Container>
        <Title>
          Family Promise Case Management System <Badge>2022</Badge>
        </Title>
        <P>
          <Link target='_blank' href='https://familypromise.org/'>
            Family Promise <ExternalLinkIcon mx='2px' />
          </Link>{' '}
          helps local communities address the root causes of family
          homelessness. They provide prevention services for families in crisis,
          shelter & case management when they become homeless, and stabilization
          programs once they have secured housing to ensure they remain
          independent.
        </P>
        <P>
          I interned as a Team Product Manager & Front-End Developer alongside a
          team of hardworking developers to build the case management software.
          We met with the stakeholder weekly and scoped sprints structuring the
          stack architecture, UI, state mangement, and app functionality.
        </P>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link target='_blank' href='#'>
              [Work in progress] <ExternalLinkIcon mx='2px' />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React, Ant Design, Less, Node.js, Express, Knex, Docker</span>
          </ListItem>
          <ListItem>
            <Meta>Repositories</Meta>
            <span>
              <Link
                target='_blank'
                href='https://github.com/BloomTech-Labs/family-promise-case-mgmt-fe'
              >
                Front-End
              </Link>{' '}
              |{' '}
              <Link
                target='_blank'
                href='https://github.com/BloomTech-Labs/family-promise-case-mgmt-be'
              >
                Back-End
              </Link>
            </span>
          </ListItem>
        </List>

        <AspectRatio>
          <iframe
            width='893'
            height='502'
            src='https://www.youtube.com/embed/CgAv1i3vrow'
            title='An Introduction to Family Promise'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />
        </AspectRatio>
      </Container>
    </Layout>
  );
};

export default NotFound;
export { getServerSideProps } from '../../components/Chakra';
