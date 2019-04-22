// Array
const allProducts = [`Computer`, `Notebook`, `Mouse`, `Laptop`];

const ulProducts = document.getElementById('products');

// FUNCTION: getProductAsHTML
//    Takes a string and return an HTML formatted string of whatever was passed
// ARGUMENTS: prodName:String
// RETURN: String

const getProductAsHTML = (prodName) => {

  return `<li class="product">${ prodName }</li>`;

}



const printAllProducts = () => {

  ulProducts.innerHTML = ``;

  let formattedListItems = allProducts.map( getProductAsHTML );

  ulProducts.innerHTML = formattedListItems.join('\n');

} 

// Print all products TWICE, just to test that we don't print two lists
printAllProducts();
//printAllProducts();



// allProducts.map( (prod) => {
//   ulProducts.innerHTML += getProductAsHTML( prod );
// })