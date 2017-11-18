import styled from 'styled-components';

const Button = styled.button`

    color: white;
    font-size: 1rem;
    border: 0;
    border-radius: 3px;
    padding: 7px;
    display:block;
    letter-spacing:1px;
    text-transform:uppercase;
    cursor:pointer;
    background: ${props => props.primary ? '#e74c3c' : '#2980b9'};
    width:120px;

`;

export default Button;