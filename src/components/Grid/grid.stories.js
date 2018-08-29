import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grid, GridItem } from '../../';
storiesOf('Grid', module)
  .add('Default', () => (
    <Grid>
      <GridItem small={2} medium={12} large={4} xlarge={4}>
        Column 1
      </GridItem>
      <GridItem small={8}>Column 2</GridItem>
      <GridItem small={2}>Column 3</GridItem>
    </Grid>
  ))
  .add('Sizes', () => (
    <Grid>
      <GridItem small={2} medium={12} large={4} xlarge={4}>
        small=2 medium=12 large=4 xlarge=4
      </GridItem>
      <GridItem small={2} medium={6} large={4} xlarge={4}>
        small=2 medium=6 large=4 xlarge=4
      </GridItem>
      <GridItem small={2} medium={6} large={4} xlarge={4}>
        small=2 medium=6 large=4 xlarge=4
      </GridItem>
    </Grid>
  ));
