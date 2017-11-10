import React from 'react';
import Button from './button';

import styled from 'styled-components';

const SearchBar = () => {

    const Wrapper = styled.div`

        padding-bottom:50px;
    
    `;

    const Input = styled.input`

        height:40px;
        width:60%;
        font-size:30px;
    
    `;

    return (

        <Wrapper>
            <Input />
            <Button>Search</Button>
        </Wrapper>

    );

}

export default SearchBar;