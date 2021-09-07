<template>
  <div>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-2 mx-8">
      <div v-for="item in data" :key="item.id">
        <Product :product="item" :removeFavourite="removeFavourite" />
      </div>
    </div>
  </div>
</template>

<script>
import Product from "./Product.vue";

export default {
  name: "Favourites",
  components: {
    Product,
  },
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    const favourite = JSON.parse(window.localStorage.getItem("favourite"));
    const data = favourite ? favourite : [];
    this.data = data;
  },
  methods: {
    removeFavourite(item) {
      let favourites = JSON.parse(window.localStorage.getItem("favourite"));
      if (!favourites) favourites = [];
      const temp = favourites.filter((product) => product.name != item.name);
      window.localStorage.setItem("favourite", JSON.stringify(temp));
      this.data = temp;
    },
  },
};
</script>