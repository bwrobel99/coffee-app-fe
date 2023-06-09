<script setup>
import ProductTile from "../components/ProductTile.vue";
import draggable from "vuedraggable";
import { useCoffeePrecedence } from "./utils/useCoffeePrecedence";
import { useStore } from "./utils/useStore";
import { onBeforeUnmount, onMounted, ref, watch } from "vue";

const { coffees, updateCoffeeList } = useStore();
const { savePrecedence, sortWithPrecedence } = useCoffeePrecedence();

const sortedCoffees = ref([]);
const setSortedCoffees = () =>
  (sortedCoffees.value = sortWithPrecedence(coffees.value));

onMounted(async () => {
  await updateCoffeeList();
});

watch(coffees, () => setSortedCoffees());

const handleDragEnd = () => {
  savePrecedence(sortedCoffees.value);
};
</script>

<template>
  <main class="listingpage">
    <draggable
      :list="sortedCoffees"
      class="listingpage_wrapper"
      item-key="id"
      ghost-class="ghost"
      @change="handleDragEnd"
    >
      <template #item="{ element }">
        <ProductTile :coffee="element" />
      </template>
    </draggable>
  </main>
</template>

<style scoped>
.ghost {
  opacity: 0.5;
}
</style>
