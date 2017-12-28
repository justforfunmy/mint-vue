<template>
<div>
  <m-header :has-back='true'>
    <div slot="title" class="title">Range</div>
  </m-header>
  <div class="top-blank">
    <div class="center range">
      <div class="name">默认:</div>
      <mt-range v-model="value.normal" class="fg"></mt-range>
    </div>
    <div class="center range">
      <div class="name">预设:</div>
      <mt-range v-model="value.preSet" class="fg"></mt-range>
    </div>
    <div class="center range">
      <div class="name">左右文字:</div>
      <mt-range v-model="value.special" class="fg">
        <div slot="start">0</div>
        <div slot="end">100</div>
      </mt-range>
    </div>
  </div>
</div>
  
</template>

<script>
import mHeader from '../components/header'
export default {
  components:{
    mHeader
  },
  data(){
    return {
      value:{
        normal:0,
        preSet:40,
        special:20
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.range{
  padding:10px;
}
.name{
  margin-right: 10px;
}
</style>


