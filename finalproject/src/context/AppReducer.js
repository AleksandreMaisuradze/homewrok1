import actions from "./AppActions";

export const initialState = {
    isUserLoggedIn: false,
}

export const appReducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case actions.userSignIn: {
            return { ...state, isUserLoggedIn: true }
        }

        default:
            return state;
    };
};
