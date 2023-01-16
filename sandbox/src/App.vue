<script>
export default {
  data: () => ({
    pokedex: [1,2,3],
  }),
  methods: {
    async fetchPokemon(){
      this.pokedex = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50')
      .then(response => response.json())
    }
  },
  beforeCreate(){
    console.log('before create');
    console.log(this.pokedex);
  },
  created(){
    console.log('created ');
    this.fetchPokemon()
  }

}
</script>

<template>
<div>
  <h1>New APP</h1>
  <pre>{{ pokedex }}</pre>
  <div>
    <button @click="fetchPokemon"> Fetch Pokemon </button>
  </div>
</div>
</template>

<style>

</style>
