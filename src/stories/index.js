import React from "react";
import { addDecorator, configure } from "@storybook/react";

// Add a decorator to center all of our items.
const styles = {
  width: "800px",
  margin: "auto",
  marginTop: "20px",
};
const CenterDecorator = storyFn => <div style={styles}>{storyFn()}</div>;
addDecorator(CenterDecorator);

//Load all stories from files with the .stories.js extension.
const req = require.context("../components", true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}
// Add our loaded stories.
configure(loadStories, module);
