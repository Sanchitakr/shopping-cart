//Conitains test module for the First test case
/*
Step 1: Add products to the shopping cart.
Given :
An empty shopping cart
And a product, Shower Gel with a unit price of 49.99
When :
The user adds 5 Shower Gels to the shopping cart
Then :
The shopping cart should contain 5 Shower Gels each with a unit price of 49.99
And the shopping cart’s total price should equal 249.95
*/
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';

import React from 'react';
import CartItem from './CartItem';

describe('CartItem', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CartItem
      title="Shower Gel"
      quantity="5"
      price="$49.99"
    />);
  });
  it('should be able to display props with unit price and quantity', () => {
    expect(wrapper.contains(<p>Shower Gel - $49.99 x 5</p>)).toBe(true);
  });

  
  

  it('should call the remove method when clicked', () => {
    const removeStub = sinon.stub(CartItem.prototype, 'removeFromCart');
    const rendered = shallow(<CartItem />);

    rendered.find('.remove').simulate('click');

    expect(removeStub.calledOnce).toBe(true);
  });
});
