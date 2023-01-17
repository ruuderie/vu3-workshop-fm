<script>
import UserCard from "./UserCard.vue";
import { reactive } from "vue";
export default {
  components: {
    UserCard,
  },
  async setup() {
    const state = reactive({
      users: [],
    });
    const pageName = "Users";
    async function fetchUsers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      ).then((response) => response.json());
      return response;
    }
    state.users = await fetchUsers();
    return {
      pageName,
      state,
      fetchUsers,
    };
  },
};
</script>

<template>
  <div>
    <h1>{{ pageName }}</h1>
    <div>
      <ul>
        <UserCard
          v-for="user in state.users"
          :user="user"
          :key="`user-${user.id}`"
        />
      </ul>
    </div>
  </div>
</template>
