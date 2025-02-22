const { createInterface } = require('readline');


const readline = createInterface({
  input: process.stdin,
  output: process.stdout
});

async function readLineAsync (msg) {
  return new Promise(resolve => {
    readline.question(msg, userRes => {
      resolve(userRes);
    });
  });
}

module.exports = { readLineAsync, readline };