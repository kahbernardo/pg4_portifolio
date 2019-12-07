import styled from 'styled-components'

export const Link = styled.a`
    color: ${props => props.cor ? 'white' : 'lightgrey'};
     transition:  0.3s ease-in-out;

    &:hover {
        color:#990000;
        font-size:24px;
         
    }`

export const LinkInferior = styled.a`
     transition:  0.3s ease-in-out;

    &:hover {
        color:#990000;
        
         
    }`
    


