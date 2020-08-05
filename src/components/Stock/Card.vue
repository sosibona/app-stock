<template>
  <div class="box-card">
    <div class="box-card__header">
      <div><b>{{card.name}}</b> - (price: {{card.price}})</div>
    </div>
    <div class="box-card__container">
      <el-input class="box-card__input" placeholder="Quantity" type="number" v-model="quantity"></el-input>
      <div class="box-card__action">
        <el-button type="success" @click="buyProducts" :disabled="isCorrect">Buy</el-button>
        <el-button type="warning" @click="maxQuantity">Max</el-button>
      </div>
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
      return this.quantity === '' || this.quantity === '0' || +this.quantity < 0 || +this.quantity % 1 !== 0
    },
    money () {
      return this.$store.getters.money
    }
  },
  methods: {
    buyProducts () {
      if (this.quantity * this.card.price > this.money) return
      const order = {
        quantity: +this.quantity,
        productId: this.card.id,
        price: this.card.price
      }
      this.$store.dispatch('buyProducts', order)
      this.quantity = ''
    },
    maxQuantity () {
      const maxQuantity = Math.trunc(this.money / this.card.price)
      this.quantity = maxQuantity
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
  background-color: #67c23a66;
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
  width: 200px;
}

</style>
