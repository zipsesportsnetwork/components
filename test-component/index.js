import Vue from "vue";
import Vuex from "vuex";

import {
  rocketLeagueDataModule,
  rocketLeagueDataPlugin,
} from "../common/plugin";

import TestComponent from "./Test";

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
  render: (h) => h(TestComponent),
});
