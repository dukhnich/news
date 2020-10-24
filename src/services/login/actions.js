import store from "../../store/configure-store";

export const login = (userData) => async (dispatch) => {
    try {
        dispatch({ type: "login/pending" });
        let isLoginCorrect = false;
        let isPasswordCorrect = false;
        let currentUser;
        for (const user of store.getState().users.users) {
            if (user.login === userData.login) {
                isLoginCorrect = true
                if (user.password === userData.password) {
                    isPasswordCorrect = true;
                    currentUser = user;
                }
                break
            }
        }
        if (!isPasswordCorrect) {
            if (!isLoginCorrect) {
                throw new Error("The login is wrong")
            }
            else {
                throw new Error("The password is wrong")
            }
        }

        const response = await fetch("google.com");
        if (response.status !== 200) {
            throw new Error("Some network error")
        }
        localStorage.setItem("token", "success");
        dispatch({ type: "users/setCurrentUser", payload: {id: currentUser.id} })

        dispatch({ type: "login/resolved" })
    } catch (error) {
        dispatch({ type: "login/rejected", payload: error.message || "Something went wrong"  });
    }
};

export const logout = () => async (dispatch) => {
   localStorage.removeItem("token");
   dispatch({ type: "users/removeCurrentUser"});
   dispatch({ type: "logout"});
};