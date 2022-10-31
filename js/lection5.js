const Transactions = {
	DEPOSIT: 'deposit',
	WITHDRAW: 'withdraw',
};

const account = {
	balance: 0,

	transactions: [],

	creatTransaction(amount, type) {
		this.transactions.push({
			amount,
			type,
		});
	},

	deposit(amount) {
		this.balance += amount;
	},

	withdraw(amount) {
		this.balance -= amount;
	},

	getBalance() {
		return this.balance;
	},


}

account.deposit(1000);