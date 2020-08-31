/*
 * @description: 
 * @version: 
 * @Author: liya
 * @Date: 2020-07-07 20:21:16
 * @LastEditors: liya
 * @LastEditTime: 2020-08-28 11:45:58
 */
import { Container, Service, Inject } from 'typedi';
import { IDataAccess } from '../interface/dataAccess/IDataAccess';
// 引入接口
import { IIndexInterface } from '../interface/services/IindexInterface';
// 引入service

// 引入数据实体

// 引入执行SQL

@Service('IndexService')
/**
 * 首页service
 * @class
 * @implements IIndexUploadService
 */
export class IndexService implements IIndexInterface {
  /**
   * 数据库操作实例
   */
  @Inject('dataAccess')
  dataAccessInstance: IDataAccess;
  index(example: any): Promise<any> {
    throw new Error("Method not implemented.");
  }
}