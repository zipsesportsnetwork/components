<template>
  <container :class="['app', side]" v-if="game && players">
    <banner
      class="banner"
      :left="side === 'right'"
      :right="side === 'left'"
      primary="blue"
      accent="gold"
    >
      <span>{{ game.teams[team].name }}</span>
    </banner>
    <div class="displays">
      <player-display
        v-for="player in teamPlayers"
        :side="side"
        :key="player.id"
        :player="player"
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
    side() {
      return this.team === 0 ? "left" : "right";
    },
    left() {
      return this.side === "left";
    },
    right() {
      return this.side === "right";
    },
  },
  props: ["team", "players", "game"],
};
</script>

<style lang="scss">
@import "colors.scss";

.app .displays {
  background: $gold;
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
