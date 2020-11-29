<template>
  <container :class="['app', side]" v-if="game && players">
    <banner
      class="banner"
      :left="side === 'right'"
      :right="side === 'left'"
      primary="white"
      :accent="color"
    >
      <span class="name">{{ game.teams[team].name }}</span>
    </banner>
    <div class="displays">
      <player-display
        v-for="player in teamPlayers"
        :side="side"
        :key="player.id"
        :player="player"
        :targeted="player.id === targetedPlayerId"
      />
    </div>
  </container>
</template>

<script>
import { mapState } from "vuex";

import Banner from "./Banner";
import Container from "./Container";
import PlayerDisplay from "./PlayerDisplay";

export default {
  components: {
    Banner,
    Container,
    PlayerDisplay,
  },
  computed: {
    teamPlayers() {
      if (!this.players) return [];
      return Object.values(this.players).filter((p) => p.team === this.team);
    },
    color() {
      return this.team === 0 ? "blue" : "orange";
    },
    side() {
      return this.team === 0 ? "left" : "right";
    },
    left() {
      return this.side === "left";
    },
    right() {
      return this.side === "right";
    },
    targetedPlayerId(state) {
      if (!state.game || !state.game.hasTarget || state.game.hasWinner)
        return undefined;
      return state.players[state.game.target].id;
    },
  },
  props: ["team", "players", "game"],
};
</script>

<style lang="scss">
@import "colors.scss";

.app .name {
  color: $gray;
}

.app .displays {
  background: white;
  box-shadow: inset 0 18px 18px -18px rgba(0, 0, 0, 0.5),
    0 18px 18px -18px black;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
}

.app.left {
  .banner {
    text-align: left;
  }

  .displays {
    margin-right: 238px;
  }
}

.app.right {
  .banner {
    text-align: right;
  }

  .displays {
    margin-left: 238px;
  }
}
</style>
