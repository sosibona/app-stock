<template>
  <div class="cards">
    <div class="portfolio-info" v-if="shares.length === 0">
      <h3>You dont have any products for sell</h3>
      <router-link to="/stocks"><el-button type="primary">Go to Stock</el-button></router-link>
    </div>
    <app-card v-else :key="product.id" v-for="product in shares" :card="product"></app-card>
  </div>
</template>

<script>
import Card from './Card'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'shares'
    ])
  },
  components: {
    appCard: Card
  }
}
</script>

<style scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  justify-content: space-evenly;
}

.portfolio-info {
  display: flex;
  flex-direction: column;
}

</style>
