<template>
  <div>
      <m-header :has-back='true'>
          <div slot="title" class="title">Promise</div>
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
          let p1 = new Promise((resolve,reject)=>{
              resolve(42)
          });
          let p2 = new Promise((resolve,reject)=>{
              reject(43)
          });
          let p3 = new Promise((resolve,reject)=>{
              reject(44)
          });

          let p4 = Promise.all([p1,p2,p3]);
          p4.then(val=>{
              console.log(val)
          })
          .catch((value)=>{
              console.log(Array.isArray(value));
              console.log(value)
          })

          let p5 = Promise.race([p1,p2,p3]);
          p5.then(val=>{
              console.log(val)
          }).catch(val=>{
              console.log(val)
          })
      }
  },
  mounted(){
      this.init()
  }
}
</script>

<style lang="scss" scoped>

</style>
