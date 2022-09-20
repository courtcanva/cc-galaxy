import React from "react";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../store";
import { Chakra } from "@/styles/index";
import Layout from "@/layouts";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import SignUp from "./signup";

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  pageProps: {
    cookies: string | undefined;
    children: React.ReactNode;
  };
};

function CourtCanvaApp({ Component, pageProps }: AppPropsWithLayout) {
  if (true)
    return (
      <Chakra>
        <Provider store={store}>
          <SignUp />
        </Provider>
      </Chakra>
    );
  return (
    <Chakra>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </Chakra>
  );
}

export default CourtCanvaApp;
