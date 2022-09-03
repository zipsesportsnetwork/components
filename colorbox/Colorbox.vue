<template>
  <div :class="[game && !game.hasWinner ? 'active' : '']"></div>
</template>

<style lang="scss">
@import "../common/colors.scss";

div.active {
  background: #cecece;
  width: 100%;
  height: 100%;
  position: absolute;
}

body {
  margin: 0;
}
</style>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      game: (state) => state.gameData.game,
    }),
  },
};
</script>
