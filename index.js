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

console.log(`---------------
Try to guess the number of ${countDigits} digits. 
The digits aren't repeated!
You have ${COUNT_SHOTS} shots.`);

let isWin = true;

for (let i = 0; i < COUNT_SHOTS; i++) {
  let answerNumber = readlineSync.question('Your answer: ').split('').map(item => +item);
  while (answerNumber.length != hiddenNumber.length) {
    console.log('Incorrect amount of digits in the number!!!')
    answerNumber = readlineSync.question('Your answer: ').split('').map(item => +item);
  }
  let bulls = 0;
  let cows = 0;

  if (hiddenNumber.join('') === answerNumber.join('')) {
      isWin = true;
      break;
  } else {
    answerNumber.forEach((item, index) => {
      if (hiddenNumber.includes(item)) {
        (index === hiddenNumber.indexOf(item)) ? bulls++ :  cows++;
      }
    })
    isWin = false;
    console.log(`Amount of matching digits in their places: ${bulls}
Amount of matching digits in the wrong places: ${cows}
Try again! You have ${COUNT_SHOTS - 1 - i} shots left`)
  }
}

(isWin) 
  ? console.log(`Number was guessed!\nYOU WIN!`)
  : console.log(`The shots are over.\n You lose:(`)
console.log('---------------')