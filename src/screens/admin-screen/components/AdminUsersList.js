import React from "react";
import { connect } from "react-redux";
import AdminUserItem from "./AdminUserItem";


const AdminUsersList = ({users}) => {

    return (
        <ul className="list-group mt-5">
            {users.map((user) => {
                return( <AdminUserItem
                    key={user.id}
                    user = {user}
                />)
            })}
        </ul>
    );
}

const mapStateToProps = (state) => {
    return {
        users: state.users.users,
    };
};

export default connect(mapStateToProps)(AdminUsersList);
