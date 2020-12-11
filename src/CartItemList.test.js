import { shallow,mount } from 'enzyme';
import React from 'react';


import CartItem from './CartItem';
import CartItemList from './CartItemList';

describe('CartItemList', () => {
  //Given
  const ShowerCartItem = (
    <CartItem
      />);
  
  //when
  const cartItems = [
    {
      id: 2,
      title: 'Shower Gel',
      quantity: 5,
      price: '$49.99',
    },
    
  ];
  
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CartItemList
      cartItems={cartItems}

    />);
  });
  //expect
  
  it('render cart items successfully', () => {
    expect(wrapper.containsMatchingElement(ShowerCartItem)).toBe(true);
    const cartItemsRendered = wrapper.find(CartItem);
    expect(cartItemsRendered.length).toEqual(1);
  });

  

  
  

});
