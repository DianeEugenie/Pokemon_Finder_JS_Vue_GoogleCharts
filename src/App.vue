<template lang="html">
<div id="view">
  <h1>Gotta Find 'em All!</h1>

  <PokemonSearch :pokemons="pokemons"/>

  <PokemonFavs :favourites="favourites" :pokemon="selectedPokemon" />

  <div id="main-container">
    <PokemonList :pokemons="pokemons"/>
    <PokemonDetail v-if="selectedPokemon" :pokemon="selectedPokemon" :favourites="favourites"/>
  </div>


</div>
</template>

<script>
import PokemonList from '@/components/PokemonList';
import PokemonDetail from '@/components/PokemonDetail';
import PokemonSearch from '@/components/PokemonSearch';
import PokemonFavs from '@/components/PokemonFavs';
import {eventBus} from './main.js';

export default {
  name: 'app',
  data() {
    return {
      pokemons: [],
      selectedPokemon: null,
      favourites: []
    }
  },
  mounted(){
    fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=964')
    .then(res => res.json())
    .then(data => this.pokemons = data.results)

    eventBus.$on('pokemon-selected', (pokemon) => {
      this.selectedPokemon = pokemon;
    })

    eventBus.$on('pokemon-favourited', (pokemon) => {
      if (this.favourites.length < 10) {this.favourites.push(pokemon) };
    })

    eventBus.$on('pokemon-defavourited', (pokemon) => {
    let index = this.favourites.indexOf(pokemon);
      this.favourites.splice(index, 1) }
    )

  },
  components: {
    PokemonList,
    PokemonDetail,
    PokemonSearch,
    PokemonFavs
  }

}
</script>

<style lang="css" scoped>
h1 {
  display: flex;
  justify-content: center;
  color: #3b477d;
  text-shadow: 0 2px 5px #f5de2f;
  /* font-family: 'Bangers', cursive; */
  font-family: 'Press Start 2P', cursive;
  /* font-family: 'Carter One', cursive; */
}

#view {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: stretch;
  background-color: #8aaabf;
  margin: 0;
  padding: 0;
}

#main-container {
  margin-top: 2em;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: stretch;
}



</style>
