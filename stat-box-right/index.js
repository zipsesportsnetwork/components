import Vue from "vue";
import Vuex from "vuex";

import {
  rocketLeagueDataModule,
  rocketLeagueDataPlugin,
} from "../common/plugin";

import StatBoxRightComponent from "./StatBoxRight";

Vue.use(Vuex);

const store = new Vuex.Store({
  plugins: [
    rocketLeagueDataPlugin({
      namespacedModule: "gameData",
    }),
  ],
  modules: {
    gameData: rocketLeagueDataModule,
  },
});

new Vue({
  store,
  el: "#app",
  render: (h) => h(StatBoxRightComponent),
});
