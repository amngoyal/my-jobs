import React from "react";
import ReactDOM from "react-dom";
import App from "./infrastructure/router";

import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle, theme } from "./lib/theme";
import store from "./infrastructure/redux/store";

ReactDOM.render(
  <React.StrictMode>
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </Provider>
      </BrowserRouter>
    </>
  </React.StrictMode>,
  document.getElementById("root")
);
