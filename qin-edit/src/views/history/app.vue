<!--
 * @description: 发布历史
 * @version: 1.0.0
 * @Author: liya
 * @Date: 2020-08-26 19:18:44
 * @LastEditors: liya
 * @LastEditTime: 2020-09-01 19:47:12
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
          width="180">
        </el-table-column>
        <el-table-column
          prop="publish_name"
          label="发布人"
          width="180">
        </el-table-column>
        <el-table-column
          prop="publish_id"
          label="发布id"
          width="180">
        </el-table-column>
        <el-table-column
          prop="publish_version"
          label="当前版本"
          width="180">
          <template slot-scope="scope">
            {{scope.row.publish_version[0]}}
          </template>
        </el-table-column>
        <el-table-column
          prop="status"
          label="当前状态"
          width="180">
        </el-table-column>
        <el-table-column
          prop="publish_time"
          label="发布时间"
          width="180">
        </el-table-column>
        <el-table-column
          label="操作"
          width="180">
          <template slot-scope="scope">
            <a href="javascript:;" class="roll-back" @click="handlerRollBack(scope.row.page_id)">回滚</a>
            <a href="javascript:;" class="discard" @click="handlerOffline(scope.row.page_id)">下线</a>
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
  mounted() {
   this.getHistoryList(); 
  }
  async getHistoryList() {
    const result = await Container.get(HistoryService).getHistoryList();
    if(result.errNo === 0) {
      this.tableData = [].concat(result.data);
      this.loading = false;
    }
  }
  /**
   * @description 回滚操作
   * @param { Number } id 当前页面id,如果当前只有一个版本，不可执行回滚操作
   */
  async handlerRollBack(id: number) {
    console.log(id);
    const result = await Container.get(HistoryService).historyRollBack(id);
    console.log(result);
  }
  /**
   * @description 下线操作,当前线上运行的版本则无法访问
   * @param { Number } id 当前页面id
   */
  async handlerOffline(id: number) {
    console.log(id);
    this.offlineId = id;
    const result = await Container.get(HistoryService).historyOffline(id);
    console.log(result);
  }
}
</script>