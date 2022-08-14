import axios from "axios";
export default {
  login(context, payload) {
    context.commit("login", payload);
  },
  logout(context) {
    context.commit("logout");
    console.log(1234);
  },
  async refreshAccessToken(context) {
    const refreshToken = context.state.refresh;
    console.log(refreshToken);
    axios.get("");
  },
};
