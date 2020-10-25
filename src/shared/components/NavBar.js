import React from "react";
import {Link} from "react-router-dom";
import {string, bool} from "prop-types";
import {connect} from "react-redux";
import {logout} from "../../services/login";
const NavBar = ({text, goTo, isLoggedIn, dispatch}) => {
    const onLogout = () => {
        dispatch(logout())
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav d-flex flex-row justify-content-end ml-auto">

                    {isLoggedIn ? (<>
                    <li className="nav-item">

                        <Link
                            className="nav-link"
                            to={goTo}
                        >
                            {text}
                        </Link>
                    </li>
                    <li className="nav-item">
                        <button
                            className={"btn btn-secondary ml-3"}
                            onClick={onLogout}
                        >
                            Logout
                        </button>
                    </li>
                        </>
                    )
                    : (
                    <li className="nav-item">
                        <Link
                        role = "button"
                        className="btn btn-secondary"
                        to={"/login"}
                    >
                            Login
                        </Link>
                    </li>
                    )
                    }


                </ul>
        </nav>
    );
};

NavBar.propTypes = {
    text: string,
    isAdditionalButton: bool,
    isLoggedIn: bool.isRequired
}

NavBar.defaultProps = {
    text: "",
    isAdditionalButton: false,
}

const mapStateToProps = (state) => ({
    isLoggedIn: (state.auth.isAuth),
});
export default connect(mapStateToProps)(NavBar);
