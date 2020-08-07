<template>
  <div>
    <div class="wrapper">
      <img class="dotsleft" src="/img/ejoya/dots-grid.svg" alt />
      <img class="dotsright" src="/img/ejoya/dots-grid.svg" alt />
      <div class="section section-hero section-shaped my-0" style="min-height: 100vh;">
        <div class="shape shape-style-3 shape-banner-two"></div>
        <div class="page-header">
          <div class="container-fluid shape-container d-flex align-items-center">
            <div class="px-0">
              <div class="row">
                <div class="col-lg-8">
                  <img class="mb-3" style="width: 180px" src="/img/ejoya/ejoya.svg" alt="logo" />
                  <h1
                    class="text-white mt-5 text-bold headingln headlnsm"
                  >We are building something exciting for all artistes.</h1>
                  <p class="text-white tt-2 mt-5 gills-font introsm">Be the first to know when we launch</p>
                  <form class="form-inline fminlinesm">
                      <div class="form-group">
                          <label for=""></label>
                          <input type="text" name="" id="" class="form-control gills-font ejinput" placeholder="Email Address" aria-describedby="helpId">
                         <button class="btn btn-primary ml-3 text-capitalize gills-font btn-theme">Subscribe</button>
                      </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="container mv-musicc">
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
      amount: "",
      notValid: false,
      minAmt: "",
      maxAmt: "",
      apply: false,
      sending: false,
      alertMsg: "",
      applyModal: false,
      formDetails: {
        firstName: "",
        lastName: "",
        artistName: "",
        spotifyProfileUrl: "",
        email: "",
        phoneNumber: "",
        amountNeeded: "",
        averageMonthIncome: "",
      },
    };
  },
  components: {},
  mounted() {},
  methods: {
    calFund() {
      if (this.validateAmt(this.amount)) {
        if (this.amount >= 100 && this.amount <= 50000) {
          this.notValid = false;
          this.apply = true;
          this.minAmt = 8 * this.amount;
          this.maxAmt = 10 * this.amount;
        } else {
          this.notValid = true;
          this.apply = false;
          this.alertMsg = "Sorry, you can't apply!";
        }
      } else {
        this.notValid = true;
        this.alertMsg = "Enter a valid amount!";
        this.apply = false;
      }
    },
    submitDetails() {
      this.formDetails.date = this.getTime();
      this.formDetails.averageMonthIncome = this.amount;
      let userdata = {
        advanceFund: this.formDetails,
      };
      this.sending = true;

      axios({
        url:
          "https://v2-api.sheety.co/f4753798250d9d18db685863982f7bcf/ejoyaAdvanceFund/advanceFund",
        data: userdata,
        method: "POST",
      })
        .then((resp) => {
          this.sending = false;
          this.formDetails = {
            firstName: "",
            lastName: "",
            artistName: "",
            spotifyProfileUrl: "",
            email: "",
            phoneNumber: "",
            amountNeeded: "",
          };
          this.amount = "";
          this.applyModal = false;
          this.$swal({
            text: "Application sent for review",
            icon: "success",
          });
        })
        .catch((err) => {
          this.sending = false;
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
