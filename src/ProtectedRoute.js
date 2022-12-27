import React, { Component } from 'react'
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom'

function ProtectedRoute({ component: Component, ...restOfProps }) {
    const isAuthenticated = useSelector(state => state.logged)
  
    return (
      <Route
        {...restOfProps}
        render={(props) =>
          isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
        }
      />
    );
  }


export default ProtectedRoute