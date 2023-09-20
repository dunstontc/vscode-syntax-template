const fs = require("fs")
const path = require("path")
const coolkit = require("coolkit-js")

const red = (s) => s
const green = (s) => s

const PROJECT_ROOT = process.cwd()

const DEFS_FOLDER = path.join(PROJECT_ROOT, "src", "definitions")

const buildAsync = async () => {
    const files = coolkit.readFolder(DEFS_FOLDER, true)
    console.log(files)
}

module.exports = {
    buildAsync,
}
