/*
 * @description: 页面搭建控制器
 * @version: 1.0.0
 * @Author: liya
 * @Date: 2020-08-27 21:12:25
 * @LastEditors: liya
 * @LastEditTime: 2020-08-27 21:13:34
 */
import { Controller, Get, Post } from 'routing-controllers';
@Controller('/api/qin')
export class BuildController {
  /**
   * @description 页面搭建
   */
  @Post('/page/build')
  async PageBuild() {}
}