<template>
  <container v-if="teams.length > 0" class="app">
    <div class="top">
      <banner
        :class="['banner', 'outer', 'left', flipped ? 'lol-red' : 'lol-blue']"
        :nomargin="true"
        :left="true"
        primary="white"
        :accent="flipped ? 'lol-red' : 'lol-blue'"
        :nosidepadding="true"
        ><span class="name">{{ teams[0].name }}</span></banner
      >
      <banner
        :class="['banner', 'inner-inner', 'inner', 'left', flipped ? 'lol-red' : 'lol-blue']"
        :nomargin="true"
        :left="true"
        primary="white"
        :accent="flipped ? 'lol-red' : 'lol-blue'"
        ><img :src="towerIcon"><span class="towers">{{ teams[0].towers }}</span><img class="chleft" :src="goldIcon"><span class="gold">{{ `${(teams[0].gold || 0).toFixed(1)}k` }}</span></banner
      >
      <banner
        :class="['banner', 'score-inner', 'inner', 'left', flipped ? 'lol-red' : 'lol-blue']"
        :nomargin="true"
        :left="true"
        primary="white"
        :accent="flipped ? 'lol-red' : 'lol-blue'"
        :notransparent="true"
        ><span class="score">{{ teams[0].score }}</span></banner
      >
       <banner
        :class="['banner', 'score-inner-most', 'inner']"
        :nomargin="true"
        primary="white"
        :notransparent="true"
        style="background: white; text-align: center"
        ><img width="59px" height="59px" :src="escLogo"><div class="rectangle"></div></banner
      >
      <banner
        :class="['banner', 'score-inner', 'inner', 'right', flipped ? 'lol-blue' : 'lol-red']"
        :nomargin="true"
        :right="true"
        primary="white"
        :accent="flipped ? 'lol-blue' : 'lol-red'"
        :notransparent="true"
        ><span class="score">{{ teams[1].score }}</span></banner
      >
      <banner
        :class="['banner', 'inner-inner', 'inner', 'right', flipped ? 'lol-blue' : 'lol-red']"
        :nomargin="true"
        :right="true"
        primary="white"
        :accent="flipped ? 'lol-blue' : 'lol-red'"
        ><img style="padding-left: 1ch" :src="goldIcon"><span class="towers">{{ `${(teams[1].gold || 0).toFixed(1)}k` }}</span><img class="chleft" :src="towerIcon"><span class="gold">{{ teams[1].towers }}</span></banner
      >
      <banner
        :class="['banner', 'outer', 'right', flipped ? 'lol-blue' : 'lol-red']"
        :nomargin="true"
        :right="true"
        primary="white"
        :accent="flipped ? 'lol-blue' : 'lol-red'"
        :nosidepadding="true"
        ><span class="name">{{ teams[1].name }}</span></banner
      >
    </div>
    <!--
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
    -->
  </container>
</template>

<script>
import { mapState } from "vuex";

import Banner from "../common/Banner";
import Container from "../common/Container";

import goldIcon from './gold.png';
import killIcon from './kill.png';
import towerIcon from './tower.png';
import escLogo from './esc2.png';

function invertColor(input) {
  if (input === "lol-blue") {
    return "lol-red";
  } else {
    return "lol-blue";
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
  data: () => ({
    goldIcon,
    killIcon,
    towerIcon,
    escLogo
  }),
  components: {
    Banner,
    Container,
  },
  computed: {
    ...mapState({
      game: (state) => state.gameData.game,
    }),
    teams(state) {
      if (state.game === null || typeof state.game.time === 'undefined') {
        return [];
      } else {
      return [{
        gold: state.game.blueGold,
        towers: state.game.blueTowers,
        score: state.game.blueKills,
        name: ''
      }, {
        gold: state.game.redGold,
        towers: state.game.redTowers,
        score: state.game.redKills,
        name: ''
      }];
      }
    },
    time(state) {
      const raw = state.game.time;
      const minutes = String(Math.floor(raw / 60)).padStart(2, "0");
      const seconds = String(Math.floor(raw % 60)).padStart(2, "0");
      return `${minutes}:${seconds}`;
    },
    winnerColor(state) {
      /*
      if (state.game.teams[0].score > state.game.teams[1].score) {
        return !this.flipped ? "lol-blue" : "lol-red";
      } else if (state.game.teams[0].score < state.game.teams[1].score) {
        return !this.flipped ? "lol-red" : "lol-blue";
      } else {
        return "gray";
      }
      */
     return "gray";
    },
    status(state) {
      /*
      if (state.game.isReplay) {
        return "REPLAY";
      } else if (state.game.isOT) {
        return "OVERTIME";
      } else {
        return "";
      }*/
      return 'REPLAY'
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

.chleft {
  padding-left: 2ch;
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

.banner {
  border-top: 2px solid $gray;
}

.time {
  border: 18px solid white !important;
}

.score-inner.left .slot {
  border-bottom: 8px solid white;
}

.rectangle {
height: 20px;
position: absolute;
top: 104px;
width: 261px;
transform: translateX(-50%);
left: 50%;
background: linear-gradient(to bottom, white, black);
}

/*
.top {
  border-top: 4px solid $gray;
}*/

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

  .name {
    font-size: 48px !important;
    padding-top: 0 !important;
  }

  .time.gray {
    background: $gray;
  }

  .time.lol-blue {
    background: $lol-blue;
  }

  .time.lol-red {
    background: $lol-red;
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

  .score-inner .slot {
    width: 2ch;
  }

  .score-inner .slot .score {
    bottom: 0;
  }

  .gold, .towers, .score {
    display: inline !important;
        font-size: 48px !important;
        position: relative;
bottom: 8px;
  }

  .banner.inner-inner {
    width: 22ch;
  }

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

  .gold {
    width: 5ch;
    display: block;
    text-align: center;
  }

  .name {
    width: 12ch;
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
