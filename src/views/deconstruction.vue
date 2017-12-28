<template>
  <div>
      <m-header :has-back='true'>
          <div slot="title" class="title">解构</div>
      </m-header>
  </div>
</template>

<script>
import mHeader from '../components/header'
export default {
  components:{
      mHeader
  },
  methods:{
      init(){
          let node = {
              type:'id',
              name:'fas'
          };
          let {type,name} = node;
          let newNode = {
              type:'dfs',
              name:'ffd'
          };
          ({type,name}=newNode)
          console.log(type,name);


          let colors = ['red','green','blue'];
          let [...cloneColors] = colors;
          console.log(cloneColors)
      }
  },
  mounted(){
      this.init()
  }
}
</script>

<style lang="scss" scoped>

</style>


