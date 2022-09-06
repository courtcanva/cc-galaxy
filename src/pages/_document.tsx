// import { ServerStyleSheet } from "styled-components";
// import Document, { DocumentContext, DocumentInitialProps } from "next/document";

// export default class MyDocument extends Document {
//   static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
//     // Create an instance of ServerStyleSheet
//     const sheet = new ServerStyleSheet();

//     // Retrieve styles from components in the page
//     const originalRenderPage = ctx.renderPage;

//     try {
//       ctx.renderPage = () =>
//         originalRenderPage({
//           enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
//         });

//       const initialProps = await Document.getInitialProps(ctx);
//       return {
//         ...initialProps,
//         styles: [
//           <>
//             {initialProps.styles}
//             {/* Extract the styles as <style> tags */}
//             {sheet.getStyleElement()}
//           </>,
//         ],
//       };
//     } finally {
//       sheet.seal();
//     }
//   }
// }

/* eslint-disable react/jsx-props-no-spreading */
import { ColorModeScript } from "@chakra-ui/react";
import type { DocumentContext } from "next/document";
import Document, { Html, Head, Main, NextScript } from "next/document";

import customTheme from "@/styles/theme";

class MyDocument extends Document {
  static getInitialProps(ctx: DocumentContext) {
    return Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <ColorModeScript initialColorMode={customTheme.config?.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
