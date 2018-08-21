import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button from "./Button";

storiesOf("Button", module)
  .add("Default", () => <Button onClick={action("clicked")}>Add Text</Button>)
  .add("Normal with icon", () => (
    <Button href="" onClick={action("clicked")}>
      <i className="fas fa-plus" />
      Add Text
    </Button>
  ))
  .add("Normal with only icon", () => (
    <Button onClick={action("clicked")} className="icon-only">
      <i className="fas fa-plus" />
    </Button>
  ))
  .add("Outlined", () => (
    <Button onClick={action("clicked")} className="button-outline">
      Add Outline
    </Button>
  ))
  .add("Outlined with icon", () => (
    <Button onClick={action("clicked")} className="button-outline icon-only">
      <i className="fas fa-plus" />
    </Button>
  ))
  .add("Text only", () => (
    <Button onClick={action("clicked")} className="button-link">
      Go here
    </Button>
  ))
  .add("Icon only", () => (
    <Button onClick={action("clicked")} className="button-link icon-only">
      <i className="fas fa-plus" />
    </Button>
  ))
  .add("Rounded", () => (
    <Button onClick={action("clicked")} className="button-rounded">
      Go here
    </Button>
  ))
  .add("Different colors", () => (
    <div>
      <Button href="" onClick={action("clicked")}>
        Primary
      </Button>
      <Button onClick={action("clicked")} className="button-success">
        Success
      </Button>
      <Button href="" onClick={action("clicked")} className="button-warning">
        Warning
      </Button>
      <Button href="" onClick={action("clicked")} className="button-danger">
        Danger
      </Button>
      <Button href="" onClick={action("clicked")} className="button-purple">
        Purple
      </Button>
      <Button href="" onClick={action("clicked")} className="button-dark">
        Dark
      </Button>
    </div>
  ))
  .add("Sizes", () => (
    <div>
      <Button href="" onClick={action("clicked")} className="button-small">
        Small
      </Button>
      <Button href="" onClick={action("clicked")}>
        Default
      </Button>
      <Button href="" onClick={action("clicked")} className="button-large">
        Large
      </Button>
    </div>
  ));
