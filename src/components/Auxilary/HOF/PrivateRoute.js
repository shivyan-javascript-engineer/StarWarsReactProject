import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

function PrivateRoute(props) {
  return (
    props.login.isLoggedIn ? <Route {...props} /> : <Redirect to="/" />
  );
}

function mapStateToProps(state) {
  return {
    login: state.login,
  };
}

export default connect(mapStateToProps)(PrivateRoute);
