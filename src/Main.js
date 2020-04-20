import React, { Component } from "react";
import List from "./view/list/List.js";
import Details from "./view/details/Details";
import { BrowserRouter as Router, Route } from "react-router-dom";


class Main extends Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={List} />
                <Route path="/details" component={Details} />
            </Router>
        );
    }
}

export default Main;