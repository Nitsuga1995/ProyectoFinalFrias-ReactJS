export const getProducts = () => {
    return fetch ('../assets/json/products.json')
}

export const getProduct = (id) => {
    return fetch (`../assets/json/products/${id}.json`)

}