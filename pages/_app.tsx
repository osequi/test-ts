import React, { createContext } from "react";
import type { AppProps } from "next/app";
import theme from "../src/theme/";

const ThemeContext = createContext(null);

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <ThemeContext.Provider value={theme}><Component {...pageProps} /></ThemeContext.Provider>;
};

export default MyApp;
