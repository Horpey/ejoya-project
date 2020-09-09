<template>
  <div>
    <div class="wrapper">
      <div class="section bg-black py-0">
        <div class="container-fluid pl-0">
          <img src="/img/ejoya/dotsquare.svg" class="dotsleft" alt />
          <img src="/img/ejoya/dotsquare.svg" class="dotsright" alt />
          <div class="row">
            <div class="col-md-6 pr0sm">
              <div class="px-5 pt-5 formbgg">
                <router-link to="/">
                  <img src="/img/ejoya/ejoya.svg" alt="logo" />
                </router-link>
              </div>
            </div>
            <div class="col-md-4">
              <div class="pl-1sm" style="padding-left: 50px; padding-top: 20px">
                <h1 class="text-bold text-white pt-5">Sign up</h1>
                <p class="gills-font text-white">Complete your registeration</p>
                <form>
                  <input
                    type="text"
                    required
                    placeholder="First name"
                    class="form-control form-control-lg text-bold mb-3"
                    style="color: black"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Last name"
                    class="form-control form-control-lg text-bold mb-3"
                    style="color: black"
                  />

                  <input
                    type="text"
                    required
                    placeholder="Stage name"
                    class="form-control form-control-lg text-bold mb-3"
                    style="color: black"
                  />

                  <button
                    type="submit"
                    class="btn btn-sec gills-font text-capitalize btn-primary btn-block mt-5 py-3 px-5 f-16 mb-5"
                  >Sign up</button>
                  <p class="gills-font text-white text-center">
                    By Clicking Sign up, you confirm that you agree to our
                    <router-link to="/terms" class="pr-1">Terms & user</router-link>&
                    <router-link to="/privacy">Privacy Policy</router-link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Modal from "../components/Modal";
import axios from "axios";
export default {
  data() {
    return {};
  },
  components: {
    Modal,
  },
  mounted() {},
  methods: {},
};
</script>
<style>
</style>
