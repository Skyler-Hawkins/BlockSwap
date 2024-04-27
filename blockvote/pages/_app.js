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

// Create a client

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle/>
        <ThirdwebProvider
          supportedWallets={[
            metamaskWallet({
              recommended: true,
              network: "0x61"
            }),
          ]}
          clientId="776121789b1feb69482ea5a79c6b212c"
        >
          <Component {...pageProps} />
        </ThirdwebProvider>
    </>
  );
}

// add client id to .env file: 776121789b1feb69482ea5a79c6b212c
