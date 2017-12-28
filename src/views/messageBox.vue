<template>
  <div>
      <m-header :hasBack='true'>
          <div slot='title' class="title">MessageBox</div>
      </m-header>
      <m-items :list='list'></m-items>
  </div>
</template>


<script>
import mHeader from "../components/header";
import mItems from "../components/items";
import {MessageBox} from 'mint-ui'
export default {
  components: {
    mHeader,
    mItems
  },
  data() {
    return {
      list: [
        {
          text: "打开alert提示框",
          do:this.alert_1
        },
        {
          text: "打开confirm提示框",
          do:this.confirm
        },
        {
          text: "打开prompt提示框",
          do:this.prompt
        }
      ]
    }
  },
  methods:{
      alert_1(){
          MessageBox.alert('success').then(action=>{
              console.log(action)
          })
      },
      confirm(){
          MessageBox.confirm('are you sure').then(action=>{
              console.log(action)
          }).catch(action=>{
              console.log(action)
          })
      },
      prompt(){
          MessageBox.prompt('tell me your name').then(({value,action})=>{
              console.log(value,action)
          }).catch(action=>{
              console.log(action)
          })
      }
  }
};
</script>

<style lang="scss">

</style>

