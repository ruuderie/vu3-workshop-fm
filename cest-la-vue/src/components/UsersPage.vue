<script setup>
import UserCard from "./UserCard.vue";
import { defineProps } from "vue";
import { userList } from "../composables/useUserStore.js";

const props = defineProps({
  title: {
    type: String,
    default: "Users 2022"
  }
});

async function fetchUsers() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  ).then((response) => response.json());
  return response;
}
userList.value = await fetchUsers();
console.log(userList.value);
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <div>
      <ul>
        <UserCard
          v-for="user in userList"
          :user="user"
          :key="`user-${user.id}`"
        />
      </ul>
    </div>
  </div>
</template>
