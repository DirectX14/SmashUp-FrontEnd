<template>
  <div class="card">
    <div class="card-logo"/>
    <div class="card-title">
      Мэшап-Радио
    </div>
    <div class="card-autor">
      SmashUp
    </div>
  </div>
</template>
<style lang="scss">
.card {
  width: 240px;
  height: 300px;
  display: flex;
  flex-direction: column;

  font-size: 16px;
  line-height: 19px;
  color: #EBEBEB;

  &-autor {
    font-weight: 400;
    margin: 8px 25px 25px;
  }
    

  &-logo {
    background: url('../assets/images/Картинка.png') no-repeat;
    height: 100%;
    width: auto;
    margin: 25px 25px 15px;
  }

  &-title {
    font-weight: 600;
    margin: 0 25px;
  }
}
</style>