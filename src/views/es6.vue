<template>
  <div>
      <m-header :has-back='false'>
          <div slot="title" class="title">ES6</div>
      </m-header>
      <div class="top-blank">
          <m-list :list='list'></m-list>
      </div>
      <m-bottom :activeIndex='1'></m-bottom>
  </div>
</template>

<script>
import mHeader from '../components/header'
import mBottom from '../components/bottom'
import mList from '../components/list'
export default {
  components:{
    mHeader,
    mBottom,
    mList
  },
  data(){
      return {
          list:[{
              text:'解构',
              pathName:'deconstruction'
          },{
              text:'Symbol',
              pathName:'symbol'
          },{
              text:'Class',
              pathName:'class'
          },{
              text:'Promise',
              pathName:'promise'
          }]
      }
  }
}
</script>

<style lang="scss" scoped>

</style>


