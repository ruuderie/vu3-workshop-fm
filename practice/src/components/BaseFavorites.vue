<script>
import { onMounted, ref } from "vue";

export default {
  props: {
    favoriteStars: {
      type: Array,
      required: true
    }
  },
  data: () => {
    return {
      newStar: "",
    };
  },
  computed: {
    totalStarsInFavorite() {
      return this.favoriteStars.length;
    },
  },
};
</script>

<template>
  <div>
    <p>Total Favorites {{ totalStarsInFavorite }}</p>

    <ul>
      <li v-for="star in favoriteStars" :key="star">{{ star }}</li>
    </ul>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
