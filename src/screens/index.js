import React from "react";
import HomeScreen from "./home";
import Login from "./login";
import NewsScreen from "./news";
import AdminScreen from "./admin-screen";
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
        children: <AdminScreen/>,
        isProtected: true
    },
    {
        path: "/",
        exact: true,
        children: <HomeScreen/>,
        isProtected: false
    },
    {
        path: "/news/:id",
        exact: true,
        children: <NewsScreen/>,
        isProtected: false
    },
    {
        children: <NotFound/>,
        isProtected: false
    }
];

export default routes;
