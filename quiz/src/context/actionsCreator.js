import { appActions } from "./actions"

export function saveProductData(payload) {
    return { type: appActions.saveProductData, payload }
}

export function ProductDataFetchingError(payload) {
    return { type: appActions.productDataFetchingError, payload }
}

export function toggleProductLoading(payload) {
    return { type: appActions.toggleProductLoading, payload }
}