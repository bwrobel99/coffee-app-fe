<script setup>
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
