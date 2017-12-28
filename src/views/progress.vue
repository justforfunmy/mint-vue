<template>
<div>
    <m-header :has-back="true">
      <div slot="title" class="title">progress</div>
    </m-header>
    <div class="top-blank">
        <mt-button type='primary' class="button" @click="start">上传文件</mt-button>
        <mt-progress :bar-height='5' v-model="value"></mt-progress>
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
          value:0
      }
  },
  methods:{
      start(){
          let timer = setInterval(()=>{
              this.value++;
              console.log(this.value)
              if(this.value>=100){
                  clearInterval(timer)
              }
          },100)
      }
  }
}
</script>

<style lang="scss" scoped>
.top-blank{
    padding:10px;
}
.button{
    margin: 10px;
}
</style>


