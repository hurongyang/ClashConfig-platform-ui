<template>
  <div class="login_border">
    <el-container>
      <el-header> ClashXPro 管理后台 </el-header>
      <el-main>
        <!-- 导航 -->
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="企业邮箱登录" name="ForEmail"><LoginForEmail /></el-tab-pane>
          <el-tab-pane label="统一账号登录" name="ForAccount"><LoginForAccount msg="长桥统一账号登录"/></el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginForAccount from '@/components/LoginForAccount.vue'
import LoginForEmail from '@/components/LoginForEmail.vue'
export default {
  components: {
    LoginForAccount,
    LoginForEmail
  },
  data () {
    return {
      activeName: 'ForEmail'
    }
  }
}
</script>

<style scoped>
@import './css/login.css';
</style>
