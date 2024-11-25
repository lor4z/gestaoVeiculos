import styled from "styled-components";

export const CustomImage = styled.div`
    display: flex;
    width: ${({ sizeW = 12 }) => `${sizeW}`}px;
    height: ${({ sizeH = 12 }) => `${sizeH}`}px;
    margin-left: ${({ marginLeft }) => `${marginLeft}`}px;
    margin-right: ${({ marginRight }) => `${marginRight}`}px;
    background-image: ${({ image }) => `url("${image}")`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`
