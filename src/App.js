import "./App.css";
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Login from "./components/Login";
import Demo1 from "./components/demo1";
import Demo2 from "./components/demo2";

function App() {
  
  return (
    <div className="App">
    <h1>App</h1>
      <Login />

      <BrowserRouter>
        <Switch>
            <Route path="/" component={Demo1} exact/>
            <Route path="/demo2" component={Demo2} />
            
        </Switch>
      </BrowserRouter>

      



    </div>


  );
}

export default App;
