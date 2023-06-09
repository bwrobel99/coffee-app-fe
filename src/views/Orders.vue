<script setup>
import { ref } from 'vue';

const orderItems = ref([]);

// Read from local storage
const storedOrderItems = localStorage.getItem("orderItems");
if (storedOrderItems) {
  orderItems.value = JSON.parse(storedOrderItems);
}
</script>

<template>
  <div class="orders">
    <h1>Orders</h1>
    <ul>
      <li v-for="item in orderItems" :key="item.id">
        {{ item.name }} - {{ item.price }} zł
      </li>
    </ul>
  </div>
</template>
