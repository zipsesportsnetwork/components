// This file will eventually live as its own package, @zipsesports/rocketleague-vuex or something like that
// I just have to make sure i package it right and I don't feel like that yet -geo

import createSOSEmitter from "@zipsesports/sos-wrapper";

export const rocketLeagueDataModule = {
  namespaced: true,
  state: () => ({
    event: null,
    game: null,
    players: null,
  }),
  mutations: {
    updateGameState(state, payload) {
      if (payload.hasGame) {
        state.game = payload.game;
      }
      state.players = payload.players;
    },
  },
};

export function rocketLeagueDataPlugin({
  port = 49322,
  namespacedModule,
} = {}) {
  const mutationKey = namespacedModule
    ? `${namespacedModule}/updateGameState`
    : "updateGameState";
  return async (store) => {
    const emitter = await createSOSEmitter(port);
    emitter.on("game:update_state", (data) => {
      store.commit(mutationKey, data);
    });
  };
}
