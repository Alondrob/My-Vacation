import React from 'react'
import { Provider, useSelector } from "react-redux";
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = (props) => {
    const { children } = props;
    const userData = localStorage.getItem('user')
    console.dir(userData)
  return (
    userData ? <Outlet /> : <Navigate to = { "/"} />
   )
}

export default PrivateRoutes;