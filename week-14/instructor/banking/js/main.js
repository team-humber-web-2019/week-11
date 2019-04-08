// Opening balance
let balance = 0;

// Define a transaction function
let doTransaction = (note = `Current balance`, amount = 0) => {
  // Check that we have enough money BEFORE we transact

  let makeRed = ``;

  if ((balance + amount) >= 0) {  // The statement is good!
    balance += amount;
  }
  else {
    note = `Insufficient funds: ${note}`;
    makeRed = ` style="color:red;"`;
  }


  // Print as planned
  document.getElementById('transactions').innerHTML += `
    <li>
      <div><em>${note}</em></div>
      <div${makeRed}>$ ${amount}</div>
      <div><strong>$ ${balance}</strong></div>
    </li>
  `;

};

// Complete some transactions
doTransaction();
doTransaction('Grammas birthday gift', 50);
doTransaction('Dog food', -20);
doTransaction('Air Pods', -75);   // Woops!! Overdraft!