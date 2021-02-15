<template>
  <div>
    <div class="row">
      <div class="col-md-9">
        <h2 class="text-white">Good morning, Emmanuel</h2>
      </div>
      <div class="col-md-3">
        <div class="text-right">
          <router-link
            to="/app/new-release"
            class="btn btn-white text-capitalize"
          >
            <i class="fa fa-music mr-2"></i>
            New release
          </router-link>
        </div>
      </div>
    </div>

    <div class="my-3">
      <div class="row">
        <div class="col-md-3">
          <div class="card card-rd">
            <div class="card-body p-3">
              <div class="row mb-3">
                <div class="col-md-5"></div>
                <div class="col-md-7">
                  <div>
                    <select name="" class="form-control form-control-sm" id="">
                      <option value="">All time</option>
                      <option value="">Last week</option>
                    </select>
                  </div>
                </div>
              </div>
              <h3 class="mb-0 font-weight-bold text-white">44,000</h3>
              <p class="mb-0">Streams</p>
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="card card-cyn">
            <div class="card-body p-3">
              <div class="row mb-3">
                <div class="col-md-5"></div>
                <div class="col-md-7">
                  <div>
                    <select name="" class="form-control form-control-sm" id="">
                      <option value="">All time</option>
                      <option value="">Last week</option>
                    </select>
                  </div>
                </div>
              </div>
              <h3 class="mb-0 font-weight-bold text-white">$2000</h3>
              <p class="mb-0">Earnings</p>
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="card card-org">
            <div class="card-body p-3">
              <div class="row mb-3">
                <div class="col-md-5">
                  <img
                    src="https://assets.audiomack.com/kemena/c2c1f44982500cffd0828749e5ed5e4de088c2f6578e6bbf98227ff761df206f.jpeg?width=1000&height=1000&max=true"
                    style="width: 90%"
                    alt=""
                  />
                </div>
                <div class="col-md-7">
                  <div>
                    <select name="" class="form-control form-control-sm" id="">
                      <option value="">All time</option>
                      <option value="">Last week</option>
                    </select>
                  </div>
                </div>
              </div>

              <p class="mb-0">Most streamed</p>
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="card card-dk">
            <div class="card-body p-3">
              <div class="row mb-3">
                <div class="col-md-5"></div>
                <div class="col-md-7">
                  <div>
                    <select name="" class="form-control form-control-sm" id="">
                      <option value="">All time</option>
                      <option value="">Last week</option>
                    </select>
                  </div>
                </div>
              </div>
              <h3 class="mb-0 font-weight-bold text-white">Apple Music</h3>
              <p class="mb-0">Performing platform</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-5"><h4 class="text-white">Your Evolution</h4></div>
    <div class="mt-2">
      <div class="row">
        <div class="col-md-8">
          <div class="card card-dk chartcard">
            <div class="card-body p-3">
              <div class="row mb-3">
                <div class="col-md-9"></div>
                <div class="col-md-3">
                  <div>
                    <select name="" class="form-control form-control-sm" id="">
                      <option value="">This week</option>
                      <option value="">Last week</option>
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <p class="text-white">Bar Chart Here</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card card-dk chartcard">
            <div class="card-body p-3">
              <div>
                <h5 class="text-white">Stream by Countries</h5>
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
  components: {},
};
</script>
<style lang="scss">
</style>
