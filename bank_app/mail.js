class Account {
  constructor(accountNumber, ownerName, initialBalance) {
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    this.balance = initialBalance;
  }

  // deposit funds
  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposit of $${amount} successful. New balance: $${this.balance}`);
    } else {
      console.log('Invalid deposit amount. Please provide a positive value.');
    }
  }

  // withdraw funds
  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrawal of $${amount} successful. New balance: $${this.balance}`);
    } else {
      console.log('Insufficient funds or invalid withdrawal amount.');
    }
  }

  // account information
  displayInfo() {
    console.log(`Account Number: ${this.accountNumber}`);
    console.log(`Owner Name: ${this.ownerName}`);
    console.log(`Balance: $${this.balance}`);
  }
}

// Example usage:
const johnDoeAccount = new Account(1001, 'John Doe', 700);
johnDoeAccount.displayInfo(); 
johnDoeAccount.deposit(200); 
johnDoeAccount.withdraw(100); 
johnDoeAccount.displayInfo();
