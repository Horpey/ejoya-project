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
          <a href="#">
            <img src="/img/ejoya/logo-dark.svg" />
          </a>
        </div>
        <div class="col-6 collapse-close">
          <close-button @click="closeMenu"></close-button>
        </div>
      </div>

      <ul class="navbar-nav align-items-lg-center ml-lg-auto">
        <li class="nav-item">
          <a href="#apply" class="nav-link">
            <span class="nav-link-inner--text">Home</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#how-it-works" class="nav-link">
            <span class="nav-link-inner--text">Distribution</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#faq" class="nav-link">
            <span class="nav-link-inner--text">Advance Fund</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#faq" class="nav-link">
            <span class="nav-link-inner--text">Company</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#faq" class="nav-link">
            <span class="nav-link-inner--text">Contact</span>
          </a>
        </li>
        <li class="nav-item">
          <router-link class="btn btn-dark text-capitalize nvbtn" to="/sign-in">Sign in</router-link>
        </li>
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
