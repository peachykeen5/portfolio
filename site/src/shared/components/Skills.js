import React from "react";
import { ProgressBar, FixedWidthRow, Column } from "./";
import { Label } from "../../uiLibrary/typography";
import * as ds from "../../uiLibrary";

export const Skills = ({ skills, theme, idx }) => {
  return (
    <FixedWidthRow mx={ds.spacing.s4} py={0}>
      {skills.map((so, i) => {
        return (
          <>
            <Column span={2} vc>
              <Label>{so.label}</Label>
            </Column>
            <Column span={4} vc pr={ds.spacing.s3}>
              <ProgressBar
                completed={so.progress}
                color={
                  idx % 2 === 0 ? theme.secondaryContrast : theme.primaryContrast
                }
              />
            </Column>
          </>
        );
      })}
    </FixedWidthRow>
  );
};
