<template>
  <div class="error-message">
    <el-alert
      v-if="error"
      title="error alert"
      type="error"
      :description="error"
      show-icon
      class="error-box"
      @close="closeError"
    ></el-alert>
  </div>
</template>

<script>
export default {
  computed: {
    error () {
      return this.$store.getters.error
    }
  },
  methods: {
    closeError () {
      this.$store.dispatch('clearError')
    }
  }
}
</script>

<style scoped>
.error-message {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  width: 80%;
  height: 200px;
}

.error-box {
  height: 50px;
  line-height: 1;
  text-align: left;
}
</style>
