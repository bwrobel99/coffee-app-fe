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
  mounted() {
    const router = useRouter();
    const id = router.currentRoute.value.params.id;
    
    let url = '/api/coffees/' + id

    console.log(url)

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
      <div class="product_tile">
        {{ items }}
        <ProductTile :coffee="items" />
      </div>
    </div>
  </main>
</template>



<!-- <script setup>
import ProductTile from "../components/ProductTile.vue";
import { useRouter } from 'vue-router';

const router = useRouter();
const id = router.currentRoute.value.params.id;
const items = ref([]); // Use ref to make items reactive

const fetchProduct = () => {
  const url = '/api/coffees/' + id;
  console.log(url);

  fetch(url)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("fetch error");
      }
    })
    .then((data) => {
      // assign fetched data to items
      items.value = data;
    });
};

onMounted(() => {
  fetchProduct();
});
</script>

<template>
  <main class="productpage">
    <div class="productpage_wrapper">
      <div class="product_tile">
        {{ items }}
        <ProductTile :coffee="items" />
      </div>
    </div>
  </main>
</template> -->
