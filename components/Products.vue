<template>
  <div class="container mt-8 px-8 pb-6 bg-red-50 mx-auto">
    <h2 class="text-red-400 flex justify-center pt-4 text-3xl font-semibold">
      Products
    </h2>
    <FilterCategory />
    <ProductList />
    <Pagination />
  </div>
</template>

<script>
import FilterCategory from "./FilterCategory.vue";
import ProductList from "./ProductList.vue";
import Pagination from "./Pagination.vue";

export default {
  name: "Products",
  components: {
    FilterCategory,
    ProductList,
    Pagination,
  },
};
</script>