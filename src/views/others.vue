<template>
  <div>
      <m-header :has-back='false'>
          <div slot="title" class="title">Others</div>
      </m-header>
      <m-bottom :activeIndex='2'></m-bottom>
  </div>
</template>

<script>
import mHeader from '../components/header'
import mBottom from '../components/bottom'
export default {
  components:{
      mBottom,
      mHeader
  }
}
</script>

<style lang="scss" scoped>

</style>


