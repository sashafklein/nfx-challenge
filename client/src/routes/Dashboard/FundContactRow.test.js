import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FundContactRow from './FundContactRow';
import ContactDropdown from './ContactDropdown';
import ContactTextInput from './ContactTextInput';

Enzyme.configure({ adapter: new Adapter() });

describe('FundContactRow', () => {
  it('renders appropriate children given good props', () => {
    const component = shallow(<FundContactRow contact={{ fund: {} }} stages={ [] } interests={ [] } />);
    expect(component.find(ContactDropdown).length).toEqual(2);
    expect(component.find(ContactTextInput).length).toEqual(3);
  });
});
