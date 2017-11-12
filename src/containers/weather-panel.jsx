import React from 'react';
import { connect } from 'react-redux';

import SummaryPanel from '../components/summary-panel';
import DaySummaryPanels from '../components/day-summary-panels';

const WeatherPanel = (props) => {

    console.log('props ', props);

    return (

        <div>
            <SummaryPanel city={props.weatherData} />
            <DaySummaryPanels days={props.weatherData.days} />
        </div>

    );

}

const mapStateToProps = ({weather}) => {

    return {

        weather: weather

    }

}

export default connect(mapStateToProps, null)(WeatherPanel);