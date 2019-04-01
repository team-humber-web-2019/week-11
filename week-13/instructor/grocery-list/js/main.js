// Grocery data:

// 1. Turn this into an object variable named: item1
let item1qty = 10;
let item1name = `Apples`;
let item1department = `Produce`;

let item1 = {
    qty: 10,
    name: `Apples`,
    dept: `Produce`
};

// 2. Create three of them (item1, item2, item3) in total: Apple, Steak, Bread

let item2 = { 
    qty: 2, 
    name: `Steaks`, 
    dept: `Meat`
};

let item3 = {
    qty: 4,
    name: `Bread Loafs`,
    dept: `Bakery`
};

// 3. Add the three item variables you define to an Array: shoppingList
// let shoppingList = [
//     item1,
//     item2,
//     item3
// ];

const shoppingList = [
    { qty: 10, name: `Apples`, dept: `Produce` },       // 0
    { qty: 2, name: `Steaks`, dept: `Meat` },           // 1
    { qty: 4, name: `Bread Loafs`, dept: `Bakery` }     // 2
];


// 4. Create 3 <li> in HTML document using Javascript by changing the variables to reflect the new data structure you created, then assigning each of the three strings to the appropriate property of the designated element in HTML

const eleItem1 = document.getElementById(`item1`);
const eleItem2 = document.getElementById(`item2`);
const eleItem3 = document.getElementById(`item3`);


eleItem1.innerHTML = `You need ${shoppingList[0].qty} ${shoppingList[0].name} from the ${shoppingList[0].dept} department`;
eleItem2.innerHTML = `You need ${shoppingList[1].qty} ${shoppingList[1].name} from the ${shoppingList[1].dept} department`;
eleItem3.innerHTML = `You need ${shoppingList[2].qty} ${shoppingList[2].name} from the ${shoppingList[2].dept} department`;


// Note for #4: There are better ways to complete that task. Think back to last week!