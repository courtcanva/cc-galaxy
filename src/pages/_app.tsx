import type { AppProps } from "next/app";
import { Chakra } from "@/styles";
import Layout from "@/layouts";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Chakra>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Chakra>
  );
}

export default MyApp;
