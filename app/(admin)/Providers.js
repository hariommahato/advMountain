"use client";
import { Provider } from "react-redux";
import { store } from "../../services/store";
import "bootstrap/dist/css/bootstrap.min.css";
import { SessionProvider } from "next-auth/react";
import { SSRProvider } from "react-bootstrap";

export function Providers({ children }) {
  return (
    <>
      <Provider store={store}>
        <SessionProvider>
          <SSRProvider>{children}</SSRProvider>
        </SessionProvider>
      </Provider>
    </>
  );
}
