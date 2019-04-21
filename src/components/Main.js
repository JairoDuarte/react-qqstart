import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import HomePage from  './Home';


class Main extends Component {

    render() {
        return (
            <div>
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Redirect to="/home" />
                </Switch>
            </div>
        );
    }
}

export default Main;