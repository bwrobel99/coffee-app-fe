<script setup>
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
</script>
<template>
  <div class="listing_page">
    <div class="product_tile" v-for="coffee in items">
      <ProductTile :coffee="coffee" />
    </div>
  </div>
</template>
