<template lang="html">
  <div id="main-list">
    <h2>Pokemonlist</h2>

    <div id="list">

      <PokemonListItem v-for="(pokemon, index) of pokemons" :pokemon="pokemon" :key="index" />
    </div>
  </div>
</template>

<script>
import PokemonListItem from '@/components/PokemonListItem';

export default {
  name: 'pokemon-list',
  props: ['pokemons'],
  components: {
    PokemonListItem
  }
}

</script>

<style lang="css" scoped>
#list {
  border: 3px double black;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0.5em;
  justify-content: space-between;
  overflow: scroll;
  color: #242f3b;
  font-family: 'Press Start 2P', cursive;
  min-width: 30em;
  max-width: 40em;
  min-height: 30em;
  max-height: 35em;
}

#main-list {
  display: flex;
  flex-direction: column;
}

h2 {
  text-align: center;
  font-family: 'Press Start 2P', cursive;
  color: #3b477d;
  text-shadow: 0 2px 5px #f5de2f;
}

.hidden {
  display: none;
}


</style>
