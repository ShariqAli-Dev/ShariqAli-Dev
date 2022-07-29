import { Box, Container } from '@chakra-ui/react';
import Head from 'next/head';
import { ReactNode } from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';

type Props = {
  router: any;
  children?: ReactNode;
};

const Main = ({ router, children }: Props) => {
  return (
    <Box as='main' pb={8}>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content="Shariq's homepage" />
        <meta name='author' content='Shariq Ali' />
        <link rel='apple-touch-icon' href='apple-touch-icon.png' />
        <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
        <meta property='og:site_name' content='Shariq Ali' />
        <meta name='og:title' content='Shariq Ali' />
        <meta property='og:type' content='website' />
        {/* <meta property='og:image' content='https://www.___.png' /> */}
        <title>Shariq Ali - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW='container.md'>
        {/* <LazyVoxel___/> */}

        {children}

        <Footer />
      </Container>
    </Box>
  );
};

export default Main;
