<template lang="html">
  <div id="pokemon" @click="handleClick">
    {{pokemon.name | capitalize}}
  </div>

</template>

<script>
import {eventBus} from '../main.js';

export default {
  name: 'list-item',
  props: ['pokemon'],
  data() {
    return {
      searchedPokemon: ""
    }
  },
  methods: {
    handleClick() {
      eventBus.$emit('pokemon-selected', this.pokemon)
    }
  }
}
</script>

<style lang="css" scoped>
#pokemon {
  border: 1px solid grey;
  border-radius: 5px;
  padding: 1em 2em;
  margin: 0.5em;
  display: flex;
  justify-content: space-evenly;
  background-color: #d3dbe0;
  width: 7em;
  font-size: 0.8em;
}
#pokemon:hover {
  box-shadow: 0 0 2px black;
  background-color: #e1e7eb;
}

</style>
