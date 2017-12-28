<template>
  <div>
      <m-header :has-back='true'>
          <div slot="title" class="title">Picker</div>
      </m-header>
      <div class="top-blank">
          <mt-picker :slots="slots" @change="onValuesChange" :defaultIndex='0'></mt-picker>
      </div>
  </div>
</template>

<script>
import mHeader from "../components/header";
export default {
  components: {
    mHeader
  },
  methods: {
    onValuesChange(picker, values) {
      let pro = values[0];
      let index = this.pro.indexOf(pro);
      picker.setSlotValues(1,this.allCity[index])
    }
  },
  computed: {
    slots() {
      return [
        {
          flex: 1,
          values: this.pro,
          className: "slot1",
          textAlign: "right"
        },
        {
          divider: true,
          content: "-",
          className: "slot2"
        },
        {
          flex: 1,
          values: this.allCity[0],
          className: "slot3",
          textAlign: "left"
        }
      ];
    }
  },
  data() {
    return {
      pro: ["浙江", "江苏"],
      allCity: [["杭州", "宁波"],["南京", "苏州"]]
    };
  }
};
</script>

<style lang="scss" scoped>

</style>


