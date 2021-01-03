<template>
  <div>
    <b-navbar
      type="light"
      variant="white"
      class="py-3 border-bottom m-0"
      style="z-index: 3"
    >
      <div class="logo">
        <img
          src="../../../assets/Coffee-icon.png"
          style="margin: -7px 4px 0 0;"
        />Coffee Shop
      </div>
      <b-navbar-nav class="ml-auto">
        <router-link :to="link"
          ><h5 class="text-dark">{{ text }}</h5></router-link
        >
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>
<script>
export default {
  props: ['link', 'text']
}
</script>
