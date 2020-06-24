<template>
  <div class="col-12">
    <appSingleBroadcast v-for="i in 5" :key="i" />
  </div>
</template>

<script>
import appSingleBroadcast from "@/components/UIs/SingleBroadcast";

export default {
  name: "Broadcast",
  components: {
    appSingleBroadcast,
  },
};
</script>

<style></style>
