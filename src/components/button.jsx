import React from 'react';

const Button = ({text}) => {

    return <div onClick={() => console.log('Click')}>{text}</div>;

}

export default Button;