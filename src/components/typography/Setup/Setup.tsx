import React from "react";
import Head from "next/head";
import { useTypographicGrid } from "../../../hooks";

/**
 * Sets up the typographic grid in the `<body>`.
 */
const Setup = () => {
  const css = useTypographicGrid("string");

  return (
    <Head>
      <style>{css}</style>
    </Head>
  );
};

export default Setup;
