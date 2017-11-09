import React from 'react';

import SummaryPanel from './summary-panel';
import DaySummaryPanels from './day-summary-panels';

const WeatherPanel = ({weatherData}) => {

    return (

        <div>
            <SummaryPanel city={weatherData.city} />
            <DaySummaryPanels days={weatherData.days} />
        </div>

    );

}

export default WeatherPanel;