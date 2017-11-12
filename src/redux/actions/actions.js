import { GET_WEATHER } from '../constants';

const BASE_URL = 'http://api.openweathermap.org/data/2.5/';
const API_KEY = '973276f31edb000f42dfad37a04595e4';

export const getWeather = response => ({

    type: GET_WEATHER,
    payload: response

})

export function fetchWeather(city) {

    const weatherAPIRequest = 
        fetch(`${BASE_URL}weather?q=${city},uk&APPID=${API_KEY}`)
        .then((response) => response.json());

    const forecastAPIRequest = 
        fetch(`${BASE_URL}forecast?q=${city},uk&APPID=${API_KEY}`)
        .then((response) => response.json());

    let payload = {

        current: {},
        forecast: {}

    }

    return function(dispatch) {

        Promise.all([weatherAPIRequest, forecastAPIRequest])
            .then((values) => {
                payload["current"] = values[0];
                payload["forecast"] = values[1];
                return payload;
            })
            .then((payload) => dispatch(getWeather(payload)))

    }

}


