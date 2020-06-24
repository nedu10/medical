<template>
  <div class="card">
    <div class="row no-gutters">
      <div class="col-md-12">
        <div class="card-body">
          <h4>
            <a class=" font-weight-bold" href="#">One Week Doctors Break</a>
          </h4>
          <p><time>October 16, 2017</time></p>

          <p>
            Holisticly maximize team building ROI via next-generation resources.
            Enthusiastically promote team driven customer service and error-free
            solutions. Dynamically myocardinate vertical leadership for
            synergistic "outside the box" thinking. Efficiently extend global
            and error-free solutions. Dynamically myocardinate vertical
            leadership for synergistic "outside the box" thinking. Efficiently
            extend global.
          </p>

          <div class="flexbox align-items-center mt-3">
            <a
              class="btn btn-round btn-bold btn-primary"
              data-toggle="modal"
              data-target="#modal-center"
              href="#"
              >Read more</a
            >

            <div class="gap-items-4">
              <a class="text-muted" href="#">
                <i class="fa fa-heart mr-1"></i> 12
              </a>
              <a class="text-muted" href="#">
                <i class="fa fa-comment mr-1"></i> 3
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <appSingleBroadcastDetails />
  </div>
</template>

<script>
import appSingleBroadcastDetails from "@/components/modals/SingleBroadcastDetails";
export default {
  name: "SingleBroadcast",
  components: {
    appSingleBroadcastDetails,
  },
};
</script>

<style></style>
