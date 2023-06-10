<script setup>
import ProductTile from "../components/ProductTile.vue";
import { useRouter } from "vue-router";
import { ref } from "vue";
</script>
<script>
export default {
  data() {
    return {
      items: [], // Table to assign data from API
    };
  },
  // methods: {
  //   // router = useRouter();
  //   addToCart() {
  //     const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  //     const item = this.items; // Add whole item do the cart
  //     cartItems.push(item);
  //     localStorage.setItem("cartItems", JSON.stringify(cartItems));
  //     console.log("Added to the cart:", item);

  //     this.router.push({
  //       name: "order",
  //       params: { id: props.coffee.id },
  //     });

    // },
  // },
  mounted() {
    const router = useRouter();
    const id = router.currentRoute.value.params.id;
    let url = "/api/coffees/" + id;
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

const addToCart = (coffee) => {
  const item = ref(coffee)
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  cartItems.push(item.value);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}
</script>

<template>
  <main class="productpage">
    <div class="productpage_wrapper">
      <ProductTile :coffee="items" />
      <div class="cartBtn">
          <div class="price">{{ items.price - items.discount }} zł</div>
          <div class="btn">
            <button @click="addToCart(items)">
              <router-link :to="{ name: 'order' }">Add To Cart</router-link>
            </button>
        </div>
      </div>
    </div>
  </main>
</template>
