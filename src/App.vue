<template>
  <section>
    <router-view></router-view>
  </section>
</template>

<script>
/* eslint-disable */
import axios from "axios";

export default {
  async created() {
    console.log(123);
    const me = this;
    if (
      localStorage.getItem("usernameTele") &&
      localStorage.getItem("passwordTele")
    ) {
      const accountLoggin = {
        email: localStorage.getItem("usernameTele"),
        password: localStorage.getItem("passwordTele"),
      };
      let user = null;
      await axios
        .post("http://127.0.0.1:8000/auth/login/", accountLoggin)
        .then(async (result) => {
          user = result.data.data;
          await me.$store.dispatch("login", user);
          console.log(123);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
};
</script>

<style>
@import url("css/main.css");
</style>
