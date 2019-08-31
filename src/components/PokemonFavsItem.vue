<template lang="html">
  <div id="fav-pokemon" @click="goToPokemon">
    {{ pokemon.name | capitalize }}
  </div>

</template>

<script>
import {eventBus} from '../main.js';

export default {
  name: 'fav-item',
  props: ['pokemon'],
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
</style>
