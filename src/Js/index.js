
class Bank {
  constructor() {
    this.balance = 0;
  }

  deposite(total) {
    this.balance += total;
  }

  withdraw(total) {
    if(total > this.balance) {
      console.log('Insufficent funds, cannot withdraw')
    } else {
      this.balance -= total;
    }
  }
}
