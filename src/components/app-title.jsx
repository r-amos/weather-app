import React from 'react';

import styled from 'styled-components';

const AppTitle = ({text}) => {
    
    const Wrapper = styled.section`

        padding:20px 0px;
        margin: 0px 20px;

    `;

    const Title = styled.h1`

        font-size: 2rem;
        text-transform:uppercase;
    
    `;

    return (

        <Wrapper>
            <Title>{text}</Title>
        </Wrapper>

    )

}  

export default AppTitle;