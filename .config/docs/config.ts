import { configure } from "@storybook/react"

const req = require.context("../../src", true, /story\.tsx$/)

configure(() => req.keys().forEach(req), module)