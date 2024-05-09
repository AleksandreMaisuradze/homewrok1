import React, { createContext, useContext, useEffect, useReducer } from "react"
import { appReducer, initialState } from "./AppReducer"
import { userSignin } from "./AppActionsCreator";
import { validation } from "../utils/utils";

const appContext = createContext()

const AppContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(appReducer, initialState);

    useEffect(() => {
        const token = localStorage.getItem("accesToken")
        if (token && validation(token)) {
            dispatch(userSignin(token))
        }
    }, [])

    return (
        <appContext.Provider value={{ state, dispatch }}>
            {children}
        </appContext.Provider>
    )

}

export const useAppContext = () => {
    const context = useContext(appContext)
    if (context) {
        return context
    }

    throw new Error("app context error")
}

export default AppContextProvider;