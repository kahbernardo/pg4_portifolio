import styled from 'styled-components'

export const Link = styled.a`
    color: ${props => props.cor ? 'white' : 'yellow'};

    &:hover {
        color:red;
    }
`