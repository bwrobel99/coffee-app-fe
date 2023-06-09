<script setup>

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
</script>

<template>
  <main class="listingpage">
    <div class="listingpage_wrapper">
      <div class="product_tile" v-for="coffee in items" :key="coffee.id">
        <ProductTile :coffee="coffee" :items="items" :favoriteItems="favoriteItems"/>
      </div>
    </div>
  </main>
</template>
