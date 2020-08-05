<template>
  <el-menu
    class="el-menu-demo"
    mode="horizontal"
  >
    <el-menu-item index><router-link tag="li" to="/" exact active-class="active" >Home</router-link></el-menu-item>
    <el-menu-item index><router-link tag="li" to="/portfolio" active-class="active">Portfolio</router-link></el-menu-item>
    <el-menu-item index><router-link tag="li" to="/stocks" active-class="active">Stocks</router-link></el-menu-item>
  </el-menu>
</template>

<script>
export default {}
</script>

<style scoped>
.active {
  color: #409EFF;
}
</style>
