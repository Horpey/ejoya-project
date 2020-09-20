<template>
  <div class="pt-5">
    <div class="section contactdist pb-5 text-center">
      <div class="container-fluid">
        <h1 class="text-white text-bold pt-3">Contact us</h1>
      </div>
    </div>
    <div class="section bg-black">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-5 mx-auto">
            <form>
              <input
                type="text"
                required
                placeholder="Full name"
                class="form-control form-control-lg text-bold mb-3"
                style="color: black"
              />
              <input
                type="email"
                required
                placeholder="Email address"
                class="form-control form-control-lg text-bold mb-3"
                style="color: black"
              />
              <input
                type="text"
                required
                placeholder="Phone number"
                class="form-control form-control-lg text-bold mb-3"
                style="color: black"
              />
              <input
                type="text"
                required
                placeholder="Subject"
                class="form-control form-control-lg text-bold mb-3"
                style="color: black"
              />
              <textarea
                placeholder="Type your message here"
                class="form-control text-bold mb-3"
                name
                rows="10"
              ></textarea>
              <button
                type="submit"
                class="btn btn-sec gills-font text-capitalize btn-primary btn-block mt-5 py-3 px-5 f-16 mb-5"
              >Send Message</button>
            </form>
          </div>
        </div>
        <div class="mt-5">
          <h1 class="text-white text-bold mb-5">
            Quick
            <br />Support
          </h1>
          <div class="row">
            <div class="col-md-4">
              <div class="contact-card text-center mb-4">
                <h4 class="text-white text-bold">
                  <i class="fa fa-map-marker"></i>
                </h4>
                <h4 class="text-white text-bold">Visit us</h4>
                <p
                  class="text-white gills-font"
                >5 Yusuf Okunade idiroko Estate Maryland, Lagos State, Nigeria.</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="contact-card text-center mb-4">
                <h4 class="text-white text-bold">
                  <i class="fa fa-envelope"></i>
                </h4>
                <h4 class="text-white text-bold">Email</h4>
                <p class="text-white gills-font">Contact@ejoya.co</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="contact-card text-center mb-4">
                <h4 class="text-white text-bold">
                  <i class="fa fa-map-marker"></i>
                </h4>
                <h4 class="text-white text-bold">Phone</h4>
                <p class="text-white gills-font">+234 8012 345 678</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>