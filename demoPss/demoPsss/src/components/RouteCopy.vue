<template>
  <div class="poster-contains">
   routecopy
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
    eventBus.$on("s",this.routecopy);
  },
  beforeDestroy() {
    eventBus.$off("s",this.routecopy);
  },
  methods: {
      routecopy(){
          console.log("copy-route");
      }
  },
};
</script>
<style lang="scss">

</style>
