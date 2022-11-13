import React from 'react'
import { Provider, useSelector } from "react-redux";
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = (props) => {
    const { children } = props;
    const userData = localStorage.getItem('user')
    console.dir(userData)
    if (!userData) {
        return <Navigate to="/sign-in"/>
    }
  return (
    children
  )
}

export default PrivateRoute