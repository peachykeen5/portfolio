import React from "react";
import styled from "styled-components";
import { space } from "styled-system";

const StyledContainer = styled.div`
    height: 20px;
    display: flex;
    width: 100%;
    background-color: #e7efee;
    border-radius: 5px;
    margin: 50px;
    ${space};
`

const StyledFiller = styled.div`
    height: 100%;
    display: flex;
    width: ${props => props.completed}%;
    background-color: ${props => props.color};
    border-radius: inherit;
    textAlign: right;
    z-index: 1;
`

export const ProgressBar = ({completed, color}) => {
    return (
        <StyledContainer margin={0}>
            <StyledFiller completed={completed} color={color}>
            </StyledFiller>
        </StyledContainer>
    )
}