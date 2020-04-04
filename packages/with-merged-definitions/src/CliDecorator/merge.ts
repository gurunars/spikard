import * as baseMerge from "deepmerge"
import * as fs from "fs"
import * as path from "path"
import * as os from "os"


function read(source: string): Promise<object> {
  return JSON.parse((fs.readFileSync(source)).toString())
}


function write(target: string, value: object) {
  fs.writeFileSync(target, JSON.stringify(value))
}

function resolveHome(filePath: string) {
  if (filePath.length == 0) {
    return ''
  }
  // '~/folder/path' or '~'
  if (filePath[0] === '~' && (filePath[1] === '/' || filePath.length === 1)) {
    return filePath.replace('~', os.homedir())
  }
  return filePath
}

function mergeFiles(sourcePaths: string[], targetPath: string) {
  write(
    resolveHome(targetPath),
    baseMerge.all(sourcePaths.map(read))
  )
}
