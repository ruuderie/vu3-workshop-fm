<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();
const email = ref("");
const login = () => {
  console.log(email.value);
  if (email.value.includes("@")) {
    console.log("valid user");
    router.push("/user")
  } else {
    console.log("invalid user");
  }
};
</script>

<template>
  <main>
    <h1>Login</h1>
    <label for="email">Email</label>
    <input type="email" v-model="email"/>
    <button @click="login">Continue with email</button>
  </main>
</template>

<style></style>
