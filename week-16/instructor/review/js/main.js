// Array
const allProducts = [`Computer`, `Notebook`, `Mouse`, `Laptop`];
const ulProducts = document.getElementById('products');

// A function definition
const printAProductWithoutReturn = () => {

  if ( allProducts[0] == undefined ) {
    console.log( `Product unavailable` );
  }
  else {
    console.log(  allProducts[0]  );
    console.log(`I printed a product successfully`)
  }

  return true;
}
//printAProductWithoutReturn();




// A function definition (receives an argument)
// const printAProduct = (index) => {

//   if ( !allProducts[index] ) return false;

//   console.log(  allProducts[index]  );
//   return true;
// }


// // Anytime you see a function name with ():
// // it means the function is being called
// if ( printAProduct(3) ) {
//   console.log(`I printed a product successfully`)
// }
// else {
//   console.log( `Product unavailable` );
// }







// const getProductAsHTML = (index) => {
//   // If there is no product at that index, return false
//   if ( !allProducts[index] ) return false;

//   // otherwise, return true
//   return `<li class="product">${ allProducts[index] }</li>`;
// }


// Anytime you see a function name with ():
// it means the function is being called
//const productToPrint = getProductAsHTML(5);

//if (productToPrint) {
//  ulProducts.innerHTML = getProductAsHTML(2);
//}
//else {
//  ulProducts.innerHTML = `<li>Woops! No product exists at that index.</li>`;
//}




const getProductAsHTML = (index) => {

  if ( !allProducts[index] ) return false;

  return `<li class="product">${ allProducts[index] }</li>`;

}

// ulProducts.innerHTML += getProductAsHTML(0);
// ulProducts.innerHTML += getProductAsHTML(1);
// ulProducts.innerHTML += getProductAsHTML(2);


// const printAllProducts = () => {

//   let outputHTML = ``;

//   for (let count = 0; count < allProducts.length; count++) {
//     outputHTML += getProductAsHTML( count );
//   } 

//   ulProducts.innerHTML = outputHTML;
// } 



// const printAllProducts = () => {

//   ulProducts.innerHTML = ``;

//   for (let count = 0; count < allProducts.length; count++) {
//     ulProducts.innerHTML += getProductAsHTML( count );
//   } 

// } 



const printAllProducts = () => {

  ulProducts.innerHTML = getProductAsHTML( 0 );
  ulProducts.innerHTML = getProductAsHTML( 1 );
  ulProducts.innerHTML = getProductAsHTML( 2 );

} 


printAllProducts();
printAllProducts();


