import React from 'react';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { NavigationBar } from './common/NavigationBar';

import Dataset from './dataset/Dataset';
import MapViewer from './map/Map';
import Model from './model/Model';
import OGC from './map/Ogc';
import Watcher from './watcher/Watcher';

function App(){
    return(
        <Router>
            <div className="App">
                <NavigationBar />
                <Switch>
                    <Route path="/dataset" component={Dataset} />
                    <Route path="/model" component={Model} />
                    <Route path="/watcher" component={Watcher} />
                    <Route path="/ogc" component= {OGC} />
                    <Route path="/" component={MapViewer} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;