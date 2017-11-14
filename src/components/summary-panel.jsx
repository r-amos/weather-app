import React from 'react';

import styled from 'styled-components';

const SummaryPanel = (props) => {

    const Container = styled.div`

        width:15%;
        border-right: 1px solid black;
    
    `;

    return (

        <Container>
            <h2>{props.city}</h2>
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