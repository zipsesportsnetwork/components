export const lolDataModule = {
  namespaced: true,
  state: () => ({
    game: null,
  }),
  mutations: {
    updateGameState(state, payload) {
      state.game = payload;
    },
  },
};

export function lolDataPlugin({
  port = 49322,
  namespacedModule,
} = {}) {
  const mutationKey = namespacedModule
    ? `${namespacedModule}/updateGameState`
    : "updateGameState";
  return async (store) => {
    const ws = new WebSocket('ws://localhost:6942');
    ws.addEventListener('message', (event) => store.commit(mutationKey, JSON.parse(event.data)));
  };
}
