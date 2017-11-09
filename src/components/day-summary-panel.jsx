import React from 'react';

const DaySummaryPanel = ({day}) => {
    
    return (

        <div>
            <h3>{day.name}</h3>
            <div>{day.dayTemp}</div>
            <div>{day.nightTemp}</div>
        </div>

    );

}

export default DaySummaryPanel;