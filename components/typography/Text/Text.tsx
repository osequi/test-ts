import React, { FC, createElement } from "react";
import { cx } from "emotion";
import { useStyles, useTheme, useFindInArrays, useFont } from "../../../hooks";
import { startCase } from "lodash";

export type TTextVariants = "default" | "body" | "longform" | "title";

export type TText = {
  variant: TTextVariants;
  as?: FC;
  children?: any;
};

const defaultText = (props) => ({
  ...props.font,
});

const Text = (props: TText) => {
  const { variant, as, children } = props;

  const theme = useTheme();
  const {
    typography: { fonts },
  } = theme;
  const font = useFont("Default", fonts);

  const { defaultTextKlass } = useStyles([defaultText], { font: font });

  const props2 = {
    className: cx(defaultTextKlass, `Text${startCase(variant)}`),
  };

  return createElement("div", props2, children);
};

export default Text;
