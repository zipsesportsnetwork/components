<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: [],
};
</script>

<style lang="scss">
@import url("https://use.typekit.net/cau5qim.css");

body {
  margin: 0;
}

.container {
  color: white;
  font-family: prohibition, sans-serif;
  font-weight: 400;
  font-style: normal;
}
</style>
