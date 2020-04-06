const fs = require("fs");// a node module for access files
fs.readdir(".", (err, filenames) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(filenames);
});
