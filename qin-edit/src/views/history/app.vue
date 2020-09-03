<!--
 * @description: 发布历史
 * @version: 1.0.0
 * @Author: liya
 * @Date: 2020-08-26 19:18:44
 * @LastEditors: liya
 * @LastEditTime: 2020-09-03 15:29:57
-->
<template>
  <div class="history">
    <div class="history-list" v-loading="loading">
      <el-table
        :data="tableData"
        stripe
        style="width: 100%">
        <el-table-column
          prop="page_id"
          label="页面id"
          width="80">
        </el-table-column>
        <el-table-column
          prop="page_name"
          label="页面名称">
        </el-table-column>
        <el-table-column
          prop="publish_author"
          label="发布人">
        </el-table-column>
        <el-table-column
          prop="publish_version"
          label="当前版本">
          <template slot-scope="scope">
            {{scope.row.publish_version.split(',')[0]}}
          </template>
        </el-table-column>
        <el-table-column
          prop="page_status"
          label="当前状态">
        </el-table-column>
        <el-table-column
          prop="publish_time"
          label="发布时间">
        </el-table-column>
        <el-table-column
          label="操作"
          width="180">
          <template slot-scope="scope">
            <a href="javascript:;" class="roll-back" @click="handlerRollBack(scope.row)">回滚</a>
            <a href="javascript:;" class="discard" @click="handlerOffline(scope.row)">下线</a>
            <a :href="scope.row.page_url" class="view">查看</a>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<style lang="less">
  @import './app.less';
</style>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Container, Inject } from 'typedi';
import { HistoryService } from '../../services/historyService';
@Component
export default class HistoryView extends Vue {
  private tableData:any[] = [];
  private loading: boolean = true;
  private offlineId: number = -1;
  private pageIndex: number = 1;
  private pageSize: number = 15;
  mounted() {
   this.getHistoryList(); 
  }
  async getHistoryList() {
    const result = await Container.get(HistoryService).getHistoryList(this.pageIndex, this.pageSize);
    if(result.errNo === 0) {
      this.tableData = [].concat(result.data);
      this.loading = false;
    }
  }
  /**
   * @description 回滚操作
   * @param { object } params 回滚需要的参数[页面id和指定回滚的参数]
   */
  async handlerRollBack(params: {page_id: number, publish_version: string}) {
    const id = params.page_id;
    const version = params.publish_version;
    const result = await Container.get(HistoryService).historyRollBack(id, version);
    console.log(result);
  }
  /**
   * @description 下线操作,当前线上运行的版本则无法访问
   * @param { object } params 回滚需要的参数[页面id和当前运行的版本，最新的版本]
   */
  async handlerOffline(params: {page_id: number, publish_version: string}) {
    const id = params.page_id;
    const version = params.publish_version;
    this.offlineId = id;
    const result = await Container.get(HistoryService).historyOffline(id, version);
    console.log(result);
  }
}
</script>