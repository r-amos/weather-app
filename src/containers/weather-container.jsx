import React from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';

import SummaryPanel from '../components/summary-panel';
import DaySummaryPanels from '../components/day-summary-panels';

const Container = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border: black solid 1px;
    padding: 10px 0px;
    margin: 0px 5px 10px 5px;

`;

const WeatherPanel = (props) => {

    const convertTemp = temp => Math.round(temp - 273)

    const summaryPanels = props.weather.map(({current, forecast}, index) => {

        const weather = {
            
            city: current.name,

            temp: {

                average: convertTemp(current.main.temp),
                max: convertTemp(current.main['temp_max']),
                min: convertTemp(current.main['temp_min'])

            },

            description: current.weather[0].description,
            wind: current.wind

        }

 
        const days = forecast.list.map(timeframe => timeframe['dt_txt'].substring(0,10)).filter((date,index, array) => array.indexOf(date) === index);
        
        let daySummary = new Map();
        
        days.forEach((key) => {

            const value = forecast.list.filter((timeframe) => timeframe['dt_txt'].substring(0,10) === key);

            daySummary.set(key,value);

        });

        return ( 

            <Container key={index}>
                <SummaryPanel {...weather} />
                <DaySummaryPanels data={daySummary} />
            </Container>

            )

    });

    return (

        <div>
            {summaryPanels}
        </div>

    );

}

const mapStateToProps = ({weather}) => {

    return {

        weather: weather

    }

}

export default connect(mapStateToProps, null)(WeatherPanel);