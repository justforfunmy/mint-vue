<template>
  <div>
      <m-header :has-back="true">
          <div slot="title" class="title">Lazy Load</div>
      </m-header>
      <div class="top-blank">
          <ul>
              <li v-for="item in imgs">
                  <img v-lazy='item.src' alt="" class="img">
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
import mHeader from '../components/header'
export default {
  components:{
      mHeader
  },
  data(){
      return {
          imgs:[{
              src:'../../static/img/1.jpg',
          },{
              src:'../../static/img/2.jpg',
          },{
              src:'../../static/img/3.jpg',
          },{
              src:'../../static/img/4.jpg',
          }]
      }
  }
}
</script>

<style lang="scss">
.img{
    max-width: 100%;
    margin: 10px 0;
}

image[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
</style>


