import Vue from "vue";
import Vuex from "vuex";

import {
  lolDataModule,
  lolDataPlugin,
} from "../common/lol-plugin";

import ScorebugComponent from "./Scorebug";

Vue.use(Vuex);

const store = new Vuex.Store({
  plugins: [
    lolDataPlugin({
      namespacedModule: "gameData",
    }),
  ],
  modules: {
    gameData: lolDataModule,
  },
});

new Vue({
  store,
  el: "#app",
  render: (h) => h(ScorebugComponent),
});
