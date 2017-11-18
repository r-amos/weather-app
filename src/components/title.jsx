import React from 'react';

import styled from 'styled-components';

const Title = (props) => {
  
    const Wrapper = styled.section`

        padding:20px 0px;
        margin: 0px 20px;
        text-align: ${() => props.align === 'center' ? 'center' : 'left'};

    `;

    const Title = styled.h1`

        font-size: 2rem;
        text-transform:uppercase;
    
    `;

    return (

        <Wrapper>
            <Title>{props.text}</Title>
        </Wrapper>

    )

}  

export default Title;