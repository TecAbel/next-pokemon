import type { AppProps } from "next/app";
import "./../styles/globals.css";
import "tailwindcss/defaultTheme";
import { Provider } from "react-redux";
import { ReduxStore } from "../services/redux/store/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={ReduxStore}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
