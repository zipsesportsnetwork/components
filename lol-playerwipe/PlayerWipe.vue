<template>
  <container v-if="teams.length > 0" :class="['wipers', side]">
    <div class="top">
      <div :class="['wipebox', teams[teamNum].team[0].level > 5 ? 'level-6' : '']">6</div>
      <div :class="['wipebox', teams[teamNum].team[1].level > 5 ? 'level-6' : '']">6</div>
      <div :class="['wipebox', teams[teamNum].team[2].level > 5 ? 'level-6' : '']">6</div>
      <div :class="['wipebox', teams[teamNum].team[3].level > 5 ? 'level-6' : '']">6</div>
      <div :class="['wipebox', teams[teamNum].team[4].level > 5 ? 'level-6' : '']">6</div>
    </div>
  </container>
</template>

<script>
import { mapState } from "vuex";

import Container from "../common/Container";

export default {
  props: {
    side: {
      type: String,
    },
    teamNum: {
      type: Number,
    }
  },
  components: {
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
        team: state.game.blueTeam
      }, {
        team: state.game.redTeam
      }];
      }
    },
  },
};
</script>

<style lang="scss">
@import "../common/colors.scss";

@keyframes slidein {
    from {
        background: transparent;
        color: transparent;
    }
    50% {
        background: transparent;
    color: white;
    }
    to {
        background: transparent;
        color: transparent;
    }
}

.wipebox {
    width: 125px;
    height: 105px;
    font-family: prohibition, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 64px;
text-align: center;
line-height: 105px;
}

.wipebox:not(.level-6) {
    background: transparent;
    color: transparent;
}

.wipebox.level-6 {
    animation-duration: 2s;
    animation-name: slidein;
    color: transparent;
}

.wipers {
    position: absolute;
    top: 130px;
}

.wipers.left {
    left: 48px;
} 

.wipers.right {
    right: 48px;
}
</style>
