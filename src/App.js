import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  return (
    <BrowserRouter>
       <Switch>
       <Route exact path="/">
          <Header />
          <Main />
        </Route>
       </Switch>
    </BrowserRouter>
  );
}

export default App;
