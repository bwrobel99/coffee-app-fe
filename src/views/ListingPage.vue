<script setup>
<<<<<<< Updated upstream
  import ProductTile from '../components/ProductTile.vue';
</script>
<script>
 export default {
    data() {
      return {
        items: [] // Table to assign data from API
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
    }
  }
=======
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
>>>>>>> Stashed changes
</script>
<template>
  <main class="listingpage">
<<<<<<< Updated upstream
    <div class="listingpage_wrapper">
      <div class="product_tile" v-for="coffee in items">
        <ProductTile :coffee="coffee" />
      </div>
    </div>
=======
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
>>>>>>> Stashed changes
  </main>
</template>
