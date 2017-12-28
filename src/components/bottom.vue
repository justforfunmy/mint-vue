<template>
  <div class="bottom center">
      <div 
        class="fg bt-item"
        v-for="(item,index) in list"
        @click="goRouter(item.pathName)"
        :style="[activeIndex === index?activeStyle:normal]">{{item.text}}</div>
  </div>
</template>

<script>
export default {
  data(){
      return {
          list:[{
              text:'组件',
              pathName:'home'
          },{
              text:'ES6',
              pathName:'es6'
          },{
              text:'其他',
              pathName:'others'
          }],
          activeStyle:{
              color:'lightsalmon'
          },
          normal:{}
      }
  },
  props:['activeIndex'],
  methods:{
      goRouter(name){
          this.$router.push({name})
      }
  }
}
</script>

<style lang="scss" scoped>
.bottom{
    width: 100%;
    height: 50px;
    background: #fff;
    border-top:1px solid lightsalmon;
    position: fixed;
    bottom:0;
    left:0;
    .bt-item{
        text-align: center;
        border-right: 1px solid lightgray;
        color:grey
    }
    &>.bt-item:last-child{
        border:none;
    }
}
</style>


