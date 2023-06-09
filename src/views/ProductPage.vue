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
</script>

<template>
  <main class="productpage">
    <div class="productpage_wrapper">
      <ProductTile :coffee="items" />
    </div>
  </main>
</template>
