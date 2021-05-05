<template>
  <div class="poster-contains">
    postyrtsaaa
  </div>
</template>
<script>
import { eventBus } from "utils/eventbus";

export default {
  name: "Poster",
  data: function () {
    return {};
  },
  mounted() {
    eventBus.$on("s", () => {
      console.log("postera");
    });
  },
};
</script>
<style lang="scss">
</style>
