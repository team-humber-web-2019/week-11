// Data set
const shoppingList = [
    { qty: 10, name: `Apples`, dept: `Produce` },       // 0
    { qty: 2, name: `Steaks`, dept: `Meat` },           // 1
    { qty: 4, name: `Bread Loafs`, dept: `Bakery` }     // 2
];

// Select all HTML elements that need to be modified
const eleItemList = document.getElementById(`itemList`);

// Write a function called printItem that takes an "index" as a argument and will add a <li> for the row requested

// Outputting to HTML
eleItemList.innerHTML += `<li>You need ${shoppingList[0].qty} ${shoppingList[0].name} from the ${shoppingList[0].dept} department</li>`;
eleItemList.innerHTML += `<li>You need ${shoppingList[1].qty} ${shoppingList[1].name} from the ${shoppingList[1].dept} department</li>`;
eleItemList.innerHTML += `<li>You need ${shoppingList[2].qty} ${shoppingList[2].name} from the ${shoppingList[2].dept} department</li>`;

