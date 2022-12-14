import type { AppProps } from "next/app";
import "@/scss/_globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
