import { css } from "emotion";
import { camelCase } from "lodash";

/**
 * Transforms CSS style functions, and, style objects with labels, into classNames for Emotion.
 * Example: `const { styleFunctionKlass, styleObjectWithLabelKlass } = useStyles([styleFunction, styleObjectWithLabel], props, theme)`
 */
const useStyles = (styles = [], props = {}) => {
  return (
    styles &&
    styles.reduce((result, item) => {
      /**
       * Checks if this is a style object or function.
       */
      const isFunction = item && item.name;
      /**
       * Checks if this is a style object with a label.
       */
      const isObjectWithLabel = item && item.label;
      /**
       * Logs a warning message if a style object without a label is passed.
       */
      if (!isFunction && !isObjectWithLabel) {
        console.log("A style object without label was received:", item);
      }
      /**
       * Adds a `Klass` suffix to the style function name / style object label.
       * Falls back silently when a style object without label is passed.
       */
      const name = isFunction
        ? `${item.name}Klass`
        : isObjectWithLabel
        ? `${camelCase(item.label)}Klass`
        : "object-without-label";
      /**
       * Returns value both for style functions and objects.
       */
      const value = isFunction ? css(item(props)) : css(item);
      return { ...result, [`${name}`]: value };
    }, {})
  );
};

export default useStyles;
