<template>
  <div class="w-full text-center mt-2 mx-auto flex justify-center">
    <ul class="flex">
      <li
        v-if="currentPage > 1"
        class="
          border border-black
          rounded
          cursor-pointer
          p-1
          mr-1
          bg-blue-400
          hover:bg-blue-700
        "
      >
        <a href="#" @click="fetchData(currentPage - 1)">Prev</a>
      </li>
      <li
        v-for="(page, index) in pages"
        :key="index"
        class="
          border border-black
          rounded
          cursor-pointer
          p-1
          mr-1
          bg-blue-400
          hover:bg-blue-700
        "
      >
        <a
          href="#"
          :class="currentPage === page ? 'text-white' : 'text-black'"
          @click="fetchData(page)"
        >
          {{ page }}
        </a>
      </li>
      <li
        v-if="currentPage < totalPage"
        class="
          border border-black
          rounded
          cursor-pointer
          p-1
          bg-blue-400
          hover:bg-blue-700
        "
      >
        <a href="#" @click="fetchData(currentPage + 1)">Next</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Pagination",
  methods: {
    ...mapActions(["fetchData"]),
  },
  computed: {
    ...mapGetters({
      totalPage: "getTotalPage",
      currentPage: "getCurrentPage",
    }),
    pages() {
      const arr = [...Array(this.totalPage).keys()].map((i) => i + 1);
      return arr;
    },
  },
};
</script>