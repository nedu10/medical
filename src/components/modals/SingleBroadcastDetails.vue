<template>
  <!-- Modal -->
  <div class="modal modal-center fade" id="modal-center" tabindex="-1">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="d-flex c-close-modal justify-content-end">
          <button type="button" class="close" data-dismiss="modal">
            <span aria-hidden="true">X</span>
          </button>
        </div>

        <div class="modal-body">
          <p>Your content comes here</p>
          <br /><br /><br /><br /><br /><br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.c-close-modal {
  position: absolute;
  top: -1.1rem;
  right: -0.8rem;
  background: white;
  display: inline-block;
  padding: 0.6rem;
  box-shadow: 0px 0px 0.6rem #ccc;
  border-radius: 50%;
}
</style>
