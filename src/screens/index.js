import React from "react";
import HomeScreen from "./home";
import Login from "./login";
const NotFound = () => <h1> Page not found</h1>

const routes = [
    {
        path: "/login",
        exact: true,
        children: <Login/>,
        isProtected: false
    },
    {
        path: "/admin",
        exact: true,
        children: <Login/>,
        isProtected: true
    },
    {
        path: "/",
        exact: true,
        children: <HomeScreen/>,
        isProtected: false
    },
    {
        children: <NotFound/>,
        isProtected: false
    }
];

export default routes;
