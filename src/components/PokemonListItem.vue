<template lang="html">
  <div class="" @click="handleClick">
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
</style>
