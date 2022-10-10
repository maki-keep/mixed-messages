const messages = require('./messages');

function getRandom(length) {
  return Math.floor(Math.random() * length);
}

function main() {
  const { length } = messages;
  const index1 = getRandom(length);
  const index2 = getRandom(length);
  const message1 = messages[index1].part1;
  const message2 = messages[index2].part2;
  console.log(`${message1}${message2}!`);
  if (index2 === index1) {
    console.log(`${messages[index1].who} has spoken!`);
  }
}

main();
