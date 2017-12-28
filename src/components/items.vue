<template>
  <div class="content center">
      <div>
          <div v-for="item in list" class="item" @click="handle(item.do)">{{item.text}}</div>
      </div>
  </div>
</template>

<script>
export default {
  props: ["list"],
  methods: {
    handle(callback) {
      if (callback) {
        callback();
      }
    }
  }
};
</script>

<style lang="scss">
.content {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
}
</style>


