import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from "./components/Header";
import Main from "./components/Main";
import About from './components/About';
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Header />
          <Main />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
