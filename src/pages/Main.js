import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from '@/pages/Home';

function Main() {
  return (
    <div>
      <Switch>
        <Route path="/home" component={HomePage} />
        <Redirect to="/home" />
      </Switch>
    </div>
  );
}

export default Main;
