<template>
  <div>
    <div
      class="
        border border-gray-300
        rounded
        bg-white
        text-center
        relative
        h-40
        sm:h-44
        md:h-52
      "
    >
      <img :src="product.image" alt="image" class="h-full w-full" />
      <div
        class="
          absolute
          bottom-0
          mx-auto
          bg-black bg-opacity-70
          text-white
          w-full
        "
      >
        <p>
          {{ product.name }}
        </p>
        <p>${{ product.price.toFixed(2) }}</p>
      </div>
    </div>
    <button
      v-if="favourite"
      class="text-white bg-blue-500 w-full mx-auto py-1"
      @click="removeFavourite(product)"
    >
      Remove
    </button>
    <button
      v-else
      class="text-white bg-blue-500 w-full mx-auto py-1"
      @click="addFavourite(product)"
    >
      Add to Favourite
    </button>
  </div>
</template>

<script>
// import { mapActions } from "vuex";

export default {
  name: "Product",
  props: ["product", "removeFavourite"],
  computed: {
    favourite: function () {
      return this.$route.path.includes("favourite");
    },
  },
  methods: {
    // ...mapActions(["addFavourite", "removeFavourite"]),
    addFavourite(item) {
      let sign = false;
      let temp = JSON.parse(window.localStorage.getItem("favourite"));
      if (!temp) temp = [];
      temp.forEach((product) => {
        if (product.name === item.name) sign = true;
      });
      if (!sign) temp.push(item);
      window.localStorage.setItem("favourite", JSON.stringify(temp));
    },
  },
};
</script>