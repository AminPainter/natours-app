import React from 'react';
import { styled } from '@mui/material';
import { Grid } from 'ui';

const Gallery = ({ images }) => (
  <SkewedGrid gap={0} mt={theme => theme.margin.skewCover}>
    {images.map((img, i) => (
      <GalleryPhoto key={i} alt={`Gallery ${i + 1}`} src={img} />
    ))}
  </SkewedGrid>
);

const SkewedGrid = styled(Grid)(({ theme }) => ({
  clipPath: theme.clipPath.dualWedge,
  zIndex: 20,
  position: 'relative',
}));

const GalleryPhoto = styled('img')({
  height: '28rem',
  width: '100%',
  objectFit: 'cover',
});

export default Gallery;
