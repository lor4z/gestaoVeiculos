import styled from "styled-components";

export const CustomImage = styled.div`
    display: flex;
    width: ${({ size = 12 }) => `${size}`}px;
    height: ${({ size = 12 }) => `${size}`}px;
    margin-left: ${({ marginLeft }) => `${marginLeft}`}px;
    margin-right: ${({ marginRight }) => `${marginRight}`}px;
    background-image: ${({ image }) => `url("${image}")`};
    background-size: ${({ size = 12 }) => `${size}`}px;
    background-position: center;
    background-repeat: no-repeat;
`
