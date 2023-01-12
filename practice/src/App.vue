<script>
import BaseFavorites from "./components/BaseFavorites.vue";

export default {
  components: { BaseFavorites },
  data: () => {
    return {
      title: "Hello it works",
      favoriteStars: [],
      listOfFilms: [
        {
          name: "Terminator 2",
          director: "James Cameron",
          year: "1992",
          stars: [
            {
              name: "arnold schwarzenegger",
              age: 38,
            },
            {
              name: "linda hamilton",
              age: 32,
            },
          ],
        },
        {
          name: "Once Upon a Time in Hollywood",
          director: "Quentin Tarantino",
          year: "2020",
          stars: [
            {
              name: "Brad Pitt",
              age: 34,
            },
            {
              name: "Leonardo DiCaprio",
              age: 39,
            },
          ],
        },
        {
          name: "Wolf of Wall Street",
          director: "Martin Scorcese",
          year: "2013",
          stars: [
            {
              name: "Leonardo DiCaprio",
              age: 32,
            },
            {
              name: "Jonah Hill",
              age: 28,
            },
          ],
        },
        {
          name: "Children of Men",
          director: "Alfonso Cuaron",
          year: "2006",
          stars: [
            {
              name: "Owen Wilson",
              age: 40,
            },
          ],
        },
        {
          name: "Fifth Element",
          director: "Luc Besson",
          year: "1997",
          stars: [
            {
              name: "Bruce Willis",
              age: 32,
            },
            {
              name: "Mila Jovovich",
              age: 24,
            },
          ],
        },
      ],
    };
  },
  methods: {
    addToFavorites(star) {
      console.log(star);
      this.favoriteStars.push(star);
    },
    addStar() {
      this.favoriteStars.push(this.newStar);
      this.newStar = "";
    },
  },
  computed: {
    totalFilms() {
      return this.listOfFilms.length;
    },
  },
};
</script>

<template>
  <div>
    <h1 v-if="listOfFilms.length > 0">{{ title }}</h1>
    <h1 v-else>Films I like</h1>
    <div class="" role="group">
      <p>Total Films: {{ totalFilms }}</p>
      <form @submit.prevent="addStar">
      <label>
        Enter the name of your favorite star:
        <input type="text" v-model="newStar" />
      </label>
      <button type="submit">Add Star</button>
    </form>
      <base-favorites :favoriteStars="favoriteStars" />
      <ul>
        <li
          v-for="(film, index) in listOfFilms"
          v-bind:currentFilm="film"
          :key="`item-${index}`"
        >
          <h1
            class="ipc-lockup-overlay ipc-focusable"
            aria-label="View title page for {{list.name}}"
          >
            {{ film.name }}
          </h1>
          <h3>{{ film.director }}</h3>
          <h3>{{ film.year }}</h3>
          <ul>
            <li v-for="(star, index) in film.stars" :key="`item-${index}`">
              <p>{{ star.name }}</p>
              <p>{{ star.age }}</p>

              <button id="addToFavorites" @click="addToFavorites(star)">
                Add to Favorite
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
