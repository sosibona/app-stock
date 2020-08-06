<template>
  <el-menu
    class="el-menu-demo"
    mode="horizontal"
  >
    <template v-if="user">
      <el-menu-item index><router-link tag="li" to="/" exact active-class="active" >Home</router-link></el-menu-item>
      <el-menu-item index><router-link tag="li" to="/portfolio" active-class="active">Portfolio</router-link></el-menu-item>
      <el-menu-item index><router-link tag="li" to="/stocks" active-class="active">Stocks</router-link></el-menu-item>
      <el-menu-item index>Log out</el-menu-item>
    </template>
    <template v-else>
    <el-menu-item index><router-link tag="li" to="/login" active-class="active">Login</router-link></el-menu-item>
    <el-menu-item index><router-link tag="li" to="/register" active-class="active">Register</router-link></el-menu-item>
    </template>
  </el-menu>
</template>

<script>
export default {
  computed: {
    user () {
      return this.$store.getters.user
    }
  }
}
</script>

<style scoped>
.active {
  color: #409EFF;
}
</style>
