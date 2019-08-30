<template lang="html">
<div id="view">
  <h1>Gotta Find 'em All!</h1>

  <div id="main-container">
    <PokemonList :pokemons="pokemons"/>
    <PokemonDetail v-if="selectedPokemon" :pokemon="selectedPokemon"/>
  </div>

</div>
</template>

<script>
import PokemonList from '@/components/PokemonList';
import PokemonDetail from '@/components/PokemonDetail';
import {eventBus} from './main.js';

export default {
  name: 'app',
  data() {
    return {
      pokemons: [],
      selectedPokemon: null
    }
  },
  mounted(){
    fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=964')
    .then(res => res.json())
    .then(data => this.pokemons = data.results)

    eventBus.$on('pokemon-selected', (pokemon) => {
      this.selectedPokemon = pokemon
    })
  },

  components: {
    PokemonList,
    PokemonDetail
  }

}
</script>

<style lang="css" scoped>
h1 {
  display: flex;
  justify-content: center;
}

#view {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: stretch;
}

#main-container {
  margin-top: 2em;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

</style>
