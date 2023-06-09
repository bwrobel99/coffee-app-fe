<script setup>
import { defineProps, ref,computed } from 'vue';
import {useRouter} from 'vue-router';

// get props from parent component
const props = defineProps({
  coffee: {
    type: Object,
    required: true
  },

  showDescription: {
  type: Boolean,
  default: false
}


});

// Destructuring from props
const { id, name, price, discount, description } = props.coffee;

// Define a ref to track the favorite state
const isFavorite = ref(false);

// Function to toggle the favorite state
const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value;
};

const addToCart = () => {
  console.log("Added to cart", props.coffee)
};

const openProductCard = (id) => {
  console.log('Opened coffee page with id:', id);
  //router.push({name: "product" });
};
</script>

<template>
  <div class="tile" @click="openProductCard(id)">
    
    <div class="image">
      <RouterLink :to="'/product/:id'" class="productpage">
      <img src="../assets/kawa_test.svg" :alt="name">
      </RouterLink>
      <div class="favorite">
        <button class="favorite-button" @click="toggleFavorite">
          <i :class="['heart-icon', isFavorite ? 'fas fa-heart' : 'far fa-heart']" alt="Favorite"></i>
        </button>
      </div>
    </div>
    
    <div class="desc">
      <RouterLink :to="'/product/:id'" class="productpage">
      <h1 class="title">{{ name }}</h1>
      <div class="prices">
        <div class="newPrice" v-if="price > (price - discount)">{{ price - discount }} zł</div>
        <div class="price">{{ price }} zł</div>
      </div>
      <div v-if="showDescription" class="description">{{ description }}</div>
      </RouterLink>
      <button @click="addToCart(coffee)">Add to cart</button>
    </div>
  
  </div>
</template>

<style>
.image {
  position: relative;
  display: inline-block;
}

.favorite {
  position: absolute;
  top: 0;
  right: 0;
  padding: 6px;
  background-color: white;
  color: black;
  transform: translate(150%, 0%);
}

.favorite-button {
  background: white; 
  border: 0; 
  padding: 0px;
  cursor: pointer;
  outline: none; 
  transition: background-color 0.3s;
}

.heart-icon {
  top: 10px;
  right: 10px;
  color: black;
  font-size: 28px;
  box-shadow: 100;
}
</style>




