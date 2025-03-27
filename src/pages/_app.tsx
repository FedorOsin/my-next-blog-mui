// src/pages/_app.tsx
import "~/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "~/components/Header";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline"; // Сбрасывает стили браузера
import theme from "~/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Header />
      <div className="container mx-auto py-8">
        {" "}
        {/*Этот контейнер можно убрать или изменить*/}
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
