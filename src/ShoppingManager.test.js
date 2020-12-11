import { shallow } from 'enzyme';
import React from 'react';
import ShoppingManager from './ShoppingManager';
import CartManager from './CartManager';
import ProductManager from './ProductManager';
import productData from './productData';

describe('ShoppingManager', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <ShoppingManager
      />
    );

    wrapper.setState({ productData: productData, cartItems: []});
  });

  it('should have the `h1`', () => {
    expect(
      wrapper.contains(<h1>Welcome to the Shop!</h1>)
    ).toBe(true);
  });

  it('renders the <ProductManager /> component', () => {
    expect(wrapper.find(ProductManager)).toHaveLength(1);
  });

  it('renders the <CartManager /> component', () => {
    expect(wrapper.find(CartManager)).toHaveLength(1);
  });

  it('returns the last product id when called lastID', () => {
    const lastID = productData[productData.length-1].id;
    expect(lastID).toEqual(4);
  });

  
  
  

  it ('adds product to Cart', () => {
    const prevQuan = productData[0].quantity;
    const toAddToCart = productData[0];
    const updatedProducts = wrapper.state().productData.map((product) => {
      if (product.id === toAddToCart.id) {
        const newProduct = Object.assign({}, product);
        newProduct.quantity -= 1;
        return newProduct;
      }
      return product;
    });
    const cartItems = wrapper.state().cartItems.concat(toAddToCart);
    wrapper.setState({productData: updatedProducts, cartItems,});
    expect(wrapper.state().cartItems).toHaveLength(1);
    expect(wrapper.state().productData[0].quantity).toEqual(prevQuan-1);
  });
});
