<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-light container-app">
          <el-container>
            <el-header>
              <div class="main">
                <div>
                  <app-navigation></app-navigation>
                </div>
                <div>
                  <app-action></app-action>
                </div>
              </div>
              <div class="main-wrapper">
              <router-view></router-view>
              </div>
              <div class="error-message">
                <el-alert v-if="error"
                  title="error alert"
                  type="error"
                  :description="error"
                  show-icon
                  class="error-box"
                  @close="closeError"
                >
                </el-alert>
              </div>
            </el-header>
          </el-container>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Navigation from './Header/Navigation.vue'
import Action from './Header/Action.vue'

export default {
  components: {
    appNavigation: Navigation,
    appAction: Action
  },
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
  /* position: fixed;
  left: 50%;
  right: 50%; */
  width: 80%;
  height: 200px;
}

.error-box {
  /* width: 80%; */
  height: 50px;
  line-height: 1;
  text-align: left;
}
.cards {
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  justify-content: space-evenly;
}
  .el-header {
    background-color: #fff;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
.main {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.container-app {
  padding: 50px;
  box-sizing: content-box;
}
.el-row:last-child() {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
