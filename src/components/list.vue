<template>
  <ul class="u-list">
      <li v-for="item in list" class="flex item a-center" @click="goRouter(item.pathName)">
          <div class="fg">{{item.text}}</div>
          <img src="/static/img/right.png" alt="" width="20px">
      </li>
  </ul>
</template>

<script>
export default {
  data(){
      return {          
      }
  },
  props:['list'],
  methods:{
      goRouter(name){
          this.$router.push({name})
      }
  }
}
</script>

<style lang="scss">
.item{
    padding:10px 15px;
    font-size: 18px;
    color:rgba(21, 101, 221, 0.5);
    border-bottom: 1px solid lightgrey;
}
.u-list{
    padding-bottom: 55px;
    &>.item:last-child{
        border:none
    }
}
</style>


