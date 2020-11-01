import React from "react";
import Head from "next/head";
import { useTypographicGrid, useTheme } from "../../../hooks";

/**
 * Sets up the typographic grid in the `<body>`.
 */
const Setup = () => {
  const theme = useTheme();

  const { typography, breakpoints } = theme;
  const { grid } = typography;

  const css = useTypographicGrid(grid, breakpoints, "string");

  return (
    <Head>
      <style>{css}</style>
    </Head>
  );
};

export default Setup;
