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
  font-family: Helvetica Neue;
  font-size: ${ds.typeScale.t3};
  font-weight: 200;
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
  font-family: Helvetica Neue;
  font-size: ${ds.typeScale.t7};
  font-weight: 600;
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
  font-family: Helvetica Neue;
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
  text-transform: uppercase;
`;
