<template>
  <el-container>
    <!-- 侧边栏 -->
    <el-aside width="200px">
      <!-- 折叠按钮 -->
      <div class="Collapse" :isCollapse="isCollapse" @click="Collapse">
        <span class="el-icon-s-fold"></span>
      </div>
      <!-- 导航栏 -->
      <el-menu
        :uniqueOpened="true"
        default-active="0"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#565C63"
        text-color="#D7D8D9"
        active-text-color="#589EF8">
        <!-- 0 -->
        <el-menu-item index="0">
          <i class="el-icon-menu"></i>
          <template #title>首页</template>
        </el-menu-item>
        <el-submenu index="10">
          <template #title>
            <i class="el-icon-office-building"></i>
            <span>部署服务器</span>
          </template>
          <el-menu-item index="1-1">Trojan</el-menu-item>
          <el-menu-item index="1-2">Shadowsocks</el-menu-item>
          <el-menu-item index="1-3">V2ray</el-menu-item>
        </el-submenu>
        <!-- 1 -->
        <el-submenu index="1">
          <template #title>
            <i class="el-icon-cpu"></i>
            <span>服务器</span>
          </template>
          <el-menu-item index="1-1">Trojan</el-menu-item>
          <el-menu-item index="1-2">Shadowsocks</el-menu-item>
          <el-menu-item index="1-3">V2ray</el-menu-item>
        </el-submenu>
        <!-- 2 -->
        <el-menu-item index="2">
          <i class="el-icon-user-solid"></i>
          <template #title>用户</template>
        </el-menu-item>
        <!-- 3 -->
        <el-menu-item index="3">
          <i class="el-icon-s-order"></i>
          <template #title>账号</template>
        </el-menu-item>
        <!-- 4 -->
        <el-menu-item index="4">
          <i class="el-icon-s-tools"></i>
          <template #title>设置</template>
        </el-menu-item>
        <!-- 5 -->
        <el-menu-item index="5">
          <i class="el-icon-setting"></i>
          <template #title>退出</template>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <!-- Header -->
      <el-header>Header</el-header>
      <!-- Main -->
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
export default {
  data () {
    return {
      isCollapse: true
    }
  },
  methods: {
    Collapse () {
      console.log('对 isCollapse 取反')
    }
  }
}
</script>

<style scoped>
.el-container{
  margin: 0;
  padding: 0;
  height: 100%;
}
.el-aside {
  background-color: #565C63;
  height: 100%;
}
.Collapse {
  text-align: center;
  color: #D7D8D9;
  margin-top: 20px;
  /* 鼠标变小手 */
  cursor:pointer;
  /* 设置 icon 图标大小 */
  font-size: 30px;
}
.el-menu {
  width: 200px;
}
.el-header {
  background-color: #FFFFFF;
}
.el-main {
  background-color: #F8F8F8;
}
</style>
