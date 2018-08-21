import React from "react";
import { storiesOf } from "@storybook/react";
import CodePreview from "./CodePreview/CodePreview";

const Code = () => (
  <pre>{` 
  .dz-code-preview-footer {
    min-height: 20px;
    background-color: var(--blue-blue);
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    font-size: 12px;
    padding: 3px 10px;
    color: var(--white);
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
  }
`}</pre>
);

storiesOf("Code Previews", module)
  .add("Default", () => (
    <CodePreview>
      <Code />
    </CodePreview>
  ))
  .add("BitBucket", () => (
    <CodePreview provider="bitbucket" language="CSS">
      <Code />
    </CodePreview>
  ))
  .add("GitHub", () => (
    <CodePreview provider="github" language="CSS">
      <Code />
    </CodePreview>
  ));
