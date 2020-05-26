import React from 'react';

import {Route, Switch} from "react-router-dom";

class Watcher extends React.Component {

    render () {
        return (
            <Switch>
                <Route path="/watcher/create">
                    <p>"Watcher create"</p>
                </Route>
                <Route path="/watcher">
                    <p>"Watcher browse"</p>
                </Route>
            </Switch>
        );
    }
}
export default Watcher;