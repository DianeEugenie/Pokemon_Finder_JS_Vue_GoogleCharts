<template lang="html">
<div class="">
  <PokemonListItem v-for="(pokemon, index) of pokemons" :pokemon="pokemon" :key="index"/>
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
</style>
