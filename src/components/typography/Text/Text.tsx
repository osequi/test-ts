import { FC, ComponentClass, HTMLProps, createElement } from "react";
import { cx } from "emotion";
import { startCase } from "lodash";

/**
 * Imports other components ans hooks.
 */
import {
  useStyles,
  useTheme,
  useFonts,
  useMaxWidth,
  useScale,
  useSpacing,
} from "../../../hooks";

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
  children?: any | any[];
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
const defaultText = (props: {
  defaultFont: object;
  defaultScale: object;
}): object => ({
  ...props.defaultFont,
  ...props.defaultScale,
});

const bodyText = (props: {
  defaultFont: object;
  defaultScale: object;
  maxWidth: object;
  adjacentSpacing: object;
}): object => ({
  ...props.defaultFont,
  ...props.defaultScale,
  ...props.maxWidth,
  ...props.adjacentSpacing,
});

/**
 * Displays content inside a Text container.
 */
const Text = (props: TText) => {
  const { variant, as, children } = props;

  /**
   * Loads theme data.
   */
  const theme = useTheme();
  const {
    typography: {
      scale: { preset },
    },
  } = theme;

  /**
   * Prepares data.
   */
  const [defaultFont] = useFonts(["Default"]);
  const defaultScale = useScale(0, preset);
  const maxWidth = useMaxWidth();
  const adjacentSpacing = useSpacing("Adjacent siblings margin top");

  /**
   * Loads styles.
   */
  const [defaultTextKlass, bodyTextKlass] = useStyles([defaultText, bodyText], {
    defaultFont: defaultFont,
    defaultScale: defaultScale,
    maxWidth: maxWidth,
    adjacentSpacing: adjacentSpacing,
  });

  /**
   * Matches styles with the variants.
   */
  let klass = null;
  switch (variant) {
    case "default":
      klass = defaultTextKlass;
    case "body":
      klass = bodyTextKlass;
  }

  /**
   * Prepares the props for the new element.
   */
  const props2: HTMLProps<any> = {
    className: cx(klass, `Text${startCase(variant)}`),
  };

  return createElement(as, props2, children);
};

Text.defaultProps = defaultProps;

export default Text;
