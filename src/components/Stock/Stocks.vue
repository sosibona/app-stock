<template>
  <div class="cards">
    <app-card :key="card.id" v-for="card in allProducts" :card="card"></app-card>
  </div>
</template>

<script>
import Card from './Card'

export default {
  components: {
    appCard: Card
  },
  computed: {
    allProducts () {
      return this.$store.getters.allProducts
    }
  }
}
</script>

<style scoped>
.sort-stock {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.sort-stock-item {
  margin-right: 10px;
}

.sort-stock-item:hover {
  text-decoration: underline;
  cursor: pointer;
}

.sort-stock-item:first-child {
  cursor: default;
}

.sort-stock-item:first-child:hover {
  text-decoration: none;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  justify-content: space-evenly;
}

</style>
