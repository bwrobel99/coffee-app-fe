<script setup>
import ProductTile from "../components/ProductTile.vue";
import { useRouter } from 'vue-router';
import { ref } from 'vue';
</script>
<script>
export default {
  data() {
    return {
      items: [], // Table to assign data from API
    };
  },
  methods: {
    addToCart() {
      const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      const item = this.items; // Add whole item do the cart
      cartItems.push(item);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      console.log("Added to the cart:", item);
    },

  },
  mounted() {
    const router = useRouter();
    const id = router.currentRoute.value.params.id;
    let url = '/api/coffees/' + id
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("fetch error");
        }
      })
      .then((data) => {
        // assign fetched data to table
        this.items = data;
      });
  },
};
// const { price } = items
</script>

<template>
  <main class="productpage">
    <div class="productpage_wrapper">
      <div class="product_tile">
        <ProductTile :coffee="items" />
        <div class="cartBtn">
          <div class="price">{{ items.price }} 10zl</div>
          <div class="btn">
          <button @click="addToCart">Add To Cart</button>
        </div>
        </div>
      </div>
    </div>
  </main>
</template>
