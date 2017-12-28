<template>
  <div>
      <m-header :has-back = 'true'>
          <div slot="title" class="title">Swipe</div>
      </m-header>
      <div class="top-blank">
          <p class="text">基础用法</p>
          <mt-swipe :auto="2000" class="swiper" @change="handleChange" >
              <mt-swipe-item 
                  class="s-item"
                  v-for="item in swipes"
                  :key="item.text"
                  :style='{background:item.color}'
                  @click="handleClick(item)">
                      <router-link :to='{name:item.to}' class="link">{{item.text}}</router-link>
                  </mt-swipe-item>
          </mt-swipe>
      </div>
  </div>
</template>

<script>
import mHeader from '../components/header'
export default {
  components:{
      mHeader
  },
  methods:{
      handleChange(index){
          //console.log(index)
      },
      handleClick(index){
          console.log(index)
      }
  },
  data(){
      return {
          swipes:[{
              text:'toast',
              color:'red',
              to:'toast'
          },{
              text:'indicator',
              color:'green',
              to:'indicator'
          },{
              text:'messageBox',
              color:'blue',
              to:'messageBox'
          }]
      }
  }
}
</script>

<style lang="scss">
.swiper{
    width: 100%;
    height: 180px;
    .s-item{
        color:#fff;
        font-size: 250%;
        line-height: 180px;
        text-align: center;
        .link{
            text-decoration: none;
            color:#fff;
            width: 100%;
            height: 100%;
            display: block;
        }
    }
}
.text{
    color:gray;
    text-align: center;
    padding:15px;
}
.swipe-item-1{
    background-color: aquamarine
}
.swipe-item-2{
    background-color: rgb(183, 196, 75)
}
.swipe-item-3{
    background-color: rgb(235, 139, 49)
}
</style>


