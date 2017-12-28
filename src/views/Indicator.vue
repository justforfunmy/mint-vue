<template>
<div>
    <m-header :has-back='true'> 
        <div slot="title" class="title">Indicator</div>
    </m-header>
    <m-items :list='list'></m-items>
</div>
  
</template>

<script>
import mHeader from "../components/header";
import mItems from '../components/items'
import {Indicator} from 'mint-ui'
export default {
  components: {
    mHeader,
    mItems
  },
  data() {
    return {
      list: [
        {
          text: "点击弹出Indicator",
          do:this.indicator_1
        },
        {
          text: "可配置spinner",
          do:this.indicator_2
        },
        {
          text: "点击弹出带有文字的Indicator",
          do:this.indicator_3
        }
      ]
    };
  },
  methods: {
    indicator_1(){
        Indicator.open();
        setTimeout(()=>{
            Indicator.close()
        },2000)
    },
    indicator_2(){
        Indicator.open({
            spinnerType:'fading-circle'
        });
        setTimeout(()=>{
            Indicator.close()
        },2000)
    },
    indicator_3(){
        Indicator.open({
            text:'loading...',
            spinnerType:'fading-circle'
        });
        setTimeout(()=>{
            Indicator.close()
        },2000)
    }
  }
};
</script>


<style lang="scss">

</style>

