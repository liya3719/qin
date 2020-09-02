/*
 * @description: 
 * @version: 
 * @Author: liya
 * @Date: 2020-08-28 15:21:13
 * @LastEditors: liya
 * @LastEditTime: 2020-09-02 20:13:47
 */
import { IHistoryInterface } from '../interface/IHistoryService';
import { Service } from 'typedi';
import { CommonService } from './commonService';
import apis from '@/api/main';
@Service('historyService')
export class HistoryService implements IHistoryInterface {
  
  getHistoryList(pageIndex: number, pageSize: number): Promise<any> {
    return CommonService._get(apis.historyList, {
      pageIndex,
      pageSize,
    });
  }
  historyRollBack(pageId: number, pageVersion: string): Promise<any> {
    return CommonService._post(apis.historyRollBack, {
      pageId,
      pageVersion,
    })
  }
  historyOffline(pageId: number, pageVersion: string): Promise<any> {
    return CommonService._post(apis.historyOffline, {
      pageId,
      pageVersion,
    })
  }
}