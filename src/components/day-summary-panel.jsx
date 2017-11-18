import React from 'react';

import styled from 'styled-components';

import weatherIcons from './icon.json';

import '../../node_modules/weather-icons/css/weather-icons.css';

const DaySummaryPanel = (props) => {

    const weekDay = new Date(props.day).toLocaleDateString('en-GB', { weekday: 'short' });

    let day = false;

    let night = false;

    const hi = Math.round(props.weather.reduce((max,weather) => {

        const time = weather.dt_txt.slice(-8,-6);

        if (time >= 6 && time < 18) {
            
            day = true;
            
            return Math.max(max,weather.main.temp);

        }  

        return max;

    }, 0) -273);

    const dayHi = day ? hi : 'N/A';


    const low = Math.round(props.weather.reduce((min,weather) => {
    
        const time = weather.dt_txt.slice(-8,-6);

        if (time < 6 || time >= 18) {

            night = true;

            return Math.min(min,weather.main.temp);

        } 
        
        return min;

    }, Infinity) - 273);

    const nightLow = night ? low : 'N/A';

    const code = props.weather[0].weather[0].id;

    let weatherIcon = weatherIcons[code].icon;

    if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {

        weatherIcon = 'day-' + weatherIcon;
        
      }
    
    weatherIcon = 'wi wi-' + weatherIcon;

    const DayWrapper = styled.div`
    
        flex-grow: 1;
        height: 300px;
        margin: 0.5em;
        color: #7f8c8d;
        background-color: #ecf0f1;
        border-radius: 5px;
        padding: 5px 10px 0px 10px;
        display: flex;
        flex-direction: column;
        cursor: pointer;
    
    `;

    const DayTitle = styled.h3`

        text-transform: uppercase;
        display: flex;
        justify-content: space-between;

        span {

            font-size: 1rem;

        }

    `;

    const DayIcon = styled.div`

        flex: 1;
        font-size: 100px;
        display: flex;

    `;

    const Icon = styled.i`
        
        margin: auto;

    `;

    const DaytimeTemp = styled.div`

        padding-bottom: 2px;
    
    `;

    const NightTimeTemp = styled.div`

    padding-bottom: 15px;

    `;

    const showDetail = () => {

        props.showDetails(true,props);

    }
    
    return (

        <DayWrapper onClick={showDetail}>
            <DayTitle>{weekDay} <span>{props.day}</span></DayTitle>
            <DayIcon>
                <Icon className={weatherIcon} />
            </DayIcon>
            <DaytimeTemp>Max. Day: {dayHi}</DaytimeTemp>
            <NightTimeTemp>Min. Night: {nightLow}</NightTimeTemp>
        </DayWrapper>

    );

}

export default DaySummaryPanel;
