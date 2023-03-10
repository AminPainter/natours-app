import React from 'react';
import { Link } from 'gatsby';
import { Stack, styled, Typography } from '@mui/material';

import { Button } from 'ui';
import heroImg from 'images/hero.jpg';

const Hero = () => (
  <Header>
    <Stack gap={4} alignItems='center' justifyContent='center' mt={15}>
      <HeadingPrimary variant='h1'>outdoors</HeadingPrimary>
      <HeadingSecondary variant='h6'>is where life happens</HeadingSecondary>
      <Button component={Link} to='/tours'>
        discover our tours
      </Button>
    </Stack>
  </Header>
);

const Header = styled('header')(({ theme }) => ({
  height: '95vh',
  marginTop: theme.spacing(-10),
  padding: theme.spacing(5),
  backgroundImage: theme.utils.createGradient(heroImg),
  backgroundPosition: 'top',
  clipPath: theme.clipPath.singleWedge,
}));

const HeadingPrimary = styled(Typography)(({ theme }) => ({
  letterSpacing: '1.5rem',
  fontSize: '5rem',
  textTransform: 'uppercase',
  color: theme.palette.grey[200],
  fontWeight: 400,

  [theme.breakpoints.down('sm')]: {
    letterSpacing: '.5rem',
    fontSize: '4rem',
  },
}));

const HeadingSecondary = styled(HeadingPrimary)(({ theme }) => ({
  letterSpacing: '1rem',
  fontSize: '1.25rem',
  wordSpacing: '1rem',
  fontWeight: 800,
  textShadow: '0 .5rem 1rem rgba(0,0,0,0.15)',

  [theme.breakpoints.down('sm')]: {
    wordSpacing: '.1rem',
    letterSpacing: '.5rem',
    fontSize: '1rem',
  },
}));

export default Hero;
