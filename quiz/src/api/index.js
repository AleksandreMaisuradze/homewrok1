export async function fetchProducts(limit, skip) {
    const resp = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
    if (resp.ok) {
        return await resp.json()
    }
    throw new Error("fetch error")

}