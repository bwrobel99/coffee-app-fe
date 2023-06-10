
<script setup>
import ProductTile from '../components/ProductTile.vue'
import { ref } from 'vue';
const orderItems = ref([]);
// const orderItems = []
// Read from local storage
const storedOrderItems = localStorage.getItem("cartItems");
console.log(storedOrderItems)
if (storedOrderItems) {
  orderItems.value = JSON.parse(storedOrderItems);
}
</script>

<template>
  <div class="orders">
    <div class="wrapper">
        <h1>Orders</h1>
        <ul>
            <li v-for="item in orderItems" :key="item.id" class="">
                <ProductTile :coffee="item" />
            <!-- {{ item.name }} - {{ item.price - item.discount }} zł -->
          </li>
        </ul>
    </div>
  </div>
</template>