import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { Modal, ModalHeader, ModalBody, ModalFooter } from '../../';

storiesOf('Modal', module).add('Default', () => (
  <Modal showOn={boolean('Show', false)}>
    <ModalHeader>This is the header</ModalHeader>
    <ModalBody>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dapibus
        risus nibh, at bibendum dolor maximus id. Donec quam ipsum, maximus
        laoreet porttitor a, rhoncus eu magna. Praesent varius luctus nibh
        ornare egestas. Suspendisse potenti. Pellentesque habitant morbi
        tristique senectus et netus et malesuada fames ac turpis egestas. In
        porttitor pretium nulla vel ullamcorper. Praesent faucibus cursus velit,
        ac pharetra neque laoreet in. Etiam eu vulputate felis. Nam vulputate
        dapibus enim in accumsan. Mauris vel risus id lectus dapibus aliquam nec
        non tellus. Nam laoreet justo eu arcu placerat, non placerat turpis
        gravida. Sed ipsum dui, vehicula ac ullamcorper vitae, aliquam iaculis
        quam. Vivamus nec magna elit. Mauris congue in elit sed vehicula. Morbi
        vel porta odio, quis hendrerit nibh. Aliquam eleifend turpis nulla, non
        imperdiet nibh rhoncus non.
      </p>
    </ModalBody>
    <ModalFooter>This is the footer</ModalFooter>
  </Modal>
));
