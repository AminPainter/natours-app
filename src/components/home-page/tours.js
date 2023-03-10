import React from 'react';
import { Link } from 'gatsby';
import { Stack } from '@mui/material';
import { useQuery } from 'react-query';

import { Section, Heading, Grid, Button } from 'ui';
import Tour from 'components/tour';
import TourCardSkeleton from 'components/loaders/tour-card';
import { queryKeys, gradients } from 'utils/app-constants';
import { getPopularTours } from 'utils/query-functions';

const Tours = () => {
  const { data: tours, isLoading } = useQuery(
    queryKeys.topTours,
    getPopularTours
  );

  return (
    <Section
      mt={theme => theme.margin.skewCover}
      pt={theme => theme.padding.skewCover}
      pb={10}>
      <Heading>most popular tours</Heading>

      <Grid columns={3} my={10}>
        {isLoading ? (
          <>
            <TourCardSkeleton />
            <TourCardSkeleton />
            <TourCardSkeleton />
          </>
        ) : (
          tours.map((tour, i) => (
            <Tour key={tour.id} gradient={gradients[i]} tour={tour} />
          ))
        )}
      </Grid>

      <Stack alignItems='center'>
        <Button variant='primary' component={Link} to='/tours'>
          discover all tours
        </Button>
      </Stack>
    </Section>
  );
};

export default Tours;
