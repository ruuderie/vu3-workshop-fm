<script setup>
import { computed, ref, reactive, defineProps, defineEmits } from "vue";
const emits = defineEmits(["change-region"]);
const props = defineProps({
  region: {
    type: String,
  },
});
const regionName = ref("kanto");
const pokedex = await fetch("https://pokeapi.co/api/v2/pokemon?limit=25").then(
  (response) => response.json()
);
const regionNameAllCaps = computed(() => {
  return regionName.value.toUpperCase();
});
const state = reactive({
  elementType: "Fire",
});
const elementTypeAllCaps = computed(() => {
  return state.elementType.toUpperCase();
});
const changeRegionName = () => {
  this.regionName = "Harkonen";
};
</script>

<template>
  <h2>{{ regionName }}</h2>
  <h2>{{ elementTypeAllCaps }}</h2>

  <h2>{{ regionNameAllCaps }}</h2>

  <button @click="changeRegionName">Change Region Name</button>

  <pre>{{ pokedex }}</pre>
</template>
