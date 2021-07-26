import React from 'react';
import Home from './Module/Home';
import About from './Module/About';
import Service from "./Module/service";
import Contact from "./Module/Contact";
import Error from "./Module/Error";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routes = () => {
  return (

    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact} />
        <Route component={Error} />

      </Switch>
    </BrowserRouter>

  )

}

export default Routes;