import React from "react";
import { withRouter, Switch, Route } from "react-router-dom";

import "../styles/main.scss";
import { ListPage } from "../pages/ListPage";

const NoMatch = () => (<h1>404 - Not found</h1>);

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/">
                    <ListPage />
                </Route>

                <Route>
                    <NoMatch />
                </Route>
            </Switch>
        </div>
    );
}

export default withRouter(App);
