<script setup>
import { computed, ref } from "vue";
import { useStore } from "../views/utils/useStore";
import ProductTile from "../components/ProductTile.vue";
import { useCoffeePrecedence } from "./utils/useCoffeePrecedence";

const { coffees } = useStore();
const { sortWithPrecedence } = useCoffeePrecedence();

const items = ref(coffees);
const favorite = computed(() => items.value.filter((item) => item.favorite));
</script>

<template>
  <main class="favorites-page">
    <div class="favorites-container">
      <div v-for="item in sortWithPrecedence(favorite)" :key="item.id">
        <ProductTile :coffee="item" />
      </div>
    </div>
  </main>
</template>
