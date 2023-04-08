import { useState } from "react";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";

import { defaultTheme } from "./styles/themes/default";
import { lightTheme } from "./styles/themes/light-theme";

import { Header } from "./components/Header";
import { AppRoutes } from "./routes/routes";

export function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  function changeTheme() {
    setIsDarkTheme(!isDarkTheme);
  }

  return (
    <ThemeProvider theme={isDarkTheme ? defaultTheme : lightTheme}>
      <GlobalStyle />
      <Header isDarkTheme={isDarkTheme} handleChangeTheme={changeTheme} />
      <AppRoutes />
    </ThemeProvider>
  );
}
