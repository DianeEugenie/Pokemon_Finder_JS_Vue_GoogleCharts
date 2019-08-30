<template lang="html">
  <div v-if="pokemon">
    {{pokemonDetailed.name}}
  </div>

</template>

<script>
export default {
  name: 'pokemon-detail',
  props: ['pokemon'],
  data() {
    return {
      pokemonDetailed: {}
    }
  },
  mounted() {
    fetch(this.pokemon.url)
    .then(res => res.json())
    .then(data => this.pokemonDetailed = data)
  }





}
</script>

<style lang="css" scoped>
</style>
