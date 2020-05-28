import React from 'react'
import {shallow} from 'enzyme'
import User from '../User'

describe('<User/>', () => {
  it('should return user with name Maks', () => {
    const user = {
        name: "Maks",
    }
    const wrappedComponent = shallow(<User name={user.name} />);

    expect(wrappedComponent.find('.user__name').exists()).toEqual(true);
  });
  
  it('should return user with age 25', () => {
    const user = {
        age: 25,
    }
    const wrappedComponent = shallow(<User age={user.age} />);

    expect(wrappedComponent.find('.user__age').exists()).toEqual(true);
  });
});
