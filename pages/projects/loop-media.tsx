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
          Loop Media <Badge>2021</Badge>
        </Title>
        <P>
          Loop Media was made to write and read about what&apos;s happening
          around the world, without algorithms deciding what content you consume
          or language barriers.
        </P>
        <P>
          <Link href='https://www.linkedin.com/in/santiago-cabanas-oyarzun-9564311a4/'>
            Santaigo Cabanas Oyarzun <ExternalLinkIcon mx='2px' />
          </Link>
          , the founder of the company, is a good friend of mine. I was
          inspiried by his mission and helped code the website alongside a team
          of fantastic developers, designers, and writers.
        </P>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href='https://www.loopmedia.app'>
              https://www.loopmedia.app <ExternalLinkIcon mx='2px' />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Next, React, TailwindCSS, Firebase</span>
          </ListItem>
        </List>
        <ProjectImage
          src='/images/projects/loop-media/banner.jpg'
          alt='Loop Media'
        />
        <AspectRatio>
          <iframe
            width='893'
            height='502'
            src='https://www.youtube.com/embed/baz-C2s7LMI'
            title='Loop Media - news without algorithms | Santiago & Manolo | start up journey, inspiration, goals'
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
