<template>
<!-- <span>${{ money | localeDisplayMoney }}</span> -->
<el-row>
  <el-button class="end-day" @click="endDay">End Day</el-button>
  <span class="action-money">Founds: ${{money | localeDisplayMoney}}</span>
</el-row>
  <!-- <el-menu class="el-menu-demo" mode="horizontal">
    <el-menu-item>End day</el-menu-item>
    <el-submenu>
      <template slot="title">Save & Load</template>
      <el-menu-item>Save data</el-menu-item>
      <el-menu-item>Load data</el-menu-item>
    </el-submenu>
  </el-menu> -->
</template>

<script>
export default {
  computed: {
    money () {
      return this.$store.getters.money
    }
  },
  methods: {
    endDay () {
      console.log('1')
      this.$store.dispatch('changePrice')
    }
  }
}
</script>

<style scoped>
.end-day {
  margin-right: 10px;
}
</style>
