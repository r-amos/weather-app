import React from 'react';

import Map from './map';

import styled from 'styled-components';

const SummaryPanel = (props) => {

    console.log(props);

    const Container = styled.div`

        width: 20%;
        margin-right: 10px;
        border-right: 1px solid #95a5a6;
        display:flex;
        flex-direction:column;
        padding: 0px 20px 0px 10px;

    `;

    const Title = styled.h2`

        text-transform:uppercase;
        padding-bottom:5px;

    `;

    const Summary = styled.div`

        padding-top:10px;
    
    `;

    return (

        <Container>
            <Title>{props.city}</Title>
            <Map {...props.coord} />
            <Summary>
                <div>Avg. {props.temp.average}</div>
                <div>Max. {props.temp.max}</div>
                <div>Min. {props.temp.min}</div>
                <div>Summary: {props.description}</div>
            </Summary>
        </Container>

    );

}

export default SummaryPanel;