import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
       <Switch>
       <Route exact path="/">
          <Header />
        </Route>
       </Switch>
    </BrowserRouter>
  );
}

export default App;
