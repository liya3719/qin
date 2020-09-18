<!--
 * @description: 发布历史
 * @version: 1.0.0
 * @Author: liya
 * @Date: 2020-08-26 19:18:44
 * @LastEditors: liya
 * @LastEditTime: 2020-09-08 20:27:52
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
          label="发布版本">
          <template slot-scope="scope">
            {{scope.row.publish_version}}
          </template>
        </el-table-column>
        <el-table-column
          label="当前版本">
          <template slot-scope="scope">
            {{scope.row.current_version || scope.row.publish_version.split(',')[0]}}
          </template>
        </el-table-column>
        <el-table-column
          label="当前状态">
          <template slot-scope="scope">
            {{PAGESTATUSMAP[scope.row.page_status]}}
          </template>
        </el-table-column>
        <el-table-column
          prop="publish_time"
          label="发布时间">
        </el-table-column>
        <el-table-column
          label="操作"
          class-name="options"
          width="180">
          <template slot-scope="scope">
            <a v-if="scope.row.page_status !== 3" href="javascript:;" class="roll-back" @click="handlerComfirmRollBack(scope.row)">回滚</a>
            <a v-if="scope.row.page_status !== 3" href="javascript:;" class="discard" @click="handlerComfirmOffline(scope.row)">下线</a>
            <a :href="scope.row.page_url" target="_blank" class="view">查看</a>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog
      title="提示"
      :visible.sync="rollBackDialogVisible"
      custom-class="rollback-dialog"
      width="20%">
      <div class="rollback-dialog__wrap">
        请选择回滚版本
        <el-select v-model="rollBackVersion" placeholder="请选择回滚版本" size="mini">
          <el-option
            v-for="item in publishVersion"
            :key="item"
            :label="item"
            :value="item">
          </el-option>
        </el-select>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="rollBackDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handlerRollBack">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<style lang="less">
  @import './app.less';
</style>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Container, Inject } from 'typedi';
import { HistoryService } from '../../services/historyService';
import { UserService } from '../../services/userService';
@Component
export default class HistoryView extends Vue {
  private tableData:any[] = [];
  private loading: boolean = true;
  private rollBackDialogVisible: boolean = false;
  private rollBackParams: any = {};
  private offlineParams: any = {};
  private rollBackVersion: string = '';
  private publishVersion: string[] = [];
  private PAGESTATUSMAP = {
    1: '运行中',
    2: '已回滚',
    3: '已下线',
  };
  private pageIndex: number = 1;
  private pageSize: number = 15;
  mounted() {
    this.registry();
    this.getHistoryList(); 
  }
  async getHistoryList() {
    const result = await Container.get(HistoryService).getHistoryList(this.pageIndex, this.pageSize);
    if(result.errNo === 0) {
      this.tableData = [].concat(result.data);
      this.loading = false;
    }
  }

  handlerComfirmRollBack(params: any) {
    this.rollBackParams = Object.assign({}, params);
    this.publishVersion = params.publish_version.split(',');
    this.rollBackDialogVisible = true;
  }
  /**
   * @description 回滚操作
   * @param { object } params 回滚需要的参数[页面id和指定回滚的参数]
   */
  async handlerRollBack() {
    if(!this.rollBackVersion) {
      this.$message.warning('请选择回滚版本');
      return false;
    }
    const id = this.rollBackParams.page_id;
    const version = this.rollBackVersion.trim();
    const result = await Container.get(HistoryService).historyRollBack(id, version);
    if(result.errNo === 0) {
      this.getHistoryList();
    }
  }
  handlerComfirmOffline(params: any) {
    this.offlineParams = Object.assign({}, params);
    this.$confirm('此操作将永久下线该活动, 是否继续?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }).then(async () => {
      await this.handlerOffline();
    });
  }
  async registry() {
    const params = {
      userName: 'liya',
      userPassword: 123456,
      userPhone: 15910571395,
    };
    const result = await Container.get(UserService).registry(params);
    console.log(result);
  }
  /**
   * @description 下线操作,当前线上运行的版本则无法访问
   * @param { object } params 回滚需要的参数[页面id和当前运行的版本，最新的版本]
   */
  async handlerOffline() {
    const id = this.offlineParams.page_id;
    const version = this.offlineParams.publish_version.split(',')[0];
    const result = await Container.get(HistoryService).historyOffline(id, version);
    if(result.errNo === 0) {
      this.getHistoryList();
    };
  }
}
</script>