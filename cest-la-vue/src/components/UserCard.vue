<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <router-link :to="`/user/${user.name}`">
    <li :class="$style['user-card']">
      {{ user.name }}: {{ user.website }}
      >
    </li>
  </router-link>
</template>

<style module>
.user-card {
  border: 2px solid #222;
  padding: 10px;
}
</style>
