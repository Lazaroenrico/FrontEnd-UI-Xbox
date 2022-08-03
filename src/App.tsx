import theme from "./assets/styles/theme";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Router from "./router";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
