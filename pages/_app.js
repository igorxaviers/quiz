import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  body {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    background-color: #f1f1f1;
  }
`;

const { theme } = db;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{db.title}</title>
        <meta property="og:title" content="My page title" key="title" />
        <meta name="description" content="" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://quiz-kappa.vercel.app/" />
        <meta property="og:title" content={db.title} />
        <meta property="og:description" content={db.description} />
        <meta property="og:image" content={db.bg} />

        <meta property="twitter:card" content={db.bg} />
        <meta property="twitter:url" content="https://quiz-kappa.vercel.app/" />
        <meta property="twitter:title" content={db.title} />
        <meta property="twitter:description" content={db.description} />
        <meta property="twitter:image" content={db.bg} />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
