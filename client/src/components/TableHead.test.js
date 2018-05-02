import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TableHead from './TableHead';

Enzyme.configure({ adapter: new Adapter() });


describe('TableHead', () => {
  it('renders a thead with a tr with the given columns', () => {
    const component = shallow(<TableHead columns={ ['One', 'Two', 'Three']} />);
    expect(component.find('th').length).toEqual(3);
  });
});
