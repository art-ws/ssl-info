#!/usr/bin/env node

const { main } = require("../main.js")

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
