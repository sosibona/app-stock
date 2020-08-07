<template>
  <div class="info">
    <h1 class="info__title">Trade or View your portfolio</h1>
    <p>You may Save & Load your Data. Click on 'End Day' to begin a new Day!</p>
    <hr>
    <p><b>Your Wallet: ${{money | localeDisplayMoney}}</b></p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'money',
      'user'
    ])
  }
}

</script>

<style scoped>
.info {
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;
  text-align: left;
}

.info__title {
  margin: 0;
}

.info p {
  margin: 0;
  line-height: 2;
}
hr {
  border: 2px solid #e5e9f2;
}
</style>
