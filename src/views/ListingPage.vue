<script setup>
import { ref, onMounted } from "vue";
import ProductTile from "../components/ProductTile.vue";
import draggable from "vuedraggable";
import { useCoffeePrecedence } from "./utils/useCoffeePrecedence";

const coffees = ref([]);
const { coffeePrecedence, savePrecedence, sortWithPrecedence } =
  useCoffeePrecedence("allCoffeesListPrecedence");

onMounted(async () => {
  try {
    const response = await fetch("/api/coffees");
    const data = await response.json();

    coffees.value = sortWithPrecedence(data);

    if (!coffeePrecedence) {
      savePrecedence(coffees.value, false);
    }
  } catch (e) {
    console.log(e);
  }
});

const handleDragEnd = () => {
  savePrecedence(coffees.value);
};
</script>

<template>
  <main class="listingpage">
    <draggable
      :list="coffees"
      class="listingpage_wrapper"
      item-key="id"
      ghost-class="ghost"
      @end="handleDragEnd"
    >
      <template #item="{ element }">
        <div class="product_tile">
          <ProductTile :coffee="element" :items="items" :favoriteItems="favoriteItems"/>
        </div>
      </template>
    </draggable>
  </main>
</template>

<style scoped>
.ghost {
  opacity: 0.5;
}
.details {
  display: none;
}
</style>
