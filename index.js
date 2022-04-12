const sslChecker = require("ssl-checker")
const path = require("path");

async function main() {
  const pckg = require(path.join(__dirname, "package.json"))
  const app = Object.keys(pckg.bin)[0]
  // https://www.npmjs.com/package/yargs
  const { argv } = require("yargs")
    .option("hostname", {
      alias: "h",
      type: "string",
      description: "Hostname",
    })
    .option("property", {
      alias: "p",
      type: "string",
      description:
        "Property (daysRemaining, valid, validFrom, validTo, validFor)",
    })
    .usage(`Usage: ${app} `)
    .epilog(
      ["https://art-ws.com", pckg.description ?? "", "Copyright 2022"].join(", ")
    )
    .example(`${app} google.com daysRemaining`, "")

  const hostname = argv.hostname || argv._[0]
  if (hostname) {
    const prop = argv.hostname || argv._[1]
    const info = await sslChecker(hostname)
    if (prop) {
      console.log(info[prop])
    } else {
      console.log(JSON.stringify(info))
    }
  }
}

module.exports = {
  main
}

