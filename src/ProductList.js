import React, { Component } from 'react';

import Product from './Product';

class ProductList extends Component {
  render () {
    let products = this.props.productData.map((product, index) => {
                    return <Product key={product.title + '-' + index}
                                    id={product.id}
                                    title={product.title}
                                    price={product.price}
                                    quantity={product.quantity}
                                    addToCart={this.props.addToCart}
                           />
                   });
    return (
      <div>
        {products}
      </div>
    );
  }
}

export default ProductList;
