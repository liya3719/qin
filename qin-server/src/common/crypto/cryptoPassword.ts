/*
 * @description: 加解密
 * @version: 1.0.0
 * @Author: liya
 * @Date: 2020-09-18 15:17:02
 * @LastEditors: liya
 * @LastEditTime: 2020-09-18 16:03:32
 */
import {createCipher, createDecipher} from 'crypto';

export class CryptoPassword {
  private readonly secretkey: string;
  constructor() {
    this.secretkey = 'qin&ya';
  }
  /**
   * @description 加密操作
   * @param password 密码
   */
  enCrypto(password: any) {
    const cipher = createCipher('aes192', this.secretkey);
    let encrypto = cipher.update(password, 'utf8', 'hex');
    const result = cipher.final('hex');
    return encrypto += result;
  }
  /**
   * @description 解密操作
   * @param password 加密密码
   */
  deCrypto(password: any) {
    const decipher = createDecipher('aes192', this.secretkey);
    let decrypto = decipher.update(password, 'hex', 'utf8');
    const result = decipher.final('utf8');
    return decrypto += result;
  }
}