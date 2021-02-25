import React from "react";
import NextHead from "next/head";

const Head = () => (
  <>
    <NextHead>
      <title>Responsible Navbar</title>
      <meta name="description" content="Fully responsible navbar" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#90cdf4" />
      <meta name="apple-mobile-web-app-status-bar" content="#90cdf4" />
      <link rel="manifest" href="/site.webmanifest" key="site-manifest" />
      <link rel="apple-touch-icon" href="/logo-96x96.png" />
    </NextHead>
  </>
);

export default Head;
