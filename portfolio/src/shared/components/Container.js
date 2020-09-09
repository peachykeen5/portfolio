import styled from "styled-components";
import { space, color, height, justifyContent } from "styled-system";

export const FixedWidthContainer = styled.div`
    ${space};
    ${color};
    ${height};
    ${justifyContent};
    max-width: 1200px;
    margin: auto;
`