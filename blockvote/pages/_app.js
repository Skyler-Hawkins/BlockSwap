import Head from "next/head";
import "@/styles/globals.css";
import { createGlobalStyle } from 'styled-components';
import {
  ThirdwebProvider,
  metamaskWallet,
  walletConnect,
} from "@thirdweb-dev/react";


export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  
}
`


export default function App({ Component, pageProps }) {
  return (
  <>
  <GlobalStyle/>
  <ThirdwebProvider
    supportedWallets={[
      metamaskWallet({
        recommended: true,
      }),
    ]}
    clientId="YOUR_CLIENT"
  >
  <Component {...pageProps} />
  </ThirdwebProvider>
  </>
  );
}
  