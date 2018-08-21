import React from "react";
import { storiesOf } from "@storybook/react";
import Input from "./Input";
storiesOf("Input", module).add("Default", () => <Input />).add("Small", () => <Input className="dz-input-control-small" />);
