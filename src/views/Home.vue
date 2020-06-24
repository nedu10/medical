<template>
  <div class="row no-gutters min-h-fullscreen bg-white">
    <div
      class="col-md-6 col-lg-6 col-xl-7 d-none d-md-block bg-img"
      style="background-image: url(../assets/img/custom/doctors_banner.jpg)"
      data-overlay="5"
    >
      <div class="row h-100 pl-50">
        <div class="col-md-10 col-lg-8 align-self-end">
          <img src="/assets/img/custom/doctor_banner.jpg" alt="..." />
          <br /><br /><br />
          <h4 class="text-white">
            LME Akwa Ibom.
          </h4>
          <p class="text-white">
            Doctors Management App.
          </p>
          <br /><br />
        </div>
      </div>
    </div>

    <div class="col-md-6 col-lg-6 col-xl-5 align-self-center">
      <div class="px-80 py-30">
        <h4>Create an account</h4>
        <!-- <p><small>All fields are required.</small></p> -->
        <br />

        <form class="form-type-material" @submit.prevent="registerUser()">
          <div class="row">
            <div class="form-group col-12 col-sm-6">
              <input type="text" class="form-control" id="first_name" />
              <label class="pl-3" for="first_name">First Name</label>
            </div>
            <div class="form-group col-12 col-sm-6">
              <input type="text" class="form-control" id="last_name" />
              <label class="pl-3" for="last_name">Last Name</label>
            </div>

            <div class="form-group col-12 col-sm-6">
              <input type="text" class="form-control" id="email" />
              <label class="pl-3" for="email">Email address</label>
            </div>

            <div class="form-group col-12 col-sm-6">
              <input type="text" class="form-control" id="phone" />
              <label class="pl-3" for="phone">Phone Number</label>
            </div>

            <div class="form-group col-12 col-sm-6">
              <input type="password" class="form-control" id="password" />
              <label class="pl-3" for="password">Password</label>
            </div>

            <div class="form-group col-12 col-sm-6">
              <input type="password" class="form-control" id="password-conf" />
              <label class="pl-3" for="password-conf">Password (confirm)</label>
            </div>

            <div class="form-group col-12">
              <label class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" />
                <span class="custom-control-indicator"></span>
                <span class="custom-control-description"
                  >I agree to all
                  <a class="text-primary" href="#">terms</a></span
                >
              </label>
            </div>
          </div>

          <br />
          <button class="btn btn-bold btn-block btn-primary" type="submit">
            Register
          </button>
        </form>

        <hr class="w-30px" />

        <p class="text-center text-muted fs-13 mt-20">
          Already have an account?
          <router-link tag="a" class="text-primary fw-500" to="/login"
            >Sign in</router-link
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Nprogress from "nprogress";
import { notifications } from "@/mixins/Notification";

export default {
  name: "Home",
  mixins: [notifications],
  methods: {
    async registerUser() {
      Nprogress.start();
      const self = this;
      setTimeout(() => {
        this.showSuccessNotification("Successfully Registered User");
        Nprogress.done();
      }, 1000);
      setTimeout(() => {
        location.replace("/login");
      }, 1500);
    },
  },
};
</script>
