import { useContext } from "react";
import { ThemeContext } from "../../pages/_app";

const useTheme = () => {
  return useContext(ThemeContext);
};

export default useTheme;
