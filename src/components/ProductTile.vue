<script setup>
<<<<<<< Updated upstream
  import { defineProps } from 'vue';

// get props from parent component
  const props = defineProps({
    coffee: {
      type: Object,
      required: true
    }
  });
// Destructuring from props 
  const { id, name, price, discount } = props.coffee;
</script>

<template>
<!-- @click redirect to product page certain coffee with more details like description, size -->
  <div class="tile" :id="id" @click="">
    <div class="image">
      <img src="../assets/kawa_test.svg" :alt="name">
=======
import { defineProps, ref, getCurrentInstance, onMounted, watchEffect,  } from 'vue';
import { useRouter } from 'vue-router'

// get props from parent component
const props = defineProps({
  coffee: {
    type: Object,
    required: true,
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

const router = useRouter()
const openProductPage = (id) => {
  router.push({ 
    name: 'product', 
    params: { id: id }
  })
}
</script>

<template>
  <div class="tile" @click="openProductPage(id)">
    <div class="image">
      <img src="../assets/kawa_test.svg" :alt="name" />
      <div class="favorite">
        <button class="favorite-button" @click="toggleFavorite()">
          <i :class="['heart-icon', isFavorite ? 'fas fa-heart' : 'far fa-heart']" alt="Favorite"></i>
        </button>
      </div>
>>>>>>> Stashed changes
    </div>
    <div class="desc">
      <h1 class="title">{{ name }}</h1>
      <div class="prices">
        <!-- if price after discount is lower than regular price display new price -->
        <div class="newPrice" v-if="price > (price - discount)">{{ price - discount }} zł</div>
        <div class="price">{{ price }} zł</div>
      </div>
    </div>
  </div>
</template>
