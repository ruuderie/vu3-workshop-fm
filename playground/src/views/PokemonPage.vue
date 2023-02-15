<script setup>
import { useRoute } from "vue-router";
const router = useRoute();
console.log(router.params.id);
</script>

<template>
    <h1>Pokemon #{{ router.params.id }}</h1>
</template>

<style>
</style>