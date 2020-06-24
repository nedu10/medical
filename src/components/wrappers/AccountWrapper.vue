<template>
  <div>
    <appTopBar />
    <div class="px-0 main-content mt-5">
      <div class="container mt-5">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import appTopBar from "@/components/includes/TopBar";

export default {
  name: "AccountWrapper",
  components: {
    appTopBar,
  },
};
</script>

<style></style>
