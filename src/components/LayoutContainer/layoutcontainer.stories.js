import React from 'react';
import { storiesOf } from '@storybook/react';
import { LayoutContainer, Grid, GridItem } from '../../';
import { boolean } from '@storybook/addon-knobs';
storiesOf('LayoutContainer', module).add('Default', () => (
  <LayoutContainer narrow={boolean('Narrow/Fluid', false)}>
    <Grid>
      <GridItem xlarge={4}>Hello</GridItem>
      <GridItem xlarge={8}>Hello</GridItem>
      <GridItem xlarge={12}>Hello</GridItem>
    </Grid>
  </LayoutContainer>
));
