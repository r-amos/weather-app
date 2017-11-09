import React from 'react'

import DaySummaryPanel from './day-summary-panel';

const DaySummaryPanels = ({days}) => {

    return (

        days.map((day, id) => {
            
            return <DaySummaryPanel key={id} day={day} />
                    
        })

    );

}

export default DaySummaryPanels;