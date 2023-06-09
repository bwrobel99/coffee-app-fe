<script setup>
import HeaderItem from "./components/HeaderItem.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <HeaderItem />
    </div>
  </header>
  <div class="relative_header"></div>
  <router-view />
</template>

<style>
.v-toast__item {
  font-family: "mainFont";
}
</style>
