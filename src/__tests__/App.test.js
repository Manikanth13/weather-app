import React from 'react';
import { App } from '../App';
import { shallow } from 'enzyme';
import { Typography } from '@material-ui/core';
import HomePage from '../components/HomePage';

describe('<App />', () => {
  it('renders loading screen', () => {
    const component = shallow(<App isLoading />);
    expect(component.find(Typography).length).toEqual(1);
    expect(component.find(Typography).text()).toEqual('Loading...');
  });

  it('renders the contents when loaded', () => {
    const component = shallow(<App />);
    expect(component.find('Header').length).toEqual(1);
    expect(component.find(HomePage).length).toEqual(1);
  });
});
