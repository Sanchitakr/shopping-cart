import React, { useState } from 'react';
import './App.css';
/* TO DO

1. Categorise(filter?) products when adding to the cart (use localisation or key ID?)
2. group the products in the cart with their unit price and units
3. Add Cart total (basic addition rounded up to 2 decimal places )
4. Add sales tax to the toal cart amount

*/
const PAGE_PRODUCTS = 'products';
const PAGE_CART='cart';

function App() {
  const[cart,setCart]=useState([]);
  const[page,setPage]=useState('products');

  const [products] = useState([
    {
      name: 'Shower Gel',
      cost: '$49.99',
      image:'data:image/jpeg;base64,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',
    },
    {
      name: 'Deoderant',
      cost: '$99.99',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsK2rzXoM74XUEUnWHkb85vLKRvCmlRz5p3w&usqp=CAU'
    },
  ]);

  const addToCart=(product) => {
    //console.log('we are in addToCart');
    //make a product object - object reference to products
    setCart([...cart,{...product}]);
  };

  const removeFromCart=(productToRemove) => {
    //If used index to group the products into category, there will be issue with sorting
    setCart(
      cart.filter((product) => product !== productToRemove)
    );
  };

  const navigateTo = (nextPage) =>{
    setPage(nextPage);
  };

  const renderProducts =() => (
  <>
  <h1>Products</h1>
      <div className ="products">
      {products.map((product, idx) => (
        <div className="product" key={idx}>
        <h3>{product.name} </h3>
        <h3>{product.cost}</h3>
        <img src = {product.image} alt={product.name}/>
        <button onClick={() => addToCart(product)}>Add to Cart
        </button>
      </div>
      ))}
    </div>
    </>
  );

  const  renderCart =() => (
  <>
  <h1>Cart</h1>
      <div className ="cartProducts">
      {cart.map((product, idx) => (
        <div className="product" key={idx}>
        <h3>{product.name} </h3>
        <h3>{product.cost}</h3>
        <img src = {product.image} alt={product.name}/>
        <button onClick={() => removeFromCart(product)}>Remove
        </button>
      </div>
      ))}
    </div>
    </>
  );

  return (
    <div className="App">
      <header>
        <button onClick={()=> navigateTo(PAGE_CART)}> Go To Cart({cart.length})</button>
        <button onClick={()=> navigateTo(PAGE_PRODUCTS)}> View Products</button>
      
      </header>
      {page===PAGE_PRODUCTS && renderProducts ()}
      {page===PAGE_CART && renderCart ()}
    </div>
  );  
}

export default App;
