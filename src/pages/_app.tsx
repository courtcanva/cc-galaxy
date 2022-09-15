import React, { useEffect } from "react";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { useRouter } from "next/router";
import store from "../store";
import { Chakra } from "@/styles/index";
import Layout from "@/layouts";
import Login from "./login";
import UserTokenService from "@/components/TokenService";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  pageProps: {
    cookies?: string | undefined;
    children: React.ReactNode;
  };
};

function CourtCanvaApp({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter();
  let accessToken: string | undefined;
  if (UserTokenService.getUserToken()) accessToken = UserTokenService.getUserToken()?.accessToken;

  useEffect(() => {
    !UserTokenService.getUserToken() && router.replace("/login");
    UserTokenService.getUserToken() && router.pathname === "/login" && router.replace("/");
  }, [router.pathname]);

  if (typeof accessToken !== "string")
    return (
      <Chakra>
        <Provider store={store}>
          <Login />
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
