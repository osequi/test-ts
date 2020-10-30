/**
 * Sets the max-width of a text to display 50-60 characters in a row.
 */
const useMaxWidth = (
  value: 35,
  exceptions: ":not(h1):not(h2):not(h3):not(h4):not(h5):not(h6)"
): object => {
  return {
    [`& > * ${exceptions}`]: {
      maxWidth: `calc(${value} * var(--lem))`,
    },
  };
};

export default useMaxWidth;
