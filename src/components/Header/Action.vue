<template>
<el-row v-if="user">
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
    <el-menu-item index="2" @click="endDay">End Day</el-menu-item>
    <el-submenu index="3">
      <template slot="title">Save&Load</template>
      <el-menu-item index="3-1" @click="saveData">Save Data</el-menu-item>
      <el-menu-item index="3-2" @click="loadData">Load Data</el-menu-item>
    </el-submenu>
    <el-menu-item index="4" @click="onLogOutUser">LogOut</el-menu-item>
    <span class="action-money"><b>Founds:</b> ${{money | localeDisplayMoney}}</span>
  </el-menu>
</el-row>
</template>

<script>
import { savedData, getData } from '../../service/api'

export default {
  data () {
    return {
      activeIndex: '1'
    }
  },
  computed: {
    money () {
      return this.$store.getters.money
    },
    user () {
      return this.$store.getters.user
    },
    stocks () {
      return this.$store.getters.allProducts
    },
    shares () {
      return this.$store.getters.shares
    }
  },
  methods: {
    endDay () {
      this.$store.dispatch('changePrice')
    },
    onLogOutUser () {
      this.$store.dispatch('logOutUser')
        .then(() => {
          this.$router.push('/login')
        })
        .catch(() => {})
    },
    saveData () {
      const data = {
        money: this.money,
        portfolio: this.shares,
        stocks: this.stocks,
        userId: this.user.id
      }
      savedData(data)
    },
    loadData () {
      getData().then(response => {
        if (!response.data) return
        this.$store.dispatch('setLoadData', response.data)
      })
    }
  }
}
</script>

<style scoped>
.end-day {
  margin-right: 10px;
}
</style>
