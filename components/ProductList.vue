<template>
  <div>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-2 mx-8">
      <div v-for="item in data" :key="item.id">
        <Product :product="item" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Product from "./Product.vue";

export default {
  name: "ProductList",
  components: {
    Product,
  },
  methods: {
    ...mapActions(["fetchData"]),
  },
  computed: {
    ...mapGetters({
      data: "getProducts",
    }),
  },
  created() {
    this.fetchData(1);
  },
};
</script>