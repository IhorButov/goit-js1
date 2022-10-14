//посчитать сумму нечетных чисел в массиве//
const numbers = [111,5,8,9,12,44,15,27,38,18,11];
let total = 0;
for (const number of numbers) {
  if (number % 2 !== 0) {
    total += number;
  }
}
console.log('сумму нечетных чисел: ', total);

/*Поиск логина - 
логина нет - Юзер [логин] не найден
логина есть - Юзер [логин] найден*/
const logins = ['dgsdgsd', 'doose', 'apoi1', 'rtt'];
const loginToFind = 'doose';
let message = '';

for (const login of logins) {
  if (login === loginToFind) {message = `Юзер ${loginToFind} найден`;
  break;
}
  message = `Юзер ${loginToFind} не найден`;
}
console.log('Поиск логина: ', message);
/*поиск самого маленького числа в массиве*/
const littleNumbers = [51,18,13,24,7,1, 85,19];
let smallestNumber = littleNumbers[0];
for (const littleNumber of littleNumbers) {
  if (littleNumber < smallestNumber) {
    smallestNumber = littleNumber
  }
}
console.log('самое маленькое число: ', smallestNumber);

const add = function (x, y) {
  console.log(x);
  console.log(y);
  console.log('doing of function add');
}
const r1 = add(5, 7)
console.log(r1);

const r2 = add(0, 2)
console.log(r2);