"use client";
import { Provider } from "react-redux";
// import { store } from "../redux/store";
import { SessionProvider } from "next-auth/react";
import "bootstrap/dist/css/bootstrap.min.css";
import { store } from "../../services/store";
import { SSRProvider } from "react-bootstrap";
export function Providers({ children }) {
  return (
    <Provider store={store}>
      <SessionProvider>
        <SSRProvider>{children}</SSRProvider>
      </SessionProvider>
    </Provider>
  );
}
