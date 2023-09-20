const fs = require("fs/promises")
const path = require("path")

const coolkit = require("coolkit-js")
const fixJson = require("fixjson")
const _ = require("lodash")

// const { isBlankDeep } = require("./util")

const PROJECT_ROOT  = process.cwd()
const DEFS_FOLDER   = path.join(PROJECT_ROOT, "src", "definitions")
const OUT_FILE_PATH = path.join(PROJECT_ROOT, "syntaxes", "tabs.tmLanguage.json")

const buildAsync = async () => {
    const files = coolkit.readFolder(DEFS_FOLDER, true)

    const definitions = []

    for (const filePath of files) {
        const buffer = await fs.readFile(filePath)
        const string = buffer.toString()
        const cleanString = fixJson.fixString(string)
        const json = JSON.parse(cleanString)
        // if (!isBlankDeep(json)) {
        //     definitions.push(json)
        // }
        definitions.push(json)
    }

    const merged = _.merge({}, ...definitions)

    await coolkit.writeJsonFile(OUT_FILE_PATH, merged)
}

module.exports = {
    buildAsync,
}
