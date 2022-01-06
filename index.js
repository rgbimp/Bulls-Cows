const COUNT_SHOTS = 10;
const readlineSync = require('readline-sync');

let countDigits = readlineSync.question('---------------\nSelect number from 3 to 6: \n')
while (countDigits > 6 || countDigits < 3) {
  console.log('Incorrect number!!!\n---------------\n')
  countDigits = readlineSync.question('Select number from 3 to 6: \n')
}

const createHiddenNumber = (countDigits) => {
  let arr = [];
  let a = Math.floor(Math.random() * 10);
  for (let i = 0; i < countDigits; i++) {
    while (arr.includes(a)) {
      a = Math.floor(Math.random() * 10);
    }
    arr.push(a);
  }
  return arr;
};

const hiddenNumber = createHiddenNumber(countDigits);

console.log(`---------------\nTry to guess the number of ${countDigits} digits. \nThe digits aren't repeated!`);

let answerNumber = readlineSync.question('Your answer: ').split('').map(item => +item);
while (answerNumber.length != hiddenNumber.length) {
  console.log('Incorrect amount of digits in the number!!!')
  answerNumber = readlineSync.question('Your answer: ').split('').map(item => +item);
}

