<template lang="html">
  <div id="fav-pokemon" @click="goToPokemon">
    {{pokemon.name }}
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
  }
}
</script>

<style lang="css" scoped>
</style>
