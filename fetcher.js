const request = require('request');
const fs = require("fs");

const path = process.argv[3];
const domain = process.argv[2];

request(domain, (error, response, body) => {
  if (!process.argv[2] || !process.argv[3]) {
    console.log('Missing input args:', error)
  };

  if (error) {
    console.log('ERROR alert:', error);
  };

  fs.writeFile(`${path}`, body, function(error) {
    if (error) {
      console.log("ERROR alert:", error);
    } else {
      console.log(`Downloaded and saved ${response.headers["content-length"]} bytes to ${path}`);
    }
  });
});