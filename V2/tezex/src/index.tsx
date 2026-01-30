import React from "react";
import "./index.css";
import { ThemeProvider } from "@mui/system";
import theme from "./theme";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { SessionProvider } from "./contexts/session";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider, Navigate } from "react-router-dom";

import { AppConfig, Pages } from "./types/general";
import appConfig from "./config/app.json";
import { Home } from "./pages/Home";
import { Analytics } from "./pages/Analytics";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to={Pages.SWAP} replace />,
      },
      {
        path: Pages.SWAP,
        element: <Home path="swap" />,
      },
      {
        path: Pages.ADD_LIQUIDITY,
        element: <Home path="add" />,
      },
      {
        path: Pages.REMOVE_LIQUIDITY,
        element: <Home path="remove" />,
      },
      {
        path: Pages.ANALYTICS,
        element: <Analytics />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root") as Element);

root.render(
  <React.StrictMode>
    <SessionProvider config={appConfig as AppConfig}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </SessionProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
