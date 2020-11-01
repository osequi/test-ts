import { css } from "emotion";

/**
 * Transforms CSS style functions, and, style objects with labels, into classNames for Emotion.
 * @example: `const [styleFunctionKlass, styleObjectWithLabelKlass ] = useStyles([styleFunction, styleObjectWithLabel], props)`
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
       * Returns value both for style functions and objects.
       */
      const value = isFunction ? css(item(props)) : css(item);
      return [...result, value];
    }, [])
  );
};

export default useStyles;
