import React from 'react';

import {Route, Switch} from "react-router-dom";

class OGC extends React.Component {

    render () {
        return (
            <Switch>
                <Route path="/ogc/create">
                    <p>"OGC"</p>
                </Route>
                <Route path="/">
                    <p>"OGCS"</p>
                </Route>
            </Switch>
        );
    }
}
export default OGC;