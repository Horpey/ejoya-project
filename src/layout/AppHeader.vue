<template>
  <header class="header-global">
    <!-- Add 'fixednavbar' for fixed nav -->
    <base-nav
      class="navbar-main position-fixed bg-black py-1"
      transparent
      type
      effect="light"
      expand
    >
      <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
        <img src="/img/ejoya/ejoya.svg" alt="logo" />
      </router-link>

      <div class="row" slot="content-header" slot-scope="{ closeMenu }">
        <div class="col-6 collapse-brand">
          <router-link href="/">
            <img src="/img/ejoya/logo-dark.svg" />
          </router-link>
        </div>
        <div class="col-6 collapse-close">
          <close-button @click="closeMenu"></close-button>
        </div>
      </div>
      <!-- navbar-nav-hover  -->

      <ul class="navbar-nav navbar-nav-hover align-items-lg-center ml-lg-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link">
            <span class="nav-link-inner--text">Home</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/distribution" class="nav-link">
            <span class="nav-link-inner--text">Distribution</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/advance" class="nav-link">
            <span class="nav-link-inner--text">Advance Fund</span>
          </router-link>
        </li>
        <base-dropdown tag="li" class="nav-item">
          <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
            <i class="ni ni-collection d-lg-none"></i>
            <span class="nav-link-inner--text">Company</span>
          </a>
          <router-link to="/about-us" class="dropdown-item">About us</router-link>
          <router-link to="/faq" class="dropdown-item">FAQ</router-link>
          <router-link to="/contact-us" class="dropdown-item">Contact Us</router-link>
        </base-dropdown>

        <li class="nav-item">
          <router-link to="/contact" class="nav-link">
            <span class="nav-link-inner--text">Contact</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="btn btn-dark text-capitalize nvbtn" to="/sign-in">Sign in</router-link>
        </li>
        <!-- <li class="nav-item">
          <router-link class="btn btn-sec text-white text-capitalize" to="/ejoya-pro">Ejoya Pro</router-link>
        </li>-->
      </ul>
    </base-nav>
  </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown,
  },
  mounted() {},
};
</script>
<style></style>
