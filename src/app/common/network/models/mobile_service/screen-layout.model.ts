import { Transform } from 'class-transformer';
import { Color } from 'src/app/common/tools/color-tool/color.model';
import { IIdNameModel } from '../common/model.interface';
import { transformColor } from '../common/transform.model';
import { ScreenLayoutElement } from './screen-layout-element.model';

/**	ScreenLayout (智能屏幕布局)	*/
export class ScreenLayout implements IIdNameModel {
  /**	String	布局ID	M	*/
  Id!: string;
  /**	String	布局名称	M	*/
  Name!: string;
  /**	String	版本号 1.0	M	*/
  Version!: string;
  /**	Int32	总列数(纵向)	M	*/
  ColumnCount!: number;
  /**	Int32	总行数(横向)	M	*/
  RowCount!: number;
  /**	UInt32	背景颜色，ARGB。例如：FF00FFFF	O	*/
  @Transform(transformColor)
  BackgroundColor: Color = {
    red: 0,
    green: 0,
    blue: 0,
    alpha: 1,
  };
  /**	String	背景图片地址	O	*/
  BackgroundImageUrl?: string;
  /**	ScreenLayoutElement[]	布局元素数组	O	*/
  Elements?: ScreenLayoutElement[];
}
