<template lang="html">
  <div id="favourites" v-if="this.favourites.length">
    <h4>My 10 Favourites</h4>

    <div id="fav-list">

      <PokemonFavsItem v-for="(pokemon, index) of this.favourites" :pokemon="pokemon" :key="index" />

    </div>
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
  text-shadow: 0 2px #ffae0d;
  margin: 1em 5em;
  box-shadow: 1px 2px #242f3b;
  border: 2px groove grey;
  background-color: #abbfcc;
}

#fav-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

h4 {
  color: #303b6b;
}




</style>
