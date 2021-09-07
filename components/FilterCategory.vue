<template>
  <div class="mt-8 mb-4 flex justify-content w-10/12 mx-auto">
    <div class="w-1/2 flex mr-8">
      <label class="mr-1">Search:</label>
      <input @change="searchData($event)" class="w-full" />
    </div>
    <div class="w-1/4 flex mr-4">
      <label class="mr-1">Filter by Category:</label>
      <select @change="filterData($event)" class="w-1/2">
        <option value=""></option>
        <option v-for="(item, index) in categories" :key="index" :value="item">
          {{ item }}
        </option>
      </select>
    </div>
    <div class="w-1/4 flex">
      <label class="mr-1">Sort by: </label>
      <select @change="sortData($event)" class="w-1/2">
        <option value=""></option>
        <option value="price">Price</option>
        <option value="sizes">Sizes</option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "FilterCategory",
  methods: mapActions(["searchData", "filterData", "sortData"]),
  computed: {
    ...mapGetters({
      categories: "getCategories",
    }),
  },
};
</script>