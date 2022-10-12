//посчитать сумму нечетных чисел в массиве//
const numbers = [111,5,8,9,12,44,15,27,38,18,11];
let total = 0;
for (const number of numbers) {
  if (number % 2 !== 0) {
    total += number;
  }
}
console.log(total);

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
console.log(message);