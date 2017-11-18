import React from 'react';

import HourSummary from './hour-summary';
import Button from './button';

import styled from 'styled-components';

const DayDetail = (props) => {

    const Container = styled.div`
    
        margin:20px;
    
    `;
    
    const DayContainer = styled.div`

        border-radius:5px;
        margin-bottom:20px;
    
    `;

    const DayTitle = styled.h1`

        padding-bottom:20px;
        font-size :2rem;
        margin:auto;
        text-transform:uppercase;
    
    `
    
    const DayDetailContainer = styled.div`

        display: flex;
        flex-direction: row;
        flex-wrap:wrap;

    `;

    const hourSumarrys = props.weather.map((hour) => { 
    
        return <HourSummary key={hour.dt} {...hour} />
    
    });

    return (
        
        <Container>
            <DayTitle>{props.city} {props.day}</DayTitle>
            <DayContainer>
                <DayDetailContainer>
                    {hourSumarrys} 
                </DayDetailContainer>
            </DayContainer>
            <Button primary onClick={props.goBack}>Back</Button>
        </Container>
    ); 

}

export default DayDetail;