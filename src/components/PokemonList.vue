<template lang="html">
<div id="list">
  <PokemonListItem v-for="(pokemon, index) of pokemons" :pokemon="pokemon" :key="index" />
</div>
</template>

<script>
import PokemonListItem from '@/components/PokemonListItem'

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
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 1em;
  justify-content: space-around;
  width: 20em;
  height: 30em;
  overflow: scroll;
}


</style>
