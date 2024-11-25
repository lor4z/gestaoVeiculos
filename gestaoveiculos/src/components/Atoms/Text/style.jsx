import styled from "styled-components";

export const CustomText = styled.p`
    font-size: ${({ size }) => `${size || 14}px`};
    color: ${({ color }) => color || 'white'};
    font-family: ${({ fontFamily }) => fontFamily || 'Poppins'};
    text-align: ${({ align }) => align || 'start'};
    margin-top: ${({ marginTop }) => `${marginTop || 0}px`};
    margin-left: ${({ marginLeft }) => `${marginLeft || 0}px`};
    margin-bottom: ${({ marginBottom }) => `${marginBottom || 0}px`};
`