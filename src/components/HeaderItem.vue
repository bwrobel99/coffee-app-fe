<script>
export default {
  methods: {
  }
}
</script>

<template>
    <div class="header_wrapper">
        <h1 class="header">Coffee Shop</h1>
        <div v-if="$route.path !== '/'" class="nav">
          <ul>
            <li ><router-link to="/listing">Products</router-link></li>
            <li><router-link to="/favorite">Favorite</router-link></li>
            <li><router-link to="/Last Order">Last Order</router-link></li>
            <li><router-link to="/Order">Order</router-link></li>
          </ul>
        </div>
    </div>
</template>

<style lang ='css' scoped>
  .nav {
            background-color:white;
        }

        .nav ul {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
        }

        .nav li {
            margin-right: 15px;
        }

        .nav a {
            color:black;
            text-decoration: none;
            padding: 5px 10px;
            font-family: 'mainFont';
            font-size: 26px;
        }

        .nav a:hover {
          text-decoration: underline;
        }
</style>