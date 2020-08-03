let cart = window.localStorage.getItem('cart')
let checkdata = window.localStorage.getItem('checkdata')

export const state = {
    products: [],
    categories: [],
    cart: cart ? JSON.parse(cart) : [],
    checkoutStatus: null,
    checkoutData: checkdata ? JSON.parse(checkdata) : [],
};