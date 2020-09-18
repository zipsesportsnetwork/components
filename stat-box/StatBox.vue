<template>
  <table v-if="targetedPlayer">
    <tr>
      <th>Score</th>
      <th>Goals</th>
      <th>Assists</th>
      <th>Saves</th>
      <th>Shots</th>
    </tr>
    <tr>
      <td>{{targetedPlayer.score}}</td>
      <td>{{targetedPlayer.goals}}</td>
      <td>{{targetedPlayer.assists}}</td>
      <td>{{targetedPlayer.saves}}</td>
      <td>{{targetedPlayer.shots}}</td>
    </tr>
  </table>
</template>

<script>
import {mapState} from 'vuex';

export default {
	computed: {
		...mapState({
            players: state => state.gameData.players,
            game: state => state.gameData.game,
        }),
        targetedPlayer(state) {
            if (!state.game || !state.game.hasTarget) return undefined;
            return state.players[state.game.target];
        }
	},
};
</script>

<style lang="scss">
table {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
}
</style>
