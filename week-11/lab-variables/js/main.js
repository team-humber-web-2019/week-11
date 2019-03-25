// -------------- LAB WORK BELOW --------------
// COMPLETE THE FOLLOWING FIVE (5) EXERCISES BELOW EACH SET OF INSTRUCTIONS:

// --------------------------------------------
// EXERCISE: The Fortune Teller
// Why pay a fortune teller when you can just program your fortune yourself? Store the following into variables: job title, geographic location, partner's name, number of cats. Output your fortune to the screen like so: "You will be a X in Y, and live with Z and have N cats."


const jobTitle = `Clown`;
const geoLocation = `Toronto`;
const partnerName = `Crusty`;
const numCats = 5;

console.log(`You will be a ${jobTitle} in ${geoLocation}, and live with ${partnerName} and have ${numCats} cats.`);
console.log("You will be a " + jobTitle + " in " + geoLocation + ", and live with " + partnerName + " and have " + numCats + " cats.");


// --------------------------------------------
// EXERCISE: The Age Calculator
// Forgot how old someone is? Calculate it! Store the current year in a variable. Store their birth year in a variable. Calculate their age based on the stored values. Output them to the screen like so: "They are NN years old.", substituting the values.

const currYear = 2019;
const birthYear = 1902;

console.log(`They are ${currYear - birthYear} years old.`);




// --------------------------------------------
// EXERCISE: The Lifetime Supply Calculator
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more! Store your current age into a variable. Store a maximum age into a variable. Store an estimated amount per day (as a number). Calculate how many you would eat total for the rest of your life. Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".




// --------------------------------------------
// EXERCISE: The Geometrizer
// Calculate properties of a circle, using the definitions here. Store a radius into a variable. Calculate the circumference based on the radius, and output "The circumference is NN". Calculate the area based on the radius, and output "The area is NN".




// --------------------------------------------
// EXERCISE: The Temperature Converter
// It's hot out! Let's make a converter based on the steps here. Store a celsius temperature into a variable. Convert it to fahrenheit and output "NN°C is NN°F".  Now store a fahrenheit temperature into a variable. Convert it to celsius and output "NN°F is NN°C."

const tempC = 24;
const tempF = (tempC * (9 / 5)) + 32;

console.log(`${tempC}°C is ${tempF}°F`);

