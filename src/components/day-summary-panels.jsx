import React from 'react'

import DaySummaryPanel from './day-summary-panel';

const DaySummaryPanels = ({list}) => {

    return (

        list.map((weather, id) => {
            
            return <DaySummaryPanel key={id} day={weather} />
                    
        })

    );

}

export default DaySummaryPanels;