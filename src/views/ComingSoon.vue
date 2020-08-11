<template>
  <div>
    <div class="wrapper">
      <img class="dotsleft" src="/img/ejoya/dots-grid.svg" alt />
      <img class="dotsright" src="/img/ejoya/dots-grid.svg" alt />
      <div class="section section-hero section-shaped my-0 f-fullsm" style="min-height: 100vh;">
        <div class="shape shape-style-3 shape-banner-two"></div>
        <div class="page-header">
          <div class="container-fluid shape-container d-flex align-items-center">
            <div class="px-0">
              <div class="row">
                <div class="col-lg-8">
                  <img
                    class="mb-3 img-i6"
                    style="width: 180px"
                    src="/img/ejoya/ejoya.svg"
                    alt="logo"
                  />
                  <h1
                    class="text-white mt-5 text-bold headingln headlnsm"
                  >We are building something exciting for all artistes.</h1>
                  <p
                    class="text-white tt-2 mt-5 gills-font introsm"
                  >Be the first to know when we launch</p>
                  <form @submit.prevent="submitDetails" class="form-inline fminlinesm">
                    <div class="form-group">
                      <label for></label>
                      <input
                        type="email"
                        required
                        v-model="formDetails.emailAddress"
                        class="form-control gills-font ejinput"
                        placeholder="Email Address"
                        aria-describedby="helpId"
                      />
                      <button
                        :disabled="loading"
                        class="btn btn-primary ml-3 text-capitalize gills-font btn-theme"
                      >
                        <span v-if="loading">Sending details...</span>
                        <span v-else>Subscribe</span>
                      </button>
                    </div>
                  </form>
                  <p class="text-white mt-3 gills-font">
                    <span class="opacity-5 pr-2">Interested in our Artist Advance Fund?</span>
                    <router-link class="font-weight-bold text-white" to="/advance">Get Started</router-link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="container mv-musicc mv-musicsm">
            <div class="text-center">
              <a
                target="_blank"
                href="https://twitter.com/EjoyaMusic?s=09"
                rel="nofollow"
                class="btn btn-icon-only btn-white rounded-circle"
                data-toggle="tooltip"
                data-original-title="Follow us"
              >
                <span class="btn-inner--icon">
                  <i class="fa fa-twitter"></i>
                </span>
              </a>
              <a
                target="_blank"
                href="https://m.facebook.com/ejoyamusic"
                rel="nofollow"
                class="btn-icon-only rounded-circle btn btn-white"
                data-toggle="tooltip"
                data-original-title="Like us"
              >
                <span class="btn-inner--icon">
                  <i class="fa fa-facebook"></i>
                </span>
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/ejoyamusic/?igshid=tg8hv5n67094"
                rel="nofollow"
                class="btn-icon-only rounded-circle btn btn-white"
                data-toggle="tooltip"
                data-original-title="Like us"
              >
                <span class="btn-inner--icon">
                  <i class="fa fa-instagram"></i>
                </span>
              </a>

              <p class="text-white text-bold mb-0 mt-2 h5 mt-3">move your music</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      loading: false,
      formDetails: {
        date: "",
        emailAddress: "",
      },
    };
  },
  components: {},
  mounted() {},
  methods: {
    submitDetails() {
      this.formDetails.date = this.getTime();
      let userdata = {
        email: this.formDetails,
      };
      this.loading = true;
      axios({
        url:
          "https://v2-api.sheety.co/08622d3f3c5bb8a1b95a63dc99954f40/comingSoon/emails",
        data: userdata,
        method: "POST",
      })
        .then((resp) => {
          this.loading = false;
          this.formDetails = {
            date: "",
            emailAddress: "",
          };
          this.$swal({
            text: "Email Saved Successfully!",
            icon: "success",
          });
        })
        .catch((err) => {
          this.loading = false;
        });
    },
    getTime() {
      var today = new Date();
      var date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      var time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      var dateTime = date + " " + time;
      return dateTime;
    },
    validateAmt(amt) {
      var rgx = /^[0-9]*\.?[0-9]*$/;
      return amt.match(rgx);
    },
  },
};
</script>
<style>
</style>
