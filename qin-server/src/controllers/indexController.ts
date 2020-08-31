/*
 * @description: 首页入口
 * @version: 1.0.0
 * @Author: liya
 * @Date: 2020-07-07 20:21:16
 * @LastEditors: liya
 * @LastEditTime: 2020-08-28 14:24:12
 */
import { Controller, Get } from 'routing-controllers';
const fs = require('fs');
const baseDir = process.cwd();

@Controller()

export class IndexController {
  /**
   * 首页
   * @return 模板内容
   */
  @Get('/index')
  async getUploadAction(): Promise<string> {
    let tplHtml: string = fs.readFileSync(`${baseDir}/web/views/index.html`).toString();
    return tplHtml;
  }
}