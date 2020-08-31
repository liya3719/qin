/*
 * @description: 模板列表控制器
 * @version: 1.0.0
 * @Author: liya
 * @Date: 2020-08-27 18:00:29
 * @LastEditors: liya
 * @LastEditTime: 2020-08-31 17:58:10
 */
import { Controller, Get, Post } from 'routing-controllers';
import { Inject } from 'typedi';
import { ITemplateInterface }  from '../interface/services/ITemplateInterface';
@Controller('/api/qin')
export class TemplateController {
  @Inject('templateService')
  templateServiceInstance: ITemplateInterface
  /**
   * @description 获取模板列表
   */
  @Get('/template/list')
  async getTemplateList() {
    const result = await this.templateServiceInstance.getTemplateList();
    return result;
  }
  /**
   * @description 通过模板创建页面
   */
  @Post('/template/build')
  async templateBuild() {}
}