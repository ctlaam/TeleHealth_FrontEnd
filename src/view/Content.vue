<template>
  <section>
    <TheNavbar></TheNavbar>
    <TheHeader></TheHeader>
    <TheContent></TheContent>
  </section>
</template>

<script>
/* eslint-disable */
import TheContent from "../components/layout/TheContent.vue";
import TheNavbar from "../components/layout/TheNavbar.vue";
import TheHeader from "../components/layout/TheHeader.vue";
export default {
  name: "App",
  components: {
    TheContent,
    TheNavbar,
    TheHeader,
  },
};
</script>

<style>
</style>
