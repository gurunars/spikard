import { configure } from "@storybook/react"

const req = require.context("../../packages", true, /story\.tsx$/)

configure(() => req.keys().forEach(req), module)