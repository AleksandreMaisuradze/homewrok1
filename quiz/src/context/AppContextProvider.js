import React, { createContext, useContext, useEffect, useReducer, useState } from "react";
import { appReducer, initialState } from "./appReducer";
import { fetchProducts } from "../api";
import { ProductDataFetchingError, saveProductData, toggleProductLoading } from "./actionsCreator";
import { constants } from "../constants";


export const context = createContext()

function AppContextProvider({ children }) {

    const [skip, setSkip] = useState(0)
    const [buttonCount, setButtonCount] = useState([1])


    const [state, dispatch] = useReducer(appReducer, initialState);



    useEffect(() => {
        fetchProducts(constants.productLimit, 0)
            .then((data) => {
                const { total } = data
                const count = Math.ceil(total / constants.productLimit)
                setButtonCount(Array.from({ length: count }, (_, i) => i + 1))
            }).catch((err) => {
                dispatch(ProductDataFetchingError(err.message))
            }).finally(() => {
                dispatch(toggleProductLoading(false))
            })
    }, [])

    useEffect(() => {
        let productSkip = (skip - 1) * constants.productLimit
        fetchProducts(constants.productLimit, productSkip)
            .then((data) => {
                dispatch(saveProductData(data))
            }).catch((err) => {
                dispatch(ProductDataFetchingError(err.message))
            }).finally(() => {
                dispatch(toggleProductLoading(false))
            })
    }, [skip])

    return (
        <context.Provider value={{ state, dispatch, skip, setSkip, buttonCount, setButtonCount }}>
            {children}
        </context.Provider>
    )
}

export const useAppContext = () => {
    const appContext = useContext(context)
    if (context) {
        return appContext
    }
    throw new Error("App context error")
}

export default AppContextProvider;