// save data to localstorage
function saveToStorageFn() {
  localStorage.setItem("transactionsArray ", JSON.stringify(transactionsArray ));
}

// displaying data
function display_allFn() {
  calcReturnValues();
  // getting references
  const balanceTotal = document.getElementById("balanceTotal");
  const incomeTotal = document.getElementById("incomeTotal");
  const expenseTotal = document.getElementById("expenseTotal");
  // display totals
  balanceTotal.innerHTML = "R" + balance;
  incomeTotal.innerHTML = "R" + debit;
  expenseTotal.innerHTML = "R" + credit;

  // display transactionsArray 
  const allTransaction = document.getElementById("allTransaction");
  allTransaction.innerHTML = "";

  // looping throough transactions/(objects) in the array
  for (let i = 0; i < transactionsArray .length; i++) {
    let transaction = transactionsArray [i];
    let styleClasses = "";

    if (transaction.type === "debit") {
      styleClasses = "transactionInc income-b";
    } else {
      styleClasses = "transactionExp expense-b";
    }

    allTransaction.innerHTML += `
    
    <div class="${styleClasses}">
                <div class="detail">${transaction.detail}</div>
                <div class="amount">R${transaction.amount}</div>
                <div class="action">
                    <i class="bi bi-trash" onclick="deleteFn(${i})"></i>
                </div>
            </div>
    
    
    `;
  }
}

// adding data to objects/(transactions)
function add_dataFn() {
  const txtDetail = document.getElementById("txtDetail");
  const txtAmount = document.getElementById("txtAmount");
  const txtType = document.getElementById("txtType");

  updateTransactionsArray(txtType.value, txtDetail.value, txtAmount.value);

  display_allFn();

  txtDetail.value = "";
  txtAmount.value = "";

  saveToStorageFn();
}

// deleting data by index position
function deleteFn(index) {
  removeTransaction(index);
  display_allFn();
  saveToStorageFn();
}

display_allFn();
