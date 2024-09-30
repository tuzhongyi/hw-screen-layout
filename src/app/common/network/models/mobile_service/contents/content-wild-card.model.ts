import { IMediaElementContent } from './media-element-content.interface';

/**	WildCardContent (通配符字段)	*/
export class WildCardContent implements IMediaElementContent {
  /**	String	数据来源HTTP地址	M	*/
  HttpAddress!: string;
  /**	String	字段路径，JSON字段的路径,如果没有填路径，默认就是根路径下的字段。	O	*/
  FieldPath?: string;
  /**	String	字段名称	M	*/
  FieldName!: string;
  /**	String	字段格式化，比如：货币，日期等格式化方式。	O	*/
  FieldFormat?: string;
}
