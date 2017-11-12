import React from 'react';

const SummaryPanel = ({city},{onButtonClick}) => {

    return (

        <div>
            <h2>{city.name}</h2>
            <div>
                <div>{city.time}</div>
                <div>{city.temp}</div>
                <div>{city.wind}</div>
            </div>
        </div>

    );

}

export default SummaryPanel;