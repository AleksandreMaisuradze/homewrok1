import actions from "./AppActions"

export const userSignin = (payload) => {
    return {
        type: actions.userSignIn,
        payload,
    };
};
export const userSignOut = () => {
    return {
        type: actions.userSignOut,
    };
};