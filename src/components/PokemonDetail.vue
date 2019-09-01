<template lang="html">
  <div class="main" v-if="pokemon">

    <h3>Your Pokemon Is...</h3>
    <h2> {{pokemonDetails.name | upperCase }}</h2>

    <div class="main-column">

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



          <p v-if="this.favourites.includes(pokemon)">One of your Favs!</p>


          <p v-if="this.favourites.length === 10 && !this.favourites.includes(pokemon)">You already have 10 Favs!</p>
        </div>



      </div>
      <button type="button" @click="addToFavs" v-if=" this.favourites.length < 10 && !this.favourites.includes(pokemon) ">My Favourite!</button>

      <button type="button" @click="removeFromFavs" v-if="this.favourites.includes(pokemon) ">Remove From Favourites</button>

    </div>

    <div id="pokeChart">
      <GChart v-if="statData"
      type="ColumnChart"
      :data="statData"
      :options="chartOptions"
      />
    </div>

  </div>

</template>

<script>
import { GChart } from 'vue-google-charts';
import {eventBus} from '../main.js';


export default {
  name: 'pokemon-detail',
  data() {
    return {
      pokemonDetails: {},
      abilities: [],
      moves: [],
      types: [],
      sprites: {},
      stats: [],
      statNames: [],
      statData: [],
      chartOptions: {
        width: 600,
        height: 160,
        title: 'Your Pokemon Stats!',
        titleTextStyle: {
          color: '#303b6b',
          fontName: 'Press Start 2P',
          fontSize: 9
        },
        colors: ['#abbfcc'],
        fontName: 'sans-serif',
        fontSize: 11,
        backgroundColor: '#d3dbe0',
        bar: {groupWidth: "30%"},
        legend: {position: "none"},
        hAxis: {
          textStyle: {color: '#303b6b'}
        },
        vAxis: {
          textStyle: {color: '#303b6b'}
        },
        explorer: {
          axis: 'horizontal',
          keepInBounds: true
        }
      }

      }
    },
  props: ['pokemon', 'favourites'],
  components: {
    GChart
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
        this.sprites = this.pokemonDetails['sprites'];
        this.stats = this.pokemonDetails.stats.map(stat => stat['base_stat']);
        this.statNames = this.pokemonDetails.stats.map(stat => stat.stat['name']);
        let newData = [['Stat Name', 'Value']];
        for (var i = 0; i < this.statNames.length; i++) {
          newData.push([this.statNames[i], this.stats[i]]);
        };
        this.statData = newData})
      },

    addToFavs() {
      eventBus.$emit('pokemon-favourited', this.pokemon);
    },
    removeFromFavs() {
      eventBus.$emit('pokemon-defavourited', this.pokemon);
    }
  },
  filters: {
    upperCase: function (value) {
      if (value) {
        return value.toUpperCase();
      }
    },
    capitalize: function (value) {
      if (value) {
        return value.charAt(0).toUpperCase() + value.slice(1);
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
  max-height: 45em;
  justify-content: flex-start;
  font-family: 'Press Start 2P', cursive;
}


.main-details {
  display: flex;
  flex-direction: row;
  border: 3px double #606d75;
  border-radius: 5px;
  align-items: flex-start;
  justify-content: space-around;
  color: #303b6b;
  background-color: #abbfcc;
  box-shadow: 1px 2px #242f3b;
}
.main-column {
  display: flex;
  flex-direction: column;
  width: 35em;
  align-items: center;
}

.name-type, .abilities-moves {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 0 0.5em;
  margin: 0.5em;
}

h4 {
  text-align: center;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  border: 1px solid #606d75;
  padding: 0.2em;
  border-radius: 5px;
  color: #3b477d;
  background-color: #d3dbe0;
}
h3, h2{
  margin-top: 0.5em;
  color: #303b6b;
  text-shadow: 0 2px #ffae0d;
}

img {
  height: 96px;
  width: 96px;
}
span {
  margin: 0.2em;
}

button {
  margin-top: 1em;
  font-family: 'Press Start 2P', cursive;
  padding: 1em;
  border: 1px solid #606d75;
  box-shadow: 1px 4px #606d75;
  border-radius: 5px;
  color: #303b6b;
}

button:hover {
  background-color: #e1e7eb;

}

button:active {
  box-shadow: 1px 1px #606d75;
  transform: translateY(3px);
}

p {
  color: #303b6b;
  text-shadow: 0 2px #ffae0d;
}

#pokeChart {
  margin-top: 1em;
  /* display: flex; */
  max-width: 33em;
  overflow-x: hidden;
  border: 3px double #606d75;
}
</style>
