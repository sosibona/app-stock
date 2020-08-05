<template>
  <div class="box-card">
    <div class="box-card__header">
      <div><b>{{card.name}}</b> - (price: {{card.price}}) - Quantity: {{card.quantity}}</div>
    </div>
    <div class="box-card__container">
      <el-input class="box-card__input" placeholder="Quantity" type="number" v-model="quantity"></el-input>
      <el-button type="warning" @click="sellProducts" :disabled="isCorrect">Sell</el-button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['card'],
  data () {
    return {
      quantity: ''
    }
  },
  computed: {
    isCorrect () {
      return this.quantity === '' || this.quantity === '0' || +this.quantity < 0 || +this.quantity % 1 !== 0 || +this.quantity > this.card.quantity
    }
  },
  methods: {
    sellProducts () {
      const sell = {
        quantity: this.quantity,
        productId: this.card.id,
        price: this.card.price
      }
      this.$store.dispatch('sellProducts', sell)
      this.quantity = ''
    }
  }
}
</script>

<style scoped>
.box-card {
  border-radius: 10px;
  margin-top: 30px;
  margin-right: 20px;
  width: 480px;
  height: 120px;
  background-color: #fff;
}

.box-card:hover {
  box-shadow: 1px 1px 1px 2px rgba(150, 150, 150, 0.2);
}

.box-card__header {
  height: 40px;
  text-align: left;
  background-color: #3aa5c266;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;
}

.box-card__header span {
  opacity: 1;
}

.box-card__container {
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.box-card__input {
  /* display: block; */
  width: 200px;
}

</style>
