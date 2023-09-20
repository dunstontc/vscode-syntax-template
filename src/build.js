const fs = require("fs/promises")
const path = require("path")

const coolkit = require("coolkit-js")
const fixJson = require("fixjson")
const _ = require("lodash")

const PROJECT_ROOT = process.cwd()

const DEFS_FOLDER = path.join(PROJECT_ROOT, "src", "definitions")

const buildAsync = async () => {
    const files = coolkit.readFolder(DEFS_FOLDER, true)

    const definitions = []

    for (const filePath of files) {
        const buffer = await fs.readFile(filePath)
        const string = buffer.toString()
        const cleanString = fixJson.fixString(string)
        const json = JSON.parse(cleanString)
        definitions.push(json)
    }

    const merged = _.merge({}, ...definitions)

    console.log(JSON.stringify(merged, null, 4))
}

module.exports = {
    buildAsync,
}
