import React from 'react';
import { styled, Typography } from '@mui/material';

const Heading = ({
  children,
  textAlign = 'center',
  variant = 'h4',
  ...rest
}) => (
  <Typography
    textTransform='uppercase'
    textAlign={textAlign}
    variant={variant}
    fontWeight={600}
    {...rest}>
    <StyledSpan>{children}</StyledSpan>
  </Typography>
);

export default Heading;

const StyledSpan = styled('span')(({ theme }) => ({
  color: 'transparent',
  display: 'inline-block',
  WebkitBackgroundClip: 'text',
  backgroundImage: `linear-gradient(to right bottom, ${theme.palette.primary.light}, ${theme.palette.primary.dark})`,
  transition: 'all .3s',

  '&:hover': {
    transform: 'skewX(15deg) skewY(2deg) scale(1.1)',
    textShadow: '.5rem .8rem 1.2rem rgba(0,0,0,0.2)',
  },
}));
