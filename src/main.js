const { buildAsync } = require("./build")

const red   = (s) => s
const green = (s) => s

async function main() {
    await buildAsync()
}

(async () => {
    main()
        .then(() => {
            console.log(`[${green("main")}] clean exit`)
            process.exit(0)
        })
        .catch((error) => {
            console.error(error)
            process.exit(1)
        })
})()
