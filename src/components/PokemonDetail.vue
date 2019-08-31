<template lang="html">
  <div class="main" v-if="pokemon">

    <h3>Your Pokemon Is...</h3>
    <h2> {{pokemonDetails.name | upperCase }}</h2>

    <div class="main-details">

      <div class="name-type">
        <h4>In The Wild</h4>
        <img v-for="(value, key) in sprites" :src="value" v-if="value !== null && key === 'front_default' || key === 'front_shiny'">
        <h4>Type</h4>
        <span v-for="(type, index) of types">{{ type.name | capitalize }}</span>
      </div>

      <div class="abilities-moves">
        <h4>Abilities</h4>
        <span v-for="(ability, index) of abilities">{{ ability.name | capitalize }}</span>

        <h4>Moves</h4>
        <span v-for="(move, index) of moves" v-if="index <= 5">{{ move.name | capitalize }}</span>
      </div>

    </div>

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
      moves: [],
      types: [],
      sprites: {}
    }
  },
  mounted(){
    this.fetchPokemon();
  },
  updated() {
    this.fetchPokemon();
  },
  methods: {
    fetchPokemon(){
      fetch(this.pokemon.url) // only fetches the first link of pokemon that is clicked
      .then(res => res.json())
      .then(data => {
      this.pokemonDetails = data;
      this.abilities = this.pokemonDetails.abilities.map(ability => ability['ability']);
      this.moves = this.pokemonDetails.moves.map(move => move['move']);
      this.types = this.pokemonDetails.types.map(type => type['type']);
      this.sprites = this.pokemonDetails['sprites']

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
div.main {
  padding-top: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 30em;
  max-width: 40em;
  min-height: 30em;
  max-height: 35em;
  justify-content: flex-start;
}

.main-details {
  display: flex;
  flex-direction: row;
  border: 3px double black;
  border-radius: 5px;
  align-items: flex-start;
  justify-content: space-between;
  color: #242f3b;
}

.name-type, .abilities-moves {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 0.5em;
  margin: 0.5em;
  font-family: 'Press Start 2P', cursive;
}

h4 {
  text-align: center;
  margin-top: 0;
  margin-bottom: 0.5em;
  border: 1px solid black;
  padding: 0.2em;
  border-radius: 5px;
  font-family: 'Press Start 2P', cursive;
  color: #3b477d;
  text-shadow: 0 2px 5px #f5de2f;
}
h3, h2{
  margin-top: 0.5em;
  font-family: 'Press Start 2P', cursive;
  color: #3b477d;
  text-shadow: 0 2px 5px #f5de2f;
}

img {
  height: 96px;
  width: 96px;
}
span {
  margin: 0.2em;
}
</style>
