<template>
  <div id="dashboardApp">
    <div class="wrapper">
      <Sidebar />
      <fade-transition origin="center" mode="out-in" :duration="250">
        <router-view></router-view>
      </fade-transition>
    </div>
  </div>
</template>
<script>
import { FadeTransition } from "vue2-transitions";
import Sidebar from "./Sidebar";
export default {
  components: {
    FadeTransition,
    Sidebar,
  },
};
</script>
<style lang="scss">
@import "../../../assets/scss/app_sass/dashboard.scss";
@import "../../../assets/scss/app_sass/customdashboard.scss";
@import "../../../assets/scss/app_sass/theme.scss";
// @import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css";
</style>
