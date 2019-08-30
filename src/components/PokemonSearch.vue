<template lang="html">
  <div id="search-bar">
    <label for="searchbar">Find Your Pokemon</label>
    <input id="searchbar" type="text" v-model="searchedPokemon" @input="searchForPokemon" placeholder="Find Your Pokemon">
  </div>
</template>

<script>
import {eventBus} from '../main.js'
export default {
  name:'pokemon-search',
  data() {
    return {
      searchedPokemon: ""
    }
  },
  props: ['pokemons'],
  methods: {
    searchForPokemon() {
      this.searchedPokemon = this.pokemons.find((pokemon) => {
      return pokemon.name.indexOf(this.searchedPokemon.toLowerCase()) > -1
      });
      eventBus.$emit('pokemon-selected', this.pokemon)
    }
  },
  filters: {
    capitalize: function (value) {
      if (value) {
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
    }
  }
}
</script>

<style lang="css" scoped>
#search-bar {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
