import React from "react";
import { storiesOf } from "@storybook/react";
import { Badge, BadgeAddon } from "./";

storiesOf("Badge", module)
  .add("Default", () => <Badge className={`dz-badge-primary`}>New</Badge>)
  .add("With addon", () => (
    <Badge className={`dz-badge-dark`}>
      <BadgeAddon className={`dz-badge-success-addon`}>
        <i className="fab fa-npm" />
      </BadgeAddon>
      npm install -s @dalenapps/dizzy
    </Badge>
  ));
