import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from "./components/Header";
import Main from "./components/Main";
import Projects from "./components/Projects";

const App = () => {
  return (
    <BrowserRouter>
       <Switch>
       <Route exact path="/">
          <Header />
          <Main />
          <Projects />
        </Route>
       </Switch>
    </BrowserRouter>
  );
}

export default App;
