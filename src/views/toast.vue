<template>
<div>
  <m-header :has-back='true'>
      <div slot="title" class="title">Toast</div>
  </m-header>
  <m-items :list='list'></m-items>
</div>
  
</template>


<script>
import mHeader from '../components/header'
import mItems from '../components/items'
import {Toast} from 'mint-ui'
export default {
  components:{
      mHeader,
      mItems
  },
  data(){
      return {
          list:[{
              text:'点击弹出toast',
              do:this.toast_1
          },{
              text:'点击弹出带有icon的Toast',
              do:this.toast_2
          },{
              text:'自定义Toast的位置',
              do:this.toast_3
          }]
      }
  },
  methods:{
      handle(callback){
          callback()
      },
      toast_1(){
          Toast('Upload Successed')
      },
      toast_2(){
          Toast({
              message:'Upload Completed',
              duration:1000
          })
      },
      toast_3(){
          Toast({
              message:'Upload Completed',
              duration:3000,
              position:'bottom'
          })
      }
  }
}
</script>


<style lang="scss">

</style>

