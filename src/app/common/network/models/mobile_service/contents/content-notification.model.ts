import { IMediaElementContent } from './media-element-content.interface';

/**	NotificationContent (通知项)	*/
export class NotificationContent implements IMediaElementContent {
  /**	String	文本内容。最长256个汉字。如果超出则使用文件方式	M	*/
  Text!: string;
  /**	String	文本文件路径	O	*/
  TextFileUrl?: string;
  /**	Double	每秒多少个字或行	O	*/
  RollingInterval?: number;
  /**
   * Int32
   * 滚动方向
   * 1：从左到右
   * 2：从右到左
   * 3：从上到下
   * 4：从下到上
   * O
   **/
  RollingType?: number;
}
