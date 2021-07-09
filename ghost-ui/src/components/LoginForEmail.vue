<template>
<div>
  <!-- 登录表单 -->
  <el-form ref="form" :model="form">
  <el-form-item>
    <el-input
    placeholder="请输入账号"
    prefix-icon="el-icon-user-solid"
    v-model="form.email"
    >
    </el-input>
  </el-form-item>
  <el-form-item>
    <el-input
    placeholder="请输入密码"
    prefix-icon="el-icon-lock"
    v-model="form.password"
    >
    </el-input>
  </el-form-item>
  </el-form>
  <!-- 登录 -->
  <el-button type="primary" round style="width: 100%">登录</el-button>
</div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  }
}
</script>

<style scoped>
.el-form {
  padding: 25px 0;
}
</style>
