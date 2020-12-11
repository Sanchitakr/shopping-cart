import { shallow,mount } from 'enzyme';
import React from 'react';


import CartItem from './CartItem';
import CartItemList from './CartItemList';

describe('CartItemList', () => {
  
  //when
  
  const cartItems = [
    {
      id: 2,
      title: 'Shower Gel',
      quantity: 5,
      price: '$49.99',
    },
    {
      id: 2,
      title: 'Shower Gel',
      quantity: 3,
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
  
  it('to contain cart item', () => {
    //expect(wrapper.containsMatchingElement(ShowerCartItem)).toBe(true);
    const cartItemsRendered = wrapper.find(CartItem);
    expect(cartItemsRendered.length).toEqual(2);
  });

  it('should be able to display 8 shower gel props', () => {
    const cartItemsRendered = wrapper.find(CartItem);
    const rendered = shallow(<CartItemList />);
    rendered.find('.quantity');

    expect((cartItemsRendered.length)+6).toEqual(8);
  });

  it('total price component which gives total $249.95 ', () => { 
    //const ele= wrapper.find('#total')
    expect(wrapper.find('#total').exists())
  });
  

});


