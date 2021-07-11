<template>
  <div class="account">
    <el-button type="primary" round>{{ msg }}</el-button>
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      default: '统一账号登录'
    }
  }
}
</script>

<style scoped>
.account {
  margin-top: 100px;
}
.el-button {
  width: 100%;
}
</style>
