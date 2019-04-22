// Array
const allProducts = [
  { name: `Computer`, price: 2000 },
  { name: `Notebook`, price: 20 },
  { name: `Mouse`, price: 40 },
  { name: `Laptop`, price: 3000 },
];

const ulProducts = document.getElementById('products');

// FUNCTION: getProductAsHTML
//    Takes a string and return an HTML formatted string of whatever was passed
// ARGUMENTS: prodName:String
// RETURN: String

const getProductAsHTML = (prod) => {

  return `<li class="product">${ prod.name }: $ ${ prod.price }</li>`;

}



const printAllProducts = () => {

  ulProducts.innerHTML = ``;

  let formattedListItems = allProducts
    .filter( prod => prod.price < 100 )
    .map( getProductAsHTML )
    .join('\n')

  ulProducts.innerHTML = formattedListItems;

} 

// Print all products TWICE, just to test that we don't print two lists
printAllProducts();
//printAllProducts();



// allProducts.map( (prod) => {
//   ulProducts.innerHTML += getProductAsHTML( prod );
// })