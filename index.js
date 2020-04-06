#!/usr/bin/env node
const fs = require("fs"); // a node module for access files
fs.readdir(process.cwd(), (err, filenames) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(filenames);
});
