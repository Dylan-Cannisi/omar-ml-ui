import React from 'react';

import {Route, Switch} from "react-router-dom";

class Model extends React.Component {

    render () {
        return (
            <Switch>
                <Route path="/model/create">
                    <p>"Model create"</p>
                </Route>
                <Route path="/model/browse">
                    <p>"Model browse"</p>
                </Route>
                <Route path="/">
                    <p>"Model hub"</p>
                </Route>
            </Switch>
        );
    }
}
export default Model;