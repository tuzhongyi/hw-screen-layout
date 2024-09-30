import { MediaElement } from '../media-element.model';
import { WildCardContent } from './content-wild-card.model';
import { IMediaElementContent } from './media-element-content.interface';

/**	TextContent (文本项)	*/
export class TextContent implements IMediaElementContent {
  /**	String	文本内容，通配符：{字段名称}Screen信息字段：[字段名称]	M	*/
  Text!: string;
  /**	String	<b>文本内容</b>，暂时不支持	O	*/
  HtmlText?: string;
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
  /**	MediaElement<WildCardContent>[]	通配符字段	O	*/
  WildCards?: MediaElement<WildCardContent>[];
}
