import React from "react";

const UserList = ({users}) => {
    return (
        <ul className="list-group">
            {users === null ? (
                <h5>There is no users</h5>
            ) : (
                users.map(({_id, avatar, nick}) => (
                    <li key={_id} className="list-group-item">
                        {avatar !== null ? (
                            <img src={"http://shop-roles.asmer.fs.a-level.com.ua/"+avatar.url} alt={avatar.text} />
                        ) : null}
                        <span className={"ml-3"}>{nick}</span>
                    </li>
                ))
            )}
        </ul>
    )
}

export default UserList