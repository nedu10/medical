<template>
  <div class="row min-h-fullscreen center-vh p-20 m-0">
    <div class="col-12">
      <div
        class="card card-shadowed px-50 py-30 w-400px mx-auto"
        style="max-width: 100%"
      >
        <h5 class="text-uppercase">Sign in</h5>
        <br />

        <form @submit.prevent="loginUser()" class="form-type-material">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="username"
              name="username"
            />
            <label for="username">Username</label>
          </div>

          <div class="form-group">
            <input
              type="password"
              class="form-control"
              id="password"
              name="password"
            />
            <label for="password">Password</label>
          </div>

          <div class="form-group flexbox flex-column flex-md-row">
            <label class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" checked />
              <span class="custom-control-indicator"></span>
              <span class="custom-control-description">Remember me</span>
            </label>

            <a class="text-muted hover-primary fs-13 mt-2 mt-md-0" href="#"
              >Forgot password?</a
            >
          </div>

          <div class="form-group">
            <button class="btn btn-bold btn-block btn-info" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
      <p class="text-center text-muted fs-13 mt-20">
        Don't have an account?
        <router-link tag="a" class="text-primary fw-500" to="/"
          >Sign Up</router-link
        >
      </p>
    </div>
  </div>
</template>
<script>
import Nprogress from "nprogress";
import { notifications } from "@/mixins/Notification";
export default {
  name: "Login",
  mixins: [notifications],
  methods: {
    async loginUser() {
      Nprogress.start();
      const self = this;
      setTimeout(() => {
        this.showSuccessNotification("Successfully Logged In");
        Nprogress.done();
      }, 1000);
      setTimeout(() => {
        location.replace("/account");
      }, 1500);
    },
  },
};
</script>
