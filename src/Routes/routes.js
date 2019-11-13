import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Login from '../components/Auth/login';
import Search from '../components/Auxilary/search';

export default function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login} />
      <Route exact path="/search" component={Search} />
    </BrowserRouter>
  );
}
