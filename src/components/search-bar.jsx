import React from 'react';
import Button from './button';

import styled from 'styled-components';

const SearchBar = (props) => {

    const Wrapper = styled.div`

        display: flex;
        margin-bottom:20px;
    
    `;

    const Container = styled.div`

        margin:auto;
    
    `

    const Input = styled.input`

        width: 500px;
        height:30px;
        font-size:29px;
        margin-bottom: 10px;
    
    `;

    const moveCursorToEnd = (event) => {

        let temp = event.target.value;
        
        event.target.value = '';

        event.target.value = temp;

    }


    return (

        <Wrapper>
            <Container>
                <Input 
                    autoFocus 
                    onFocus={moveCursorToEnd} 
                    onChange={(event) => props.onInputChange(event.target.value)} 
                    value={props.term} 
                    onKeyPress={props.onEnter} 
                />
                <Button onClick={props.onButtonClick}>Search</Button>
            </Container>
        </Wrapper>

    );

}

export default SearchBar;