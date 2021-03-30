import React from "react";
import{
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
}from "react-router-dom";
import Usuarios from "./components/usuarios";
import Usuario from "./components/usuario";
import "./css/screen.css"

function App() {


  return (
    <Router>
      <button className="btn btn-outline-dark">
      <Link to="/"
       style={{ fontFamily: 'Bebas Neue', color: "black", fontSize: 20 }}
      >Usuarios</Link>
      </button>
      <Switch>
        <Route exact path="/">
          <Usuarios></Usuarios>
        </Route>
        <Route path="/usuario/:id">
          <Usuario></Usuario>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
