#!/usr/bin/env node

//import path from "path"

//import baseMerge from "deepmerge"
import fs from "fs"
//import os from "os"

import { program } from "commander"
import { exec } from "child_process"


function collect(value: string, previous: string[]) {
  return previous.concat([value])
}
function dropNewLine(value: string) {
  return value.replace(/(\r\n|\n|\r)/gm, "")
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


async function read(source: string): Promise<object> {
  return JSON.parse((await fs.promises.readFile(source)).toString())
}

async function getSpec(): Promise<object> {
  return read(dropNewLine((await sh("npm prefix")).stdout) + "/package.json")
}

/*
const write = (target: string, value: object) =>
  fs.writeFileSync(target, JSON.stringify(value))

const resolveHome = (filePath: string) => {
if (filePath.length === 0) {
  return ""
}
// '~/folder/path' or '~'
if (filePath[0] === "~" && (filePath[1] === "/" || filePath.length === 1)) {
  return filePath.replace("~", os.homedir())
}
return filePath
}

const mergeFiles = (sourcePaths: string[], targetPath: string) =>
write(
  resolveHome(targetPath),
  baseMerge.all(sourcePaths.map(read))
)
*/

// tslint:disable-next-line: only-arrow-functions
async function main() {
  program
    .option('-s, --sources <value>', 'files to be merged', collect, [])
    .option('-t, --target <value>', 'where to store results of the merge')

  const spec = await getSpec()

  console.log(spec)

  program.parse(process.argv)

  //const mm = require.main
  //const appDir = path.dirname(mm ? mm.filename : "")
  console.log("sources: " + program.sources)
  console.log("target: " + program.target)
}

main()