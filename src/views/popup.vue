<template>
  <div>
      <m-header :has-back = 'true'>
          <div slot="title" class="title">Popup</div>
      </m-header>
      <m-items :list="list"></m-items>
      <mt-popup
          v-model="popupVisible"
          :position='position'
          :modal='false'
          class="popup"
          popup-transition="popup-fade"
      >{{message}}</mt-popup>
  </div>
</template>

<script>
import mHeader from "../components/header";
import mItems from "../components/items";
import {Popup} from 'mint-ui'
export default {
  components: {
    mHeader,
    mItems
  },
  data(){
      return {
          list:[{
              text:'中部弹出popup'
          },{
              text:'上部弹出popup',
              do:this.top
          },{
              text:'右侧弹出popup'
          },{
              text:'下侧弹出popup',
              do:this.bottom
          }],
          popupVisible:false,
          position:'bottom',
          message:'successed'
      }
  },
  methods:{
      top(){
          this.popupVisible = true;
          this.position = 'top';
          setTimeout(()=>{
              this.popupVisible = false
          },2000)
      },
      bottom(){
          this.popupVisible = true;
          this.position = 'bottom';
          setTimeout(()=>{
              this.popupVisible = false
          },2000)
      }
  }
};
</script>

<style lang="scss">
.popup{
    width:100%;
    height: 44px;
    background:rgba(0,0,0,0.5);
    color:#fff;
    text-align: center;
    font-size: 20px;
    line-height: 44px;
}
</style>

