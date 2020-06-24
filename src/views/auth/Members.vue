<template>
  <div class="row">
    <div class="col-6 col-md-6 col-lg-4 col-xl-3" v-for="i in 6" :key="i">
      <appSingleMember />
    </div>
  </div>
</template>

<script>
import appSingleMember from "@/components/UIs/SingleMember";
export default {
  name: "members",
  components: {
    appSingleMember,
  },
};
</script>

<style></style>
