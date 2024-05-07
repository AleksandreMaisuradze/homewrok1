import { appActions } from "./actions";

export const initialState = {
    products: [],
    isProductDataFetching: true,
    productDataFetchingError: "",
}

export const appReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case appActions.saveProductData:
            return { ...state, products: payload, isProductDataFetching: false }
        case appActions.productDataFetchingError:
            return { ...state, productDataFetchingError: payload, isProductDataFetching: false }
        default:
            return state;
    }
}