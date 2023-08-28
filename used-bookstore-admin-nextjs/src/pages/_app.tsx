import { globalStyles } from "../styles/global";
import { Roboto } from "@next/font/google";
import Header from "../components/Header";
import { MainContainer } from "../styles/pages/centralizeBody";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";

globalStyles();

const queryClient = new QueryClient();

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <main className={roboto.className}>
        <Header />
        <MainContainer>
          <Component {...pageProps} />
        </MainContainer>
      </main>
    </QueryClientProvider>
  );
}
