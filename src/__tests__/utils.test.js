import { convertTemp,  groupWeatherData } from '../utils';
import { weatherData } from '../__mocks__/weatherDataMock';

describe('Utils - test temperature convertor', () => {
    it('should return temperature in celcius', () => {
        expect(convertTemp(50, 'c')).toEqual(10);
    });

    it('should return temperature in fahrenheit', () => {
        expect(convertTemp(50, 'f')).toEqual(50);
    });
});

describe('Utils - test grouping weather data', () => {
    it('should return an array of objects', () => {
        expect(groupWeatherData(weatherData).length).toBeGreaterThan(1);
    });

    it('should return an empty array when [] passed', () => {
        expect(groupWeatherData([]).length).toEqual(0);
    });

    it('should return an empty array when nothing passed', () => {
        expect(groupWeatherData([]).length).toEqual(0);
    });
});
