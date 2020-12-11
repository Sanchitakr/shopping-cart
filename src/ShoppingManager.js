import React, { Component } from 'react';

import CartManager from './CartManager';
import ProductManager from './ProductManager';
import productData from './productData';
import './App.css';

class ShoppingManager extends Component {
  constructor() {
    super();
    this.state = {
      productData,
      cartItems: [],
    };
  }

  lastID = () => (this.state.productData[this.state.productData.length - 1].id)

  addToCart = (id) => {
    let cartItems;

    const remainingProducts = this.state.productData.map((product) => {
      if (product.id === id) {
        const newProduct = Object.assign({}, product);
        newProduct.quantity -= 1;
        return newProduct;
      }
      return product;
    });

    const toAddToCart = this.state.productData.find(product => product.id === id);
    const foundItem = this.state.cartItems.find(product => product.id === id);

    if (foundItem) {
      cartItems = this.state.cartItems.map((item) => {
        if (foundItem === item) {
          const itemCopy = Object.assign({}, item);
          itemCopy.quantity += 1;
          return itemCopy;
        }
        return item;
      });
    } else {
      const newItem = Object.assign({}, toAddToCart);
      newItem.quantity = 1;
      cartItems = this.state.cartItems.concat(newItem);
    }

    this.setState(prevState => ({
      productData: remainingProducts,
      cartItems,
    }));
  }

  removeFromCart = (id) => {
    const foundItem = this.state.cartItems.find((product) => {
      return product.id === id;
    });

    const newProducts = this.state.productData.map((product) => {
      if (id === product.id) {
        const productCopy = Object.assign({}, product);
        productCopy.quantity += foundItem.quantity; // should add the total quantity back from the same item
        return productCopy;
      } else {
        return product;
      }
    });

    const newCart = this.state.cartItems.filter((item) => {
      return item.id !== id
    })

    this.setState(prevState => {
      return {
        productData: newProducts,
        cartItems: newCart
      }
    })
  }

  checkout = () => {
    this.setState(prevState => {
      return {
        cartItems: []
      }
    })
  }

  render() {
    return (
    <main >
      <header className="header">
        <h2>:Different Mart!</h2>
      </header>
      
      
      <div id="wrapper">
        <div id="left"> 
          <h3> Products List</h3>
          <ProductManager
            productData={this.state.productData}
            addToCart={this.addToCart}
          />
          </div>
          
          
          
          <div id="right">
            <h3> Cart Items</h3>
          <CartManager
            cartItems={this.state.cartItems}
            removeFromCart={this.removeFromCart}
            checkout={this.checkout}
          />
        </div>
      </div>
    </main>
    );
  }
}

export default ShoppingManager;
