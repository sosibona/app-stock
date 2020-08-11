<template>
<el-row v-if="isUserLogIn">
  <el-menu :default-active="'1'" class="el-menu-demo" mode="horizontal">
    <el-menu-item index="2" @click="endDay">End Day</el-menu-item>
    <el-menu-item index="3" @click="saveData">Save Data</el-menu-item>
    <el-menu-item index="4" @click="onLogOutUser">LogOut</el-menu-item>
    <span class="action-money"><b>Founds:</b> ${{money | localeDisplayMoney}}</span>
  </el-menu>
</el-row>
</template>

<script>
import { getData, updateData } from '../../service/api'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'money',
      'isUserLogIn',
      'allProducts',
      'shares',
      'userEmail'
    ])
  },
  methods: {
    endDay () {
      this.$store.dispatch('changePrice')
    },
    onLogOutUser () {
      this.$store.dispatch('logOut')
      // .then(() => {
      //   this.$router.push('/login')
      // })
      // .catch(() => {})
    },
    saveData () {
      console.log('saveData')
      const data = {
        money: this.money,
        portfolio: this.shares,
        stocks: this.allProducts,
        email: this.userEmail
      }
      updateData(data)
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
