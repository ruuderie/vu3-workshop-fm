<script setup>
import BaseCounter from "@/components/base-counter.vue";
import UserCard from "@/components/user-card.vue";
import { ref, watch } from "vue";
import { useCount } from "@/composables/countStore";
import { useRouter } from "vue-router";
const colorPreference = ref("white");
const countStore = useCount();
const router = useRouter();
watch(countStore.globalCount, (newCount) => {
  // if value is greater than 1200 navigate to pokedex page (router.push)
  if (newCount > 1200) {
    router.push("/pokedex");
  }
});
</script>

<template>
  <div class="wrapper">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/pokedex"> Pokedex</router-link>
    </nav>
    <h2>{{ countStore.localCount }}</h2>
    <router-view />
    <h2>{{ colorPreference }}</h2>
    <input type="color" v-model="colorPreference" />
    <BaseCounter />
    <UserCard :user="{ name: 'Ben', food: 'Ramen' }" />
  </div>
</template>

<style>
html {
  background-color: papayawhip;
}

.wrapper {
  background-color: v-bind(colorPreference);
}

.button {
  border: 10px solid red !important;
}
</style>
