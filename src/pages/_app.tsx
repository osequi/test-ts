import React, { createContext } from "react";
import type { AppProps } from "next/app";

import theme from "../theme/";
import { Setup, Text } from "../components/typography";

import "normalize.css";
import "../theme/typography/reset.css";
import "../theme/typography/fonts/fonts.css";

const ThemeContext = createContext(null);

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeContext.Provider value={theme}>
      <Setup />
      <Text variant="body">
        <Component {...pageProps} />
      </Text>
    </ThemeContext.Provider>
  );
};

export default MyApp;
export { ThemeContext };
