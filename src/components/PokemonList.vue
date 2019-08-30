<template lang="html">
  <div id="main-list">

    <div id="list">
      <h2>Pokemonlist</h2>
      <PokemonListItem v-for="(pokemon, index) of pokemons" :pokemon="pokemon" :key="index" />
    </div>
  </div>
</template>

<script>
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
  }
}

</script>

<style lang="css" scoped>
#list {
  border: 3px double black;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0.5em;
  justify-content: space-around;
  width: 30em;
  height: 30em;
  overflow: scroll;
}

#main-list {
  border: 1px solid black;
  display: flex;
  flex-direction: column;
}
h2 {
  padding: 0 10em;
  font-family: 'Press Start 2P', cursive;
}


</style>
