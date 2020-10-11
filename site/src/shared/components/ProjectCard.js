import React from "react";
import { Column, FixedWidthRow, LogoImage } from "./";
import { H3, Body } from "../../uiLibrary";
import * as ds from "../../uiLibrary";

export const ProjectCard = ({ name, imageSource, link, body, theme, idx }) => {
  return (
    <FixedWidthRow
      bg={theme.textLowContrast}
      padding={0}
      my={ds.spacing.s3}
      style={{ width: "50%", boxShadow: `2px 2px 5px #1f1f1f` }}
    >
      <Column
        order={idx % 2 === 0 ? 1 : 2}
        span={6}
        bg={theme.secondaryAccent}
        display="flex"
        padding={ds.spacing.s3}
      >
        <LogoImage src={require(`../../images/${imageSource}`)} width={"150px"} />
      </Column>
      <Column
        span={6}
        order={idx % 2 === 0 ? 2 : 1}
        display="flex"
        padding={ds.spacing.s4}
        flexDirection="column"
        textAlign={idx % 2 === 0 ? "right" : "left"}
      >
        <H3 my={0} fontWeight={700} color={theme.textHighContrast}>{name}</H3>
        <Body color={theme.textHighContrast}>{body}</Body>
      </Column>
    </FixedWidthRow>
  );
};
