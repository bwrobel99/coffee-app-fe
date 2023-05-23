<script setup>
  import ProductTile from '../components/ProductTile.vue';
  import { ref } from 'vue';

  const coffeesList = ref([])
  async function getCoffees() {
        const api = await fetch("/api/coffees");
        const response = await api.json();
        coffeesList.value = response;
        console.log(response)
  }

  getCoffees()
  // export default {
  //   data() {
  //     return {
  //       coffeesList: []
  //     }
  //   },
  //   methods: {
  //     async getCoffees() {
  //       const api = await fetch("/api/coffees");
  //       const response = await api.json();
  //       this.coffeesList = response;
  //       console.log(response)
        
  //     },
  //   },
  //   mounted() {
  //     this.getCoffees()
  //     // console.log(this.getCoffees())
  //   }
  // }
</script>
<template>
  <div class="listing_page">
    <!-- create a loop with data from api -->
    <ProductTile />
    <ProductTile />
    <ProductTile />
    <ProductTile />
    <ProductTile />
    <ProductTile />
    <ProductTile />
    <ProductTile />
  </div>
</template>
