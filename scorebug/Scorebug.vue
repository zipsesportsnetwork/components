<template>
  <container class="app" v-if="game && !game.hasWinner">
    <banner
      class="banner outer left"
      :nomargin="true"
      :left="true"
      :primary="!flipped ? 'blue' : 'gold'"
      :accent="flipped ? 'blue' : 'gold'"
      ><span class="name">{{ teams[0].name }}</span></banner
    >
    <banner
      class="banner inner left"
      :nomargin="true"
      :left="true"
      :primary="tie ? (!flipped ? 'gold' : 'blue') : winnerColor"
      :accent="flipped ? 'gold' : 'blue'"
      ><span class="score">{{ teams[0].score }}</span></banner
    >
    <div :class="['time', winnerColor]">{{ time }}</div>
    <banner
      class="banner inner right"
      :nomargin="true"
      :right="true"
      :primary="tie ? (!flipped ? 'blue' : 'gold') : winnerColor"
      :accent="flipped ? 'blue' : 'gold'"
      ><span class="score">{{ teams[1].score }}</span></banner
    >
    <banner
      class="banner outer right"
      :nomargin="true"
      :right="true"
      :primary="!flipped ? 'gold' : 'blue'"
      :accent="flipped ? 'gold' : 'blue'"
      ><span class="name">{{ teams[1].name }}</span></banner
    >
  </container>
</template>

<script>
import { mapState } from "vuex";

import Banner from "../common/Banner";
import Container from "../common/Container";

function invertColor(input) {
  if (input === "blue") {
    return "gold";
  } else {
    return "blue";
  }
}

export default {
  props: ["flipped"],
  components: {
    Banner,
    Container,
  },
  computed: {
    ...mapState({
      game: (state) => state.gameData.game,
    }),
    teams(state) {
      return [state.game.teams[0], state.game.teams[1]];
    },
    time(state) {
      const raw = state.game.time;
      const minutes = Math.floor(raw / 60);
      const seconds = String(Math.floor(raw % 60)).padStart(2, "0");
      return `${state.game.isOT ? "+" : ""}${minutes}:${seconds}`;
    },
    tie(state) {
      return state.game.teams[0].score === state.game.teams[1].score;
    },
    winnerColor(state) {
      if (state.game.teams[0].score > state.game.teams[1].score) {
        return !this.flipped ? "blue" : "gold";
      } else if (state.game.teams[0].score < state.game.teams[1].score) {
        return !this.flipped ? "gold" : "blue";
      } else {
        return "gray";
      }
    },
  },
};
</script>

<style lang="scss">
@import "../common/colors.scss";

.app {
  display: flex;
  justify-content: center;
  align-items: center;
}

.time {
  width: 6ch;
  text-align: center;
  font-size: 64px;
  font-family: Consolas, monospace;
  font-weight: 800;
  line-height: 102px;
  border: 6px solid white;
}

.time.gray {
  background: #222;
}

.time.blue {
  background: $blue;
}

.time.gold {
  background: $gold;
}

.banner.outer {
  z-index: -1;
  /*width: 8ch;*/
}

.banner.left {
  text-align: left;
}

.banner.right {
  text-align: right;
}

.banner.outer.left {
  margin-right: -36px;
}

.banner.outer.right {
  margin-left: -36px;
}

.score {
  width: 2.5ch;
  display: block;
}

.name {
  width: 16ch;
  display: block;
  font-size: 36px;
  padding-top: 8px;
}
</style>
