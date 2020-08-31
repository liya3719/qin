/*
 * @description: 模板列表服务
 * @version: 1.0.0
 * @Author: liya
 * @Date: 2020-08-28 11:07:26
 * @LastEditors: liya
 * @LastEditTime: 2020-08-31 19:27:32
 */
import { Service, Inject } from 'typedi';
import { ITemplateInterface } from '../interface/services/ITemplateInterface';
import { IDataAccess } from '../interface/dataAccess/IDataAccess';

@Service('templateService')
export class TemplateService implements ITemplateInterface {
  @Inject('dataAccess')
  dataAccessInstance: IDataAccess;
  /**
   * @description 获取模板列表
   */
  async getTemplateList(): Promise<{errStr: string, errNo: number, data: any}> {
    return {
      errStr: 'success',
      errNo: 0,
      data: [{
        template_id: 1,
        template_name: 'test',
        template_cover: 'http://5b0988e595225.cdn.sohucs.com/images/20190920/b0360d43b0b1492bbea76c035ceead7a.jpeg',
        template_editor: 'liya',
        template_date: '2020/08/31 17:48:00',
        is_collect: 1,  // 1代表已收藏
      },{
        template_id: 2,
        template_name: 'test',
        template_cover: 'http://5b0988e595225.cdn.sohucs.com/images/20190920/b0360d43b0b1492bbea76c035ceead7a.jpeg',
        template_editor: 'liya',
        template_date: '2020/08/31 17:48:00',
        is_collect: 0,  // 0代表未收藏
      },{
        template_id: 3,
        template_name: 'test',
        template_cover: 'http://5b0988e595225.cdn.sohucs.com/images/20190920/b0360d43b0b1492bbea76c035ceead7a.jpeg',
        template_editor: 'liya',
        template_date: '2020/08/31 17:48:00',
        is_collect: 0,  // 0代表未收藏
      }]
    }
  }
}