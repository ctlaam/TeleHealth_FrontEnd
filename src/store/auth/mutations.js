export default {
  login(state, payload) {
    state.email = payload.email;
    state.tokens = payload.tokens;
    state.username = payload.username;
    state.role = payload.role;
    console.log(state);
  },
  logout(state) {
    state.email = "";
    state.tokens = "";
    state.username = "";
    state.role = "";
  },
  refreshAccessToken(state, payload) {
    state.tokens.access = payload.access;
  },
};
