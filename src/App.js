import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Countries from './Components/Countries';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';




function App() {
  return (
    <div>


      <Router>
        <Navbar />
        <Switch>
          <Route path="/countries" component={Countries} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />


      </Router>



    </div>
  );
}

export default App;
