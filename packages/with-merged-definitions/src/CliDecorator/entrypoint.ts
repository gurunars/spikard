#!/usr/bin/env node

//import path from "path"

import { program } from "commander"
import { exec } from "child_process"


function collect(value: string, previous: string[]) {
  return previous.concat([value])
}

String.prototype.dropNewLine = function () {
  return this.replace(/(\r\n|\n|\r)/gm, "")
}

async function sh(cmd: string): Promise<{ stdout: string, stderr: string }> {
  return new Promise(function (resolve, reject) {
    exec(cmd, (err, stdout, stderr) => {
      if (err) {
        reject(err)
      } else {
        resolve({ stdout, stderr })
      }
    })
  })
}


// tslint:disable-next-line: only-arrow-functions
async function main() {
  program
    .option('-s, --sources <value>', 'files to be merged', collect, [])
    .option('-t, --target <value>', 'where to store results of the merge')

  const value = (await sh("npm prefix")).stdout.dropNewLine()

  console.log(value)

  program.parse(process.argv)

  //const mm = require.main
  //const appDir = path.dirname(mm ? mm.filename : "")
  console.log("sources: " + program.sources)
  console.log("target: " + program.target)
}

main()