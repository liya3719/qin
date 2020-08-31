<!--
 * @description: 模板列表 - 通过组件生成的页面，支持编辑和收藏
 * @version: 1.0.0
 * @Author: liya
 * @Date: 2020-08-27 15:18:35
 * @LastEditors: liya
 * @LastEditTime: 2020-08-31 19:45:03
-->
<template>
  <div class="template">
    <el-tabs v-model="activeName">
      <el-tab-pane label="全部" name="all">
        <div class="template-list">
          <el-card class="template-list__item" shadow="hover" v-for="(item) in templateList" :key="item.template_id">
            <img :src="item.template_cover" class="cover" :alt="item.template_name">
            <i class="icon card-collect" :class="[item.is_collect ? 'el-icon-star-on': 'el-icon-star-off']"></i>
            <div class="template-list__body">
              <span>{{item.template_name}}</span>
              <div class="bottom clearfix">
                <time class="time">{{ item.template_date }}</time>
                <el-button type="text" class="button">编辑</el-button>
              </div>
            </div>
          </el-card>
        </div>
      </el-tab-pane>
      <el-tab-pane label="我的收藏" name="myCollect">我的收藏</el-tab-pane>
    </el-tabs>
  </div>
</template>
<style lang="less">
  @import './app.less';
</style>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { TemplateService } from '../../services/templateService';
import { Container } from 'typedi';
@Component
export default class TemplateView extends Vue {
  private templateList: any[] = [];
  private loading: boolean = true;
  private activeName: string = 'all'; //tab选中
  // 视图挂载生命周期做的事儿
  mounted() {
    this.getTemplateList();
  }
  /**
   * @description 获取模板列表信息
   * @param { void }
   * @returns  { void }
   */
  async getTemplateList() {
    const result = await Container.get(TemplateService).getTemplateList();
    if(result.errNo === 0) {
      this.templateList = [].concat(result.data);
      this.loading = false;
    };
    console.log(result);
  }
  /**
   * @description 设为我的收藏
   * @param { number } id 模板id
   */
  async handlerSettingCollect(id) {
    const result = await Container.get(TemplateService).setTemplateCollect(id);
    console.log(result);
  }
}
</script>