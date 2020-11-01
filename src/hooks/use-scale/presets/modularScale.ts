import ms from "modularscale-js";
import { useTheme } from "../../";

/**
 * Defines the settings for the modular scale.
 * These settings are required to scale elements.
 * @see https://www.modularscale.com/?1&em&1.5
 */
export type TModularScaleSettings = {
  base?: number[];
  ratio?: number;
};

/**
 * Defines the default props.
 */
const defaultProps = {
  base: [1],
  ratio: 1.33,
};

/**
 * Returns a value from the modular scale.
 */
const modularScaleValue = (
  value: number,
  settings?: TModularScaleSettings
): number => {
  const theme = useTheme();

  const settings2 = settings
    ? settings
    : theme?.typography?.scale?.settings
    ? theme.typography.scale.settings
    : defaultProps;

  console.log("settings2:", settings2);

  return ms(value, settings2);
};

export default modularScaleValue;
