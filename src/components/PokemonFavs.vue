<template lang="html">
  <div id="favourites" v-if="this.favourites.length">
    <h4>My Favourites</h4>

    <PokemonFavsItem v-for="(pokemon, index) of this.favourites" :pokemon="pokemon" :key="index" />

  </div>

</template>

<script>
import PokemonFavsItem from '@/components/PokemonFavsItem'
import {eventBus} from '../main.js'

export default {
  name: 'pokemon-favs',
  props: ['favourites', 'pokemon'],
  components: {
    PokemonFavsItem
  },
  methods: {
    goToPokemon() {
      eventBus.$emit('pokemon-selected', this.pokemon)
    }
  },
  filters: {
    capitalize: function (value) {
      if (value) {
        return value.charAt(0).toUpperCase() + value.slice(1)
      }
    }
  }
}
</script>

<style lang="css" scoped>
#favourites {
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: 'Press Start 2P', cursive;
  text-shadow: 0 2px 5px #f5de2f;
}

#fav-pokemon {
  text-shadow: none;
}
</style>
