<template>
    <div>
      <ProductTile :coffee="selectedCoffee" />
      <button @click="addToCart">Add to Cart</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import ProductTile from '../components/ProductTile.vue';
  
  const selectedCoffee = ref(null); // Wybrane kawy
  
  // Metoda, która będzie wywoływana przy kliknięciu na konkretną kawę
  const handleCoffeeClick = (coffee) => {
    selectedCoffee.value = coffee;
  };
  
  // Metoda, która będzie wywoływana przy kliknięciu na przycisk "Add to Cart"
  const addToCart = () => {
    if (selectedCoffee.value) {
      // Dodaj kod obsługujący dodawanie do koszyka
      console.log('Dodano do koszyka:', selectedCoffee.value);
    }
  };
  </script>