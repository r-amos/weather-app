import React from 'react';
import Button from './button';

import styled from 'styled-components';

const SearchBar = (props) => {

    const Wrapper = styled.div`

        padding-bottom:50px;
    
    `;

    const Input = styled.input`

        height:40px;
        width:60%;
        font-size:30px;
    
    `;

    const moveCursorToEnd = (event) => {

        let temp = event.target.value;
        
        event.target.value = '';

        event.target.value = temp;

    }


    return (

        <Wrapper>
            <Input 
                autoFocus 
                onFocus={moveCursorToEnd} 
                onChange={(event) => props.onInputChange(event.target.value)} 
                value={props.term} 
                onKeyPress={props.onEnter} 
            />
            <Button onClick={props.onButtonClick}>Search</Button>
        </Wrapper>

    );

}

export default SearchBar;