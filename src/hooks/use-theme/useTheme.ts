import { useContext } from "react";
import { ThemeContext } from "../../../pages/_app.jsx";

const useTheme = () => {
  return useContext(ThemeContext);
};

export default useTheme;
