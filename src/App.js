//always need to have the below line for react
import React, { Component } from 'react';
//below is to enable using different tabs - with react-router-dom download ----
import {BrowserRouter, Route} from 'react-router-dom';
import './css/style.css';

import Navbar from './components/navbar';
import Home from './components/home';
import AaasContainer from './components/aaasContainer';
import BbbsContainer from './components/bbbsContainer';
import CccsContainer from './components/cccsContainer';

class App extends Component {
    
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar />
                    <Route exact path="/" render={() => <Home title="Premier League 2019: Top Players" />} />
                    <Route path="/aaas/" render={() => <AaasContainer title="United Kingdom" />} />
                    <Route path="/bbbs/" render={() => <BbbsContainer title="European Union" />} />
                    <Route path="/cccs/" render={() => <CccsContainer title="Cities and Stadia" />} />
                </div>
            </BrowserRouter>
        );
  }
}

export default App;
