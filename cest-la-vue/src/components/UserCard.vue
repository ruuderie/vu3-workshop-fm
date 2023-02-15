<script>
import {useItemTypeStore} from "@/stores/ItemTypeStore";

export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const itemType = useItemTypeStore();
    return {
      itemType,
    };
  },
};
</script>

<template>
  <h2>{{ itemType.type }}</h2>
  <li :class="$style['user-card']">
    <router-link :to="`/user/${user.name}`"
      >{{ user.name }}: {{ user.website }}</router-link
    >
  </li>
</template>

<style module>
.user-card {
  border: 2px solid #222;
  padding: 10px;
}
</style>
