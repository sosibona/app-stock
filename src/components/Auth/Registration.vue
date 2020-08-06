<template>
  <div class="form">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
      <el-form-item prop="email" label="Email" required>
        <el-input type="email" v-model="ruleForm.email"></el-input>
      </el-form-item>
      <el-form-item label="Password" prop="pass" required>
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="Confirm" prop="checkPass" required>
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :loading="loading" @click="submitForm('ruleForm')">Register</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password again'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('Two password don\'t match!'))
      } else {
        callback()
      }
    }
    var validateEmail = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input email address'))
      } else if (!/.+@.+\..+/.test(value)) {
        callback(new Error('Please input correct email address'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        email: '',
        pass: '',
        checkPass: ''
      },
      rules: {
        email: [
          { validator: validateEmail, trigger: 'blur' }
        ],
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const newUser = {
            email: this.ruleForm.email,
            password: this.ruleForm.pass
          }
          this.$store.dispatch('registrationUser', newUser)
            .then(() => {
              this.$router.push('/')
            })
            .catch((err) => console.log(err))
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
.form {
  width: 400px;
  margin: auto;
  margin-top: 50px;
}
</style>
