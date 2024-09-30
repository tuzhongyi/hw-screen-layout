import { IIdModel } from '../common/model.interface';

/**	ScreenLayoutElement (智能屏幕布局项)	*/
export class ScreenLayoutElement implements IIdModel<number> {
  /**	Int32	布局元素ID，从1开始	M	*/
  Id!: number;
  /**	Int32	列 (纵向)，从1开始	M	*/
  Column!: number;
  /**	Int32	行 (横向)，从1开始	M	*/
  Row!: number;
  /**	Int32	跨的列数，默认：1行	M	*/
  SpanColumn!: number;
  /**	Int32	跨的行数，默认：1行	M	*/
  SpanRow!: number;
  /**	UInt32	背景颜色，ARGB。例如：FF00FFFF	O	*/
  BackgroundColor?: bigint;
  /**	String	背景图片地址	O	*/
  BackgroundImageUrl?: string;
  /**	String	四个方向的留白空间，默认：0,0,0,0	O	*/
  Margin?: string;
  /**	String	点击超链地址	O	*/
  AlinkUrl?: string;
  /**
   * Int32
   * 媒体类型，
   * 0：普通布局展示
   * 1：文本
   * 2：图片
   * 3：视频
   * 4：动画
   * 5：HTML网页
   * 6：实时摄像机视频
   * 7：表格
   * 8：排行榜
   * 10：日期时间
   * 11：天气预报
   * 12：滚动公告
   * M
   **/
  MediaType!: number;
  /**	String	媒体数据网络地址/ID	M	*/
  MediaUrl!: string;
}
