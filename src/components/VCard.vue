<template>
  <div class="card">
    <a
      class="card-logo-link"
      :href="link"
    >
      <div class="card-logo"/>
    </a>
    <a
      class="card-title-link"
      :href="link"
    >
      <div class="card-title">
        Мэшап-Радио
      </div>
    </a>
    <div class="card-autor">
      SmashUp
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      href: {
        type: String,
        default: ''
      }
    },
    computed: {
      link () {
        return `#/${this.href}`;
      }
    }
  };
</script>
<style lang="scss">
.card {
  width: 240px;
  height: 300px;
  display: flex;
  flex-direction: column;

  font-size: 16px;
  line-height: 19px;
  color: #EBEBEB;
  font-family: 'Inter', sans-serif;

  &-autor {
    font-weight: 400;
    margin: 8px 25px 25px;
  }
    

  &-logo {
    background: url('../assets/images/Картинка.png') no-repeat;
    height: 188px;

    &-link {
      text-decoration: none;
      margin: 25px 25px 15px;
    }
  }

  &-title {
    font-weight: 600;

    &-link {
      color: #EBEBEB;
      text-decoration: none;
      margin: 0 25px;
    }
  }
}
</style>