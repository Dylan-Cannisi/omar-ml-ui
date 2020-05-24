import React from 'react';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, } from "react-router-dom";
import { NavigationBar } from './common/NavigationBar';
import MapViewer from './map/Map';

function App(){
    return(
        <div className="App">
            <React.Fragment>
                <Router>
                    <NavigationBar />
                    <MapViewer />
                </Router>
            </React.Fragment>
        </div>
    );
}

export default App;