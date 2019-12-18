import React from 'react';
import { shallow } from 'enzyme';
import { HomePage } from '../components/HomePage';
import { weatherData } from '../__mocks__/weatherDataMock';
import { groupWeatherData } from '../utils';
import { Container, Typography, FormControl, FormControlLabel, RadioGroup, IconButton, Grid } from '@material-ui/core';
import { ArrowBack, ArrowForward } from '@material-ui/icons';
import DayCard from '../components/DayCard';

const groupedData = groupWeatherData(weatherData);

describe('<HomePage />', () => {
    it('renders all the contents correctly', () => {
        const component = shallow(<HomePage weatherData={groupedData} />);
        expect(component.find(Container).length).toEqual(1);
        expect(component.find(Typography).length).toEqual(1);
        expect(component.find(FormControl).length).toEqual(1);
        expect(component.find(FormControlLabel).length).toEqual(2);
        expect(component.find(RadioGroup).length).toEqual(1);
        expect(component.find(IconButton).length).toEqual(2);
        expect(component.find(ArrowBack).length).toEqual(1);
        expect(component.find(ArrowForward).length).toEqual(1);
        expect(component.find(Grid).length).toEqual(1);
        expect(component.find(DayCard).length).toEqual(3);
        expect(component.find('Chart').length).toEqual(1);
    });

    // similarly test cases to be written for testing user actions, i.e., radio actions, arrow actions, day card click and map load
});
