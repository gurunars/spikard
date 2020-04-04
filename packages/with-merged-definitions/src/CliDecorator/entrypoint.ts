#!/usr/bin/env node

var path = require('path')

var mm = require.main

var appDir = path.dirname(mm ? mm.filename : "")

// tslint:disable-next-line: only-arrow-functions
export default function main() {
  console.log("here " + appDir)
}

main()