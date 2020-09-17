<template>
  <div>
    <footer class="footer">
      <div class="container-fluid">
        <div class="row row-grid align-items-center mb-4">
          <div class="col-lg-6 col-4">
            <img src="/img/ejoya/ejoya-white.svg" class="img-fluid" alt />
          </div>
          <div class="col-lg-6 col-8 text-lg-center btn-wrapper">
            <ul class="nav nav-footer justify-content-end">
              <li class="nav-item">
                <router-link
                  to="/privacy-policy"
                  class="nav-link"
                  style="color: white!important;"
                >Privacy Policy</router-link>
              </li>
              <li class="nav-item">
                <router-link
                  to="/terms"
                  class="nav-link"
                  style="color: white!important;"
                >Terms & Condition</router-link>
              </li>
              <li class="nav-item">
                <a
                  href="mailto:advance@ejoya.co"
                  class="nav-link"
                  style="color: white!important;"
                  target="_blank"
                >advance@ejoya.co</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="copyright text-white">
              ©
              <a
                href="#"
                class="text-bold"
                style="color: white!important;"
                target="_blank"
              >Ejoya Music</a>
              {{year}}.
              All
              Rights Reserved.
            </div>
          </div>
          <div class="col-md-4">
            <div class="text-center">
              <a
                target="_blank"
                href="https://twitter.com/EjoyaMusic?s=09"
                rel="nofollow"
                class="btn btn-icon-only btn-twitter rounded-circle"
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
                class="btn-icon-only rounded-circle btn btn-facebook"
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
                class="btn-icon-only rounded-circle btn btn-instagram"
                data-toggle="tooltip"
                data-original-title="Like us"
              >
                <span class="btn-inner--icon">
                  <i class="fa fa-instagram"></i>
                </span>
              </a>

              <p class="text-white text-bold mb-0 mt-2">move your music</p>
            </div>
          </div>
          <div class="col-md-4">
            <ul class="nav nav-footer justify-content-end"></ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: "app-footer",
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>
<style>
</style>
