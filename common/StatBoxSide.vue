<template>
  <container
    v-if="render"
    :class="['app', color, side, onlysidesteam ? 'onlysidesteam' : '']"
  >
    <div v-if="side === 'right' && !noavi" :class="['avatar', !!targetedPlayer.avatarURL ? 'has-avatar' : 'no-avatar']" v-bind:style="{ 'background-image': `url(${!!targetedPlayer.avatarURL ? targetedPlayer.avatarURL : placeholderBkg })` }"></div>
    <div style="flex: 1"><banner
      class="banner"
      :left="side === 'left'"
      :right="side === 'right'"
      primary="white"
      :accent="color"
      nomargin="true"
      nopadding="true"
      ><span class="banner-slot">SPECTATING</span></banner
    >
    <div class="box">
      <div class="info">
        <span class="name">{{ targetedPlayer.name }}</span>
        
      </div>
      <stat-line :player="targetedPlayer" />
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
    </div></div>
    <div v-if="side === 'left' && !noavi" :class="['avatar', !!targetedPlayer.avatarURL ? 'has-avatar' : 'no-avatar']" v-bind:style="{ 'background-image': `url(${!!targetedPlayer.avatarURL ? targetedPlayer.avatarURL : placeholderBkg })` }"></div>
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
  props: ["side", "onlysidesteam", "noavi"],
  components: {
    Banner,
    Container,
    StatLine,
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
    color() {
      return this.targetedPlayer.team === 0 ? "blue" : "orange";
    },
    render() {
      return this.onlysidesteam
        ? (side === "left" && color === "blue") ||
            (side === "right" && color === "orange")
        : !!this.targetedPlayer;
    },
    placeholderBkg() {
      return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=';
    }
  },
};
</script>

<style lang="scss">
@import "../common/colors.scss";

body {
  background: black;
}

.app {
  opacity: 0.75;
  display: flex;
}

.stats {
  /*
  display: flex;*/
  font-size: 36px;
  left: 0;
}

.stats div {
  height: 36px;
  line-height: 36px;
   /*
  display: flex;
  flex-grow: 1;
  flex-basis: 0;*/
}

.app.left .banner-slot {
  float: right;
  padding-right: calc(102px - 54px);
}

.app.right .banner-slot {
  text-align: left;
  padding-left: calc(102px - 54px);
}

.app.left .avatar {
  float: left;
}

.app.left .info {
  text-align: right;
}

.banner {
  color: $gray;
}

.info {
  padding-top: 27px;
  padding-bottom: 36px;
  font-size: 72px;
}

.avatar {
  /*
  width: 89px;
  height: 89px;*/
  width: 314px;
  height: 314px; /* hacky :( */
  background-size: cover;
  float: right;
  /*border: 4px solid white;*/
}

.app.blue.right .box {
  /*background: linear-gradient(to right, $blue, transparent);
  */
  background: $blue;
}

.app.orange.right .box {
  /*background: linear-gradient(to right, $orange, transparent);
  */
  background: $orange;
}

.app.blue.left .box {
  /*background: linear-gradient(to left, $blue, transparent);
  */
  background: $blue;
}

.app.orange.left .box {
  /*background: linear-gradient(to left, $orange, transparent);
  */
  background: $orange;
}

.app.left .box {
  margin-left: 54px;
}

.app.right .box {
  margin-right: 54px;
}

/*
.app.left .info {
  margin-left: calc(102px - 54px);
}*/

.app .box {
  padding-left: calc(102px - 54px);
  padding-right: calc(102px - 54px);
}



.box {
  padding-bottom: calc(102px - 54px - 36px + 8px);
}

table {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  width: 100%;
}
</style>
