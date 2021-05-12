import React from "react";
import HomePage from "./Components/HomePage/HomePage";
import Header from "./Components/Shared/Header";
import MovieCard from "./Components/Shared/MovieCard";
import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";
import "./App.css";
import { Movie } from "@material-ui/icons";
import FullCard from "./Components/Shared/FullCard";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Switch>
          <Route path="/movie/:id">
            <FullCard useParams={useParams}>hi
            </FullCard>
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
