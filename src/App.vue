<template lang="html">
<div id="view">
  <h1>Gotta Catch 'em All!</h1>

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
#view {
  display: flex;
  flex-direction: column;
}

#main-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>
