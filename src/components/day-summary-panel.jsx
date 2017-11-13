import React from 'react';

import styled from 'styled-components';

const DaySummaryPanel = ({day}) => {

    console.log(day[0]);
    console.log(day[0]['dt_txt']);
    
    const DayWrapper = styled.div`
    
        background:grey;
        margin-bottom:10px;
    
    `;

    const DayTitle = styled.h3`
       
        color: red;
    
    `;

    const DaytimeTemp = styled.h3`
        
        color: red;
    
    `;

    const NightTimeTemp = styled.h3`
    
    color: red;

    `;
    
    return (

        <DayWrapper>
            <DayTitle>{day[0]['dt_txt']}</DayTitle>
            <DaytimeTemp></DaytimeTemp>
            <NightTimeTemp></NightTimeTemp>
        </DayWrapper>

    );

}

export default DaySummaryPanel;