<script setup>
  import ProductTile from '../components/ProductTile.vue';



</script>

<script>
export default {
    data() {
        return {
            id: null,
            coffee: null
        };
    },
    methods: {
        fetchCoffee() {
            if (!this.id) {
                return;
            }
        
        fetch('/api/coffees/${this.id}').then(res => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error('fetch error');
            }
        }).then(data => {
            this.coffee = data;
        });
        },
        selectCoffee(id) {
            this.id = id;
            this.fetchCoffee();
        }
    }
};
</script>



<template>
    <div class="productpage">
        <h1>{{ coffee.name }}</h1>
        <p>{{ coffee.description }}</p>
        <div>{{ coffee.price }} zł</div>
        <button @click="addToCart">Add to cart</button>
    </div>
</template>