import axios from "axios";
const baseURL = "https://api.mybartty.com/api/";

export const actions = {
  fetchProducts({
    commit
  }) {
    return new Promise((resolve, reject) => {
      axios({
          url: baseURL + "products",
          method: "GET",
        })
        .then((resp) => {
          // console.log(resp.data.data.products)
          commit("setProducts", resp.data.data.products);
          //console.log(resp.data.data.products);
          commit("setCategories", resp.data.data.categories);
          resolve(resp.data.data.products);
        })
        .catch((err) => {
          console.log(err);
          // commit('apploading', false);
          reject(err);
        });
    });
  },
  fetchVendorProductProducts({
    commit
  }, vendor) {
    return new Promise((resolve, reject) => {

      axios({
          url: baseURL + "products/" + vendor,
          method: "GET",
        })
        .then((resp) => {
          // console.log(resp.data.data.products)
          commit("setProducts", resp.data.data.products);
          //console.log(resp.data.data.products);
          commit("setCategories", resp.data.data.categories);
          resolve(resp.data.data.products);
        })
        .catch((err) => {
          if (err.response) {
            reject(err.response.status);
          }
          reject();
        });
    });
  },
  addProductToCart(context, product) {
    context.commit("pushProductToCart", product);
    // const cartItem = context.state.cart.find(item => item.id == product.id)
    // // find cartItem
    // if (!cartItem) {
    //     // pushProduct Cart
    //     context.commit('pushProductToCart', product)
    // } else {
    //     // incrementItemQuantity
    //     context.commit('incrementItemQuantity', cartItem)
    // }
    // context.commit('decrementProductInventory', product)
  },
  searchProduct({
    commit
  }, product) {
    return new Promise((resolve, reject) => {
      console.log(product);
      axios({
          url: baseURL + "products?search=" + product,
          method: "GET",
        })
        .then((resp) => {
          // console.log(resp.data.data.products)
          commit("setProducts", resp.data.data.products);
          resolve();
        })
        .catch((err) => {
          if (err.response) {
            reject(err.response.status);
          }
          reject();
        });
    });
  },
  searchVendorProduct({
    commit
  }, vendorSearch) {
    return new Promise((resolve, reject) => {
      // console.log(vendorSearch);
      axios({
          url: baseURL + "products/" + vendorSearch.VendorName + "?search=" + vendorSearch.search,
          method: "GET",
        })
        .then((resp) => {
          // console.log(resp.data.data.products)
          commit("setProducts", resp.data.data.products);
          resolve();
        })
        .catch((err) => {
          if (err.response) {
            reject(err.response.status);
          }
          reject();
        });
    });
  },
  filterProduct({
    commit
  }, category) {
    return new Promise((resolve, reject) => {
      axios({
          url: baseURL + "products?category=" + category,
          method: "GET",
        })
        .then((resp) => {
          // console.log(resp.data.data.products)
          commit("setProducts", resp.data.data.products);
          resolve();
        })
        .catch((err) => {
          if (err.response) {
            reject(err.response.status);
          }
          reject();
        });
    });
  },
  filterVendorProduct({
    commit
  }, vendorFilter) {
    return new Promise((resolve, reject) => {

      axios({
          url: baseURL + "products/" + vendorFilter.VendorName + "?category=" + vendorFilter.category,
          method: "GET",
        })
        .then((resp) => {
          // console.log(resp.data.data.products)
          commit("setProducts", resp.data.data.products);
          resolve();
        })
        .catch((err) => {
          if (err.response) {
            reject(err.response.status);
          }
          reject();
        });
    });
  },
  removeCartItem(context, productID) {
    return new Promise((resolve, reject) => {
      console.log(productID)
      let newCart = context.state.cart.filter(function (product) {
        return product.product.id !== productID;
      });
      console.log(newCart)
      context.state.cart = newCart
      this.commit('saveData')
      // this.$store.commit("resetProductCart", newCart);
    });
  },
  changeQuantity(context, productDet) {
    return new Promise((resolve, reject) => {
      // console.log(productDet)
      let productid = productDet.productID
      //Find index of specific object using findIndex method.    
      let objIndex = context.state.cart.findIndex((product => product.product.id == productid));
      //Log object to Console.
      // console.log("Before update: ", context.state.cart[objIndex])
      //Update object's name property.
      context.state.cart[objIndex].quantity = productDet.quantity
      this.commit('saveData')

      // this.$store.commit("resetProductCart", newCart);
    });
  },
  checkout({
    commit,
    getters
  }) {
    return new Promise((resolve, reject) => {
      // console.log(getters.cartProducts)
      // let prepareCheckout = getters.cartProducts.map(item => item.product.uuid);

      const prepareCheckout = getters.cartProducts.map(item => {
        const container = {};

        container.uuid = item.product.uuid;
        container.quantity = item.quantity;

        return container;
      })

      let cartProduct = {
        cart: prepareCheckout
      }
      // cartProduct.append('cart', prepareCheckout);

      axios({
          url: baseURL + 'checkout/prepare',
          data: cartProduct,
          method: 'POST',
        })
        .then(resp => {
          // console.log(resp)
          console.log(resp.data.data)
          commit('checkoutData', resp.data.data);
          resolve(resp);
        })
        .catch(err => {
          if (err.response) {
            reject(err.response.status);
          }
          reject();
        });
    });
  },
  completeCheckout({
    commit,
    getters
  }, completeCheck) {
    return new Promise((resolve, reject) => {
      // console.log(completeCheck)

      axios({
          url: baseURL + 'checkout',
          data: completeCheck,
          method: 'POST',
        })
        .then(resp => {
          // console.log(resp)
          // console.log(resp.data.data)
          resolve(resp);
        })
        .catch(err => {
          if (err.response) {
            // console.log(err.response)
            reject(err.response);
          }
          reject();
        });
    });
  },
  cancelPayment({
    commit
  }, token) {
    return new Promise((resolve, reject) => {

      let tokenData = new FormData();
      tokenData.append('token', token);

      axios({
          url: baseURL + 'payment/cancel',
          data: tokenData,
          method: 'POST',
        })
        .then(resp => {
          resolve(resp);
        })
        .catch(err => {
          reject();
        });
    });
  },
  confirmPayment({
    commit,
    getters
  }, confirmaPayCart) {
    return new Promise((resolve, reject) => {
      // console.log(confirmaPayCart)

      axios({
          url: baseURL + 'payment/success',
          data: confirmaPayCart,
          method: 'POST',
        })
        .then(resp => {
          // console.log(resp)
          // console.log(resp.data.data)
          resolve(resp);
        })
        .catch(err => {
          if (err.response) {
            // console.log(err.response)
            reject(err.response);
          }
          reject();
        });
    });
  },
  concierge({
    commit,
    getters
  }, concierge) {
    return new Promise((resolve, reject) => {
      // console.log(concierge)
      let conciergeData = new FormData();
      conciergeData.append('phone', concierge.phone);
      conciergeData.append('search', concierge.search);

      axios({
          url: baseURL + 'concierge',
          data: conciergeData,
          method: 'POST',
        })
        .then(resp => {
          console.log(resp.data.message)
          resolve(resp);
        })
        .catch(err => {
          reject();
        });
    });
  },

};