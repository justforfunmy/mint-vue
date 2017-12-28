<template>
  <div>
      <m-header :has-back='true'>
          <div slot="title" class="title">Symbol</div>
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
          let firstName = Symbol('first name');
          let person = {};
          person[firstName] = 'clark';
          console.log('first name' in person);
          console.log(person[firstName]);
          console.log(firstName)
      }
  },
  mounted(){
      this.init()
  }
}
</script>

