<script setup>
import { useRoute } from "vue-router";
const router = useRoute();

console.log(router.params.id);
const userName = router.params.id;
</script>

<template>
    <center>
        <h1> {{userName}} </h1>
    </center>
</template>