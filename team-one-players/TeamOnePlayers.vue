<template>
  <team-boost
    :team="0"
    :players="players"
    :game="game"
    class="app"
    v-if="game && !game.hasWinner"
  ></team-boost>
</template>

<script>
import { mapState } from "vuex";

import TeamBoost from "../common/TeamBoost";

export default {
  components: {
    TeamBoost,
  },
  computed: {
    ...mapState({
      players: (state) => state.gameData.players,
      game: (state) => state.gameData.game,
    }),
  },
};
</script>

<style lang="scss">
.app {
  -webkit-mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0.75)
  );
}
</style>
