import React from 'react';

import styled from 'styled-components';

const DayDetail = (props) => {

    console.log(props);

    return (
        <div>
            <h1>{props.city} {props.day}</h1>
            <button onClick={()=> props.showDetails(false)}>Back</button>
        </div>

    ); 

}

export default DayDetail;