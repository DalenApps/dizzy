import React from 'react';
import { storiesOf } from '@storybook/react';
import { TabControl } from '../../';
import TabNav from './TabNav';
import TabNavItem from './TabNavItem';
import TabPane from './TabPane';
storiesOf('TabControl', module)
  .add('Default', () => (
    <TabControl>
      <TabNav>
        <TabNavItem />
        <TabNavItem />
      </TabNav>
      <TabPane>This is my tab</TabPane>
      <TabPane>This is my tab 1</TabPane>
    </TabControl>
  ))
  .add('Tabs Bottom', () => (
    <TabControl tabPosition="bottom">
      <TabNav>
        <TabNavItem />
        <TabNavItem />
      </TabNav>
      <TabPane>This is my tab</TabPane>
      <TabPane>This is my tab 1</TabPane>
    </TabControl>
  ))
  .add('Tabs Left', () => (
    <TabControl tabPosition="left">
      <TabNav>
        <TabNavItem />
        <TabNavItem />
      </TabNav>
      <TabPane>This is my tab</TabPane>
      <TabPane>This is my tab 1</TabPane>
    </TabControl>
  ))
  .add('Tabs Right', () => (
    <TabControl tabPosition="right">
      <TabNav>
        <TabNavItem />
        <TabNavItem />
      </TabNav>
      <TabPane>This is my tab</TabPane>
      <TabPane>This is my tab 1</TabPane>
    </TabControl>
  ));
