import { useState } from "react";
import React from "react";
import HomePage from "./Components/HomePage/HomePage";
import Header from "./Components/Shared/Header";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import FullCard from "./Components/Shared/FullCard";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import theme from "./Components/Shared/theme";
// create react app
// use BrowseRouter hml format, render FullCard useParams pathname
const App = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Header toggle={toggle} setToggle={setToggle} />
        <main className="App__content">
          <Switch>
            <Route exact path="/">
              <HomePage toggle={toggle} />
            </Route>
            <Route path="/movie/:id">
              <FullCard setToggle={setToggle} />
            </Route>
          </Switch>
        </main>
      </div>
      </ThemeProvider>
  );
};

export default App;
