<template>
  <div class="container">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item
        v-for="(item,index) in breadList"
        :key="index"
        :to="{ path: item.path }"
      >{{item.name}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  data () {
    return {
      breadList: [] // 路由集合
    }
  },
  watch: {
    $route () {
      this.getBreadcrumb()
    }
  },
  methods: {
    getBreadcrumb () {
      let matched = this.$route.matched
      let res = matched.slice(1)
      this.breadList = res
    }
  },
  created () {
    this.getBreadcrumb()
  }
}
</script>

<style scoped lang="stylus">
</style>
