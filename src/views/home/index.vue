<template>
  <el-container style="height:100vh">
    <!-- <el-header>Header</el-header> -->
    <el-container class="box-container">

      <el-aside width="200px" class="el-aside">
        <el-menu
          default-active="1-1"
          class="el-menu-vertical-demo"
          background-color="#545c64" active-text-color="#ffd04b" text-color="#fff"
          @open="handleOpen"
          @close="handleClose"
        >
          <h3 class="titleName">农语云</h3>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>应用中心</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">水肥系统</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item> -->
        </el-menu>
      </el-aside>

      <el-main>
        <router-view></router-view>
      </el-main>

    </el-container>
  </el-container>
</template>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-aside {
  background-color: #545c64;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.titleName{
  height: 60px;
  line-height: 60px;
  font-size: 20px;
  color: #fff;
}
</style>
