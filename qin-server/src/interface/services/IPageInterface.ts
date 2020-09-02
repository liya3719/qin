import { Response } from './ICommonInterface';
export interface IPageInterface {
  /**
   * 搭建页面
   * @param { string } pageType 页面类型 [小程序 or h5]
   * @param { any } paramsData 页面所需要的数据
   * @param { string } pageColumn 页面栏目非必填，页面类型如果是小程序，则需要选择是哪种小程序
   */
  pageEdit(pageType: string, paramsData: any, pageVersion: string, pageColumn?: string): Promise<Response>;
}