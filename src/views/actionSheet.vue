<template>
  <div>
      <m-header :has-back = 'true'>
          <div slot="title" class="title">Action Sheet</div>
      </m-header>
      <m-items :list='list'></m-items>
      <mt-actionsheet
          :actions='actions'
          v-model='sheetVisible'
          :cancelText='cancelText'>
      </mt-actionsheet>
  </div>
</template>

<script>
import mHeader from '../components/header'
import mItems from '../components/items'
import {Actionsheet} from 'mint-ui'
export default {
  components:{
      mHeader,
      mItems
  },
  data(){
      return {
          list:[{
              text:'点击上拉action sheet',
              do:this.sheet_1
          },{
              text:'不带取消按钮的action sheet',
              do:this.sheet_2
          }],
          actions:[{
              name:'plan A',
              method:this.callback
          },{
              name:'plan B',
              method:this.callback
          }],
          sheetVisible:false,
          cancelText:'cancel'
      }
  },
  methods:{
      sheet_1(){
          this.sheetVisible = true;
          this.cancelText = 'cancel'
      },
      sheet_2(){
          this.sheetVisible = true;
          this.cancelText = ''
      },
      callback(options){
          console.log(options)
      }
  }
}
</script>

<style lang="scss">

</style>


