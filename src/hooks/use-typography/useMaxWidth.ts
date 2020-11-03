export type TMaxWidth = {
  value?: number;
  exceptions?: string;
};

const defaultProps = {
  value: 35,
  exceptions: ":not(h1):not(h2):not(h3):not(h4):not(h5):not(h6)",
};

/**
 * Sets the max-width of a text to display 50-60 characters in a row.
 */
const useMaxWidth = (props?: TMaxWidth): object => {
  const { value, exceptions } = { ...defaultProps, ...props };

  const jss = {
    [`& > *${exceptions}`]: {
      maxWidth: `calc(${value} * var(--lem))`,
    },
  };

  return {
    ...jss,
  };
};

export default useMaxWidth;
