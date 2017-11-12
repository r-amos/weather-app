import React from 'react';

const SummaryPanel = (props) => {

    if(props.city === undefined) return null

    return (

        <div>
            <h2>{props.city}</h2>
            <div>
                <div>Avg. {props.temp.average}</div>
                <div>Max. {props.temp.max}</div>
                <div>Min. {props.temp.min}</div>
                <div>Overall {props.description}</div>
            </div>
        </div>

    );

}

export default SummaryPanel;