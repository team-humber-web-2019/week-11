const northamerica = [
  { name: `Canada`,      pop: 38000000,    capital: `Ottawa` },
  { name: `USA`,         pop: 380000000,   capital: `Washington, DC` },
];
const restofworld = [ 
  { name: `South Korea`, pop: 51400000,    capital: `Seoul` },
  { name: `Russia`,      pop: 144000000,   capital: `Moscow` },
  { name: `France`,      pop: 67000000,    capital: `Paris` },
];

// Store the location of the ul#population
const elePopulation = document.getElementById(`population`);
const eleAnotherlist = document.getElementById(`anotherList`);

// Formatting function
const getListHTML = (countries) => {      // What happens if we don't get a parameter here for countries!?

  // Map the countries to HTML formatting (li)
  const formattedArray = countries.map(country => 
                              `<li>
                                <span>${country.name}</span>
                                <span>${country.capital}</span>
                                <span>${country.pop}</span>
                              </li>`);

  // Join all of the mapped <li> to a single string
  const formattedHTML = formattedArray.join('');
  
  // Return the string to where this function was called from
  return `<li><span>Country</span><span>Capital</span><span>Population</span></li>` + formattedHTML;
}

// Print function
const printList = (whereToPrint, whatToPrint) => {
  // 4. Assign a html formetted list to the UL we stored in step 1
  whereToPrint.innerHTML = getListHTML(whatToPrint);
}

// ======== APPLICATION STARTS HERE ====================
printList(elePopulation, northamerica);
printList(eleAnotherlist, restofworld);