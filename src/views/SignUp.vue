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
                <p class="text-white imgdescr">Buju - at Ejoya class of 20'</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="pl-1sm" style="padding-left: 50px; padding-top: 20px">
                <h1 class="text-bold text-white pt-5">Sign up</h1>
                <p class="gills-font text-white">Welcome to Ejoya</p>
                <form>
                  <input
                    type="text"
                    required
                    placeholder="Username"
                    class="form-control form-control-lg text-bold mb-3"
                    style="color: black"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email address"
                    class="form-control form-control-lg text-bold mb-3"
                    style="color: black"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Mobile Number"
                    class="form-control form-control-lg text-bold mb-3"
                    style="color: black"
                  />

                  <input
                    type="password"
                    required
                    placeholder="Password"
                    class="form-control form-control-lg text-bold mb-3"
                    style="color: black"
                  />

                  <router-link
                    to="/complete-registeration"
                    class="btn btn-sec gills-font text-capitalize btn-primary btn-block mt-5 py-3 px-5 f-16 mb-5"
                  >Continue</router-link>
                  <p class="gills-font text-white text-center">
                    Already have an account?
                    <router-link to="/sign-in">Login</router-link>
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
