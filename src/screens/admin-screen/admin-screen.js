import React from "react";
import {connect} from "react-redux";
import NavBar from "../../shared/components/NavBar";

const AdminScreen = ({currentUser}) => {

    return (
        <>
        <NavBar text={"Home"} goTo = "/"/>
        <div className={"m-3"}>

        <h1>Edit content</h1>

            {/*{status === "pending" ? <Spinner /> : null}*/}
            {/*{Object.keys(data.GoodFindOne).length ? <Good data={data.GoodFindOne}/> : null}*/}
        </div>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
    };
};

export default connect(mapStateToProps)(AdminScreen);

