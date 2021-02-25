import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Start from '../pages/Start';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Start} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  );
};

export default Routes;
