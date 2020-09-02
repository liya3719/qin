/*
 * @description: 页面搭建控制器
 * @version: 1.0.0
 * @Author: liya
 * @Date: 2020-08-27 21:12:25
 * @LastEditors: liya
 * @LastEditTime: 2020-09-01 20:37:47
 */
import { Controller, Post } from 'routing-controllers';
import { Inject } from 'typedi';
import { IPageInterface } from '../interface/services/IPageInterface';
@Controller('/api/qin')
export class BuildController {
  @Inject('pageService')
  pageServiceInstance: IPageInterface
  /**
   * @description 页面搭建
   */
  @Post('/page/build')
  async PageBuild() {}
}