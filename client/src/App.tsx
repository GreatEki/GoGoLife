import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
// import './App.css';
import Municipality from './components/Municipality/Index';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import Covid from './components/Covid/Covid';
import Communicate from './components/Communicate/Communicate';
import Civil from './components/Civil/Civil';
import Agenda from './components/Agenda/Agenda';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/municipality" component={Municipality} />
                    <Route exact path="/communicate" component={Communicate} />
                    <Route exact path="/civil" component={Civil} />
                    <Route exact path="/covid" component={Covid} />
                    <Route exact path="/agenda" component={Agenda} />
                </Switch>
                <Nav />
            </BrowserRouter>
        </div>
    );
}

export default App;
