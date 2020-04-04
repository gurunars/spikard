import * as baseMerge from "deepmerge"
import * as fs from "fs"


function read(source: string): Promise<object> {
  return JSON.parse((fs.readFileSync(source)).toString())
}


function write(target: string, value: object) {
  fs.writeFileSync(target, JSON.stringify(value))
}

function mergeFiles(sourcePaths: string[], targetPath: string) {
  write(targetPath, baseMerge.all(sourcePaths.map(read)))
}
