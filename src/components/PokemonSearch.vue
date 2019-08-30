<template lang="html">
  <div id="search-bar">
    <label for="searchbar">Pokemon Finder</label>
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
      for (let pokemon of this.pokemons) {
        if (pokemon.name.indexOf(this.searchedPokemon.toLowerCase()) > -1) {
          return eventBus.$emit('pokemon-selected', pokemon)
        }
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
input {
  padding: 1em;
  text-align: center;
  margin-top: 1em;
  border: 1px solid black;
  border-radius: 5px;
  font-family: 'Press Start 2P', cursive;
}
</style>
