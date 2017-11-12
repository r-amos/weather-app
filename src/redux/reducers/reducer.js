import { GET_WEATHER } from '../constants';
import { combineReducers } from 'redux';

const initialState = [];

export function getWeather(state = initialState, action) {

    switch(action.type) {

        case GET_WEATHER:

            return [...state, action.payload]

        default:

             return state;

    }

}

export const rootReducer = combineReducers({

    weather: getWeather,

});



