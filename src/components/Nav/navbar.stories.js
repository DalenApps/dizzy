import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  NavBar,
  NavBrand,
  NavMenu,
  NavItem,
  BrandImage,
  NavUserItem,
  NavUserDropdown,
  NavUserDropdownItem
} from '../../';
const logo = 'http://placehold.it/100x50';
storiesOf('NavBar', module)
  .add('Brand Name', () => (
    <NavBar>
      <NavBrand to={'#'}>Dalen Apps</NavBrand>
    </NavBar>
  ))
  .add('Brand Image', () => (
    <NavBar>
      <NavBrand to={'#'}>
        <BrandImage src={logo} />
      </NavBrand>
    </NavBar>
  ))
  .add('With Menu', () => (
    <NavBar>
      <NavBrand to={'#'}>
        <BrandImage src={logo} />
      </NavBrand>
      <NavMenu>
        <NavItem>Services</NavItem>
        <NavItem>About</NavItem>
        <NavItem active={true}>Contact</NavItem>
      </NavMenu>
    </NavBar>
  ))
  .add('With User Menu', () => (
    <NavBar>
      <NavBrand to={'#'}>
        <BrandImage src={logo} />
      </NavBrand>
      <NavMenu>
        <NavItem>Services</NavItem>
        <NavItem active={true}>About</NavItem>
        <NavItem>Contact</NavItem>
        <NavUserItem avatar={'https://placehold.it/100x100'}>
          <React.Fragment>Dizzy Admin</React.Fragment>
          <NavUserDropdown>
            <NavUserDropdownItem label="Profile" icon="user" />
            <NavUserDropdownItem label="Sign out" icon="sign-out-alt" />
          </NavUserDropdown>
        </NavUserItem>
      </NavMenu>
    </NavBar>
  ))
  .add('Using viewport', () => (
    <NavBar useViewPort>
      <NavBrand to={'#'}>
        <BrandImage src={logo} />
      </NavBrand>
      <NavMenu>
        <NavItem>Services</NavItem>
        <NavItem active={true}>About</NavItem>
        <NavItem>Contact</NavItem>
        <NavUserItem avatar={'https://placehold.it/100x100'}>
          <React.Fragment>Dizzy Admin</React.Fragment>
        </NavUserItem>
      </NavMenu>
    </NavBar>
  ));
