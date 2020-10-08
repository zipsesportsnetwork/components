<template>
  <div class="app">
    <h2>Game time</h2>
    <p>{{ prettyTime }}</p>
    <h2>Raw game state</h2>
    <pre><code>{{prettyGameData}}</code></pre>
    <h2>Raw player state</h2>
    <pre><code>{{prettyPlayersData}}</code></pre>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      events: [],
    };
  },
  computed: {
    ...mapState({
      game: (state) => state.gameData.game,
      players: (state) => state.gameData.players,
    }),
    prettyTime() {
      return new Date(this.game && this.game.time * 1000)
        .toISOString()
        .substr(14, 5)
        .replace(/^0/, "");
    },
    prettyGameData() {
      return JSON.stringify(this.game, null, "\t");
    },
    prettyPlayersData() {
      return JSON.stringify(this.players, null, "\t");
    },
  },
};
</script>

<style lang="scss">
.app {
  font-family: sans-serif;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  ul,
  p {
    margin: 0;
  }
}
</style>
