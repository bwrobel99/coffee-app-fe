<script setup>
// import { RouterView } from 'vue-router'
import HeaderItem from './components/HeaderItem.vue'
// import StartedPage from './views/StartPage.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <HeaderItem/>
    </div>
  </header>
  <div class="relative_header"></div>

  <main>
    <router-view></router-view>
    <!-- <StartedPage/> -->
  </main>
</template>


