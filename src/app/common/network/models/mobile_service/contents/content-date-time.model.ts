import { IMediaElementContent } from './media-element-content.interface';

/**	DateTimeContent (日期时间项)	*/
export class DateTimeContent implements IMediaElementContent {
  /**
   * String
   * 日期时间格式
   * YYYY-MM-DD
   * YYYY年-MM月-DD日
   * YYYY-MM-DD HH:mm:ss
   * YYYY年-MM月-DD日 HH:mm:ss
   * HH:mm:ss
   * 等
   * M
   **/
  Format!: string;
  /**	String	字体颜色，ARGB。例如：FF00FFFF	M	*/
  FontColor!: string;
  /**	Double	字体大小，[Android系统提供范围]	M	*/
  FontSize!: number;
  /**	String	字体类型名称，[Android系统提供范围]	O	*/
  FontFamily?: string;
  /**	String	字体类型文件路径，一般是TTF文件	O	*/
  FontFamilyFile?: string;
  /**
   * String
   * 字体样式：
   * 粗体、斜体、下划线等。
   * [Android系统提供范围]
   * O
   **/
  FontStyle?: string;
}
