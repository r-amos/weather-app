import React from 'react';
import Button from './button';

import styled from 'styled-components';

const SearchBar = (props) => {

    const Wrapper = styled.div`

        display: flex;
        margin-bottom:20px;
    
    `;

    const Container = styled.div`

        margin: 0px 20px;
    
    `

    const Input = styled.input`

        width: 300px;
        height:30px;
        font-size:22px;
        padding:0px 5px;
        margin-bottom: 10px;
        text-transform:uppercase;
    
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
                <Button onClick={props.onButtonClick}>Add City +</Button>
            </Container>
        </Wrapper>

    );

}

export default SearchBar;