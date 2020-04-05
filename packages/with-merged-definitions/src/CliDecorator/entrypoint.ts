#!/usr/bin/env node

//import path from "path"

//import baseMerge from "deepmerge"
import fs from "fs"
//import os from "os"

import { program } from "commander"
import { exec } from "child_process"


const dropNewLine = (value: string) => value.replace(/(\r\n|\n|\r)/gm, "")

const sh = async (cmd: string): Promise<{ stdout: string, stderr: string }> =>
  new Promise(function (resolve, reject) {
    exec(cmd, (err, stdout, stderr) => {
      if (err) {
        reject(err)
      } else {
        resolve({ stdout, stderr })
      }
    })
  })


const read = async (source: string): Promise<object> =>
  JSON.parse((await fs.promises.readFile(source)).toString())

const getPrefix = async (): Promise<string> =>
  dropNewLine((await sh("npm prefix")).stdout)

const getSpec = async (): Promise<object> =>
  read((await getPrefix()) + "/package.json")

type Config = {
  sources: string[],
  target: string
}

const getConfig = async (): Promise<Config | null> => {
  const config = await getSpec()["mergeSpec"]
  if (!config || !config.sources || !config.target) {
    return null
  }
  return config as Config
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
  const config = await getConfig()
  if (!config) {
    return
  }

  console.log(config)

  program.parse(process.argv)

  //const mm = require.main
  //const appDir = path.dirname(mm ? mm.filename : "")
  console.log("sources: " + config.sources)
  console.log("target: " + config.target)
}

main()