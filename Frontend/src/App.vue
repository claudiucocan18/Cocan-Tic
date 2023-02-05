<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <Navbar />
  <header>
    <div class="wrapper"></div>
  </header>

  <RouterView />
</template>

<style scoped></style>
