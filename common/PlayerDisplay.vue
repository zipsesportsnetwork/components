<template>
  <div :class="['player-display', side]">
    <span>{{ player.name }}</span>
    <progress max="100" :value="player.boost"></progress>
  </div>
</template>

<script>
export default {
  props: ["player", "side"],
};
</script>

<style lang="scss">
@import "colors.scss";

.player-display {
  span {
    text-align: right;
    font-size: 32px;
    line-height: 64px;
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
}

.player-display.left {
  h2 {
    text-align: left;
  }
}

.player-display.right {
  h2 {
    text-align: right;
  }

  progress {
    transform: scaleX(-1);
  }
}
</style>
