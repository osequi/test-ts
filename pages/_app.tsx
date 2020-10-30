import React, { createContext } from "react";
import type { AppProps } from "next/app";

import theme from "../theme/";
import { Setup } from "../components/typography";

const ThemeContext = createContext(null);

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeContext.Provider value={theme}>
      <Setup />
      <Component {...pageProps} />
    </ThemeContext.Provider>
  );
};

export default MyApp;
export { ThemeContext };
