<template>
    <div class="player-display">
        <h2>{{player.id}}</h2>
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
  border: 1px solid white;
  border-radius: 10px;
  margin-top: 10px;
  padding: 10px;
  h2 {
    margin: 0 0 5px;
  }
  progress {
    width: 100%;
    box-sizing: border-box;
  }
}
</style>
