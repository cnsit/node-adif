const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function ask1st() {
  rl.question('First file path? ', (answer) => {
    console.log(`loading: ${answer}`);
    if (answer === 'quit') {
      rl.close();
    } else {
      try {
        const data = fs.readFileSync(answer);
        console.log(data.toString());
        rl.close();
      } catch (err) {
        console.log(err.message);
        ask1st();
      }
    }
  });
}
//ask1st();
rl.setPrompt('file:');
rl.prompt();
rl.on('line', (input) => {
  console.log(`Received: ${input}`);
  if (input === 'quit') {
    rl.close();
  } else {
    rl.setPrompt('reading...\n');
    rl.prompt();
    fs.readFile(input, (err, data) => {
      if (err) {
        console.log(err.message);
        rl.setPrompt('file:');
        rl.prompt();
      }
      if (data) {
        console.log(data.toString());
        rl.close();
      }
    });
  }
});

function removeDuplicates() {
  return [];
}
// filter FT8
function mergeSort(a, b) {
  // https://www.cnblogs.com/chengxiao/p/6194356.html
  //sort a
  //sort b
  //merge a & b with order into c
  //return c
}
