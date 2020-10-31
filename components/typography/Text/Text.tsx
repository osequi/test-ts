import {
  FC,
  ComponentClass,
  ReactNode,
  Component,
  HTMLProps,
  createElement,
} from "react";
import { cx } from "emotion";
import { startCase } from "lodash";

/**
 * Imports other components ans hooks.
 */
import { useStyles, useTheme, useFindInArrays, useFont } from "../../../hooks";

/**
 * Defines the text types.
 */
export type TTextVariants = "default" | "body" | "longform" | "title";

/**
 * Defines the prop types.
 */
export type TText = {
  variant: TTextVariants;
  as?: FC | ComponentClass | string;
  children?: ReactNode[] | Component[] | any[];
};

/**
 * Defines the default props.
 */
const defaultProps: TText = {
  variant: "default",
  as: "div",
  children: null,
};

/**
 * Defines the styles.
 */
const defaultText = (props: { defaultFont: object }) => ({
  ...props.defaultFont,
});

/**
 * Displays content inside a Text container.
 */
const Text = (props: TText) => {
  const { variant, as, children } = props;

  const theme = useTheme();
  const {
    typography: { fonts },
  } = theme;
  const defaultFont = useFont("Default", fonts);

  const { defaultTextKlass } = useStyles([defaultText], {
    defaultFont: defaultFont,
  });

  const props2: HTMLProps<any> = {
    className: cx(defaultTextKlass, `Text${startCase(variant)}`),
  };

  return createElement(as, props2, children);
};

Text.defaultProps = defaultProps;

export default Text;
