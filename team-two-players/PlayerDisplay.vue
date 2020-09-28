<template>
    <div class="player-display">
        <h2>{{player.name}}</h2>
        <progress max="100" :value="player.boost"></progress>
    </div>
</template>

<script>
export default {
    props: ['player'],
}
</script>

<style lang="scss">
.player-display {
  h2 {
    margin: 0;
    text-align: right;
    font-size: 32px;
    line-height: 64px;
    font-family: prohibition, sans-serif;
  font-weight: 400;
  font-style: normal;
    color: #041e42;
  }

  progress {
    width: 100%;
    box-sizing: border-box;
    transform: scaleX(-1);
    -webkit-appearance: none;
    height: 32px;
  }

  progress[value]::-webkit-progress-bar {
    background-color: white;
    box-shadow: inset 0px 0px 3px 0px black;
  }

  progress[value]::-webkit-progress-value {
    background-color: #041e42;
    transition: width 0.2s ease;
  }
}
</style>
