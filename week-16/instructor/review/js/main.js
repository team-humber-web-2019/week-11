// Array
const allProducts = [
  { name: `Computer`, price: 2000, img: `comp.png` },
  { name: `Notebook`, price: 20, img: `notebook.png` },
  { name: `Mouse`, price: 40, img: `mouse.png` },
  { name: `Laptop`, price: 3000, img: `laptop.png` },
];

const ulProducts = document.getElementById('products');

// FUNCTION: getProductAsHTML
//    Takes a string and return an HTML formatted string of whatever was passed
// ARGUMENTS: prodName:String
// RETURN: String
const getProductAsHTML = (prod) => {

  return `
    <li class="product">
      <div><img src="img/${ prod.img }"></div>
      <div>
        <div>${ prod.name }</div>
        <div>$ ${ prod.price }</div>
        <div><button>Add to Cart</button></div>
      </div>
    </li>`;
}



const printAllProducts = () => {

  ulProducts.innerHTML = allProducts
    .filter( prod => prod.price > 0 )
    .map( getProductAsHTML )
    .join('\n')

} 

// Does the first print of the available products
printAllProducts();
