<template>
	<div class="app" v-if="game && players">
        <h1>
            <span>{{game.teams[0].name}}</span>
            <span>{{game.teams[0].score}}</span>
        </h1>
        <player-display
            v-for="player in teamOnePlayers"
            :key="player.id"
            :player="player"
        />
	</div>
</template>

<script>
import {mapState} from 'vuex';

import PlayerDisplay from './PlayerDisplay';

export default {
    components: {
        PlayerDisplay,
    },
	computed: {
		...mapState({
            players: state => state.gameData.players,
            game: state => state.gameData.game,
        }),
        teamOnePlayers () {
            if (!this.players) return [];
            return Object.values(this.players).filter(p => p.team === 0);
        }
	},
};
</script>

<style lang="scss">
.app {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-family: sans-serif;
  padding: 20px;
  border-radius: 20px;
  h1 {
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
