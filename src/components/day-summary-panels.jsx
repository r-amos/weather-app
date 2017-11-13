import React from 'react'

import DaySummaryPanel from './day-summary-panel';

const DaySummaryPanels = (props) => {

    return (

        Array.from(props.data.values()).map((weather, id) => {
            
            return <DaySummaryPanel key={id} day={weather} />
                    
        })

    );

}

export default DaySummaryPanels;