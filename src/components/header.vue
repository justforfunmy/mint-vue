<template>
  <header class="header">
      <img src="/static/img/back.png" alt="" class="back" v-if="hasBack" @click="goBack">
      <slot name="title"></slot>
  </header>
</template>


<script>
export default {
  props:['hasBack'],
  methods:{
      goBack(){
          this.$router.go(-1)
      }
  }
}
</script>

<style lang="scss">
@import '../assets/config.scss';
.header{
    width: 100%;
    height: 44px;
    background:$bg;
    position: fixed;
    top: 0;
}
.back{
    position: absolute;
    top: 50%;
    left:10px;
    width:25px;
    transform: translate(0,-50%)

}
</style>


