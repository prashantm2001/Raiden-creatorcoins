import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './Components/Layout/Navbar/Navbar';

import Home from './Components/Pages/Home';
import Buy from './Components/Pages/Buy';
import Sell from './Components/Pages/Sell';
import Collectables from './Components/Pages/Collectables';
import SignUp from './Components/Pages/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/buy" exact component={Buy} />
        <Route path="/sell" exact component={Sell} />
        <Route path="/collectables" exact component={Collectables} />
        <Route path="/sign-up" exact component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;