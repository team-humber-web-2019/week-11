/* Things we wrote down to consider:
pieces
board -> properties
bank
chancecards
buildings
dice
users*/

let bank = 12000;       // Bank's balance
let turn = 1;           // Who's turn is it? (used id)

const user = [
    { id: 1, name: `Rocco`,        position: 0, money: 1500, piece: `dog` },
    { id: 2, name: `Another User`, position: 0, money: 1500, piece: `hat` },
];

const properties = [
    { pos: 0, name: "Go",                family: 'go',    value: 200,  house: 0,  hotels: 0,   owned: false },
    { pos: 1, name: "Mediterranean Ave", family: 'brown', value: 60,   house: 50, hotels: 200, owned: {user:1, house: 1, hotel: 0} },
    { pos: 2, name: "Community Chest",   family: 'chest', value: 0,    house: 0,  hotels: 0,   owned: false },
    { pos: 3, name: "Baltic Ave",        family: 'brown', value: 60,   house: 50, hotels: 200, owned: {user:2, house: 2, hotel: 0} },
    { pos: 4, name: "Income Tax",        family: 'tax',   value: -220, house: 0,  hotels: 0,   owned: false },
];

const cards = [
    { id: 1, says: "Blah blah blah", action: `move`, value: 0 },
    { id: 2, says: "Blah blah blah", action: `win`,  value: 200 },
    { id: 3, says: "Blah blah blah", action: `loss`, value: -100 },
];

// ACTIONS / FUNCTIONS
// Just a quick list

// Input: turn (user id)
function rollTheDice() {
    // Randomly roll 2 dice
    // Move the user to that position: moveTo
    // Increase "turn" by 1
}

// Input: turn (user id), position
function moveTo() {
    // Move to a spot on the board
    // Evaluate:
        // Does someone own it
        // Do I pay the house?
        // Flip a card?
}

// Input: turn (user id)
function flipCard() {
    // Randomly pick a card
    // Execute the functionality
}

// Input: turn (user id), propertyId
function buyProperty() {
    // Confirm the user has enough money
    // Add their name to the deed
}

// Input: turn (user id), propertyId, building
function buyBuilding() {
    // Confirm the user owns the property
    // Confirm the user has enough money
    // Add the building to the property
}

// Input: userid, amount of transaction
function doTransaction() {
    // Who is the transaction for?
    // How much do we add/subtract?
}


