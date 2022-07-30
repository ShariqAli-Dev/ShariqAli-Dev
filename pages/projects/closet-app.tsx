import NextLink from 'next/link';
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
} from '@chakra-ui/react';

const NotFound = () => {
  return (
    <Container>
      <Heading as='h1'>Not found</Heading>
      <Text>The project you&apos;re looking for was not found.</Text>
      <Divider my={6} />
      <Box my={6} display='flex' justifyContent='center'>
        <NextLink href='/projects' passHref>
          <Button colorScheme='teal'>Return to Projects</Button>
        </NextLink>
      </Box>
    </Container>
  );
};

export default NotFound;
export { getServerSideProps } from '../../components/Chakra';
