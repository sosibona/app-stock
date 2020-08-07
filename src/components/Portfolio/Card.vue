<template>
  <div class="box-card">
    <div class="box-card__header">
      <div><b>{{card.name}}</b> - (price: {{card.price}}) - quanity: {{card.quanity}}</div>
    </div>
    <div class="box-card__container">
      <div class="box-card__action">
        <el-input class="box-card__input" placeholder="quanity" type="number" v-model="quanity"></el-input>
        <div>
          <el-button type="warning" @click="sellProducts" :disabled="isCorrect">Sell</el-button>
          <el-button type="success" @click="maxQuanity">All</el-button>
        </div>
      </div>
      <span v-show="error" class="error-input">{{error}}</span>
    </div>
  </div>
</template>

<script>
import { isPositiveInteger } from '../../service/helper'

export default {
  props: ['card'],
  data () {
    return {
      quanity: '',
      error: ''
    }
  },
  computed: {
    isCorrect () {
      return isPositiveInteger(this.quanity) || this.quanity * this.card.price > this.money || this.quanity > this.card.quanity
    },
    money () {
      return this.$store.getters.money
    }
  },
  watch: {
    quanity () {
      if (!Number.isInteger(+this.quanity)) {
        this.error = 'quanity must be a integer number'
      } else if (this.quanity === '') {
        this.error = ''
      } else if (+this.quanity <= 0) {
        this.error = 'quanity must be a positive number'
      } else if (+this.quanity > this.card.quanity) {
        this.error = 'you don\'t have enough'
      } else {
        this.error = ''
      }
    }
  },
  methods: {
    sellProducts () {
      const sell = {
        quanity: this.quanity,
        productId: this.card.id,
        price: this.card.price
      }
      this.$store.dispatch('sellProducts', sell)
      this.quanity = ''
    },
    maxQuanity () {
      this.quanity = this.card.quanity
    }
  }
}
</script>

<style scoped>
.box-card__action {
  display: flex;
  line-height: 2;
  justify-content: space-between;
  width: 90%;
}
.box-card {
  border-radius: 10px;
  margin-right: 20px;
  margin-bottom: 30px;
  width: 480px;
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
  align-items: center;
  padding-left: 20px;
}

.box-card__header span {
  opacity: 1;
}

.box-card__container {
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.box-card__input {
  width: 200px;
}
.error-input {
  color: red;
  line-height: 2;
}

</style>
