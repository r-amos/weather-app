import React from 'react';

import styled from 'styled-components';

import weatherIcons from './icons.json';

import '../../node_modules/weather-icons/css/weather-icons.css';

const Icon = (props) => {

    const StyledIcon = styled.i`
    
        margin: auto;

    `;

    let weatherIcon = weatherIcons[props.code].icon;
    
    if (!(props.code > 699 && props.code < 800) && !(props.code > 899 && props.code < 1000)) {

        weatherIcon = 'day-' + weatherIcon;
        
        }
    
    weatherIcon = 'wi wi-' + weatherIcon;

    return <StyledIcon className={weatherIcon} />;

}

export default Icon;