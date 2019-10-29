import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Books from "./pages/Books";
//import Detail from "./pages/Detail";
//import NoMatch from "./pages/NoMatch";
//import Nav from "./components/Nav";
import Search from './pages/Search'
import Saved from './pages/Saved'

function App() {
  return (
    <Router>
      <div>



        <Route exact path="/" component={Books} />
        <Route exact path="/books" component={Books} />
        <Route exact path="/Search" component={Search} />
        <Route exact path="/Saved" component={Saved} />



      </div>
    </Router >
  );
}

export default App;
