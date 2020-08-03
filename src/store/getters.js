export const getters = {
    cartProducts(state) {
        return state.cart
    },
    checkoutProduct(state) {
        return state.checkoutData
    },
    cartTotal(state, getters) {
        return getters.cartProducts.reduce((total, product) => total + product.product.actual_price * product.quantity, 0)
    },
    availableProducts(state, getters) {
        return state.products
        // return state.products.filter(product => product.inventory > 0)
    },
    availableCategories(state, getters) {
        return state.categories
        // return state.products.filter(product => product.inventory > 0)
    }
};