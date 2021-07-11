<template>
  <el-container>
    <!-- 侧边栏 -->
    <el-aside :width="isCollapse ? '64px' : '200px'">
      <!-- 折叠菜单按钮 -->
      <div class="Collapse" :isCollapse="isCollapse" @click="toggleCollapse">
        <span class="el-icon-s-fold"></span>
      </div>
      <!-- 导航栏 -->
      <el-menu
        :uniqueOpened="true"
        :collapse-transition="false"
        default-active="0"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#565C63"
        text-color="#D7D8D9"
        active-text-color="#589EF8"
        :collapse="isCollapse"
        :router="true"
      >
        <!-- 首页 -->
        <el-menu-item index="/home">
          <i class="el-icon-s-home"></i>
          <template #title>首页</template>
        </el-menu-item>
        <!-- 一级菜单 -->
        <el-submenu :index="item.id" v-for="item in menuList" :key="item.id">
          <!-- 一级菜单的模板区域 -->
          <template #title>
            <!-- 图标 -->
            <i :class=iconsObj[item.id]></i>
            <!-- 文本 -->
            <span>{{ item.authName }}</span>
          </template>
          <!-- 二级菜单 -->
          <el-menu-item
            v-for="subItem in item.children"
            :index="'/' + subItem.path"
            :key="subItem.id"
          >
            <!-- 二级菜单的模板区域 -->
            <template #title>
              <!-- 图标 -->
              <i class="el-icon-menu"></i>
              <!-- 文本 -->
              <span>{{ subItem.authName }}</span>
            </template>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <!-- Header -->
      <el-header>Header</el-header>
      <!-- Main -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
export default {
  created() {
    // 页面加载时获取左侧导航菜单列表
    this.getMenuList()
  },
  data() {
    return {
      // 是否折叠左侧菜单栏
      isCollapse: false,
      menuList: [
        {
          id: '101',
          authName: '部署管理',
          children: [
            {
              id: '200',
              authName: 'Trojan 协议',
              children: [],
              path: 'trojan'
            },
            {
              id: '201',
              authName: 'Shadowsocks 协议',
              children: [],
              path: 'ss'
            },
            {
              id: '202',
              authName: 'V2ray 协议',
              children: [],
              path: 'v2ray'
            }
          ],
          path: 'deploy'
        },
        {
          id: '102',
          authName: '服务器管理',
          children: [
            {
              id: '210',
              authName: 'Trojan 协议',
              children: [],
              path: 'trojan'
            },
            {
              id: '211',
              authName: 'Shadowsocks 协议',
              children: [],
              path: 'ss'
            },
            {
              id: '212',
              authName: 'V2ray 协议',
              children: [],
              path: 'v2ray'
            }
          ],
          path: 'server'
        },
        {
          id: '103',
          authName: '用户管理',
          children: [
            {
              id: '221',
              authName: '用户列表',
              children: [],
              path: 'users'
            }
          ],
          path: 'user'
        },
        {
          id: '104',
          authName: '账号管理',
          children: [
            {
              id: '231',
              authName: '账号列表',
              children: [],
              path: 'accounts'
            }
          ],
          path: 'account'
        },
        {
          id: '105',
          authName: '设置',
          children: [
            {
              id: '241',
              authName: 'OIDC',
              children: [],
              path: 'oidc'
            },
            {
              id: '242',
              authName: '邮箱设置',
              children: [],
              path: 'email'
            }
          ],
          path: 'settings'
        }
      ],
      iconsObj: {
        0: 'el-icon-s-home',
        1: 'el-icon-menu',
        101: 'el-icon-office-building',
        102: 'el-icon-cpu',
        103: 'el-icon-user-solid',
        104: 'el-icon-s-order',
        105: 'el-icon-s-tools'
      }
    }
  },
  methods: {
    // async getMenuList() {
    //   // 请求后台的 menus 接口
    //   const { data: res } = await this.$http.get('menus')
    //   console.log(res)
    // },
    getMenuList() {
      console.log('需要请求服务器 menus 接口获取左侧导航菜单列表')
    },
    toggleCollapse() {
      this.isCollapse = !this.isCollapse
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
.el-container {
  margin: 0;
  padding: 0;
  height: 100%;
}
.el-aside {
  background-color: #565c63;
  height: 100%;
}
.Collapse {
  text-align: center;
  color: #d7d8d9;
  margin-top: 20px;
  /* 鼠标变小手 */
  cursor: pointer;
  /* 设置 icon 图标大小 */
  font-size: 30px;
}
.el-menu {
  width: 200px;
}
.el-header {
  background-color: #ffffff;
}
.el-main {
  background-color: #f8f8f8;
}
</style>
