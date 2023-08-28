import React from "react";
import { CartContextProvider } from "./src/context/CartContext";
import { AppRoutes } from "./src/routes/app.routes";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { AuthProvider } from "./src/hooks/auth";

const queryClient = new QueryClient();

export default function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <CartContextProvider>
          <AppRoutes />
        </CartContextProvider>
      </QueryClientProvider>
    </AuthProvider>
  );
}
