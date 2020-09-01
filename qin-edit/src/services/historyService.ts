/*
 * @description: 
 * @version: 
 * @Author: liya
 * @Date: 2020-08-28 15:21:13
 * @LastEditors: liya
 * @LastEditTime: 2020-09-01 19:46:06
 */
import { IHistoryInterface } from '../interface/IHistoryService';
import { Service } from 'typedi';
import { CommonService } from './commonService';
import apis from '@/api/main';
@Service('historyService')
export class HistoryService implements IHistoryInterface {
  getHistoryList(): Promise<any> {
    return CommonService._get(apis.historyList, {});
  }
  historyRollBack(pageId: number): Promise<any> {
    return CommonService._post(apis.historyRollBack, {
      pageId,
    })
  }
  historyOffline(pageId: number): Promise<any> {
    return CommonService._post(apis.historyOffline, {
      pageId,
    })
  }
}