import TeamTwoPlayers from "./TeamTwoPlayers.vue";
import Vuex from "vuex";
import Vue from "vue";

import state from "../common/defaultState";

Vue.use(Vuex);

export default {
  title: "Button",
  component: TeamTwoPlayers,
};

export const Basic = () => ({
  components: { TeamTwoPlayers },
  template: `<TeamTwoPlayers><TeamTwoPlayers/>`,
  store: new Vuex.Store({
    modules: {
      gameData: {
        state: () => state,
      },
    },
  }),
});
