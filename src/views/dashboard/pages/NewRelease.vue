<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-md-5">
        <div v-if="!sentCompletely">
          <div v-if="!allFilled">
            <h3 class="text-white">Schedule a New Release</h3>
            <div class="my-4 displayprogress">
              <div class="progressln"></div>
              <div class="progressvs" style="width: 25%"></div>
            </div>
            <button
              v-if="step > 1"
              @click="step--"
              class="btn btn-link text-white text-capitalize pl-0"
            >
              <i class="fa fa-chevron-left mr-2"></i>
              Back
            </button>
          </div>
          <div class="my-5">
            <div v-if="step == 1">
              <div class="form-group mb-4 text-white">
                <label for="">Select Release type</label>
                <select name="" class="form-control" id="">
                  <option value="">Single</option>
                  <option value="">Album</option>
                </select>
              </div>

              <div class="form-group mb-4 text-white">
                <label for="">Song title</label>
                <input type="text" class="form-control" />
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group mb-4 text-white">
                    <label for="">Select Genre</label>
                    <select name="" class="form-control" id="">
                      <option value="">Select Primary</option>
                      <option value="">Album</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group mb-4 text-white">
                    <label for="">Select Genre</label>
                    <select name="" class="form-control" id="">
                      <option value="">Select Secondary</option>
                      <option value="">Album</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="form-group mb-4 text-white">
                <label for="">Song Year</label>
                <input type="text" class="form-control" />
              </div>

              <div class="row">
                <div class="col-md-6">
                  <div class="form-group mb-4 text-white">
                    <label for="">ISRC Code</label>
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group mb-4 text-white">
                    <label for="">UPC Code</label>
                    <input type="text" class="form-control" />
                  </div>
                </div>
              </div>
            </div>

            <div v-if="step == 2">
              <div class="row">
                <div class="col-md-4">
                  <div class="form-group mb-4 text-white">
                    <label for="">Select role</label>
                    <select name="" class="form-control" id="">
                      <option value="">Role</option>
                      <option value="">Album</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="form-group mb-4 text-white">
                    <label for="">Name</label>
                    <input type="text" class="form-control" />
                  </div>
                </div>
              </div>
              <div class="form-group mb-4 text-white">
                <label for="">Language of performance</label>
                <input type="text" class="form-control" />
              </div>

              <div class="">
                <button class="btn-link btn pl-0">
                  <i class="fa fa-plus mr-2"></i>
                  Add lyrics
                </button>
              </div>
            </div>

            <div v-if="step == 3">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group mb-4 text-white">
                    <label for="">Schedule release date</label>
                    <input type="date" class="form-control" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group mb-4 text-white">
                    <label for="">Schedule release time</label>
                    <input type="time" class="form-control" />
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6">
                  <div class="form-group mb-4 text-white">
                    <label for="">Preview start</label>
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group mb-4 text-white">
                    <label for="">Preview length</label>
                    <input type="text" class="form-control" />
                  </div>
                </div>
              </div>

              <div class="form-group mb-4 text-white">
                <label for="">Label</label>
                <input type="text" class="form-control" />
              </div>
              <div class="form-group mb-4 text-white">
                <label for="">Select platforms for distribution</label>
                <select name="" class="form-control" id="">
                  <option value="">Apple music</option>
                  <option value="">Spotify</option>
                </select>
              </div>
            </div>

            <div v-if="step == 4">
              <div class="form-group mb-4 text-white">
                <label for="">Add artwork</label>
                <input type="file" class="form-control" />
                <p class="mt-3 small opacity-4">
                  1400 px by 1400 px minimum image size
                </p>
              </div>
              <div class="form-group mb-4 text-white">
                <label for="">Upload song</label>
                <input type="file" class="form-control" />
                <p class="mt-3 small opacity-4">
                  Wav/FLAC(Stereo 16,24 0r 32 bits between 44.1 and 192 kHz)
                </p>
              </div>
            </div>

            <div class="row mt-5" v-if="!allFilled">
              <div class="col-md-6">
                <button class="btn btn-outline-white text-capitalize btn-block">
                  Save progress
                </button>
              </div>
              <div class="col-md-6">
                <button
                  @click="step++"
                  class="btn btn-primary text-capitalize btn-block"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>

          <div v-if="allFilled" class="card card-dk">
            <div class="card-body p-3">
              <button
                @click="step--"
                class="btn btn-link text-white text-capitalize pl-0"
              >
                <i class="fa fa-chevron-left mr-2"></i>
                Back
              </button>
              <div class="row">
                <div class="col-md-5">
                  <img
                    src="https://assets.audiomack.com/kemena/c2c1f44982500cffd0828749e5ed5e4de088c2f6578e6bbf98227ff761df206f.jpeg?width=1000&height=1000&max=truez"
                    style="width: 100%"
                    alt=""
                  />
                </div>
                <div class="col-md-6">
                  <button class="btn btn-link text-white pl-0 text-capitalize">
                    <i class="fa fa-edit mr-2"></i> Edit release
                  </button>
                </div>
              </div>
              <div class="my-4">
                <div class="media">
                  <span class="d-flex text-primary" style="width: 120px">
                    Song Title
                  </span>
                  <div class="media-body">
                    <p class="mb-1">Vibes from Rem</p>
                  </div>
                </div>
                <div class="media">
                  <span class="d-flex text-primary" style="width: 120px">
                    Song Year
                  </span>
                  <div class="media-body">
                    <p class="mb-1">2020</p>
                  </div>
                </div>
                <div class="media">
                  <span class="d-flex text-primary" style="width: 120px">
                    Release date
                  </span>
                  <div class="media-body">
                    <p class="mb-1">20-10-20</p>
                  </div>
                </div>
                <div class="media">
                  <span class="d-flex text-primary" style="width: 120px">
                    Label
                  </span>
                  <div class="media-body">
                    <p class="mb-1">The Simple Creator</p>
                  </div>
                </div>
                <div class="media">
                  <span class="d-flex text-primary" style="width: 120px">
                    Platforms
                  </span>
                  <div class="media-body">
                    <p class="mb-1">Apple Music, Spotify, Deezer</p>
                  </div>
                </div>

                <div class="media">
                  <span class="d-flex text-primary" style="width: 120px">
                    Genre
                  </span>
                  <div class="media-body">
                    <p class="mb-1">Afro Pop</p>
                  </div>
                </div>

                <div class="media">
                  <span class="d-flex text-primary" style="width: 120px">
                    Contributors
                  </span>
                  <div class="media-body">
                    <p class="mb-1">Telz (Producer), Emmanuel(Writer)</p>
                  </div>
                </div>
                <div class="media">
                  <span class="d-flex text-primary" style="width: 120px">
                    Language
                  </span>
                  <div class="media-body">
                    <p class="mb-1">English</p>
                  </div>
                </div>
              </div>

              <div class="row mt-5">
                <div class="col-md-6">
                  <button
                    class="btn btn-outline-white text-capitalize btn-block"
                  >
                    Save to draft
                  </button>
                </div>
                <div class="col-md-6">
                  <button
                    @click="sentCompletely = true"
                    class="btn btn-primary text-capitalize btn-block"
                  >
                    Submit Release
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <div class="card card-dk">
            <div class="card-body p-3">
              <div class="row mt-5">
                <div class="col-md-6 mx-auto">
                  <div class="text-center">
                    <img
                      src="/img/ejoya/release-check.svg"
                      class="img-fluid mb-4"
                      alt=""
                    />
                    <h4 class="mb-5 text-white">Release Submitted</h4>
                  </div>
                  <router-link
                    to="/app"
                    class="btn btn-primary mb-4 text-capitalize btn-block"
                  >
                    Continue
                  </router-link>
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
export default {
  data() {
    return {
      step: 1,
      sentCompletely: false,
    };
  },
  computed: {
    allFilled() {
      if (this.step > 4) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>