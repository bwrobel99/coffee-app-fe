<script setup>
<<<<<<< HEAD
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
=======

  import ProductTile from '../components/ProductTile.vue';

</script>

<script>

export default {
  
    data() {
      return {
        items: [], // Table to assign data from API
        favoriteItems: [] // Array to store favorite items
      };
    },
    mounted() {
      fetch("/api/coffees").then(res => {
        if(res.ok) {
          return res.json()
        } else {
          throw new Error('fetch error');
        }
      }).then(data => {
        // assign fetched data to table
        this.items = data
      })
    },
}
>>>>>>> MS
</script>

<template>
  <main class="listingpage">
<<<<<<< HEAD
    <draggable
      :list="coffees"
      class="listingpage_wrapper"
      item-key="id"
      ghost-class="ghost"
      @end="handleDragEnd"
    >
      <template #item="{ element }">
        <div class="product_tile">
          <ProductTile :coffee="element" />
        </div>
      </template>
    </draggable>
=======
    <div class="listingpage_wrapper">
      <div class="product_tile" v-for="coffee in items" :key="coffee.id">
        <ProductTile :coffee="coffee" :items="items" :favoriteItems="favoriteItems"/>
      </div>
    </div>
>>>>>>> MS
  </main>
</template>

<style scoped>
.ghost {
  opacity: 0.5;
}
</style>
