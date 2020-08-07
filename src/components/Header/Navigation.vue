<template>
  <el-menu :default-active="$route.path" active-text-color="#409eff" class="el-menu-demo" mode="horizontal" router>
    <template v-if="user">
      <el-menu-item index="/">Home</el-menu-item>
      <el-menu-item index="/portfolio">Portfolio</el-menu-item>
      <el-menu-item index="/stocks">Stocks</el-menu-item>
    </template>
    <template v-else>
      <el-menu-item index="/login">Login</el-menu-item>
      <el-menu-item index="/register">Register</el-menu-item>
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
</style>
