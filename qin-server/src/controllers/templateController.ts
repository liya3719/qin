/*
 * @description: 模板列表控制器
 * @version: 1.0.0
 * @Author: liya
 * @Date: 2020-08-27 18:00:29
 * @LastEditors: liya
 * @LastEditTime: 2020-09-08 19:48:19
 */
import { JsonController, Get, Post, BodyParam, QueryParam } from 'routing-controllers';
import { Inject } from 'typedi';
import { ITemplateInterface }  from '../interface/services/ITemplateInterface';

@JsonController('/api/qin/template')
export class TemplateController {
  @Inject('templateService')
  templateServiceInstance: ITemplateInterface
  /**
   * @description 获取模板列表
   */
  @Get('/list')
  async getTemplateList(@QueryParam('type') type?: number) {
    console.log(`type ---------`, type);
    const result = await this.templateServiceInstance.getTemplateList(type);
    return result;
  }
  /**
   * @description 设为我的收藏
   */
  @Post('/collect')
  async setTemplateCollect(@BodyParam('templateId') id: number) {
    console.log(`templateId ~~~~~~`, id);
    const result = await this.templateServiceInstance.setTemplateCollect(id);
    return result;
  }
}