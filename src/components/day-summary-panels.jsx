import React from 'react'

import DaySummaryPanel from './day-summary-panel';

const DaySummaryPanels = (props) => {

    return (

        Array.from(props.data.keys()).map((day) => {
            
            return <DaySummaryPanel key={day} day={day} weather={props.data.get(day) } city={props.city} showDetails={props.showDetails} />
                    
        })

    );

}

export default DaySummaryPanels;