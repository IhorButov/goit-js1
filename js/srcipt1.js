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
/*for (const login of logins) {
  if (login === loginToFind) {message = `Юзер ${loginToFind} найден`;
  break;
}
  message = `Юзер ${loginToFind} не найден`;
}
console.log('Поиск логина: ', message);*/
const findLogin = function (allLogins, loginToFind) {
  console.log(logins);
  console.log(loginToFind);
}
console.log(findLogin(logins, 'qetrrt'));
console.log(findLogin(logins, 'doose'));
console.log(findLogin(logins, 'qetyb'));
console.log(findLogin(logins, 'rtt'));


/*поиск самого маленького числа в массиве*/
const littleNumbers = [51,18,13,24,7,1, 85,19];
let smallestNumber = littleNumbers[0];
for (const littleNumber of littleNumbers) {
  if (littleNumber < smallestNumber) {
    smallestNumber = littleNumber
  }
}
console.log('самое маленькое число: ', smallestNumber);
/*function принимает массив цен(чисел) и возвращает их сумму*/
/*const cart = [54,28,105,70,92,17,120,12,25,90];
let cartTotal = 0;
for (const value of cart) {
  total += value;
}
console.log(total)*/ 

const calculateTotalPrice = function (items) {
  console.log('items inside function: ', items);

  let total = 0;

for (const item of items) {
  total += item;
}
return total
}

console.log(calculateTotalPrice([1,2,3]));
console.log(calculateTotalPrice([5,10,15,20]));
console.log(calculateTotalPrice([100,200,300]));