<template>
  <div class="main-container">
    <a href="#/playlist">
      <v-card/>
    </a>
  </div>
</template>

<script>
  import VCard from "../components/VCard.vue";
  export default {
    components: {
      VCard
    }
  };
</script>

<style scoped lang="scss">
.main {
  &-container {
    width: 100%;
    height: 100vh;
    background-color: black;

    & a {
      text-decoration: none;
    }
  }
}
</style>
