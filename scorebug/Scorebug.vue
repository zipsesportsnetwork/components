<template>
  <container class="app" v-if="game && !game.hasWinner">
    <div class="top">
      <banner
        :class="['banner', 'outer', 'left', flipped ? 'orange' : 'blue']"
        :nomargin="true"
        :left="true"
        primary="white"
        :accent="flipped ? 'orange' : 'blue'"
        :nosidepadding="true"
        ><span class="name">{{ teams[0].name }}</span></banner
      >
      <banner
        :class="['banner', 'inner', 'left', flipped ? 'orange' : 'blue']"
        :nomargin="true"
        :left="true"
        primary="white"
        :accent="flipped ? 'orange' : 'blue'"
        ><span class="score">{{ teams[0].score }}</span></banner
      >
      <div :class="['time', winnerColor]">{{ time }}</div>
      <banner
        :class="['banner', 'inner', 'right', flipped ? 'blue' : 'orange']"
        :nomargin="true"
        :right="true"
        primary="white"
        :accent="flipped ? 'blue' : 'orange'"
        ><span class="score">{{ teams[1].score }}</span></banner
      >
      <banner
        :class="['banner', 'outer', 'right', flipped ? 'blue' : 'orange']"
        :nomargin="true"
        :right="true"
        primary="white"
        :accent="flipped ? 'blue' : 'orange'"
        :nosidepadding="true"
        ><span class="name">{{ teams[1].name }}</span></banner
      >
    </div>
    <div class="bottom">
      <banner
        class="banner"
        :nomargin="true"
        :left="true"
        :right="true"
        primary="white"
        accent="gray"
      >
        <div class="slot">
          <div v-for="n in seriesWinReq" :key="n" class="series left">
            <div class="cutout left"></div>
          </div>
          <div :class="['status', status === '' ? 'none' : status]">
            {{ status }}
          </div>
          <div v-for="n in seriesWinReq" :key="n" class="series right">
            <div class="cutout right"></div>
          </div>
        </div>
      </banner>
    </div>
  </container>
</template>

<script>
import { mapState } from "vuex";

import Banner from "../common/Banner";
import Container from "../common/Container";

function invertColor(input) {
  if (input === "blue") {
    return "orange";
  } else {
    return "blue";
  }
}

export default {
  props: {
    bestof: {
      type: Number,
      default: 5,
    },
    flipped: {
      type: Boolean,
    },
  },
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
        return !this.flipped ? "blue" : "orange";
      } else if (state.game.teams[0].score < state.game.teams[1].score) {
        return !this.flipped ? "orange" : "blue";
      } else {
        return "gray";
      }
    },
    status(state) {
      if (state.game.isReplay) {
        return "REPLAY";
      } else if (state.game.isOT) {
        return "OVERTIME";
      } else {
        return "";
      }
    },
    seriesWinReq() {
      return (this.bestof + 1) / 2;
    },
  },
};
</script>

<style lang="scss">
@import "../common/colors.scss";

body {
  background: black;
}

.app,
.top {
  display: flex;
  justify-content: center;
  align-items: center;
}

.app {
  flex-direction: column;
}

.top {
  z-index: 1;
  color: $gray;

  .time {
    width: 6ch;
    text-align: center;
    font-size: 64px;
    font-family: Consolas, monospace;
    font-weight: 800;
    line-height: 102px;
    border: 6px solid white;
    color: white;
  }

  .time.gray {
    background: $gray;
  }

  .time.blue {
    background: $blue;
  }

  .time.orange {
    background: $orange;
  }

  .banner.outer {
    z-index: -1;
    text-align: center !important;
  }

  /*
  .banner.left {
    text-align: left;
  }

  .banner.right {
    text-align: right;
  }
  */

  .banner.outer.left {
    margin-right: -36px;

    .name {
      padding-right: 24px;
    }
  }

  .banner.outer.right {
    margin-left: -36px;

    .name {
      padding-left: 24px;
    }
  }

  .score {
    width: 2.5ch;
    display: block;
    text-align: center;
  }

  .name {
    width: 16ch;
    display: block;
    font-size: 36px;
    padding-top: 8px;
  }
}

.bottom {
  color: $gray;

  .banner {
    margin-top: -48px;
  }

  .slot {
    background: transparent !important;
    height: 100%;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .series {
    height: 100%;
  }

  .status {
    width: 10ch;
    font-size: 36px;
    text-align: center;
    background: white;
    padding-top: 46px;
    border-bottom: 11px solid white;
  }

  .status.none {
    border-bottom: 56px solid white;
  }

  .cutout {
    width: 4ch;
    height: 100%;
    background-color: white;
  }

  .cutout.right {
    -webkit-mask-image: linear-gradient(
        288deg,
        black 12.5%,
        transparent 12.5%,
        transparent 75%,
        black 75%
      ),
      linear-gradient(
        to bottom,
        black 55%,
        transparent 55%,
        transparent 87.5%,
        black 87.5%
      );
  }

  .cutout.left {
    -webkit-mask-image: linear-gradient(
        72deg,
        black 12.5%,
        transparent 12.5%,
        transparent 75%,
        black 75%
      ),
      linear-gradient(
        to bottom,
        black 55%,
        transparent 55%,
        transparent 87.5%,
        black 87.5%
      );
  }
}
</style>
