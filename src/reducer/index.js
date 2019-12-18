import ACTIONS from '../action';

const initialState = {
    isLoading: true,
    weatherData: []
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.Types.FETCH_WEATHER_INFO_SUCCESS:
                return {...state, isLoading: false, weatherData: action.payload};
        default:
            return state;
    }
};

export default appReducer;