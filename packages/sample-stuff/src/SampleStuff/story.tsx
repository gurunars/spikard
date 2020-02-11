import { action } from "@storybook/addon-actions"
import { storiesOf } from "@storybook/react"
import React from "react"
import { host } from "storybook-host"

import SampleStuff from "../SampleStuff"

storiesOf("SampleStuff", module)
  .addDecorator(host({
    align: "center middle",
    height: 600,
    width: 800,
  }))
  .add("basic", () => (
    <SampleStuff
      title="Sample Title"
      onClick={action("onClick")}
    />
  ))
