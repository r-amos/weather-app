import React from 'react';

import styled from 'styled-components';

import Icon from './icon.jsx';

const HourSummary = (props) => {

    console.log(props);

    const HourContainer = styled.div`

        flex-grow: 1;
        margin: 10px;
        background-color: #ecf0f1;
        color: #95a5a6;
        border-radius:5px;
        padding:10px;
        max-width:15%;

        i {

            display:block;
            padding:20px 0px;
            font-size: 50px;
            text-align:center;


        }

    
    `;

    const Day = styled.div`

        letter-spacing: 1px;
        font-size: 1rem;
        margin-bottom:10px;
        text-align:center;
    
    `;

    const Text = styled.div`

        margin:10px;
    
    `;


    return (

        <HourContainer>
                <Day><h3>{props.dt_txt.split(' ')[1]}</h3></Day>
                <Icon code={props.weather[0].id} />
                <Text>{props.weather[0].description}</Text>
                <Text>Temp: {Math.round(props.main.temp -273)}</Text>
                <Text>{props.wind.speed}</Text>
                <Text>{props.wind.deg}</Text>
        </HourContainer>

    ) 

}

export default HourSummary;