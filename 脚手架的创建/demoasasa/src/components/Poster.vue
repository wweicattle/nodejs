<template>
  <div class="poster-contains">
     posyter
  </div>
</template>
<script>
import { eventBus } from "utils/eventbus";

export default {
  name:"Poster",
  data: function () {
    return {
   
    };
  },
    mounted() {
    eventBus.$on("s", () => {
      console.log("poster");
    });
  },
};
</script>
<style lang="scss">

</style>
