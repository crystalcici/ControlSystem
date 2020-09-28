<template>
  <div class="container">
      <el-menu
         class="el-menu-vertical-demo"
         @open="handleOpen"
         @close="handleClose"
         background-color="#545c64"
         text-color="#fff"
         active-text-color="#ffd04b"
         default-active="1"
         :router="true"
      >
        <router-link to="/homeRight">
          <el-menu-item index="1">
            <i class="el-icon-s-home"></i>
            <span slot="title">模块选择</span>
          </el-menu-item>
        </router-link>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-s-operation"></i>
            <span>门禁管理</span>
          </template>
          <el-menu-item-group>
            <router-link to="/accessControl/doorStatus">
              <el-menu-item index="1-1">门状态及控制管理</el-menu-item>
            </router-link>
            <router-link to="/accessControl/doorRecord">
              <el-menu-item index="1-2">门禁开关记录</el-menu-item>
            </router-link>
            <router-link to="/accessControl/attendRecord">
              <el-menu-item index="1-3">考勤记录</el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
  </div>
</template>

<script>
export default {
  name: 'homeLeft',
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped lang="stylus">
  .container
    margin: 0;
    padding: 0;
    .el-menu-vertical-demo
      height: 877px
</style>
