<template>
  <div>
    <b-modal
      ref="my-modal"
      size="lg"
      body-bg-variant="warning"
      centered
      hide-footer
    >
      <div class="d-block text-center p-2">
        <input type="file" id="data-image" /><br />
        <label class="chocolate yellow" for="data-image">Choose Image</label>
      </div>
      <b-row>
        <button class="chocolate putih mx-auto">
          Cancel
        </button>
        <button class="chocolate mx-auto">
          Save
        </button>
      </b-row>
    </b-modal>
  </div>
</template>
<script>
export default {}
</script>
<style scoped></style>
