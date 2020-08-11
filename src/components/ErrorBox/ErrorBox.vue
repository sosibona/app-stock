<template>
  <div class="error-message" v-show="error">
    <el-alert
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
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'error'
    ])
  },
  methods: {
    ...mapActions([
      'clearError'
    ]),
    closeError () {
      this.clearError()
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
