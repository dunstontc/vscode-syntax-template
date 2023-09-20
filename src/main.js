const { buildAsync } = require("./build")

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
