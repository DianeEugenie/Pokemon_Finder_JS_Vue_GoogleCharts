<template lang="html">
  <div id="pokemon" @click="handleClick">
    {{pokemon.name}}
  </div>

</template>

<script>
import {eventBus} from '../main.js';

export default {
  name: 'list-item',
  props: ['pokemon'],
  methods: {
    handleClick() {
      eventBus.$emit('pokemon-selected', this.pokemon)
    }
  }
}
</script>

<style lang="css" scoped>
#pokemon {
  border: 1px solid lightseagreen;
  padding: 0.5em;
  display: flex;
  flex-direction: wrap;
  margin: 0.2em;
  width: 5em;
  align-items: center;
}

</style>
