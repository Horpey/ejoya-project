<template>
  <div>
    <div class="wrapper">
      <div class="section section-hero section-shaped my-0">
        <div class="shape shape-style-3 shape-banner"></div>
        <div class="page-header">
          <div class="container-fluid shape-container d-flex align-items-center py-lg">
            <div class="col px-0">
              <div class="row">
                <div class="col-lg-7">
                  <h1
                    class="text-white text-bold headingln"
                    style="font-size: 68px;"
                  >Artiste advance fund.</h1>
                  <p class="text-white tt-2 mt-4 gills-font">
                    Talent is never enough, you need
                    <br />opportunities
                    to
                    <span
                      class="mvmusic gills-font"
                    >move your music.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-black">
        <img src="/img/ejoya/musicwave.svg" style="width: 100%;" class="img-fluid" alt />
      </div>
      <div class="section features-6 bg-black" id="how-it-works">
        <div class="container-fluid">
          <div class="text-center mt-5">
            <h2 class="text-white text-bold">
              Focus on your
              <span class="text-sec text-bold">music,</span> we are here
              for
              <span class="text-sec text-bold">you.</span>
            </h2>
          </div>
          <div class="mt-5">
            <div class="row">
              <div class="col-md-3">
                <div class="text-center">
                  <img src="/img/ejoya/apply.svg" class="mb-3" height="63" alt />
                  <h6 class="text-bold text-sec">You apply</h6>
                  <p class="text-white gills-font">
                    We understand the struggle and have set the bar as low as possible so If
                    your average monthly earning is $100 and above, you are welcome to apply!
                  </p>
                </div>
              </div>
              <div class="col-md-3">
                <div class="text-center">
                  <img src="/img/ejoya/search.svg" class="mb-3" height="63" alt />
                  <h6 class="text-bold text-sec">We review</h6>
                  <p class="gills-font text-white">
                    We attend swiftly to your application and discuss clear terms because your
                    trust is very important to us.
                  </p>
                </div>
              </div>
              <div class="col-md-3">
                <div class="text-center">
                  <img src="/img/ejoya/money.svg" class="mb-3" height="63" alt />
                  <h6 class="text-bold text-sec">Get your advance</h6>
                  <p
                    class="gills-font text-white"
                  >Up to 10 months advance on your mechanical royalties without any physical collateral.</p>
                </div>
              </div>
              <div class="col-md-3">
                <div class="text-center">
                  <img src="/img/ejoya/earn.svg" class="mb-3" height="63" alt />
                  <h6 class="text-bold text-sec">Earn while you pay back</h6>
                  <p class="gills-font text-white">
                    You will be able to choose what percentage of your monthly earning is
                    devoted to the repayment of the advance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section section-calc text-center" id="apply">
        <div class="container-fluid">
          <h2 class="text-white text-bold">Advance Fund Applications</h2>
          <p class="gills-font">What is your average monthly income from your streams?</p>
          <div class="row justify-content-center">
            <div class="col-md-4">
              <form @submit.prevent="calFund">
                <input
                  v-model="amount"
                  type="text"
                  required
                  placeholder="$100"
                  :disabled="apply"
                  class="form-control form-control-lg text-bold"
                  style="color: black"
                />

                <div v-if="notValid" class="alert alert-info mt-3 py-2">
                  <button
                    type="button"
                    class="close"
                    data-dismiss="alert"
                    aria-hidden="true"
                  >&times;</button>
                  {{alertMsg}}
                </div>

                <button v-if="!apply" type="submit" class="btn btn-sec btn-primary mt-3 px-5">Submit</button>
                <div class="mt-4 text-white" v-else>
                  <p class="mb-0 opacity-5 text-white">Advance Range</p>
                  <h3 class="text-bold text-white">${{minAmt}} - ${{maxAmt}}</h3>
                  <button
                    @click="apply = false"
                    class="btn btn-link text-capitalize text-sec pt-4"
                  >Cancel</button>
                  <button
                    class="btn btn-sec btn-primary mt-3 px-5"
                    data-toggle="modal"
                    @click="applyModal = true"
                  >Apply</button>
                </div>
              </form>

              <modal :show.sync="applyModal">
                <div class="text-right">
                  <button
                    type="button"
                    class="text-sec btn-link btn text-capitalize"
                    @click="applyModal= false"
                  >Cancel</button>
                </div>
                <form @submit.prevent="submitDetails">
                  <div class="modal-body text-left">
                    <p
                      class="small"
                    >Nice, you are one step closer to cash. Tell us more about you so we may review your advance. After you submit, we'll verify your earnings and reach out with next steps!</p>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>First name</label>
                          <input
                            required
                            v-model="formDetails.firstName"
                            class="form-control"
                            type="text"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Last name</label>
                          <input
                            required
                            v-model="formDetails.lastName"
                            class="form-control"
                            type="text"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Artist name</label>
                          <input
                            required
                            v-model="formDetails.artistName"
                            class="form-control"
                            type="text"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Spotify Profile URL</label>
                          <input
                            v-model="formDetails.spotifyProfileUrl"
                            class="form-control"
                            type="url"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Email</label>
                          <input
                            required
                            v-model="formDetails.email"
                            class="form-control"
                            type="email"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Phone Number</label>
                          <input
                            required
                            v-model="formDetails.phoneNumber"
                            class="form-control"
                            type="text"
                          />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <label>How much do you need?</label>
                          <input
                            required
                            v-model="formDetails.amountNeeded"
                            class="form-control"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer justify-content-center">
                    <button
                      :disabled="sending"
                      type="submit"
                      class="btn btn-sec btn-primary text-capitalize"
                    >
                      <span v-if="sending">Sending details...</span>
                      <span v-else>Submit for Review</span>
                    </button>
                  </div>
                </form>
              </modal>
            </div>
          </div>
        </div>
      </div>
      <div class="section features-6 bg-black" id="faq">
        <div class="container-fluid">
          <div class="text-center mt-5">
            <h2 class="text-white text-bold">Frequently Asked Questions</h2>
          </div>
          <div class="mt-5">
            <div class="row">
              <div class="col-md-6 mb-4">
                <div class="media">
                  <p class="pull-left freqcount" href="#">1</p>
                  <div class="media-body">
                    <h6 class="text-bold text-sec">What is Ejoya AAF</h6>
                    <p class="gills-font text-white">
                      With the artist advance fund, you will be able to access your advances
                      from a one stop dashboard (advance.ejoya.co) where your applications can be made. Repayment will
                      be made on a monthly basis with a pre-agreed flat fee till the advance is paid off in its
                      entirety. Like our operations, each advance will be dynamic with the length of repayment and the
                      percentage of income set aside for repayment.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 mb-4">
                <div class="media">
                  <p class="pull-left freqcount" href="#">2</p>
                  <div class="media-body">
                    <h6 class="text-bold text-sec">Do you own the rights to my music?</h6>
                    <p class="gills-font text-white">
                      Accessing the fund does not infringe on your copyrights, neither would
                      we be soliciting for the ownership of your masters.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-6 mb-4">
                <div class="media">
                  <p class="pull-left freqcount" href="#">3</p>
                  <div class="media-body">
                    <h6 class="text-bold text-sec">What are the eligibilty requirements?</h6>
                    <p class="gills-font text-white">
                      Income: you must be earning as low as $100 monthly or more from digital streams
                      to be eligible Distribution: If you are not already distributing through Ejoya, you must agree to
                      transfer your catalog to Ejoya before an advance can be issued. We are available to provide
                      advisory support If you are locked into a contract, please do contact us
                      <a
                        class="text-sec"
                        href="mailto:advance@ejoya.co"
                        target="_blank"
                      >advance@ejoya.co</a>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 mb-4">
                <div class="media">
                  <p class="pull-left freqcount" href="#">4</p>
                  <div class="media-body">
                    <h6 class="text-bold text-sec">How do I repay the advance?</h6>
                    <p class="gills-font text-white">
                      When you agree to an advance, a payback contribution percentage is
                      fixed. We will deduct the set percentage from your earning and pay you the rest. Financial
                      statements will be sent to you monthly
                    </p>
                  </div>
                </div>
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
  components: {
    Modal,
  },
  mounted() {},
  methods: {
    calFund() {
      if (this.validateAmt(this.amount)) {
        if (this.amount >= 100 && this.amount <= 50000) {
          this.notValid = false;
          this.apply = true;
          this.minAmt = 3 * this.amount;
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
