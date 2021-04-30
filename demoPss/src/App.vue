<template>
  <div id="app">
    <button @click="$router.push('/route')">route</button>
    <button @click="$router.push('/routecopy')">routecopy</button>
    <button @click="destoryEvent">destoryEvent</button>
    <button @click="evenbusBtn">cliceventbus</button>
    <Poster />
    <Postera />
    <router-view />
    <span ref="sss">{{ namew }}</span>
    <button @click="namebtn">wukai</button>
  </div>
</template>
<script>
import Poster from "components/Poster";
import Postera from "components/Postera";
import { eventBus } from "utils/eventbus";

export default {
  name: "App",
  data: function () {
    return {
      namew: "wuwei",
    };
  },
  mounted() {
    this.$nextTick(() => {
      console.log(this.$refs.sss + "sss");
    });
  },
  components: {
    Poster,
    Postera,
  },
  methods: {
    evenbusBtn() {
      eventBus.$emit("s");
    },
    destoryEvent() {
      eventBus.$off("s");
    },
    namebtn() {
      this.namew = "wukai";
      this.$nextTick(() => {
        console.log(this.$refs.sss.innerText);
        Promise.resolve(43434);
        this.$nextTick(() => {
          console.log(this.$refs.sss + "sss");
        });
      });
    },
  },
};
</script>
<style lang="scss">
@import url(./assets/css/base.css);
</style>
