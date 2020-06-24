<template>
  <div class="card">
    <div class="media bb-1 border-fade">
      <img class="avatar avatar-lg" src="/assets/img/avatar/1.jpg" alt="..." />
      <div class="media-body">
        <p>
          <strong class="fs-14">Tochukwu Ifediorah</strong>
          <time class="float-right text-lighter" datetime="2017"
            >24 min ago</time
          >
        </p>
        <p><small>Medical Doctor</small></p>
      </div>
    </div>

    <div class="card-body">
      <p class="">Check this out. It is the next big thing!!</p>
    </div>

    <a href="#">
      <img
        src="/assets/img/gallery/thumb/3.jpg"
        alt="..."
        data-provide="lity"
      />
    </a>

    <div class="card-body py-12">
      <div class="gap-items-4">
        <a class="text-lighter hover-light" href="#">
          <i class="fa fa-thumbs-up mr-1"></i> 196
        </a>
        <a class="text-lighter hover-light" href="#">
          <i class="fa fa-comment mr-1"></i> 24
        </a>
      </div>
    </div>

    <form class="publisher bg-transparent bt-1 border-fade">
      <img class="avatar avatar-sm" src="/assets/img/avatar/2.jpg" alt="..." />
      <input class="publisher-input" type="text" placeholder="Add Comment" />
      <a class="publisher-btn text-info" href="#"
        ><i class="fa fa-paper-plane"></i
      ></a>
    </form>
  </div>
</template>

<script>
export default {
  name: "SingleFeed",
};
</script>

<style></style>
