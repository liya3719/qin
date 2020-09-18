/*
 * @description: 
 * @version: 
 * @Author: liya
 * @Date: 2020-08-28 15:21:13
 * @LastEditors: liya
 * @LastEditTime: 2020-09-08 15:50:08
 */
import { IHistoryInterface } from '../interface/IHistoryService';
import { Service } from 'typedi';
import { CommonService } from './commonService';
import apis from '@/api/main';
@Service('historyService')
export class HistoryService implements IHistoryInterface {
  
  getHistoryList(pageIndex: number, pageSize: number): Promise<any> {
    const result = CommonService._get(apis.historyList, {
      pageIndex,
      pageSize,
    });
    return result;
  }
  historyRollBack(pageId: number, pageVersion: string): Promise<any> {
    const result =  CommonService._post(apis.historyRollBack, {
      pageId,
      pageVersion,
    });
    return result;
  }
  historyOffline(pageId: number, pageVersion: string): Promise<any> {
    const result = CommonService._post(apis.historyOffline, {
      pageId,
      pageVersion,
    });
    return result;
  }
}