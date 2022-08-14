export default {
  userId(state) {
    return state.userId;
  },
  accessToken(state) {
    return state.tokens.access;
  },
  isAuthenticated(state) {
    return !!state.username;
  },
  email(state) {
    return state.email;
  },
  role(state) {
    return state.role;
  }
};
