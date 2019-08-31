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
  border: 3px double #606d75;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0.5em;
  justify-content: space-between;
  overflow: scroll;
  color: #3b477d;
  font-family: 'Press Start 2P', cursive;
  min-width: 30em;
  max-width: 40em;
  min-height: 30em;
  max-height: 35em;
  background-color: #abbfcc;
  box-shadow: 1px 2px #242f3b;
}

#main-list {
  display: flex;
  flex-direction: column;
}

h2 {
  text-align: center;
  font-family: 'Press Start 2P', cursive;
  color: #303b6b;
  text-shadow: 0 2px #ffae0d;
}

.hidden {
  display: none;
}


</style>
