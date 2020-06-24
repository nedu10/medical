<template>
  <div class="card card-body">
    <div class="flexbox align-items-center">
      <label class="toggler toggler-yellow fs-16">
        <input type="checkbox" checked />
        <i class="fa fa-star"></i>
      </label>
      <div class="dropdown">
        <a data-toggle="dropdown" href="#" aria-expanded="false"
          ><i class="ti-more-alt rotate-90 text-muted"></i
        ></a>
        <div class="dropdown-menu dropdown-menu-right">
          <a class="dropdown-item" href="#"
            ><i class="fa fa-fw fa-user"></i> Profile</a
          >
          <a class="dropdown-item" href="#"
            ><i class="fa fa-fw fa-comments"></i> Messages</a
          >
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#"
            ><i class="fa fa-fw fa-remove"></i> Disable</a
          >
        </div>
      </div>
    </div>
    <div class="text-center pt-3">
      <a href="#">
        <img class="avatar avatar-xxl" src="/assets/img/avatar/1.jpg" />
      </a>
      <h5 class="mt-3 mb-0">
        <a class="hover-primary" href="#">Tochukwu Ifediorah</a>
      </h5>
      <span>Medical Doctor</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleMember",
};
</script>

<style></style>
