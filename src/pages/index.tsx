import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import Head from 'next/head';

import ResponsiveAppBar from '../ui/Appbar';

const theme = createTheme({
  palette: {
    primary: {
      main: '#DCAB6B',
      dark: '#774E24',
    },
    secondary: {
      light: '#C3C9E9',
      main: '#235494',
    },
    contrastThreshold: 4.5,
    tonalOffset: 0.2,
  },
});

function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <ResponsiveAppBar />
      </ThemeProvider>

      <div>toto</div>
    </>
  );
}

export default Home;
