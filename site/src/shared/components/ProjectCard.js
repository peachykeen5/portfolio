import React from "react";
import { Column, FixedWidthRow, LogoImage } from "./";
import { H3, Body } from "../../uiLibrary";
import * as ds from "../../uiLibrary";

export const ProjectCard = ({ name, imageSource, link, body, theme, idx }) => {
  return (
    <a
      style={{
        textDecoration: "none",
        display: "flex",
        justifyContent: "center",
      }}
      rel="noopener noreferrer"
      href={`${link}`}
      target="_blank"
    >
      <FixedWidthRow
        hover
        bg={theme.textLowContrast}
        padding={0}
        my={ds.spacing.s3}
        width={["90%", "90%", "50%"]}
        style={{ boxShadow: `2px 2px 4px #2f2f2f` }}
      >
        <Column
          order={[1, idx % 2 === 0 ? 1 : 2]}
          span={6}
          bg={theme.secondaryAccent}
          display="flex"
          alignItems="center"
          padding={ds.spacing.s3}
        >
          <LogoImage
            src={require(`../../images/${imageSource}`)}
            width={["150px", "120px", "150px"]}
          />
        </Column>
        <Column
          span={6}
          order={idx % 2 === 0 ? 2 : 1}
          display="flex"
          padding={ds.spacing.s4}
          flexDirection="column"
          textAlign={["center", idx % 2 === 0 ? "right" : "left"]}
        >
          <H3 my={0} fontWeight={700} color={theme.textHighContrast}>
            {name}
          </H3>
          <Body color={theme.textHighContrast}>{body}</Body>
        </Column>
      </FixedWidthRow>
    </a>
  );
};
