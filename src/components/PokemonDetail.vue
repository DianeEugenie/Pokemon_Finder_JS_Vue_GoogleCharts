<template lang="html">
  <div v-if="pokemon">
    <h2> {{pokemonDetails.name | upperCase }}</h2>
    <img id="poke-pic">

    <h3>Abilities</h3>
    <span v-for="(ability, index) of abilities">{{ ability.name | capitalize }}</span>
    <h3>First Five Moves</h3>
    <span v-for="(move, index) of moves" v-if="index <= 5">{{ move.name | capitalize }}</span>
    <!-- <span>{{getAbilities()}}</span> -->


  </div>

</template>

<script>
export default {
  name: 'pokemon-detail',
  props: ['pokemon'],
  data() {
    return {
      pokemonDetails: {},
      abilities: [],
      moves: []
    }
  },
  mounted(){
    this.fetchPokemon();
  },
  updated() {
    this.fetchPokemon();
    document.getElementById("poke-pic").src = this.pokemonDetails.sprites['front_default']
  },
  methods: {
    fetchPokemon(){
      fetch(this.pokemon.url) // only fetches the first link of pokemon that is clicked
      .then(res => res.json())
      .then(data => {
      this.pokemonDetails = data;
      this.abilities = this.pokemonDetails.abilities.map(ability => ability['ability']);
      this.moves = this.pokemonDetails.moves.map(move => move['move'])

      })
    }
  },
  filters: {
    upperCase: function (value) {
      if (value) {
      return value.toUpperCase()
    }
    },
    capitalize: function (value) {
      if (value) {
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
    }
  }
}
</script>

<style lang="css" scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  width: 20em;
}
</style>
