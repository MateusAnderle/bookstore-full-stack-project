import { globalStyles } from "../styles/global";
import { Roboto } from "@next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CartContextProvider } from "../contexts/CartContext";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { AuthProvider } from "../hooks/auth";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

globalStyles();

const queryClient = new QueryClient();

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

function MyApp({ Component, pageProps: { ...pageProps } }: AppProps) {
  const router = useRouter();
  if (router.pathname === "/") {
    return (
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <CartContextProvider>
            <main className={roboto.className}>
            <Header />
              <Component {...pageProps} />
              <Footer />
            </main>
          </CartContextProvider>
        </QueryClientProvider>
      </AuthProvider>
    );
  } else {
    return (
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <CartContextProvider>
            <main className={roboto.className}>
              <Header />
              <Component {...pageProps} />
              <Footer />
            </main>
          </CartContextProvider>
        </QueryClientProvider>
      </AuthProvider>
    );
  }
}

export default MyApp;
