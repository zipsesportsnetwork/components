import TeamTwoPlayers from './TeamTwoPlayers.vue';
import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default {
    title: 'Button',
    component: TeamTwoPlayers
}

export const Basic = () => ({
    components: { TeamTwoPlayers },
    template: `<TeamTwoPlayers><TeamTwoPlayers/>`,
    store: new Vuex.Store({
    	modules: {
    		gameData: {
                state: () => ({
                    event: null,
                    game: {
                        teams: [{
                            name: 'A',
                            score: 0
                        }, {
                            name: 'B',
                            score: 0
                        }]
                    },
                    players: [{
                        id: 'A',
                        boost: 0,
                        team: 0
                    }, {
                        id: 'B',
                        boost: 0,
                        team: 0
                    }, {
                        id: 'C',
                        boost: 0,
                        team: 0
                    }, {
                        id: 'D',
                        boost: 0,
                        team: 1
                    }, {
                        id: 'E',
                        boost: 0,
                        team: 1
                    }, {
                        id: 'F',
                        boost: 0,
                        team: 1
                    }],
                }),
            },
    	},
    })
});