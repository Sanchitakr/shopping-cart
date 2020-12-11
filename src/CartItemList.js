import React, { Component } from 'react';

import CartItem from './CartItem';

class CartItemList extends Component {
  totalPrice = () => {
    return this.props.cartItems.reduce((acc,item) => {
      acc += item.price * item.quantity ;
      return acc;
    }, 0);
  }
  render() {
    
    const cartItems = this.props.cartItems.map((item) => {
      return (
        <CartItem
          key={`${item}-${item.id}`}
          id={item.id}
          title={item.title}
          price={item.price}
          quantity={item.quantity}
          cartTotal={`${item.quantity}* ${item.price}`}
          removeFromCart={this.props.removeFromCart}
        />
      );
    });

    return (
      <div>
        {cartItems}
        <div>
          <h3>Amount: ${(this.totalPrice().toFixed(2))}</h3>
        </div>
        <div>
          Service Tax (12.50%): ${((this.totalPrice()) * (12.5/100)).toFixed(2)}
        </div>
        <div className="total" id="total">
          <h3>Total: ${((this.totalPrice()-(this.totalPrice()) * (12.5/100))).toFixed(2)}</h3>
      </div>
        </div>  
    );
  }
}

export default CartItemList
