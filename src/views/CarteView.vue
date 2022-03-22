<template>
  <div class="content-container">
    <h2>Karte</h2>
    <!-- <p class="content-text"> -->
      <!-- auf den Store zugreifen -->
      <div class="content-text" v-for="drink in $store.getters.getDrinks" :key="drink.id" >
        <h4>{{ drink.name }}</h4>
        <h6>{{ drink.preis }}</h6>
        <div style="clear:both;"></div>

      </div>
    <!-- </p> -->

  </div>
</template>

<style scoped>

h4 {
  /* display: inline; */
  float: left;
  /* margin-bottom: 0; */
  
}

h6 {
  /* display: inline; */
  float: right;
  /* text-align: right;
  margin: 0 0; */
}

.content-text {
  font-family: 'Open', sans-serif;
}
</style>