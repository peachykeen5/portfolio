import React from "react";
import { ProgressBar, FixedWidthRow, Column } from "./";
import { Label } from "../../uiLibrary/typography";
import * as ds from "../../uiLibrary";

export const Skills = ({ skills, theme, idx }) => {
  return (
    <FixedWidthRow mx={[ds.spacing.s4, ds.spacing.s1]} py={[ds.spacing.s3, 0]}>
      {skills.map((so, i) => {
        return (
          <React.Fragment key={`${i}${so.idx}`}>
            <Column span={2} vc>
              <Label
                key={so.label}
                fontSize={[ds.typeScale.t5, ds.typeScale.t4, ds.typeScale.t5]}
              >
                {so.label}
              </Label>
            </Column>
            <Column span={4} vc pr={ds.spacing.s3}>
              <ProgressBar
                key={`${idx}`}
                completed={so.progress}
                color={
                  idx % 2 === 0
                    ? theme.secondaryContrast
                    : theme.primaryContrast
                }
              />
            </Column>
          </React.Fragment>
        );
      })}
    </FixedWidthRow>
  );
};
