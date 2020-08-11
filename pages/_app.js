import { AuthProvider } from '@/lib/auth';
import { ThemeProvider } from 'emotion-theming';
import { Global, css } from '@emotion/core';
import customTheme from '@/styles/theme';
import Head from 'next/head';
import { CSSReset } from '@chakra-ui/core';

const GlobalStyle = ({ children }) => {
  return (
    <>
      <CSSReset />
      <Global
        styles={css`
          html {
            min-width: 360px;
            scroll-behavior: smooth;
          }

          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
        `}
      />
    </>
  );
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={customTheme}>
      <AuthProvider>
        <GlobalStyle />
        <Head>
          <title>FastFeedback</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;
