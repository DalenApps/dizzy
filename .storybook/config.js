import { configure } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";

setOptions({
  name: "Dizzy",
  url: "https://dalenapps.no",
});

function loadStories() {
  require("../src/stories");
}

configure(loadStories, module);
