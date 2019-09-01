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
  }
}
</script>

<style lang="css" scoped>
#fav-pokemon {
  display: flex;
  flex-direction: row;
  text-shadow: none;
  padding: 0.5em;
  margin: 0 0.2em;
  border-radius: 5px;
  background-color: #d3dbe0;
  border: 1px solid grey;
  margin-bottom: 0.5em;
  color: #3b477d;
}

#fav-pokemon:hover {
  background-color: #e1e7eb;
  box-shadow: 0 0 2px black;
}
</style>
