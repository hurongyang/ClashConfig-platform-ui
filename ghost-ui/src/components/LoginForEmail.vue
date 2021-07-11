<template>
  <div>
    <!-- 登录表单 -->
    <el-form
      ref="loginEmailFormRef"
      :model="loginEmailForm"
      :rules="loginEmailFormRules"
    >
      <el-form-item prop="email">
        <el-input
          placeholder="请输入企业邮箱"
          prefix-icon="el-icon-message"
          v-model="loginEmailForm.email"
        >
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          placeholder="请输入密码"
          type="password"
          prefix-icon="el-icon-lock"
          v-model="loginEmailForm.password"
        >
        </el-input>
      </el-form-item>
    </el-form>
    <!-- 登录 -->
    <el-button
      type="primary"
      round
      style="width: 100%"
      @click="loginForEmail('loginEmailFormRef')"
      >登录</el-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginEmailForm: {
        email: '',
        password: ''
      },
      // 表单验证规则对象
      loginEmailFormRules: {
        // 验证 email 是否合法
        email: [{ required: true, message: '请输入登录邮箱', trigger: 'blur' }],
        // 验证密码是否合法
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { min: 6, max: 20, message: '长度在 6 到 20 位之间', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 登录之前，表单规则的预验证
    loginForEmail(formName) {
      this.$refs[formName].validate((valid) => {
        if (!valid) {
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
.el-form {
  padding: 25px 0;
}
</style>
