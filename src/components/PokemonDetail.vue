<template lang="html">
  <div v-if="pokemon">
    <h2>{{pokemonDetails.name | upperCase }}</h2>

    <img src="" alt="">
  </div>

</template>

<script>
export default {
  name: 'pokemon-detail',
  props: ['pokemon'],
  data() {
    return {
      pokemonDetails: {}
    }
  },
  mounted(){
    this.fetchPokemon();
  },
  updated() {
    this.fetchPokemon();
  },
  methods: {
    fetchPokemon(){
      fetch(this.pokemon.url) // only fetches the first link of pokemon that is clicked
      .then(res => res.json())
      .then(data => this.pokemonDetails = data)
    }
  },
  filters: {
    upperCase: function (value) {
      if (!value) return ''
      return value.toUpperCase()
    }
  }
}
</script>

<style lang="css" scoped>
div {
  border: 1px solid black;
  width: 20em;
}
</style>
