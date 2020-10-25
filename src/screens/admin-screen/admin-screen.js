import React from "react";
import NavBar from "../../shared/components/NavBar";
import AddNews from "./components/AddNews";
import AdminNewsList from "./components/AdminNewsList";
import AddUser from "./components/AddUser";
import AdminUsersList from "./components/AdminUsersList";

const AdminScreen = () => {

    return (
        <>
        <NavBar text={"Home"} goTo = "/"/>
        <div className={"p-3"}>
            <h1>Settings</h1>

            <h2 className={"mt-5"}>Edit users</h2>
                <AddUser/>
                <AdminUsersList />

            <h2 className={"mt-5"}>Edit news</h2>
                <AddNews/>
                <AdminNewsList />
        </div>
        </>
    );
};

export default AdminScreen;

