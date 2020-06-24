<template>
  <div class="row px-0">
    <div class="col-12 col-md-4 col-lg-3">
      <appProfileCard />
    </div>
    <div class="col-12 col-md-8 col-lg-6">
      <div class="publisher publisher-multi bg-white b-1 mb-30">
        <textarea
          class="publisher-input auto-expand"
          rows="2"
          placeholder="Write something"
        ></textarea>
        <div class="flexbox">
          <div class="gap-items">
            <span class="publisher-btn file-group">
              <i class="fa fa-image file-browser"></i>
              <input type="file" />
            </span>
          </div>

          <button class="btn btn-sm btn-bold btn-primary">Post</button>
        </div>
      </div>

      <div class="col-12 px-0" v-for="i in 3" :key="i">
        <appSingleFeed />
      </div>
    </div>
  </div>
</template>

<script>
import appProfileCard from "@/components/UIs/ProfileCard";
import appSingleFeed from "@/components/UIs/SingleFeed";
export default {
  name: "Feeds",
  components: {
    appProfileCard,
    appSingleFeed,
  },
};
</script>

<style></style>
