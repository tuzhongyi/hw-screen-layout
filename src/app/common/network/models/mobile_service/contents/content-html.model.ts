import { IMediaElementContent } from './media-element-content.interface';

/**	HtmlContent (网页项)	*/
export class HtmlContent implements IMediaElementContent {
  /**	String	网页地址	M	*/
  Url!: string;
  /**	String	认证Token或头	O	*/
  Authorization?: string;
}
