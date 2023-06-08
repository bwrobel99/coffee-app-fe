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
        this.items = data[0]
      })
    }
  }
  
</script>



<template>
  <main class="productpage">
    <div class="productpage_wrapper">
      <div class="product_tile">
        <ProductTile :coffee="coffee" />
      </div>
    </div>
  </main>
</template>
