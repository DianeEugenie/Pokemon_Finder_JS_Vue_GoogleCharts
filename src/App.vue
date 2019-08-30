<template lang="html">

</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      pokemons: {}
    }
  },
  mounted(){
    fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=964')
    .then(res => res.json())
    .then(data => this.pokemons = data.results)
  }

}
</script>

<style lang="css" scoped>
</style>
