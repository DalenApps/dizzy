import React from "react";
import { storiesOf } from "@storybook/react";
import StatusBox from './StatusBox';
storiesOf("StatusBox", module)
  .add("Default", () => <StatusBox/>);