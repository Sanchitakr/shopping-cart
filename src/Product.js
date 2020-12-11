import React, { Component } from 'react';



class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        title: this.props.title,
        price: this.props.price,
        quantity: this.props.quantity,
        image:this.props.image
      }
    };
  }


  handleAddToCartClick = (e) => {
    e.preventDefault();
    if (this.props.quantity > 0){
      this.props.addToCart(this.props.id);
    };
  }
  

  render() {
      return (
        <div className="product">
          <p>{this.props.title} - ${this.props.price} x {this.props.quantity} </p>
          <button className="button" onClick={this.handleAddToCartClick}>Add to cart</button>
          
          
        </div>
      );
    }

  }

export default Product;
