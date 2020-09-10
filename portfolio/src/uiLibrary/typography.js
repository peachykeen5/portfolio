import styled from "styled-components";
import {
  space,
  color,
  fontWeight,
  textAlign,
  fontSize,
  fontFamily,
  display,
  width,
  flex,
  alignSelf,
  lineHeight,
  letterSpacing,
} from "styled-system";
import * as ds from ".";

export const Body = styled.p`
  font-family: "Open sans", sans-serif;
  font-size: ${ds.typeScale.t4};
  font-weight: 400;
  ${space};
  ${color};
  ${fontWeight};
  ${textAlign};
  ${fontSize};
  ${fontFamily};
  ${display};
  ${width};
  ${flex};
  ${alignSelf};
  ${lineHeight};
  ${letterSpacing};
`;

export const Headline = styled.h1`
  font-family: "Ubuntu", sans-serif;
  text-transform: uppercase;
  font-size: ${ds.typeScale.t8};
  font-weight: 700;
  ${space};
  ${color};
  ${fontWeight};
  ${textAlign};
  ${fontSize};
  ${fontFamily};
  ${display};
  ${width};
  ${flex};
  ${alignSelf};
  ${lineHeight};
  ${letterSpacing};
`;

export const H2 = styled.h2`
  font-family: "Ubuntu", sans-serif;
  font-size: ${ds.typeScale.t7};
  font-weight: 700;
  text-transform: uppercase;
  ${space};
  ${color};
  ${fontWeight};
  ${textAlign};
  ${fontSize};
  ${fontFamily};
  ${display};
  ${width};
  ${flex};
  ${alignSelf};
  ${lineHeight};
  ${letterSpacing};
`;

export const H3 = styled.h2`
  font-family: "Open sans", sans-serif;
  font-size: ${ds.typeScale.t6};
  font-weight: 400;
  ${space};
  ${color};
  ${fontWeight};
  ${textAlign};
  ${fontSize};
  ${fontFamily};
  ${display};
  ${width};
  ${flex};
  ${alignSelf};
  ${lineHeight};
  ${letterSpacing};
`;

export const Label = styled(Body)`
  font-size: ${ds.typeScale.t5};
  font-weight: 700;
  text-transform: uppercase;
`;

export const ToggleLabel = styled.label`
  font-weight: bold;
  display: inline;
  grid-auto-flow: column;
  grid-auto-columns: min-content;
  white-space: nowrap;
  align-items: center;
  ${color};
`;
