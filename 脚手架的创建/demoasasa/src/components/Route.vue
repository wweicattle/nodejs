<template>
  <div class="poster-contains">
    router{{num}}
    <button @click="btn">destory</button>
    <button @click="ssss">rererer</button>
  </div>
</template>
<script>
import { eventBus } from "utils/eventbus";

export default {
  name: "route",
  data: function () {
    return {
      num: 0,
    };
  },
  mounted() {
    console.log("reoute"+"moounted");
    eventBus.$on("s", this.ss);
  },
  beforeDestroy() {
    eventBus.$off("s");
  },
  methods: {
    ssss() {
      console.log(243435454545);
    },
    ss() {
      this.num = ++this.num;
    },
    btn() {
      this.$destroy();
    },
  },
};
</script>
<style lang="scss">
</style>
