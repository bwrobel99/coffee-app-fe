<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "../views/utils/useStore";

// get props from parent component
const props = defineProps({
  coffee: {
    type: Object,
    required: true,
  },
});

const { switchFavoriteStatus } = useStore();

const router = useRouter();
const openProductPage = () => {
  router.push({
    name: "product",
    params: { id: props.coffee.id },
  });
};
const handleFavoriteButtonClick = () => switchFavoriteStatus(props.coffee.id);
</script>

<template>
  <div class="product_tile">
    <div class="tile" @click="openProductPage">
      <div class="image">
        <img src="../assets/kawa_test.svg" :alt="coffee.name" />
        <div class="favorite">
          <button
            class="favorite-button"
            @click.stop="handleFavoriteButtonClick"
          >
            <div
              :class="[
                'heart-icon',
                coffee.favorite ? 'fas fa-heart' : 'far fa-heart',
              ]"
              alt="Favorite"
            ></div>
          </button>
        </div>
      </div>
      <div class="desc">
        <h1 class="title">{{ coffee.name }}</h1>
        <div class="prices">
          <!-- if price after discount is lower than regular price display new price -->
          <div
            class="newPrice"
            v-if="coffee.price > coffee.price - coffee.discount"
          >
            {{ coffee.price - coffee.discount }} zł
          </div>
          <div class="price">{{ coffee.price }} zł</div>
        </div>
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
