<template>
<div>
    <m-header :has-back="false">
      <div slot="title" class="title">Components</div>
    </m-header>
    <div class="top-blank">
        <m-list :list='list'></m-list>
    </div>
    <m-bottom :activeIndex='0'></m-bottom>
</div>
  
</template>

<script>
import mHeader from "../components/header.vue";
import mList from '../components/list'
import mBottom from '../components/bottom'
export default {
  components: {
    mHeader,
    mList,
    mBottom
  },
  data(){
    return{
      list:[{
              text:'toast',
              pathName:'toast'
          },{
              text:'indicator',
              pathName:'indicator'
          },{
              text:'messageBox',
              pathName:'messageBox'
          },{
              text:'actionSheet',
              pathName:'actionSheet'
          },{
              text:'popup',
              pathName:'popup'
          },{
              text:'swipe',
              pathName:'swipe'
          },{
              text:'lazyLoad',
              pathName:'lazyLoad'
          },{
              text:'range',
              pathName:'range'
          },{
              text:'progress',
              pathName:'progress'
          },{
              text:'picker',
              pathName:'picker'
          },{
              text:'datetime-picker',
              pathName:'datetimePicker'
          },{
              text:'index-list',
              pathName:'indexList'
          },{
              text:'palette-button',
              pathName:'paletteButton'
          },{
              text:'switch',
              pathName:'switch'
          },{
              text:'checklist',
              pathName:'checklist'
          },{
              text:'radio',
              pathName:'radio'
          },{
              text:'field',
              pathName:'field'
          },{
              text:'badge',
              pathName:'badge'
          },{
              text:'progress',
              pathName:'progress'
          },{
              text:'picker',
              pathName:'picker'
          }]
    }
  }
};
</script>

<style lang="scss">
.title {
  color: #fff;
  text-align: center;
  line-height: 44px;
  font-size: 20px;
}
</style>

