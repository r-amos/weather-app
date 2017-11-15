import React from 'react';

import styled from 'styled-components';

import '../../node_modules/weather-icons/css/weather-icons.css';

const DaySummaryPanel = (props) => {

    console.log(props);
 
    const dayHi = Math.round(props.weather.reduce((max,weather) => {

        const time = weather.dt_txt.slice(-8,-6);

        if (time >= 6 && time < 18) {
            
            return Math.max(max,weather.main.temp);

        }  

        return max;

    }, 0) - 273);

   const nightLow = Math.round(props.weather.reduce((min,weather) => {
    
        const time = weather.dt_txt.slice(-8,-6);

        if (time < 6 || time >= 18) {

            return Math.min(min,weather.main.temp);

        } 
        
        return min;

    }, Infinity) - 273);

    const DayWrapper = styled.div`
    
        flex-grow: 1;
        height: 300px;
        margin: 0.5em;
        color: #7f8c8d;
        background-color: #ecf0f1;
        border-radius: 5px;
        padding: 5px 10px 0px 10px;
    
    `;

    const DayTitle = styled.h3`

        text-transform: uppercase;

    `;

    const DayIcon = styled.div`

        height: 75%;
        font-size:100px;
        display:flex;

    `;

    const Icon = styled.i`
        
        margin: auto;

    `;

    const DaytimeTemp = styled.div`

        padding-bottom:2px;
    
    `;

    const NightTimeTemp = styled.div`

    `;
    
    return (

        <DayWrapper>
            <DayTitle>{new Date(props.day).toLocaleDateString('en-GB', { weekday: 'long' })}</DayTitle>
            <DayIcon>
                <Icon className="wi wi-night-sleet" />
            </DayIcon>
            <DaytimeTemp>Max. Day: {dayHi}</DaytimeTemp>
            <NightTimeTemp>Min. Night: {nightLow}</NightTimeTemp>
        </DayWrapper>

    );

}

export default DaySummaryPanel;