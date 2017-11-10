import React from 'react';

import styled from 'styled-components';

const AppTitle = ({text}) => {
    
    const Wrapper = styled.section`

        background-color: orangered;
        padding:20px 0px;

    `;

    const Title = styled.h1`
    
        color: white;
        font-size: 5rem;
        text-align:center;

    
    `;

    return (

        <Wrapper>
            <Title>{text}</Title>
        </Wrapper>

    )

}  

export default AppTitle;