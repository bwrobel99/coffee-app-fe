<script>
export default {
  data() {
    return {
      favoriteItems: [] // Array to store favorite items
    };
  },
  mounted() {
    const storedData = localStorage.getItem('favoriteItems');
    if (storedData) {
      try {
        this.favoriteItems = JSON.parse(storedData);
      } catch (error) {
        console.error('Error parsing favorite items from local storage:', error);
        // Handle the error, such as setting a default value for favoriteItems
      }
    } else {
      // Handle the case where no data is stored in local storage, such as setting a default value for favoriteItems
    }
  },
}
</script>

<template>
  <div>
    <div class="favorites-container">
      <div v-for="item in favoriteItems" :key="item.id">
        <div class="tiles">
          <div class="images">
            <img src="../assets/kawa_test.svg" :alt="item.name">
          </div>
          <div class="des">
            <h1 class="title">{{ item.name }}</h1>
            <div class="prices">
              <div class="newPrice" v-if="item.price > (item.price - item.discount)">{{ item.price - item.discount }} zł</div>
              <div class="price">{{ item.price }} zł</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

.favorites-container {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  padding-left: 40px;
}

.tiles{
  /* max-width: calc(50% - 30px); */
  width: 96%;
  margin-right: 160px;
  margin-bottom: 10px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 0px 7px 20px -7px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 7px 20px -7px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 7px 20px -7px rgba(0, 0, 0, 0.5);
  text-align: center;
}
.images{
  padding-top: 20px;
  align-items: center;
}
.des{
  font-family: "mainFont";
  background-color: #CA8F7A;
  border-radius: 5px 10px 0 0;
  width:100%;
  padding: 10px 0 0;
}
.prices {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 0 0 10px;
  font-size: 24px;
}
.prices .newPrice ~ .price {
  opacity: 0.3;
  position: relative;
}
.prices .newPrice ~ .price::before {
  content: "";
  position: absolute;
  top: -2%;
  left: 50%;
  width: 2px;
  height: 30px;
  transform: rotate(70deg);
  background-color: #000;
}
.prices .newPrice {
  color: #9e3737;
}

</style>