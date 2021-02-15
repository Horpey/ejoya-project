<template>
   <div id="dashboardApp">
      <div class="wrapper">
         <Sidebar />
         <div data="vue" class="main-content">
            <nav class="navbar navbar-top navbar-dark navbar-expand-md" id="navbar-main">
               <div class="container-fluid">
                  <div id="0.07928687483876917" class="collapse navbar-collapse">
                     <div class="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
                        <p class="pt-3 text-white">Current balance: $200.00</p>
                     </div>
                     <ul class="navbar-nav align-items-center d-none d-md-flex">
                        <li class="nav-item dropdown"> 
                        <li aria-haspopup="true" class="dropdown nav-link pr-0 dropdown">
                           <div class="media align-items-center">
                              <span class="avatar avatar-sm rounded-circle"><img alt="Image placeholder" src="/img/ejoya/user.png"></span> 
                              <div class="media-body ml-2 d-none d-lg-block"><span class="mb-0 text-sm  font-weight-bold">Adeniran Opeyemi</span></div>
                           </div>
                           <ul class="dropdown-menu">
                              <div class=" dropdown-header noti-title">
                                 <h6 class="text-overflow m-0">Welcome!</h6>
                              </div>
                              <a href="#/profile" class="dropdown-item"><i class="ni ni-single-02"></i><span>My profile</span></a><a href="#/profile" class="dropdown-item"><i class="ni ni-settings-gear-65"></i><span>Settings</span></a><a href="#/profile" class="dropdown-item"><i class="ni ni-calendar-grid-58"></i><span>Activity</span></a><a href="#/profile" class="dropdown-item"><i class="ni ni-support-16"></i><span>Support</span></a> 
                              <div class="dropdown-divider"></div>
                              <a href="#/profile" class="dropdown-item"><i class="ni ni-user-run"></i><span>Logout</span></a>
                           </ul>
                        </li>
                        </li> 
                     </ul>
                  </div>
               </div>
            </nav>
            <div>
    <div>
      <div class="header pb-6 pb-8 bg-semitheme cdView">
        <div class="container-fluid">
          <div class="header-body">
          <fade-transition origin="center" mode="out-in" :duration="250">
               <router-view></router-view>
            </fade-transition>
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
import { FadeTransition } from "vue2-transitions";
import Sidebar from "./Sidebar";
export default { components: { FadeTransition, Sidebar } };
</script> 
<style lang="scss">
@import "../../../assets/scss/app_sass/dashboard.scss";
@import "../../../assets/scss/app_sass/customdashboard.scss";
@import "../../../assets/scss/app_sass/theme.scss"; // @import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css";
</style>