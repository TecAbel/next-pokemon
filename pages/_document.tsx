import React from "react";
import { Html, Main, NextScript, Head } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="author" content="Abelardo Aqui"></meta>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </Head>
      <title>Pokemon app</title>
      <body className="dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
