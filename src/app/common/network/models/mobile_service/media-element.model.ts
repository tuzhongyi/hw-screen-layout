import { IIdNameModel } from '../common/model.interface';
import { IMediaElementContent } from './contents/media-element-content.interface';

/**	MediaElement<T> (媒体项)	*/
export class MediaElement<T extends IMediaElementContent>
  implements IIdNameModel
{
  /**	String	元素ID	M	*/
  Id!: string;
  /**	String	元素名称	M	*/
  Name!: string;
  /**
   * Int32
   * 元素类型：
   * 1：文本
   * 2：图片
   * 3：视频
   * 4：动画
   * 5：HTML网页
   * 6：实时摄像机视频
   * 7：表格
   * 8：排行榜
   * 9：通配符
   * 10：日期时间
   * 11：天气预报
   * 12：滚动公告
   * M
   **/
  ElementType!: number;
  /**	TextContent	媒体数据内容	O	*/
  Content?: T;
}
