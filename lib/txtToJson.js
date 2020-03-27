const fs = require("fs");
const readline = require("readline");

const txtToJson = file => {
  return new Promise((resolve, reject) => {
    const stream = fs.createReadStream(file);
    // Handle stream error (IE: file not found)
    stream.on("error", reject);

    const reader = readline.createInterface({
      input: stream
    });

    const array = [];

    reader.on("line", line => {
        try{
            array.push(JSON.parse(line));
        }catch(err){
            console.log({err});
        }
    });

    reader.on("close", () => resolve(array));
  });
}

module.exports = txtToJson;
