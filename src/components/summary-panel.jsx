import React from 'react';

import styled from 'styled-components';

const SummaryPanel = (props) => {

    const Container = styled.div`

        width:25%;
        margin-right:10px;
        border-right: 1px solid black;

    `;

    const Title = styled.h2`

        text-transform:uppercase;

    `;

    const mapContainer = styled.div`


    `;

    return (

        <Container>
            <Title>{props.city}</Title>
            <div>
                <div>Avg. {props.temp.average}</div>
                <div>Max. {props.temp.max}</div>
                <div>Min. {props.temp.min}</div>
                <div>Overall {props.description}</div>
            </div>
        </Container>

    );

}

export default SummaryPanel;