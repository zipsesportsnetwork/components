<template>
  <team-boost :team="0" :players="players" :game="game"></team-boost>
</template>

<script>
import {mapState} from 'vuex';

import TeamBoost from '../common/TeamBoost';

export default {
  components: {
    TeamBoost
  },
	computed: {
		...mapState({
            players: state => state.gameData.players,
            game: state => state.gameData.game,
        }),
	},
};
</script>