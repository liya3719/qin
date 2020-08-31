<!--
 * @description: 页面主入口
 * @version: 1.0.0
 * @Author: liya
 * @Date: 2020-03-01 20:44:54
 * @LastEditors: liya
 * @LastEditTime: 2020-08-31 15:03:04
-->
<template>
  <div class="main">
    <el-container class="container">
      <el-aside width="200px">
        <el-menu
          class="menu">
          <el-menu-item v-for="(item, index) in menuList" :key="item.name" :index="index+''">
            <i :class="item.icon"></i>
            <router-link class="item-link" :to="item.url">
              <em>{{item.name}}</em>
            </router-link>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header class="header">
            <div class="user-wrap">李亚</div>
            <div class="user-menu__wrap">
              <div class="logout">退出</div>
            </div>
        </el-header>
        <el-main>
          <div class="navbar">
            <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>{{breadcrumb}}</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style lang="less">
@deep:~'>>>';
  html, body {
    height: 100%;
  }
  .main {
    height: 100%;
    .container {
      height: 100%;
      .header {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        background: #fff;
        .user-wrap {
          margin-right: 10px;
        }
        .user-menu__wrap {
          .logout {
            cursor: pointer;
          }
        }
      }
      .el-menu {
        height: 100%;
        .item-link {
          display: inline-block;
          width: 90%;
          &:hover {
            color: #1e1e1e;
          }
        }
        .is-active {
          a.item-link {
            color: #409EFF;
          }
        }
      }
      .el-main {
        margin: 16px;
        background: #fff;
      }
    }
  }
</style>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class App extends Vue {
  private menuList: Array<{name: string, url: string, icon: string}> = [{
    name: '模板列表',
    url: '/template/list',
    icon: 'el-icon-menu',
  },{
    name: '发布历史',
    url: '/publish/history',
    icon: 'el-icon-position',
  },{
    name: '页面搭建',
    url: '/page/edit',
    icon: 'el-icon-edit',
  }];
  private breadcrumb: string = '';
  updated() {
    this.breadcrumb = this.$route.meta.name;
  }
}
</script>