import { Response } from './ICommonInterface';
export interface IPageInterface {
  /**
   * 搭建页面
   * @param { string } pageType 页面类型 [小程序 or h5]
   * @param { any } paramsData 页面所需要的数据
   * @param { string } pageColumn 页面栏目
   */
  pageEdit(pageType: string, paramsData: any, pageColumn?: string): Promise<Response>;
}