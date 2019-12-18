import { groupWeatherData } from "../utils";

const api = "https://api.openweathermap.org/data/2.5/forecast";
const APPID = '75f972b80e26f14fe6c920aa6a85ad57';

const Types = {
    FETCH_WEATHER_INFO_SUCCESS: 'FETCH_WEATHER_INFO_SUCCESS',
    FETCH_WEATHER_INFO_FAILURE: 'FETCH_WEATHER_INFO_FAILURE',
    SWITCH_TYPE: 'SWITCH_TYPE',
};


const fetchDataSuccess = (data) => ({
    type: Types.FETCH_WEATHER_INFO_SUCCESS,
    payload: data
});

const fetchDataFailed = () => ({
    type: Types.FETCH_WEATHER_INFO_FAILURE
});

const changeTemperatureView = (type) => ({
    type: Types.SWITCH_TYPE,
    payload: type
});

const fetchData = (city, count) => {
    return (dispatch) => {
        return fetch(`${api}?q=${city}&APPID=${APPID}&cnt=${count}`)
        .then(res => res.json())
        .then(response => {
            const groupedData = groupWeatherData(response.list);
            dispatch(fetchDataSuccess(groupedData))
        })
        .catch(err => {
            // handle error scenario
        });
    }
};

export default {
    fetchData,
    fetchDataSuccess,
    fetchDataFailed,
    changeTemperatureView,
    Types
};
