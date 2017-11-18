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
 
    const DayDetailContainer = styled.div`

        display: flex;
        flex-direction: row;
        flex-wrap:wrap;

    `;

    const hourSummarys = props.weather.map((hour) => { 
    
        return <HourSummary key={hour.dt} {...hour} />
    
    });

    return (
        
        <Container>
            <DayContainer>
                <DayDetailContainer>
                    {hourSummarys} 
                </DayDetailContainer>
            </DayContainer>
            <Button primary onClick={props.goBack}>Back</Button>
        </Container>
    ); 

}

export default DayDetail;