import { GET_WEATHER, GET_DETAIL } from '../constants';
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

export function getDetail(state={},action) {

    switch(action.type) {

        case GET_DETAIL:

            return {...state, ...action.payload}

        default:

            return state;

    }

}

export const rootReducer = combineReducers({

    weather: getWeather,

    detail: getDetail

});



