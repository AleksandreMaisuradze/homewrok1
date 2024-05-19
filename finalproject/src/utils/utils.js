import jwt_decode from "jwt-decode"

export const parseToken = (token) => {
    return jwt_decode(token);
};

export const toogleStorage = (token) => {
    if (token) {
        localStorage.setItem("accesToken", token)
    } else {
        localStorage.removeItem("accesToken")
    }
}

export const validation = (token) => {
    const data = parseToken(token);
    const currentDate = Date.now() / 1000;
    return currentDate < data.exp;
}
