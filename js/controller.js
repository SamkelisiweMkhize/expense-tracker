// array that holds all transactions
let transactionsArray = [];
let balance = 0;
let debit = 0;
let credit = 0;

// add new transaction to transactionsArray 
function updateTransactionsArray(type, detail, amount) {
  // generate the current date and time
  const date = new Date();
  const id = Date.now();

  if (amount < 1 || !amount || !detail || detail.trim().length < 1) {
    alert("Provide the right values");
    throw new error("Provide the right values");
  }

  if (type == "credit" && amount > balance) {
    alert("credit amount cannot be more than Balance");
    throw new error("credit amount cannot be more than Balance");
  }

  transactionsArray .push({ id, type, detail, amount, date });
}

// calculate function that return an object {balance, debit, credit}
function calcReturnValues() {
  debit = 0;
  credit = 0;
  balance = 0;

  for (let i = 0; i < transactionsArray .length; i++) {
    let transaction = transactionsArray [i];

    if (transaction.type == "credit") {
      credit += Number(transaction.amount);
    }

    if (transaction.type == "debit") {
      debit += Number(transaction.amount);
    }
  } 

  balance = debit - credit;

  return { balance, debit, credit };
}

// delete function
function removeTransaction(index) {
  if (typeof index !== "number") {
    alert("Index should be a number");
    throw new Error("Index should be a number");
  }
  transactionsArray .splice(index, 1);
}

// export
module.exports = {
  transactionsArray ,
  updateTransactionsArray,
  calcReturnValues,
  balance,
  debit,
  credit,
  removeTransaction,
};
