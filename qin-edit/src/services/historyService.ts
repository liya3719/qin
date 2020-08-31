/*
 * @description: 
 * @version: 
 * @Author: liya
 * @Date: 2020-08-28 15:21:13
 * @LastEditors: liya
 * @LastEditTime: 2020-08-31 15:24:52
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
}