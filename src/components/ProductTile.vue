<script setup>
import { defineProps, ref, getCurrentInstance, onMounted, watchEffect } from 'vue';

// get props from parent component
const props = defineProps({
  coffee: {
    type: Object,
    required: true
  },
  favoriteItems: {
    type: Array,
    required: true
  },
  items: {
    type: Array,
    required: true
  }
});

// Destructuring from props
const { id, name, price, discount } = props.coffee;

// Define a ref to track the favorite state
const isFavorite = ref(false);

// Get the current component instance
const { emit } = getCurrentInstance();

// Function to toggle the favorite state
const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value;
  console.log('Toggled favorite for object with id:', id);

  // Emit event with coffee details
  emit('favorite-toggled', { id, name, price, discount });

  // Log coffee details to the console
  console.log('Coffee details:', { id, name, price, discount });

  // Check if coffee item is already a favorite
  const isAlreadyFavorite = props.favoriteItems.some(item => item.id === id);

  if (isAlreadyFavorite) {
    // Remove coffee item from favoriteItems array
    props.favoriteItems.splice(
      props.favoriteItems.findIndex(item => item.id === id),
      1
    );
  } else {
    // Add coffee item to favoriteItems array
    const favoriteItem = { id, name, price, discount };
    props.favoriteItems.push(favoriteItem);
  }

  // Log favoriteItems array
  console.log('Favorite Items:', props.favoriteItems);
};
//Local Storage

onMounted(() => {
  if (!props.favoriteItems || props.favoriteItems.length === 0) {
    const storedData = localStorage.getItem('favoriteItems');
    if (storedData) {
      emit('update:favoriteItems', JSON.parse(storedData));
    }
  }
});

watchEffect(() => {
  localStorage.setItem('favoriteItems', JSON.stringify(props.favoriteItems));
});

</script>

<template>
  <div class="tile">
    <div class="image">
      <img src="../assets/kawa_test.svg" :alt="name">
      <div class="favorite">
        <button class="favorite-button" @click="toggleFavorite()">
          <i :class="['heart-icon', isFavorite ? 'fas fa-heart' : 'far fa-heart']" alt="Favorite"></i>
        </button>
      </div>
    </div>
    <div class="desc">
      <h1 class="title">{{ name }}</h1>
      <div class="prices">
        <div class="newPrice" v-if="price > (price - discount)">{{ price - discount }} zł</div>
        <div class="price">{{ price }} zł</div>
      </div>
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
