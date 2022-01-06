const COUNT_SHOTS = 10;
const readlineSync = require('readline-sync');

const countDigits = readlineSync.question('Выберите сложность (число от 3 до 6): ')

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

console.log(`Загадано число из ${countDigits} цифр. 
              Попробуйте его угадать!`);

const answerNumber = readlineSync.question('Ваш ответ: ');

