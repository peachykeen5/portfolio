import styled from "styled-components";
import {
    space,
    color,
    display,
    justifyContent,
} from "styled-system";
import * as ds from "../../uiLibrary/theme";

export const Button = styled.button`
    padding: ${ds.spacing.s2};
    border: none;
    border-radius: 5px;
    ${space};
    ${color};
    ${display};
    ${justifyContent};
    &:hover {
        background: ${props => props.hover ? props.hover : "blue"}
    }
`