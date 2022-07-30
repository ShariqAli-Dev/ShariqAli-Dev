import NextLink from 'next/link';
import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { ReactNode } from 'react';

type Title = {
  children: ReactNode;
};

type ProjectImage = {
  src: string;
  alt: string;
};

type Meta = Title;

export const Title = ({ children }: Title) => (
  <Box>
    <NextLink href='/projects' passHref>
      <Link>Projects</Link>
    </NextLink>
    <span>
      {' '}
      <ChevronRightIcon />{' '}
    </span>
    <Heading display='inline-block' as='h3' fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
);

export const ProjectImage = ({ src, alt }: ProjectImage) => (
  <Image borderRadius='lg' w='full' src={src} alt={alt} mb={4} />
);

export const Meta = ({ children }: Meta) => (
  <Badge colorScheme='green' mr={2}>
    {children}
  </Badge>
);
