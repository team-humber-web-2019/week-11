// 1. Create a temperature variable (celcius) and store a value to it (make up a value to start)
let temp = -20;

// 2. Select the `#temp` element in the document and store a reference to it
const eleTemp = document.getElementById(`temp`);

// 3. Assign the temperature variable to the #temp as innerHTML
eleTemp.innerHTML = `${temp}&degC`;

// 4. Select the `#app` element in the document and store a reference to it
const eleApp = document.getElementById(`app`)

// 5. Change the background colour of the #app to reflect the temperature's value visually:
//      If the temp is greater than 10, set a `tomato` background
//      If the temp is between -10 and 10 (inclusive), set a `lightgrey` background
//      If the temp is less than -10, set a `dodgerblue` background

if ( temp > 0 ) {   // 1, 2, 3, ...
    eleApp.style.backgroundColor = `tomato`;
}
else if ( temp == 0 ) {   // 0
    eleApp.style.backgroundColor = `lightgrey`;
}
else {  // -1, -2, -3, ...
    eleApp.style.backgroundColor = `dodgerblue`;
}

// Lookup: Other ways to write a condition:
//   Ternery operator
//   Switch statements



// 6. Modify the application to change the amount of red/blue relative to the amount of hot/cold (take home!)
//      HINT: convert the hot and cold numbers to RGB. Remember, each channel is a number from 0 to 255 (which is somewhat close to 10x the average summer high!)
