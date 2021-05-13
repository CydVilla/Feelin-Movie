import {useState} from "react";
import HomePage from "./Components/HomePage/HomePage";
import Header from "./Components/Shared/Header";
// import MovieCard from "./Components/Shared/MovieCard";
import {Switch, Route, useParams } from "react-router-dom";
import "./App.css";
// import { Movie } from "@material-ui/icons";
import FullCard from "./Components/Shared/FullCard";


// create react app
// use BrowseRouter hml format, render FullCard useParams pathname
const App = () => {
  const [toggle, setToggle] = useState(false)
  return (
      <div className="App">
        <Header toggle={toggle} setToggle={setToggle}> </Header>
      <Switch>
      <Route exact path="/">
          <HomePage  setToggle={setToggle} toggle={toggle}/>
          </Route>
          <Route path="/movie/:id">
          <FullCard setToggle={setToggle}>
            </FullCard>
          </Route>
         
        </Switch>
      </div>
  );
};

export default App;
