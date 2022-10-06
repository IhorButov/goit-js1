/*const numbers = [1, 5, 7, 10, 12, 25, 40, 54, 28, 105, 70, 92, 17, 120, 57, 878, 95, 1 ];
let total = 0;
for (let i = 0; i < numbers.length; i +=1 ) {
  const number = numbers[i];
  console.log(number);
  if (number % 2 === 0) {console.log('Quant');
  total += number;
} 
}*/

/*for (const number of numbers) {
  console.log(number);
  if (number % 2 === 0) {console.log('4etnoe');
  total += number;
}
}
console.log('summa: ', total); */

const logins = ['fdfsdfsdf', 'fsfqdca', 'dgfsfgsfg', 'zooda', '4123ry']
const loginToFind = 'zooda';
let message = `Пользователь ${loginToFind} найден`;

/*for (let i = 0; i < logins.length; i += 1) {
  const login = logins[1];

  if (login === loginToFind) {
    message = `Пользователь ${loginToFind} найден`;
    break;
  }
  
}

for (const login of logins) {const login = logins[1];

  if (login === loginToFind) {
    message = `Пользователь ${loginToFind} найден`;
    break;
  }
  }*/
console.log(logins.includes('zooda'));