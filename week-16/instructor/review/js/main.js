// Array
const allProducts = [`Computer`, `Notebook`, `Mouse`, `Laptop`];
const ulProducts = document.getElementById('products');


const getProductAsHTML = (index) => {

  if ( !allProducts[index] ) return false;

  return `<li class="product">${ allProducts[index] }</li>`;

}

const printAllProducts = () => {

  ulProducts.innerHTML = ``;
  ulProducts.innerHTML += getProductAsHTML( 0 );
  ulProducts.innerHTML += getProductAsHTML( 1 );
  ulProducts.innerHTML += getProductAsHTML( 2 );

} 

// Print all products TWICE, just to test that we don't print two lists
printAllProducts();
printAllProducts();