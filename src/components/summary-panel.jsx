import React from 'react';

import styled from 'styled-components';

const SummaryPanel = (props) => {

    const Container = styled.div`

        width:25%;
        margin-right:10px;
        border-right: 1px solid #95a5a6;

    `;

    const Title = styled.h2`

        text-transform:uppercase;
        display:flex;
        height:75%;

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
                <div>Summary: {props.description}</div>
            </div>
        </Container>

    );

}

export default SummaryPanel;