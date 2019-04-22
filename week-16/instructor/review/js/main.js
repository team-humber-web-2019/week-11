// Products are now in product.js

const shoppingCart = [
  { productId: 1002, qty: 1 },
  { productId: 1004, qty: 2 },
];

const ulProducts = document.getElementById('products');
const ulCart = document.getElementById('cart');

// Add a listener to the whole Product list
ulProducts.addEventListener(`click`, event => {

  //if (!event.target.matches('button')) return;

  // Grab the product id from the button, if one is not present, EVACUATE IMMEDIATELY!!!! (return)
  let prodId = event.target.dataset.productid;
  if (!prodId) return;

  // Check if the id exists already, update it, else push a new one
  let whichId = shoppingCart.findIndex( item => prodId == item.productId);

  if (whichId >= 0) {
    shoppingCart[whichId].qty += 1; // Update cart quantity by 1
  } 
  else {
    shoppingCart.push({ productId: prodId, qty: 1 }); // Add a new cart item
  }

  printTheCart();

});




// FUNCTION: getProductAsHTML
//    Takes a string and return an HTML formatted string of whatever was passed
// ARGUMENTS: prodName:String
// RETURN: String
const getProductAsHTML = (prod) => {

  const category = allCategories.find( cat => prod.catId == cat.id );

  return `
    <li class="product">
      <div><img src="img/${ prod.img }"></div>
      <div>
        <div style="background-color: ${category.color}">${ prod.name }</div>
        <div>$ ${ prod.price }</div>
        <div><button data-productid="${ prod.id }">Add</button></div>
      </div>
    </li>`;
}

const getCartItemAsHTML = (item) => { 

  // Search the allProducts array for the name of the item with id == item.productId
  //const product = { id: 1002, name: `Notebook`, price: 20, img: `notebook.png` };
  const product = allProducts.find( prod => prod.id == item.productId );

  return `<li>${item.qty} ${product.name}: $ ${item.qty * product.price}</li>` 

};


const printAllProducts = () => {

  ulProducts.innerHTML = allProducts
    .filter( prod => prod.price > 0 )
    .map( getProductAsHTML )
    .join('\n');

} 

const printTheCart = () => {

  ulCart.innerHTML = shoppingCart
    .map( getCartItemAsHTML )
    .join('\n');

}



// Does the first print of the available products
printAllProducts();
printTheCart();