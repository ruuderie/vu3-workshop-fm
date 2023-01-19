<script setup>
import { defineProps } from "vue";
defineProps({
  user: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <li class="user-card">
    <h2>{{ user.name }}</h2>
    <p>Username: {{ user.username }}</p>
    <p>Email: {{ user.email }}</p>
    <p>
      Address: {{ user.address.street }} {{ user.address.suite }},
      {{ user.address.city }} {{ user.address.zipcode }}
    </p>
    <p>
      Latitude: {{ user.address.geo.lat }},
    </p>
    <p>      
      Longitude: {{ user.address.geo.lng }}
    </p>
    <p>Phone: {{ user.phone }}</p>
    <p>Website: {{ user.website }}</p>
    <p>Company: {{ user.company.name }}</p>
    <p>Catchphrase: {{ user.company.catchPhrase }}</p>
    <p>BS: {{ user.company.bs }}</p>
  </li>
</template>

<style>
.user-card {
  border: 3px solid #222;
  padding: 10px;
}
</style>
