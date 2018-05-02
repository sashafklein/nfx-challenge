import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TableHead from 'components/TableHead';
import FundContactRow from './FundContactRow';
import ShallowDashboard from './ShallowDashboard';

Enzyme.configure({ adapter: new Adapter() });

describe('ShallowDashboard', () => {
  it('renders its contents when given good props', () => {
    const component = shallow(<ShallowDashboard company={{ fundContacts: [{}] }} stages={ [] } interests={ [] } />);
    expect(component.find(TableHead).length).toEqual(2);
    expect(component.find(FundContactRow).length).toEqual(1);
  });
});
