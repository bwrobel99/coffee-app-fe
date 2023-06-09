
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  </script>

  <script>
  export default {
    setup() {
      const router = useRouter();
      const coffee = ref(null);
  
      onMounted(() => {
        const id = router.currentRoute.value.params.id;
        fetch(`/api/coffees/:id`).then(res => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error('fetch error');
          }
        }).then(data => {
          coffee.value = data;
        });
      });
  
      const addToCart = () => {
        console.log("Added to cart", coffee.value);
      };
  
      return {
        coffee,
        addToCart
      };
    }
  };
  </script>
  
  <template>
    <main class="productpage">
      <div class="productpage_wrapper">
        <div class="product_tile">
            <ProductTile 
                :coffee="item in items" 
                :key="item.id"
                :showDescription="true"        
            />
          </div>
        </div>
    </main>
  </template>