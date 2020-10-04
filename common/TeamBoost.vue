<template>
	<div :class="['app', side]" v-if="game && players">
        <div id="triangle-big" v-if="right"></div>
        <span class="header">
            <span v-if="right">{{game.teams[team].name}}</span>
            <span class='score' v-if="right">{{game.teams[team].score}}</span>
            <div class="aligner" v-if="left"><span class='score' v-if="left">{{game.teams[team].score}}</span><div id="triangle-big" v-if="left"></div></div>
            <span v-if="left">{{game.teams[team].name}}</span>
        </span>
        <div class="displays">
        <player-display
            v-for="player in teamPlayers"
            :side="side"
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
        teamPlayers () {
            if (!this.players) return [];
            return Object.values(this.players).filter(p => p.team === this.team);
        },
        side() {
            return this.team === 0 ? 'left' : 'right';
        },
        left() {
            return this.side === 'left';
        },
        right() {
            return this.side === 'right';
        }
    },
    props: ['team', 'players', 'game']
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

  .header span, .header div span {
      padding-top: 18px;
    padding-bottom: 24px;
  }

  .aligner {
      display: inline;
  }

  .header {
    font-size: 48px;
    margin: 0;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    background: #041e42;
    font-family: prohibition, sans-serif;
    font-weight: 400;
    font-style: normal;
    box-shadow: 0 18px 18px -18px rgba(0, 0, 0, 0.5);
  }

  .displays {
    background: #a89968;
    box-shadow: inset 0 18px 18px -18px rgba(0, 0, 0, 0.5), 0 18px 18px -18px black;
    padding-bottom: 24px;
  }

  .header, .displays {
    padding-left: 24px;
    padding-right: 24px;
  }

  #triangle-big {
    border-style: solid;
    display: inline;
    position: absolute;
  }
}

.app.left {
  .header {
    margin-right: 102px;
  }

  .displays {
    margin-right: 238px;
  }

  #triangle-big {
    border-width: 0 0 102px 102px;
    border-image-source: linear-gradient(288deg, transparent 25%, #a89968 25%, #a89968 40%, #041e42 40%); 
  }

  .score {
    padding-left: 20px;
    display: inline-block;
  }
}

.app.right {
  .header {
    margin-left: 102px;
  }

  .displays {
    margin-left: 238px;
  }

  #triangle-big {
    border-width: 0 102px 102px 0;
    border-image-source: linear-gradient(72deg, transparent 25%, #a89968 25%, #a89968 40%, #041e42 40%); 
  }

  .score {
    padding-right: 20px;
  }
}
</style>
