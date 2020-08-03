<template>
  <nav id="navbar-main" class="navbar navbar-main navbar-expand-lg navbar-dark navv fixedbarr">
    <div class="container">
      <div class="row mx-auto fullwidth">
        <div class="col-5">
          <a class="navbar-brand mr-lg-5" href="/">
            <img src="img/brand/myBarttylight.svg" class="mt-2" />
          </a>
        </div>
        <div class="col-7 text-right pr-0">
          <ul class="custom-text-dark pl-0 my-2">
            <router-link to="/cart" id="viewCart" class="nav-link-d text-white mr-2 floatCart">
              <i class="ni ni-cart pr-2"></i>
              <span class="nav-link-inner--text">Cart</span>
              <span
                class="ml-lg-1 ml-0 badge badge-md badge-circle badge-floating badge-danger border-white cartnum ml-2"
              >{{ products.length }}</span>
            </router-link>
            <!-- <a
              target="_blank"
              class="btn btn-white text-capitalize text-black btn-sm"
              href="https://vendor.mybartty.com"
            >Become a Vendor</a>-->
            <base-dropdown direction="right">
              <base-button
                slot="title"
                outline
                type="secondary"
                class="dropdown-toggle moreellipse"
              >
                <span class="fa fa-bars"></span>
              </base-button>
              <div class="menudrop text-right">
                <a
                  target="_blank"
                  href="https://vendor.mybartty.com"
                  class="dropdown-item"
                >Become a Vendor</a>
                <a class="dropdown-item" href="#contact">Contact Us</a>
              </div>
            </base-dropdown>
            <!-- <a class="text-white ml-3">
              <span class="fa fa-ellipsis-v"></span>
            </a>-->
          </ul>
        </div>
      </div>
    </div>

    <v-tour name="myTour" :steps="steps"></v-tour>
  </nav>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";

export default {
  data() {
    return {
      steps: [
        {
          target: "#viewCart", // We're using document.querySelector() under the hood
          content: `<p class="small">Add products to Cart & View here!</p>`,
          params: {
            placement: "top"
          }
        }
      ]
    };
  },
  computed: {
    products() {
      return this.$store.getters.cartProducts;
    }
  },
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown
  },
  mounted: function() {
    // this.$tours["myTour"].start();
  }
};
</script>
<style>
.fullwidth {
  width: 100%;
}
</style>
