<template>
  <div :class="['player-display', side, targeted ? 'targeted' : undefined]">
    <!--<div class="flex">-->
    <span class="player">{{ player.name }}</span>
    <div class="img" v-if="targeted" :src="ScoreIcon" />
    <!--<stat-line class="stats-line" :player="player"/>-->
    <!--</div>-->
    <progress max="100" :value="player.boost"></progress>
  </div>
</template>

<script>
import ScoreIcon from "../static/scorev2.svg";

export default {
  props: ["player", "side", "targeted"],
  data: () => ({
    ScoreIcon,
  }),
};
</script>

<style lang="scss">
@import "colors.scss";

.player-display {
  .flex {
    display: inline-flex;
    width: 100%;
  }

  .player {
    width: 12ch;
  }

  .stats-line {
    height: 32px;
    flex-grow: 1;
    font-size: 24px;
  }

  .player {
    text-align: right;
    font-size: 32px;
    line-height: 64px;
  }

  span {
    color: $blue;
  }

  progress {
    width: 100%;
    box-sizing: border-box;
    -webkit-appearance: none;
    height: 32px;
  }

  progress[value]::-webkit-progress-bar {
    background-color: $gold-accent;
    box-shadow: inset 0px 0px 3px 0px black;
  }

  progress[value]::-webkit-progress-value {
    background-color: $blue;
    transition: width 0.2s ease;
  }

  .img {
    width: 28px;
    height: 28px;
    padding-top: 36px;
    background-color: $blue;
    -webkit-mask: url(../static/score.svg) no-repeat center;
  }
}

.player-display.left {
  .img {
    float: right;
  }

  span {
    text-align: left;
  }
}

.player-display.right {
  .img {
    float: left;
  }

  span {
    float: right;
  }

  progress {
    transform: scaleX(-1);
  }
}
</style>
