import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grid, GridItem } from '../../';
storiesOf('Grid', module)
  .add('Default', () => (
    <Grid>
      <GridItem small={2} medium={12} large={4} xlarge={4}>
        Hello
      </GridItem>
      <GridItem small={8}>Hello</GridItem>
      <GridItem small={2}>Hello</GridItem>
    </Grid>
  ))
  .add('Sizes', () => (
    <Grid>
      <GridItem small={2} medium={12} large={4} xlarge={4}>
        Hello
      </GridItem>
      <GridItem small={2} medium={6} large={4} xlarge={4}>
        Hello
      </GridItem>
      <GridItem small={2} medium={6} large={4} xlarge={4}>
        Hello
      </GridItem>
    </Grid>
  ));
