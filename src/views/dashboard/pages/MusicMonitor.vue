<template>
  <div>
    <h2 class="text-white">Music Monitor</h2>
    <div class="row">
      <div class="col-md-4">
        <ul role="tablist" class="nav nav-pills nav-fill">
          <li class="nav-item">
            <a
              data-toggle="tab"
              role="tab"
              href="#Home"
              class="nav-link active"
              aria-selected="true"
              ><div>Completed</div></a
            >
          </li>
          <li class="nav-item">
            <a data-toggle="tab" role="tab" href="#Profile" class="nav-link"
              ><div>Pending</div></a
            >
          </li>
          <li class="nav-item">
            <a data-toggle="tab" role="tab" href="#Messages" class="nav-link"
              ><div>Draft</div></a
            >
          </li>
        </ul>
      </div>
      <div class="col-md-5"></div>
      <div class="col-md-3">
        <div class="form-group input-group">
          <!---->
          <div class="input-group-prepend">
            <span class="input-group-text"
              ><i class="ni ni-zoom-split-in"></i
            ></span>
          </div>
          <input
            aria-describedby="addon-right addon-left"
            placeholder="Search Catalogue"
            class="form-control"
          /><!----><!---->
        </div>
      </div>
    </div>
    <div class="my-3">
      <div class="card mb-3 musicCard" v-for="(music, index) in 4" :key="index">
        <div class="card-body p-3" @click="displayPop = true">
          <div class="row">
            <div class="col-md-2">
              <img
                style="width: 100%"
                srcset="
                  https://assets.audiomack.com/kemena/c2c1f44982500cffd0828749e5ed5e4de088c2f6578e6bbf98227ff761df206f.jpeg?width=1000&height=1000&max=true
                "
                alt=""
              />
            </div>
            <div class="col-md-10">
              <div class="row">
                <div class="col-md-7">
                  <h3 class="mb-0">Vibes from Rem</h3>
                  <p class="small">Released 10-10-2018</p>
                  <div>
                    <div class="row">
                      <div class="col-4">
                        <h4 class="mb-0">20,000</h4>
                        <p class="small mb-0">Plays</p>
                      </div>
                      <div class="col-4">
                        <h4 class="mb-0">$2200</h4>
                        <p class="small mb-0">Amount made</p>
                      </div>
                    </div>
                    <span class="badge badge-success">Completed</span>
                  </div>
                </div>
                <div class="col-md-5">
                  <p>Showing</p>
                  <div>
                    <span class="nshowing active">
                      <i class="fa fa-circle mr-2"></i>
                      Apple Music
                    </span>
                    <span class="nshowing">
                      <i class="fa fa-circle mr-2"></i>
                      Spotify
                    </span>
                    <span class="nshowing">
                      <i class="fa fa-circle mr-2"></i>
                      Soundcloud
                    </span>
                    <span class="nshowing">
                      <i class="fa fa-circle mr-2"></i>
                      Deezer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <modal class="dkModal" :show.sync="displayPop">
      <template slot="header">
        <h4 class="modal-title text-white" id="exampleModalLabel">
          Vibes from Men
        </h4>
      </template>
      <div>
        <div class="musicListt" v-for="(music, index) in 4" :key="index">
          <div class="media">
            <a class="d-flex pr-3" href="#">
              <span>{{ ++index }}</span>
            </a>
            <div class="media-body">
              <h5 class="mb-0">
                America Girl
                <span class="float-right small"
                  >Plays - 5000
                  <i class="fa fa-ellipsis-v ml-2"></i>
                </span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </modal>
  </div>
</template>
<script>
import Modal from "@/components/Modal.vue";

export default {
  components: {
    Modal,
  },
  data() {
    return {
      displayPop: false,
    };
  },
};
</script>