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
.cards {
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  justify-content: space-evenly;
}

</style>
