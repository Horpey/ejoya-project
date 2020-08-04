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
      <a slot="brand" class="navbar-brand mr-lg-5" href="#">
        <img src="/img/ejoya/ejoya.svg" alt="logo" />
      </a>

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
            <span class="nav-link-inner--text">Apply</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#how-it-works" class="nav-link">
            <span class="nav-link-inner--text">How it works</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#faq" class="nav-link">
            <span class="nav-link-inner--text">FAQs</span>
          </a>
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
    BaseDropdown
  },
  mounted() {}
};
</script>
<style></style>
