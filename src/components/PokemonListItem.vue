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
  },
  filters: {
    capitalize: function (value) {
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
}
</script>

<style lang="css" scoped>
#pokemon {
  box-shadow: 0 0 5px red;
  border-radius: 5px;
  padding: 1em 2em;
  margin: 0.5em;
  display: flex;
  justify-content: space-evenly;
  background-color: lightgrey;
  width: 8em;
}
#pokemon:hover {
  text-shadow: 0 0px 3px #f5de2f;
  box-shadow: 0 0 8px red;
}

</style>
