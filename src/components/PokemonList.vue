<template lang="html">
  <div id="list">
      <input text="text" v-model="searchedPokemon" @input="searchForPokemon" placeholder="Find Your Pokemon"/>
      <PokemonListItem v-for="(pokemon, index) of pokemons" :pokemon="pokemon" :key="index" />
  </div>
</template>

<script>
import {eventBus} from '../main.js';
import PokemonListItem from '@/components/PokemonListItem';

export default {
  name: 'pokemon-list',
  data() {
    return {
      searchedPokemon: ""
    }
  },
  props: ['pokemons'],
  components: {
    PokemonListItem
  },
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
#list {
  border: 3px double black;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 1em;
  justify-content: space-around;
  width: 20em;
  height: 30em;
  overflow: scroll;
}

#wrapper {
  display: flex;
  display: column;
}


</style>
