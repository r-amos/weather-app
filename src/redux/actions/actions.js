import { GET_WEATHER } from '../constants';

const BASE_URL = 'http://api.openweathermap.org/data/2.5/';
const API_KEY = '973276f31edb000f42dfad37a04595e4';

export const getWeather = response => ({

    type: GET_WEATHER,
    payload: response

})

export function fetchWeather(city) {

    return function (dispatch) {

        const url = `${BASE_URL}weather?q=${city},uk&APPID=${API_KEY}`;

        return fetch(url)

        .then(response => response.json())
        .then(json => dispatch(getWeather(json)))

    }

}