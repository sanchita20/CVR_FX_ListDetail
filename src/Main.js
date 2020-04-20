import React, { Component } from "react";
import {
    Route,
    HashRouter
} from "react-router-dom";
import List from "./view/list/List.js";
import Details from "./view/details/Details";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <Route exact path="/" component={List} />
                <Route path="/details" component={Details} />
            </HashRouter>
        );
    }
}

export default Main;