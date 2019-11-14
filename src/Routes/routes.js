import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Login from '../components/Auth/login';
import Search from '../components/Auxilary/search';
import PrivateRoute from '../components/Auxilary/HOF/PrivateRoute';
import Planet from '../components/Planet/'

export default function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login} />
      {/* <PrivateRoute exact path="/" component={Login} /> */}
      {/* <Route exact path="/search" component={Search} /> */}
      <PrivateRoute exact path="/search" component={Search} />
      <PrivateRoute exact path="/planet/:name" component={Planet} />
    </BrowserRouter>
  );
}
