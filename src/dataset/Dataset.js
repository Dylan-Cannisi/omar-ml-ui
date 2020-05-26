import React from 'react';

import {Route, Switch} from "react-router-dom";

class Dataset extends React.Component {

    render () {
        return (
            <Switch>
                <Route path="/dataset/create">
                    <p>"Dataset create"</p>
                </Route>
                <Route path="/dataset/browse">
                    <p>"Dataset browse"</p>
                </Route>
                <Route path="/">
                    <p>"Dataset hub"</p>
                </Route>
            </Switch>
        );
    }
}
export default Dataset;