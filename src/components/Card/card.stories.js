import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  Card,
  CardHeader,
  CardTools,
  CardFooter,
  CardBody,
  Button
} from '../../';
const demoBody = (
  <CardBody>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dapibus risus
    nibh, at bibendum dolor maximus id. Donec quam ipsum, maximus laoreet
    porttitor a, rhoncus eu magna. Praesent varius luctus nibh ornare egestas.
    Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus
    et malesuada fames ac turpis egestas. In porttitor pretium nulla vel
    ullamcorper. Praesent faucibus cursus velit, ac pharetra neque laoreet in.
    Etiam eu vulputate felis. Nam vulputate dapibus enim in accumsan. Mauris vel
    risus id lectus dapibus aliquam nec non tellus. Nam laoreet justo eu arcu
    placerat, non placerat turpis gravida. Sed ipsum dui, vehicula ac
    ullamcorper vitae, aliquam iaculis quam. Vivamus nec magna elit. Mauris
    congue in elit sed vehicula. Morbi vel porta odio, quis hendrerit nibh.
    Aliquam eleifend turpis nulla, non imperdiet nibh rhoncus non.
  </CardBody>
);
storiesOf('Card', module)
  .add('Default', () => <Card>{demoBody}</Card>)
  .add('With header', () => (
    <Card>
      <CardHeader title="Header" />
      {demoBody}
    </Card>
  ))
  .add('With header tools', () => (
    <Card>
      <CardHeader title="Header">
        <CardTools>
          <Button variant="success">Action</Button>
        </CardTools>
      </CardHeader>
      {demoBody}
    </Card>
  ))
  .add('With footer', () => (
    <Card>
      <CardHeader title="Header">
        <CardTools>
          <Button variant="success">Action</Button>
        </CardTools>
      </CardHeader>
      {demoBody}
      <CardFooter>
        <Button>
          <i className="fas fa-save" />
          Save
        </Button>
      </CardFooter>
    </Card>
  ))
  .add('With colored top', () => (
    <Card bordered variant="primary">
      <CardHeader title="Header">
        <CardTools>
          <Button variant="success">Action</Button>
        </CardTools>
      </CardHeader>
      {demoBody}
      <CardFooter>
        <Button>
          <i className="fas fa-save" />
          Save
        </Button>
      </CardFooter>
    </Card>
  ))
  .add('Filled header', () => (
    <Card filled variant="primary">
      <CardHeader title="Header">
        <CardTools>
          <Button variant="success">Action</Button>
        </CardTools>
      </CardHeader>
      {demoBody}
      <CardFooter>
        <Button>
          <i className="fas fa-save" />
          Save
        </Button>
      </CardFooter>
    </Card>
  ));
