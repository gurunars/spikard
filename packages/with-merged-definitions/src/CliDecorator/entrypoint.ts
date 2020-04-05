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

type Config = {
  sources: string[],
  target: string
}

async function getConfig(): Promise<Config | null> {
  return (await getSpec())["mergeSpec"] as (Config | null)
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

async function main() {
  program
    .option('-s, --sources <value>', 'files to be merged', collect, [])
    .option('-t, --target <value>', 'where to store results of the merge')

  const config = await getConfig()

  console.log(config)

  program.parse(process.argv)

  //const mm = require.main
  //const appDir = path.dirname(mm ? mm.filename : "")
  console.log("sources: " + program.sources)
  console.log("target: " + program.target)
}

main()