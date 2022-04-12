#!/usr/bin/env node

const { main } = require("./index.js")

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
