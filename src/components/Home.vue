<template>
  <div class='outContainer'>
    <el-container class="container">
      <el-header class="homeHeader">智能监控平台</el-header>
      <el-container class="mainContainer">
        <el-aside>
            <home-left></home-left>
        </el-aside>
        <el-main class="homeMain">
          <home-bread class="homeBread"></home-bread>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import homeLeft from './homePages/homeLeft'
import homeBread from './homePages/homeBread'
import homeRight from './homePages/homeRight'

export default {
  components: {
    homeLeft,
    homeBread,
    homeRight
  }
}
</script>

<style scoped lang="stylus">
  .outContainer
    .container
      .homeHeader
        height: 120px;
        line-height: 60px;
        font-weight: bold;
        font-size: 20px;
        background: #00F5FF;
        color: white;
      .mainContainer
        .homeMain
          padding: 0;
          margin: 10px 0 0 5px
          .homeBread
            height: 20px;
</style>
