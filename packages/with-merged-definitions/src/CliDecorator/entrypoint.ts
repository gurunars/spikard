#!/usr/bin/env node

import path from "path"

// tslint:disable-next-line: only-arrow-functions
export default function main() {
  const mm = require.main
  const appDir = path.dirname(mm ? mm.filename : "")
  console.log("here " + appDir)
}

main()