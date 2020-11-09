<template>
  <container v-if="targetedPlayer" class="app">
    <banner
      class="banner"
      :left="true"
      :right="true"
      primary="gold"
      accent="blue"
      nomargin="true"
      >SPECTATING</banner
    >
    <div class="box">
      <div class="name">{{ targetedPlayer.name }}</div>
      <stat-line :player="targetedPlayer"/>
      <!--
      <div class="stats">
        <div>
          <img :src="ScoreIcon" /><span class="stat">{{
            targetedPlayer.score
          }}</span>
        </div>
        <div>
          <img :src="GoalIcon" /><span class="stat">{{
            targetedPlayer.goals
          }}</span>
        </div>
        <div>
          <img :src="AssistIcon" /><span class="stat">{{
            targetedPlayer.assists
          }}</span>
        </div>
        <div>
          <img :src="SaveIcon" /><span class="stat">{{
            targetedPlayer.saves
          }}</span>
        </div>
        <div>
          <img :src="ShotIcon" /><span class="stat">{{
            targetedPlayer.shots
          }}</span>
        </div>
      </div>
      -->
    </div>
  </container>
</template>

<script>
import { mapState } from "vuex";

import Banner from "../common/Banner";
import Container from "../common/Container";
import StatLine from "../common/StatLine";

import ShotIcon from "../static/shot.svg";
import ScoreIcon from "../static/scorev2.svg";
import SaveIcon from "../static/save.svg";
import GoalIcon from "../static/goal.svg";
import AssistIcon from "../static/assist.svg";

export default {
  components: {
    Banner,
    Container,
    StatLine
  },
  data: () => ({
    ShotIcon,
    ScoreIcon,
    SaveIcon,
    GoalIcon,
    AssistIcon,
  }),
  computed: {
    ...mapState({
      players: (state) => state.gameData.players,
      game: (state) => state.gameData.game,
    }),
    targetedPlayer(state) {
      if (!state.game || !state.game.hasTarget || state.game.hasWinner)
        return undefined;
      return state.players[state.game.target];
    },
  },
};
</script>

<style lang="scss">
.app {
  opacity: 0.75;
}

.stats {
  display: flex;
  font-size: 36px;
}

.stats div {
  height: 36px;
  line-height: 36px;
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
}

.banner {
  text-align: center;
}

.name {
  text-align: center;
  padding-top: 27px;
  padding-bottom: 36px;
  font-size: 72px;
}

.stats img {
  width: 72px;
}

.box {
  width: calc(100% - 108px);
  margin-left: 54px;
  background: linear-gradient(#041e42, transparent);
}

table {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  width: 100%;
}
</style>
