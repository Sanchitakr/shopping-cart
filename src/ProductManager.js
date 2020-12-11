import React, { Component } from 'react';

import ProductList from './ProductList';


class ProductManager extends Component {
  render() {
    return (
      <div>
        <ProductList
          productData={this.props.productData}
          addToCart={this.props.addToCart}
          
        />
        
      </div>
    );
  }
}

export default ProductManager;
