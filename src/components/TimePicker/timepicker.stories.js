import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { TimePicker, Badge } from '../../';
const footer = <Badge className="dz-badge-primary">Custom footer</Badge>;
storiesOf('TimePicker', module).add('Default', () => (
  <TimePicker
    footerComponent={() => footer}
    closeOnFocusLost={boolean('closeOnFocusLost', true)}
    disabled={boolean('disabled', false)}
    defaultHourStep={number('defaultHourStep', 1)}
    defaultMinuteStep={number('defaultMinuteStep', 1)}
    defaultSecondStep={number('defaultSecondStep', 1)}
    use24Hour={boolean('use24Hour', false)}
    format={text('format', 'h:mm:ss A')}
    showHeaders={boolean('showHeaders', true)}
    hrsEnabled={boolean('hrsEnabled', true)}
    minEnabled={boolean('minEnabled', true)}
    secEnabled={boolean('secEnabled', true)}
    onChange={() => action('onChange')}
  />
));
