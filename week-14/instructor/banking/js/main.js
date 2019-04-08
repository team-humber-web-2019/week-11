// Opening balance
let balance = 0;

// Define a transaction function
let doTransaction = (note = `Current balance`, amount = 0) => {
  balance += amount;
  document.getElementById('transactions').innerHTML += `
    <li>
      <div><em>${note}</em></div>
      <div>$ ${amount}</div>
      <div><strong>$ ${balance}</strong></div>
    </li>
  `;
};

// Complete some transactions
doTransaction();
doTransaction('Grammas birthday gift', 50);
doTransaction('Dog food', -20);
doTransaction('Air Pods', -75);   // Woops!! Overdraft!