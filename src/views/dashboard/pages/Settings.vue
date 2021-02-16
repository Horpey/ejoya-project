<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-md-8">
        <h2 class="text-white">Edit Profile</h2>
        <div class="mt-3 mb-5">
          <div class="row">
            <div class="col-md-12">
              <ul role="tablist" class="nav nav-pills nav-fill">
                <li class="nav-item">
                  <a
                    data-toggle="tab"
                    role="tab"
                    href="#Home"
                    class="nav-link active"
                    aria-selected="true"
                    ><div>Edit Profile</div></a
                  >
                </li>
                <li class="nav-item">
                  <a
                    data-toggle="tab"
                    role="tab"
                    href="#Profile"
                    class="nav-link"
                    ><div>Notifications</div></a
                  >
                </li>
                <li class="nav-item">
                  <a
                    data-toggle="tab"
                    role="tab"
                    href="#Messages"
                    class="nav-link"
                    ><div>Subscription</div></a
                  >
                </li>

                     <a
                    data-toggle="tab"
                    role="tab"
                    href="#Messages"
                    class="nav-link"
                    ><div>Password & Security</div></a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div class="media align-items-center">
            <a class="d-flex" href="#">
              <div
                class="userdisplaypic"
                style="
                  background-image: url(https://demos.creative-tim.com/vue-argon-design-system/img/theme/team-2-800x800.jpg);
                "
              ></div>
            </a>
            <div class="media-body">
              <button class="btn btn-primary btn-sm text-capitalize">
                Upload
              </button>
              <button class="btn btn-outline-white btn-sm text-capitalize">
                Remove
              </button>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-6">
              <div class="form-group mb-4 text-white">
                <label for="">First name</label>
                <input type="text" v-model="firstName" class="form-control" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group mb-4 text-white">
                <label for="">Last name</label>
                <input type="text" v-model="lastName" class="form-control" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group mb-4 text-white">
                <label for="">Username</label>
                <input type="text" v-model="userName" class="form-control" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group mb-4 text-white">
                <label for="">Email address</label>
                <input type="text" disabled v-model="email" class="form-control" />
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-group mb-4 text-white">
                <label for="">Phone Number</label>
                <input type="text" v-model="phone" class="form-control" />
              </div>
            </div>
          </div>
          <div class="mt-5">
            <button class="btn btn-primary text-capitalize">
              Save changes
            </button>
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
      firstName: "Emmanuel",
      lastName: "Fadare",
      userName: "EmmaofLagos",
      email: "fadareemma1@gmail.com",
      phone: "+234",
    };
  },
};
</script>