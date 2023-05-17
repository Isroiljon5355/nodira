import { MantineProvider } from "@mantine/core";
import flattenMessages from "@utils/fluttenMessage";
import type { AppProps } from "next/app";
import Head from "next/head";
import { IntlProvider } from "react-intl";

import Layout from "@layouts/Layout";
import { ColorScheme, ColorSchemeProvider } from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import NextProgress from "next-progress";
import { useState } from "react";
import "./../styles/global.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export enum Lang {
  uz = "uz",
  en = "en",
  ru = "ru",
}

function MyApp({ Component, pageProps, router }: AppProps) {
  const [load, setLoad] = useState(true);
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const [activeLang] = useLocalStorage<Lang>({
    key: "lang",
    defaultValue: Lang.uz,
  });
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  return (
    <>
      <IntlProvider
        messages={flattenMessages("uz")}
        locale={"uz"}
        defaultLocale={"uz"}
      >
        <Head>
          <title>NamanganTurist.uz</title>
          {/* bu yerda meta teglar boladi */}
        </Head>

        <ColorSchemeProvider
          colorScheme={colorScheme}
          toggleColorScheme={toggleColorScheme}
        >
          <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
              colorScheme,
            }}
          >
            <NextProgress
              delay={300}
              options={{ showSpinner: false }}
              color="#FFC527"
            />
            <Layout>
              <Component {...pageProps} />
              <ToastContainer />
            </Layout>
          </MantineProvider>
        </ColorSchemeProvider>
      </IntlProvider>
    </>
  );
}
export default MyApp;
