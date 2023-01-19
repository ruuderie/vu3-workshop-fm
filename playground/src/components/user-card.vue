<script>
import { newCount } from "../composables/countStore";
export default {
  setup() {
    return {
      newCount,
    };
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  emits: ["change-name"],
  methods: {
    tellParentChangeName() {
      this.$emit("change-name");
    },
  },
};
</script>

<template>
  <h2>New Count in UserCard: {{ newCount }}</h2>
  <h1>User: {{ user.name }}</h1>
  <p>Favorite Food: {{ user.food }}</p>
  <button @click="tellParentChangeName">Change Name</button>
</template>
