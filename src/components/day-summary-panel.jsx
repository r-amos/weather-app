import React from 'react';

import styled from 'styled-components';

const DaySummaryPanel = (props) => {
 
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

    },Infinity) - 273);

    const DayWrapper = styled.div`
    
        width: 10%;
    
    `;

    const DayTitle = styled.h3`
       
    
    `;

    const DaytimeTemp = styled.div`
        

    
    `;

    const NightTimeTemp = styled.div`
    


    `;
    
    return (

        <DayWrapper>
            <DayTitle>{new Date(props.day).toLocaleDateString('en-GB', { weekday: 'long' })}</DayTitle>
            <DaytimeTemp>Max. Day: {dayHi}</DaytimeTemp>
            <NightTimeTemp>Min. Night: {nightLow}</NightTimeTemp>
        </DayWrapper>

    );

}

export default DaySummaryPanel;