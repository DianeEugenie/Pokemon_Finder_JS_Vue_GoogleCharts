<template lang="html">
  <div id="favourites">
    <h2>My Favourites</h2>

    <div class="">

    </div>

  </div>

</template>

<script>
export default {
  name: 'pokemon-favs',
  props: ['favourites']
}
</script>

<style lang="css" scoped>
#favourites {
  display: flex;
  justify-content: center;
}
</style>
