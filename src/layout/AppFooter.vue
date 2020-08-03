<template>
  <div id="contact" class="bartfooter">
    <div class="container">
      <p class>Native Rekords Limited.</p>
      <div class="row">
        <div class="col-md-3 col-6">
          <p class="itemqua">Location</p>
          <p class="m-0 small">Kigali, Rwanda</p>
        </div>
        <div class="col-md-3 col-6">
          <p class="itemqua">Phone Number(s)</p>
          <p class="m-0 small">
            <a class="text-white" href="tel:+250734674639">+250734674639</a>
          </p>
        </div>
        <div class="col-md-3 col-6">
          <p class="itemqua">Email</p>
          <p class="m-0 small">
            <a class="text-white" href="mailto:sales@mybartty.com">sales@mybartty.com</a>
          </p>
        </div>
        <div class="col-md-3 col-6">
          <p class="itemqua">Socials</p>
          <p class="m-0">
            <a
              class="p-color letter-spacing-2 mr-2"
              target="_blank"
              href="https://www.instagram.com/mybartty.c_o_m/"
            >IG</a>
            <a
              class="p-color letter-spacing-2 mr-2"
              target="_blank"
              href="https://twitter.com/mybartty"
            >TW</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "app-footer",
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style>
</style>
