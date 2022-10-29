/* =>
 Example 4 - Комплексные задачи
 Напиши скрипт управления личным кабинетом интернет банка.
 Есть объект account в котором необходимо реализовать
 методы для работы с балансом и историей транзакций.


 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
 const Transaction = {
 	DEPOSIT: "deposit",
 	WITHDRAW: "withdraw",
 };

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

 const account = {
 	 //Текущий баланс счета
 	balance: 0,

 	 //История транзакций
 	transactions: [],

 	/*
 	 * Метод создает и возвращает объект транзакции.
 	 * Принимает сумму и тип транзакции.
 	 */
 	createTransaction(amount, type) {
 		const newTransaction = {
 			id: `${type}__${this.transactions.length + 1}`,
 			type,
 			amount,
 		};

 		this.transactions.push(newTransaction);

 		return newTransaction;
 	},

 	/*
 	 * Метод отвечающий за добавление суммы к балансу.
 	 * Принимает сумму танзакции.
 	 * Вызывает createTransaction для создания объекта транзакции
 	 * после чего добавляет его в историю транзакций
 	 */
 	deposit(amount) {
 		this.createTransaction(amount, Transaction.DEPOSIT);
 		this.balance += amount;
 	},

 	/*
 	 * Метод отвечающий за снятие суммы с баланса.
 	 * Принимает сумму танзакции.
 	 * Вызывает createTransaction для создания объекта транзакции
 	 * после чего добавляет его в историю транзакций.
 	 *
 	 * Если amount больше чем текущий баланс, выводит сообщение
 	 * о том, что снятие такой суммы не возможно, недостаточно средств.
 	 */
 	withdraw(amount) {
 		this.createTransaction(amount, Transaction.WITHDRAW);

 		if (amount > this.balance) console.log("You don't have anough money!");
 		else this.balance -= amount;
 	},

 	/*
 	 * Метод возвращает текущий баланс
 	 */
 	getBalance() {
 		return this.balance;
 	},

 	/*
 	 * Метод ищет и возвращает объект транзации по id
 	 */
 	getTransactionDetails(id) {
 		for (const transaction of this.transactions) {
 			if (transaction.id === id) return transaction;
 		}
 	},

 	/*
 	 * Метод возвращает количество средств
 	 * определенного типа транзакции из всей истории транзакций
 	 */
 	getTransactionTotal(type) {
 		let total = 0;

 		for (const transaction of this.transactions) {
 			if (transaction.type === type) total += transaction.amount;
 		}

 		return total;
 	},
 };

 account.deposit(1000);

 console.log(account.getBalance());

 account.deposit(40000);

 console.log(account.getBalance());

 console.log(account.transactions);

 //2 weeks

 account.withdraw(15000);
 account.withdraw(2000);
 account.withdraw(10000);
 account.withdraw(14000); //ZSY

 console.log(account.getBalance());
 console.log(account.getTransactionTotal(Transaction.WITHDRAW));

 /*transaction
 {
  amount: 1000,
  type: Transaction.DEPOSIT,
 }*/