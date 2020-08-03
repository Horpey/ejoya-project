export const mutations = {
    setProducts(state, products) {
        state.products = products
    },
    setCategories(state, categories) {
        state.categories = categories
    },
    pushProductToCart(state, product) {
        state.cart.push({
            product: product.product,
            quantity: product.quantity
        })
        this.commit('saveData')
    },
    resetProductCart(state, cartProduct) {
        state.cart = cartProduct;
    },
    incrementItemQuantity(state, cartItem) {
        cartItem.quantity++
    },
    decrementProductInventory(state, product) {
        product.inventory--
    },
    setCheckoutStatus(state, status) {
        state.checkoutStatus = status
    },
    emptyCart(state) {
        state.cart = []
        this.commit('saveData')
    },
    emptyProducts(state) {
        state.products = []
    },
    saveData(state) {
        window.localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    checkoutData(state, checkoutdata) {
        state.checkoutData = checkoutdata
        this.commit('saveCheckdata')
    },
    saveCheckdata(state) {
        window.localStorage.setItem('checkdata', JSON.stringify(state.checkoutData))
    }
    // filterProduct(state, category) {
    //     const product = state.products.filter(product => product.category === category)
    //     state.products = product;
    // }
};