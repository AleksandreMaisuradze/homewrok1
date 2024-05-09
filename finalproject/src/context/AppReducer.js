import { parseToken, toogleStorage } from "../utils/utils";
import actions from "./AppActions";

export const initialState = {
    isUserLoggedIn: false,
    user: null,
    token: ""
}

export const appReducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case actions.userSignIn: {
            const user = parseToken(payload)
            toogleStorage(payload)
            return { ...state, isUserLoggedIn: true, token: payload, user }
        }

        case actions.userSignOut: {
            toogleStorage()
            return { ...state, isUserLoggedIn: false, token: "", user: null }
        }

        default:
            return state;
    };
};
