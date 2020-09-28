<template>
	<div class="app" v-if="game && players">
        <div id="triangle-big"></div>
        <span class="header">
            <span>{{game.teams[1].name}}</span>
            <span class='score'>{{game.teams[1].score}}</span>
        </span>
        <div class="displays">
        <player-display
            v-for="player in teamOnePlayers"
            :key="player.id"
            :player="player"
        /></div>
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
            return Object.values(this.players).filter(p => p.team === 1);
        }
	},
};
</script>

<style lang="scss">
@import url("https://use.typekit.net/cau5qim.css");

/**
gold: #a89968
blue: #041e42
*/

body {
    margin: 0;
}

.app {
  color: white;

  .header {
    font-size: 48px;
    margin: 0;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    background: #041e42;
    padding-top: 18px;
    padding-bottom: 24px;
    font-family: prohibition, sans-serif;
    font-weight: 400;
    font-style: normal;
    margin-left: 102px;
    box-shadow: 0 18px 18px -18px rgba(0, 0, 0, 0.5);
  }

  .displays {
    background: #a89968;
    box-shadow: inset 0 18px 18px -18px rgba(0, 0, 0, 0.5), 0 18px 18px -18px black;
    padding-bottom: 24px;
    margin-left: 238px;
  }

  .header, .displays {
    padding-left: 24px;
    padding-right: 24px;
  }

  #triangle-big {
    border-style: solid;
    border-width: 0 102px 102px 0;
    border-image-source: linear-gradient(72deg, transparent 25%, #a89968 25%, #a89968 40%, #041e42 40%); 
    display: inline;
    position: absolute;
  }

  .score {
      padding-right: 20px;
  }
}
</style>
